//Screen showing user their order history
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView, Image} from 'react-native';
import leftarrow  from './../../images/leftarrow.png';
import ellipsepink from './../../images/ellipsepink.png';
import ellipsegrey from './../../images/ellipsegrey.png';
import firebase from '@react-native-firebase/app';
import moment from 'moment';
import { ScrollView } from 'react-native-gesture-handler';
//Method showing the specific users previous orders from firebase and giving errors if no orders exist 
const OrderHistory = ({ navigation }) => {
  const [orders, setOrders] = useState([]);
  
  useEffect(() => {
    try {
        const user = firebase.auth().currentUser;
        firebase.
          firestore().
          collection('Reciept').
          doc(user.uid).
          collection('Orders').
          orderBy('orderAt', 'desc').
          get().
          then((querySnapshot) => {
            const data = [];
            querySnapshot.forEach((doc) => {
              data.push(doc.data());
            });
            setOrders(data);
              console.log(JSON.stringify(orders,null,2));
          })  
          .catch((error) => {
            console.error(error.message);
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
                    }}>
                </Image>
                <Text style={styles.nameText}>Order History</Text>

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
                bottom:-680
                }} />
                </TouchableOpacity>
                
                <View style={{height:'80%', width:'100%', padding:10}}>
                <ScrollView>
                  {orders && orders.map((order, orderIndex) => (
                    <View key={orderIndex} style={styles.cardContainer}>
                    <Text style = {{fontWeight:'bold'}}>
                      Date: {' '}
                      {moment.unix (order.orderAt.seconds,
                                    order.orderAt.nanoseconds)
                                    .format ('MM Do YYYY, h:mm:ss a')} 
                    </Text>

                    {order.cartItems && order.cartItems.map((cartItem, cartIndex) => (
                      <View key={cartIndex}
                      style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View>
                        <Text>Item: {cartItem.item}</Text>
                        <Text>Price: ${cartItem.price}</Text>
                        </View>
                        <View>
                        <Text> {cartItem.quantity}</Text>
                        </View>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
      </View>
    </SafeAreaView>
        );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b6b7e5',
  },
  nameText: {
    color: 'black',
    fontSize: 25,
    fontWeight: '900',
    padding:4,
    textAlign:'center',
    backgroundColor: 'white'
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

export default OrderHistory;
