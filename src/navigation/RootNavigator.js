import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import authNavigators from './authNavigators'

const RootNavigator = () => {
  return (
    <NavigationContainer>
        <AuthNavigators />
    </NavigationContainer>
  )
}

export default RootNavigator

const styles = StyleSheet.create({})