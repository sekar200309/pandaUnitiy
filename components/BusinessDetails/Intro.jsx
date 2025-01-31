import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';

const Intro = ({details}) => {
  const router = useRouter();
  return (
    <View>
      <View style={{
        position:'absolute',
        zIndex:10,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        backgroundColor: 'rgba(255, 255, 255, 0.28)', // Semi-transparent white
        borderRadius: 16, // Rounded corners
        shadowColor: '#000', // Box shadow color
        shadowOffset: { width: 0, height: 4 }, // Box shadow position
        shadowOpacity: 0.1, // Box shadow opacity
        borderWidth: 1, // Border width
        borderColor: 'rgba(255, 255, 255, 0.3)', // Border color
        padding: 20, 
      }}>
        <TouchableOpacity onPress={()=>router.back()}> 
                 <Ionicons name="arrow-back" size={30} color="black" />
        </TouchableOpacity>
        {/* <Ionicons name="heart-outline" size={30} color="black" /> */}
      </View>
      <Image source={{uri:details.imageUrl}} style={{width:'100%',height:400}}/>
      <View style={{
        padding:20,
        marginTop:-20,
        backgroundColor:'#fff',
        borderTopRightRadius:20,
        borderTopLeftRadius:20
      }}>
        <Text
          style={{
            fontSize:26,
            fontFamily:'outfitB'
          }}
        >{details.name}</Text>
        {/* <Text
          style={{
            fontFamily:'outfitR',
            fontSize:18
          }}
        >{details.address}</Text> */}
      </View>
    
    
    </View>
  )
}
 
export default Intro