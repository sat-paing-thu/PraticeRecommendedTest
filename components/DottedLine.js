import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function DottedLine({isHorizontal}) {
  return (
    <View
      style={[
        styles.line,
        {transform: isHorizontal ? 'rotate(90deg)' : 'rotate(0deg)'},
      ]}></View>
  );
}

const styles = StyleSheet.create({
  line: {
    borderWidth: 1,
    borderStyle: 'dashed',

    position: 'relative',
    left: 25,
  },
});
