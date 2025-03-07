import { Tabs } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import {Colors} from './../../constants/Colors'
const TabLayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name='home' options={{
        tabBarLabel: "Home",
        tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />,
        tabBarActiveTintColor:Colors.PRIMARY
      }} />
    
      <Tabs.Screen name='profile' options={{
        tabBarLabel: "Profile",
        tabBarIcon: ({ color }) => <Ionicons name="person" size={24} color={color} />,
        tabBarActiveTintColor:Colors.PRIMARY
      }} />
    </Tabs>
  )
}

export default TabLayout