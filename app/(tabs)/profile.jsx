import { View, Text, Image } from 'react-native'
import React from 'react'
import UserIntro from '../../components/Profile/UserIntro'
import MenuList from '../../components/Profile/MenuList'
import { Colors } from '../../constants/Colors'



const Profile = () => {
 
  return (

    <View style={{
      padding:5,
      backgroundColor:Colors.PRIMARY,
      height:75
  }}>

    <View>
      <Text style={{
        fontFamily:'outfitM',
        fontSize:30,
        padding:20,
        color:'#fff'
      }}>Profile</Text>
      <UserIntro />
      <MenuList />
      
      </View>
    </View>
  )
}

export default Profile