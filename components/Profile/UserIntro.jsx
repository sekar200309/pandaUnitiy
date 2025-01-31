import { View, Text,Image } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'

const UserIntro = () => {
    const {user} = useUser()
  return (
   <View
           style={{
            marginTop:20,
             display:'flex',
             justifyContent:'center',
             alignItems:'center'
   
           }}
         >
             <Image source={{uri:user.imageUrl}}
               style={{
                 width:150,
                 height:150,
                 borderRadius:99
               }}
             />
             <Text style={{
               fontFamily:'outfitB',
               fontSize:15,
               marginTop:5,
               
             }}>{user.fullName}</Text>
             <Text 
             style={{
               marginTop:5,
               fontFamily:'outfitM',
               fontSize:15,
               
             }}
             >{user.primaryEmailAddress.emailAddress}</Text>
         </View>
   
  )
}

export default UserIntro