import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PaperProvider, MD3LightTheme } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import HomeScreen from './screens/home';
import ScanScreen from './screens/scan';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={MD3LightTheme}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName: keyof typeof MaterialCommunityIcons.glyphMap;

                if (route.name === 'Home') {
                  iconName = focused ? 'home' : 'home-outline';
                } else if (route.name === 'Scan') {
                  iconName = focused ? 'qrcode-scan' : 'qrcode-scan';
                } else {
                  iconName = 'help';
                }

                return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
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
            <Tab.Screen 
              name="Home" 
              component={HomeScreen}
              options={{
                title: 'Home',
                headerShown: false, // We're using custom headers in our screens
              }}
            />
            <Tab.Screen 
              name="Scan" 
              component={ScanScreen}
              options={{
                title: 'Scan',
                headerShown: false, // We're using custom headers in our screens
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
}