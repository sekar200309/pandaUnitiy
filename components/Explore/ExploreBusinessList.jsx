// import { View, FlatList, ScrollView } from 'react-native';
// import React from 'react';
// import BusinessListCard from './BusinessListCard';

// const ExploreBusinessList = ({ businessList }) => {
//   return (

//     <ScrollView>

//     <FlatList
//       data={businessList}
//       // Use unique id instead of index
//       renderItem={({ item,index }) => <BusinessListCard business={item} key={index}/>}
//       />

//       <View style={{height:100}}></View>
//       </ScrollView>
   
//   );
// };

// export default ExploreBusinessList;
import { View, FlatList } from 'react-native';
import React from 'react';
import BusinessListCard from './BusinessListCard';

const ExploreBusinessList = ({ businessList }) => {
  return (
    <FlatList
      data={businessList}
      
      keyExtractor={(item) => item.id.toString()} // Ensure each item has a unique key
      renderItem={({ item }) => <BusinessListCard business={item} />}
      contentContainerStyle={{ paddingBottom: 100 }} // Add bottom padding to ensure content isn't cut of
     
    />
  );
};

export default ExploreBusinessList;
