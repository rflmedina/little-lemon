import React from 'react';
import { Text, View } from 'react-native';

export default function Header() {
  return (
    (<View style={{
      backgroundColor: '#F4CE14',
      flex: 0.1,
      }}>
      <Text
        style={{
          padding: 20,
          fontSize: 28,
          color: 'black',
          textAlign: 'center',
        }}
      >Little Lemon</Text>
    </View>)
  );
}
