import React from 'react';
import {View, Text, Image, TouchableNativeFeedback} from 'react-native';

import styles from '../styles';

export const Item = props => {
  const {
    details: {
      item: {description, discounted_price, display, image, name, price, product_id, thumbnail},
    },
  } = props;
  const ImageURL = `https://raw.githubusercontent.com/meshack-mbuvi/turing-backend/develop/Images/product_images/${thumbnail}`;
  return (
    <TouchableNativeFeedback>
      <View style={styles.productContainer}>
        <Image
          style={styles.productImage}
          source={{
            uri: ImageURL,
          }}
        />

        <View style={styles.productDetails}>
          <Text style={styles.productTitle}>{name}</Text>
          <Text style={styles.productDescription}>{description}</Text>
          <View>
            <Text style={styles.discountedPrice}>Now ${discounted_price}</Text>
            <Text style={styles.price}>Was ${price}</Text>
          </View>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};
