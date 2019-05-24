import React, { useState, useEffect } from 'react';
import { TouchableOpacity, FlatList } from 'react-native';
import Style from './Style';
import Products from './Products';


const { flatStyle } = Style;
const numColumns = 2;

function Catalog(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://product-catalog-api.herokuapp.com/products/')
    .then((response) => response.json())
    .then((responseJson) => {
      setProducts(responseJson.result);
    })
    .catch((error) => {
        console.error(error);
    });
  });

  function renderProducts({ item, index}) {
    //console.log(this);
    return (
      <TouchableOpacity key={item.id} onPress={() => moveScreen(item)}>
        <Products product={item}/>
      </TouchableOpacity>
    );
  }

  function moveScreen (product) {
    console.log(props)
    props.navigation.navigate('DetailProduct', { ...product })
  }

  return (
    <FlatList 
      style= {flatStyle}
      data= {products}
      renderItem= {renderProducts}
      numColumns= {numColumns}
      keyExtractor={(item, index) => item.id}
    />
  )
}

Catalog.navigationOptions = {
  header : null
}

export default Catalog;