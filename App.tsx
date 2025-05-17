import { Keyboard, SafeAreaView, ScrollView, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import FlatListContacts from './components/FlatListContacts';
import TodoList from './components/Todolist';
const Tab = createBottomTabNavigator();
import React from 'react';
import Calculator from './components/Calculator';
import Counter from './components/Counter';
import Login from './components/Login';
import MinMax from './components/MinMax';

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarShowIcon: false,
          tabBarStyle: {
            borderTopWidth: 0,
          },
        })}
      >
        <Tab.Screen name="TodoList" component={TodoList} />
        <Tab.Screen name="Contacts" component={FlatListContacts} />
        <Tab.Screen name="Calculator" component={Calculator} />
        <Tab.Screen name="Counter" component={Counter} />
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Min/Max" component={MinMax} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
  },
});
