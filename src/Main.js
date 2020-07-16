import React, { Component, useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { TouchableOpacity, ScrollView, FlatList } from 'react-native-gesture-handler';
import styles from './styles';
import realm from 'realm';
import {Divider} from 'react-native-elements'
import getRealm from './Services/realm'

export default function Main (props) {

    const [games, setGames] = useState([]);
    const [total, setTotal] = useState('');
    let listener ='';
    useEffect(()=>{
      listener = props.navigation.addListener('willFocus', ()=>{
        if(props.navigation.state.routeName === "top"){
          async function loadGames(){
            const realm = await getRealm();
            const data = realm.objects('TOP');
            const average = realm.objects('TOP').avg('total')
            setGames(data);
            setTotal(average.toFixed(2));
          }
          loadGames();
        } else if(props.navigation.state.routeName === "jg"){
          async function loadGames(){
            const realm = await getRealm();
            const data = realm.objects('JG');
            const average = realm.objects('JG').avg('total')
            setGames(data);
            setTotal(average.toFixed(2));
          }
          loadGames();
        }else if(props.navigation.state.routeName === "mid"){
          async function loadGames(){
            const realm = await getRealm();
            const data = realm.objects('MID');
            const average = realm.objects('MID').avg('total')
            setGames(data);
            setTotal(average.toFixed(2));
          }
          loadGames();
        }
        else if(props.navigation.state.routeName === "adc"){
          async function loadGames(){
            const realm = await getRealm();
            const data = realm.objects('ADC');
            const average = realm.objects('ADC').avg('total')
            setGames(data);
            setTotal(average.toFixed(2));
          }
          loadGames();
        } else if(props.navigation.state.routeName === "supp"){
          async function loadGames(){
            const realm = await getRealm();
            const data = realm.objects('SUP');
            const average = realm.objects('SUP').avg('total')
            setGames(data);
            setTotal(average.toFixed(2));
          }
          loadGames();
        }
      })
    },[])
    useEffect (()=> () => {
      listener.remove();
    },[]);

    return (
      <View style = {styles.main}>
        <Text style = {styles.text}>Média</Text>
        <Text style = {styles.text}>{total} Pontos</Text>
        <Divider style = {styles.divider}/>
        <FlatList
            data = {games}
            renderItem={({item})=>  <View style = {styles.cardGame}> 
                                      <Divider style ={{
                                            ...styles.winInd,
                                            backgroundColor:(item.win == 50 ? 'green':'red'),
                                          }}/>
                                        <Text style = {styles.cardText}>{item.total.toFixed(2)}</Text>                               
                                        <Text style = {styles.cardText}>{item.champion}</Text>
                                    </View> 
            }
        />
      </View>
    );
}

 