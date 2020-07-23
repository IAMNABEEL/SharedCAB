import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';

const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();
const ProfileStack =createStackNavigator();
const ExploreStack =createStackNavigator();
const Tab = createMaterialBottomTabNavigator();


const MainTabScreen=()=>{
    return(
        <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
      style={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor:'#ff751a',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="compass" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Detail"
        component={DetailStackScreen}
        options={{
          tabBarLabel: 'Notifications',
          tabBarColor:'#7C0397',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor:'#595EC4',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
       <Tab.Screen
        name="Settings"
        component={ExploreStackScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarColor:'#268B28',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="settings" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
    );
}


export default MainTabScreen;

const HomeStackScreen= ({navigation})=>{
    return(
      <HomeStack.Navigator screenOptions={{
        headerStyle:{
          backgroundColor:'#ff751a',
        },
    
        headerTintColor:'#fff',
    
        headerTitleStyle:{
          fontWeight:'bold',
        },
        
      }}>
                  <HomeStack.Screen name="Route" component={HomeScreen} options={{
            headerLeft:()=>(
              <Icon.Button name="ios-menu" size={25} backgroundColor="#ff751a"
              onPress={()=>navigation.openDrawer()}></Icon.Button>
            )
          }} />
      </HomeStack.Navigator>
    );
  }
  
  
  const DetailStackScreen= ({navigation})=>{
    return(
      <DetailStack.Navigator screenOptions={{
        headerStyle:{
          backgroundColor:'#7C0397',
        },
    
        headerTintColor:'#fff',
    
        headerTitleStyle:{
          fontWeight:'bold',
        },
        
      }}> 
                  <DetailStack.Screen name="Notifications" component={DetailScreen} options={{
            headerLeft:()=>(
              <Icon.Button name="ios-menu" size={25} backgroundColor="#7C0397"
              onPress={()=>navigation.openDrawer()}></Icon.Button>
            )
          }} />
      </DetailStack.Navigator>
    );
  }

  const ProfileStackScreen= ({navigation})=>{
    return(
      <ProfileStack.Navigator screenOptions={{
        headerStyle:{
          backgroundColor:'#595EC4',
        },
    
        headerTintColor:'#fff',
    
        headerTitleStyle:{
          fontWeight:'bold',
        },
        
      }}>
                  <ProfileStack.Screen name="Profile" component={ProfileScreen} options={{
            headerLeft:()=>(
              <Icon.Button name="ios-menu" size={25} backgroundColor="#595EC4"
              onPress={()=>navigation.openDrawer()}></Icon.Button>
            )
          }} />
      </ProfileStack.Navigator>
    );
  }

  const ExploreStackScreen= ({navigation})=>{
    return(
      <ExploreStack.Navigator screenOptions={{
        headerStyle:{
          backgroundColor:'#268B28',
        },
    
        headerTintColor:'#fff',
    
        headerTitleStyle:{
          fontWeight:'bold',
        },
        
      }}>
                  <ExploreStack.Screen name="Settings" component={ExploreScreen} options={{
            headerLeft:()=>(
              <Icon.Button name="ios-menu" size={25} backgroundColor="#268B28"
              onPress={()=>navigation.openDrawer()}></Icon.Button>
            )
          }} />
      </ExploreStack.Navigator>
    );
  }