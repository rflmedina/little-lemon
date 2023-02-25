import React from 'react';
import { View } from 'react-native';
import Footer from './components/Footer';
import Header from './components/Header';
import Welcome from './components/Welcome';

export default function App() {
  return (
    <>
    <View
      style={{
        flex: 1,
        backgroundColor: '#495E57',
      }}>
      <Header />
      <Welcome />
    </View>
    <View style={{ backgroundColor: '#495E57' }}>
      <Footer />
    </View>
  </>
  );
}
