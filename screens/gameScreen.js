import React, { Component } from 'react';
import {  View, Text, } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import { returnSomething, returnDetails } from '../utils/helpers'


export default class GameScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idNum: this.props.navigation.state.params
        }
    }
test=()=>{
    let {idNum} = this.props.navigation.state.params
    returnDetails(idNum).then(response => {
        console.log(response)
    })
};

  render() {
   const {idNum} = this.props.navigation.state.params;
    return (
      <View>
        <Text onPress={this.test}>{idNum}</Text>
      </View>
    );
  }
}
