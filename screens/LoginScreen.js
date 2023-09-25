import React, {useState} from 'react'
import {KeyboardAvoidingView,  StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native'

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  return (
    <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
    >
        {/*This view is for text files email and password*/}
        <View style={styles.inputContainer}>
            <TextInput
                placeholder='Email'
                value={email}
                onChangeText={text => setEmail(text)}
                style={styles.input}
            />
            <TextInput
                placeholder='Password'
                value={password}
                onChangeText={text => setPassword(text)}
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
                <Text style={styles.buttonText}>Login</Text>
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
        width: '80%'
    }, 
    input: {
        backgroundColor: "white",
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 15
    }, 
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    }, 
    button: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 30,
        alignItems: 'center'
    }, 
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 7,
        borderColor: '#0782F9',
        borderWidth: 1

    }, 
    buttonText: {
        color: 'white',
        fontWeight: '800',
        fontSize: 17
    },
    buttonOutlineText: {
        color: '#0782F9',
        fontWeight: '800',
        fontSize: 17
    }
})