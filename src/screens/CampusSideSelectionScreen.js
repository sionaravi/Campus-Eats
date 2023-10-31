//This is the screen allowing a user to select which part of campus they are looking to order from
import React from 'react'; 
import {StyleSheet,View,TouchableOpacity,
    Image,Text, FlatList} from 'react-native';

import ellipsepink from './../../images/ellipsepink.png';
import ellipsegrey from './../../images/ellipsegrey.png';
import HomeHeader from './HomeHeader';

import RussellHouseRestaurantScreen from './RussellHouseRestaurantScreen';


import NorthCampus from './NorthCampus';
import FoodTrucks from './FoodTrucks';
import EastCampus from './EastCampus';
import WestCampus from './WestCampus';
import SouthCampus from './SouthCampus';

const buttonData = require('./../../data/CampusSelection.json') 
//prompting the user with all the options for campus areas and then directing them to whichever area they selected
const CampusSideSelectionScreen = ({navigation}) => {

     const getimageSource = (id) => {
        switch (id) {
          case 1:
            return require('./../../images/russellHouse.png');
          case 2:
            return require('./../../images/counselorsCafe.png');
          case 3:
            return require('./../../images/cafeVerde.png');
          case 4:
            return require('./../../images/colloquimCafe.png');
          case 5:
            return require('./../../images/starbucks.png');
          case 6:
            return require('./../../images/tcoop.png');
          default:
            return null;
        }
      };
      const handleButtonClick = (id) => {
        switch(id) {
            case 1:
                return navigation.navigate('RussellHouseRestaurantScreen');
            case 2: 
                return navigation.navigate('NorthCampus');
            case 3:
                return navigation.navigate('SouthCampus');
            case 4: 
                return navigation.navigate('EastCampus');
            case 5: 
                return navigation.navigate('WestCampus');
            case 6:
                return navigation.navigate('FoodTrucks');
        }
      };
      const renderItem = ({item}) => {
        const imageSource = getimageSource(item.id);
    
        return (
            <TouchableOpacity  style={styles.item}
              onPress={() => handleButtonClick(item.id)}  >
              <View>
                <Image source={imageSource} style={styles.image} ></Image>
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
                    top: -45,
                    scaleX:-1}}>
                </Image>
                <HomeHeader navigation = {navigation}/>
                  <Text style={styles.nameText}>Campus Side Selection</Text>
                
                <Image source={ellipsegrey} 
                    style={{position: 'absolute',
                    right:-40,
                    bottom:0}}>
                </Image>
              <FlatList
              data={buttonData}
              renderItem={renderItem}
              keyExtractor={(item) => parseInt(item.id)}
              numColumns = {2}
            />  
          </View>
        );
      };
    const styles = StyleSheet.create({
        container: {
          flex:1,
          backgroundColor: '#B6B7E5',
        },
        item: {
          marginTop:30,
          padding: 10,
          borderRadius: 10,
          marginLeft:40,
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
          left: 70
        },
      });
      
export default CampusSideSelectionScreen;
     
