import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../theme/Colors';
import {FONTSIZE} from '../theme/FontStyle';

type Props = {};

const Favourite = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: FONTSIZE.h1, color: COLORS.BLACK100}}>
        Favourite
      </Text>
    </View>
  );
};

export default Favourite;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BLACK10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
