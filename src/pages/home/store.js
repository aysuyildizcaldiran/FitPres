import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './dailyflow.style';

Store = () => {
  return (
    <View style={{backgroundColor: '#323131', flex: 1}}>
      <View style={styles.header}>
        <Text style={styles.header_text}>Store</Text>
        <View>
          <Image
            source={require('../../assets/image/muscle.png')}
            resizeMode="contain"
            style={{width: 25, height: 25, backgroundColor: '#323131'}}
          />
        </View>
      </View>
      <View style={styles.store_pt}>
        <Text style={styles.store_pt_text}>Personel Trainer</Text>
        <View style={styles.store_pt_image}>
          <Image
            source={require('../../assets/image/user.png')}
            resizeMode="contain"
            style={{width: 100, height: 100, backgroundColor: '#323131'}}
          />
          <Image
            source={require('../../assets/image/user.png')}
            resizeMode="contain"
            style={{width: 100, height: 100, backgroundColor: '#323131'}}
          />
          <Image
            source={require('../../assets/image/user.png')}
            resizeMode="contain"
            style={{width: 100, height: 100, backgroundColor: '#323131'}}
          />
        </View>
      </View>
      <View style={styles.store_package}>
      <Text style={styles.store_pt_text}>Package</Text>

      </View>
    </View>
  );
};
export default Store;
