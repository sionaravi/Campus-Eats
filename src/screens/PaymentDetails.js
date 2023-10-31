//Screen to check payment details
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView, Image} from 'react-native';
import leftarrow  from './../../images/leftarrow.png';
import ellipsepink from './../../images/ellipsepink.png';
import ellipsegrey from './../../images/ellipsegrey.png';
import firebase from '@react-native-firebase/app';

//This method checks to see whether or not the user has saved a card
const PaymentDetails = ({ navigation }) => {
  const [data,setData] = useState(null);
  
  useEffect(() => {
    try {
        const user = firebase.auth().currentUser;
        firebase.firestore().collection('SavedCards').doc(user.uid).get().then((doc) => {
          if (doc.exists) {
            setData(doc.data());
          } else {
            console.log("No such document!");
            //If no saved cards under the user then this error is thrown to them
          }
        });
      } catch (error) {
        console.error(error.message);
      }
  }, []);

return (
<SafeAreaView style = {{flex: 1,backgroundColor:'#B6B7E5'}}>
<Image source={ellipsepink} 
                    style={{position: 'absolute',
                    left: -0,
                    top: -20,
                    scaleX:-1}}>
                </Image>
                
                <Image source={ellipsegrey} 
                    style={{position: 'absolute',
                    right:-40,
                    bottom:0}}>
                </Image>

                <TouchableOpacity onPress={()=>navigation.pop()}>
                <Image source={leftarrow} 
                style={{ width: 50, 
                height: 50,
                right:-10,
                bottom:-610
                }} />
                </TouchableOpacity>

                <View style={{ marginTop: 30 }}>
        {data && data.cards.map((card, index) => (
          <View key={index} style={styles.cardContainer}>
            <Text style={styles.cardTitle}>{card.cardtype}</Text>
            
            {card.cardtype === 'Credit/Debit' ? (
              <>
                <Text>Name: {card.name}</Text>
                <Text>Card Number: {card.cardNumber}</Text>
                <Text>Expiration Date: {card.expDate}</Text>
              </>
            ) : card.cardtype === 'Meal Plan/Carolina Cash' ? (
              <>
                <Text>Student ID: {card.studentID}</Text>
                <Text>Barcode: {card.studentBarcode}</Text>
              </>
            ) : null}
          </View>
        ))}
      </View>
    </SafeAreaView>
    
        );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b6b7e5',
    padding: 45,
  },
  cardContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginBottom: 20,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  
});

export default PaymentDetails;