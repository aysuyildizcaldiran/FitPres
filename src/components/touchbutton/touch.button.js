import React from 'react';
import {View, StyleSheet,Text,TouchableOpacity} from 'react-native';

TouchButton = ({onPress,text}) => {
  return (
    <View style={styles.signbutton}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.signText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default TouchButton;

const styles = StyleSheet.create({
  signText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#ffff',
  },
  signbutton: {
    margin: 20,
    padding: 10,
    width: 100,
    backgroundColor: '#8E8585',
    borderRadius: 20,
  },
});
