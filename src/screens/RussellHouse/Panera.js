import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import firebase from '@react-native-firebase/app';
import ellipsepink from './../../../images/ellipsepink.png';
import ellipsegrey from './../../../images/ellipsegrey.png';
import leftarrow  from './../../../images/leftarrow.png';
import mycart from './../../../images/mycart.png';
import MyCart from './../MyCart';
import Cart from './../Cart';
import CampusSideSelectionScreen from './../CampusSideSelectionScreen';
import home  from './../../../images/home.png';

const menuData = require('./../../../data/RussellHouseRestaurants/Panera.json') 

//Prompting users with all menu categories for Panda Express 
const Panera = ({navigation}) => {

  const starImageFilled =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';
  // Empty Star. You can also give the path from local
  const starImageCorner =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';

    const menuItems = [
        { type: "Salads" },
        { type: "Soups" },
        { type: "Mac and Cheese" },
        { type: "Beverages"}
      ];

  const [menuType, setMenuType] = useState('Salads');
  const [cartCount, setCartCount] = useState(MyCart.getTotalQuantity());
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const user = firebase.auth().currentUser;
    if (!user) {
      console.log('User not logged in');
      return;
    }

    const favoritesRef = firebase.firestore().collection('Favorites').doc(user.uid).collection('Restaurants');

    const docRef = favoritesRef.doc('Panera');
    docRef.get().then((doc) => {
      if (doc.exists) {
        setIsFavorite(doc.data().isFavorite);
      }
    }).catch((error) => {
      console.log('Error getting favorites:', error);
    });
  }, []);

  const toggleFavorite = async () => {
    setIsFavorite(!isFavorite);
    const user = firebase.auth().currentUser;
    if (!user) {
      console.log('User not logged in');
      return;
    }
    const docRef = firebase.firestore().collection('Favorites').doc(user.uid).collection('Restaurants').doc('Panera');

    const doc = await docRef.get();
    if (doc.exists) {
      if (isFavorite === true) {
        try {
          await docRef.update({
            name:'Panera',
            isFavorite: false,
          });
        } catch (error) {
          console.log('Error updating favorites:', error);
        }
      } else {
        try {
          await docRef.update({
            name :'Panera',
            isFavorite:true,
          })
        } catch (error) {
          console.log('Error removing favorite:', error);
        }
      }
    } else {
      if (isFavorite === true) {
        try {
          await docRef.set({
            name:'Panera',
            isFavorite: false,
          });
        } catch (error) {
          console.log('Error updating favorites:', error);
        }
      }
      else {
        try {
          await docRef.set({
            name:'Panera',
            isFavorite:true,
          })
        } catch (error) {
          console.log('Error removing favorite:', error);
        }
      }

    }
  };

  const updateCartCount = useCallback(() => {
    setCartCount(MyCart.getTotalQuantity());
  }, []);

  useFocusEffect(
    useCallback(() => {
      updateCartCount();
    }, [updateCartCount])
  );

  //upon selecting a category this method will direct the user to the appropriate categories menu items
  const renderCategory = () => {
    switch (menuType) {
      case 'Salads':
        return (
          <FlatList
            data={menuData.salads[0].items.map((item, index) => ({
              item,
              price: menuData.salads[0].prices[index],
            }))}
            keyExtractor={(item) => item.item}
            renderItem={renderItem}
            
          />
        );
      case 'Soups':
        return (
          <FlatList
            data={menuData.soups[0].items.map((item, index) => ({
              item,
              price: menuData.soups[0].prices[index],
            }))}
            keyExtractor={(item) => item.item}
            renderItem={renderItem}
            
          />
        );
      case 'Mac and Cheese':
        return (
          <FlatList
            data={menuData.macandcheese[0].items.map((item, index) => ({
              item,
              price: menuData.macandcheese[0].prices[index],
            }))}
            keyExtractor={(item) => item.item}
            renderItem={renderItem}
            
          />
        );
      case 'Beverages':
        return (
          <FlatList
            data={menuData.beverages[0].items.map((item, index) => ({
              item,
              price: menuData.beverages[0].prices[index],
            }))}
            keyExtractor={(item) => item.item}
            renderItem={renderItem}
            
          />
        );
      default:
        return null;
    }
  };
// Following selection of any items that the user may have selected the cart is updated to show any new items the user has picked from Panda Express menu
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item.item}</Text>
      <Text style={styles.itemText}>${item.price}</Text>
      <TouchableOpacity style={styles.addButton} onPress={() => {MyCart.addToCart(item); setCartCount(MyCart.getTotalQuantity())}}>
      <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
      </View>
      
   
  );

  return (
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
                <View style = {styles.header}>
            <TouchableOpacity onPress={()=>navigation.navigate(CampusSideSelectionScreen)}>
            <Image source={home} 
                    style = {{ width:35, height:35,marginRight:320, top:5 }}>
                </Image>
                <View style={styles.profileNameContainer}>
                  <Text style={styles.nameText}>Panera</Text>
                </View>
                </TouchableOpacity>      
                <TouchableOpacity onPress = {toggleFavorite}>
                <Image 
                source = {{ uri: isFavorite ? starImageFilled:starImageCorner}}
                style = {{width:35,height:35,right:5,top:5,backgroundColor:'purple',borderRadius:5}}
                />
                </TouchableOpacity>         
             </View>
    <View style = {{flexDirection:'row'}}>
    <FlatList
    data={menuItems}
    horizontal={true}
    renderItem={({item}) => (
    <TouchableOpacity onPress={() => setMenuType(item.type)}>
      <Text style={styles.category}>{item.type}</Text>
    </TouchableOpacity>
    )}
    />
      </View>
      <View>
        {renderCategory()}
      </View>
      
      <View style={{position: 'absolute', bottom: 14, left:10}}>
      <TouchableOpacity onPress={()=>navigation.pop()}>
                <Image source={leftarrow} 
                style={{ width: 50}} />
            </TouchableOpacity>
            </View>
            <View style={{ position: 'absolute', bottom: 14, right: 10 }}>
              <TouchableOpacity onPress={() => navigation.navigate(Cart)}>
                <Image
                  source={mycart}
                  style={{
                    width: 50,
                    height: 45,
                    borderRadius: 20,
                    backgroundColor: '#884E7D',
                  }}
                />
                {cartCount > 0 && (
                  <View
                    style={{
                      position: 'absolute',
                      top: -5,
                      right: -5,
                      backgroundColor: 'red',
                      borderRadius: 10,
                      paddingHorizontal: 5,
                      paddingVertical: 2,
                    }}
                  >
                    <Text style={{ color: 'white', fontSize: 12 }}>{cartCount}</Text>
                  </View>
                )}
              </TouchableOpacity>
            </View>

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
    height: 45,
    borderRadius:10,
    justifyContent:'space-evenly',  
    zIndex: 0
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
    left: 150
  },
});


  export default Panera;