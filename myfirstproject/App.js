// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import TrialComponent from './TrialComponent';

export default function App() {
  return (
    <View style={styles.container}>
     <TrialComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
