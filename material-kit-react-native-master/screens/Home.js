import React from 'react';
// import { DrawerItems } from 'react-navigation';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Button, Block, Text, Input, theme } from 'galio-framework';

import { Icon, Product } from '../components/';

const { width } = Dimensions.get('screen');
import products from '../constants/products';

export default class Home extends React.Component {
  _disabledButtons() {
    alert("This election is not open yet!")
  }
  renderProducts = () => {
    const { navigation } = this.props;
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.products}>
        <Block flex>
          <Button size = "large" radius = {20} style={[styles.button] } color = "warning" onPress={() => navigation.navigate('March2020')} >
            <Text color="white" size={24} style={{fontWeight: 'bold'}}>March 2020</Text>
            <Text color="white" size={20}>Primary Election</Text>
          </Button>
        
          <Button size = "large" radius = {20} style={[styles.button, styles.shadow]} color = "#a9a9a9" onPress={this._disabledButtons}>
            <Text color="white" size={24} style={{fontWeight: 'bold'}}>August 2020</Text>
            <Text color="white" size={20}>District Election</Text> 
          </Button>
          <Button size = "large" radius = {20} style={[styles.button, styles.shadow]} color = "#a9a9a9" onPress={this._disabledButtons}> 
            <Text color="white" size={24} style={{fontWeight: 'bold'}}>November 2020</Text>
            <Text color="white" size={20}>Presidential Election</Text> 
          </Button>
          </Block>
      </ScrollView>
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
