import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../theme/Colors';
import {FONTSIZE} from '../theme/FontStyle';

type Props = {};

const Categories = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: FONTSIZE.h1, color: COLORS.BLACK100}}>
        Categories
      </Text>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BLACK10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
