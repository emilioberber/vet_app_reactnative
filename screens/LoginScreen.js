import React from 'react'
import {KeyboardAvoidingView,  StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const LoginScreen = () => {
  return (
    <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
    >
        {/*This view is for text*/}
        <View style={styles.inputContainer}>
            <TextInput
                placeholder='Email'
                //value={}
                //onChangeText={text =>}
                style={styles.input}
            />
            <TextInput
                placeholder='Password'
                //value={}
                //onChangeText={text =>}
                style={styles.input}
                secureTextEntry
            />
        </View>

        {/*This view is for buttons*/}
        <View style={styles.buttonContainer}>
            <TouchableOpacity
                onPress={() => {}}
                style={styles.button}
            >
                <Text style={styles.button}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => {}}
                style={[styles.button, styles.buttonOutline]}
            >
                <Text style={styles.buttonOutlineText}>Sign Up</Text>
            </TouchableOpacity>
        </View>

    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputContainer: {

    }, 
    input: {

    }, 
    buttonContainer: {

    }, 
    button: {

    }, 
    buttonOutline: {

    }, 
    buttonOutlineText: {
        
    }
})