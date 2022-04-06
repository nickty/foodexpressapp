import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useRef, useState } from 'react'
import Header from '../../components/Header'
import { colors } from '../../global/styles'
import * as Animatable from 'react-native-animatable'
import { Icon } from 'react-native-elements'

const SignInScreen = ({title}) => {

    const [textInput2Focused, setTextInput2Focussed] = useState(false)

    const textInput1 = useRef(1)
    const textInput2 = useRef(2)

  return (
    <View style={styles.container}>
      <Header title="My Account" type='arrow-left' />
      <View style={{marginLeft: 20, marginTop: 10}}>
        <Text style={title}>Sign-In</Text>
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
    }
})