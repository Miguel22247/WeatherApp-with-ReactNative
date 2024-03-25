import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
      <Text>Weather App!</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
