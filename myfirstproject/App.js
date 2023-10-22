// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import TrialComponent from './Components/TrialComponent';
import BatmanProfilePageComponent from './Components/BatmanProfilePageComponent';
import SupermanProfilePageComponent from './Components/SupermanProfilePageComponent';
import DiscountCalculatorComponent from './Components/DiscountCalculatorComponent';

export default function App() {
  return (
    <View style={styles.container}>
     {/* <TrialComponent /> */}
     {/* <BatmanProfilePageComponent /> */}
     {/* <SupermanProfilePageComponent/> */}
     <DiscountCalculatorComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
  }
});
