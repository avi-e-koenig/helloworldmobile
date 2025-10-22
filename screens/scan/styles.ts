import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    padding: 24,
    marginBottom: 24,
    borderRadius: 16,
    alignItems: 'center',
  },
  headerTitle: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  headerSubtitle: {
    opacity: 0.9,
    textAlign: 'center',
  },
  card: {
    marginBottom: 24,
  },
  cardContent: {
    alignItems: 'center',
  },
  scanIcon: {
    fontSize: 48,
    marginBottom: 16,
  },
  cardTitle: {
    marginBottom: 8,
    fontWeight: '600',
    textAlign: 'center',
  },
  cardText: {
    lineHeight: 20,
    textAlign: 'center',
  },
  scanArea: {
    height: 200,
    borderRadius: 16,
    marginBottom: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderStyle: 'dashed',
  },
  scanAreaText: {
    marginVertical: 4,
  },
  buttonContainer: {
    padding: 16,
    borderRadius: 12,
  },
  button: {
    marginVertical: 4,
  },
});
