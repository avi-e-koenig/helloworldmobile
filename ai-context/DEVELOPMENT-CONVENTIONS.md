# 📋 DEVELOPMENT CONVENTIONS & BEST PRACTICES

## **🎯 Project Overview**

This document outlines the development conventions, coding standards, and best practices for the HelloWorldMobile React Native app with Material Design.

## **🏗️ Structure & Naming**

### **Project Organization**

```
HelloWorldMobile/
├── navigation/                 # Navigation components
│   ├── index.tsx             # Main navigation component
│   └── types.ts              # Navigation type definitions
├── screens/                    # Screen components
│   ├── home/                  # Home screen folder
│   │   ├── index.tsx         # Home component logic
│   │   └── styles.ts         # Home component styles
│   └── scan/                  # Scan screen folder
│       ├── index.tsx         # Scan component logic
│       └── styles.ts         # Scan component styles
├── ai-context/                # AI tool documentation
├── App.tsx                    # Main app component with providers
├── package.json               # Dependencies and scripts
├── app.json                   # Expo configuration
└── .vscode/launch.json        # VS Code launch configurations
```

### **File Naming Conventions**

```bash
# Component files
ComponentName.tsx           # React components
styles.ts                  # Style files
types.ts                   # Type definitions

# Utility files
component-name.ts          # Utility functions
constants.ts               # App constants
utils.ts                   # Helper functions

# Folder naming
screens/                   # Screen components
components/                # Reusable components
navigation/                # Navigation logic
hooks/                     # Custom hooks
utils/                     # Utility functions
types/                     # Type definitions
```

## **🎨 Styling & Theming**

### **Separated Styles Pattern**

```typescript
// screens/home/styles.ts
import { StyleSheet } from 'react-native';

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

### **Theme Integration**

```typescript
// ✅ Material Design 3 theming
import { useTheme, MD3LightTheme } from 'react-native-paper';

const theme = useTheme();
backgroundColor: theme.colors.primary
color: theme.colors.onPrimary

// ✅ Material Design 3 variants
<Text variant="headlineLarge">Title</Text>
<Text variant="bodyMedium">Content</Text>
```

## **📱 Components & Conventions**

### **Standard Component Structure**

```typescript
// ✅ Standard component structure with separated styles
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Component, useTheme } from 'react-native-paper';

import { styles } from './styles';

interface ComponentProps {
  // Props interface
}

export default function ComponentName({ }: ComponentProps) {
  const theme = useTheme();

  // State declarations
  // Effect hooks
  // Event handlers
  // Render logic

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      {/* Component content */}
    </SafeAreaView>
  );
}
```

### **Import Organization**

```typescript
// ✅ Import order convention
// 1. React imports
import React from 'react';
import { useState, useEffect } from 'react';

// 2. React Native imports
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// 3. Third-party library imports
import { Button, Card } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';

// 4. Local component imports
import HomeScreen from './screens/home';
import ScanScreen from './screens/scan';

// 5. Style imports (always last)
import { styles } from './styles';
```

### **Component Naming**

- **PascalCase** for components: `HomeScreen`, `ScanScreen`
- **camelCase** for functions: `handlePress`, `onSubmit`
- **kebab-case** for folders: `home/`, `scan/`
- **index.tsx** for main component file
- **styles.ts** for style files

### **Material Design Components**

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

### **Layout Patterns**

- **Cards** for content sections
- **Surfaces** for elevated content
- **SafeAreaView** for proper spacing
- **Consistent padding** (16px, 24px)

## **🧭 Navigation**

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

- **Custom headers** - Use Material Design headers in screens
- **Consistent theming** - Material Design 3 colors
- **Icon integration** - MaterialCommunityIcons from Expo

## **🔧 Git & Branch Workflow**

### **Branch Strategy**

- **`main`** - Production branch (stable releases)
- **`staging`** - Pre-production testing branch (current development)

### **Branch Naming Convention**

```bash
# ✅ Branch naming patterns
feature/description        # New features
bugfix/description         # Bug fixes
hotfix/description         # Critical fixes
refactor/description       # Code refactoring
docs/description          # Documentation updates
chore/description         # Maintenance tasks

# Examples:
feature/home-navigation
bugfix/navigation-issue
refactor/component-structure
```

### **Commit Flow & Conventions**

#### **Commit Message Format**

Following **Conventional Commits** specification:

```bash
<type>(<scope>): <description>

[optional body]

[optional footer]
```

#### **Commit Types**

- **`feat`** - New feature
- **`fix`** - Bug fix
- **`docs`** - Documentation changes
- **`style`** - Code style changes (formatting, etc.)
- **`refactor`** - Code refactoring
- **`test`** - Adding or updating tests
- **`chore`** - Maintenance tasks
- **`perf`** - Performance improvements
- **`ci`** - CI/CD changes
- **`build`** - Build system changes

#### **Commit Examples**

```bash
# ✅ Good commit messages
feat(home): add bottom navigation with Material Design
fix(navigation): resolve tab switching issue
docs(api): update authentication endpoints
style(components): format code with prettier
refactor(screens): split components into separate files
test(home): add unit tests for HomeScreen
chore(deps): update React Native Paper to v5.14.5

