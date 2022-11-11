import React from 'react';
import {
  Button,
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './baslangic.style';
Baslangic = ({navigation}) => {
  function goToSign() {
    navigation.navigate('SignIn');
  }
  function goToSignUp() {
    navigation.navigate('SignUp');
  }

  return (
    <SafeAreaView style={{flex: 1,backgroundColor:'#323131'}}>
      <View style={styles.image_container}>
        <Image
          style={styles.image}
          source={require('../../assets/image/muscle.png')}
        />
        <Text style={styles.text}>FITPRESS</Text>
      </View>
      <View style={styles.button_container}>
        <TouchableOpacity style={styles.signbutton} onPress={goToSign}>
          <Text style={styles.signText}> Go to Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signbutton} onPress={goToSignUp}>
          <Text style={styles.signText}>No account yet ? Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Baslangic;
