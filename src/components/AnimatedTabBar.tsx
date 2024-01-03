import {LayoutChangeEvent, StyleSheet, Text, View} from 'react-native';
import React, {useReducer} from 'react';
import {ClipPath, Defs, Mask, Path, Rect, Svg} from 'react-native-svg';
import Animated, {
  useAnimatedProps,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';
import {COLORS} from '../theme/Colors';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import SingleTab from './SingleTab';
import {SCREEN_WIDTH} from '../theme/Screen';

const AnimatedSvg = Animated.createAnimatedComponent(Svg);

const AnimatedTabBar = ({
  state: {index: activeIndex, routes},
  navigation,
  descriptors,
}: BottomTabBarProps) => {
  const {bottom} = useSafeAreaInsets();

  const reducer = (state: any, action: {x: number; index: number}) => {
    return [...state, {x: action.x, index: action.index}];
  };

  const [layout, dispatch] = useReducer(reducer, []);
  console.log(layout);
  const handleLayout = (event: LayoutChangeEvent, index: number) => {
    dispatch({x: event.nativeEvent.layout.x, index});
  };

  const xOffset = useDerivedValue(() => {
    if (layout.length !== routes.length) return 0;
    return [...layout].find(({index}) => index === activeIndex)?.x - 25;
  }, [activeIndex, layout]);

  const animatedStyles = useAnimatedProps(() => {
    return {
      transform: [{translateX: withTiming(xOffset.value, {duration: 250})}],
    };
  });

  return (
    <View style={[styles.tabBarContainer, {paddingBottom: bottom}]}>
      <AnimatedSvg
        width={SCREEN_WIDTH}
        height={60}
        fill="none"
        animatedProps={animatedStyles}
        // style={styles.activeBG}
      >
        <Path
          fill={COLORS.BLACK10}
          d="M20 0H0c11.046 0 20 8.953 20 20v5c0 19.33 15.67 35 35 35s35-15.67 35-35v-5c0-11.045 8.954-20 20-20H20z"
        />
      </AnimatedSvg>
      <View style={styles.tabs}>
        {routes.map((route, index) => {
          const active = index === activeIndex;
          const option = descriptors[route.key].options;
          return (
            <SingleTab
              key={route.key}
              active={active}
              options={option}
              onLayout={e => handleLayout(e, index)}
              onPress={() => {
                navigation.navigate(route.name);
              }}
            />
          );
        })}
      </View>
    </View>
  );
};

export default AnimatedTabBar;

const styles = StyleSheet.create({
  tabBarContainer: {
    height: 70,
    backgroundColor: COLORS.BLACK1,
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    position: 'absolute',
    width: '100%',
  },
  activeBG: {},
});
