import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './dailyflow.style';

Profile = () => {
  return (
    <View style={{backgroundColor: '#323131', flex: 1}}>
       <View style={styles.user}>
       <View>
          <Image
            source={require('../../assets/image/user2.png')}
            resizeMode="contain"
            style={{width: 100, height: 100, backgroundColor: '#323131', borderRadius:50}}
          />
        </View>
        <Text style={styles.user_text}>Name Surname</Text>
       
      </View>

    </View>
  );
};
export default Profile;
