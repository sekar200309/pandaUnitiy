import { View, Text, Image } from 'react-native'
import React from 'react'
import UserIntro from '../../components/Profile/UserIntro'
import MenuList from '../../components/Profile/MenuList'




const Profile = () => {
 
  return (
    <View>
      <Text style={{
        fontFamily:'outfitB',
        fontSize:35,
        padding:20,

      }}>Profile</Text>
      <UserIntro />
      <MenuList />
      
    </View>
  )
}

export default Profile