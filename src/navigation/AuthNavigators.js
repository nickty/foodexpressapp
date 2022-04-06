import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator, TransitionPresets} from '@react-navigation/stack'
import SignInWelcome from '../screens/authScreens/SignInWelcome'
import SignInScreen from '../screens/authScreens/SignInScreen'

const AuthStack = createStackNavigator()

const AuthNavigators = () => {
  return (
    <AuthStack.Navigator>
        <AuthStack.Screen
            name='SignInWelcomeScreen'
            component={SignInWelcome}
            options={{
                headerShown: false,
                ...TransitionPresets.RevealFromBottomAndroid
            }}
        />
        <AuthStack.Screen
            name='SignInScreen'
            component={SignInScreen}
            options={{
                headerShown: false,
                ...TransitionPresets.RevealFromBottomAndroid
            }}
        />
    </AuthStack.Navigator>
  )
}

export default authNavigators

const styles = StyleSheet.create({})