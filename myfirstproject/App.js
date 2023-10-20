// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import TrialComponent from './TrialComponent';
import ProfilePageComponent from './ProfilePageComponent';

export default function App() {
  return (
    <View style={styles.container}>
     {/* <TrialComponent /> */}
     <ProfilePageComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
  }
});
