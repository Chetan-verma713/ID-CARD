import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <>
      <View style = {styles.footer_item}>
        <Text style = {styles.text_footer_ques} >
          Name :
        </Text>
        <Text style = {styles.text_footer_ans} >
          Chetan Verma 
        </Text>
      </View>
      <View style = {styles.footer_item}>
        <Text style = {styles.text_footer_ques} >
          Section :
        </Text>
        <Text style = {styles.text_footer_ans} >
          H [ 42 ]
        </Text>
      </View>
      <View style = {styles.footer_item}>
        <Text style = {styles.text_footer_ques} >
          Dept. :
        </Text>
        <Text style = {styles.text_footer_ans} >
          B.Tech [CSE]
        </Text>
      </View>
      <View style = {styles.footer_item}>
        <Text style = {styles.text_footer_ques} >
          Student ID :
        </Text>
        <Text style = {styles.text_footer_ans} >
          191500228 
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  footer_item: {
    flex:2,
    // borderRadius:10,
    borderColor:"black",
    backgroundColor:"white",
    flexDirection:"row",
    borderBottomWidth:2,
    // borderBottomColor: "white",
  },

  text_footer_ques: {
    fontSize:23,
    color:"#e6b800",
    fontWeight:"bold",
    textAlignVertical:"center",
    padding:20
  },

  text_footer_ans: {
    fontSize:20,
    padding:20,
    textAlignVertical:"center",
    fontWeight:"bold",
  }
});

