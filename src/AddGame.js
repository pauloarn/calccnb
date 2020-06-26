import React, { Component, useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles'
import { ScrollView } from 'react-native-gesture-handler';
import InputComponent from './Components/Input'
import  {Button, CheckBox } from 'react-native-elements'
import getRealm from './Services/realm'
import {Formik} from 'formik'
import * as yup from 'yup';
import uuid from 'react-native-uuid'

export default function AddGame (props) {    
    
    const [result, setResult] = useState(true);

    async function AddGame(values){
        let timeAux = 0;
        let total = 0 ;
        let winAux = 0;

        if (values.gameTimef >= 70){
            timeAux = (-100)
        } else if(values.gameTimef >= 60){
            timeAux = (-80)
        } else if (values.gameTimef >= 50){
            timeAux = (-60)
        } else if (values.gameTimef>=40){
            timeAux = (-40)
        } else if(values.gameTimef >= 30){
            timeAux = (20)
        } else if (values.gameTimef < 20 ){
            timeAux = (35)
        }

        if (result == true){
            winAux = 50
        } else if(result == false){
            winAux = 0
        }
        total += (values.abatesf * 6) 
        total += (values.mortesf *(-5))
        total += (values.assists * 4)
        total += (timeAux)
        total += (values.towers * 2)
        total += (values.farmf * 0.15)
        total += (values.champDamage * 0.0007)
        total += (values.goalsDamage * 0.0002)
        total += (values.ccf * 0.4)
        total += (winAux)

        console.log(values.champ)

        const game = {
            id : uuid.v4(),
            champion: values.champ,
            kiils: (values.abatesf * 6),
            deaths: (values.mortesf * (-5)),
            assists: (values.assists * 4),
            time: timeAux,
            towers: (values.towers * 2),
            Farm:  (values.farmf * 0.15),
            damageChamp: (values.champDamage * 0.0007),
            damageGoals: (values.goalsDamage * 0.0002),
            cc: (values.ccf * 0.4),
            win: winAux,
            total: total
        };
        console.log(game);
        const realm = await getRealm();
        try {
            realm.write(()=>{
                realm.create('Games', game)
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
            <Image source = {{uri:'https://jogue.br.leagueoflegends.com/3fb69d63a4fc35119d5898b4503ffce2.png'}} 
                style = {styles.logo}/>
        </View>
        <ScrollView style = {styles.scroll}>
                <Formik
                    initialValues = {{champ: '', abatesf: '', mortesf: '', assists: '', gameTimef: '', towers:'', farmf:'', champDamage:'', goalsDamage:'', ccf:''}}
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
                        console.log(values)
                        AddGame(values)
                    }}
                >
                    {({values, handleChange, errors,handleSubmit})=>(                        
                        <View style={styles.insideScroll}>
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
                            <View style = {{flexDirection:"row"}}>
                                <CheckBox
                                    title = 'Vitória'
                                    checked = {result}
                                    onPress = {()=>setResult(!result)}
                                    containerStyle = {styles.checkContainer}
                                    textStyle = {styles.textChek}
                                />
                                 <CheckBox
                                    title = 'Derrota'    
                                    checked = {!result}
                                    onPress = {()=>setResult(!result)}
                                    containerStyle = {styles.checkContainer}    
                                    textStyle = {styles.textChek}                    
                                />
                            </View>    
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
