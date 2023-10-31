//Screen to show starbucks information to user.
import React from 'react'; 
import {StyleSheet,View,TouchableOpacity,
    Image,Text, FlatList} from 'react-native';

import ellipsepink from './../../images/ellipsepink.png';
import ellipsegrey from './../../images/ellipsegrey.png';
import leftarrow  from './../../images/leftarrow.png';
import TcoopStarbs from './WestCampus/TcoopStarbs';
import home from './../../images/home.png';
import CampusSideSelectionScreen from './CampusSideSelectionScreen';

const buttonData = require('./../../data/WestCampus.json') 
//Method for navigation to Thomas Cooper Starbucks.  When button is pressed user will be brought to Starbucks page
const WestCampus = ({navigation}) => {

      const renderItem = ({item}) => {
        return (
            <TouchableOpacity
              onPress={() => navigation.navigate(TcoopStarbs)}
              style={{flex: 1, margin: 5}}>
              <View style={styles.item}>
                <Image source={require('./../../images/WestCampus/starbucksCooper.png')} style={styles.image} />
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
                  <Text style={styles.nameText}>West Campus</Text>
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
                bottom:15

                }} />
            </TouchableOpacity>
          </View>
        );
      };
      //Style for page 
    const styles = StyleSheet.create({
        container: {
          backgroundColor: '#B6B7E5',
          flex:1,
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
          marginTop: 200,
          marginBottom: 200,
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

export default WestCampus;
    
