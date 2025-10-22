# 🔧 TECHNICAL REFERENCE

## **Project Configuration**

### **Package.json Scripts**

```json
{
  "scripts": {
    "start": "expo start --port 3001",
    "android": "expo start --android --port 3001",
    "ios": "expo start --ios --port 3001",
    "web": "expo start --web --port 3002",
    "dev": "npm run cleanup && concurrently \"npm run web\" \"npm run android\"",
    "cleanup": "taskkill /F /IM node.exe 2>nul || echo No Node processes found"
  }
}
```

### **App.json Configuration**

```json
{
  "expo": {
    "server": {
      "port": 3001
    }
  }
}
```

### **Current App.tsx Implementation**

```tsx
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PaperProvider, MD3LightTheme } from 'react-native-paper';

import AppNavigator from './navigation';

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={MD3LightTheme}>
        <AppNavigator />
      </PaperProvider>
    </SafeAreaProvider>
  );
}
```

### **Navigation Structure**

```
navigation/
├── index.tsx                 # Main navigation component
└── types.ts                  # Navigation type definitions
```

### **Navigation Component (navigation/index.tsx)**

```tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MD3LightTheme } from 'react-native-paper';

import HomeScreen from '../screens/home';
import ScanScreen from '../screens/scan';
import { RootTabParamList, IconName } from './types';

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>{/* Navigation configuration */}</Tab.Navigator>
    </NavigationContainer>
  );
}
```

## **Dependencies**

### **Production**

- expo: ~54.0.18
- react: 19.1.0
- react-native: 0.81.5
- react-native-paper: ^5.14.5
- react-native-web: ^0.21.0
- react-dom: 19.1.0

### **Development**

- @types/react: ~19.1.0
- concurrently: ^9.2.1
- typescript: ~5.9.2

## **Environment**

- Node.js: 22.21.0 (Latest LTS)
- npm: 10.9.4
- TypeScript: Configured without expo/tsconfig.base dependency

## **Port Configuration**

- Mobile/Android: 3001
- Web: 3002
- Metro Bundler: 3001

## **VS Code Launch Configurations**

```json
{
  "configurations": [
    {
      "command": "npm run start",
      "name": "Run App"
    },
    {
      "command": "npm run android",
      "name": "Run Android App"
    },
    {
      "command": "npm run ios",
      "name": "Run iOS App"
    },
    {
      "command": "npm run web",
      "name": "Run Web App"
    },
    {
      "command": "npm run dev",
      "name": "Run Web + Android (Parallel)"
    }
  ]
}
```

## **Key Fixes Applied**

- ✅ SafeAreaView deprecation: Using react-native-safe-area-context
- ✅ TypeScript configuration: Removed expo/tsconfig.base dependency
- ✅ Port conflicts: Custom ports 3001/3002
- ✅ Node.js version: Upgraded to 22.21.0 LTS
- ✅ Parallel development: Concurrently package for simultaneous platforms

## **Material Design Components**

- PaperProvider: Theme context provider
- MD3LightTheme: Material Design 3 light theme
- SafeAreaProvider/SafeAreaView: Safe area handling
- Text: Material Design typography
- Button: Material Design button component
