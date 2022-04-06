import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, parameters } from '../../global/styles'
import Swiper from 'react-native-swiper'
import { Button } from 'react-native-elements'

const SignInWelcome = () => {
  return (
      <View style={{flex:1}}>
        <View style={{flex:3, justifyContent: 'flex-start', alignItems: 'center', paddingTop:20}}>
            <Text style={{fontSize:26,color: colors.buttons, fontWeight: 'bold'}}>Descover Restaurants</Text>
            <Text style={{fontSize:26,color: colors.buttons, fontWeight: 'bold'}}>In your area</Text>
        </View>

        <View style={{flex:4, justifyContent: 'center'}}>
            <Swiper autoplay={true}>
                <View style={styles.slide1}>
                    <Image
                    style={{height:"100%", width: '100%'}}
                        source={{uri:"https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?cs=srgb&dl=pexels-ella-olsson-1640777.jpg&fm=jpg"}}
                    />
                </View>
                <View style={styles.slide2}>
                    <Image
                    style={{height:"100%", width: '100%'}}
                        source={{uri:"https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?cs=srgb&dl=pexels-ella-olsson-1640777.jpg&fm=jpg"}}
                    />
                </View>
                <View style={styles.slide3}>
                    <Image
                    style={{height:"100%", width: '100%'}}
                        source={{uri:"https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?cs=srgb&dl=pexels-ella-olsson-1640777.jpg&fm=jpg"}}
                    />
                </View>
            </Swiper>
        </View>
        <View style={{flex:4, justifyContent: 'flex-end'}}>
            <View style={{marginHorizontal: 20, marginTop: 30}}>
                <Button title="SIGN IN" buttonStyle={parameters.styleedButton} titleStyle={parameters.buttonTitle} />
            </View>
            <View style={{marginHorizontal: 20}}>
            <Button title="Create an account" buttonStyle={styles.createButton} titleStyle={styles.createButtonTitle} />
        </View>
        </View>
      </View>
    
  )
}

export default SignInWelcome

const styles = StyleSheet.create({
    slide1: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9dd6eb'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: '#97cae5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: '#92bbd9'
    },
    createButton: {
        marginTop: 20,
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