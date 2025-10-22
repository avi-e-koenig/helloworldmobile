import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
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
    marginBottom: 16,
  },
  cardTitle: {
    marginBottom: 8,
    fontWeight: '600',
  },
  cardText: {
    lineHeight: 20,
  },
  buttonContainer: {
    padding: 16,
    borderRadius: 12,
    marginTop: 8,
  },
  button: {
    marginVertical: 4,
  },
});
