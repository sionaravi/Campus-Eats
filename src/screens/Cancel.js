//Below are the images and the other components that I use in this screen and later in the code
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import ellipsepink from './../../images/ellipsepink.png';
import ellipsegrey from './../../images/ellipsegrey.png';
import CampusSideSelectionScreen from './CampusSideSelectionScreen';


const Cancel = ({navigation}) => {
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
                fontSize: 50,
                top: 300,
                textAlign: 'center',
                left: 20,
                color: "black",
                flex: 1
            }}>
            Order Cancelled
          </Text>

          {/* below is the code for the home button which takes the user back to the home page after cancelling an order.*/}
          <TouchableOpacity
          onPress = {() => navigation.navigate(CampusSideSelectionScreen)}
          style={styles.deliveredButton}>
          <Text style={styles.forgotAndSignUpText}>Homepage</Text>
          </TouchableOpacity>
          </View>
    )
};

//Below is the stylesheet used on this screen
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
  forgotAndSignUpText:{
    color:"white",
    fontSize:16
}});

export default Cancel;