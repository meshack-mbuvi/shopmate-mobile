import React, {Component} from 'react';
import {FlatList, Text, View, TouchableOpacity} from 'react-native';

import {connect} from 'react-redux';

import styles from '../styles';
import {getProducts} from '../redux/actions/products.action';

import {Item} from '../components/item';
import {Pagination} from '../components/pagination';

class HomeScreen extends Component {
  state = {
    currentPage: 1,
  };

  componentDidMount() {
    const {dispatch} = this.props;
    return dispatch(getProducts());
  }

  handlePageChange = newPage => {
    this.setState({
      currentPage: newPage,
    });
  };

  render() {
    const {products, dispatch} = this.props;
    console.log('products ', products);
    return (
      <View style={styles.container}>
        <View style={styles.products}>
          {products.length ? (
            <FlatList data={products} renderItem={(product, index) => <Item details={product} key={index} />} />
          ) : (
            <Text>We are restocking our mall</Text>
          )}
        </View>
        <Pagination products={products} dispatch={dispatch} />
      </View>
    );
  }
}

const mapStateToProps = ({productsReducer}) => {
  return {
    products: productsReducer.products || [],
  };
};

export default connect(mapStateToProps)(HomeScreen);
