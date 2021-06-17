import { ImageBackground, Text, View } from "react-native"
import React from 'react';
import style from "./style";
import RoundCornerButton from "../../component/button/RoundCornerButton";
import { appStyle, color, globalStyle } from "../../utility";
import { useLayoutEffect } from "react";

const ModuleListScreen = ({navigation}) =>{
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
         <RoundCornerButton title="Electric Charge" onPress={()=>navigation.replace('ElectricCharge')}/>
         <RoundCornerButton title="Electric Force" onPress={()=>navigation.replace('ElectricForce')}/>
         <RoundCornerButton title="Electric Field" onPress={()=>navigation.replace('ModuleListScreen')}/>
         <RoundCornerButton title="Coulombs Law" onPress={()=>navigation.replace('ModuleListScreen')}/>
         <RoundCornerButton title="Electric Flux" onPress={()=>navigation.replace('ModuleListScreen')}/>
         </View>
       </ImageBackground>
    
    );
};

export default ModuleListScreen;