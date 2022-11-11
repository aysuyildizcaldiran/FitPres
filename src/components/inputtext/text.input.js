import React from 'react';
import {TextInput, View} from 'react-native-paper';
import styles from './text.style';
Input = ({placeholder,text}) => {
  return (
    <TextInput
      autoCorrect={false}   
      placeholder={placeholder}
      placeholderTextColor="white"
      style={styles.container}
    />
  );
};
export default Input;
