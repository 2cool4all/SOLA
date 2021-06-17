import { View, Text, ImageBackground, ScrollView, Alert } from "react-native"
import React from 'react';
import { useLayoutEffect } from "react";
import { appStyle, globalStyle, color } from "../../utility";
import style from "./style";
import RoundCornerButton from "../../component/button/RoundCornerButton";
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const ElectricForce = ({navigation}) =>{
    useLayoutEffect(()=>{
        navigation.setOptions({
          headerRight:()=>(
            <SimpleLineIcons name="arrow-right" size={26} color={color.WHITE} 
            style={{right:10}}
            onPress={()=>Alert.alert(
              "Exercise Screen", "Are you sure you want to move to the exercise screen?",[
                {
                  text: 'Yes',
                  onPress:()=> navigation.replace('Exercise2'), 
                },
                {
                  text: 'No'
                },
              ],
              {
                cancelable:false,
              },
            )}/>
          ),
          headerLeft:()=>(
              <SimpleLineIcons name="arrow-left" size={26} color={color.WHITE}
              style={{left:10}}
              onPress={()=>navigation.replace('ModuleListScreen')}
              />
          )
        })
    
    }, [navigation]);
    
    return(
    <ImageBackground style={style.background} source={require('../../assets/Background/1.png')}>
        <ScrollView>
          <Text>To be Inserted</Text>
        </ScrollView>
    </ImageBackground>
    );
};

export default ElectricForce;