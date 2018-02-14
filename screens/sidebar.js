import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
//import Camera from 'react-native-camera';
//import Movies from './readjson';
import { StackNavigator } from 'react-navigation';
import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
  Left,
  Right,
  Badge
} from "native-base";
class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4
    };
  }
  

  render() {
    return (
      <Container style = {styles.mainContainer}>
      <Text style = {styles.drawerText}>Isnt that something</Text>
      <Button 
        onPress={() => alert('Stop Pressing Shit')}
        title="Press it"
        backgroundColor="darkgray"  
        color='white'
        rounded={true}        
        accessibilityLabel=""
        />        
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer:{
    backgroundColor: "lightgray",
    
  },
  drawerText:{
    color: "black",
    paddingTop: "20%",
    paddingLeft: "5%",
  }
});

export default SideBar;