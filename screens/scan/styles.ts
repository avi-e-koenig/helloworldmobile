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
      padding: 16,
      shadowColor: theme.colors.shadow || '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
    },
    card: {
      marginBottom: 24,
    },
    cardContent: {
      alignItems: 'center',
    },
    cardText: {
      lineHeight: 20,
      textAlign: 'center',
    },
    cardTitle: {
      fontWeight: '600',
      marginBottom: 8,
      textAlign: 'center',
    },
    container: {
      flex: 1,
      padding: 16,
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
    scanArea: {
      alignItems: 'center',
      borderRadius: 16,
      borderStyle: 'dashed',
      borderWidth: 2,
      elevation: 3,
      height: 200,
      justifyContent: 'center',
      marginBottom: 24,
      shadowColor: theme.colors.shadow || '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
    },
    scanAreaText: {
      marginVertical: 4,
    },
    scanIcon: {
      fontSize: 48,
      marginBottom: 16,
    },
  });

export const styles = createStyles({ colors: { shadow: '#000' } } as MD3Theme); // Default fallback
