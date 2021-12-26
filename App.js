// For io or mobile device
// it is fully perfect
// with its scss.

import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import Header from './components/Header';
import Footer from './components/Footer';

// or any pure javascript modules available in npm
// import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
      </View>

      <View style={styles.footer}>
        <Footer />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'gainsboro',
  },

  header: {
    flex: 4,
    backgroundColor: '#7a7a52',
    alignItems: 'center',
  },

  footer: {
    flex: 6,
  },
});
