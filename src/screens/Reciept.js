import React, { useState,useEffect } from 'react';
import { View, Text, FlatList, StyleSheet,TouchableOpacity,Image} from 'react-native';

//Above and below are the images and the other components that I use in this screen and later in the code
import ellipsepink from './../../images/ellipsepink.png';
import ellipsegrey from './../../images/ellipsegrey.png';
import MyCart from './MyCart';
import CampusSideSelectionScreen from './CampusSideSelectionScreen';
import { firebase } from '@react-native-firebase/firestore';
import home from './../../images/home.png'

//I spelled receipt wrong and now it just exists like that so I am sorry !
const Reciept = ({navigation}) => {
    //This constant is for the cart items which will be displayed in the receipt
    const [cartItems, setCartItems] = useState([]);

    /*
    This useEffect function returns the list of items as long as the quantity of the item
    is not 0. It also sets the cart items to it
    */
    useEffect(() => {
      const updatedCartItems = MyCart.getItems().filter((item) => {
        return MyCart.getQuantityByName(item) > 0;
      });
      setCartItems(updatedCartItems);
    }, []);

    /*
    The saveReciept function saves the list of items into firebase as a reciept. This allows 
    in Order History to be able to have them pull the receipt down and use it as a representation of an order.
    */
    const saveReceipt = async () => {
        const user = firebase.auth().currentUser;
        try {
          const receiptRef = firebase.firestore().collection('Reciept').doc(user.uid);
          const orderRef = receiptRef.collection('Orders').doc();
          await orderRef.set({
            cartItems,
            orderAt : new Date()
          });
          console.log('Receipt saved successfully');
        } catch (error) {
          console.error('Error saving receipt:', error);
        }
      };
    
    const returnHome = () => {
        MyCart.clearCart(cartItems);
        navigation.navigate('CampusSideSelectionScreen');
    };
    
    // renderItem pulls the items in which the person ordered from their cart and returns that item formatted as shown below
    // NAME $PRICE QUANTITY
    const renderItem = ({ item }) => {
      const itemQuantity = MyCart.getQuantityByName(item);

      if (itemQuantity === 0) {
      return null;
      }
    return(
      <View style={styles.item}>
        <Text style={styles.itemText}>{item.item}</Text>
        <Text style={styles.itemText}>${item.price}</Text>
        <Text style= {styles.itemText}>{MyCart.getQuantityByName(item)}</Text>
      </View>
  );
};
    return(
      /*
      Below is the code which shows the background like the rest of the screens do. 
      Eventually, we want to turn this into a component in the future to streamline the code
      */
      <View style= {styles.container}>
      <Image source={ellipsepink} 
              style={{position: 'absolute',
              left: -30,
              top: -45,
              scaleX:-1}}>
          </Image>
          
          <Image source={ellipsegrey} 
              style={{position: 'absolute',
              right:-40,
              bottom:0}}>
          </Image>
          {/*below is the code which styles the header of the screen, which has an option to take the user back to the homepage and the name of the screen on it*/}
          <View style = {styles.header}>
              <TouchableOpacity onPress={()=>returnHome()}>
              <Image source={home} 
              style = {{ width:35, height:35,marginRight:360, top:5 }}>
          </Image>
          <View style={styles.profileNameContainer}>
            <Text style={styles.nameText}>Receipt</Text>
          </View>
          </TouchableOpacity>              
     </View>
      <Image source={ellipsegrey}
          style={{
              position: 'absolute',
              right: -40,
              bottom: 0
          }}>
          </Image>
          {/*This component displays the cart as a receipt*/}
          <FlatList
              data={cartItems}
              renderItem={renderItem}
              keyExtractor={(item) => item.item} />
              
          
          </View>
    )
};

//the style sheet for the styles used in the components of this screen
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#B6B7E5',
    flex:1
  },
  header:{
    flexDirection:'row',
    backgroundColor:'white',
    height: 40,
    borderRadius:10
  }, 
  item: {
    marginHorizontal: 11,
    padding: 3,
    marginVertical: 10,
    backgroundColor: 'white',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemText: {
    alignContent:'center',
    justifyContent: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
  },
  nameText: {
    color: 'black',
    fontSize: 24,
    fontWeight: '900',
    top: -30,
    left: 150
}});

export default Reciept;
