import React, { Component } from 'react';
import {  View, Text, } from 'react-native';

export default class Utils extends Component {
bggGetResByName = (params) => {
    console.log('hello from Utils class')
        //this.state.arrayOfStuff;
    //searchField = this.state.searchField      
    //alert(this.state.searchField);
    console.log('hodor');
    let tempStuff = new Array();
    let arrayOfStuff = new Array();
    console.log(this.state.searchField)
    console.log(this.state.results);
    console.log(this.state.arrayOfStuff);
    // this.setState({
    //   arrayOfStuff: tempStuff
    // })
    var parseString = require('react-native-xml2js').parseString;
    fetch('https://www.boardgamegeek.com/xmlapi/search?search=' + params)
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
            tempStuff.push(tempObj);
            }else{console.log(tempObj + " fail")
          };
            
            //console.log(tempStuff[index].name + " wuttempstuff" + index);//gave me avalon which is good
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
      });
    //this.setState(arrayOfStuff = tempStuff);
  return arrayOfStuff;
};

bggGetResById = (params) => {
  ;
};

barcodeGetRes = (params) => {
  ;
};




  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

