import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <>
      <View style={styles.items}>
        <Text style = {styles.text_header_top} >
          ID CARD
        </Text>
      </View>
      <View style={styles.items}>
      <Image source={require('../assets/Profile.jpg')} style={styles.image} />
      </View>
      <View style={styles.items}>
      <Text style = {styles.text_header_bottom} >
        Trainee
      </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  items: {
    flexDirection: "column",
  },

  text_header_top: {
    fontSize:25,
    fontWeight:"bold",
    color:"gold",
    margin:5
  },
  
  image: {
    width:150,
    height:150,
    borderRadius:100,
    alignItems: "center",
  },

  text_header_bottom: {
    fontSize:25,
    fontWeight:"bold",
    color:"white",
    // marginTop:20
  },

});
