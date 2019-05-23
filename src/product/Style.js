import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  flatStyle: {
    flex: 1,
    flexDirection: 'column'
  },
  imageStyle: {
    height: 140,
    width: null,
    flex: 1
  },
  containerStyle: {
    position: 'relative',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    flex: 1
  },
  imageFullStyle: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    height: 150,
    width: (Dimensions.get('screen').width)-20
  },
  textStyle: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    fontSize: 14
  }
})