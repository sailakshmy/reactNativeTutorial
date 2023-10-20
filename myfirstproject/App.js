// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import TrialComponent from './TrialComponent';
import BatmanProfilePageComponent from './BatmanProfilePageComponent';
import SupermanProfilePageComponent from './SupermanProfilePageComponent';

export default function App() {
  return (
    <View style={styles.container}>
     {/* <TrialComponent /> */}
     {/* <BatmanProfilePageComponent /> */}
     <SupermanProfilePageComponent/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
  }
});
