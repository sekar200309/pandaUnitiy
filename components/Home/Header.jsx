import { Image, StyleSheet, Text, TextInput, View,StatusBar } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import {Colors} from './../../constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';
const Header = () => {
    const {user} = useUser();
  return (
    <View style={{
        padding:15,
        backgroundColor:Colors.PRIMARY
    }}>
      
      <StatusBar backgroundColor={Colors.PRIMARY} barStyle="light-content" />
      <View style={{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        gap:10
      }}>
           <Image source={{uri:user.imageUrl}} 
                style={{
                    width:45,
                    height:45,
                    borderRadius:99,

                }}
           />
           <View>
            <Text style={{color:'#fff'}}>Welcome,</Text>
            <Text
             style={{
                fontSize:19,
                fontFamily:'outfitM',
                color:'#fff'
             }}>{user?.fullName}</Text>
           </View>
      </View>
      
      {/* Search bar */}
      {/* <View style={{display:'flex',
        flexDirection:'row',
       alignItems:'center',
       gap:10,
       backgroundColor:'white',
       padding:5,
       marginVertical:10,
       marginTop:15,
       borderRadius:10,
      }}>
        <Ionicons name="search" size={24} color="black" />
        <TextInput placeholder='Search...' 
            style={{
                fontSize:16,
                fontFamily:'outfitR',
                color:Colors.PRIMARY
            }}
        />
      </View> */}
    </View>

  )
}

export default Header

const styles = StyleSheet.create({})