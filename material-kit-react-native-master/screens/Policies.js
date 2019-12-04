import React from 'react';
// import { DrawerItems } from 'react-navigation';
import { StyleSheet, Dimensions, ScrollView, Image, View } from 'react-native';
import { Button, Block, Text, Input, theme } from 'galio-framework';
import Icon from "react-native-vector-icons/Ionicons";

import { Product } from '../components/';

import SwipeCards from '../components/SwipeCards.js'

const { width } = Dimensions.get('screen');
import products from '../constants/products';

export default class Policies extends React.Component {

  renderProducts = () => {
    const { navigation } = this.props;
    return (
      <View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.products}>
        <SwipeCards style={{flex: 1}} />
      </ScrollView>
      <View height={60}>
      <Icon
        reverse = {true}
        raised = {true}
        name='ios-arrow-dropleft-circle'
        color='#FF9800'
        size={40}
        onPress={() => navigation.navigate('March2020')}
      />
    </View>
    </View>
    )
  }

  render() {
    return (
      <Block flex center style={styles.home}>
        {this.renderProducts()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
    box: {
        justifyContent: "center",
        flexDirection:"row", 
    },
  shadow: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.2,
    elevation: 2,
  },
  button: {
    marginBottom: 2 * theme.SIZES.BASE,
    width: width - (theme.SIZES.BASE * 2),
    height: theme.SIZES.BASE * 5,
  },
  home: {
    width: width,    
  }, 
  header: {
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    elevation: 4,
    zIndex: 2,
  },
  
  divider: {
    borderRightWidth: 0.3,
    borderRightColor: theme.COLORS.MUTED,
  },
  products: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE * 2,
  },
});
