import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
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
  button_container: {
    flex: 3,
    margin:20,

  },
  signbutton:{
   margin:10,
   padding:10,
   backgroundColor:'#8E8585',
   borderRadius:10,
  },
  signText:{
   fontSize:20,
   textAlign:'center',
   color:'#ffff'
  }
});
