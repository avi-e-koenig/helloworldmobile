import { StyleSheet } from 'react-native';
import { MD3Theme } from 'react-native-paper';

export const createStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    button: {
      marginVertical: 4,
    },
    buttonContainer: {
      borderRadius: 12,
      elevation: 3,
      marginTop: 8,
      padding: 16,
      shadowColor: theme.colors.shadow || '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
    },
    card: {
      marginBottom: 16,
    },
    cardText: {
      lineHeight: 20,
    },
    cardTitle: {
      fontWeight: '600',
      marginBottom: 8,
    },
    container: {
      flex: 1,
    },
    header: {
      alignItems: 'center',
      borderRadius: 16,
      elevation: 5,
      marginBottom: 24,
      padding: 24,
      shadowColor: theme.colors.shadow || '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    headerSubtitle: {
      opacity: 0.9,
      textAlign: 'center',
    },
    headerTitle: {
      fontWeight: 'bold',
      marginBottom: 8,
    },
    scrollContent: {
      padding: 16,
    },
  });

export const styles = createStyles({ colors: { shadow: '#000' } } as MD3Theme); // Default fallback
