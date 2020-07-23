import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ExploreScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>This is Settings Screen</Text>
        {/* <Button title="Go to Detail" onPress={()=>navigation.navigate("Detail")}></Button> */}
      </View>
    );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
