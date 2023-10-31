import {View, Text, StyleSheet,Image} from 'react-native';
import { TouchableOpacity } from 'react-native';
import home from './../../images/home.png';
//import search from './../../images/search.png';
//import tune from './../../images/tune.png';
import CampusSideSelectionScreen from './CampusSideSelectionScreen';


//This function is here to navigate the user to the Side Selection Screen.  
export default function NoFilterHeader({navigation}){

  
    return(
        <View style = {styles.header}>
            <TouchableOpacity onPress={()=>navigation.navigate(CampusSideSelectionScreen)}>
             <Image source={home} 
                    style = {{ width:30, height:30,marginRight:360, z }}>
                </Image>
            </TouchableOpacity>              
                              <Text style={styles.nameText}>Campus Side Selection</Text>

                

        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        backgroundColor:'white',
        height: 40,
        borderRadius:10,
        justifyContent:'space-evenly',  
        zIndex: 0
    }
})