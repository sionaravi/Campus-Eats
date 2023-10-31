//Screen prompting a user to sign in with registered information through sign up
import React, {useState } from 'react';
import {SafeAreaView,StyleSheet,View,TextInput,TouchableOpacity,
Image,Text, Alert} from 'react-native';
import logo from './../../images/logo.png';
import ellipsepink from './../../images/ellipsepink.png';
import ellipsegrey from './../../images/ellipsegrey.png';
import auth from '@react-native-firebase/auth';
import DrawerNavigation from '../../navigation/DrawerNavigation';
import SignUp from './SignUpScreen';
//Assigning user email and password to the appropriate account
const SignInScreen =  ({navigation}) => {
  
  const [email,setEmail] = useState('');
  const[password,setPassword] = useState('');

//Method to make sure user has entered email and password prior to signing in
  const LoginComponent = () => {
    if(!email) {
      Alert.alert('Enter Email');
      return;
    } else if (!password && password.trim()) {
      Alert.alert('Enter password');
      return;
    } 
    doSignIn(email,password);
  };
//Method to sign in the user as well as confirm email entered has a valid format
  const doSignIn = async (email,password) => {
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      Alert.alert('Invalid email format');
      return;
    }

    try {
      let response = await auth().signInWithEmailAndPassword(email,password)
      if (response && response.user) {
        navigation.navigate(DrawerNavigation);
      }
    }
    catch(e) {
      console.error(e.message);
      Alert.alert(e.message);
    }
  }
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', backgroundColor: '#B6B7E5' }}>
      <View style={styles.container}>
        <Image source={ellipsepink} style={{ position: 'absolute', left: -29, top: 1 }} />
        <Image source={logo} style={{ width: 120, height: 120 }} />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text> </Text>
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            placeholderTextColor="#ccc"
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            secureTextEntry={true}
            placeholder="Password"
            placeholderTextColor="#ccc"
            onChangeText={(text) => setPassword(text)}
          />
          <Image source={ellipsegrey} style={{ position: 'absolute', right: -60, bottom: -420 }} />
        </View>
        <TouchableOpacity>
          <Text style={styles.forgotAndSignUpText}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={LoginComponent} style={styles.loginBtn}>
          <Text style={styles.loginText}>Sign In</Text>
          
        </TouchableOpacity>
<TouchableOpacity
onPress = {() => navigation.navigate(SignUp)}
style={styles.signupBtn}>
<Text style={styles.forgotAndSignUpText}>Sign Up</Text>
</TouchableOpacity>
</View>
</SafeAreaView>
);
}
export default SignInScreen;
//Style for sign in screen
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#B6B7E5',
alignItems: 'center',
justifyContent: 'center',
},

inputView:{
width:"80%",
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

loginText:{
color:"white",
fontSize:16
},

forgotAndSignUpText:{
color:"white",
fontSize:16
},
loginBtn:{
width:"80%",
backgroundColor:"#884E7D",
borderRadius:25,
height:50,
alignItems:"center",
justifyContent:"center",
marginTop:40,
marginBottom:10
},

signupBtn:{
  width:"80%",
  backgroundColor:"#884E7D",
  borderRadius:25,
  height:50,
  alignItems:"center",
  justifyContent:"center",
  marginTop:40,
  marginBottom:10
  },
});
