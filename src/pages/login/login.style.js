import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    loginview:{
        backgroundColor:'#323131',
        flex:1,
    },
    loginInput:{
      justifyContent:'center',
      flex:3,
      opacity:0.4,
    },
    loginInput2:{
      width:Dimensions.get("window").width,
      opacity:0.3,
    },
     text: {
      flex:1,
      fontSize: 50,
      textAlign: 'center',
      fontWeight:'500',
      color:'#8E8585'
    },

});