import { View, Text, FlatList, Image, TouchableOpacity, Share } from 'react-native'
import React from 'react'
import {Colors} from '../../constants/Colors'
import { useRouter } from 'expo-router'
import { useAuth } from '@clerk/clerk-expo'
const MenuList = () => {
    const {signOut} = useAuth();
    const menuList =[
        {
            id:1,
            name:'Add New Community',
            icon:require('./../../assets/images/add.png'),
            path:'/business/add-business',
        },
        {
            id:2,
            name:'My Community',
            icon:require('./../../assets/images/MyBusiness.png'),
            path:'/business/myBusiness'
        },
        {
            id:3,
            name:'Share App',
            icon:require('./../../assets/images/share_1.png'),
            path:'share'
        },
        {
            id:4,
            name:'Logout',
            icon:require('./../../assets/images/logout.png'),
            path:'logout'
        },
    ]

    const router = useRouter()

    const onMenuClick = (item) => {
        if (item.path === 'logout') {
            signOut();
            return; // Prevent further execution
        }
    
        // if (item.path === 'share') {
        //     Share.share({
        //         message: 'Download the Community app'
        //     });
        //     return; // Prevent further execution
        // }

        if (item.path === 'share') {
            Share.share({
                message: 'Check out this amazing app! Download it here: https://drive.google.com/drive/folders/1Hii74H15Zq-KEoEsZ51FbUqr1RcPtCRg?usp=sharing',
                url: 'https://drive.google.com/drive/folders/1Hii74H15Zq-KEoEsZ51FbUqr1RcPtCRg?usp=sharing' // Use your actual app store link
            });
            return;
        }
        // Navigate only if it's a valid route
        router.push(item.path);
    };
    

  return (
    <View style={{
        padding:20,
        marginTop:50
    }}>
      <FlatList 
        data={menuList}
        numColumns={2}
        renderItem={({item,index})=>(
            <TouchableOpacity
                onPress={()=>onMenuClick(item)}
            style={{
                display:'flex',
                flexDirection:'row',
                alignItems:'center',
                gap:10,
                flex:1,
                padding:10,
                borderWidth:1,
                margin:10,
                backgroundColor:'#fff',
                borderRadius:15,
                borderColor:Colors.PRIMARY

            }}>
                <Image source={item.icon} 
                    style={{
                        width:50,
                        height:50
                    }}
                />
                <Text
                    style={{
                        fontFamily:'outfitM',
                        fontSize:16,
                        flex:1
                    }}
                >{item.name}</Text>
            </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default MenuList