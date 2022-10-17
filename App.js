import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Entypo';

import HomeScreen from './src/pages/home';
import ProfileScreen from './src/pages/profile';
import QRCodeScreen from './src/pages/qrcode';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => {
        return {
          headerShown: false,
          tabBarIcon: ({color, focused, size}) => {
            let iconName;
            if (route.name === 'HomeTab') {
              iconName = 'home';
            } else if (route.name === 'ProfileTab') {
              iconName = 'user';
            }
            return (
              <Icon
                name={iconName}
                size={20}
                color={focused ? '#298fff' : '#9e9e9f'}
              />
            );
          },
        };
      }}>
      <Tab.Screen
        name="HomeTab"
        options={{
          title: '首页',
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="ProfileTab"
        options={{
          headerShown: false,
          title: '我的',
        }}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={TabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="QRcode"
        component={QRCodeScreen}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
