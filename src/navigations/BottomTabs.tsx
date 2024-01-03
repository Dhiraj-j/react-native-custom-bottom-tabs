import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Categories from '../screens/Categories';
import Favourite from '../screens/Favourite';
import More from '../screens/More';
import AnimatedTabBar from '../components/AnimatedTabBar';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
type Props = {};

const {Navigator, Screen, Group} = createBottomTabNavigator();
const BottomTabs = (props: Props) => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <AnimatedTabBar {...props} />}>
      <Screen
        name="Home"
        options={{
          tabBarIcon: active =>
            active ? (
              <Ionicons name="home" color="yellow" size={30} />
            ) : (
              <Ionicons name="home-outline" color="black" size={30} />
            ),
        }}
        component={Home}
      />
      <Screen
        name="Categories"
        options={{
          tabBarIcon: active =>
            active ? (
              <MaterialCommunityIcons
                style={styles.categoryIcon}
                name="gamepad-circle"
                color="yellow"
                size={30}
              />
            ) : (
              <MaterialCommunityIcons
                name="gamepad-circle-outline"
                style={styles.categoryIcon}
                color="black"
                size={30}
              />
            ),
        }}
        component={Categories}
      />
      <Screen
        name="Favourite"
        options={{
          tabBarIcon: active =>
            active ? (
              <Ionicons name="heart" color="yellow" size={30} />
            ) : (
              <Ionicons name="heart-outline" color="black" size={30} />
            ),
        }}
        component={Favourite}
      />
      <Screen
        name="More"
        options={{
          tabBarIcon: active => (
            <MaterialCommunityIcons
              name="dots-vertical"
              color={active ? 'yellow' : 'black'}
              size={30}
            />
          ),
        }}
        component={More}
      />
    </Navigator>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  categoryIcon: {
    transform: [{rotate: '45deg'}],
  },
});
