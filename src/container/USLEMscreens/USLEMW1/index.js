import React from 'react';
import { useLayoutEffect } from 'react';
import { StyleSheet, Dimensions, View, Text, ImageBackground, ScrollView,TextInput } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { appStyle, color, globalStyle } from "../../../utility";
import pdfView1 from './pdfscreen';
import exeScreen from './exerciseScreen';



const Tab = createMaterialTopTabNavigator();
const USLEMW1 = ({navigation}) =>{
    useLayoutEffect(()=>{
        navigation.setOptions({
          headerLeft:()=>(
              <Text size={26}
              style={{left:10, color:color.BLUE_GREEN}}
              onPress={()=>navigation.replace('USLEMs')}
              >Back</Text>
          )
        
        })
    
    }, [navigation]);

  return(
      
   <Tab.Navigator>
    <Tab.Screen name="USLEM" component={pdfView1}/>
    <Tab.Screen name="Exercises" component={exeScreen}/>
   </Tab.Navigator>
    
  )
}

export default USLEMW1;

