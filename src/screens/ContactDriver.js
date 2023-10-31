//Below are the images and the other components that I use in this screen and later in the code
import React from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity} from 'react-native';
import ellipsepink from './../../images/ellipsepink.png';
import ellipsegrey from './../../images/ellipsegrey.png';
import Cancel from './Cancel';
import Reciept from './Reciept';


const ContactDriver = ({navigation}) => {
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
          <Text
            style= {{
              position:'absolute',
              justifyContent: 'center',
              fontSize: 35,
              top: 125,
              textAlign: 'center',
              left: 40,
              color: "black",
              flex: 1,
              fontWeight: 'bold'
            }}>
            Contact Information
          </Text>
          {/* Below is the display of the drivers email and cell phone number, 
          This should eventually be pulled from firebase, but we dont have the logic set up for a driver to
          pick which order they want to do. Until that logic is set there will be an overall email which
          is shared by drivers where they can contact a driver */}
          <Text
            style= {{
                position:'absolute',
                justifyContent: 'center',
                fontSize: 25,
                top: 200,
                textAlign: 'center',
                left: 125,
                color: "black",
                flex: 1
            }}>
            Driver Email: 
          </Text>
          <Text
            style= {{
                position:'absolute',
                justifyContent: 'center',
                fontSize: 25,
                top: 250,
                textAlign: 'center',
                left: 50,
                color: "black",
                flex: 1
            }}>
            driver@campuseats.com    
          </Text>
          <Text
            style= {{
                position:'absolute',
                justifyContent: 'center',
                fontSize: 25,
                top: 300,
                textAlign: 'center',
                left: 135,
                color: "black",
                flex: 1
            }}>
            Driver Cell: 
          </Text>
          <Text
            style= {{
                position:'absolute',
                justifyContent: 'center',
                fontSize: 25,
                top: 350,
                textAlign: 'center',
                left: 120,
                color: "black",
                flex: 1
            }}>
            803-422-6787
          </Text>
          {/* The code below this line show two buttons, where the user can either cancel 
          their order or they can say that they got their food and it was delivered to them.
          Cancel order goes to cancel.js (the cancel confirmation screen)
          Food delivered takes them to their receipt where they can see an itemized list of what they bought.
          */}
          <TouchableOpacity
          onPress = {() => navigation.navigate(Cancel)}
          style={styles.cancelButton}>
          <Text style={styles.forgotAndSignUpText}>Cancel Order</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress = {() => navigation.navigate(Reciept)}
          style={styles.deliveredButton}>
          <Text style={styles.forgotAndSignUpText}>Food was Delivered</Text>
          </TouchableOpacity>

          </View>
    )
};

//below is the stylesheet used in the component!
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
    top: 500,
    left: 40
  },
  cancelButton:{
    width:"80%",
    backgroundColor:"#884E7D",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    top: 470,
    left: 40
  },
  forgotAndSignUpText:{
    color:"white",
    fontSize:16
}});

export default ContactDriver;