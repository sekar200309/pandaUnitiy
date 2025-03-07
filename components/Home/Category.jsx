import { FlatList, Image, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import {Colors} from './../../constants/Colors'
import {db} from './../../config/firebaseConfig'
import { collection, getDocs, query } from 'firebase/firestore'
import CategoryItems from './CategoryItems'
import { useRouter } from 'expo-router'


const Category = ({explore=false,onCategorySelect}) => {
  const [icon, setIcon] = useState([]);
  const router = useRouter();
  useEffect(()=>{
    getCategoryList();
  },[]);
  const getCategoryList=async()=>{
    setIcon([])
    const q = query(collection(db,'Icons'));
    const querSnapSort = await getDocs(q);
    querSnapSort.forEach(doc => {
      // console.log(doc.data());
      
        setIcon((prev)=>{
            return(
              [...prev, doc.data()]
            )
        })
    });
  }
 
const onCategoryPressHandle = (item) => {
  if(!explore){
    router.push('/businesslist/'+item.name)
  }
  else{
    onCategorySelect(item.name)
  }
}

  return (
    <View>

    {!explore &&<View style={{
      display:'flex',
      flexDirection:'row',
      marginTop:20,
      marginLeft:20,
      marginRight:20,
      alignItems:'center',
      justifyContent:'space-between'
    }}>
      <Text style={{
        fontSize:20,
        fontFamily:'outfitB'
      }}>Categories</Text>
      {/* <Text style={{color:Colors.PRIMARY,fontFamily:'outfitM'}}>view all</Text> */}
    </View>}

    <FlatList 
      style={{
        marginLeft:20
      }}
        data={icon}
        renderItem={({item})=>{
          return(<CategoryItems icons = {item} onCategoryPress={(category)=>onCategoryPressHandle(item)}/>)
        }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
    />
    </View>

  )
}

export default Category
