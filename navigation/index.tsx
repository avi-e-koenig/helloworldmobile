import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MD3LightTheme } from 'react-native-paper';

import HomeScreen from '../screens/home';
import ScanScreen from '../screens/scan';
import { RootTabParamList, IconName } from './types';

const Tab = createBottomTabNavigator<RootTabParamList>();

const tablist = [
  {
    name: 'Home',
    component: HomeScreen,
    icon: 'home',
  },
  {
    name: 'Scan',
    component: ScanScreen,
    icon: 'qrcode-scan',
  },
];

/**
 * Main navigation component containing the bottom tab navigator
 * Handles navigation between Home and Scan screens with Material Design icons
 */
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: IconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Scan') {
              iconName = focused ? 'qrcode-scan' : 'qrcode-scan';
            } else {
              iconName = 'help';
            }

            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          },
          tabBarActiveTintColor: MD3LightTheme.colors.primary,
          tabBarInactiveTintColor: MD3LightTheme.colors.onSurfaceVariant,
          tabBarStyle: {
            backgroundColor: MD3LightTheme.colors.surface,
            borderTopColor: MD3LightTheme.colors.outline,
          },
          headerStyle: {
            backgroundColor: MD3LightTheme.colors.surface,
          },
          headerTintColor: MD3LightTheme.colors.onSurface,
        })}
      >
        {tablist.map(item => (
          <Tab.Screen
            key={item.name}
            name={item.name as keyof RootTabParamList}
            component={item.component}
            options={{
              title: item.name,
              headerShown: false, // We're using custom headers in our screens
            }}
          />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
