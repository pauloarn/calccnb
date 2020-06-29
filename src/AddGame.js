import React, { Component, useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles'
import { ScrollView } from 'react-native-gesture-handler';
import Adc from './Formiks/Adc';
import Top from './Formiks/Top';
import Jg from './Formiks/Jg'
import Mid from './Formiks/Mid'
import Supp from './Formiks/Supp'
export default function AddGame (props) {    
    
    const [role, setRole] = useState('top');

    useEffect(()=>{
        setRole(props.navigation.getParam('role'));
    },[])

    function checkRole (param) {
        switch(param){
            case 'top':
                return <Top
                    navigation = {props.navigation}
                />
            case 'jg':
                return <Jg                    
                    navigation = {props.navigation}
                />
            case 'mid':
                return <Mid                    
                    navigation = {props.navigation}
                />            
            case 'adc':
                return <Adc                    
                    navigation = {props.navigation}
                />               
            case 'supp':
                return <Supp                    
                    navigation = {props.navigation}
                />
        }
    }
  return (  
      <>      
        <View style ={{backgroundColor:'#295b92', alignItems:'center'}}>
            <Image source = {{uri:'https://jogue.br.leagueoflegends.com/3fb69d63a4fc35119d5898b4503ffce2.png'}} 
                style = {styles.logo}/>
        </View>
        <ScrollView style = {styles.scroll}>
          {checkRole(role)}            
        </ScrollView>
      </>
  );
}
