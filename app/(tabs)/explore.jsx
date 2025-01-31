import { View, Text, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '../../constants/Colors';
import Category from '../../components/Home/Category';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../config/firebaseConfig';
import ExploreBusinessList from '../../components/Explore/ExploreBusinessList';

const Explore = () => {
const [businessList,setBusinessList] = useState([]);


  const GetBusinessByCategory = async(category) =>{
    setBusinessList([])
    const q= query(collection(db,'BusinessList'),where('category','==',category))
    const querSnapSort = await getDocs(q)
    
    querSnapSort.forEach((doc)=>{
      console.log(doc.data());
      setBusinessList(prev=>[...prev,{id:doc.id,...doc.data()}])
    })
  }

  return (
    <ScrollView style={{ padding: 20 }} showsVerticalScrollIndicator={false}>
      <Text style={{
        fontFamily: 'outfitB',
        fontSize: 30
      }}>Explore More</Text>
      {/* Search Bar */}
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        backgroundColor: 'white',
        padding: 5,
        marginVertical: 10,
        marginTop: 15,
        borderRadius: 10,
        borderColor:Colors.PRIMARY,
        borderWidth:1,
        marginRight:20
      }}>
        <Ionicons name="search" size={24} color="black" />
        <TextInput placeholder='Search...'
          style={{
            fontSize: 16,
            fontFamily: 'outfitR',
            color: Colors.PRIMARY
          }}
        />

      </View>
      {/* Category */}

      <Category explore={true}
      onCategorySelect={(category)=>GetBusinessByCategory(category)
      }
      />

      {/* businessList */}
      

      <ExploreBusinessList businessList={businessList}/>
     

    </ScrollView>
  )
}

export default Explore