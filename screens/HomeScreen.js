import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, CameraRoll, ScrollView, ImageBackground, Image, TextInput, FlatList, ActivityIndicator } from 'react-native';
import { Drawer, Header, Left, Right, Badge, Container, Title, Icon, Button, Card, CardItem, Body, List, ListItem } from 'native-base';
//import { Button } from 'react-native-elements';
import { DrawerNavigator } from 'react-navigation';
//import {parseString} from 'react-native-xml2js';
//import SecondScreen from './secondscreen';
import SideBar from './sidebar';
import { returnSomething, returnDetails } from '../utils/helpers'
/*const AppNavigator = StackNavigator({
    Second: {screen: SecondScreen},
  });*/
export default class HomeScreen extends Component {

  constructor(props) {
    super(props);
    //console.log(props + "from homescreen")
    this.xmljs = this.xmljs.bind(this);
    //this.details = this.details.bind(this);
    //this.xmljs2 = this.xmljs2.bind(this);

    this.state = {
      arrayOfStuff: [],
      searchField: 'Avalon',
      results: 'Results go here',
      selectedGame:"",
      selectedGameArray: [],
      isLoading: false,
    }
  }
  details=()=>{
    console.log("huh")
    // returnDetails(params).then(response=> {
    //   this.setState({
    //   selectedGameArray: response
    //   });
    // })
  };
  xmljs = () => {

    //this.state.arrayOfStuff;
    //searchField = this.state.searchField      
    //alert(this.state.searchField);
    console.log('hodor');
    let tempStuff = new Array();
    console.log(this.state.searchField)
    console.log(this.state.results);
    console.log(this.state.arrayOfStuff);
    // this.setState({
    //   arrayOfStuff: tempStuff
    // })
    let parseString = require('react-native-xml2js').parseString;
    fetch('https://www.boardgamegeek.com/xmlapi/search?search=' + this.state.searchField)
      .then(response => response.text())
      .then((response) => {
        parseString(response, (err, result) => {
          //console.log(result)

          result.boardgames.boardgame.forEach(function (boardgame, index) {
            let boardgamesObj = result.boardgames;
            let tempObj;
            console.log("at line 60" + boardgamesObj.boardgame[index].name[0]._);
            if (boardgamesObj.boardgame[index].name[0]._ != null) {
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
            if (tempObj != null) {
              tempStuff.push(tempObj);
            } else {
              console.log(tempObj + " fail")
            };

            //console.log(tempStuff[index].name + " wuttempStuff" + index);//gave me avalon which is good
            //this.arrayOfStuff.push(tempObj[index].name + "arrayOfStuff");
            //return tempStuff;
            //alert(this.state.arrayOfStuff[0].name);
            //alert(this.arrayOfStuff[0].objID);
            //alert(boardgame.$.objectid);
            //alert(arrayOfStuff[0].objectid);
          });

          tempStuff.forEach(function (item, index) {
            console.log(tempStuff[index].name);

            arrayOfStuff = tempStuff;

            //this.state.results += tempStuff[index].name.toString();
          });
          //alert(tempStuff[0].name);
          //alert(arrayOfStuff[2].name);
          // tempStuff.forEach(function(item,index){
          //   alert([index].name)
          //   this.state.results += tempStuff[index].name;
          // })            
        });
        console.log(arrayOfStuff);
        this.setState({
          arrayOfStuff: arrayOfStuff
        })
      }).catch((err) => {
        console.log('fetch', err);
        alert('goodbye ' + err)
      })
    //this.setState(arrayOfStuff = tempStuff);

  };
  renderResults() {
    return <Text>Hello World</Text>;
  }
  xmljs2 = () => {
      this.setState({
          isLoading: true,
      });
      //console.log(this.state.arrayOfStuff[0].objID)
    console.log("from xmljs2");
    returnSomething(this.state.searchField).then(response => {
      //console.log(response + "114 ")
      this.setState({
        arrayOfStuff: response,
        isLoading: false,
      });
      console.log(this.state.arrayOfStuff);
    })
    //console.log(returnSomething(this.state.searchField));    
  };
  static navigationOptions = {
    header: null,
    contentComponent: props => <Sidebar {...props} />
  };
  closeDrawer = () => {
    this.drawer._root.close()
  };
  openDrawer = () => {
    this.drawer._root.open()
    console.log('drawer open')
  };

  renderItem({ item, index }) {
    //console.log(item + index + " work pls")
    return <List style={{backgroundColor:'white'}}>
      <ListItem iconRight button onPress={()=>this.props.navigation.navigate("GameScreen",{idNum: item.objID})}>  
          
      <Left><Text style={{ color: "black" }}>{item.name}</Text></Left>
      <Right><Icon name = 'arrow-dropright'/></Right>
      
      </ListItem>     
      </List>;
  }

  render() {
    //var{navigate}= this.props.navigation;
    //let arrayOfStuff = this.state.arrayOfStuff;


    return (
      <Container>
        <ImageBackground source={require('../images/background.jpg')} style={styles.containerBG}>
          <Header>
            <Left style={{ flex: 1 }}>
              <Button
                transparent
                onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                <Icon name='menu' />
              </Button>
            </Left>
            <Body style={{ flex:2 }}>
              <Title style={{textAlign: 'center'}}>Game Search</Title>
            </Body>
            <Right style={{ flex: 1 }}></Right>
          </Header>
          <View>
          <View>
            <TextInput
            
              style={{ color: "white", textAlign: 'center' }}
              inlineImageLeft="search"
              onChangeText={(searchField) => this.setState({ searchField })}
              placeholder={"Enter Game Name"}
              placeholderTextColor="#ffffff"/>

              </View>
              {/* <Button block iconLeft onPress={() =>
              this.props.navigation.navigate('Camera')}>
              <Icon name = "beer"/>
              <Text>Barcode Scanner</Text>
              </Button> */}
            {/* <TouchableOpacity onPress={this.xmljs.bind(this)}>
              <Image
                style={styles.pushButton}
                source={require('../images/push_button.png')}
              />
            </TouchableOpacity> */}
            <Button full iconLeft light rounded onPress={this.xmljs2}>
            <Icon name='search'/>
              <Icon android='md-search' style={{color:'white'}}/>
              <Text>Search For Games</Text>
            </Button>
              {this.state.isLoading ? <ActivityIndicator style={{padding: 20}}/> : null}
            {/* <Text style={{ color: "white" }}>{this.state.results}</Text> */}
            <FlatList style={{ backgroundColor: "transparent" }}
              data={this.state.arrayOfStuff}
              renderItem={this.renderItem.bind(this)}
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