import React from 'react';
import { SafeAreaView ,View,Text,Image,StyleSheet ,Dimensions} from 'react-native';

Imagee=()=>{
    return(
        <View style={style.image_container}>
        <Image
          style={style.image}
          source={require('../../assets/image/muscle.png')}
        />
        <Text style={style.text}>FITPRESS</Text>
      </View>
      
    )
    }
    export default Imagee;

const style=StyleSheet.create({
    image: {
        height: Dimensions.get('window').height / 3,
        width: Dimensions.get('window').height / 3,
        opacity: 0.8,
        marginLeft: 80,
      },
      image_container: {
        justifyContent: 'center',
        flex: 6,
      },
      text: {
        fontSize: 50,
        textAlign: 'center',
        fontWeight:'500',
        color:'#8E8585'
      },
    });
  
  