import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, CameraRoll, ScrollView, ImageBackground, Image, TextInput, ListView, FlatList } from 'react-native';
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
        this.xmljs =this.xmljs.bind(this);
        this.xmljs2 = this.xmljs2.bind(this);
        this.state = {
            arrayOfShit: [],
            searchField: 'Avalon',
            results: 'Results go here',
            
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
    xmljs = () =>{
      //this.state.arrayOfShit;
      //searchField = this.state.searchField      
      //alert(this.state.searchField);
    console.log('hodor');
    let tempShit = [];

    console.log(this.state.results);
    console.log(this.state.arrayOfShit);
    // this.setState({
    //   arrayOfShit: tempShit
    // })
        var parseString = require('react-native-xml2js').parseString;
        fetch('https://www.boardgamegeek.com/xmlapi/search?search='+this.state.searchField)
        .then(response => response.text())
        .then((response) => {
            parseString(response, function (err, result) {
                //console.log(result)
                
                result.boardgames.boardgame.forEach(function(boardgame, index){
                let boardgamesObj = result.boardgames;
                //alert(boardgamesObj.boardgame[index].name[0]._ + " " + boardgamesObj.boardgame[index].$.objectid + " " + boardgamesObj.boardgame[index].yearpublished[0]);
                let tempObj = {
                        name: boardgamesObj.boardgame[index].name[0]._,
                        objID: boardgamesObj.boardgame[index].$.objectid,
                        //year: boardgamesObj.boardgame[index].yearpublished[0]
                         };

                //alert(tempObj + " wut tempobj");
                 
                tempShit.push(tempObj);
                //console.log(tempShit[index].name + " wuttempshit" + index);//gave me avalon which is good
                //this.arrayOfShit.push(tempObj[index].name + "arrayOfShit");
                //return tempShit;
                //alert(this.state.arrayOfShit[0].name);
                //alert(this.arrayOfShit[0].objID);
                //alert(boardgame.$.objectid);
                //alert(arrayOfShit[0].objectid);
                });
                tempShit.forEach(function(item,index){
                  console.log(tempShit[index].name.toString());

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
            console.log('fetch', err)
            alert('goodbye '+ err)
        })
        //this.setState(arrayOfShit = tempShit);
        
    };
    renderResults(){ 
      return(    
          <Text>Hello World</Text>
      )
    }
    

    xmljs2= ()=>{
        console.log(this.state.arrayOfShit[0].objID)
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
    //let arrayOfShit = this.state.arrayOfShit;
    

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
           <TextInput 
            style = {{color: "white"}}
            onChangeText={(searchField) => this.setState({searchField})}
            value={this.state.searchField}/>
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
            <Text style = {{color: "white"}}>{this.state.results}</Text>
            <Button
            onPress = {()=>
            this.props.navigation.navigate('Camera')}
            title="Go to Barcode Scanner"/>
            {this.context.renderResults}
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