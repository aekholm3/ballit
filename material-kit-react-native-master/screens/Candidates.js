import React from 'react';
// import { DrawerItems } from 'react-navigation';
import { StyleSheet, Dimensions, ScrollView, View } from 'react-native';
import { Button, Block, Text, Input, theme } from 'galio-framework';
import Icon from "react-native-vector-icons/Ionicons";
import {Card, CardItem, Left, Thumbnail, Right} from 'native-base';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

import { Images, materialTheme } from "../constants/";

import { Product } from '../components/';

const { width } = Dimensions.get('screen');
import products from '../constants/products';

export default class AllElections extends React.Component {
  _disabledButtons() {
    alert("This election is not open yet!")
  }
  
  renderProducts = () => {
      
    const { navigation } = this.props;
    return (
      <View flex>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.products}>
        <Block flex>
          <Card>
            <CardItem header>
              <Left>
                <Thumbnail source={require('../assets/images/liz.jpeg')} />
                <Text color={materialTheme.COLORS.WARNING} style={{fontWeight: 'bold', fontSize: 24}} >{'\tElizabeth Warren'}</Text>
              </Left>
            <Right>
            <Text color='black' style={{fontWeight: 'bold', fontSize: 16}} >{'90%'}</Text>
            </Right>
            </CardItem>
            <CardItem>
            <Text>
            {'Warren (born 1949) currently serves as a Senior United States Senator from Massachusetts since 2013. Her stances on current issues include: \n \n'}

            {'\u2022'} Support of abortion rights {'\n'}
            {'\u2022'} Support of the Affordable Care Act{'\n'}
            {'\u2022'} Support of assisting self-employed workers and small businesses{'\n'}
            {'\u2022'} Supports rigorous background screenings and extended magazine long rifle weapons ban{'\n'}
            </Text>
            </CardItem>
          </Card>

          <Card>
            <CardItem header>
              <Left>
                <Thumbnail source={require('../assets/images/bernie.jpeg')} />
                <Text color={materialTheme.COLORS.WARNING} style={{fontWeight: 'bold', fontSize: 24}} >{'\tBernie Sanders'}</Text>
              </Left>
            </CardItem>
            <CardItem>
            <Text>
            {'Sanders (born 1941) currently serves as a junior United States Senator from Vermont since 2007. His stances on current issues include: \n \n'}

            {'\u2022'} Support of abortion rights {'\n'}
            {'\u2022'} Support of a universal healthcare system{'\n'}
            {'\u2022'} Support of increasing corporate tax rate{'\n'}
            {'\u2022'} Support of banning assault weapons and universal federal background checks{'\n'}
            </Text>
            </CardItem>
          </Card>

          <Card>
           <CardItem header>
             <Left>
               <Thumbnail source={require('../assets/images/joe.jpeg')} />
               <Text color={materialTheme.COLORS.WARNING} style={{fontWeight: 'bold', fontSize: 24}} >{'\tJoe Biden'}</Text>
             </Left>
           </CardItem>
           <CardItem>
           <Text>
           {'Biden (born 1942) served as a United States Senator from Delaware since 1973 until he was elected the 47th vice president of the United States from 2009 to 2017. His stances on current issues include: \n \n'}
 
           {'\u2022'} Support of abortion rights, changing his stance from a conservative one {'\n'}
           {'\u2022'} Support of public health insurance, but not Medicare for All{'\n'}
           {'\u2022'} Supports balanced budget amendment{'\n'}
           {'\u2022'} Support of banning assault weapons and universal federal background checks{'\n'}
           </Text>
           </CardItem>
         </Card>

         <Card>
           <CardItem header>
             <Left>
               <Thumbnail source={require('../assets/images/cory.jpeg')} />
               <Text color={materialTheme.COLORS.WARNING} style={{fontWeight: 'bold', fontSize: 24}} >{'\tCory Booker'}</Text>
             </Left>
           </CardItem>
           <CardItem>
           <Text>
           {'Booker (born 1969) currently serves as a junior United States Senator from New Jersey since 2013. His stances on current issues include: \n \n'}
 
           {'\u2022'} Support of abortion rights
{'\n'}
           {'\u2022'} Support of expanding Medicare and reform of Affordable Care Act
{'\n'}
           {'\u2022'} Support of taxes on carbon emissions and lowering corporate taxes
{'\n'}
           {'\u2022'} Support of prohibiting people on terror watch lists from buying guns{'\n'}
           </Text>
           </CardItem>
         </Card>

         <Card>
           <CardItem header>
             <Left>
               <Thumbnail source={require('../assets/images/tulsi.jpeg')} />
               <Text color={materialTheme.COLORS.WARNING} style={{fontWeight: 'bold', fontSize: 24}} >{'\tTulsi Gabbard'}</Text>
             </Left>
           </CardItem>
           <CardItem>
           <Text>
           {'Gabbard (born 1981) currently serves as the U.S. Representative for Hawaii’s 2nd congressional district. Her stances on current issues include: \n \n'}
 
           {'\u2022'} Support of abortion rights, less so in the third trimester
{'\n'}
           {'\u2022'} Support of universal health care
{'\n'}
           {'\u2022'} Support of eliminating corporate income tax breaks
{'\n'}
           {'\u2022'} Support of Assault Weapons Ban and universal background checks {'\n'}
           </Text>
           </CardItem>
         </Card>


          </Block>
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
