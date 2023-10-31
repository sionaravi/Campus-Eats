import React, {useState} from 'react';
import {SafeAreaView,StyleSheet,View,Text,Image,TouchableOpacity,Alert} from 'react-native';
import ellipsepink from './../../images/ellipsepink.png';
import ellipsegrey from './../../images/ellipsegrey.png';
import cfa from './../../images/cfa.png';
import leftarrow from './../../images/leftarrow.png';

const RatingScreenCFA = ({navigation}) => {
  // To set the default Star Selected
  const [defaultRating, setDefaultRating] = useState(2);
  // To set the max number of Stars
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);

  // Filled Star. You can also give the path from local
  const starImageFilled =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';
  // Empty Star. You can also give the path from local
  const starImageCorner =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';

  const CustomRatingBar = () => {
    return (
      <View style={styles.customRatingBarStyle}>
        {maxRating.map((item, key) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={item}
              onPress={() => setDefaultRating(item)}>
              <Image
                style={styles.starImageStyle}
                source={
                  item <= defaultRating
                    ? {uri: starImageFilled}
                    : {uri: starImageCorner}
                }
              />
            </TouchableOpacity>
            

          );
        })}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
      <Image source={ellipsepink} style={{position: 'absolute',left: 2,top: 1,}} />
      <Image source={ellipsegrey} style={{position: 'absolute',right:-60, bottom:-420}}/>
      <Image style={styles.cfaimage}
      source={cfa}/>

        <Text style={styles.textStyle}>
          How was your experience with us
        </Text>
        <Text style={styles.textStyleSmall}>
          Please Rate Us
        </Text>
        {/* View to hold our Stars */}
        <CustomRatingBar />
        <Text style={styles.textStyle}>
          {/* To show the rating selected */}
          {defaultRating} / {Math.max.apply(null, maxRating)}
        </Text>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={() => Alert.alert("Thank you for your rating.")}>
          {/* Clicking on button will show the rating as an alert */}
          <Text style={styles.buttonTextStyle}>
            Rate
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
            onPress={() => navigation.navigate()}>
             <Image source={leftarrow} 
                style={{ width: 52, 
                height: 50,
                top:120,
                alignSelf:'flex-start'}}/>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RatingScreenCFA;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B6B7E5',
    padding: 10,
    justifyContent: 'center',
    textAlign: 'center',
  },
  titleText: {
    padding: 8,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 23,
    color: '#000',
    marginTop: 15,
  },
  textStyleSmall: {
    textAlign: 'center',
    fontSize: 16,
    color: '#000',
    marginTop: 15,
  },
  buttonStyle: {
    justifyContent: 'center',
    borderRadius:25,
    flexDirection: 'row',
    marginTop: 30,
    padding: 15,
    backgroundColor: '#884E7D',
  },
  buttonTextStyle: {
    color: '#fff',
    textAlign: 'center',
  },
  customRatingBarStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30,
  },
  starImageStyle: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
  },
    cfaimage: {
      width: 200,
      height: 90,
      alignSelf: 'center'
  }
});