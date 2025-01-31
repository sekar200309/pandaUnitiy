import About from "../../components/BusinessDetails/About";
import ActionButton from "../../components/BusinessDetails/ActionButton";
import Intro from "../../components/BusinessDetails/Intro";
import React, { useEffect, useState } from "react";
import Reviews from "../../components/BusinessDetails/Reviews";
import { useLocalSearchParams } from "expo-router";
import { doc, getDoc } from "firebase/firestore";
import { ActivityIndicator, FlatList, ScrollView, Text, View } from "react-native";
import { db } from "../../config/firebaseConfig";

import { LogBox } from "react-native";

// Suppress the warning
LogBox.ignoreLogs([
  'VirtualizedLists should never be nested', // Ignore the specific warning
]);


const BusinessDetails = () => {
  const { businessid } = useLocalSearchParams(); // Extract the business ID from params
  const [detail, setDetail] = useState(null); // Set initial state as null
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    GetBusinessDetailById();
  }, []);

  const GetBusinessDetailById = async () => {
    setLoading(true);
    try {
      const docRef = doc(db, 'BusinessList', businessid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        // Update state with fetched data
        setDetail({ id: docSnap.id, ...docSnap.data() });
      } else {
        console.log('No such document!');
      }
    } catch (error) {
      console.log('Error fetching document:', error);
    } finally {
      setLoading(false);
    }
  };

  // If the data is still loading, show a loading indicator
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  // If no data is found, show an error message
  if (!detail) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>No business details found!</Text>
      </View>
    );
  }

  return (
    // <ScrollView>

  <View>
    <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}  nestedScrollEnabled={true} >
          <View style={{ flex: 1 }}  nestedScrollEnabled={true} >
            {/* Directly render the business details */}

            <Intro details={detail}  nestedScrollEnabled={true} />

            <ActionButton details={detail}  nestedScrollEnabled={true} />
            <About details={detail}  nestedScrollEnabled={true} />
            <Reviews details={detail}  nestedScrollEnabled={true} />
          </View>
      </ScrollView>
  </View>    
      
  );
};

export default BusinessDetails;
