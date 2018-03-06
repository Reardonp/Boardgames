import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { Container, Content, Text, List, ListItem } from "native-base";
//import Camera from 'react-native-camera';
//import Movies from './readjson';
import { StackNavigator } from 'react-navigation';
import {
  Icon,
  Left,
  Right,
  Badge
} from "native-base";

const routes = ["Home", "Camera"];
export default class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4
    };
  }
  static navigationOptions = {

    header: null,

  };

  render() {
    //const { navigate } = this.props.navigation;
    return (
      <Container style={styles.mainContainer}>
      <Content>
        <Text style={styles.drawerText}>Isnt that something</Text>
        <Button
          onPress={() => alert('Stop Pressing Shit')}
          title="Press it"
          backgroundColor="darkgray"
          color='white'
          rounded={true}
          accessibilityLabel=""
        />
        
        <Button
          onPress={() =>
            this.props.navigation.navigate('Camera')}
          title="Go to Barcode Scanner" />
          <List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data)}>
                  <Text>{data}</Text>
                </ListItem>
              );
            }}
          />
         </Content> 
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "lightgray",

  },
  drawerText: {
    color: "black",
    paddingTop: "20%",
    paddingLeft: "5%",
  }
});
