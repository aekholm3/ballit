import React from 'react';
// import { DrawerItems } from 'react-navigation';
import { StyleSheet, Dimensions, ScrollView, View } from 'react-native';
import { Button, Block, Text, Input, theme } from 'galio-framework';
import Icon from "react-native-vector-icons/Ionicons";
//import { Icon } from 'react-native-elements'


import { Product } from '../components';

const { width } = Dimensions.get('screen');
import products from '../constants/products';

export default class March2020 extends React.Component {

  renderProducts = () => {
    const { navigation } = this.props;
    return (
      <View flex>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.products}>
          <Block flex>
            <Button size = "large" radius = {20} style={[styles.button] } color = "warning" onPress={() => navigation.navigate('Candidates')} >
              <Text color="white" size={24} style={{fontWeight: 'bold'}}>Choose Candidates</Text>
            </Button>
          
            <Button size = "large"  radius = {20} style={[styles.button]} color = "warning" >
              <Text color="white" size={24} style={{fontWeight: 'bold'}}>Swipe on Propositions</Text>
            </Button>

            <Button size = "large" radius = {20} style={[styles.button]} color = "warning"> 
              <Text color="white" size={24} style={{fontWeight: 'bold'}}>Your Ballot</Text>
            </Button>

            <Button size = "large" radius = {20} style={[styles.button]} color = "warning" onPress={() => navigation.navigate('PollingStation')} > 
              <Text color="white" size={24} style={{fontWeight: 'bold'}}>Find Polling Stations</Text>
            </Button>
            </Block>
        </ScrollView>
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
