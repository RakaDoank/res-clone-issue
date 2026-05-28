import {
  useEffect,
} from "react"

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  useEffect(() => {
    fetch("https://httpbin.io/get")
      .then(async firstRes => {
        const secondRes = firstRes.clone()
        const thirdRes = firstRes.clone()
        const json = await thirdRes.json()

        console.log("CHECK ::", firstRes.bodyUsed, secondRes.bodyUsed, thirdRes.bodyUsed)
      })
  }, [])

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
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
