import { View, Text, Image, FlatList, TouchableOpacity, Linking, Share } from 'react-native'
import React from 'react'


const ActionButton = ({details}) => {
    
    const ActionButtonMenu = [
        // {
        //     id:1,
        //     name:'Call',
        //     icon:require('./../../assets/images/call.png'),
        //     url:'tel:'+details.contact
        // },
        {
            id:2,
            name:'Web',
            icon:require('./../../assets/images/web.png'),
            url:"https://"+details.website
        },
        // {
        //     id:3,
        //     name:'Location',
        //     icon:require('./../../assets/images/pin.png'),
        //     url:"https://www.google.com/maps/search/?api=1&query="+details.address
        // },
        {
            id:4,
            name:'Share',
            icon:require('./../../assets/images/share.png'),
            url:"https://"+details.website
        },
    ]

    const handleUrl=(item)=>{
        if(item.name =='Share'){
            Share.share({
                message:details?.name+"\n"+details.website+"\n Find more details in App"
            })
            return ;
        }
        Linking.openURL(item.url)
    }


  return (
    <View style={{backgroundColor:'#fff',
        padding:20
    }}>
        <FlatList
            data={ActionButtonMenu}
            numColumns={4}
            columnWrapperStyle={{justifyContent:'space-around'}}
            renderItem={({item,index})=>(
                <TouchableOpacity
                onPress={()=>handleUrl(item) }
                >
                    <Image source={item.icon}
                        style={{
                            width:50,
                            height:50
                        }}
                    />
                    <Text style={{fontFamily:'outfitM', textAlign:'center'}}>{item.name}</Text>
                </TouchableOpacity>
            )}
        />
    </View>
  )
}

export default ActionButton
