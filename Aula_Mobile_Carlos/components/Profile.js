import {View, Text, Image} from 'react-native';

export function Carlos(){
    return(
        <View>
            <Text>Meu primeiro componente sozinho #aura</Text>
            <Image source={require('../Sources/wega.jpg')}
            style={{width: 400, height: 400}} />
        </View>
    )
}
export function Person(){
    return(
        <View>
            <Text>Meu componente pessoa</Text>
        </View>
    )
}

export default function Profile(){
    return(
        <View>
            <Text>Meu primeiro componente :D</Text>
        </View>
    )
}