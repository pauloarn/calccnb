import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import styles from './styles'
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style = {styles.main}>
        <Image source = {{uri:'https://upload.wikimedia.org/wikipedia/pt/thumb/d/dd/CNB_e-Sports.png/200px-CNB_e-Sports.png'}} style = {styles.logo}/>
        <Text style ={styles.text}>CNB</Text>
        <Text style ={styles.text}>Pontuação Peneira</Text>
        <Text styles ={styles.text}></Text>
        <Text style = {styles.text}>0 Pontos</Text>
        <ScrollView>

        </ScrollView>
        <TouchableOpacity style ={styles.btnIco} onPress = {()=>this.props.navigation.navigate('add')}>
            <Icon name='add-circle' style = {styles.icon}/>
        </TouchableOpacity>
      </View>
    );
  }
}
class Partida extends Component{
    render(){
        return(
            <View>
                
            </View>
        )
    }
}
 