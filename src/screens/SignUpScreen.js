//Sign up screen allowing a user to create an account
import React, { useState } from 'react';
import {StyleSheet,View,TextInput,TouchableOpacity,
Image,Text, Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import logo from './../../images/logo.png';
import ellipsepink from './../../images/ellipsepink.png';
import leftarrow from './../../images/leftarrow.png';
import ellipsegrey from './../../images/ellipsegrey.png';
import DrawerNavigation from '../../navigation/DrawerNavigation';

//Method that sets the users information to null while awaiting user input
const SignUpScreen =  ({navigation}) => {
  const [email, setEmail] = useState("");
  const [name,setName] = useState("");
  const [phone,setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  //Checking to make sure all fields are entered. If a field is missing an alert is thrown prompting the user to enter that information
  const register = async () => {
    if(!phone) {
      Alert.alert("Please enter your phone number");
    }
    if(!name) {
      Alert.alert("Please enter your name");
    }
    if(!email) {
      Alert.alert("Please enter email");
      return
    }
    else if (!password) {
      Alert.alert("Please enter password");
      return
    }
    else if (password != confirmPassword) {
      Alert.alert("Passwords does not match");
      return
    }
    //checking to see if an account already exists with the email prompted
    try {
      const signInMethods = await auth().fetchSignInMethodsForEmail(email);
      if (signInMethods.length > 0) {
        Alert.alert('Email already exists');
        return;
      }
  //calling for program to register new user
      registerUser(email, password, name, phone);
    } catch (error) {
      console.error(error);
    }
  }
//This method stores the users information in firebase and confirms all neccesarry fields have been entered
  const registerUser = async (email, password, name, phone) => {
    try {
        let response = await auth().createUserWithEmailAndPassword(email,password)
        if(response && response.user) {
          const uid = response.user.uid;
          await response.user.updateProfile({
            displayName: name,
            phoneNumber: phone,
          });
          firestore().collection('UserData').doc(uid).set({
            email: email,
            name: name,
            phone: phone,
            password: password
          })
          navigation.navigate(DrawerNavigation)
        }
    }
    catch(e) {
      console.error(e.message)
    }
  };
  return (

    <View style = {styles.container}>

        <Image source={ellipsepink} 
          style={{position: 'absolute',
          left:-10,
          top:-10,
            }} />
  
     
        <Image source={logo} 
          style={{ position: 'absolute',
              width: 109, 
              height: 109,
              left:152,
              top:50,}} />
      

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text>   </Text>
      </View>

      <View style={styles.name}>
        <TextInput id='Name'
          style={styles.inputText}
          placeholder="Name"
          placeholderTextColor="#CBC3E3"
          onChangeText={text => setName(text)}/>
      </View>

      <View style= {styles.phoneView}>
        <TextInput
          style={styles.inputText}
          placeholder="Phone"
          placeholderTextColor="#CBC3E3"
          onChangeText={text => setPhoneNumber(text)}/>
      </View>

      <View style= {styles.emailView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          placeholderTextColor="#CBC3E3"
          onChangeText={text => setEmail(text)}/>
      </View>
      
      <View style= {styles.passwordView}>
        <TextInput
          style={styles.inputText}
          secureTextEntry
          placeholder="Password"
          placeholderTextColor="#CBC3E3"
          onChangeText={text => setPassword(text)}/>
      </View>

      <View style= {styles.confirmPasswordView}>
        <TextInput
          style={styles.inputText}
          secureTextEntry
          placeholder="Confirm Password"
          placeholderTextColor="#CBC3E3"
          onChangeText={text => setConfirmPassword(text)}/>
      </View>

      <View>
        <TouchableOpacity
          style={styles.signupBtn}
          onPress= {register}>
          <Text style={styles.forgotAndSignUpText}>Sign Up</Text>
           
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>navigation.pop()}>
        <Image source={leftarrow} 
          style={{ width: 50, 
            height: 50,
            left:10,top:670}} />
           
      </TouchableOpacity>

      <Image source={ellipsegrey} 
        style={{position: 'absolute',
          right:0,
          top:635}}/>
      </View>

    </View>
    );
    }
    //styles for the sign up sheet
    const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#B6B7E5',
    },

    name:{
    position: 'absolute',
    left: 30,
    top: 194,
    width:330,
    backgroundColor:"#FFFFFF",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
    },

    phoneView:{
      position: 'absolute',
      left: 30,
      top: 260,
      width:330,
      backgroundColor:"#FFFFFF",
      borderRadius:25,
      height:50,
      marginBottom:20,
      justifyContent:"center",
      padding:20
    },

    emailView:{
      position: 'absolute',
      left:30,
      top:326,
      width:330,
      backgroundColor:"#FFFFFF",
      borderRadius:25,
      height:50,
      marginBottom:20,
      justifyContent:"center",
      padding:20
    },

    passwordView:{
      position: 'absolute',
      left:30,
      top:390,
      width:330,
      backgroundColor:"#FFFFFF",
      borderRadius:25,
      height:50,
      marginBottom:20,
      justifyContent:"center",
      padding:20
    },

    confirmPasswordView:{
      position: 'absolute',
      left: 30,
      top:455,
      width:330,
      backgroundColor:"#FFFFFF",
      borderRadius:25,
      height:50,
      marginBottom:20,
      justifyContent:"center",
      padding:20
    }, 


    inputText:{
    height:50,
    color:"black"
    },

    signupBtn:{
      position: "absolute",
      right:145,
      top:530, 
      width:115,
      backgroundColor:"#884E7D",
      borderRadius:25,
      height:55,
      alignItems:"center",
      justifyContent:"center",
      },
  });
  export default SignUpScreen;