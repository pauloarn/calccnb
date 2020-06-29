import React, { Component, useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import {Formik} from 'formik'
import * as yup from 'yup';
import InputComponent from '../Components/Input'
import  {Button, CheckBox } from 'react-native-elements'
import styles from '../styles'
import getRealm from '../Services/realm'
import uuid from 'react-native-uuid'

export default function Supp(props) {

    const [result, setResult] = useState(true);


    async function AddGame(values){
        let timeAux = 0;
        let total = 0 ;
        let winAux = 0;

        if (values.gameTime >= 70){
            timeAux = (-100)
        } else if(values.gameTime >= 60){
            timeAux = (-80)
        } else if (values.gameTime >= 50){
            timeAux = (-60)
        } else if (values.gameTime>=40){
            timeAux = (-40)
        } else if(values.gameTime >= 30){
            timeAux = (20)
        } else if (values.gameTime < 20 ){
            timeAux = (35)
        }

        if (result == true){
            winAux = 50
        } else if(result == false){
            winAux = 0
        }
        total += (values.abates * 4) 
        total += (values.mortes *(-5))
        total += (values.assists * 6)
        total += (timeAux)
        total += (values.wards * 4)
        total += (values.self_connected * 0.0003)
        total += (values.damageChamp * 0.0005)
        total += (values.vision * 0.2)
        total += (values.cc * 0.2)
        total += (winAux)

        console.log(values.champ)

        const game = {
            id : uuid.v4(),
            champion: values.champ,
            kiils: (values.abates * 6),
            deaths: (values.mortes * (-5)),
            assists: (values.assists * 4),
            time: timeAux,
            wards: (values.wards * 4),
            self_connected: (values.self_connected * 0.0003),
            damageChamp: (values.damageChamp * 0.0005),
            vision: (values.vision * 0.2),
            cc: (values.cc * 0.2),
            win: winAux,
            total: total
        };
        console.log(game);
        const realm = await getRealm();
        try {
            realm.write(()=>{
                realm.create('SUP', game)
            });
            props.navigation.navigate('main')
        }catch (e){
            alert('NÃO ADICIONOU')
            alert(e)
        }
    };

    return (
        <Formik
            initialValues = {{champ: '', abates: '', mortes: '', assists: '', gameTime: '', wards:'', self_connected:'', vision:'',damageChamp:'', cc:''}}
            validationSchema = {
                yup.object().shape({
                    champ: yup.string().required('Informe o Champ utilizado da partida'),
                    abates: yup.number().required('Informe seus abates no game'),
                    mortes: yup.number().required('Informe suas mortes no game'),
                    assists: yup.number().required('Informe suas assistencias no game'),
                    gameTime: yup.number().required('Informe o tempo do game'),
                    wards: yup.number().required('Informe quantas torres levou no game'),
                    self_connected: yup.number().required('Informe seu farm no game'),
                    vision: yup.number().required('Informe seu dano a campeões'),
                    damageChamp: yup.number().required('Informe seu danoa torres'),
                    cc: yup.number().required('Placar de CC'),
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
                        onChangeText = {handleChange('abates')}
                        keyboard = 'numeric'
                        error = {errors.abates && errors.abates}
                    />
                    <InputComponent
                        field = "Mortes"
                        onChangeText = {handleChange('mortes')}
                        keyboard = 'numeric'
                        error = {errors.mortes && errors.mortes}
                    />
                    <InputComponent
                        field = "Assistencias"
                        onChangeText = {handleChange('assists')}
                        keyboard = 'numeric'
                        error = {errors.assists && errors.assists}
                    />
                    <InputComponent
                        field = "Tempo de Jogo"
                        onChangeText = {handleChange('gameTime')}
                        keyboard = 'numeric'
                        error = {errors.gameTime && errors.gameTime}
                    />
                    <InputComponent
                        field = "Wards Destruidas"
                        onChangeText = {handleChange('wards')}
                        keyboard = 'numeric'
                        error = {errors.wards && errors.wards}
                    />
                    <InputComponent
                        field = "Dano Automitigado"
                        onChangeText = {handleChange('self_connected')}
                        keyboard = 'numeric'
                        error = {errors.self_connected && errors.self_connected}
                    />
                    <InputComponent
                        field = "Dano a Campeões"
                        onChangeText = {handleChange('damageChamp')}
                        keyboard = 'numeric'
                        error = {errors.damageChamp && errors.damageChamp}
                    />
                    <InputComponent
                        field = "Placar de Visão"
                        onChangeText = {handleChange('vision')}
                        keyboard = 'numeric'
                        error = {errors.vision && errors.vision}
                    />
                    <InputComponent
                        field = "Controle de Grupo (CC)"
                        onChangeText = {handleChange('cc')}
                        keyboard = 'numeric'
                        error = {errors.cc && errors.cc}
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
    );
}
