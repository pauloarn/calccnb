import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Main from './Main'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {FloatingAction} from 'react-native-floating-action'
import { createAppContainer } from 'react-navigation';
import styles from './styles';

const Roles = createAppContainer(
createMaterialTopTabNavigator({
    supp:{
        screen: Main
    },
    adc:{
        screen:Main
    },
    mid:{
        screen:Main
    },
    top:{
        screen:Main
    },
    jg:{
        screen:Main
    }
},{
    initialRouteName: 'mid',
    tabBarPosition:'bottom',
    order:['top','jg', 'mid', 'adc','supp'],
    tabBarOptions:{
        indicatorStyle:{
            backgroundColor:'#fff'
        },
        labelStyle:{
            fontSize: wp('3.5%'),
            fontWeight:'bold'
        },
        style:{
            backgroundColor:'#295b92'
        }
    }
}
)
)

export default class rolesFull extends Component{
    
    Top = () =>{
        this.props.navigation.navigate('add', {role: 'top'} )
    }
    Jg = () =>{
        this.props.navigation.navigate('add', {role: 'jg'} )
    }
    Mid = () =>{
        this.props.navigation.navigate('add', {role: 'mid'} )
    }
    Adc = () =>{
        this.props.navigation.navigate('add', {role: 'adc'} )
    }
    Sup = () =>{
        this.props.navigation.navigate('add', {role: 'supp'} )
    }
    func ={
        top :this.Top,
        jg: this.Jg,
        mid:this.Mid,
        adc:this.Adc,
        supp: this.Sup
    }
    
    actions = [
        {
          text: "Top",
          icon:  require('../laneIcons/top.png'),
          name: "top",
          position: 1,
          color: '#295b92'
        },
        {
          text: "Jungle",
          icon: require('../laneIcons/jg.png'),
          name: "jg",
          position: 2,
          color: '#295b92'
        },
        {
          text: "Mid",
          icon: require('../laneIcons/mid.png'),
          name: "mid",
          position: 3,
          color: '#295b92'
        },
        {
          text: "Adc",
          icon: require('../laneIcons/bot.png'),
          name: "adc",
          position: 4,
          color: '#295b92'
        },
        {
          text: "Suporte",
          icon: require('../laneIcons/supp.png'),
          name: "supp",
          position: 5,
          color: '#295b92'
        },
      ];
    render(){
        return(
            <>
                <View style = {{width: wp('100%'),height: hp('20%'), alignItems:'center', justifyContent:'center', backgroundColor: '#295b92'}}>
                    <Image source = {{uri:'https://jogue.br.leagueoflegends.com/3fb69d63a4fc35119d5898b4503ffce2.png'}} style = {styles.logo}/>
                    <Text style = {styles.text}>Pontuação por Game</Text>
                </View>
                <Roles/>
                <FloatingAction
                    actions={this.actions}
                    onPressItem={name => {
                        this.func[name]()
                    }}
                    color= 'rgba(0,0,0,0)'
                    dismissKeyboardOnPress = {true}
                    floatingIcon = {
                            <Icon name='add-circle' style = {styles.icon}/>
                    }
                    buttonSize = {wp('14%')}
                    elevation = {false}
                    distanceToEdge = {wp('10%')}
                />
            </>
        )
    }
}