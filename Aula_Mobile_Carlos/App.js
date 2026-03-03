
import { StyleSheet, Text, View} from 'react-native';
import Profile from './components/Profile';
import { Person, Carlos } from './components/Profile';

export default function App() {
  return (
    <View style={styles.container}>
      <Carlos/>
      {/* <Person/> */}
      {/* <Profile/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#59ecffff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
