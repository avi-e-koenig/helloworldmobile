# React Native Material Design 3 Boilerplate Guide

## 🎯 Project Overview

This is a comprehensive boilerplate for creating React Native applications with Material Design 3, built with Expo, TypeScript, and React Native Paper. The project includes cross-platform support (iOS, Android, Web), barcode scanning capabilities, PWA features, and a complete development environment.

## 📋 Table of Contents

1. [Project Architecture](#project-architecture)
2. [Tech Stack](#tech-stack)
3. [Quick Start Guide](#quick-start-guide)
4. [Project Structure](#project-structure)
5. [Configuration Files](#configuration-files)
6. [Development Workflow](#development-workflow)
7. [Building & Deployment](#building--deployment)
8. [Best Practices](#best-practices)
9. [Troubleshooting](#troubleshooting)
10. [Customization Guide](#customization-guide)

## 🏗️ Project Architecture

### Core Architecture

- **Framework**: React Native 0.81.5 with Expo SDK 54.0.18
- **UI Library**: React Native Paper 5.14.5 (Material Design 3)
- **Language**: TypeScript 5.9.2
- **Navigation**: React Navigation 7.x with bottom tabs
- **State Management**: React hooks
- **Platform Support**: iOS, Android, Web (PWA)

### Key Features

- ✅ Material Design 3 components and theming
- ✅ Cross-platform navigation (bottom tabs)
- ✅ Barcode/QR code scanning (expo-camera)
- ✅ PWA support with install prompts
- ✅ TypeScript with strict configuration
- ✅ ESLint + Prettier code formatting
- ✅ Custom port configuration (3001/3002)
- ✅ VS Code launch configurations
- ✅ APK building with Gradle
- ✅ Comprehensive AI context documentation

## 🛠️ Tech Stack

### Core Dependencies

```json
{
  "expo": "~54.0.19",
  "react": "19.1.0",
  "react-native": "0.81.5",
  "react-native-paper": "^5.14.5",
  "react-native-safe-area-context": "~5.6.0",
  "react-native-screens": "~4.16.0",
  "react-native-web": "^0.21.0",
  "react-dom": "19.1.0"
}
```

### Navigation & UI

```json
{
  "@react-navigation/native": "^7.1.18",
  "@react-navigation/bottom-tabs": "^7.5.0",
  "@expo/vector-icons": "^15.0.2"
}
```

### Development Tools

```json
{
  "typescript": "~5.9.2",
  "eslint": "^9.38.0",
  "prettier": "^3.6.2",
  "concurrently": "^9.2.1",
  "cross-env": "^7.0.3"
}
```

## 🚀 Quick Start Guide

### Prerequisites

- Node.js 22.21.0 LTS or higher
- npm 10.9.4 or higher
- Expo CLI (`npm install -g @expo/cli`)
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)

### 1. Create New Project

```bash
# Create new Expo project
npx create-expo-app MyMaterialApp --template blank-typescript

# Navigate to project
cd MyMaterialApp
```

### 2. Install Dependencies

```bash
# Core dependencies
npm install react-native-paper react-native-safe-area-context react-native-screens
npm install @react-navigation/native @react-navigation/bottom-tabs
npm install @expo/vector-icons expo-camera

# Development dependencies
npm install --save-dev concurrently cross-env eslint prettier
npm install --save-dev @typescript-eslint/eslint-plugin @typescript-eslint/parser
npm install --save-dev eslint-config-expo eslint-config-prettier
npm install --save-dev eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks
```

### 3. Configure Package.json Scripts

```json
{
  "scripts": {
    "start": "cross-env NODE_ENV=development expo start --port 3001",
    "android": "cross-env NODE_ENV=development expo start --android --port 3001",
    "ios": "cross-env NODE_ENV=development expo start --ios --port 3001",
    "web": "cross-env NODE_ENV=development expo start --web --port 3002",
    "dev": "npm run cleanup && concurrently \"npm run web\" \"npm run android\"",
    "cleanup": "taskkill /F /IM node.exe 2>nul || echo No Node processes found",
    "build:apk": "bash ./build-apk.sh",
    "build:apk:clean": "cd android && ./gradlew clean && cd .. && bash ./build-apk.sh",
    "build:pwa": "npx expo export --platform web && cp public/manifest.json dist/ && cp public/sw.js dist/",
    "deploy:pwa": "npm run build:pwa && echo 'PWA ready for deployment to any web server'",
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    "format": "prettier --write \"**/*.{js,jsx,ts,tsx,json,md}\"",
    "format:check": "prettier --check \"**/*.{js,jsx,ts,tsx,json,md}\""
  }
}
```

### 4. Start Development

```bash
# Start both web and mobile (recommended)
npm run web

# Or start individual platforms
npm run start    # Mobile only
npm run android  # Android only
npm run ios      # iOS only
```

## 📁 Project Structure

```
MyMaterialApp/
├── App.tsx                          # Main app component
├── app.json                         # Expo configuration
├── package.json                     # Dependencies and scripts
├── tsconfig.json                    # TypeScript configuration
├── build-apk.sh                     # APK build script
├── components/                      # Reusable components
│   ├── PWAInstallPrompt.tsx
│   ├── PWAInstallPrompt.styles.ts
│   ├── PermissionRequest.tsx
│   └── PermissionRequest.styles.ts
├── navigation/                       # Navigation configuration
│   ├── index.tsx                    # Main navigator
│   └── types.ts                     # Navigation types
├── screens/                         # Screen components
│   ├── home/
│   │   ├── index.tsx
│   │   └── styles.ts
│   └── scan/
│       ├── index.tsx
│       └── styles.ts
├── assets/                          # Static assets
│   ├── icon.png
│   ├── splash-icon.png
│   ├── adaptive-icon.png
│   └── favicon.png
├── public/                          # Web assets
│   ├── manifest.json
│   └── sw.js
├── android/                         # Android build files
├── dist/                           # Build outputs
└── ai-context/                      # AI documentation (optional)
    ├── AI-CONTEXT-INDEX.md
    ├── STARTUP-GUIDE.md
    ├── TECHNICAL-REFERENCE.md
    └── TROUBLESHOOTING-GUIDE.md
```

## ⚙️ Configuration Files

### App.tsx (Main Component)

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

### app.json (Expo Configuration)

```json
{
  "expo": {
    "name": "MyMaterialApp",
    "slug": "my-material-app",
    "version": "1.0.0",
    "orientation": "portrait",
    "server": {
      "port": 3001
    },
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "newArchEnabled": true,
    "splash": {
      "image": "./assets/splash-icon.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.yourcompany.myapp"
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      },
      "package": "com.yourcompany.myapp",
      "permissions": [
        "android.permission.CAMERA",
        "android.permission.RECORD_AUDIO"
      ]
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "plugins": ["expo-camera"]
  }
}
```

### tsconfig.json (TypeScript Configuration)

```json
{
  "compilerOptions": {
    "target": "esnext",
    "lib": ["dom", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": ["**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"],
  "extends": "expo/tsconfig.base"
}
```

### .vscode/launch.json (VS Code Configuration)

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Run App",
      "type": "node",
      "request": "launch",
      "program": "${workspaceFolder}/node_modules/.bin/expo",
      "args": ["start", "--port", "3001"],
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen"
    },
    {
      "name": "Run Android App",
      "type": "node",
      "request": "launch",
      "program": "${workspaceFolder}/node_modules/.bin/expo",
      "args": ["start", "--android", "--port", "3001"],
      "console": "integratedTerminal"
    },
    {
      "name": "Run iOS App",
      "type": "node",
      "request": "launch",
      "program": "${workspaceFolder}/node_modules/.bin/expo",
      "args": ["start", "--ios", "--port", "3001"],
      "console": "integratedTerminal"
    },
    {
      "name": "Run Web App",
      "type": "node",
      "request": "launch",
      "program": "${workspaceFolder}/node_modules/.bin/expo",
      "args": ["start", "--web", "--port", "3002"],
      "console": "integratedTerminal"
    },
    {
      "name": "Run Web + Android (Parallel)",
      "type": "node",
      "request": "launch",
      "program": "${workspaceFolder}/node_modules/.bin/npm",
      "args": ["run", "dev"],
      "console": "integratedTerminal"
    }
  ]
}
```

## 🔄 Development Workflow

### Daily Development

1. **Start Development Server**

   ```bash
   npm run web  # Starts both web (3002) and mobile (QR code)
   ```

2. **Access Your App**
   - **Web**: `http://localhost:3002`
   - **Mobile**: Scan QR code with Expo Go app

3. **Make Changes**
   - Edit components in `screens/` or `components/`
   - Hot reload works on both platforms
   - Use Material Design components from React Native Paper

### Code Quality

```bash
# Lint code
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format

# Check formatting
npm run format:check
```

### VS Code Integration

- Press **F5** to access launch configurations
- All scripts available via integrated terminal
- Debug support available for all platforms

## 🏗️ Building & Deployment

### APK Building

```bash
# Build APK (requires Android Studio)
npm run build:apk

# Clean build
npm run build:apk:clean
```

### PWA Deployment

```bash
# Build PWA
npm run build:pwa

# Deploy PWA
npm run deploy:pwa
```

### EAS Build (Cloud)

```bash
# Install EAS CLI
npm install -g @expo/eas-cli

# Configure EAS
eas build:configure

# Build for all platforms
npm run build:all
```

## 📱 Platform-Specific Features

### Web (PWA)

- Service worker support
- Install prompts
- Responsive design
- Camera simulation (demo mode)

### Mobile (iOS/Android)

- Native camera integration
- Barcode/QR scanning
- Material Design components
- Safe area handling

### Cross-Platform

- Shared codebase
- Consistent UI/UX
- TypeScript support
- Hot reload

## 🎨 Material Design 3 Implementation

### Theme Configuration

```tsx
import { MD3LightTheme, MD3DarkTheme } from 'react-native-paper';

// Light theme (default)
const lightTheme = MD3LightTheme;

// Dark theme
const darkTheme = MD3DarkTheme;

// Custom theme
const customTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#6200ee',
    secondary: '#03dac6',
  },
};
```

### Component Usage

```tsx
import {
  Text,
  Button,
  Card,
  Surface,
  Chip,
  useTheme,
} from 'react-native-paper';

// Using components
<Card mode='elevated'>
  <Card.Content>
    <Text variant='headlineLarge'>Hello World</Text>
    <Button mode='contained' onPress={handlePress}>
      Click Me
    </Button>
  </Card.Content>
</Card>;
```

## 🔧 Best Practices

### 1. Component Structure

```tsx
// screens/home/index.tsx
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, Card, Button, useTheme } from 'react-native-paper';
import { createStyles } from './styles';

export default function HomeScreen() {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Text variant='headlineLarge'>Hello World</Text>
    </SafeAreaView>
  );
}
```

### 2. Styling with Theme

```tsx
// screens/home/styles.ts
import { StyleSheet } from 'react-native';
import { MD3Theme } from 'react-native-paper';

export const createStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
    card: {
      marginVertical: 8,
    },
  });
```

### 3. Navigation Setup

```tsx
// navigation/index.tsx
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='Scan' component={ScanScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
```

### 4. TypeScript Types

```tsx
// navigation/types.ts
export type RootTabParamList = {
  Home: undefined;
  Scan: undefined;
};

export type IconName =
  | 'home'
  | 'home-outline'
  | 'qrcode-scan'
  | 'camera'
  | 'help';
```

## 🆘 Troubleshooting

### Common Issues

#### Port Conflicts

```bash
# Kill hanging processes
npm run cleanup

# Check processes
netstat -ano | findstr :3001
```

#### Cache Issues

```bash
# Clear Metro cache
npx expo start --clear
```

#### SafeAreaView Deprecation

```tsx
// ❌ Old way
import { SafeAreaView } from 'react-native';

// ✅ New way
import { SafeAreaView } from 'react-native-safe-area-context';
```

#### TypeScript Configuration

```json
// tsconfig.json - Remove expo/tsconfig.base if causing issues
{
  "compilerOptions": {
    "target": "esnext",
    "lib": ["dom", "esnext"],
    "jsx": "react-jsx"
  }
}
```

### Debug Commands

```bash
# Check dependencies
npm list react-native-paper

# Verify installation
npx expo doctor

# Check Node version
node --version
```

## 🎨 Customization Guide

### 1. App Branding

- Replace `assets/icon.png` with your app icon
- Update `app.json` with your app details
- Modify theme colors in your components

### 2. Adding New Screens

1. Create screen component in `screens/`
2. Add to navigation in `navigation/index.tsx`
3. Update navigation types in `navigation/types.ts`

### 3. Adding New Features

- **Camera**: Already included with expo-camera
- **Storage**: Add AsyncStorage or Expo SQLite
- **Networking**: Use fetch or axios
- **Maps**: Add react-native-maps

### 4. Theming

```tsx
// Custom theme
const customTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#your-color',
    secondary: '#your-color',
  },
};
```

## 📚 Additional Resources

### Documentation

- [React Native Paper](https://reactnativepaper.com/)
- [Expo Documentation](https://docs.expo.dev/)
- [React Navigation](https://reactnavigation.org/)
- [Material Design 3](https://m3.material.io/)

### Useful Commands

```bash
# Start development
npm run web

# Build APK
npm run build:apk

# Deploy PWA
npm run deploy:pwa

# Code quality
npm run lint:fix && npm run format
```

## 🎯 Next Steps

1. **Customize the app** with your branding and features
2. **Add new screens** and navigation
3. **Implement state management** (Redux, Zustand, etc.)
4. **Add backend integration** (APIs, databases)
5. **Deploy to app stores** using EAS Build

---

**🎉 Congratulations!** You now have a complete React Native Material Design 3 boilerplate ready for development. This setup provides a solid foundation for building cross-platform mobile and web applications with modern Material Design components and best practices.
