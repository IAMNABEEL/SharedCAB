import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const DetailsScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>This is Notifications Screen</Text>
        {/* <Button title="Go to Home" onPress={()=>navigation.navigate("Home")}></Button> */}

      </View>
    );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
