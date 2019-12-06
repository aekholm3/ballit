import React from 'react';
import { withNavigation } from 'react-navigation';
import { TouchableOpacity, StyleSheet, Platform, Dimensions, Image, View } from 'react-native';
import { Button, Block, NavBar, Input, Text, theme } from 'galio-framework';

import Icon from "react-native-vector-icons/Ionicons";
import materialTheme from '../constants/Theme';

const { height, width } = Dimensions.get('window');
const iPhoneX = () => Platform.OS === 'ios' && (height === 812 || width === 812 || height === 896 || width === 896);

/*const ChatButton = ({isWhite, style, navigation}) => (
  <TouchableOpacity style={[styles.button, style]} onPress={() => navigation.navigate('Pro')}>
    <Icon
      family="GalioExtra"
      size={}
      name="chat-33"
      color={theme.COLORS[isWhite ? 'WHITE' : 'ICON']}
    />
    <Block middle style={styles.notify} />
  </TouchableOpacity>
);

const BasketButton = ({isWhite, style, navigation}) => (
  <TouchableOpacity style={[styles.button, style]} onPress={() => navigation.navigate('Pro')}>
    <Icon
      family="GalioExtra"
      size={16}
      name="basket-simple"
      color={theme.COLORS[isWhite ? 'WHITE' : 'ICON']}
    />
    <Block middle style={styles.notify} />
  </TouchableOpacity>
);*/

const SearchButton = ({isWhite, style, navigation}) => (
  <TouchableOpacity style={[styles.button, style]} onPress={() => navigation.navigate('Pro')}>
    <Icon
      size={16}
      family="entypo"
      name="magnifying-glass"
      color={theme.COLORS[isWhite ? 'WHITE' : 'ICON']}
    />
  </TouchableOpacity>
);

class Header extends React.Component {
  handleLeftPress = () => {
    return this.props.navigation.goBack(null);

  }

  renderRight = () => {
    const { white, title, navigation } = this.props;
    const { routeName } = navigation.state;

    if (title === '') {
      return [
        <Image  style={{width: 200, height:90, resizeMode:"contain"}} source={require('../assets/images/logo.png')} />
      ]
    }

    switch (routeName) {
      /*case 'Home':
        return ([
          <ChatButton key='chat-home' navigation={navigation} isWhite={white} />,
          <BasketButton key='basket-home' navigation={navigation} isWhite={white} />
        ]);
      case 'Deals':
        return ([
          <ChatButton key='chat-categories' navigation={navigation} />,
          <BasketButton key='basket-categories' navigation={navigation} />
        ]);
      case 'Categories':
        return ([
          <ChatButton key='chat-categories' navigation={navigation} isWhite={white} />,
          <BasketButton key='basket-categories' navigation={navigation} isWhite={white} />
        ]);
      case 'Category':
        return ([
          <ChatButton key='chat-deals' navigation={navigation} isWhite={white} />,
          <BasketButton key='basket-deals' navigation={navigation} isWhite={white} />
        ]);
      case 'Profile':
        return ([
          <ChatButton key='chat-profile' navigation={navigation} isWhite={white} />,
          <BasketButton key='basket-deals' navigation={navigation} isWhite={white} />
        ]);
      case 'Product':
        return ([
          <SearchButton key='search-product' navigation={navigation} isWhite={white} />,
          <BasketButton key='basket-product' navigation={navigation} isWhite={white} />
        ]);
      case 'Search':
        return ([
          <ChatButton key='chat-search' navigation={navigation} isWhite={white} />,
          <BasketButton key='basket-search' navigation={navigation} isWhite={white} />
        ]);
      case 'Settings':
        return ([
          <ChatButton key='chat-search' navigation={navigation} isWhite={white} />,
          <BasketButton key='basket-search' navigation={navigation} isWhite={white} />
        ]);*/
      default:
        break;
    }
  }

  /*renderSearch = () => {
    const { navigation } = this.props;
    return (
      <Input
        right
        color="black"
        style={styles.search}
        placeholder="What are you looking for?"
        onFocus={() => navigation.navigate('Pro')}
        iconContent={<Icon size={16} color={theme.COLORS.MUTED} name="magnifying-glass" family="entypo" />}
      />
    )
  }

  renderTabs = () => {
    const { navigation, tabTitleLeft, tabTitleRight } = this.props;

    return (
      <Block row style={styles.tabs}>
        <Button shadowless style={[styles.tab, styles.divider]} onPress={() => navigation.navigate('Pro')}>
          <Block row middle>
            <Icon name="grid" family="feather" style={{ paddingRight: 8 }} />
            <Text size={16} style={styles.tabTitle}>{tabTitleLeft || 'Categories'}</Text>
          </Block>
        </Button>
        <Button shadowless style={styles.tab} onPress={() => navigation.navigate('Pro')}>
          <Block row middle>
            <Icon size={16} name="camera-18" family="GalioExtra" style={{ paddingRight: 8 }} />
            <Text size={16} style={styles.tabTitle}>{tabTitleRight || 'Best Deals'}</Text>
          </Block>
        </Button>
      </Block>
    )
  }*/

