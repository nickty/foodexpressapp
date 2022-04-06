import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './src/components/Header'
import { colors } from './src/global/styles'
import SignInScreen from './src/screens/authScreens/SignInScreen'
import SignInWelcome from './src/screens/authScreens/SignInWelcome'

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content' backgroundColor={colors.statusbar} />
      <SignInWelcome />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})