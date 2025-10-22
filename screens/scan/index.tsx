import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Text,
  Card,
  Button,
  Surface,
  useTheme,
  Chip,
} from 'react-native-paper';
import { BarCodeScanner } from 'expo-barcode-scanner';

import { createStyles } from './styles';

export default function ScanScreen() {
  const theme = useTheme();
  const styles = createStyles(theme);

  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(false);
  const [scannedData, setScannedData] = useState<string>('');
  const [scannedType, setScannedType] = useState<string>('');
  const [scanHistory, setScanHistory] = useState<
    { data: string; type: string; timestamp: Date }[]
  >([]);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({
    type,
    data,
  }: {
    type: string;
    data: string;
  }) => {
    setScanned(true);
    setScannedData(data);
    setScannedType(type);

    // Add to scan history
    const newScan = {
      data,
      type,
      timestamp: new Date(),
    };
    setScanHistory(prev => [newScan, ...prev.slice(0, 9)]); // Keep last 10 scans
  };

  const resetScan = () => {
    setScanned(false);
    setScannedData('');
    setScannedType('');
  };

  const clearHistory = () => {
    setScanHistory([]);
    resetScan();
  };

  if (hasPermission === null) {
    return (
      <SafeAreaView
        style={[styles.container, { backgroundColor: theme.colors.background }]}
      >
        <Text>Requesting camera permission...</Text>
      </SafeAreaView>
    );
  }

  if (hasPermission === false) {
    return (
      <SafeAreaView
        style={[styles.container, { backgroundColor: theme.colors.background }]}
      >
        <Text>No access to camera</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      {/* Header Section */}
      <Surface
        style={[styles.header, { backgroundColor: theme.colors.primary }]}
      >
        <Text
          variant='headlineLarge'
          style={[styles.headerTitle, { color: theme.colors.onPrimary }]}
        >
          📷 Scan
        </Text>
        <Text
          variant='bodyLarge'
          style={[styles.headerSubtitle, { color: theme.colors.onPrimary }]}
        >
          Point your camera at a QR code or barcode
        </Text>
      </Surface>

      {/* Camera View */}
      <Card style={styles.card} mode='elevated'>
        <Card.Content style={styles.cardContent}>
          {!scanned ? (
            <Surface
              style={[
                styles.scanArea,
                { backgroundColor: theme.colors.surfaceVariant },
              ]}
            >
              <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={styles.cameraView}
              />
              <Text
                variant='bodyMedium'
                style={[
                  styles.scanAreaText,
                  { color: theme.colors.onSurfaceVariant },
                ]}
              >
                Position the barcode within the frame
              </Text>
            </Surface>
          ) : (
            <Surface
              style={[
                styles.scanArea,
                { backgroundColor: theme.colors.surfaceVariant },
              ]}
            >
              <Text
                variant='displaySmall'
                style={[
                  styles.scanIcon,
                  { color: theme.colors.onSurfaceVariant },
                ]}
              >
                ✅
              </Text>
              <Text
                variant='bodyLarge'
                style={[
                  styles.scanAreaText,
                  { color: theme.colors.onSurfaceVariant },
                ]}
              >
                Code Scanned!
              </Text>
              <Chip
                mode='outlined'
                style={styles.chipStyle}
                textStyle={styles.chipTextStyle}
              >
                <Text>{scannedType}</Text>
              </Chip>
              <Text
                variant='bodyMedium'
                style={[
                  styles.scanAreaText,
                  { color: theme.colors.onSurfaceVariant },
                ]}
              >
                {scannedData}
              </Text>
            </Surface>
          )}
        </Card.Content>
      </Card>

      {/* Action Buttons */}
      <Surface style={styles.buttonContainer}>
        {scanned ? (
          <Button
            mode='contained'
            onPress={resetScan}
            style={styles.button}
            icon='camera-retake'
          >
            <Text>Scan Again</Text>
          </Button>
        ) : (
          <Button
            mode='contained'
            onPress={() => {
              /** TODO: Implement scanning */
            }}
            style={styles.button}
            icon='camera'
            disabled
          >
            <Text>Scanning...</Text>
          </Button>
        )}
        <Button
          mode='outlined'
          onPress={clearHistory}
          style={styles.button}
          icon='delete-sweep'
        >
          <Text>Clear History</Text>
        </Button>
      </Surface>

      {/* Scan History */}
      {scanHistory.length > 0 && (
        <Card style={styles.card} mode='elevated'>
          <Card.Content>
            <Text
              variant='titleMedium'
              style={[styles.cardTitle, { color: theme.colors.onSurface }]}
            >
              Recent Scans
            </Text>
            {scanHistory.slice(0, 3).map((scan, index) => (
              <Surface
                key={index}
                elevation={1}
                style={[
                  styles.historyItem,
                  { backgroundColor: theme.colors.surfaceVariant },
                ]}
              >
                <Text
                  variant='bodySmall'
                  style={{ color: theme.colors.onSurfaceVariant }}
                >
                  {scan.type} • {scan.timestamp.toLocaleTimeString()}
                </Text>
                <Text
                  variant='bodyMedium'
                  style={{ color: theme.colors.onSurfaceVariant }}
                  numberOfLines={2}
                >
                  {scan.data}
                </Text>
              </Surface>
            ))}
          </Card.Content>
        </Card>
      )}
    </SafeAreaView>
  );
}
