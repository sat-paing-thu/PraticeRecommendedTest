import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CardItem from './CardItem';

export default function Card({card}) {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 16,
            color: '#fff',
            fontWeight: 600,
          }}>
          Mondai {card.mondai}
        </Text>
      </View>
      <View style={styles.cardContainer}>
        {card.practice_set.map((item, index) => (
          <CardItem item={item} index={index} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 'auto',
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 5,
    marginBottom: 20,
  },
  cardHeader: {
    paddingVertical: 15,
    backgroundColor: '#DAAFCB',
  },
  cardContainer: {
    padding: 16,
  },
});
