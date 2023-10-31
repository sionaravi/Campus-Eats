//Screen to allow users to choose between food trucks on campus
import React from 'react'; 
import {StyleSheet,View,TouchableOpacity,
    Image,Text, FlatList} from 'react-native';

import ellipsepink from './../../images/ellipsepink.png';
import ellipsegrey from './../../images/ellipsegrey.png';
import leftarrow  from './../../images/leftarrow.png';
import Coop from './FoodTrucks/Coop';
import NachoPapis from './FoodTrucks/NachoPapis';
import home from './../../images/home.png';
import CampusSideSelectionScreen from './CampusSideSelectionScreen';

const buttonData = require('./../../data/FoodTrucks.json') 
//Prompting user with food truck options
const FoodTrucks = ({navigation}) => {

    const getimageSource = (id) => {
        switch (id) {
          case 16:
            return require('./../../images/FoodTrucks/TheCoop.png');
          case 17:
            return require('./../../images/FoodTrucks/Nacho.png');          
          default:
            return null;
        }
      };
      //Navigating user to the appropriate food truck menu that they choose to look at
      const handleButtonClick = (item) => {
        switch(item.id) {
            case 16:
                return navigation.navigate(Coop);
            case 17: 
                return navigation.navigate(NachoPapis);
        }
      };
      const renderItem = ({item}) => {
        const imageSource = getimageSource(item.id);
    
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
                    style = {{ width:35, height:35,marginRight:360, top:5 }}>
                </Image>
                <View style={styles.profileNameContainer}>
                  <Text style={styles.nameText}>Food Trucks</Text>
                </View>
                </TouchableOpacity>              
        </View>
            <FlatList
              data={buttonData}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              contentContainerStyle={styles.list}
              
            />
            <TouchableOpacity onPress={()=>navigation.pop()}>
                <Image source={leftarrow} 
                style={{ width: 50, 
                height: 50,
                right:-9,
                bottom:25

                }} />
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
          height: 45,
          borderRadius:10,
          justifyContent:'space-evenly',  
          zIndex: 0
      },
        item: {
          marginTop:60,
          marginBottom:60,
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
          top: -30,
          left: 115
        },
      });

export default FoodTrucks;
    
