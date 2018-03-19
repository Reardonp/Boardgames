export async function returnSomething(params) {
    console.log('hello from here' + params)
    console.log('hodor');
    let tempShit = new Array();
    let arrayOfShit = new Array();
    var parseString = require('react-native-xml2js').parseString;
    return fetch('https://www.boardgamegeek.com/xmlapi/search?search=' + params)
        .then(response => response.text())
        .then((response) => {
            parseString(response, (err, result) => {
                result.boardgames.boardgame.forEach(function (boardgame, index) {
                    let boardgamesObj = result.boardgames;
                    let tempObj;
                    if (boardgamesObj.boardgame[index].name[0]._ != null) {
                        tempObj = {
                            name: boardgamesObj.boardgame[index].name[0]._,
                            objID: boardgamesObj.boardgame[index].$.objectid,
                        };
                    } else {
                        tempObj = {
                            name: boardgamesObj.boardgame[index].name,
                            objID: boardgamesObj.boardgame[index].$.objectid,
                        };
                    }
                    if (tempObj != null) {
                        tempShit.push(tempObj);
                    } else {
                        console.log(tempObj + " fail")
                    };
                });
                tempShit.forEach(function (item, index) {
                    arrayOfShit = tempShit;
                });
            });
            return arrayOfShit;
        }).catch((err) => {
            console.log('fetch', err);
            alert('goodbye ' + err)
        })
}
export async function returnDetails(params) {
    console.log('hello from here' + params)
    console.log('hodor');
    let tempShit = new Array();
    let arrayOfShit = new Array();
    var parseString = require('react-native-xml2js').parseString;
    return fetch('https://www.boardgamegeek.com/xmlapi/boardgame/' + params)
        .then(response => response.text())
        .then((response) => {
            parseString(response, (err, result) => {
                result.boardgames.boardgame.forEach(function (boardgame, index) {
                    let boardgamesObj = result.boardgames;
                    let tempObj;
                    //console.log(boardgamesObj)
                    if (boardgamesObj.boardgame[index].name[0]._ != null) {
                        tempObj = {
                            
                            name: boardgamesObj.boardgame[index].name[0]._,
                            objID: boardgamesObj.boardgame[index].$.objectid,
                            image:boardgamesObj.boardgame[index].image[0],
                            thumbnail: boardgamesObj.boardgame[index].thumbnail[0],
                            description: boardgamesObj.boardgame[index].description[0],
                            year: boardgamesObj.boardgame[index].yearpublished[0],
                            maxPlayers: boardgamesObj.boardgame[index].maxplayers[0],
                            minPlayers: boardgamesObj.boardgame[index].minplayers[0],
                            playingTime: boardgamesObj.boardgame[index].playingtime[0],
                            age: boardgamesObj.boardgame[index].age[0]
                        };
                    } else {
                        tempObj = {
                            name: boardgamesObj.boardgame[index].name,
                            objID: boardgamesObj.boardgame[index].$.objectid,
                        };
                    }
                    if (tempObj != null) {
                        tempShit.push(tempObj);
                    } else {
                        console.log(tempObj + " fail")
                    };
                });
                tempShit.forEach(function (item, index) {
                    arrayOfShit = tempShit;
                });
            });
            return arrayOfShit;
        }).catch((err) => {
            console.log('fetch', err);
            alert('goodbye ' + err)
        })
}