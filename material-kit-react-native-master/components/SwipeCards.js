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
        <Image style={styles.thumbnail} resizeMode="contain" source={{uri: this.props.image}} />
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
  {name: 'Enviroment', image: 'https://media.giphy.com/media/cObIzBCAkFxW60ORYj/giphy.gif', description: 'We need to enact policies to protect the environment.'},
  {name: 'Gun Control', image: 'https://media.giphy.com/media/xK5f8KDg9cVSo/giphy.gif'},
  {name: 'Healthcare', image: 'https://media.giphy.com/media/YlmI36YAWe7KScC7hK/giphy.gif'},
  {name: 'Taxes', image: 'https://media.giphy.com/media/rE04CIrzIrSN2/giphy.gif'},
  {name: 'Immigration', image: 'https://media.giphy.com/media/U3rdDvu763AqEqX92O/giphy.gif'},
  {name: 'Campaign Funding', image: 'https://media.giphy.com/media/JpG2A9P3dPHXaTYrwu/giphy.gif'},
  {name: 'Abortion', image: 'https://media.giphy.com/media/JpG2A9P3dPHXaTYrwu/giphy.gif'},
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