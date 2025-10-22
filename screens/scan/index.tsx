import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Platform, ScrollView } from 'react-native';
import {
  Text,
  Card,
  Button,
  Surface,
  useTheme,
  Chip,
} from 'react-native-paper';
import { CameraView, useCameraPermissions } from 'expo-camera';

import { createStyles } from './styles';

export default function ScanScreen() {
  const theme = useTheme();
  const styles = createStyles(theme);

  const [permission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);
  const [scannedData, setScannedData] = useState<string>('');
  const [scannedType, setScannedType] = useState<string>('');
  const [scanHistory, setScanHistory] = useState<
    { data: string; type: string; timestamp: Date }[]
  >([]);

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

  if (!permission) {
    return (
      <SafeAreaView
        style={[styles.container, { backgroundColor: theme.colors.background }]}
      >
        <Text>Requesting camera permission...</Text>
      </SafeAreaView>
    );
  }

  if (!permission.granted) {
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
            Barcode Scanner
          </Text>
        </Surface>

        {/* Web/No Camera Message */}
        <Card style={styles.card} mode='elevated'>
          <Card.Content style={styles.cardContent}>
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
                {Platform.OS === 'web' ? '🌐' : '📷'}
              </Text>
              <Text
                variant='bodyLarge'
                style={[
                  styles.scanAreaText,
                  { color: theme.colors.onSurfaceVariant },
                ]}
              >
                {Platform.OS === 'web'
                  ? 'Camera scanning not available on web'
                  : 'Camera access required'}
              </Text>
              <Text
                variant='bodyMedium'
                style={[
                  styles.scanAreaText,
                  { color: theme.colors.onSurfaceVariant },
                ]}
              >
                {Platform.OS === 'web'
                  ? 'Please use the mobile app for barcode scanning functionality'
                  : 'Please grant camera permissions to scan barcodes'}
              </Text>
            </Surface>
          </Card.Content>
        </Card>

        {/* Demo Data for Web */}
        {Platform.OS === 'web' && (
          <Card style={styles.card} mode='elevated'>
            <Card.Content>
              <Text
                variant='titleMedium'
                style={[styles.cardTitle, { color: theme.colors.onSurface }]}
              >
                Demo Scan Results
              </Text>
              <Surface
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
                  QR Code • Demo
                </Text>
                <Text
                  variant='bodyMedium'
                  style={{ color: theme.colors.onSurfaceVariant }}
                >
                  https://example.com/qr-demo
                </Text>
              </Surface>
              <Surface
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
                  UPC • Demo
                </Text>
                <Text
                  variant='bodyMedium'
                  style={{ color: theme.colors.onSurfaceVariant }}
                >
                  123456789012
                </Text>
              </Surface>
            </Card.Content>
          </Card>
        )}
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
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
              <>
                <CameraView
                  style={styles.cameraView}
                  facing='back'
                  barcodeScannerSettings={{
                    barcodeTypes: ['qr', 'pdf417', 'code128', 'ean13', 'ean8'],
                  }}
                  onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
                />
                <Text
                  variant='bodyMedium'
                  style={[
                    styles.scanAreaText,
                    styles.overlayText,
                    { color: theme.colors.onSurface },
                  ]}
                >
                  Position the barcode within the frame
                </Text>
              </>
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
          <Card style={[styles.card, styles.historySection]} mode='elevated'>
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
      </ScrollView>
    </SafeAreaView>
  );
}
