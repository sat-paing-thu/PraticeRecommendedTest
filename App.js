import React from 'react';
import {ScrollView, StatusBar, StyleSheet} from 'react-native';
import DataJson from './assets/json/recommended-test.json';
import Card from './components/Card';

function App() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {DataJson.data.map(card => (
        <Card card={card} />
      ))}
      <StatusBar backgroundColor={'#DAAFCB'} barStyle={'dark-content'} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    marginTop: 20,
  },
});

export default App;
