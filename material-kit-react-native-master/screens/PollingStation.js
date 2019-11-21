import React from 'react';
// import { DrawerItems } from 'react-navigation';
import { StyleSheet, Dimensions, ScrollView, Image, View } from 'react-native';
import { Button, Block, Text, Input, theme } from 'galio-framework';

import { Icon, Product } from '../components/';

const { width } = Dimensions.get('screen');
import products from '../constants/products';

export default class PollingStation extends React.Component {

  renderProducts = () => {
    const { navigation } = this.props;
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.products}>
        <Block flex >
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text color="black" size={20}>Your Zip Code: {"\n"} 94305</Text>
      <Button size={10} shadowless={true}>Change Zip Code</Button>
      </View>
        <Image style={{width: 400,height:600}} resizeMode="contain"
                  source={require('../assets/images/pollingmap.jpg')} />
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
