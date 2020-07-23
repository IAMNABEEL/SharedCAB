import React from 'react';
import { View, Text, Image, StyleSheet, StatusBar } from 'react-native';

const HomeScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
            <StatusBar barStyle="light-content"/>

        <Text>This is Map Screen</Text>
      </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },

  image:{
      height:500,
      width:360,
  },

});
