import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    alignContent: 'center',
  },
  header_text: {
    fontSize: 20,
    color: '#FFFFFF',
  },
  circle: {
    alignSelf: 'center',
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').width / 2,
    backgroundColor: '#8E8585',
    borderRadius: Dimensions.get('window').width / 2,
    margin: 20,
    flex: 5,
  },
  main: {
    margin: 25,
    flex: 9,
    backgroundColor: '#8E8585',
    borderRadius: 20,
  },
  main_circle: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    margin: 10,
  },
  main_circle1: {
    backgroundColor: '#FFFFFF',
    width: 10,
    height: 10,
    borderRadius: 5,
    margin: 2,
  },
  main_circle2: {
    backgroundColor: '#FFFFFF',
    width: 10,
    height: 10,
    borderRadius: 5,
    margin: 2,
  },
  main_circle3: {
    backgroundColor: '#FFFFFF',
    width: 10,
    height: 10,
    borderRadius: 5,
    margin: 2,
  },
  daily_flow_text: {
    margin: 10,
    color: '#FFFFFF',
  },
  circle_text: {
    alignSelf: 'center',
    color: '#FFFFFF',
    fontSize: 25,
    marginTop: 70,
  },

  //Store

  store_pt: {
    flex: 1,
  },
  store_pt_text: {
    fontSize: 15,
    margin: 10,
    color: '#FFFFFF',
  },
  store_pt_image: {
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'space-around',
  },
  store_package: {
    flex: 3,
  },

  // Profile

  user: {
    margin: 20,
    flexDirection: 'row',
  },
  user_text:{
    fontSize:20,
    margin:20,
    marginLeft:20,
    color:'#FFFFFF'
  }
});
