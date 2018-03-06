import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, CameraRoll, ScrollView, ImageBackground, Image, TextInput, List, ListView, FlatList } from 'react-native';
import { Drawer, Header, Icon, Left, Right, Badge, Body, Container, Title} from 'native-base';
import { Button } from 'react-native-elements';
import { DrawerNavigator } from 'react-navigation';
//import {parseString} from 'react-native-xml2js';
//import SecondScreen from './secondscreen';
import SideBar from './sidebar';
/*const AppNavigator = StackNavigator({
    Second: {screen: SecondScreen},
  });*/
export default class HomeScreen extends Component {

  constructor(props) {
    super(props);
    console.log(props + "from homescreen")
    this.xmljs = this.xmljs.bind(this);
    this.xmljs2 = this.xmljs2.bind(this);
    this.state = {
      arrayOfShit: [],
      searchField: 'Avalon',
      results: 'Results go here',

    }
  }
  xmljs = () => {
    //this.state.arrayOfShit;
    //searchField = this.state.searchField      
    //alert(this.state.searchField);
    console.log('hodor');
    let tempShit = new Array();
    console.log(this.state.searchField)
    console.log(this.state.results);
    console.log(this.state.arrayOfShit);
    // this.setState({
    //   arrayOfShit: tempShit
    // })
    var parseString = require('react-native-xml2js').parseString;
    fetch('https://www.boardgamegeek.com/xmlapi/search?search=' + this.state.searchField)
      .then(response => response.text())
      .then((response) => {
        parseString(response, (err, result) => {
          //console.log(result)

          result.boardgames.boardgame.forEach(function (boardgame, index) {
            let boardgamesObj = result.boardgames;
            let tempObj;
            console.log("at line 60" + boardgamesObj.boardgame[index].name[0]._);
            if(boardgamesObj.boardgame[index].name[0]._ != null) {
            tempObj = {
              name: boardgamesObj.boardgame[index].name[0]._,
              objID: boardgamesObj.boardgame[index].$.objectid,
              //year: boardgamesObj.boardgame[index].yearpublished[0]
            };
          } else {
            tempObj = {
              name: boardgamesObj.boardgame[index].name,
              objID: boardgamesObj.boardgame[index].$.objectid,
              //year: boardgamesObj.boardgame[index].yearpublished[0]
            };
          }

            //alert(tempObj + " wut tempobj");
            if(tempObj != null){
            tempShit.push(tempObj);
            }else{console.log(tempObj + " fail")
          };
            
            //console.log(tempShit[index].name + " wuttempshit" + index);//gave me avalon which is good
            //this.arrayOfShit.push(tempObj[index].name + "arrayOfShit");
            //return tempShit;
            //alert(this.state.arrayOfShit[0].name);
            //alert(this.arrayOfShit[0].objID);
            //alert(boardgame.$.objectid);
            //alert(arrayOfShit[0].objectid);
          });
          
          tempShit.forEach(function (item, index) {
            console.log(tempShit[index].name);

            arrayOfShit = tempShit;

            //this.state.results += tempShit[index].name.toString();
          });
          //alert(tempShit[0].name);
          //alert(arrayOfShit[2].name);    
          // tempShit.forEach(function(item,index){
          //   alert([index].name)
          //   this.state.results += tempShit[index].name;
          // })            
        });
        console.log(arrayOfShit);
        this.setState({
          arrayOfShit: arrayOfShit
        })
      }).catch((err) => {
        console.log('fetch', err);
        alert('goodbye ' + err)
      })
    //this.setState(arrayOfShit = tempShit);

  };
  renderResults() {
    return <Text>Hello World</Text>;    
  }


  xmljs2 = () => {
    console.log(this.state.arrayOfShit[0].objID)
  };
  static navigationOptions = {
    header: null,
    contentComponent: props => <Sidebar {...props} />
  };
  closeDrawer = () => {
    this.drawer._root.close()
  };
  openDrawer= () =>{
    this.drawer._root.open()
    console.log('drawer open')
  };

  renderItem({item, index}) {
    console.log(item + index + " work pls")
    return <Text style={{ color: "white" }}>{item.name}</Text>;
  }

  render() {
    //var{navigate}= this.props.navigation;
    //let arrayOfShit = this.state.arrayOfShit;


    return (
    <Container>
        <ImageBackground source={require('../images/background.jpg')} style={styles.containerBG}>
          <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>HomeScreen</Title>
          </Body>
          <Right />
        </Header>
          <View>
            <TextInput
              style={{ color: "white" }}
              onChangeText={(searchField) => this.setState({ searchField })}
              value={this.state.searchField} />
              <Button onPress={() =>
            this.props.navigation.navigate('Camera')}
          title="Go to Barcode Scanner" />
            <TouchableOpacity onPress={this.xmljs.bind(this)}>
              <Image
                style={styles.pushButton}
                source={require('../images/push_button.png')}
              />
            </TouchableOpacity>
            
 
            <TouchableOpacity onPress={this.xmljs2}>
              <Image
                style={styles.pushButton}
                source={require('../images/push_button.png')}
              />
            </TouchableOpacity>
            <Text style={{ color: "white" }}>{this.state.results}</Text>

            <FlatList style={{backgroundColor: "gray"}}
              data={this.state.arrayOfShit}
              renderItem={this.renderItem}
              keyExtractor={(item, index) => index}
            />
              
          </View>

        </ImageBackground>

      </Container>


    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
  },
  containerBG: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
  overlayBg: {
    flex: 1,
  },
  textOnPage: {
    paddingTop: "0%",
    fontSize: 20,
    color: 'white',
    flex: 1,
  },
  sectionOne: {
    height: "50%",
    width: "100%",
    alignItems: 'center',

  },
  sectionTwo: {
    width: "50%",
  },
  pushButton: {
    alignItems: 'center',
    height: 50,
    width: 50,
    resizeMode: "contain"
  }
});