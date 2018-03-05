import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, CameraRoll, ScrollView, ImageBackground, Image } from 'react-native';
import {Drawer} from 'native-base';
import{Button, Header} from 'react-native-elements';
import {StackNavigator} from 'react-navigation';
//import {parseString} from 'react-native-xml2js';
//import SecondScreen from './secondscreen';
import SideBar from './sidebar';





/*const AppNavigator = StackNavigator({
    Second: {screen: SecondScreen},
  });*/
export default class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrayOfShit: []
        }
    }
//        xmljs(){
//        fetch('https://www.boardgamegeek.com/xmlapi/search?search=catan&exact=1').then((response)=>{
//        Xml2Json.toJson(response, data => {
//            console.log("Data = ", data);
//        })
//        });
//        };
      //XML stuff. We are not currently using this.
      //.then(response => response.text())
    xmljs(){
    let arrayOfShit = this.arrayOfShit;

        let parseString = require('react-native-xml2js').parseString;
        fetch('https://www.boardgamegeek.com/xmlapi/search?search=avalon&exact=1')
        .then(response => response.text())
        .then((response) => {
            parseString(response, function (err, result) {
                //console.log(result)
                let tempShit =[];
                result.boardgames.boardgame.forEach(function(boardgame, index){
                let boardgamesObj = result.boardgames;

                let tempObj = {
                        name: boardgamesObj.boardgame[index].name[0]._,
                        objID: boardgamesObj.boardgame[index].$.objectid,
                        year: boardgamesObj.boardgame[index].yearpublished[0]
                         };

                tempShit.push(tempObj);

                //this.arrayOfShit.push(tempObj[index].name + "arrayOfShit");

                //alert(this.state.arrayOfShit[0].name);
                //alert(this.arrayOfShit[0].objID);
                //alert(boardgame.$.objectid);
                //alert(arrayOfShit[0].objectid);
                });

                /*
                * we want to be able to pass around tempshit array by updating our arrayOfShit to tempshit after its loaded
                * however, this currently doesnt work
                * */
                console.log(tempShit);
                this.setState({ arrayOfShit: tempShit});
                console.log(this.arrayOfShit);
                });

        }).catch((err) => {
            console.log('fetch', err);
            alert('goodbye '+ err)
        })
    };
    xmljs2(){
        console.log(arrayOfShit[0].objectid)
    };
    static navigationOptions = {
        
            header: null,
         
      };
      closeDrawer = () => {
        this.drawer._root.close()
      };
      openDrawer = () => {
        this.drawer._root.open()
      };

    
render(){
    //var{navigate}= this.props.navigation;

    return(
        <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={<SideBar navigator={this.navigator} />}
        onClose={() => this.closeDrawer()} >
       <ImageBackground source={require('../images/bg.jpg')} style={styles.containerBG}>
        <Header 
        backgroundColor='rgba(0, 190, 250, 0.20)'
        leftComponent={{
          icon: 'menu',
          color: '#fff',
          onPress: () => this.openDrawer(),
       }}          
       centerComponent={{ 
        text:'App Header',
  
        style:{
        color:'white',
        }
      }}
      />
        <View>
            <Button
            onPress = {()=>
            this.props.navigation.navigate('Camera')}
            title="Go to Barcode Scanner"/>
            <TouchableOpacity onPress={this.xmljs}>
            <Image
            style = {styles.pushButton}
            source={require('../images/push_button.png')}
            />
            </TouchableOpacity>
            <TouchableOpacity onPress={this.xmljs2}>
                        <Image
                        style = {styles.pushButton}
                        source={require('../images/push_button.png')}
                        />
                        </TouchableOpacity>
            <Text>Hello World</Text>
        </View>
        </ImageBackground>
        </Drawer>


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
    containerBG:{
      flex:1,
      height:"100%",
      width:"100%",
    },
    overlayBg:{
      flex:1,
    },
    textOnPage:{
      paddingTop: "0%",    
      fontSize: 20,
      color: 'white',
      flex:1,
    },
    sectionOne:{
      height: "50%",
      width:"100%",
      alignItems: 'center', 
  
    },
    sectionTwo:{
      width:"50%",
    },
    pushButton:{
        alignItems: 'center',
        height: 50,
        width: 50,
        resizeMode:"contain"
    }
  });