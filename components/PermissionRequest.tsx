import React from 'react';
import { Platform, Alert } from 'react-native';
import { Button, Card, Text, Surface, useTheme } from 'react-native-paper';
import { useCameraPermissions } from 'expo-camera';

import { createStyles } from './PermissionRequest.styles';

interface PermissionRequestProps {
  onPermissionGranted?: () => void;
  onPermissionDenied?: () => void;
}

/**
 * PermissionRequest component handles camera permission requests
 * with proper Material Design UI and user feedback
 *
 * @component
 * @param onPermissionGranted - Callback when permission is granted
 * @param onPermissionDenied - Callback when permission is denied
 * @example
 * <PermissionRequest
 *   onPermissionGranted={() => console.log('Permission granted')}
 *   onPermissionDenied={() => console.log('Permission denied')}
 * />
 */
export default function PermissionRequest({
  onPermissionGranted,
  onPermissionDenied,
}: PermissionRequestProps) {
  const theme = useTheme();
  const styles = createStyles();
  const [permission, requestPermission] = useCameraPermissions();

  /**
   * Handles camera permission request with proper error handling
   * Shows appropriate alerts based on permission result
   *
   * @returns Promise<void>
   */
  const handleRequestPermission = async () => {
    try {
      const result = await requestPermission();
      if (result.granted) {
        onPermissionGranted?.();
      } else {
        Alert.alert(
          'Camera Permission Required',
          'This app needs camera access to scan barcodes. Please enable camera permissions in your device settings.',
          [
            { text: 'Cancel', style: 'cancel' },
            { text: 'Try Again', onPress: handleRequestPermission },
          ]
        );
        onPermissionDenied?.();
      }
    } catch {
      Alert.alert(
        'Permission Error',
        'There was an error requesting camera permission. Please check your device settings.',
        [{ text: 'OK' }]
      );
      onPermissionDenied?.();
    }
  };

  if (Platform.OS === 'web') {
    return (
      <Card style={styles.card} mode='elevated'>
        <Card.Content>
          <Surface
            style={[
              styles.surface,
              { backgroundColor: theme.colors.surfaceVariant },
            ]}
          >
            <Text variant='displaySmall' style={styles.icon}>
              🌐
            </Text>
            <Text variant='bodyLarge' style={styles.title}>
              Camera scanning not available on web
            </Text>
            <Text variant='bodyMedium' style={styles.subtitle}>
              Please use the mobile app for barcode scanning functionality
            </Text>
          </Surface>
        </Card.Content>
      </Card>
    );
  }

  if (!permission) {
    return (
      <Card style={styles.card} mode='elevated'>
        <Card.Content>
          <Text>Requesting camera permission...</Text>
        </Card.Content>
      </Card>
    );
  }

  if (permission.granted) {
    return null; // Permission already granted
  }

  return (
    <Card style={styles.card} mode='elevated'>
      <Card.Content>
        <Surface
          style={[
            styles.surfaceWithMargin,
            { backgroundColor: theme.colors.surfaceVariant },
          ]}
        >
          <Text variant='displaySmall' style={styles.icon}>
            📷
          </Text>
          <Text variant='bodyLarge' style={styles.title}>
            Camera access required
          </Text>
          <Text variant='bodyMedium' style={styles.subtitle}>
            Please grant camera permissions to scan barcodes
          </Text>
        </Surface>

        <Button
          mode='contained'
          onPress={handleRequestPermission}
          icon='camera'
          style={styles.button}
        >
          <Text>Grant Camera Permission</Text>
        </Button>

        <Text
          variant='bodySmall'
          style={[styles.buttonText, { color: theme.colors.onSurfaceVariant }]}
        >
          Tap to request camera permission for barcode scanning
        </Text>
      </Card.Content>
    </Card>
  );
}
