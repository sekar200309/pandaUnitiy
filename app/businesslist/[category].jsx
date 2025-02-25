import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../config/firebaseConfig';
import { Colors } from '../../constants/Colors';
import BusinessListCard from '../../components/BusinessListByCategory/BusinessListCard'

export default function BusinessListByCategory() {
  
  const navigation = useNavigation();

  const { category } = useLocalSearchParams();

  const [categoryList, setCategoryList] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: category
    })
    getBusinessList();
  }, [])



  const getBusinessList = async () => {
    setLoading(true)
    setCategoryList([])
    const q = query(collection(db, 'BusinessList'), where('category', '==', category));
    const querySnapShot = await getDocs(q);
    querySnapShot.forEach((doc) => {
      // console.log(doc.data());
      setCategoryList((prev) => {
        return ([...prev, {id:doc.id, ...doc.data()}])
      })
      // console.log(doc.id);
      
    })
    setLoading(false)
  }


  return (
    <View>
      {/* <Text>{category}</Text> */}
      {categoryList.length > 0 && loading==false ? 
      <FlatList
        data={categoryList}

        onRefresh={getBusinessList}

        refreshing={loading}
        renderItem={({ item }) => {
          return (
            <BusinessListCard business={item} />
          )
        }}
      /> : 
      loading?<ActivityIndicator 
      style={
        {
          marginTop:'80%'
        }
      }
          size='70'
          color={Colors.PRIMARY}
      />:
        <Text style={styles.container}>No Business Found for {category}</Text>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    fontSize:20,
    fontFamily:'outfitB',
    color:Colors.GRAY,
    textAlign:'center',
    marginTop:'100%'
  }
})