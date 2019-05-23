import React from 'react';
import { Text, Image, View } from 'react-native';
import Style from './Style';

const DetailProduct = (product) => {
  //console.log(product.navigation.state);
  const { id, productName, productPrice, productImage } = product.navigation.state.params;
  const { 
    containerStyle,
    imageFullStyle,
    textStyle
  } = Style;

  console.log(DetailProduct.navigationOptions);
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

DetailProduct.navigationOptions = {
  title: 'Detail Page',
  headerTintColor: '#444649',
  headerTitleStyle: {
    fontWeight: 'normal'
  },
  headerLayoutPreset: 'center',
}
export default DetailProduct;