import React from 'react';
import { Text, View,Image,TouchableHighlight,Dimensions } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import style2 from './src/screen2/style2'

const App =() => {
  return (
  <View style={style2.MainContainer}>
    <View style={style2.combinedSh}>
      <View style={style2.svgCurve}>
       <View style={{ backgroundColor: '#82CAFA', height: 383, }}>
        <Svg 
          height="60%"
          width="280%"
          viewBox="0 0 1440 320"
          
          style={{ position: 'absolute', top:380 }}//380 }}
        
        >
          <Path
            fill="#82CAFA"
            d="M0 98.2979L15.0539 102.993C30.1078 107.513 60.1278 117.168 90.4111 105.319C120.387 93.4707 150.539 60.9973 180.383 53.8444C210.667 46.9548 240.95 65.3856 270.794 65.5173C300.946 65.3856 330.922 46.9548 361.206 51.4747C391.226 56.1702 420.876 75.359 451.159 77.6848C481.047 80.1862 511.744 65.3856 541.589 53.8444C571.828 42.1277 601.717 42.1277 617.078 42.1277L632 42.1277L632 0L616.946 0C601.892 0 571.872 0 541.589 0C511.613 0 481.461 0 451.617 0C421.333 0 391.05 0 361.206 0C331.054 0 301.078 0 270.794 0C240.774 0 210.667 0 180.383 0C150.495 0 120.256 0 90.4111 0C60.1717 0 30.2833 0 14.9222 0L0 0L0 98.2979Z"
          />
        </Svg>
        
        <Image source={{uri:'https://lun-eu.icons8.com/api/assets/1d036942-632b-4eec-afae-3e6f27b96c4f/vector.png'}} style={style2.image} ></Image>
      
    </View>
    </View>
    </View>
    <View>
      <Text style={style2.howHypnosi}>           The A Z Of Motivation</Text>
    </View>
    
    <View style={style2.ContainerB}>
      <Text style={style2.manypeople}>    Some days a motivational quote can  {'\n'} provied a quick pick-me-up for {'\n'} employees and even management.</Text>
    </View>
      
   <TouchableHighlight
     style={style2.submit}
     onPress={() => this.submitSuggestion(this.props)}
     underlayColor='#fff'>
    <Text style={[style2.submitText]}>GET STARTED</Text>
  </TouchableHighlight>

      </View>
  

   
  )
}


export default App;
