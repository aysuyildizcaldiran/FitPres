import React from 'react';
import {View, Text, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Baslangic from './src/pages/baslangic/baslangic';
import SignIn from './src/pages/login/login';
import SignUp from './src/pages/login/register';
import DailyFlow from './src/pages/home/dailyflow';
import Store from './src/pages/home/store';
import Profile from './src/pages/home/profile';
const stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const tabBarIcon = ({focused}) => {
  return (
    <View>
      <Image
        source={require('./src/assets/image/muscle.png')}
        resizeMode="contain"
        style={{width: 25, height: 25, backgroundColor: '#323131'}}
      />
    </View>
  );
};
App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator
        style={{backgroundColor: '#323131'}}
        screenOptions={{
          headerShown: false,
        }}>
        <stack.Screen name="Baslangic" component={Baslangic} />
        <stack.Screen name="SignIn" component={SignIn} />
        <stack.Screen name="SignUp" component={SignUp} />
        <stack.Screen name="Bottom" component={Bottom} />
      </stack.Navigator>
    </NavigationContainer>
  );
  function Bottom() {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#323131',
          },
        }}>
        <Tab.Screen
          name="DailyFlow"
          component={DailyFlow}
          options={{
            tabBarIcon: tabBarIcon,
          }}
        />
        <Tab.Screen
          name="Store"
          component={Store}
          options={{
            tabBarIcon: tabBarIcon,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: tabBarIcon,
          }}
        />
      </Tab.Navigator>
    );
  }
};
export default App;
