//Screen used to edit a users profile after it has been creared
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, SafeAreaView, Image, Alert } from 'react-native';
import leftarrow  from './../../images/leftarrow.png';
import ellipsepink from './../../images/ellipsepink.png';
import ellipsegrey from './../../images/ellipsegrey.png';
import firebase from '@react-native-firebase/app';


const EditProfile = ({ navigation }) => {
  const [name, setName] = useState('');
  const [phone, setPhoneNumber] = useState('');
  const [userData, setUserData] = useState(null);
  const [IsProfileModified, setIsProfileModified] = useState(false)

//Method to search users information in firebase and confirm that it exists
  useEffect(() => {
    try {
      const user = firebase.auth().currentUser;
      console.log(user);
      firebase.firestore().collection('UserData').doc(user.uid).get().then((doc) => {
        if (doc.exists) {
          setName(doc.data().name);
          setUserData(user);
          setPhoneNumber(doc.data().phone);

        } else {
          console.log("No such document!");
        }
      });
    } catch (error) {
      console.error(error.message);
    }
  }, []);
//Allowing user to modify the name and phone 
  useEffect(() => {
    setIsProfileModified(name !== '' || phone !== '');
  }, [name,phone]);
//updating edited profile information in profile and telling user that it succesfully changed their profile
  const handleSave = () => {
    try {
      const user = firebase.auth().currentUser;
      firebase.firestore().collection('UserData').doc(user.uid).update({
        name: name,
        phone: phone,
      }).then(() => {
        console.log("User data updated successfully!");
        Alert.alert('Updated Profile');
      });
    } catch (error) {
      console.error(error.message);
    }
  };
  

  return (
<SafeAreaView style = {styles.container} behavior='padding'>

  <Image source={ellipsepink} 
          style={{position: 'absolute',
          left: -0,
          top: -20,
          }}>
      </Image>
      <Image source={ellipsegrey} 
                style={{position: 'absolute',
                right:-40,
                top:648
                }}>
      </Image>
      

      <TouchableOpacity onPress={()=>navigation.pop()}>
        <Image source={leftarrow} 
                style={{ width: 50, 
                height: 50,
                right:-10,
                bottom:-720
      }} /></TouchableOpacity>
    <View style={{marginTop: 30,
      marginLeft:5,}}>
        <Text style={styles.nameText}>Edit Profile</Text>
      </View>
 <Text style={styles.infotitle}>Personal Information</Text>

  <View style={styles.nameView}>
    <TextInput id='name'
      style={styles.inputText}
      placeholder="Name"
      placeholderTextColor="#ccc"
      value = {name}
      onChangeText={text => setName(text)}/>
  </View>
  <View style= {styles.phoneView}>
    <TextInput id='phone'
      style={styles.inputText}
      placeholder="Phone"
      placeholderTextColor="#ccc"
      value={phone}
      onChangeText={text => setPhoneNumber(text)}/>
  </View>

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.buttonText}>Save Changes</Text>
      </TouchableOpacity>


    </SafeAreaView>
    
        );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b6b7e5',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth:0,
    borderBottomColor: '#ccc',
    marginVertical: 10,
  },
  nameText: {
    color: 'black',
    fontSize: 29,
    fontWeight: '900',
    top:-40
  },
  inputText: {
    height:40,
    color:"black"
  },
  saveButton: {
    backgroundColor: '#884e7d',
    padding: 20,
    borderRadius: 26,
    marginTop: 10,
    alignItems: 'center',
    width:153,
    top: 200,
    right:-110,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  nameView:{
    position: 'absolute',
    left: 30,
    top: 185,
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
    
      infotitle: {
          fontSize: 15,
          color: '#333333',
          textAlign: 'center',
          marginBottom: 10,
          top: 31,
          left: -98},
  
});

export default EditProfile;