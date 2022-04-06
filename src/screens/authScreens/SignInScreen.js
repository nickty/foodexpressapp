import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useRef, useState } from 'react'
import Header from '../../components/Header'
import { colors, parameters, titleHead } from '../../global/styles'
import * as Animatable from 'react-native-animatable'
import { Button, ButtonGroup, Icon, SocialIcon } from 'react-native-elements'


const SignInScreen = ({title}) => {

    const [textInput2Focused, setTextInput2Focussed] = useState(false)

    const textInput1 = useRef(1)
    const textInput2 = useRef(2)

  return (
      
    <View style={styles.container}>
      <Header title="My Account" type='arrow-left' />
      <View style={{marginLeft: 20, marginTop: 10}}>
        <Text style={titleHead}>Sign-In</Text>
      </View>
      <View style={{alignItems: "center", marginTop: 10}}>
          <Text style={styles.text1}>Please enter email and password</Text>
          <Text style={styles.text1}>Registered with your account</Text>
      </View>
      <View style={{marginTop: 20}}>
          <View>
              <TextInput style={styles.TextInput1} placeholder="Email" ref={textInput1} />
          </View>
          <View style={styles.TextInput2}>
            <Animatable.View animation={textInput2Focused ? "" : "fadeInRight"} duration={400}>
                <Icon name='lock' iconStyle={{color: colors.grey3}} type="material" />
            </Animatable.View>
            <TextInput onFocus={ () => setTextInput2Focussed(false)} onBlur={
                () => setTextInput2Focussed(true)
            } style={{width: "80%"}} placeholder='Password' ref={textInput2} />
            <Animatable.View animation={textInput2Focused ? "" : "fadeInLeft"} duration={400}>
                <Icon name='visibility-off' style={{marginRight: 16}} iconStyle={{color: colors.grey3}} type="material" />
            </Animatable.View>
          </View>
          

      </View>
        <View style={{marginHorizontal: 20, marginTop: 15}}>
              <Button title="SIGN IN" buttonStyle={parameters.styleedButton} titleStyle={parameters.buttonTitle} />
        </View>
        <View style={{alignItems: 'center', marginTop: 20}}>
            <Text style={{...styles.text1, textDecorationLine: "underline"}}>Forgot Password?</Text>
        </View>

        <View style={{alignItems: 'center', marginTop: 20, marginBottom: 20}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>OR</Text>
        </View>

        <View style={{marginHorizontal: 10, marginTop: 10}}>
            <SocialIcon onPress={() => {}} title='Sing in With Facebook' button type='facebook' style={styles.SocialIcon} />
        </View>
        <View style={{marginHorizontal: 10, marginTop: 10}}>
            <SocialIcon onPress={() => {}} title='Sing in With Google' button type='google' style={styles.SocialIcon} />
        </View>

        <View style={{marginTop: 25, marginLeft:20}}>
            <Text style={{...styles.text1}}>New To GJC</Text>
        </View>

        <View style={{alignItems: 'flex-end', marginHorizontal: 20}}>
            <Button title="Create an account" buttonStyle={styles.createButton} titleStyle={styles.createButtonTitle} />
        </View>

    </View>
  )
}

export default SignInScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
    }, 
    text1: {
        color: colors.grey3,
        fontSize: 16
    }, 
    TextInput1: {
        borderWidth: 1,
        borderColor: "#86939e", 
        marginHorizontal:20,
        borderRadius:12,
        marginBottom:20,
        paddingLeft:16
    }, 
    TextInput2: {
        borderWidth: 1,
        borderRadius:12,
        marginHorizontal:20,
        borderColor:'#86939e',
        flexDirection:"row",
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        paddingLeft: 16
    }, 
    SocialIcon: {
        borderRadius: 12,
        height: 50
    },
    createButton: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#ff8c52",
        height:40,
        paddingHorizontal:20
    },
    createButtonTitle: {
        color: '#ff8c52',
        fontSize: 16,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center', 
        marginTop: -3
    }
})