
import { StyleSheet, Text, View, Image} from 'react-native';
import Profile from './components/Profile';
import Images from './components/Image';
import Login from './components/Login';
import { Person, Carlos} from './components/Profile';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       {/* <Carlos/> */}
//       {/* <Person/> */}
//       {/* <Profile/> */}

//       <Text style={styles.text_title}>Dale Grêmio</Text>
//       <Images></Images>
//       <Images></Images>
//       <Images></Images>
//     </View>
//   );
// }

export default function App() {
  return (
    <Login/>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f1fff9ff',
//     alignItems: 'center',
//     justifyContent: 'space-around',
//   },

//   text_title:{
//     fontSize: 40,
//     fontWeight: 'bold',
//     color: '#ffff'
//   },
// });
