
import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';   
export default StyleSheet.create({
    main:{
        flex:1,
        backgroundColor: '#295b92',
        alignItems: 'center',
        justifyContent: 'center'    
    },
    insideScroll:{
        backgroundColor: '#295b92',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: wp('5%')    
    },
    logo:{
        marginTop: wp('5%'),
        width: wp('25%'),
        height:wp('25%'),
        backgroundColor:'#295b92',
        marginBottom:wp('2%')
    },
    text:{
        fontSize: wp('6%'),
        color:'white'
    },
    icon:{
        fontSize:wp('15%'),
        color:'white',
    },
    btnIco:{
        marginLeft:wp('80%')
    },
    scroll:{
        //paddingHorizontal: wp('20%'),
        width: wp('100%'),
    },
    inputContainer:{
        width: wp('50%'),
        color:'white',
        borderColor: 'white',
        alignSelf:'center'
    },
    input:{
        color: 'white',
        marginBottom:-wp('3%'),
        textAlign:'center'
    },
    inputLabel:{
        color:'white',
        marginBottom:-wp('3%'),
        textAlign:'center'
    }
 })