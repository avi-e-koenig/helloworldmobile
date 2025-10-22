import * as React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { 
  PaperProvider, 
  MD3LightTheme, 
  MD3DarkTheme,
  Button, 
  Text, 
  Card,
  TextInput,
  Switch,
  useTheme
} from 'react-native-paper';

// Example with theme toggle and more components
export default function AdvancedApp() {
  const [isDark, setIsDark] = React.useState(false);
  const [text, setText] = React.useState('');
  const [switchValue, setSwitchValue] = React.useState(false);

  const theme = isDark ? MD3DarkTheme : MD3LightTheme;

  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Text variant="headlineMedium" style={styles.title}>
            Hello, World 👋
          </Text>
          
          <Card style={styles.card}>
            <Card.Content>
              <Text variant="titleMedium">Theme Toggle</Text>
              <Switch
                value={isDark}
                onValueChange={setIsDark}
              />
            </Card.Content>
          </Card>

          <Card style={styles.card}>
            <Card.Content>
              <Text variant="titleMedium">Text Input</Text>
              <TextInput
                label="Enter some text"
                value={text}
                onChangeText={setText}
                style={styles.input}
              />
            </Card.Content>
          </Card>

          <Card style={styles.card}>
            <Card.Content>
              <Text variant="titleMedium">Interactive Elements</Text>
              <Button 
                mode="contained" 
                onPress={() => alert('Button pressed!')}
                style={styles.button}
              >
                Press me
              </Button>
              <Button 
                mode="outlined" 
                onPress={() => setText('')}
                style={styles.button}
              >
                Clear text
              </Button>
            </Card.Content>
          </Card>

          <Card style={styles.card}>
            <Card.Content>
              <Text variant="titleMedium">Switch Example</Text>
              <Switch
                value={switchValue}
                onValueChange={setSwitchValue}
              />
              <Text variant="bodyMedium">
                Switch is {switchValue ? 'ON' : 'OFF'}
              </Text>
            </Card.Content>
          </Card>
        </ScrollView>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    alignItems: 'center',
    gap: 16,
  },
  title: {
    marginBottom: 16,
    textAlign: 'center',
  },
  card: {
    width: '100%',
    maxWidth: 400,
  },
  input: {
    marginTop: 8,
  },
  button: {
    marginTop: 8,
  },
});
