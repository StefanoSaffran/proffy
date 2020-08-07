/* eslint-disable react/style-prop-object */
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const App: React.FC = () => {
  return (
    <View>
      <Text>Hello nlw</Text>
      <StatusBar style="auto" backgroundColor="transparent" translucent />
    </View>
  );
};
