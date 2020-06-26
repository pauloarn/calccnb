import React, {Component} from 'react'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Main from './Main'
import AddGame from './AddGame'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';   
import Icon from 'react-native-vector-icons/FontAwesome5'
export default createAppContainer(
    createStackNavigator({
        main:{ screen: Main,
            navigationOptions:{
                headerVisible:false,
                headerShown: false
            }            
        },
        add: { screen: AddGame,
            navigationOptions:{
                headerTintColor:'white',
                title: 'Adicionar Novo Jogo',
                headerStyle:{
                    backgroundColor: '#295b92',
                    elevation:0
                },
                headerBackImage: () => (<Icon name='angle-left' size={wp('10%')} color='white'/>),
                headerTitleContainerStyle:{
                    justifyContent:'center'
                  },
                  headerTitleStyle: {
                    fontSize: wp('7%'),
                    //marginTop: wp('5%'),
                    marginLeft: wp('4%')
                  },
            }
        }   
    },
    {
        initialRouteName: 'main',
    }
    )
)