  /*renderHeader = () => {
    const { search, tabs } = this.props;
    if (search || tabs) {
      return (
        <Block center>
          {search ? this.renderSearch() : null}
          {tabs ? this.renderTabs() : null}
        </Block>
      )
    }
    return null;
  }*/
  renderTitle = () => {
    const { white, title, navigation } = this.props;
    const { routeName } = navigation.state;
    if (title === '') {
      return [
        <Image  style={{width: 275,  height:275, resizeMode:"contain"}} key={title} source={require('../assets/images/logo.png')} />
      ]
    } 
    if (title === 'All Elections') {
      return [
        <Image  style={{width: 275,height:30, resizeMode:"contain"}} key={title} source={require('../assets/images/upcoming-elections.png')} />
      ]
    } 
    if (title === 'Policies') {
      return [
        <Image  style={{width: 275,height:30, resizeMode:"contain"}} key={title} source={require('../assets/images/policies.png')} />
      ]
    } 

    if (title === 'Polling Stations') {
      return [
        <Image  style={{width: 275,height:30, resizeMode:"contain"}} key={title} source={require('../assets/images/polling-stations.png')} />
      ]
    } 

    if (title === 'March 2020 Primary') {
      return [
        <Image  style={{width: 275,height:25, resizeMode:"contain"}} key={title} source={require('../assets/images/march-2020.png')} />
      ]
    } 

    if (title === 'Candidates') {
      return [
        <Image  style={{width: 275,height:25, resizeMode:"contain"}} key={title} source={require('../assets/images/candidates.png')} />
      ]
    } 
  }

  renderIcon = () => {
    const { title } = this.props;
    if (title !== ''){
      return 'chevron-left'
    }
    return 'user'
    
  }

  render() {
    const { back, title, white, transparent, navigation } = this.props;
    const { routeName } = navigation.state;
    const noShadow = ["Search", "Categories", "Deals", "Pro", "Profile"].includes(routeName);
    const headerStyles = [
      !noShadow ? styles.shadow : null,
      transparent ? { backgroundColor: 'rgba(0,0,0,0)' } : null,
    ];

    return (
      <Block style={headerStyles}>
        <NavBar
          back={true}
          title={this.renderTitle()}
         style={styles.navbar}
          //transparent={transparent}
          //rightStyle={{ }}
          leftHitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}
          leftStyle={{ paddingVertical: -12, height: 100, width:100, size: 100}}
          leftIconName={this.renderIcon()}
          leftIconColor={white ? theme.COLORS.WHITE : theme.COLORS.ICON}
          onLeftPress={this.handleLeftPress}
        />
      </Block>
    );
  }
}

export default withNavigation(Header);

const styles = StyleSheet.create({
  //button: {
   // padding: 12,
    //position: 'relative',
 // },
  title: {
    width: '100%',
    fontSize: 24,
    fontWeight: 'bold',
  },
  navbar: {
    //paddingVertical: 0,
    //paddingBottom: 0, 
    //paddingTop: 0,
    paddingVertical: theme.SIZES.BASE,
    paddingBottom: theme.SIZES.BASE * 2,
    paddingTop: iPhoneX ? theme.SIZES.BASE * 5 : theme.SIZES.BASE *5,
    zIndex: 5,
  },
  shadow: {
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.2,
    elevation: 3,
  },
  notify: {
    backgroundColor: materialTheme.COLORS.LABEL,
    borderRadius: 4,
    height: theme.SIZES.BASE / 2,
    width: theme.SIZES.BASE / 2,
    position: 'absolute',
    top: 8,
    right: 8,
  },
  header: {
    //height: 0,
    //backgroundColor: theme.COLORS.WHITE,
  },
  divider: {
    borderRightWidth: 0.3,
    borderRightColor: theme.COLORS.MUTED,
  },
  search: {
    //height: 60,
    //width: width - 32,
   // marginHorizontal: 16,
   // borderWidth: 1,
   // borderRadius: 3,
  },
  tabs: {
    //marginBottom: 24,
    //marginTop: 10,
    //elevation: 4,
  },
  tab: {
    //backgroundColor: theme.COLORS.TRANSPARENT,
   // width: width * 0.50,
    //borderRadius: 0,
    //borderWidth: 0,
    //height: 24,
    //elevation: 0,
  },
  tabTitle: {
    //lineHeight: 19,
    //fontWeight: '300'
  },
})