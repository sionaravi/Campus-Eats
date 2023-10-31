import React from "react";
//this screen is the main class for our entire program.  It directs the navigation for the entire program and holds every screen we have and is called in App.js
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from "../src/screens/OnboardingScreen";
import SignInScreen from "../src/screens/SignInScreen";
import DrawerNavigation from "./DrawerNavigation";
import SouthCampus from "../src/screens/SouthCampus";
import EastCampus from "../src/screens/EastCampus";
import WestCampus from "../src/screens/WestCampus";
import FoodTrucks from "../src/screens/FoodTrucks";
import { NavigationContainer } from "@react-navigation/native";
import RussellHouseRestaurantScreen from "../src/screens/RussellHouseRestaurantScreen";
import NorthCampus from "../src/screens/NorthCampus";
import SignUpScreen from "../src/screens/SignUpScreen";
import ChickfilA from "../src/screens/RussellHouse/ChickfilA";
import TcoopStarbs from "../src/screens/WestCampus/TcoopStarbs";
import RatingScreenCFA from "../src/screens/RatingScreenCFA";
import Cart from "../src/screens/Cart";
import Payment from "../src/screens/Payment";
import Panda from "../src/screens/RussellHouse/Panda";
import TwistedTaco from "../src/screens/RussellHouse/TwistedTaco";
import Einstein from "../src/screens/RussellHouse/Einstein";
import NachoPapis from "../src/screens/FoodTrucks/NachoPapis";
import Coop from "../src/screens/FoodTrucks/Coop";
import Panera from "../src/screens/RussellHouse/Panera";
import Creamery from "../src/screens/RussellHouse/Creamery"
import CafeVerde from "../src/screens/SouthCampus/CafeVerde";
import WiredCafe from "../src/screens/SouthCampus/WiredCafe";
import CounselorsCafe from "../src/screens/NorthCampus/CounselorsCafe";
import HamptonStCafe from "../src/screens/NorthCampus/HamptonStCafe";
import ColloquiumCafe from "../src/screens/EastCampus/ColloquiumCafe.js";
import HorshoeDeli from "../src/screens/EastCampus/HorshoeDeli";
import HumanitiesStarbucks from "../src/screens/EastCampus/HumanitiesStarbucks";
import VillageJuiceAndKitchen from "../src/screens/EastCampus/VillageJuiceAndKitchen";
import Profile from "../src/screens/Profile";
import EditProfile from "../src/screens/EditProfile";
import DeliveryStatus from "../src/screens/DeliveryStatus";
import DriverApplication from "../src/screens/DriverApplication";
import PaymentDetails from "../src/screens/PaymentDetails";
import Cancel from "../src/screens/Cancel";
import Reciept from "../src/screens/Reciept";
import ContactDriver from "../src/screens/ContactDriver";
import OrderHistory from "../src/screens/OrderHistory";

