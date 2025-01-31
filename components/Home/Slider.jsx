import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import {db} from './../../config/firebaseConfig'
import { collection, getDocs, query } from 'firebase/firestore'


const Slider = () => {

const [sliderList,setSliderList] = useState([]);

useEffect(()=>{
  GetSliderList();
},[]);

    const GetSliderList=async()=>{
      setSliderList([]);
        const q = query(collection(db,'Slider'))
        const querySnapShot = await getDocs(q)
        querySnapShot.forEach(doc => {
            // console.log(doc.data());
            setSliderList((prev)=>{
              return(
                [...prev,doc.data()]
              )
            })
        });
    }
    
  return (
    <View>
      <Text style={{
        fontFamily:'outfitB',
        fontSize:20,
        padding:20,
       
      }}>#Core Features</Text>
      <FlatList data={sliderList}  renderItem={({item})=>(
        <Image source={{uri:item.imageUrl}} style={{
          width:300,
          height:160,
          borderRadius:15,
          marginRight:10,
        }} />

        
      )} style={{
        paddingLeft:20,
        paddingRight:20,
        
      }}
      
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      />

    </View>
  )
}

export default Slider

const styles = StyleSheet.create({})