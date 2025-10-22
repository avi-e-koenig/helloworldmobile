import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { 
  Text, 
  Card, 
  Button, 
  Surface,
  useTheme
} from 'react-native-paper';

import { styles } from './styles';

export default function ScanScreen() {
  const theme = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      {/* Header Section */}
      <Surface style={[styles.header, { backgroundColor: theme.colors.primary }]} elevation={2}>
        <Text variant="headlineLarge" style={[styles.headerTitle, { color: theme.colors.onPrimary }]}>
          📷 Scan
        </Text>
        <Text variant="bodyLarge" style={[styles.headerSubtitle, { color: theme.colors.onPrimary }]}>
          Ready to scan something?
        </Text>
      </Surface>

      {/* Main Content */}
      <Card style={styles.card} mode="elevated">
        <Card.Content style={styles.cardContent}>
          <Text variant="titleLarge" style={styles.scanIcon}>
            📱
          </Text>
          <Text variant="titleMedium" style={styles.cardTitle}>
            Scanner Feature
          </Text>
          <Text variant="bodyMedium" style={styles.cardText}>
            This is a placeholder for the scan functionality. You can implement QR code scanning, barcode scanning, or any other scanning feature here.
          </Text>
        </Card.Content>
      </Card>

      {/* Scan Area Placeholder */}
      <Surface style={[styles.scanArea, { backgroundColor: theme.colors.surfaceVariant }]} elevation={1}>
        <Text variant="bodyLarge" style={[styles.scanAreaText, { color: theme.colors.onSurfaceVariant }]}>
          📷
        </Text>
        <Text variant="titleMedium" style={[styles.scanAreaText, { color: theme.colors.onSurfaceVariant }]}>
          Scan Area
        </Text>
        <Text variant="bodySmall" style={[styles.scanAreaText, { color: theme.colors.onSurfaceVariant }]}>
          Point your camera here
        </Text>
      </Surface>

      {/* Action Buttons */}
      <Surface style={styles.buttonContainer} elevation={1}>
        <Button 
          mode="contained" 
          onPress={() => {}}
          style={styles.button}
          icon="camera"
        >
          Start Scanning
        </Button>
        <Button 
          mode="outlined" 
          onPress={() => {}}
          style={styles.button}
          icon="flashlight"
        >
          Toggle Flash
        </Button>
      </Surface>
    </SafeAreaView>
  );
}
