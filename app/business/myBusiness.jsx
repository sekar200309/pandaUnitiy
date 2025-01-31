import React, { useEffect, useState } from 'react'
import { useNavigation } from 'expo-router'
import { View, StyleSheet,Text } from "react-native";
import LottieView from "lottie-react-native";

import { Colors } from '../../constants/Colors'
const AddBusiness = () => {
  const navigation = useNavigation();
  
  useEffect(() => {
    navigation.setOptions({
        headerTitle: 'MyBusiness',
        headerShown: true
    })
    
}, [])

  return (
    <View style={styles.container}>
       <Text
        style={{
          fontFamily:'outfitB',
          fontSize:25,
          color:Colors.GRAY
        }}
      >Coming Soon...</Text>
      <LottieView
        source={require("./../../assets/Animation - 1738223833745.json")} // Update with correct path
        autoPlay
        loop
        style={styles.animation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  animation: {
    width: 300,
    height: 300,
  },
});

export default AddBusiness;
