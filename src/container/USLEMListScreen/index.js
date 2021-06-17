import { ImageBackground, Text, View } from "react-native"
import React from 'react';
import style from "./style";
import RoundCornerButton from "../../component/button/RoundCornerButton";
import { appStyle, color, globalStyle } from "../../utility";
import { useLayoutEffect } from "react";

const USLEMListScreen = ({navigation}) =>{
  useLayoutEffect(()=>{
    navigation.setOptions({
      headerLeft:()=>(
          <Text size={26} 
          style={{left:10, color:color.BLUE_GREEN}}
          onPress={()=>navigation.replace('Home')}
          >Back</Text>
      )
    })

}, [navigation]);
  
  
  
  return(
       <ImageBackground style={style.background} source={require('../../assets/Background/1.png')}>
         <View style={[globalStyle.flex1, globalStyle.sectionCentered]}>
         <RoundCornerButton title="USLEM Week 1" onPress={()=>navigation.replace('USLEM Week 1')}/>
         <RoundCornerButton title="USLEM Week 2" onPress={()=>navigation.replace('ElectricForce')}/>
         <RoundCornerButton title="USLEM Week 3" onPress={()=>navigation.replace('ModuleListScreen')}/>
         <RoundCornerButton title="USLEM WeeK 4" onPress={()=>navigation.replace('ModuleListScreen')}/>
         <RoundCornerButton title="USLEM Week 5" onPress={()=>navigation.replace('ModuleListScreen')}/>
         </View>
       </ImageBackground>
    
    );
};

export default USLEMListScreen;