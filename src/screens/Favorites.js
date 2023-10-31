import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';

import firebase from '@react-native-firebase/app';
import ellipsepink from './../../images/ellipsepink.png';
import ellipsegrey from './../../images/ellipsegrey.png';
import HomeHeader from './HomeHeader';
import ChickfilA from './RussellHouse/ChickfilA';
import Panera from './RussellHouse/Panera';
import Panda from './RussellHouse/Panda';
import TwistedTaco from './RussellHouse/TwistedTaco';
import Einstein from './RussellHouse/Einstein';
import CarolinaCreamery from './RussellHouse/Creamery';
import CounselorsCafe from './NorthCampus/CounselorsCafe';
import HamptonStCafe from './NorthCampus/HamptonStCafe';
import CafeVerde from './SouthCampus/CafeVerde';
import WiredCafe from './SouthCampus/WiredCafe';
import HorshoeDeli from './EastCampus/HorshoeDeli';
import HumanitiesStarbucks from './EastCampus/HumanitiesStarbucks';
import VillageJuiceAndKitchen from './EastCampus/VillageJuiceAndKitchen';
import ColloquiumCafe from './EastCampus/ColloquiumCafe';
import TcoopStarbs from './WestCampus/TcoopStarbs';
import Coop from './FoodTrucks/Coop';
import NachoPapis from './FoodTrucks/NachoPapis';

const Favorites= ({navigation}) => {
  const [favorites, setFavorites] = useState([]);

  //this is the images for all of the restaurants and can be called when you determine which one the user has selected as a favorite
const getimageSource = (name) => {
  switch (name) {
    case "Chick-fil-A":
      return require('./../../images/RussellHouse/Chick.png');
    case "Panera":
      return require('./../../images/RussellHouse/panera.png');
    case "Panda":
      return require('./../../images/RussellHouse/panda.png');
    case "TwistedTaco":
      return require('./../../images/RussellHouse/twisted.png');
    case "Einstein":
      return require('./../../images/RussellHouse/Einstein.png');
    case "Creamery":
      return require('./../../images/RussellHouse/creamery.png');
    case "CounselorsCafe":
      return require('./../../images/NorthCampus/CounselorCafe.png');
    case "HamptonSt":
      return require('./../../images/NorthCampus/Hamptons.png');
    case "CafeVerde":
      return require('./../../images/SouthCampus/CafeVerde.png');
    case "WiredCafe":
      return require('./../../images/SouthCampus/Wiredcafe.png');
    case "Colloquium":
      return require('./../../images/EastCampus/ColloquimCafe.png');
    case "HorshoeDeli":
      return require('./../../images/EastCampus/horshoeDeli.png');
    case "Humanities":
      return require('./../../images/EastCampus/starbucksWelsh.png');
    case "Village":
      return require('./../../images/EastCampus/village.png');
    case "TcoopStarbs":
      return require('./../../images/WestCampus/starbucksCooper.png');
    case "Coop":
        return require('./../../images/FoodTrucks/TheCoop.png');
    case "NachoPapis":
        return require('./../../images/FoodTrucks/Nacho.png');
    default:
      return null;
  }
};
//this is the navigation for the buttons to the respective screens
const handleButtonClick = (item) => {
   switch(item.name) {
       case "Chick-fil-A":
          return navigation.navigate(ChickfilA);
      case "Panera": 
          return navigation.navigate(Panera);
      case "Panda":
          return navigation.navigate(Panda);
      case "TwistedTaco": 
          return navigation.navigate(TwistedTaco);
      case "Einstein": 
          return navigation.navigate(Einstein);
      case "Creamery":
          return navigation.navigate(CarolinaCreamery);
      case "CounselorsCafe":
          return navigation.navigate(CounselorsCafe);
      case "HamptonSt":
          return navigation.navigate(HamptonStCafe);
      case "CafeVerde":
          return navigation.navigate(CafeVerde);
      case "WiredCafe":
          return navigation.navigate(WiredCafe);
      case "Colloquium":
          return navigation.navigate(ColloquiumCafe);
      case "HorshoeDeli": 
          return navigation.navigate(HorshoeDeli);
      case "Humanities":
          return navigation.navigate(HumanitiesStarbucks);
      case "Village": 
          return navigation.navigate(VillageJuiceAndKitchen);
      case "TcoopStarbs":
          return navigation.navigate(TcoopStarbs);
      case "Coop":
          return navigation.navigate(Coop);
      case "NachoPapis": 
          return navigation.navigate(NachoPapis);
  }  
};

  useEffect(() => {
    const user = firebase.auth().currentUser;
    if (!user) {
      console.log('User not logged in');
      return;
    }

    

    const favoritesRef = firebase.firestore().collection('Favorites').doc(user.uid).collection('Restaurants');

    const unsubscribe = favoritesRef.where('isFavorite', '==', true)
                                     .onSnapshot((querySnapshot) => {
                                       const favoritesData = [];
                                       querySnapshot.forEach((doc) => {
                                         favoritesData.push(doc.data());
                                       });
                                       setFavorites(favoritesData);
                                     }, (error) => {
                                       console.log('Error getting favorites:', error);
                                     });

    return () => unsubscribe();
  }, []);

  const renderItem = ({item}) => {
      const imageSource = getimageSource(item.name);
      return (
          <TouchableOpacity
            onPress={() => handleButtonClick(item)}
            style={{flex: 1, margin: 5}}>
            <View style={styles.item}>
              <Image source={imageSource} style={styles.image} />
              <Text style={styles.text}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        );
      };

  return (

    <View style= {styles.container}>
      <Image source={ellipsepink} 
              style={{position: 'absolute',
              left: -30,
              top: -45}}>
          </Image>
          <HomeHeader navigation = {navigation}/>
          <Text style={styles.nameText}>Favorites</Text>
          
          <Image source={ellipsegrey} 
              style={{position: 'absolute',
              right:-40,
              bottom:0}}>
          </Image>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.name}
        renderItem={ renderItem }
        contentContainerStyle={styles.list}
        numColumns = {2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#B6B7E5',
    flex:1,
  },
  item: {
    marginTop:14,
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
    marginTop:10,
    fontWeight: 'bold',
  },
  selectedIcon: {
    width: 15,
    height: 15,
  },
  list: {
    padding: 10,
  },
  image: {
      width: 110,
      height: 110,
      borderRadius:15,
  },
  nameText: {
    color: 'black',
    fontSize: 25,
    fontWeight: '900',
    top: -40,
    left: 140
  },
});

export default Favorites;