import React, {useState } from 'react';
import {SafeAreaView,StyleSheet,View,TextInput,TouchableOpacity,
Image,Text,Alert} from 'react-native';
import { firebase } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import hamburger from './../../images/hamburger.png';
import ellipsepink from './../../images/ellipsepink.png';
import ellipsegrey from './../../images/ellipsegrey.png';
import DrawerNavigation from '../../navigation/DrawerNavigation';
import CampusSideSelectionScreen from './CampusSideSelectionScreen';


const DriverApplication =  ({navigation}) => {
  const [email, setEmail] = useState("");
  const [name,setName] = useState("");
  const [phone,setPhoneNumber] = useState("");
  const [UscId, setUSCID] = useState("");

  const register = () => {
    if(!email) {
      Alert.alert("Please enter your email");
    } else if(!name) {
      Alert.alert("Please enter your name");
    } else if(!phone) {
      Alert.alert("Please enter your phone number");
    } else if(!UscId) {
      Alert.alert("Please enter your UscId");
    } else { Alert.alert(
      'Confirmation',
      'Are you sure you want to submit your application?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            // Handle the OK button press here
            addData();
            Alert.alert(
              'Thank you!',
              'Thank you for submitting your application. If you are a good fit, we will contact you back through email.',
              [
                {
                  text: 'OK',
                  onPress: () => navigation.navigate(CampusSideSelectionScreen),
                },
              ],
              { cancelable: false }
            );
          },
        },
      ],
      { cancelable: false },
    )

    }
  }
  const addData = async() => {
    try {
        const user = firebase.auth().currentUser;
        const docRef = firestore().collection('DriverData').doc(user.uid);
        const doc = await docRef.get();
        if (doc.exists) {
          // If the document already exists, update it with the new data
          await docRef.update({
            Driveremail: email,
            DriverName: name,
            Driverphone: phone,
            DriverUSCID: UscId,
          });
          console.log("Driver application saved");
        } else {
          // If the document doesn't exist, create a new one with the data
          await docRef.set({
            Driveremail: email,
            DriverName: name,
            Driverphone: phone,
            DriverUSCID: UscId,
          });
        }
    
        navigation.navigate(DrawerNavigation);
      } catch (e) {
        console.error(e.message);
      }
    };

  return (
    <SafeAreaView style = {{flex: 1,backgroundColor:'#B6B7E5'}}>
      <View style={styles.container}>
        
    
        <Image source={ellipsepink} 
          style={{position: 'absolute',
            left: 0,
            top: -44}} />

            <View style = {styles.header}>              
            <TouchableOpacity style={{marginLeft:5,zIndex:1}}
            onPress = {() => {navigation.toggleDrawer()}}>
            <Image source={hamburger} 
                    style = {{ width:35, height:35}}>
                </Image>
        </TouchableOpacity>
      
      <Text style = {{marginTop: 5, fontWeight: '800', fontSize: 29, textAlign:'center', marginRight: 30,flex:1}}>
                Driver Application 
            </Text>
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
          placeholder="USC ID"
          placeholderTextColor="#CBC3E3"
          onChangeText={text => setUSCID(text)}/>
      </View>
      <View>
        
      <TouchableOpacity
                onPress = {() => {register()}}
                style={styles.signupBtn}>
                <Text style={styles.forgotAndSignUpText}>Submit Application</Text>
            </TouchableOpacity>
    
      <Image source={ellipsegrey} 
        style={{position: 'absolute',
          right:0,
          top:610}}/>
          
</View>
      </View>

    </SafeAreaView>
    );
    }

    const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#B6B7E5',
    },

    header:{
      flexDirection:'row',
      backgroundColor:'white',
      height: 40,
      borderRadius:10
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

    inputText:{
    height:50,
    color:"black"
    },

    signupBtn:{
      position: "absolute",
      right:125,
      top:440, 
      width:155,
      backgroundColor:"#884E7D",
      borderRadius:25,
      height:55,
      alignItems:"center",
      justifyContent:"center",
      },
  });
  export default DriverApplication;