export async function returnSomething(params) {
    console.log('hello from here' + params)
    //this.state.arrayOfShit;
    //searchField = this.state.searchField      
    //alert(this.state.searchField);
    console.log('hodor');
    let tempShit = new Array();
    let arrayOfShit = new Array();
    // console.log(this.state.searchField)
    // console.log(this.state.results);
    // console.log(this.state.arrayOfShit);
    // this.setState({
    //   arrayOfShit: tempShit
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
                        tempShit.push(tempObj);
                    } else {
                        console.log(tempObj + " fail")
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
                    //console.log(tempShit[index].name);
                    arrayOfShit = tempShit;
                    //this.state.results += tempShit[index].name.toString();
                });
                console.log(arrayOfShit);
                return arrayOfShit;
                //alert(tempShit[0].name);
                //alert(arrayOfShit[2].name);    
                // tempShit.forEach(function(item,index){
                //   alert([index].name)
                //   this.state.results += tempShit[index].name;
                // })            
            });
            //console.log(arrayOfShit);
            console.log('at line 69')
            if(arrayOfShit === null){
                console.log('wtf')
            }else{
                console.log(arrayOfShit);
            }
            return arrayOfShit;
            //console.log(arrayOfShit);
            //console.log('hello');
            // this.setState({
            //   arrayOfShit: arrayOfShit
            // })
        }).catch((err) => {
            console.log('fetch', err);
            alert('goodbye ' + err)
        })
    //this.setState(arrayOfShit = tempShit);

    
    console.log(arrayOfShit + 'at line 70');
}