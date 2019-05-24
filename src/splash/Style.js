import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  viewStyle : {
    flex: 1,
    justifyContent : 'center',
    alignItems : 'center',
  },
  textStyle : {
    fontSize : 24,
    color : '#444649',
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'System'
  }
})