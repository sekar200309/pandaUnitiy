import { View, Text, StatusBar, ScrollView } from 'react-native'
import React from 'react'
import Header from '../../components/Home/Header'
import Slider from '../../components/Home/Slider'
import Category from '../../components/Home/Category'
import PopularBusiness from '../../components/Home/PopularBusiness'
// import Header from "./../../components/HomeScreen/Header"
const Home = () => {
  return (
    <ScrollView>
      <StatusBar barStyle='dark-content' />

      {/* Header */}
      <Header/>

      {/* Slider */}
      {/* <Slider /> */}

      {/* Category */}
      <Category />
      
      {/* Popular Business List */}
      <PopularBusiness />

    </ScrollView>
  )
}

export default Home