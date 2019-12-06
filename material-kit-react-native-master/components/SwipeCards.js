'use strict';

import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import SwipeCards from 'react-native-swipe-cards';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.card}>
        <Image style={styles.thumbnail} resizeMode="contain" source={this.props.image } />
        <Text style={styles.title}>{this.props.name}</Text>
        <Text style={styles.text}>{this.props.description}</Text>
      </View>
    )
  }
}

class NoMoreCards extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.noMoreCards}>
        <Text>No more cards</Text>
      </View>
    )
  }
}

const cards = [
  {name: 'Enviroment', image: require('../assets/images/climate.jpg'), description: 'Climate change is real and the United States should take substantial steps to reduce greenhouse gas production.'},
  {name: 'Gun Control', image: require('../assets/images/gun.jpg'), description: 'The second amendment protects a person’s right to own a firearm, and there should not be any more restrictions on the current process of purchasing a gun.'},
  {name: 'Healthcare', image: require('../assets/images/healthcare.png'), description: 'Healthcare is a human right and should be available to anyone who needs it, regardless of cost.'},
  {name: 'Taxes', image: require('../assets/images/taxes.jpg'), description: 'The federal government should reduce taxes on the wealthiest Americans.'},
  {name: 'Immigration', image: require('../assets/images/immigration-1.jpg'), description:'Children of undocumented immigrants should be granted legal citizenship in the United States.'},
  {name: 'Campaign Funding', image: require('../assets/images/campaign.jpg'), description: 'Campaigns should be funded with assistance from the government, and large donors should be prohibited.'},
  {name: 'Abortion', image: require('../assets/images/abortion.jpg'), description: 'Women should have legal access to induced abortion services.'},
  {name: 'Marijuana', image: require('../assets/images/weed.jpg'), description: 'The recreational use of marijuana should be decriminalized.'},
  {name: 'Refugees', image: require('../assets/images/refugee.jpg'), description: 'The United States should accept refugees from countries with dangerous living conditions.'},
  {name: 'Cost of College', image: require('../assets/images/college.jpg'), description: 'The United States federal government should pay for tuition at four-year colleges and universities.'},

]

const cards2 = [
  
]

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: cards,
      outOfCards: false
    }
  }

  handleYup (card) {
    console.log("I'm into it")
  }

  handleNope (card) {
    console.log("Not today")
  }

  handleMaybe (card) {
    console.log("Maybe")
  }

  cardRemoved (index) {
    console.log(`The index is ${index}`);

    

  }

  render() {
    return (
      <SwipeCards
        cards={this.state.cards}
        loop={true}

        renderCard={(cardData) => <Card {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}
        showYup={true}
        showNope={true}
        showMaybe={true}
        yupText='I Agree'
        nopeText='I Disagree'
        maybeText='I Do Not Care'



        handleYup={this.handleYup}
        handleNope={this.handleNope}
        cardRemoved={this.cardRemoved.bind(this)}
        handleMaybe={this.handleMaybe}
        hasMaybeAction={true}
      />
    )
  }
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    borderRadius: 5,
    overflow: 'hidden',
    borderColor: 'grey',
    backgroundColor: 'white',
    borderWidth: 1,
    elevation: 1,
  },
  thumbnail: {
    width: 300,
    height: 300,
  },
  text: {
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10, 
    paddingLeft: 10,
    paddingRight: 10
  },
  title: {
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10,
    fontWeight: "bold"
  },
  noMoreCards: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})