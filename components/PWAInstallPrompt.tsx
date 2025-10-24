import React, { useState, useEffect } from 'react';
import { Platform } from 'react-native';
import { Button, Card, Text, Surface, useTheme } from 'react-native-paper';

import { createStyles } from './PWAInstallPrompt.styles';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

interface PWAInstallPromptProps {
  onInstall?: () => void;
  onDismiss?: () => void;
}

/**
 * PWAInstallPrompt component handles Progressive Web App installation
 * Shows installation prompt for supported browsers and devices
 *
 * @component
 * @param onInstall - Callback when user chooses to install
 * @param onDismiss - Callback when user dismisses the prompt
 * @example
 * <PWAInstallPrompt
 *   onInstall={() => console.log('Installing PWA')}
 *   onDismiss={() => console.log('Dismissed install prompt')}
 * />
 */
export default function PWAInstallPrompt({
  onInstall,
  onDismiss,
}: PWAInstallPromptProps) {
  const theme = useTheme();
  const styles = createStyles();
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);

  useEffect(() => {
    if (Platform.OS !== 'web') return;

    // Listen for the beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      const event = e as BeforeInstallPromptEvent;
      // Prevent the mini-infobar from appearing on mobile
      event.preventDefault();
      // Stash the event so it can be triggered later
      setDeferredPrompt(event);
      setShowInstallPrompt(true);
    };

    // Listen for the appinstalled event
    const handleAppInstalled = () => {
      setShowInstallPrompt(false);
      setDeferredPrompt(null);
    };

    window.addEventListener(
      'beforeinstallprompt',
      handleBeforeInstallPrompt as EventListener
    );
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener(
        'beforeinstallprompt',
        handleBeforeInstallPrompt as EventListener
      );
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  /**
   * Handles PWA installation when user clicks install button
   */
  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    // Show the install prompt
    deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === 'accepted') {
      onInstall?.();
    } else {
      onDismiss?.();
    }

    setDeferredPrompt(null);
    setShowInstallPrompt(false);
  };

  /**
   * Handles dismissing the install prompt
   */
  const handleDismiss = () => {
    setShowInstallPrompt(false);
    setDeferredPrompt(null);
    onDismiss?.();
  };

  // Only show on web platform
  if (Platform.OS !== 'web' || !showInstallPrompt) {
    return null;
  }

  return (
    <Card style={styles.card} mode='elevated'>
      <Card.Content>
        <Surface
          style={[
            styles.surface,
            { backgroundColor: theme.colors.primaryContainer },
          ]}
        >
          <Text variant='displaySmall' style={styles.icon}>
            📱
          </Text>
          <Text variant='titleLarge' style={styles.title}>
            Install App
          </Text>
          <Text variant='bodyMedium' style={styles.subtitle}>
            Install this app on your device for a better experience!
          </Text>
        </Surface>

        <Button
          mode='contained'
          onPress={handleInstallClick}
          style={styles.button}
          icon='download'
        >
          <Text>Install App</Text>
        </Button>

        <Button
          mode='text'
          onPress={handleDismiss}
          style={styles.dismissButton}
        >
          <Text>Not now</Text>
        </Button>
      </Card.Content>
    </Card>
  );
}
