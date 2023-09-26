import React, {useState} from 'react'
import {KeyboardAvoidingView,  StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import { auth } from '../firebase';


const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    
    const handleSignUp = () => {
        auth()
            .createUserWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log(user.email);
            })
            .catch(error => alert(error.message))
    }
    

    /*
    const handleSignUp = () => {
        auth()
          .createUserWithEmailAndPassword(email, password)
          .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Usuario autenticado:', user.email);
            // Continuar con otras acciones después de la autenticación exitosa
        })
        .catch(error => alert(error.message));
    };
    */
    
    

    /*
    const handleSignUp = async () => {
        try {
          const response = await auth().createUserWithEmailAndPassword(email, password);
          console.log('Usuario registrado:', response.user.email);
          // Puedes redirigir al usuario a la página de inicio o hacer otras acciones aquí.
        } catch (error) {
          console.error('Error al registrar usuario:', error);
        }
    };
    */
    
  return (
    <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
    >
        {/* Main title */}
        <Text style={styles.title}>VetApp</Text>

        <Text style={styles.subtitle}>Animals Hospital Registration</Text>

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
                onPress={handleSignUp}
                style={[styles.button, styles.buttonOutline]}
            >
                <Text style={styles.buttonOutlineText}>Sign Up</Text>
            </TouchableOpacity>
        </View>

        {/* Image */}
        <Image
                source={require('../assets/pet_login.png')}
                style={styles.image}
        />

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
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#F9AE69',
        marginBottom: 10
    },
    subtitle: {
        fontSize: 18,
        color: 'gray',
        marginBottom: 30
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
        backgroundColor: '#F9AE69',
        width: '100%',
        padding: 15,
        borderRadius: 30,
        alignItems: 'center'
    }, 
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 7,
        borderColor: '#F9AE69',
        borderWidth: 1

    }, 
    buttonText: {
        color: 'white',
        fontWeight: '800',
        fontSize: 17
    },
    buttonOutlineText: {
        color: '#F9AE69',
        fontWeight: '800',
        fontSize: 17
    },
    image: {
        marginTop: 40, 
        width: '80%',
        height: 200, 
        resizeMode: 'contain', 
    }
})