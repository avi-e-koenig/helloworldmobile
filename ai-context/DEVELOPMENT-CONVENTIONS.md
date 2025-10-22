# 📋 DEVELOPMENT CONVENTIONS & BEST PRACTICES

## **🎯 Project Overview**
This document outlines the development conventions, coding standards, and best practices for the HelloWorldMobile React Native app with Material Design.

## **🏗️ Project Structure**

### **File Organization**
```
HelloWorldMobile/
├── screens/                    # Screen components
│   ├── home/                  # Home screen folder
│   │   ├── index.tsx         # Home component logic
│   │   └── styles.ts         # Home component styles
│   └── scan/                  # Scan screen folder
│       ├── index.tsx         # Scan component logic
│       └── styles.ts         # Scan component styles
├── ai-context/                # AI tool documentation
│   ├── AI-CONTEXT-INDEX.md
│   ├── STARTUP-GUIDE.md
│   ├── TECHNICAL-REFERENCE.md
│   ├── TROUBLESHOOTING-GUIDE.md
│   ├── DEVELOPMENT-CONVENTIONS.md (this file)
│   └── ...
├── App.tsx                    # Main app component
├── package.json
├── app.json
└── .vscode/launch.json
```

### **Branch Strategy**
- **`main`** - Production branch (stable releases)
- **`staging`** - Pre-production testing branch (current development)

## **🎨 Styling Conventions**

### **Current Approach: Separated Styles**
```typescript
// ✅ Current pattern - styles in separate file
// screens/home/styles.ts
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 24,
  },
});

// screens/home/index.tsx
import { styles } from './styles';
```

### **Styling Best Practices**

#### **1. Folder-Based Component Organization**
- ✅ **Component folder** - Each screen has its own folder
- ✅ **Separated concerns** - Logic in index.tsx, styles in styles.ts
- ✅ **Better maintainability** - Easier to find and modify

#### **2. Style File Structure**
```typescript
// ✅ Standard style file structure
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // Component styles here
});
```

#### **3. Component File Structure**
```typescript
// ✅ Standard component structure with separated styles
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from 'react-native-paper';

import { styles } from './styles';

export default function ComponentName() {
  const theme = useTheme();
  // Component logic here
}
```

#### **4. Theme Integration**
```typescript
// ✅ Use theme colors
const theme = useTheme();
backgroundColor: theme.colors.primary

// ✅ Material Design 3 theming
<PaperProvider theme={MD3LightTheme}>
```

## **📱 Component Conventions**

### **Component Structure**
```typescript
// ✅ Standard component structure with separated styles
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Component, useTheme } from 'react-native-paper';

import { styles } from './styles';

export default function ComponentName() {
  const theme = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      {/* Component content */}
    </SafeAreaView>
  );
}
```

### **Import Order**
1. **React imports**
2. **React Native imports**
3. **Third-party library imports**
4. **Local component imports**
5. **Style imports** (from local styles.ts file)

### **Component Naming**
- ✅ **PascalCase** for components: `HomeScreen`, `ScanScreen`
- ✅ **camelCase** for functions: `handlePress`, `onSubmit`
- ✅ **kebab-case** for folders: `home/`, `scan/`
- ✅ **index.tsx** for main component file
- ✅ **styles.ts** for style files

## **🧭 Navigation Conventions**

### **React Navigation Structure**
```typescript
// ✅ Bottom tab navigation
const Tab = createBottomTabNavigator();

<Tab.Navigator
  screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      // Icon logic
    },
    tabBarActiveTintColor: MD3LightTheme.colors.primary,
    tabBarInactiveTintColor: MD3LightTheme.colors.onSurfaceVariant,
  })}
>
```

### **Screen Configuration**
- ✅ **Custom headers** - Use Material Design headers in screens
- ✅ **Consistent theming** - Material Design 3 colors
- ✅ **Icon integration** - MaterialCommunityIcons from Expo

## **🎯 Material Design Conventions**

### **Component Usage**
```typescript
// ✅ Material Design components
import { 
  Text, 
  Card, 
  Button, 
  Surface,
  useTheme 
} from 'react-native-paper';

// ✅ Proper component props
<Button mode="contained" onPress={handlePress}>
  Action
</Button>
```

### **Theme Integration**
```typescript
// ✅ Use theme colors
const theme = useTheme();
backgroundColor: theme.colors.primary
color: theme.colors.onPrimary

// ✅ Material Design 3 variants
<Text variant="headlineLarge">Title</Text>
<Text variant="bodyMedium">Content</Text>
```

