import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, Card, Button, Surface, useTheme } from 'react-native-paper';

import { styles } from './styles';

export default function HomeScreen() {
  const theme = useTheme();

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header Section */}
        <Surface
          style={[styles.header, { backgroundColor: theme.colors.primary }]}
          elevation={2}
        >
          <Text
            variant='headlineLarge'
            style={[styles.headerTitle, { color: theme.colors.onPrimary }]}
          >
            Hello, World 👋
          </Text>
          <Text
            variant='bodyLarge'
            style={[styles.headerSubtitle, { color: theme.colors.onPrimary }]}
          >
            Welcome to your Material Design app
          </Text>
        </Surface>

        {/* Main Content */}
        <Card style={styles.card} mode='elevated'>
          <Card.Content>
            <Text variant='titleMedium' style={styles.cardTitle}>
              🎨 Material Design 3
            </Text>
            <Text variant='bodyMedium' style={styles.cardText}>
              Your app is built with React Native Paper, featuring the latest
              Material Design 3 components and theming.
            </Text>
          </Card.Content>
        </Card>

        <Card style={styles.card} mode='elevated'>
          <Card.Content>
            <Text variant='titleMedium' style={styles.cardTitle}>
              📱 Cross-Platform
            </Text>
            <Text variant='bodyMedium' style={styles.cardText}>
              Runs seamlessly on iOS, Android, and Web with a single codebase.
            </Text>
          </Card.Content>
        </Card>

        <Card style={styles.card} mode='elevated'>
          <Card.Content>
            <Text variant='titleMedium' style={styles.cardTitle}>
              ⚡ Performance
            </Text>
            <Text variant='bodyMedium' style={styles.cardText}>
              Built with React Native 0.81.5, Expo SDK 54, and the New
              Architecture enabled.
            </Text>
          </Card.Content>
        </Card>

        {/* Action Buttons */}
        <Surface style={styles.buttonContainer} elevation={1}>
          <Button
            mode='contained'
            onPress={() => {}}
            style={styles.button}
            icon='star'
          >
            <Text>Get Started</Text>
          </Button>
          <Button
            mode='outlined'
            onPress={() => {}}
            style={styles.button}
            icon='information'
          >
            <Text>Learn More</Text>
          </Button>
        </Surface>
      </ScrollView>
    </SafeAreaView>
  );
}
