# AI Context Index - React Native Hello World Mobile App

## 🎯 Project Overview
**Project**: HelloWorldMobile - Material Design 3 React Native App with Expo and React Native Paper
**Status**: ✅ Fully implemented and running
**Tech Stack**: React Native 0.81.5, Expo SDK 54.0.18, React Native Paper 5.14.5, TypeScript, Node.js 22.21.0

## 📁 File Structure & Quick Access

### **Core Application Files**
- `App.tsx` - Main Material Design Hello World implementation
- `package.json` - Dependencies and scripts (custom ports: 3001/3002)
- `app.json` - Expo configuration with custom ports
- `tsconfig.json` - TypeScript configuration (fixed expo/tsconfig.base issue)
- `.vscode/launch.json` - VS Code launch configurations (5 options)

### **Documentation Structure**
```
ai-context/
├── AI-CONTEXT-INDEX.md (this file)
├── STARTUP-GUIDE.md (quick reference)
├── TECHNICAL-REFERENCE.md (implementation details)
├── TROUBLESHOOTING-GUIDE.md (common issues)
└── directories/
    ├── startup/ (quick-start.md, README.md)
    ├── setup/ (installation.md)
    ├── implementation/ (main-guide.md)
    ├── code-examples/ (App.tsx, advanced-example.tsx, README.md)
    ├── troubleshooting/ (common-issues.md, README.md)
    └── next-steps/ (enhancements.md, README.md)
```

## 🚀 Quick Commands Reference

### **Startup Commands**
- `npm run web` - **RECOMMENDED**: Starts both web (port 3002) and mobile (QR code)
- `npm run start` - Mobile only (port 3001)
- `npm run cleanup` - Kill hanging Node.js processes
- `npm run dev` - Parallel web + Android (with cleanup)

### **VS Code Launch Configurations**
1. "Run App" - Standard mobile server
2. "Run Android App" - Android-specific build
3. "Run iOS App" - iOS-specific build
4. "Run Web App" - Web version
5. "Run Web + Android (Parallel)" - Both platforms

## 🎨 Current Implementation

### **App.tsx Structure**
```tsx
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { PaperProvider, MD3LightTheme, Button, Text } from 'react-native-paper';

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={MD3LightTheme}>
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 16 }}>
          <Text variant="headlineMedium">Hello, World 👋</Text>
          <Button mode="contained" onPress={() => {}}>Press me</Button>
        </SafeAreaView>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
```

### **Key Features**
- ✅ Material Design 3 components (React Native Paper)
- ✅ SafeAreaProvider/SafeAreaView (non-deprecated)
- ✅ Custom ports (3001/3002) to avoid conflicts
- ✅ TypeScript configuration fixed
- ✅ VS Code launch configurations
- ✅ Parallel development support

## 🔧 Technical Configuration

### **Ports**
- Mobile/Android: 3001
- Web: 3002
- Metro Bundler: 3001

### **Dependencies**
- react-native-paper: ^5.14.5
- react-native-safe-area-context: (included in Expo SDK)
- react-native-web: ^0.21.0
- react-dom: 19.1.0
- concurrently: ^9.2.1 (dev dependency)

### **Node.js Setup**
- Version: 22.21.0 (Latest LTS)
- npm: 10.9.4
- nvm: Available for version switching

## 🆘 Common Issues & Solutions

### **Port Conflicts**
- Run `npm run cleanup` to kill hanging processes
- Check with `netstat -ano | findstr :3001`

### **TypeScript Issues**
- Fixed: Removed `expo/tsconfig.base` dependency
- Using standard TypeScript configuration

### **SafeAreaView Deprecation**
- Fixed: Using `react-native-safe-area-context` instead of `react-native`

### **Cache Issues**
- Run `npx expo start --clear` to clear Metro cache

## 🎯 Development Workflow

### **Daily Development**
1. Run `npm run web` (starts both platforms)
2. Open browser to `http://localhost:3002`
3. Scan QR code with Expo Go for mobile testing
4. Make changes - hot reload on both platforms

### **VS Code Integration**
- Press F5 to access launch configurations
- All scripts available via integrated terminal
- Debug support available

## 📱 Platform Support

### **Web**
- URL: `http://localhost:3002`
- React Native Web rendering
- Full Material Design support

### **Mobile (Android/iOS)**
- Expo Go app scanning
- QR code generation
- Native Material Design components

## 🔍 Search Keywords for AI Tools

**Technologies**: React Native, Expo, React Native Paper, Material Design 3, TypeScript
**Commands**: npm run web, npm run start, npm run cleanup, npm run dev
**Files**: App.tsx, package.json, app.json, tsconfig.json, launch.json
**Ports**: 3001, 3002, Metro bundler
**Components**: PaperProvider, SafeAreaView, Button, Text, MD3LightTheme
**Issues**: port conflicts, SafeAreaView deprecation, TypeScript configuration, cache issues

## 📋 Status Checklist

- ✅ Project setup complete
- ✅ React Native Paper installed
- ✅ Material Design implementation
- ✅ Custom ports configured
- ✅ VS Code launch configurations
- ✅ TypeScript configuration fixed
- ✅ SafeAreaView deprecation resolved
- ✅ Parallel development support
- ✅ Documentation complete
- ✅ Troubleshooting guides available

---

**Last Updated**: Current session
**AI Context Version**: 1.0
**Project Status**: ✅ Production Ready