const Auth = createNativeStackNavigator();
//Function used to call the screens in order of how we present them to our customers
export default function AuthStack() {
    return(
        <NavigationContainer>
        <Auth.Navigator>
            <Auth.Screen
                name= "OnboardingScreen"
                component = {OnboardingScreen}
                options = {{headerShown: false}}
            />
             <Auth.Screen
                name= "SignInScreen"
                component = {SignInScreen}
                options = {{
                    headerShown: false
                }}
            />
             <Auth.Screen
                name= "SignUpScreen"
                component = {SignUpScreen}
                options = {{
                    headerShown: false
                }}
            />

            <Auth.Screen
                name= "DrawerNavigation"
                component = {DrawerNavigation}
                options = {{
                    headerShown: false
                }}
            />

            <Auth.Screen
                name= "RussellHouseRestaurantScreen"
                component = {RussellHouseRestaurantScreen}
                options = {{
                    headerShown: false
                }}
            />

            <Auth.Screen
                name= "NorthCampus"
                component = {NorthCampus}
                options = {{
                    headerShown: false
                }}
            />

            <Auth.Screen
                name= "EastCampus"
                component = {EastCampus}
                options = {{
                    headerShown: false
                }}
            />
            <Auth.Screen
                name= "WestCampus"
                component = {WestCampus}
                options = {{
                    headerShown: false
                }}
            />
            <Auth.Screen
                name= "SouthCampus"
                component = {SouthCampus}
                options = {{
                    headerShown: false
                }}
            />
            <Auth.Screen
                name= "FoodTrucks"
                component = {FoodTrucks}
                options = {{
                    headerShown: false
                }}
            />
            <Auth.Screen
                name= "ChickfilA"
                component = {ChickfilA}
                options = {{
                    headerShown: false
                }}
            />
            <Auth.Screen
                name= "Panda"
                component = {Panda}
                options = {{
                    headerShown: false
                }}
            />
            <Auth.Screen
                name= "TwistedTaco"
                component = {TwistedTaco}
                options = {{
                    headerShown: false
                }}
            />
            <Auth.Screen
                name= "Einstein"
                component = {Einstein}
                options = {{
                    headerShown: false
                }}
            />
            <Auth.Screen
                name= "RatingScreenCFA"
                component = {RatingScreenCFA}
                options = {{
                    headerShown: false
                }}
            />
            <Auth.Screen
                name= "TcoopStarbs"
                component = {TcoopStarbs}
                options = {{
                    headerShown: false
                }}
            />
            <Auth.Screen
                name= "NachoPapis"
                component = {NachoPapis}
                options = {{
                    headerShown: false
                }}
            />
            <Auth.Screen
                name= "Coop"
                component = {Coop}
                options = {{
                    headerShown: false
                }}
            />
             
            <Auth.Screen
                name= "DriverApplication"
                component = {DriverApplication}
                options = {{
                    headerShown: false
                }}
            />
            <Auth.Screen
                name= "Profile"
                component = {Profile}
                options = {{
                    headerShown: false
                }}
            />
            <Auth.Screen
                name= "EditProfile"
                component = {EditProfile}
                options = {{
                    headerShown: false
                }}
            />
             <Auth.Screen
                name= "Cart"
                component = {Cart}
                options = {{
                    headerShown: false
                }}
            /> 
            <Auth.Screen
                name= "Payment"
                component = {Payment}
                options = {{
                    headerShown: false
                }}
            />
            <Auth.Screen
                name= "Creamery"
                component = {Creamery}
                options = {{
                    headerShown: false
                }}
            />
            <Auth.Screen
                name= "Panera"
                component = {Panera}
                options = {{
                    headerShown: false
                }}
            />
             <Auth.Screen
                name= "PaymentDetails"
                component = {PaymentDetails}
                options = {{
                    headerShown: false
                }}
            /> 
            <Auth.Screen
                name= "CafeVerde"
                component = {CafeVerde}
                options = {{
                    headerShown: false
                }}
            />
            <Auth.Screen
                name= "WiredCafe"
                component = {WiredCafe}
                options = {{
                    headerShown: false
                }}
            />
            <Auth.Screen
                name= "CounselorsCafe"
                component = {CounselorsCafe}
                options = {{
                    headerShown: false
                }}
            />
            <Auth.Screen
                name= "HamptonStCafe"
                component = {HamptonStCafe}
                options = {{
                    headerShown: false
                }}
            />
            <Auth.Screen
                name= "VillageJuiceAndKitchen"
                component = {VillageJuiceAndKitchen}
                options = {{
                    headerShown: false
                }}
            />
            <Auth.Screen
                name= "HumanitiesStarbucks"
                component = {HumanitiesStarbucks}
                options = {{
                    headerShown: false
                }}
            />
            <Auth.Screen
                name= "HorshoeDeli"
                component = {HorshoeDeli}
                options = {{
                    headerShown: false
                }}
            />
            <Auth.Screen
                name= "ColloquiumCafe"
                component = {ColloquiumCafe}
                options = {{
                    headerShown: false
                }}
            />
            
            <Auth.Screen
                name= "DeliveryStatus"
                component = {DeliveryStatus}
                options = {{
                    headerShown: false
                }}
            />
            <Auth.Screen
                name= "Cancel"
                component = {Cancel}
                options = {{
                    headerShown: false
                }}
            />
            <Auth.Screen
                name= "Reciept"
                component = {Reciept}
                options = {{
                    headerShown: false
                }}
            />
            <Auth.Screen
                name= "ContactDriver"
                component = {ContactDriver}
                options = {{
                    headerShown: false
                }}
            />
            <Auth.Screen
                name= "OrderHistory"
                component = {OrderHistory}
                options = {{
                    headerShown: false
                }}
            />

            
        </Auth.Navigator>
        </NavigationContainer>
    )
}