
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Entypo from '@expo/vector-icons/Entypo';


import Login from './Screens/Login';
import Home from './Screens/Home';



export default function BottomTab() {

  const Tab = createBottomTabNavigator();
  
  return(
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarActiveBackgroundColor: '#3c49ffff',
        tabBarActiveTintColor: '#ffffffff',
        tabBarInactiveBackgroundColor: '#00d9ffff',
        tabBarInactiveTintColor: '#000000ff',

        headerStyle: {
          backgroundColor: '#ffd7e6ff'
        },
        headerTintColor: '#ffffffff',
        headerTitleAlign: 'center',
        headerShown: false
      }}>
        <Tab.Screen name="Login" component={Login}
        options={{
          tabBarIcon: () => (
            <Entypo name="login" size={24} color="black" />
          )
        }}

        />
        <Tab.Screen name="Home" component={Home}
        options={{
          tabBarIcon: () => (
            <Entypo name="home" size={24} color="black" />
          )
        }}

        />
      </Tab.Navigator>
      
    </NavigationContainer>
  )
}