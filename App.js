import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Images, Profiles } from './App/Themes';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Treender: Where trees are appreciated!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
})