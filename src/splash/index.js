import React from 'react';
import { View, Text } from 'react-native';
import Style from './Style';

function Splash(props) {
  const {viewStyle,textStyle} = Style;
  return (
    <View style={viewStyle}>
      <Text style={textStyle} onPress={()=>props.navigation.replace('Catalog')}>SIMPLE CATALOG</Text>
    </View>
  );
}

Splash.navigationOptions = {
  header : null
}

export default Splash;