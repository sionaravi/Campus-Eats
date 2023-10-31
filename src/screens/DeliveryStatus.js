//Below are the images and the other components that I use in this screen and later in the code
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import ellipsepink from './../../images/ellipsepink.png';
import ellipsegrey from './../../images/ellipsegrey.png';
import Cancel from './Cancel.js';
import Reciept from './Reciept';
import ContactDriver from './ContactDriver';

const DeliveryStatus = ({navigation}) => {
  return(
    /*
    Below is the code which shows the background like the rest of the screens do. 
    Eventually, we want to turn this into a component in the future to streamline the code
    */
    <View style={styles.container}>
      <Image source={ellipsepink}
        style={{
            position: 'absolute',
            left: -30,
            top: -45,
            scaleX: -1,
        }}>
      </Image>
      <Image source={ellipsegrey}
        style={{
            position: 'absolute',
            right: -40,
            bottom: 0
        }}>
      </Image>
      {/* Below is the component which lets the user know how long until their order should be there (rough estimate) 
      Also stated below is the prompt for if they have any issues to choose one of the buttons below. */}
      <View>
        <Text
          style= {{
            position:'absolute',
            justifyContent: 'center',
            fontSize: 50,
            top: 100,
            textAlign: 'center',
            left: 15,
            color: "black",
            flex: 1
          }}>
        Your order should arrive in 30 minutes!
        </Text>
      </View>
      <View>
        <Text
          style= {{
            position:'absolute',
            justifyContent: 'center',
            fontSize: 20,
            top: 300,
            textAlign: 'center',
            left: 120,
            color: "black",
            flex: 1
          }}>
        Having issues?
        </Text>
      </View>

      {/* Below are the buttons for contact driver, food delivered, and cancelling of the order. */}
      <TouchableOpacity
        onPress = {() => navigation.navigate(ContactDriver)}
        style={styles.contactButton}>
        <Text style={styles.forgotAndSignUpText}>Contact Driver</Text>
      </TouchableOpacity>
          
      <TouchableOpacity
        onPress = {() => navigation.navigate(Reciept)}
        style={styles.deliveredButton}>
        <Text style={styles.forgotAndSignUpText}>Food was delivered</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress = {() => navigation.navigate(Cancel)}
        style={styles.cancelButton}>
        <Text style={styles.forgotAndSignUpText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
};

//the style sheet for the styles used in the components of this screen
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#B6B7E5',
    flex:1
  },
  deliveredButton:{
    width:"80%",
    backgroundColor:"#884E7D",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    top: 390,
    left: 40
  },
  contactButton:{
    width:"80%",
    backgroundColor:"#884E7D",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    top: 340,
    left: 40
  },
  cancelButton:{
    width:"80%",
    backgroundColor:"#884E7D",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    top: 440,
    left: 40
  },
  forgotAndSignUpText:{
    color:"white",
    fontSize:16
}});
  
  
export default DeliveryStatus; 
