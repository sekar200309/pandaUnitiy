import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {Colors} from './../../constants/Colors'

export default function CategoryItems({icons,onCategoryPress}) {
  return (
   <TouchableOpacity onPress={()=>  onCategoryPress(icons)}>
       <View style={{
        marginTop:10,
        padding:15,
        backgroundColor:Colors.ICON_BG,
        borderRadius:99,
        marginRight:10,
        marginLeft:20,
       }}
       >
          <Image source={{uri:icons.IconUrl}} 
          style={{
            width: 40, 
            height: 40
          }}
          />
    </View>
    <Text style={{
        marginTop:8,
        marginLeft:20,
        fontFamily:'outfitM',
        fontSize:12,
        textAlign:'center',marginRight:10
      }}>{icons.name}</Text>
   </TouchableOpacity>
  )
}