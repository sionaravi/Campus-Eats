//This screen is used to present the user with their current cart
import React, { useState,useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Alert,TouchableOpacity,Image} from 'react-native';

import ellipsepink from './../../images/ellipsepink.png';
import ellipsegrey from './../../images/ellipsegrey.png';
import leftarrow  from './../../images/leftarrow.png';
import MyCart from './MyCart';
import Payment from './Payment';
import home from './../../images/home.png';
import CampusSideSelectionScreen from './CampusSideSelectionScreen';
//Showing user the items in their cart and specified quantities
const Cart = ({navigation}) => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
      const updatedCartItems = MyCart.getItems().filter((item) => {
        return MyCart.getQuantityByName(item) > 0;
      });
      setCartItems(updatedCartItems);
    }, []);
//If the cart is empty the user is unable to checkout, if it is not the user is taken to the payment screen
    const handlePress = () => {
      if (MyCart.getTotalPrice() === 0) {
        Alert.alert('Cannot Checkout', 'Your cart is empty.', [{ text: 'OK' }]);
      } else {
        navigation.navigate(Payment);
      }
    };
  
    const updateCartItems = (item) => {
      MyCart.addToCart(item);
      const updatedItems = cartItems.map((cartItem) => {
        if (cartItem.item === item.item) {
          return {
            ...cartItem,
            quantity: MyCart.getQuantityByName(item),
          };
        }
        return cartItem;
      });
      setCartItems(updatedItems);
    };
  
    const removeCartItem = (item) => {
      MyCart.removeItem(item);
      const updatedItems = cartItems.map((cartItem) => {
        if (cartItem.item === item.item) {
          return {
            ...cartItem,
            quantity: MyCart.getQuantityByName(item),
          };
        }
        return cartItem;
      });
      setCartItems(updatedItems);
    };
    
       
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
        <TouchableOpacity style={styles.addButton} onPress={() => updateCartItems(item)}>
        <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addButton} onPress={() => removeCartItem(item)}>
        <Text style={styles.addButtonText}>-</Text>
        </TouchableOpacity>
      </View>
  );
};

  return (
    <View style={styles.container}>
          <Image source={ellipsepink}
              style={{
                  position: 'absolute',
                  left: -30,
                  top: -45
              }}>
          </Image>

          <View style = {styles.header}>
              <TouchableOpacity onPress={()=>navigation.navigate(CampusSideSelectionScreen)}>
              <Image source={home} 
              style = {{ width:35, height:35,marginRight:360, top:5 }}>
          </Image>
          <View style={styles.profileNameContainer}>
            <Text style={styles.nameText}>Cart</Text>
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
          <FlatList
              data={cartItems}
              renderItem={renderItem}
              keyExtractor={(item) => item.item} />
              <View style={{ position: 'absolute', bottom: 14, left: 10 }}>
              <TouchableOpacity onPress={() => navigation.pop()}>
                  <Image source={leftarrow}
                      style={{ width: 50 }} />
              </TouchableOpacity>
              
          </View>
          <TouchableOpacity style ={{backgroundColor: MyCart.getTotalPrice() === 0 ? 'grey' : '#884E7D', borderRadius:9,
            padding: 5, marginLeft:100,marginBottom:20,width:200,height:40}} onPress={handlePress}>
              <Text style = {{fontSize:20, fontWeight:'bold'}}> Checkout  $ {MyCart.getTotalPrice().toFixed(2)}</Text>
         </TouchableOpacity>
            </View>
    
  );
};

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
  category: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
    backgroundColor: 'grey',
    padding: 10,
    marginHorizontal:7,
    borderRadius:20,
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
  addButton: {
    backgroundColor: '#884E7D',
    borderRadius:9,
    padding: 5,
    marginRight:3,
    width:30,
    alignItems:'center',
  },
  addButtonText: {
    color: "black",
    fontSize: 15,
    fontWeight:'bold',
  },
  nameText: {
    color: 'black',
    fontSize: 24,
    fontWeight: '900',
    top: -30,
    left: 175
  }});


  export default Cart; 