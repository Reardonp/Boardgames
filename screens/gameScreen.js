import React, { Component } from 'react';
import {  View, Text, FlatList, Image } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import { Drawer, Header, Left, Right, Badge, Container, Title, Icon, Button, Card, CardItem, Body } from 'native-base';
import { returnSomething, returnDetails } from '../utils/helpers'


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
    return <View style={{flex: 1}}><Text>{this.state.game[0].name}</Text>
    <Image
    style={{width: 50, height: 50}}
    source={{uri: this.state.game[0].image}}
    />
  </View>

    
      }     
  };

  render() {
   const {idNum} = this.props.navigation.state.params;
    return (
      <View>
        <Text onPress={this.test}>{idNum}</Text>        
        {this.renderStuff()}                
      </View>
    );

  }
}
