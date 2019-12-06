import React from 'react';
// import { DrawerItems } from 'react-navigation';
import { StyleSheet, Dimensions, ScrollView, View } from 'react-native';
import { Button, Block, Input, theme, Text } from 'galio-framework';
import Icon from "react-native-vector-icons/Ionicons";

import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import { Container, Header, Content, List, ListItem, Separator } from 'native-base';

import { Product } from '../components/';

//import {Home} from 'Home.js';
//import {Candidates} from 'Candidates.js';


const { width } = Dimensions.get('screen');
import products from '../constants/products';

export default class AllElections extends React.Component {
  _disabledButtonsAug() {
    alert("This election is not open yet! \n Check back in 3 months to see which candidates you best match with!")
  }
  _disabledButtonsNov() {
    alert("This election is not open yet! \n Check back in 6 months to see which candidates you best match with!")
  }
  renderProducts = () => {
    const { navigation } = this.props;
    return (
      <View flex>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.products}>
        <Block flex>
          <Separator bordered style={{paddingBottom:10, paddingTop: 10, paddingVertical: 30 }}>
            <Text>Active</Text>
          </Separator>
          <Button size = "large" radius = {20} style={[styles.button] } paddingVertical={20}  color = "warning" onPress={() => navigation.navigate('March2020')} >
            <Text color="white" size={24} style={{fontWeight: 'bold'}}>March 2020</Text>
            <Text color="white" size={20}>Primary Election</Text>
          </Button>
          <Separator bordered style={{paddingBottom:10, paddingTop: 10, paddingVertical: 30 }}>
            <Text>Upcoming</Text>
          </Separator>
          <Button size = "large" radius = {20} style={[styles.button, styles.shadow]} color = "#a9a9a9" onPress={this._disabledButtonsAug}>
            <Text color="white" size={24} style={{fontWeight: 'bold'}}>August 2020</Text>
            <Text color="white" size={20}>District Election</Text> 
          </Button>
          <Button size = "large" radius = {20} style={[styles.button, styles.shadow]} color = "#a9a9a9" onPress={this._disabledButtonsNov}> 
            <Text color="white" size={24} style={{fontWeight: 'bold'}}>November 2020</Text>
            <Text color="white" size={20}>Presidential Election</Text> 
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

//const TabNavigator = createBottomTabNavigator({
//    Home: { screen: Home },
//    Settings: { screen: Candidates },
//  });

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
