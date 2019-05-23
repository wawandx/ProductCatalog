import { createStackNavigator, createAppContainer } from 'react-navigation';
import Splash from './splash';
import Catalog from './product/Catalog';
import DetailProduct from './product/DetailProduct';

const Navigation = createStackNavigator({
  Splash: {screen: Splash},
  Catalog: {screen: Catalog},
  DetailProduct: {screen: DetailProduct}
},{
  initialRouteName : 'Splash',
});

const Router = createAppContainer(Navigation);

export default Router;