# ❌ Bad commit messages
fix stuff
update
changes
working
```

### **Development Workflow Process**

```bash
# 1. Create feature branch
git checkout staging
git pull origin staging
git checkout -b feature/new-feature

# 2. Make changes and stage files
git add .

# 3. Commit with conventional message (triggers pre-commit hooks)
git commit -m "feat(navigation): add home navigation feature"

# 4. Push to remote
git push origin feature/new-feature

# 5. Create pull request to staging
# 6. Code review process
# 7. Merge after approval
```

### **Pull Request Template**

```markdown
# ✅ PR Template

## 📋 Description

Brief description of changes

## 🎯 Type of Change

- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## 🧪 Testing

- [ ] Tested on web
- [ ] Tested on mobile
- [ ] No linting errors
- [ ] All tests pass

## 📱 Screenshots (if applicable)

Add screenshots here

## ✅ Checklist

- [ ] Code follows project conventions
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No console errors
```

## **📋 Code Quality & Linting**

### **Pre-commit Hooks (Husky + lint-staged)**

```bash
# ✅ Automatic code quality checks before commit
# - ESLint auto-fix
# - Prettier formatting
# - TypeScript type checking
```

### **Code Quality Standards**

- **No ESLint errors**
- **No TypeScript errors**
- **Prettier formatting applied**
- **No console.log statements in production**
- **Proper error handling**
- **Type safety maintained**

### **Performance Standards**

```typescript
// ✅ Performance best practices
- Use React.memo for expensive components
- Implement proper key props for VirtualizedLists
- Avoid inline object creation in render
- Use useCallback for event handlers
- Implement proper cleanup in useEffect
```

### **TypeScript Conventions**

- **Strict mode** enabled
- **Type safety** for all components
- **Interface definitions** for props
- **Proper imports** with type safety

### **Error Handling**

- **Graceful degradation** - Handle missing features
- **User feedback** - Show appropriate messages
- **Fallback UI** - Default states for components

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

## **📦 Dependencies**

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

## **📊 Versioning & Release Management**

### **Version Numbering**

```bash
# ✅ Semantic versioning (MAJOR.MINOR.PATCH)
0.1.0    # Current version
0.1.1    # Bug fix
0.2.0    # New feature
1.0.0    # First stable release
```

### **Release Process**

```bash
# ✅ Release workflow
1. Update version numbers (package.json, app.json)
2. Update changelog
3. Create release branch
4. Test thoroughly
5. Create Git tag
6. Merge to main
7. Deploy to production
```

## **🧪 Testing & Performance**

### **Testing Approach**

- **Test on web first** - `npm run web`
- **Test on mobile** - Expo Go scanning
- **Test both platforms** - Web and mobile

### **Code Review Guidelines**

- **Functionality** - Does the code work as intended?
- **Code Quality** - Is the code clean and maintainable?
- **Testing** - Are there adequate tests?
- **Documentation** - Is documentation updated?
- **Performance** - Are there performance concerns?
- **Security** - Are there security issues?
- **Standards** - Does it follow project conventions?

### **Communication Standards**

- **Use descriptive PR titles** - Clear, concise descriptions
- **Link to issues** - Reference related tickets
- **Provide context** - Explain why changes were made
- **Ask questions** - Don't hesitate to ask for clarification

## **📝 Documentation Standards**

### **Component Documentation**

```typescript
/**
 * HomeScreen component displays the main home interface
 * with Material Design 3 components and navigation
 *
 * @component
 * @example
 * <HomeScreen />
 */
export default function HomeScreen() {
  // Component implementation
}
```

### **Function Documentation**

```typescript
/**
 * Handles button press events with proper error handling
 *
 * @param event - Button press event
 * @param callback - Optional callback function
 * @returns Promise<void>
 */
const handleButtonPress = async (
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
  event: PressEvent,
  callback?: () => void
): Promise<void> => {
  // Function implementation
};
```

- `navigation/` - Navigation components

## **🔍 AI Context & Documentation**

### **Documentation Updates**

When making changes, update:

- `AI-CONTEXT-INDEX.md` - Project overview
- `TECHNICAL-REFERENCE.md` - Implementation details
- `STARTUP-GUIDE.md` - Commands and setup
- `TROUBLESHOOTING-GUIDE.md` - Issue resolution

### **Context Synchronization**

- **Keep documentation current** with code changes
- **Update search keywords** for AI tools
- **Maintain file priority** hierarchy
- **Verify information accuracy**

## **🎯 Future Considerations**

### **Planned Improvements**

- **Shared styles system** - Extract reusable styles across components
- **Theme customization** - Dynamic theming support
- **Component library** - Reusable component system
- **Testing framework** - Unit and integration tests

### **Scalability Patterns**

- **Feature-based organization** - Group by functionality
- **Shared utilities** - Common helper functions
- **State management** - Global state solution
- **API integration** - Network layer architecture

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

- **Production Ready** - Basic app functional
- **Material Design 3** - Modern UI components
- **Navigation** - Bottom tab navigation
- **Cross-platform** - Web and mobile support
- **Organized Structure** - Folder-based component organization
- **Code Quality** - ESLint, Prettier, and pre-commit hooks

---

**📋 These conventions ensure consistent, maintainable, and scalable development practices for the HelloWorldMobile app.**
