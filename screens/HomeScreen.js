import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, CameraRoll, ScrollView, ImageBackground, Image } from 'react-native';
import {Drawer} from 'native-base';
import{Button, Header} from 'react-native-elements';
import {StackNavigator} from 'react-navigation';
//import SecondScreen from './secondscreen';]
import SideBar from './sidebar';


/*const AppNavigator = StackNavigator({
    Second: {screen: SecondScreen},
  });*/
export default class HomeScreen extends Component {

    static navigationOptions = {
        
            header: null,
         
      };
      closeDrawer = () => {
        this.drawer._root.close()
      };
      openDrawer = () => {
        this.drawer._root.open()
      }
    
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
            <TouchableOpacity onPress={this.openDrawer}>
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