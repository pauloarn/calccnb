import React, { Component } from 'react';
import { Input } from 'react-native-elements';
import styles from '../styles'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';   
export default (props) => {
    return (
        <Input
            inputContainerStyle = {styles.inputContainer}
            label = {props.field}
            labelStyle = {styles.inputLabel}
            inputStyle = {styles.input}
            keyboardType = {props.keyboard}
            onChangeText = {props.onChangeText}
            errorMessage = {props.error}
            errorStyle= {{color:'#F1D62A', fontSize: wp('3%'), fontWeight: 'bold', textAlign:'center'}}
        />
    );
}
