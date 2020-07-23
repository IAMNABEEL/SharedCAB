import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from './screens/MainTabScreen';
import {DrawerContent} from './screens/DrawerContent';

import RootStackScreen from './screens/RootStackScreen';

const Drawer = createDrawerNavigator();

const App=()=>{
  return(
    <NavigationContainer>
    <RootStackScreen/>
      {/* <Drawer.Navigator initialRouteName="Home" drawerContent={props=><DrawerContent{...props}/>}>
        <Drawer.Screen name="Home" component={MainTabScreen} />
      </Drawer.Navigator> */}
    </NavigationContainer>

  );
}

export default App;

