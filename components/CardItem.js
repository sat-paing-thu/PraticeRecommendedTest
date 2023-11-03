import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import DottedLine from './DottedLine';

export default function CardItem({item, index}) {
  const isEven = num => num % 2;
  const handlePress = index => console.log(`Pressed test id: ${index}`);
  return (
    <Pressable
      onPress={() => handlePress(index)}
      style={[
        styles.cardCouple,
        {
          flexDirection: isEven(index) === 0 ? 'row' : 'row-reverse',
        },
      ]}>
      <View style={styles.testItem}>
        <Text
          style={{
            textAlign: 'center',
            position: 'relative',
            marginTop: '15%',
            fontSize: 15,
            fontWeight: 600,
          }}>
          {item.id}
        </Text>
      </View>
      <DottedLine isHorizontal={true} />
      {index !== 0 && (
        <View
          style={[
            styles.verticalDottedPosition,
            {right: isEven(index) === 0 ? '52%' : '38%'},
          ]}>
          <DottedLine isHorizontal={true} />
        </View>
      )}
      <View style={styles.lockStatus}>
        <Text>LO</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  testItem: {
    backgroundColor: '#daafcb',
    width: 106,
    height: 52,
    borderRadius: 10,
  },
  cardCouple: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  lockStatus: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DAAFCB',
    width: 33,
    height: 33,
    borderRadius: 20,
    position: 'absolute',
    right: '60%',
    left: '45%',
    top: 10,
  },
  verticalDottedPosition: {
    position: 'absolute',
    width: 35,
  },
});
