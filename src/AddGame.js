import React, { Component, useState } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles'
import { ScrollView } from 'react-native-gesture-handler';
import InputComponent from './Components/Input'
import  {Button } from 'react-native-elements'
import getRealm from './Services/realm'
import {Formik} from 'formik'
import * as yup from 'yup';

export default function AddGame (props) {    
    const [champion, setChampion] = useState('');
    const [abates, setAbates] = useState('');
    const [mortes, setMortes] = useState('');
    const [assistencias, setAssistencias] = useState('');
    const [gameTime, setGameTime] = useState('');
    const [tower, setTower] = useState('');
    const [farm, setFarm] = useState('');
    const [damageChamp, setDamageChamp] = useState('');
    const [damageGoals, setDamageGoals] = useState('');
    const [cc, setCC] = useState('');
    
    async function AddGame(){
        let timeAux = 0;
        let total = 0 ;
        if (gameTime > 70){
            timeAux = (-100)
        } else if(gameTime > 60){
            timeAux = (-80)
        } else if (gameTime > 50){
            timeAux = (-60)
        } else if (gameTime>40){
            timeAux = (-40)
        } else if(gameTime > 30){
            timeAux = (20)
        } else if (gameTime <20 ){
            timeAux = (35)
        }
        total = ((abates * 6)+ (mortes *(-5)) + (assistencias * 4) + (timeAux) + (tower * 2) + (farm * 0.15) + (damageChamp * 0.0007) + (damageGoals * 0.0002) + (cc * 0.4))

        console.log(total)
        console.log(champion)
        const game = {
            champion: champion,
            kiils: (abates * 6),
            deaths: (mortes * (-5)),
            assists: (assistencias * 4),
            time: timeAux,
            towers: (tower * 2),
            Farm:  (farm * 0.15),
            damageChamp: (damageChamp * 0.0007),
            damageGoals: (damageGoals * 0.0002),
            cc: (cc * 0.4),
            total: total
        };

        const realm = await getRealm();
        try {
            realm.write(()=>{
                realm.create('Games', game, 'modified')
            });
            props.navigation.navigate('main')
        }catch (e){
            alert('NÃO ADICIONOU')
            alert(e)
        }

    };
  return (  
      <>      
        <View style ={{backgroundColor:'#295b92', alignItems:'center'}}>
            <Image source = {{uri:'https://upload.wikimedia.org/wikipedia/pt/thumb/d/dd/CNB_e-Sports.png/200px-CNB_e-Sports.png'}} 
                style = {styles.logo}/>
        </View>
        <ScrollView style = {styles.scroll}>
                <Formik
                    initialValues = {{champ: '', abatesf: '', mortesf: '', assists: '', gameTimef: '', towers:'', farmf:'', champDamage:'', goalsDamage:'', ccf:'', }}
                    validationSchema = {
                        yup.object().shape({
                            champ: yup.string().required('Informe o Champ utilizado da partida'),
                            abatesf: yup.number().required('Informe seus abates no game'),
                            mortesf: yup.number().required('Informe suas mortes no game'),
                            assists: yup.number().required('Informe suas assistencias no game'),
                            gameTimef: yup.number().required('Informe o tempo do game'),
                            towers: yup.number().required('Informe quantas torres levou no game'),
                            farmf: yup.number().required('Informe seu farm no game'),
                            champDamage: yup.number().required('Informe seu dano a campeões'),
                            goalsDamage: yup.number().required('Informe seu danoa torres'),
                            ccf: yup.number().required('Placar de CC'),
                        })
                    }
                    onSubmit={(values) => {
                        setChampion(values.champ),
                        setAbates(values.abatesf),
                        setMortes(values.mortesf),
                        setAssistencias(values.assists),
                        setGameTime(values.gameTimef),
                        setTower(values.towers),
                        setFarm(values.farm),
                        setDamageChamp(values.champDamage),
                        setDamageGoals(values.goalsDamage),
                        setCC(values.cc)
                        console.log(values)
                    }}
                >
                    {({values, handleChange, errors,handleSubmit})=>(                        
                        <View style={styles.insideScroll}>
                            {console.log(errors)}
                            <InputComponent
                                field = "Campeão do Jogo"
                                onChangeText = {handleChange('champ')}
                                keyboard = 'default'
                                error = {errors.champ && errors.champ}
                            />
                            <InputComponent
                                field = "Abates"
                                onChangeText = {handleChange('abatesf')}
                                keyboard = 'numeric'
                                error = {errors.abatesf && errors.abatesf}
                            />
                            <InputComponent
                                field = "Mortes"
                                onChangeText = {handleChange('mortesf')}
                                keyboard = 'numeric'
                                error = {errors.mortesf && errors.mortesf}
                            />
                            <InputComponent
                                field = "Assistencias"
                                onChangeText = {handleChange('assists')}
                                keyboard = 'numeric'
                                error = {errors.assists && errors.assists}
                            />
                            <InputComponent
                                field = "Tempo de Jogo"
                                onChangeText = {handleChange('gameTimef')}
                                keyboard = 'numeric'
                                error = {errors.gameTimef && errors.gameTimef}
                            />
                            <InputComponent
                                field = "Torres Destruidas"
                                onChangeText = {handleChange('towers')}
                                keyboard = 'numeric'
                                error = {errors.towers && errors.towers}
                            />
                            <InputComponent
                                field = "Farm"
                                onChangeText = {handleChange('farmf')}
                                keyboard = 'numeric'
                                error = {errors.farmf && errors.farmf}
                            />
                            <InputComponent
                                field = "Dano a Campeões"
                                onChangeText = {handleChange('champDamage')}
                                keyboard = 'numeric'
                                error = {errors.champDamage && errors.champDamage}
                            />
                            <InputComponent
                                field = "Dano a Objetivos"
                                onChangeText = {handleChange('goalsDamage')}
                                keyboard = 'numeric'
                                error = {errors.goalsDamage && errors.goalsDamage}
                            />
                            <InputComponent
                                field = "Controle de Grupo (CC)"
                                onChangeText = {handleChange('ccf')}
                                keyboard = 'numeric'
                                error = {errors.ccf && errors.ccf}
                            />            
                            <Button
                                title = 'Adicionar Jogo'
                                onPress= {handleSubmit}
                            />
                        </View>
                    )}                    
                </Formik>
        </ScrollView>
      </>
  );
}
