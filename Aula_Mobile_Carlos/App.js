import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import { Button, Card } from 'react-native-paper';
import {drivers} from './data/drivers';


export default function App() {

  // const motorista = drivers[0]

  return (

    <ScrollView style={{flex:1}}>
    <View style={styles.container}>
      <Text style={styles.txt}>TITULO</Text>

      {drivers.map((drivers) => (
      <Card>

        <Card.Cover source={{ uri: drivers.image }}/>
        <Card.Content style={styles.card}>

          {/* <Image style={styles.img} source={require('./Sources/grêmio.jpg')}/> */}

          <Text style={styles.txt}>{drivers.name}</Text>
          <Text style={styles.txt}>{drivers.description}</Text>
          <Text style={styles.txt}>{drivers.team}</Text>
          <Text style={styles.txt}>{drivers.country}</Text>
          <Text style={styles.txt}>{'⭐'.repeat (drivers.stars)}</Text>

        </Card.Content>
      </Card>

      ))}

    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffffff',
        gap: 20
    },
    txt: {
      fontSize: 20,
      textAlign: 'justify'
    },
    img:{
      width: 200,
      height: 200
    },
    card:{
      alignItems: 'center',
      
    }
})