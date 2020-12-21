import {StyleSheet} from 'react-native'
const style1 =StyleSheet.create({
    MainContainer:{
        //flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    svgCurve :{
      position:'absolute',
    // width: Dimensions.get('window').width,
    
    },
    
    image:{
        justifyContent: 'center',
        alignItems: 'center',
        width:360,//312,//360,
        height:283,//350,//400,//283,
        marginTop:100,//50,  //100,

    },
    wave: {
        width: 375,
        height:457,
      },
      
    combinedSh: {
        //opacity: 0.2,
        width: 360,//360//360,
        height: 456.64,
        
           
       // backgroundColor:'#A0CFEC',      //'#f0f8f1',
              
      },
      howHypnosi: {
        //flex:1,
        alignContent:'center',
        width: 300,
        height: 27,
        color: '#14110f',
        fontStyle:'normal',
        fontSize: 20,
        fontWeight:"normal",
        //lineHeight: 27,
        textAlign:'justify',
        letterSpacing: 0.1,
        marginTop:50,
      },
      
      manypeople: {
        width: 311,
        height:63,
        color: '#76908e',
        //fontFamily: "Avenir-Light",
        fontSize: 16,
        //fontWeight: 400,
        lineHeight: 21,
        textAlign: "center",
        letterSpacing: 0.5,
        marginTop:10,
      },
      formButton : {
        width: 311,
        height: 80,
      },
      
      rectangle : {
        width: 311,
        height: 40,
        borderTopLeftRadius:24,
        borderTopRightRadius:24,
        //backgroundColor:'#0092c9',
        //boxshadow: '0px 20px 20px rgba(0,0,0,0.07)',
        marginTop:30,
      },
      
     /* getStarted : {
        width: 101,
        height: 21,
        color: '#e5f4f2',
        //fontfamily:'',
        fontSize: 16,
        //fontWeight: 400,
        lineHeight: 21,
        //textAalign: 'center',
        textTransform: 'uppercase',
        letterSpacing: 0.5,
      },*/
      submit:{
        width:311,
        height:48,
        marginRight:40,
        marginLeft:40,
        marginTop:40,
        paddingTop:12,
        paddingBottom:20,
        backgroundColor:'#0092c9',
        borderRadius:50,
        borderWidth: 1,
        borderColor: '#fff'
      },
      submitText:{
          fontSize: 16,
          color:'#e5f4f2',
          textAlign:'center',
          letterSpacing: 0.5,
      }
      
      
            
    
      
   /* textStyle:{
        color:"green",
        fontSize:60
    },
    textbg:{
        backgroundColor:"red",

    }*/
})
export default style1;