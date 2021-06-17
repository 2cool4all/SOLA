import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {color, globalStyle} from '../../utility';
import {Logo} from '../../component';

const SplashScreen = ({navigation}) =>{
    useEffect(()=>{
        const redirect = setTimeout(()=>{
            navigation.navigate('Home');
        }, 3000);
        return () => clearTimeout(redirect);
    }, [navigation])
    return(
        <View 
        style = {[globalStyle.containerCentered, {backgroundColor: color.WHITE}]}>
        <Logo/>
        </View>
    );
};


export default SplashScreen;