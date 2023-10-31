import React from 'react';
import { createDrawerNavigator} from '@react-navigation/drawer';

import Profile from '../src/screens/Profile';
import CampusSideSelectionScreen from '../src/screens/CampusSideSelectionScreen';
import SignOutScreen from '../src/screens/SignOutScreen';
import DriverApplication from '../src/screens/DriverApplication';
import SearchScreen from '../src/screens/SearchScreen';
import Favorites from '../src/screens/Favorites';

const Drawer = createDrawerNavigator();
//Function that presents the user with all navigaton options from our side menu screen
export default function DrawerNavigation() {
  return (
    <Drawer.Navigator 
      screenOptions={{
        header: () => null,
      }}
    >
      <Drawer.Screen
        name="CampusSideSelectionScreen"
        component={CampusSideSelectionScreen}
        options={{
          title: 'Home',
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Profile',
        }}
      />
      <Drawer.Screen
        name = "Search Screen"
        component = {SearchScreen}
        options = {{
          title: 'Search Screen',
        }}
        />
      <Drawer.Screen
        name="DriverApplication"
        component={DriverApplication}
        options={{
          title: 'Driver Application',
        }}
      />

      <Drawer.Screen
        name="Favorites"
        component={Favorites}
        options={{
          title: 'Favorites',
        }}
      />
      
        <Drawer.Screen
        name = "Sign out"
        component = {SignOutScreen}
        options = {{
          title: 'Sign out',
        }}
        />
        
    </Drawer.Navigator>
  );
}
