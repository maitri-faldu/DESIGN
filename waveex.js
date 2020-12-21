import React from 'react';
import { StyleSheet, View, Text, Dimensions,Image } from 'react-native';
import Svg, { Path } from 'react-native-svg';

export default function WavyHeader({ customStyles }) {
  return (
    <View style={styles.svgCurve}>
    
      <View style={{ backgroundColor: '#0092C9', height: 383 }}>
        <Svg 
          height="60%"
          width="280%"
          viewBox="0 0 1440 320"
          
          style={{ position: 'absolute', top: 380 }}
        
        >
          <Path
            fill="#0092C9"
            d="M0 98.2979L15.0539 102.993C30.1078 107.513 60.1278 117.168 90.4111 105.319C120.387 93.4707 150.539 60.9973 180.383 53.8444C210.667 46.9548 240.95 65.3856 270.794 65.5173C300.946 65.3856 330.922 46.9548 361.206 51.4747C391.226 56.1702 420.876 75.359 451.159 77.6848C481.047 80.1862 511.744 65.3856 541.589 53.8444C571.828 42.1277 601.717 42.1277 617.078 42.1277L632 42.1277L632 0L616.946 0C601.892 0 571.872 0 541.589 0C511.613 0 481.461 0 451.617 0C421.333 0 391.05 0 361.206 0C331.054 0 301.078 0 270.794 0C240.774 0 210.667 0 180.383 0C150.495 0 120.256 0 90.4111 0C60.1717 0 30.2833 0 14.9222 0L0 0L0 98.2979Z"
          />
        </Svg>
      </View>
    </View>

     


  );
}

 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  svgCurve: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    opacity:0.2
  },
  image:{
    justifyContent: 'center',
    alignItems: 'center',
    width:360,
    height:283,
    marginTop:100,
  },
 
  headerContainer: {
    marginTop: 50,
    marginHorizontal: 10
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginTop: 35
  }
});