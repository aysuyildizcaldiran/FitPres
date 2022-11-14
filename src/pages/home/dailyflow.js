import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './dailyflow.style';

DailyFlow = () => {
  return (
    <View style={{backgroundColor: '#323131', flex: 1}}>
      <View style={styles.header}>
        <Text style={styles.header_text}> Daily Flow</Text>
        <View>
          <Image
            source={require('../../assets/image/muscle.png')}
            resizeMode="contain"
            style={{width: 25, height: 25, backgroundColor: '#323131'}}
          />
        </View>
      </View>
      <View style={styles.circle}>
        <Text style={styles.circle_text}>14 KASIM</Text>
      </View>
      <View style={styles.main}>
        <View style={styles.main_circle}>
          <View style={styles.main_circle1} />
          <View style={styles.main_circle2} />
          <View style={styles.main_circle3} />
        </View>
        <Text style={styles.daily_flow_text}>Sabahları yapılan spor aktivitilerinin, gün boyu enerjinizi yüksek tutacağını, daha fazla kalori yakmanıza destek olacağını ve üstelik kendinizi iyi hissedip daha sağlıklı bir gün geçirmenize destek olacağını biliyoruz. O zaman, ne yapalım edelim, sabahları spor yapmak için kendimize zaman ayıralım. Evet, zamanımız az olabilir, yetişmemiz gereken işler olabilir. Ama vücudumuzu aktive etmek için sekiz dakika yeterli. Ortalama sekiz dakikalık efor sonunda vücut yağ yakmaya ve ritmini hızlandırmaya başlar. Yani, her sabah en az 10-15 dakikayı eforlu bir fitness aktivitesine ayırmanız bile tüm gün aktif bir metabolizma ile yaşamaya destek olur.</Text>
      </View>
    </View>
  );
};
export default DailyFlow;
