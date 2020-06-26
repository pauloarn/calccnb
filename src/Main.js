import React, { Component, useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { TouchableOpacity, ScrollView, FlatList } from 'react-native-gesture-handler';
import styles from './styles';
import realm from 'realm';
import getRealm from './Services/realm'

export default function Main (props) {

    const [games, setGames] = useState([]);
    
    useEffect (()=> {
      async function loadGames(){
        const realm = await getRealm();
        const data = realm.objects('Games');
        setGames(data);
        console.log(games)
      }
      loadGames();
    },[]);

    return (
      <View style = {styles.main}>
        <Image source = {{uri:'https://upload.wikimedia.org/wikipedia/pt/thumb/d/dd/CNB_e-Sports.png/200px-CNB_e-Sports.png'}} style = {styles.logo}/>
        <Text style ={styles.text}>CNB</Text>
        <Text style ={styles.text}>Pontuação Peneira</Text>
        <Text styles ={styles.text}></Text>
        <Text style = {styles.text}>0 Pontos</Text>
        <FlatList
            data = {games}
            renderItem={({item})=><View style = {styles.cardGame}> 
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

 