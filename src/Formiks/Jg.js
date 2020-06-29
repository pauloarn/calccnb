import React, { Component, useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import {Formik} from 'formik'
import * as yup from 'yup';
import InputComponent from '../Components/Input'
import  {Button, CheckBox } from 'react-native-elements'
import styles from '../styles'
import getRealm from '../Services/realm'
import uuid from 'react-native-uuid'

export default function Jg (props) {

    const [result, setResult] = useState(true);


    async function AddGame(values){

        let timeAux = 0;
        let total = 0 ;
        let winAux = 0;

        if (values.gametime >= 70){
            timeAux = (-100)
        } else if(values.gametime >= 60){
            timeAux = (-80)
        } else if (values.gametime >= 50){
            timeAux = (-60)
        } else if (values.gametime>=40){
            timeAux = (-40)
        } else if(values.gametime >= 30){
            timeAux = (20)
        } else if (values.gametime < 20 ){
            timeAux = (35)
        }

        if (result == true){
            winAux = 50
        } else if(result == false){
            winAux = 0
        }
        total += (values.abates * 6) 
        total += (values.mortes *(-5))
        total += (values.assists * 6)
        total += (timeAux)
        total += (values.drags * 6)
        total += (values.arautos * 5)
        total += (values.barons * 12)
        total += (values.cc * 0.4)
        total += (winAux)

        console.log(values.champ)

        const game = {
            id : uuid.v4(),
            champion: values.champ,
            kiils: (values.abates * 6),
            deaths: (values.mortes * (-5)),
            assists: (values.assists * 4),
            time: timeAux,
            drags: (values.drags * 6),
            arautos: (values.arautos * 5),
            barons: (values.barons * 12),
            cc: (values.cc * 0.4),
            win: winAux,
            total: total
        };
        console.log(game);
        const realm = await getRealm();
        try {
            realm.write(()=>{
                realm.create('JG', game)
            });
            props.navigation.navigate('main')
        }catch (e){
            alert('NÃO ADICIONOU')
            alert(e)
        }
    };

    return (
        <Formik
            initialValues = {{champ: 'Rammus', abates: '7', mortes: '2', assists: '9', gametime: '31', drags:'4', arautos:'2', barons:'2', cc:'40'}}
            validationSchema = {
                yup.object().shape({
                    champ: yup.string().required('Informe o Champ utilizado da partida'),
                    abates: yup.number().required('Informe seus abates no game'),
                    mortes: yup.number().required('Informe suas mortes no game'),
                    assists: yup.number().required('Informe suas assistencias no game'),
                    gametime: yup.number().required('Informe o tempo do game'),
                    drags: yup.number().required('Informe quantos dragões seu time abateu'),
                    arautos: yup.number().required('Informe quantos arautos seu time abateu'),
                    barons: yup.number().required('Informe quantos barons seu time abateu'),
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
                        onChangeText = {handleChange('gametime')}
                        keyboard = 'numeric'
                        error = {errors.gametime && errors.gametime}
                    />
                    <InputComponent
                        field = "Dragões da Equipe"
                        onChangeText = {handleChange('drags')}
                        keyboard = 'numeric'
                        error = {errors.drags && errors.drags}
                    />
                    <InputComponent
                        field = "Arautos da Equipe"
                        onChangeText = {handleChange('arautos')}
                        keyboard = 'numeric'
                        error = {errors.arautos && errors.arautos}
                    />
                    <InputComponent
                        field = "Barões da Equipe"
                        onChangeText = {handleChange('barons')}
                        keyboard = 'numeric'
                        error = {errors.barons && errors.barons}
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
