// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import TrialComponent from './Components/TrialComponent';
import BatmanProfilePageComponent from './Components/BatmanProfilePageComponent';
import SupermanProfilePageComponent from './Components/SupermanProfilePageComponent';

export default function App() {
  return (
    <View style={styles.container}>
     <TrialComponent />
     {/* <BatmanProfilePageComponent /> */}
     {/* <SupermanProfilePageComponent/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
  }
});
