import React, {Component} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import styles from '../styles';
import {connect} from 'react-redux';

import {getProducts} from '../redux/actions/products.action';

export class Pagination extends Component {
  state = {
    currentPage: 1,
  };

  handlePageChange = newPage => {
    const {dispatch} = this.props;
    this.setState({
      currentPage: newPage,
    });
    return dispatch(getProducts(newPage));
  };

  handlePrevious = () => {
    const {dispatch} = this.props;
    let {currentPage} = this.state;
    this.setState({
      currentPage: currentPage - 1,
    });
    return dispatch(getProducts(--currentPage));
  };

  handleNext = () => {
    const {dispatch} = this.props;
    let {currentPage} = this.state;
    this.setState({
      currentPage: currentPage + 1,
    });
    return dispatch(getProducts(++currentPage));
  };

  paginate = () => {
    const {products} = this.props;
    const {currentPage} = this.state;
    const pageButtons = [];

    pageButtons.push(
      <TouchableOpacity key={products.length}>
        <Text
          style={[styles.paginationButton, products.length === currentPage ? styles.active : '']}
          key={products.length}
          onPress={() => this.handlePrevious()}>
          {'<<'}
        </Text>
      </TouchableOpacity>,
    );

    for (let pageNumber = 1; pageNumber < Math.floor(products.length / 5); pageNumber++) {
      pageButtons.push(
        <TouchableOpacity key={pageNumber}>
          <Text
            style={[styles.paginationButton, pageNumber === currentPage ? styles.active : '']}
            key={pageNumber}
            onPress={() => this.handlePageChange(pageNumber)}>
            {pageNumber}
          </Text>
        </TouchableOpacity>,
      );
    }

    pageButtons.push(
      <TouchableOpacity key={products.length}>
        <Text
          style={[styles.paginationButton, products.length === currentPage ? styles.active : '']}
          key={products.length}
          onPress={() => this.handleNext()}>
          >>
        </Text>
      </TouchableOpacity>,
    );
    return pageButtons;
  };

  render() {
    const {products} = this.props;
    return <View style={styles.pagination}>{this.paginate()}</View>;
  }
}
