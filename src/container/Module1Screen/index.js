import { View, Text, ImageBackground, ScrollView, Alert, Image } from "react-native"
import React from 'react';
import { useLayoutEffect } from "react";
import { appStyle, globalStyle, color } from "../../utility";
import style from "./style";
import RoundCornerButton from "../../component/button/RoundCornerButton";
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';


const ElectricCharge = ({navigation}) =>{



    useLayoutEffect(()=>{
        navigation.setOptions({
          headerRight:()=>(
            <Text size={26} 
            style={{right:10, color:color.BLUE_GREEN}}
            onPress={()=>Alert.alert(
              "Exercise Screen", "Are you sure you want to move to the exercise screen?",[
                {
                  text: 'Yes',
                  onPress:()=> navigation.replace('Exercise1'), 
                },
                {
                  text: 'No'
                },
              ],
              {
                cancelable:false,
              },
            )}>Exercise</Text>
          ),
          headerLeft:()=>(
              <Text size={26}
              style={{left:10, color:color.BLUE_GREEN}}
              onPress={()=>navigation.replace('ModuleListScreen')}
              >Back</Text>
          )
        })
    
    }, [navigation]);

    return(
    <ImageBackground style={style.background} source={require('../../assets/Background/1.png')}>
        <ScrollView>
        <View style={{padding:20}}>
        <Text> </Text>
        <Text>1.	Describe using a diagram charging by rubbing and charging by induction</Text>
        <Text>    (MELC Code: STEM_GP12EM-IIIa-1)</Text>
        <Text>2.	Explain the role of electron transfer in electrostatic charging by rubbing</Text>
        <Text>    (MELC Code: STEM_GP12EM-IIIa-2)</Text>
        <Text> </Text>
        <Text> </Text>

        <Text> </Text>
        <Text style={{fontWeight:'bold',fontSize:20}}>DISCUSSION PROPER</Text>
        <Text style={{fontSize:16}}>     Have you tried combing your hair then immediately place the comb near to small pieces of paper? Have you also noticed that small pieces of paper tend to attract or stick to the comb? </Text>
        <Text> </Text>
        <Text style={{fontWeight:'bold', fontSize:16}}>Static electricity</Text>
        <Text style={{fontSize:16}}>     Refers to the imbalance of electrons in an object. It is referred as ‘static’ the electrons remain stationary after its transfer from one insulating material to another. This is because electrons can easily be dislodged than the protons or neutrons.</Text>
        <Text> </Text>
        <Text style={{fontWeight:'bold', fontSize:16}}>Electric Charge </Text>
        <Text style={{fontSize:16}}>     refers to the basic property of matter, which is usually carried by elementary particles, that helps determine how things would react when placed in an electric or magnetic field. The unit of charge is Coulomb (C).</Text>
        <Text> </Text>
        <Text style={{fontSize:16}}>There are basically two types of charge – positive, and negative. Both charges have different directions of electric forces. These forces may either be attractive or repulsive depending on the charges placed near each other.</Text>
        <Text> </Text>
        <Text> </Text>
        <Text style={{fontSize:16}}>This static electricity is usually produced through either rubbing or through induction.</Text>
        <Text> </Text>
               
                <Image source={require('./ChargingbyRubbing.png')} style={{width:360, height:250, resizeMode: 'contain'}}/>
              
        <Text> </Text>
        <Text style={{fontWeight:'bold', fontSize:16}}>Charging by Rubbing</Text>
        <Text> </Text>
        <Text style={{fontSize:16}}>If you rubbed an uncharged cloth with an uncharged plastic rod, positive charges would likely to build up on the rod and the negative charges would build up on the cloth. This builds up of electric charges produces static electricity.</Text>
        <Text> </Text>

                <Image source={require('./ChargingbyInduction.png')} style={{width:360, height:250, resizeMode: 'contain'}}/>


        <Text style={{fontWeight:'bold', fontSize:16}}>Charging by Induction</Text>
        <Text> </Text>
        <Text style={{fontSize:16}}>There are two metal spheres with neutral charge are mounted on insulating stands. If a negatively charged object is placed near one side of the spheres, the electrons from these spheres will be induced to move to the other sphere, making the two spheres polarized. When the spheres are separated, the excess charges would redistribute themselves uniformly over the surface of both spheres, one sphere being positive, another being negative.</Text>
        <View style={{alignItems:'center'}}>
        <RoundCornerButton title="Click Me!" onPress={()=>Alert.alert(
              "TRIVIA!!", "Do you know that the word ‘electricity’ comes from the word ‘elektron’ which actually means ‘amber’?",[
                {
                  text: 'Cool!',
                },
              ],
            )}/>
        </View> 
        
        </View>
        </ScrollView>
    </ImageBackground>
    );
};

export default ElectricCharge;