### **Layout Patterns**
- ✅ **Cards** for content sections
- ✅ **Surfaces** for elevated content
- ✅ **SafeAreaView** for proper spacing
- ✅ **Consistent padding** (16px, 24px)

## **🔧 Development Workflow**

### **Branch Management**
```bash
# ✅ Development workflow
git checkout staging          # Work on staging branch
# Make changes
git add .
git commit -m "feat: add new feature"
git push origin staging
```

### **Testing Approach**
- ✅ **Test on web first** - `npm run web`
- ✅ **Test on mobile** - Expo Go scanning
- ✅ **Test both platforms** - Web and mobile

### **Code Quality**
- ✅ **TypeScript** - Strict typing enabled
- ✅ **Linting** - No linting errors
- ✅ **Material Design** - Consistent theming

## **📦 Dependencies Management**

### **Package Installation**
```bash
# ✅ React Navigation
npm install @react-navigation/native @react-navigation/bottom-tabs

# ✅ Expo packages
npx expo install react-native-screens react-native-safe-area-context

# ✅ Vector icons
npx expo install @expo/vector-icons
```

### **Dependency Categories**
- **Navigation**: React Navigation packages
- **UI Components**: React Native Paper
- **Icons**: Expo Vector Icons
- **Platform**: Expo SDK packages

## **🚀 Launch Configurations**

### **VS Code Launch Options**
1. **"Run App"** - Standard mobile server
2. **"Run Android App"** - Android-specific build
3. **"Run iOS App"** - iOS-specific build
4. **"Run Web App"** - Web version
5. **"Run Web + Android (Parallel)"** - Both platforms

### **Port Configuration**
- **Mobile/Android**: Port 3001
- **Web**: Port 3002
- **Metro Bundler**: Port 3001

## **📋 Code Standards**

### **TypeScript Conventions**
- ✅ **Strict mode** enabled
- ✅ **Type safety** for all components
- ✅ **Interface definitions** for props
- ✅ **Proper imports** with type safety

### **Error Handling**
- ✅ **Graceful degradation** - Handle missing features
- ✅ **User feedback** - Show appropriate messages
- ✅ **Fallback UI** - Default states for components

### **Performance Considerations**
- ✅ **Efficient rendering** - Use proper React patterns
- ✅ **Memory management** - Clean up resources
- ✅ **Bundle optimization** - Minimize dependencies

## **🔍 AI Context Maintenance**

### **Documentation Updates**
When making changes, update:
- ✅ `AI-CONTEXT-INDEX.md` - Project overview
- ✅ `TECHNICAL-REFERENCE.md` - Implementation details
- ✅ `STARTUP-GUIDE.md` - Commands and setup
- ✅ `TROUBLESHOOTING-GUIDE.md` - Issue resolution

### **Context Synchronization**
- ✅ **Keep documentation current** with code changes
- ✅ **Update search keywords** for AI tools
- ✅ **Maintain file priority** hierarchy
- ✅ **Verify information accuracy**

## **🎯 Future Considerations**

### **Planned Improvements**
- ✅ **Separated styles system** - Component-specific styles in separate files
- 🔄 **Shared styles system** - Extract reusable styles across components
- 🔄 **Theme customization** - Dynamic theming support
- 🔄 **Component library** - Reusable component system
- 🔄 **Testing framework** - Unit and integration tests

### **Scalability Patterns**
- ✅ **Folder-based organization** - Each screen in its own folder
- ✅ **Separated concerns** - Logic and styles in separate files
- 🔄 **Feature-based organization** - Group by functionality
- 🔄 **Shared utilities** - Common helper functions
- 🔄 **State management** - Global state solution
- 🔄 **API integration** - Network layer architecture

---

## **📋 Quick Reference**

### **Essential Commands**
```bash
npm run web          # Start development server
npm run cleanup      # Kill hanging processes
npm run dev          # Parallel web + Android
```

### **Key Files**
- `App.tsx` - Main app component
- `screens/home/` - Home screen folder (index.tsx + styles.ts)
- `screens/scan/` - Scan screen folder (index.tsx + styles.ts)
- `ai-context/` - Documentation
- `package.json` - Dependencies

### **Current Status**
- ✅ **Production Ready** - Basic app functional
- ✅ **Material Design 3** - Modern UI components
- ✅ **Navigation** - Bottom tab navigation
- ✅ **Cross-platform** - Web and mobile support
- ✅ **Organized Structure** - Folder-based component organization
- ✅ **Separated Styles** - Component logic and styles in separate files

---

**📋 These conventions ensure consistent, maintainable, and scalable development practices for the HelloWorldMobile app.**
