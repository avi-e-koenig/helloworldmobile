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
