// import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
// import { Colors } from '@/constants/Colors'
// import React from 'react'
// import * as WebBrowser from 'expo-web-browser'
// import { useWarmUpBrowser } from './../hooks/useWarmUpBrowser'
// import { useOAuth } from '@clerk/clerk-expo'



// WebBrowser.maybeCompleteAuthSession()
// const LoginScreen = () => { 
//   // useWarmUpBrowser();
//   useWarmUpBrowser();

//   const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

//   const onPress = React.useCallback(async () => {
//     try {
//       const { createdSessionId, signIn, signUp, setActive } =
//         await startOAuthFlow();

//       if (createdSessionId) {
//         setActive({ session: createdSessionId });
//       } else {
//         // Use signIn or signUp for next steps such as MFA
//       }
//     } catch (err) {
//       console.error("OAuth error", err);
//     }
//   }, []);

//   return (
//     <View style={styles.container}>
//       <View>
//         <Image source={require('./../assets/images/login.png')}
//           style={{
//             width:310,
//             height:600,
//             borderRadius:20,
//             borderRadius: 20,
//             borderWidth: 5, // Use borderWidth for thickness
//             borderColor: "black", 
//             padding:5,
//           }}
//         />
//       </View>

//       <View style={styles.subcontainer}>
//         <Text style={{fontSize:30,
//           fontFamily:'outfitB',
//           textAlign:"center",
//         }}>Your Ultimate  
//           <Text style={{color:Colors.PRIMARY}}> Community Business Directory </Text>
//           App
//         </Text>

//         <TouchableOpacity style={styles.button} onPress={onPress} >
//             <Text style={{textAlign:"center", color:'white'}}>Let's Get Started</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   )
// }

// export default LoginScreen

// const styles = StyleSheet.create({
//   container:{
//     display:"flex",
//     padding:5,
//     // justifyContent:"center",
//     alignItems:"center"
//   },
//   subcontainer:{
//       backgroundColor:'#fff',
     
//       marginTop:-20
//   },
//   button:{
//     backgroundColor:Colors.PRIMARY,
//     padding:10,
//     marginTop:80,
//     width:155,
//     borderRadius:10,
//     alignSelf: "center",
//     fontFamily:'outfitR'
//   }
// })



import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, Platform } from 'react-native';
import { Colors } from '@/constants/Colors';
import React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { useWarmUpBrowser } from './../hooks/useWarmUpBrowser';
import { useOAuth } from '@clerk/clerk-expo';

WebBrowser.maybeCompleteAuthSession();
const { width, height } = Dimensions.get('window'); // Get screen dimensions

const LoginScreen = () => {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error('OAuth error', err);
    }
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require('./../assets/images/login.png')}
          style={[
            styles.image,
            {
              width: width * 0.8, // Make the image width 80% of the screen width
              height: height * 0.6, // Make the image height 60% of the screen height
            },
          ]}
        />
      </View>

      <View style={styles.subcontainer}>
        <Text style={styles.title}>
          Your Ultimate
          <Text style={{ color: Colors.PRIMARY }}> Community Business Directory </Text>
          App
        </Text>

        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>Let's Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  image: {
    borderRadius: 20,
    borderWidth: 5,
    borderColor: 'black',
    resizeMode: 'contain',
  },
  subcontainer: {
    backgroundColor: '#fff',
    marginTop: -20,
    paddingHorizontal: 20,
    width: width * 0.9, // Make subcontainer width 90% of the screen width
    borderRadius: 15,
    alignItems: 'center',
    paddingVertical: 20,
    ...Platform.select({
      ios: { shadowColor: '#000', shadowOpacity: 0.2, shadowRadius: 3, shadowOffset: { width: 0, height: 2 } },
      android: { elevation: 5 },
    }),
  },
  title: {
    fontSize: width * 0.06, // Adjust font size relative to screen width
    fontFamily: 'outfitB',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: Colors.PRIMARY,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginTop: 30,
    borderRadius: 10,
    width: width * 0.6, // Button width 60% of the screen width
    alignSelf: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: width * 0.045, // Adjust font size for button text
    fontFamily: 'outfitR',
  },
});
