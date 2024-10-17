import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native'; 
import { FirstPage } from '../components/FirstPage';

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <FirstPage/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
