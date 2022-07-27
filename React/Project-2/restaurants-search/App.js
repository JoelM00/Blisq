/*
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>!!!!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/

import { StatusBar } from "expo-status-bar"
import { View, Text, StyleSheet } from "react-native"
import Header from "./src/components/Header"

export default function App() {
  return (
    <View style={styles.container}>
      <Header></Header>
      <StatusBar></StatusBar>
    </View>
  )
}

const styles = StyleSheet.create({
  //container: {
  //  flex: 1,
  //  backgroundColor: "#fff",
  //  alignItems: "center",
  //  justifyContent: "center",
  //}
})