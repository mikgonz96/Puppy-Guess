import * as React from 'react';
import { ImageBackground } from 'react-native';
import { Left, Body, Right, Button, Text, Header, Title, Icon } from 'native-base';
import { Component } from 'react';
import styles from './Estilos';

const image = "../img/background.png";

export default class Inicio extends Component {
  
  
    render (){
      return (
      <ImageBackground source={require(image)} style={styles.image}>
      
        <Left/>
  
        <Body>
        <Icon name='paw' style={{fontSize: 60, color: 'white'}} />  
        <Title style={styles.text}>Puppy</Title>
        <Title style={styles.text}>Guess </Title>
        
        <Button large info iconLeft onPress={() => this.props.navigation.navigate('Puppy Guess')} style={styles.button}>
          
          <Text>¡Empezar!</Text>
        </Button>
  
        </Body>
  
        <Right/>
  
      </ImageBackground>
      )};
  }