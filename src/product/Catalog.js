import React from 'react';
import { TouchableOpacity, FlatList } from 'react-native';
import Style from './Style';
import Products from './Products';


const { flatStyle } = Style;
const numColumns = 2;

class Catalog extends React.Component {
  static navigationOptions = {
    header: null
  };
  state = { products : [] };

  componentWillMount() {
    fetch('https://product-catalog-api.herokuapp.com/products/')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({ products : responseJson.result });
      //console.log(responseJson.result);
    })
    .catch((error) => {
        console.error(error);
    });
  }

  renderProducts({ item, index}) {
    //console.log(this);
    return (
      <TouchableOpacity key={item.id} onPress={() => this.moveScreen(item)}>
        <Products product={item}/>
      </TouchableOpacity>
    );
  }
  
  moveScreen = (product) => {
    this.props.navigation.navigate('DetailProduct', { ...product })
  }

  render() {
    return (
      <FlatList 
        style= {flatStyle}
        data= {this.state.products}
        renderItem= {this.renderProducts.bind(this)}
        numColumns= {numColumns}
        keyExtractor={(item, index) => item.id}
      />
    )
  }
}

export default Catalog;