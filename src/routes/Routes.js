import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import Home from '../screens/Home';
import Feed from '../screens/Feed';
import About from '../screens/About';
import Blog from '../screens/Blog';
import Info1 from '../screens/Info1';
import Info2 from '../screens/Info2';

const TabBottom = createBottomTabNavigator();

function TabBottomRoutes() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.logo}
        />
      </View>
      <TabBottom.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: '#FFFFFF',
          tabBarInactiveTintColor: '#FFFFFF',
          tabBarStyle: {
            backgroundColor: '#4F148C',
            borderTopWidth: 1,
            borderTopColor: '#FFFFFF',
          },
          tabBarItemStyle: {
            paddingVertical: 10,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            marginBottom: 5, // Aumentando o espaçamento entre o ícone e o texto
          },
          tabBarIconStyle: {
            marginBottom: -3,
          },
        }}>
        <TabBottom.Screen
          name="Bem-Vindo ao SV!"
          component={Home}
          options={{
            tabBarShowLabel: false,
            tabBarLabel: 'Home',
            tabBarIcon: ({ focused, size, color }) => (
              <Ionicons
                size={size}
                color={color}
                name={focused ? 'sunny' : 'sunny-outline'}
              />
            ),
          }}
        />
        <TabBottom.Screen
          name="Explore Nosso Cosmos"
          component={Feed}
          options={{
            tabBarShowLabel: false,
            tabBarLabel: 'Feed',
            tabBarIcon: ({ focused, size, color }) => (
              <Ionicons
                size={size}
                color={color}
                name={focused ? 'moon' : 'moon-outline'}
              />
            ),
          }}
        />
        <TabBottom.Screen
          name="Sobre Nós"
          component={About}
          options={{
            tabBarShowLabel: false,
            tabBarLabel: 'About',
            tabBarIcon: ({ focused, size, color }) => (
              <Ionicons
                size={size}
                color={color}
                name={focused ? 'star' : 'star-outline'}
              />
            ),
          }}
        />
      </TabBottom.Navigator>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name='Início'
        component={TabBottomRoutes}
        options={{
          drawerLabel: 'Início',
          drawerIcon: ({ size, color }) => (
            <Ionicons size={size} color={color} name='home' />
          )
        }}
      />
      <Drawer.Screen
        name='Blog'
        component={StackRoutes}
        options={{
          drawerLabel: 'Blog',
          drawerIcon: ({ size, color }) => (
            <Ionicons size={size} color={color} name='heart' />
          )
        }}
      />
    </Drawer.Navigator>
  );
}

const Stack = createNativeStackNavigator();

function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Blog' component={Blog} />
      <Stack.Screen name='Info1' component={Info1} />
      <Stack.Screen name='Info2' component={Info2} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2E8FB',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100, // Aumentando a altura do cabeçalho para melhorar a aparência
    backgroundColor: '#4F148C',
    paddingHorizontal: 20,
    elevation: 3, // Adicionando elevação para criar uma sombra
  },
  logo: {
    width: 80,
    height: 80,
  },
});
