import { View, Text, ImageBackground, Image } from "react-native"
import React from 'react';
import { useLayoutEffect } from "react";
import { appStyle, globalStyle } from "../../utility";
import style from "./style";
import RoundCornerButton from "../../component/button/RoundCornerButton";

const HomeScreen = ({navigation}) =>{

    return(
        
        <ImageBackground style={style.background} source={require('../../assets/Background/1.png')}>
        <View style={[globalStyle.flex1, globalStyle.sectionCentered]}>
        <Image source={require('../../component/logo/LogoMakr-11K9Xw.png')}/>
        <Text style={{fontWeight: 'bold',fontSize:25,padding: 20, textAlign: 'center'}}>Welcome!</Text>
        <Text style={{fontSize:18,padding: 25, textAlign: 'center'}}>A Digital Approach to Remote Learning and a One-Touch Approach to Checking Assessments</Text>
        <Text>Please handle application with care!</Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text style={{fontWeight:'bold'}}>Happy Learning!</Text>
        
        
        <RoundCornerButton title="Modules" onPress={()=>navigation.replace('ModuleListScreen')}/>
        <RoundCornerButton title="USLEMs" onPress={()=>navigation.replace('USLEMs')}/>
        </View>   
        </ImageBackground>
        
    )
};

export default HomeScreen;