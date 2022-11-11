import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './login.style';
import InputText from '../../components/inputtext/text.input';
import TouchButton from '../../components/touchbutton/touch.button';

SignUp = () => {
  const imageUrl="../../assets/image/muscles.png";
  return (
    <View style={styles.loginview}>
      <Text style={styles.text}>FITPRESS</Text>
      <View style={{flex: 6}}>
        <InputText placeholder="Name" />
        <InputText placeholder="Email" />
        <InputText placeholder="Telephone" />
        <InputText placeholder="Password" />
        <TouchButton text="SIGN UP" />
        <Image
          source={require(imageUrl)}
          style={styles.loginInput2}
          resizeMode="cover"
          />
      </View>
    </View>
  );
};
export default SignUp;
