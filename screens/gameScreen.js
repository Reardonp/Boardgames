import React, { Component } from 'react';
import {  View, Text, FlatList, Image } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import { Drawer, Header, Left, Right, Badge, Container,Content, Title, Icon, Button, Card, CardItem, Body } from 'native-base';
import { returnSomething, returnDetails } from '../utils/helpers';
import { StackNavigator } from 'react-navigation';



export default class GameScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idNum: this.props.navigation.state.params,
            game: {},
            
        }
    }
componentWillMount(){
    let {idNum} = this.props.navigation.state.params
    returnDetails(idNum).then(response => {
        this.setState({
            game: response,
            ready: true
        });
        console.log(this.state.game[0].name)   
           
    })
}
test=()=>{

};
renderItem({ item, index }) {
    console.log(item + index + " work pls")
    return <Card>
      <CardItem>  
        <Body>     
      <Text style={{ color: "black" }}>{idNum[0].name}}</Text>
      </Body>
      </CardItem>     
      </Card>;
  };
  renderStuff=()=>{ 
      if(this.state.ready === true){
          console.log(this.state.ready)
    return <Card style={{flex: 0}}>
        <CardItem>
            <Left>
            <Body>                
                <Text style={{fontSize: 40}}>{this.state.game[0].name}</Text>
                <Text>Release Year: {this.state.game[0].year}</Text>
            </Body>
            </Left>
            </CardItem>
            <CardItem>
            <Body>
            <Image 
    style={{width: 200, height: 200, resizeMode:'contain'}}
    source={{uri: this.state.game[0].image}}
    />
    <Text>{this.state.game[0].description.replace(/<(?:.|\n)*?>/gm, '')}</Text>
            </Body>
        </CardItem>
        <CardItem>
           
            <Body>
            <Text>Max Player: {this.state.game[0].maxPlayers}</Text>
            <Text>Min Players: {this.state.game[0].minPlayers}</Text>
            <Text>Estimated Playing Time: {this.state.game[0].playingTime}</Text>
            <Text>Age Range: {this.state.game[0].age}+</Text>
            </Body>
      
        </CardItem>
    </Card>   
      }     
  };

  render() {
   const {idNum} = this.props.navigation.state.params;
    return (
      <Container>
          <Header>
              <Left>
                  <Button transparent
                  onPress={()=> this.props.navigation.navigate('Home')}>
                    <Icon name="arrow-back"/>
                  </Button>
              </Left>
              <Body>
                  <Title>Game Details</Title>
              </Body>
              </Header>
          <Content>
          {/* <Text onPress={this.test}>{idNum}</Text>         */}
        {this.renderStuff()} 
        </Content>               
        </Container>
    );

  }
}
