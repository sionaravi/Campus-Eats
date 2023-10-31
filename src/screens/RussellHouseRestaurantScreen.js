//Screen for all Russel House Restauraunts
import React from 'react'; 
import {StyleSheet,View,TouchableOpacity,
    Image,Text, FlatList} from 'react-native';

import ellipsepink from './../../images/ellipsepink.png';
import ellipsegrey from './../../images/ellipsegrey.png';
import leftarrow  from './../../images/leftarrow.png';
import ChickfilA from './RussellHouse/ChickfilA';
import Panda from './RussellHouse/Panda';
import TwistedTaco from './RussellHouse/TwistedTaco';
import Einstein from './RussellHouse/Einstein';
import CarolinaCreamery from './RussellHouse/Creamery';
import Panera from './RussellHouse/Panera';
import home from './../../images/home.png';
import CampusSideSelectionScreen from './CampusSideSelectionScreen';



const buttonData = require('./../../data/RussellHouse.json') 

const RussellHouseRestaurantScreen = ({navigation}) => {

  // Filled Star. You can also give the path from local
  // const starImageFilled =
  //   'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';
  // Empty Star. You can also give the path from local
  // const starImageCorner =
  //   'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';
  
  //   const FavoriteButton = () => {
  //     const [isFavorite, setIsFavorite] = useState(false);
  //     const starImage = isFavorite ? require(starImageFilled) : require(starImageCorner);
    
  //     return (
  //       <TouchableOpacity activeOpacity={0.7} onPress={() => setIsFavorite(!isFavorite)}>
  //         <Image style={styles.starImageStyle} source={starImage} />
  //       </TouchableOpacity>
  //     );
  //   };
  //Proposing all potential options for user to select when considering Russel House
    const getimageSource = (id) => {
        switch (id) {
          case 1:
            return require('./../../images/RussellHouse/Chick.png');
          case 2:
            return require('./../../images/RussellHouse/panera.png');
          case 3:
            return require('./../../images/RussellHouse/panda.png');
          case 4:
            return require('./../../images/RussellHouse/twisted.png');
          case 5:
            return require('./../../images/RussellHouse/Einstein.png');
          case 6:
            return require('./../../images/RussellHouse/creamery.png');
          default:
            return null;
        }
      };
      //Whichever option is clicked the user will be appropriately navigated to their desired screen
      const handleButtonClick = (item) => {
         switch(item.id) {
             case 1:
                return navigation.navigate(ChickfilA);
            case 2: 
                return navigation.navigate(Panera);
            case 3:
                return navigation.navigate(Panda);
            case 4: 
                return navigation.navigate(TwistedTaco);
            case 5: 
                return navigation.navigate(Einstein);
            case 6:
                return navigation.navigate(CarolinaCreamery);
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
                <View >
                  <Text style={styles.nameText}>Russell House</Text>
                </View>
                </TouchableOpacity>              
        </View>
            <FlatList
              data={buttonData}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              contentContainerStyle={styles.list}
              numColumns = {2}
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
      //Style for Russel House Screen
    const styles = StyleSheet.create({
        container: {
          flex:1,
          backgroundColor: '#B6B7E5',
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
          top: -30,
          left: 115
        },
      });
    export default RussellHouseRestaurantScreen;
