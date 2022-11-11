import React from 'react';
import {
  View,
  ImageBackground,
} from 'react-native';
import styles from './login.style';
import InputText from '../../components/inputtext/text.input';
import FitImage from '../../components/logoımage/image';
import TouchButton from '../../components/touchbutton/touch.button';
Login = ({navigation}) => {
  function goToHome(){
    navigation.navigate('Bottom');
  }
  return (
    <View style={styles.loginview}>
      <View style={{flex: 2}}>
        <FitImage />
      </View>
      <ImageBackground
        source={require('../../assets/image/muscles.png')}
        resizeMode="cover"
        style={styles.loginInput}>
        <View>
          <InputText placeholder="Email" />
          <InputText placeholder="Password" />
          <TouchButton text="SIGN IN" onPress={goToHome}/>
        </View>
      </ImageBackground>
    </View>
  );
};
export default Login;
