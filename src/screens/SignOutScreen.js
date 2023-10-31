// Screen allowing user to sign out
import React from 'react';
import { View, Alert, Button,StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';
import SignInScreen from './SignInScreen';
//Using firebase to allow a user to sign out and then potentially sign in again with a new account.  
export default function SignOutScreen({navigation}) {
  async function signOut() {
    try {
      await auth().signOut();
      console.log("User successfully signed out");
      navigation.navigate(SignInScreen)
    } catch(err) {
      Alert.alert(err.code);
    }
  }

  return (
    <View style={styles.container}>
      <Button style={{height:39}} title="Yes" onPress={signOut} color = "#884E7D"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#E6E6FA',
    justifyContent: 'center',
    alignItems: 'center',
  },

});