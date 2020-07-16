
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
        //marginTop: wp('2%'),
        width: wp('66%'),
        height:wp('30%'),
        backgroundColor:'#295b92',
        //marginBottom:wp('1%')
    },
    divider:{
        height:wp('5%')
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
    },
    checkContainer:{
        backgroundColor:'rgba(0,0,0,0)',
        borderColor: 'rgba(0,0,0,0)'
    },
    textChek:{
        color:'white'
    },
    cardGame:{
        width: wp('80%'),
        backgroundColor:'white',
        marginBottom:wp('3%'),
        justifyContent:'center',
        alignItems:'center',
        height:wp('8%'),
        elevation:wp('1%'),
        borderRadius:wp('1%'),
        elevation:wp('1%'),
        flexDirection:'row'
    },
    cardText:{
        fontSize: wp('5%'),
        marginTop:wp('1%'),
        alignSelf:'center',
        marginHorizontal: wp('3%'),
        flex:1
    },
    winInd:{
        width:wp('8%'),
        height:wp('8%'),
        marginRight:wp('10%'),
        borderTopLeftRadius:wp('1%'),
        borderBottomLeftRadius:wp('1%'),
        flex:0.3
    }
 })