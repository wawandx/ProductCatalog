import React from 'react';
import { Text, Image, View, TouchableOpacity } from 'react-native';
import { HeaderBackButton } from 'react-navigation';
import Style from './Style';

const DetailProduct = (product) => {
  const { id, productName, productPrice, productImage } = product.navigation.state.params;
  const { 
    containerStyle,
    imageFullStyle,
    textStyle
  } = Style;

  return (
    <View style={containerStyle}>
      <Text style= { textStyle }>{productName}</Text>
      <Image 
          style= { imageFullStyle } 
          source= {{ uri: productImage }} 
      />
      <Text style= { textStyle }>{productPrice}</Text>
    </View>
  );
};

DetailProduct.navigationOptions = ({ navigation }) => {
  return {
    title: 'Detail Product',
    headerTitleStyle: {
      textAlign: 'center',
      flexGrow: 1,
      alignSelf: 'center'
    }
  };
}

export default DetailProduct;