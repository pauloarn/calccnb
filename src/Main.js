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
        async function loadGames(){
          const realm = await getRealm();
          const data = realm.objects('Games');
          const average = realm.objects('Games').avg('total')
          setGames(data);
          setTotal(average.toFixed(2));
        }
        loadGames();
      })
    },[])
    useEffect (()=> () => {
      listener.remove();
    },[]);

    return (
      <View style = {styles.main}>
        <Image source = {{uri:'https://jogue.br.leagueoflegends.com/3fb69d63a4fc35119d5898b4503ffce2.png'}} style = {styles.logo}/>
        <Text style = {styles.text}>Pontuação por Game</Text>
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
        <TouchableOpacity style ={styles.btnIco} onPress = {()=>props.navigation.navigate('add')}>
            <Icon name='add-circle' style = {styles.icon}/>
        </TouchableOpacity>
      </View>
    );
}

 