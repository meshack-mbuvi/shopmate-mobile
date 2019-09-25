import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  products: {
    flex: 10,
  },
  productContainer: {
    backgroundColor: '#F5FCFF',
    flexDirection: 'row',
    margin: 10,
    padding: 4,
  },
  productImage: {
    height: 200,
    flex: 3,
    margin: 2,
  },
  productDetails: {
    flex: 5,
    margin: 2,
    padding: 5,
  },
  productTitle: {
    fontSize: 20,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'green',
  },
  productDescription: {
    marginBottom: 10,
  },
  price: {
    fontSize: 12,
    alignItems: 'center',
    justifyContent: 'center',
    textDecorationLine: 'line-through',
  },
  discountedPrice: {
    color: 'red',
    fontSize: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pagination: {
    flex: 1,
    borderTopWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paginationButton: {
    textAlign: 'center',
    borderWidth: 0.09,
    borderRadius: 15,
    padding: 4,
    width: 30,
    height: 30,
    margin: 2,
    textAlign: 'center',
  },
  active: {
    backgroundColor: 'red',
  },
});
