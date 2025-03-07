import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import {Colors} from './../../constants/Colors'
import { collection, getDocs, query } from 'firebase/firestore'
import { db } from '../../config/firebaseConfig'
import PopularCard from './PopularCard'
const PopularBusiness = () => {
    const [BusinessList, setBusinessList] = useState([]);

    useEffect(()=>{
        GetBusinessList();
    },[])



    const GetBusinessList = async () => {
        setBusinessList([]);
        const q = query(collection(db,'BusinessList'))
        const querySnapShot = await getDocs(q);

        querySnapShot.forEach((doc)=>{
            // console.log(doc.data());
            
            setBusinessList((prev)=>{
                return (
                    [...prev,{id:doc.id, ...doc.data()}]
                )
            })
        })
    }


    
  return (

    <View>
        <View style={{
            display:'flex',
            flexDirection:'row',
            // marginTop:20,
            // marginLeft:20,
            // marginRight:20,
            margin:20,
            alignItems:'center',
            justifyContent:'space-between'
        }}>
          <Text style={{
              fontSize:20,
              fontFamily:'outfitB'
            }}>Communities</Text>
          {/* <Text style={{color:Colors.PRIMARY,fontFamily:'outfitM'}}>view all</Text> */}
        </View>

        <FlatList
          data={BusinessList}

          renderItem={({item,index})=>(
            <PopularCard business={item}/>
          )}
          numColumns={2}
          // horizontal={true}
          // showsHorizontalScrollIndicator={false}
        />
    </View>
  )
}

export default PopularBusiness