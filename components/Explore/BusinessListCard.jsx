import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
import { useRouter } from 'expo-router'

const BusinessListCard = ({business}) => {
  const router = useRouter();

  return (
    <TouchableOpacity style={{
        backgroundColor:'#fff',
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15,
        padding:5,
    }}
    onPress={()=>router.push('/businessDetails/'+business.id)}
    >
      <Image 
        source={{uri:business.imageUrl}}
        style={{
            width:'100%',
            height:550,
            borderTopLeftRadius:15,
            borderTopRightRadius:15,
        }}
      />
      <View style={{padding:10}}>
        <Text style={{
            fontFamily:'outfitB',
            fontSize:20
        }}>{business.name}</Text>
        <Text
            style={{
                fontFamily:'outfitR',
                color:Colors.GRAY
            }}
        >{business.about}</Text>
       
      </View>
    </TouchableOpacity>
  )
}

export default BusinessListCard