import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
import { useRouter } from 'expo-router'

const PopularCard = ({business}) => {
    const router = useRouter()


    
  return (
    <TouchableOpacity 

    onPress={()=> router.push(`/businessDetails/${business.id}`)}
        style={{
            marginTop:15,
            marginLeft:20,
            padding:10,
            backgroundColor:'#fff',
            borderRadius:15
        }}
    >
        <Image source={{uri:business.imageUrl}} 
            style={{
                width:200,
                height:130,
                borderRadius:15
            }}
        />
        <View>
            <Text 
                style={{
                    fontFamily:'outfitM',
                    fontSize:17,
                    marginTop:7
                }}
            >{business.name}</Text>
            <Text 
                style={{
                    fontFamily:'outfitM',
                    fontSize:13,
                    marginTop:7,
                    color:Colors.GRAY
                }}
            >{business.address}</Text>
            
            <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                <View style={{
                    display:'flex',
                    flexDirection:'row',
                    gap:5
                }}>
                    <Image source={require('./../../assets/images/star.png')}
                        style={{
                            width:15,
                            height:15
                        }}
                    />
                    <Text style={{
                        fontFamily:'outfitR'
                    }}>4.5</Text>
                </View>
                    <Text style={{
                        fontFamily:'outfitR',
                        backgroundColor:Colors.PRIMARY,
                        padding:3,
                        color:'#fff',
                        borderRadius:5
                    }}>{business.category}</Text>
            </View>
        </View>
    </TouchableOpacity >
  )
}

export default PopularCard