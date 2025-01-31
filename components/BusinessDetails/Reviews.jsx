// import React, { useState, useEffect } from "react";
// import { useUser } from "@clerk/clerk-expo";
// import { arrayUnion, doc, updateDoc, onSnapshot } from "firebase/firestore";
// import { Text, TextInput, ToastAndroid, TouchableOpacity, View, Dimensions,Image } from "react-native";
// import { Rating } from "react-native-ratings";
// import { db } from "../../config/firebaseConfig";
// import { Colors } from "./../../constants/Colors";

// const { width, height } = Dimensions.get("window"); // Get the screen width and height

// const Reviews = ({ details }) => {
//   const [rating, setRating] = useState(4);
//   const [userInput, setUserInput] = useState("");
//   const [reviews, setReviews] = useState([]); // Initially empty; will be populated from Firestore
//   const { user } = useUser();

//   const docRef = doc(db, "BusinessList", details?.id);

//   // Fetch real-time updates from Firestore
//   useEffect(() => {
//     const unsubscribe = onSnapshot(docRef, (docSnap) => {
//       if (docSnap.exists()) {
//         const data = docSnap.data();
//         setReviews(data.reviews || []); // Update the reviews state with real-time data
//       }
//     });

//     // Cleanup subscription when the component unmounts
//     return () => unsubscribe();
//   }, [details?.id]);

  
//   const onSubmit = async () => {
//     // Add the new review to Firestore
//     await updateDoc(docRef, {
//       reviews: arrayUnion({
//         rating: rating,
//         comment: userInput,
//         user: user?.fullName,
//         userImage: user?.imageUrl,
//       }),
//     });

//     // Show a success message
//     ToastAndroid.show("Comment added successfully", ToastAndroid.BOTTOM);
//     setUserInput(""); // Clear the input field after submission
//   };

//   return (
//     <View style={{ padding: 16, flex: 1, backgroundColor: "#fff" }}>
//       <Text
//         style={{
//           fontFamily: "outfitB", 
//           fontSize: width * 0.05, 
//           marginBottom: 10,
//         }}
//       >
//         Reviews
//       </Text>

//       <View style={{ marginBottom: 20 }}>
//         <Rating
//           showRating={false}
//           onFinishRating={(rating) => setRating(rating)}
//           style={{ paddingVertical: 10 }}
//         />
//       </View>

//       <TextInput
//         onChangeText={(value) => setUserInput(value)}
//         placeholder="Write a comment"
//         style={{
//           borderWidth: 1,
//           padding: 12,
//           borderRadius: 10,
//           borderColor: Colors.GRAY,
//           textAlignVertical: "top",
//           height: height * 0.1, // Adjusting height based on screen height
//           marginBottom: 20,
//           fontSize: width * 0.04, // Dynamically adjusting font size for better readability
//         }}
//         value={userInput} // Bind the input to state
//       />

//       <TouchableOpacity
//         disabled={!userInput}
//         onPress={onSubmit}
//         style={{
//           backgroundColor: Colors.PRIMARY,
//           paddingVertical: 10,
//           borderRadius: 5,
//           alignItems: "center",
//           width: "100%", // Full width button
//         }}
//       >
//         <Text style={{ color: "#fff", fontSize: width * 0.04 }}>Submit</Text>
//       </TouchableOpacity>

//       <View style={{ marginTop: 20 }}>
//         {reviews.map((item, index) => (
//           <View
//             key={index}
//             style={{
//               marginBottom: 15,
//               borderColor: Colors.GRAY,
//               borderWidth: 1,
//               padding: 10,
//               borderRadius: 8,
//             }}
//           >
//             <Image source={{uri:item.userImage}} 
//               style={{
//                 width:20,
//                 height:20
//               }}
//             />
//             <Text style={{ fontFamily: "outfitB", fontSize: width * 0.04 }}>{item.user}</Text>
//             <Text style={{ fontSize: width * 0.035 }}>{item.comment}</Text>
//             <Text>⭐{item.rating}</Text>
//           </View>
//         ))}
//       </View>
//     </View>
//   );
// };

// export default Reviews;




import React, { useState, useEffect } from "react";
import { useUser } from "@clerk/clerk-expo";
import { arrayUnion, doc, updateDoc, onSnapshot } from "firebase/firestore";
import { Text, TextInput, ToastAndroid, TouchableOpacity, View, Dimensions, Image } from "react-native";
// import { Rating } from "react-native-ratings";
import { db } from "../../config/firebaseConfig";
import { Colors } from "./../../constants/Colors";

const { width, height } = Dimensions.get("window");

const Reviews = ({ details }) => {
  // const [rating, setRating] = useState(4);
  const [userInput, setUserInput] = useState("");
  const [reviews, setReviews] = useState([]); // Initially empty; will be populated from Firestore
  const { user } = useUser();

  const docRef = doc(db, "BusinessList", details?.id);

  // Fetch real-time updates from Firestore
  useEffect(() => {
    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        const fetchedReviews = data.reviews || [];
        const reversedReviews = fetchedReviews.reverse(); // Reverse the reviews array
        setReviews(reversedReviews); // Update the reviews state with reversed array
      }
    });

    // Cleanup subscription when the component unmounts
    return () => unsubscribe();
  }, [details?.id]);

  const onSubmit = async () => {
    // Add the new review to Firestore
    await updateDoc(docRef, {
      reviews: arrayUnion({
        comment: userInput,
        user: user?.fullName,
        userImage: user?.imageUrl,
      }),
    });

    // Show a success message
    // ToastAndroid.show("Comment added successfully", ToastAndroid.BOTTOM);
    setUserInput(""); // Clear the input field after submission
  };

  return (
    <View style={{ padding: 16, flex: 1, backgroundColor: "#fff" }}>
       <Text style={{ fontFamily: "outfitB", fontSize: width * 0.05, marginBottom: 10 }}>
        Chat
      </Text>
{/*
      <View style={{ marginBottom: 20 }}>
        <Rating showRating={false} onFinishRating={(rating) => setRating(rating)} style={{ paddingVertical: 10 }} />
      </View> */}

      <TextInput
        onChangeText={(value) => setUserInput(value)}
        placeholder="Write a comment"
        style={{
          borderWidth: 1,
          padding: 12,
          borderRadius: 10,
          borderColor: Colors.GRAY,
          textAlignVertical: "top",
          height: height * 0.1,
          marginBottom: 20,
          fontSize: width * 0.04,
        }}
        value={userInput}
      />

      <TouchableOpacity
        disabled={!userInput}
        onPress={onSubmit}
        style={{
          backgroundColor: Colors.PRIMARY,
          paddingVertical: 10,
          borderRadius: 5,
          alignItems: "center",
          width: "100%",
        }}
      >
        <Text style={{ color: "#fff", fontSize: width * 0.04 }}>Send</Text>
      </TouchableOpacity>

      <View style={{ marginTop: 20 }}>
        {reviews.map((item, index) => (
          <View key={index} style={{ marginBottom: 15, borderColor: Colors.GRAY, borderWidth: 1, padding: 10, borderRadius: 8 }}>
            <Image source={{ uri: item.userImage }} style={{ width: 20, height: 20 }} />
            <Text style={{ fontFamily: "outfitB", fontSize: width * 0.04 }}>{item.user}</Text>
            <Text style={{ fontSize: width * 0.035 }}>{item.comment}</Text>
            {/* <Text>⭐{item.rating}</Text> */}
          </View>
        ))}
      </View>
    </View>
  );
};

export default Reviews;




