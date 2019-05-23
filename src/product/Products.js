import React from 'react';
import { Text, Image } from 'react-native';
import { Card, CardSection } from '../common';
import Style from './Style';

function Products({product}) {
  const { productName, productPrice, productImage } = product;
  const { imageStyle } = Style;
  return (
      <Card>
          <CardSection >
              <Image 
                  style= { imageStyle } 
                  source= {{ uri: productImage }} 
              />
              <Text>{productName}</Text>
              <Text>{productPrice}</Text>
          </CardSection>
      </Card>
  );
}

export default Products;