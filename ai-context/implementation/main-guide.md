# Main Implementation Guide

This guide walks you through implementing a Hello World React Native app using your existing Expo project and React Native Paper.

## Overview

We'll transform your current basic app into a modern app featuring:
- Material Design 3 components
- Clean, centered layout
- Interactive button
- TypeScript support (already configured)

## Current App.tsx

Your current `App.tsx` contains:
```tsx
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
```

## Implementation Steps

### 1. Replace App.tsx

Replace your current `App.tsx` with the following code:

```tsx
import * as React from 'react';
import { SafeAreaView } from 'react-native';
import { PaperProvider, MD3LightTheme, Button, Text } from 'react-native-paper';

// Optional: dynamic Material You colors on Android 12+
// import { useMaterial3Theme } from 'expo-material3-theme';

export default function App() {
  // const { theme } = useMaterial3Theme(); // theme.dark, theme.light, etc.
  // const appTheme = { ...MD3LightTheme, colors: theme.light };

  return (
    <PaperProvider /* theme={appTheme} */ theme={MD3LightTheme}>
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 16 }}>
        <Text variant="headlineMedium">Hello, World 👋</Text>
        <Button mode="contained" onPress={() => {}}>
          Press me
        </Button>
      </SafeAreaView>
    </PaperProvider>
  );
}
```

### 2. Key Components Explained

#### PaperProvider
- Wraps your app to provide Material Design theme context
- Uses `MD3LightTheme` for consistent Material Design 3 styling

#### SafeAreaView
- Ensures content doesn't overlap with system UI elements
- Uses flex layout for centering content

#### Text Component
- Uses `variant="headlineMedium"` for proper Material Design typography
- Displays the main "Hello, World" message

#### Button Component
- Uses `mode="contained"` for a prominent Material Design button
- Currently has an empty `onPress` handler

### 3. Running the App

After implementing the code:

1. Start the development server:
   ```bash
   npm run start
   ```

2. You should see the Material Design Hello World app with:
   - "Hello, World 👋" text
   - A Material Design button
   - Proper Material Design theming

3. Open your app using:
   - **Expo Go**: Scan the QR code with your phone
   - **Development build**: Run `npx expo run:android`

## Code Structure

```
App.tsx
├── PaperProvider (theme wrapper)
└── SafeAreaView (layout container)
    ├── Text (headline)
    └── Button (interactive element)
```

## Next Steps

- [Code Examples](./code-examples/) - Additional implementation examples
- [Troubleshooting](./troubleshooting/common-issues.md) - Common issues and solutions
- Consider adding navigation, theming, or more interactive features

## Advanced Features (Optional)

### Dynamic Material You Theming

To enable dynamic theming on Android 12+:

1. Uncomment the import and theme usage in the code above
2. The app will automatically adapt to the user's wallpaper colors

### Custom Styling

You can customize the theme by modifying the `MD3LightTheme` object:

```tsx
const customTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: 'your-custom-color',
  },
};
```
