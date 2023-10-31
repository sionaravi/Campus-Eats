//Screen to allow user to search for their desired restauraunt
import React, {  useState } from 'react';
import {StyleSheet,View,TextInput,TouchableOpacity,
Image,Text} from 'react-native';
import ellipsepink from './../../images/ellipsepink.png';
import ellipsegrey from './../../images/ellipsegrey.png';
import hamburger from './../../images/hamburger.png';
import ColloquiumCafe from './EastCampus/ColloquiumCafe';
import HorshoeDeli from './EastCampus/HorshoeDeli';
import HumanitiesStarbucks from './EastCampus/HumanitiesStarbucks';
import VillageJuiceAndKitchen from './EastCampus/VillageJuiceAndKitchen';
import NachoPapis from './FoodTrucks/NachoPapis';
import Coop from './FoodTrucks/Coop';
import CounselorsCafe from './NorthCampus/CounselorsCafe';
import HamptonStCafe from './NorthCampus/HamptonStCafe';
import Creamery from './RussellHouse/Creamery';
import ChickfilA from './RussellHouse/ChickfilA';
import Einstein from './RussellHouse/Einstein';
import Panda from './RussellHouse/Panda';
import Panera from './RussellHouse/Panera';
import TwistedTaco from './RussellHouse/TwistedTaco';
import CafeVerde from './SouthCampus/CafeVerde';
import WiredCafe from './SouthCampus/WiredCafe';
import TcoopStarbs from './WestCampus/TcoopStarbs';
//Method to navigate user to appropriate screen given their search request
const SearchScreen = ({navigation}) => {

    var allRestaurants = [{name: "Colloquium Cafe", screen: ColloquiumCafe}, {name: "Horseshoe Deli", screen: HorshoeDeli}, {name: "Humanities - Starbucks", screen: HumanitiesStarbucks}, 
                            {name: "Village Juice and Kitchen", screen: VillageJuiceAndKitchen}, {name: "Nacho Papi's", screen: NachoPapis}, {name: "The Coop", screen: Coop},
                            {name:  "Counselor's Cafe", screen: CounselorsCafe}, {name: "Hampton St. Cafe", screen: HamptonStCafe}, {name: "Carolina Creamery", screen: Creamery}, {name: "Chick-Fil-A", screen: ChickfilA}, 
                            {name: "Einstein Bros. Bagels", screen: Einstein}, {name: "Panda Express", screen: Panda},{ name: "Panera", screen: Panera}, {name: "Twisted Taco", screen: TwistedTaco}, {name: "Cafe Verde", screen: CafeVerde},
                            {name:"Wired Cafe", screen: WiredCafe}, {name: "Thomas Cooper Starbucks", screen: TcoopStarbs}];

    const [searchQuery, setSearchQuery] = useState('');
    //method to search for their desired restaraunt ignoring case. 
    const filteredData = allRestaurants.filter((restaurant) =>
        restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()));
    return (
            <View style = {styles.container}> 
             
               
                        
                        <View style={{ zIndex: 10 }}>
                <TextInput
                    style={styles.searchBar}
                    placeholder="What are you looking for?"
                    autoCapitalize='none'
                    autoCorrect={false}
                    placeholderTextColor="#ccc"
                    onChangeText={setSearchQuery}
                    value = {searchQuery} 
                />
                </View>

<View style={{
  zIndex:20,
  alignItems: 'center',
  top: 10,
}}>
  {filteredData.map((restaurant) => (
    <View key={restaurant.name} style={styles.itemContainer}>
      <TouchableOpacity 
        onPress={() => navigation.navigate(restaurant.screen)}
        style={styles.itemName}>
        <Text style={styles.loginText}>{restaurant.name}</Text>
      </TouchableOpacity>
    </View>
  ))}
</View>
<TouchableOpacity style ={{zIndex:10}}
                            onPress={() => { navigation.toggleDrawer(); } }>
                            <Image source={hamburger}
                                style={{width: 35, height: 35, top:-585,left:6,backgroundColor:'white'}}>
                            </Image>
                        </TouchableOpacity>
                        <Image source={ellipsepink}
                        style={{
                            position: 'absolute',
                        }}>
                        </Image>
                        
                    <Image source={ellipsegrey}
                        style={{
                            position: 'absolute',
                            right: -40,
                            bottom: 0
                        }}>
                    </Image>
                    
                </View>
    );
};
export default SearchScreen;
//Style for Search Screen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#B6B7E5',
        zIndex:5
    },
    inputText:{
        height:55,
        color:"black"
    },
    searchBar: {
        height: 50,
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom: 10,
        textAlign:'center',
        width: 310,
        top:0,
        marginHorizontal:50
        
    },
    itemContainer: {
        marginBottom: 10,
        justifyContent: "center",
        zIndex: 4
    },
    itemName: {
        fontWeight: 'bold',
        justifyContent: "center",
    },
    itemDescription: {
        color: 'gray',
    },
    loginText:{
        color:"purple",
        fontSize:16
    },
   
})