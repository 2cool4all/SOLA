import { View, Text, StyleSheet, ImageBackground, ScrollView, TouchableOpacity, TextInput, ToastAndroid, Image } from "react-native"
import React from 'react';
import { useState, useLayoutEffect } from "react";
import { color } from "../../utility";
import QRCode from "react-native-qrcode-svg";
import RoundCornerButton from "../../component/button/RoundCornerButton";
import ViewShot, {captureRef} from "react-native-view-shot";
import { useRef } from "react";
import Share from 'react-native-share'



const Exercise1Screen = ({navigation}) =>{
   
    useLayoutEffect(()=>{
        navigation.setOptions({
          headerLeft:()=>(
              <Text size={26} 
              style={{left:10, color:color.BLUE_GREEN}}
              onPress={()=>navigation.replace('ElectricCharge')}
              >Back</Text>
          )
        })
    
        
    }, [navigation]);
    
    const [fullAnswer, setFullAnswer] = useState({
        FullName: "",
        Section: "",
        Answer_number1: "",
        Answer_number2: "",
    })

    const [state, setState]=useState(null);

    const {FullName, Section, Answer_number1, Answer_number2} = fullAnswer;
    
    let answerInput = FullName +"\n" + Section +"\n\n"+ "1."+ Answer_number1 +"\n\n"+"2."+Answer_number2;
    
    const handleOnChange =(name, value)=> {
        setFullAnswer({
          ...fullAnswer,
            [name]: value,
        });
      };
    const viewShotRef = useRef();



    async function captureViewShot(){
        const imageURI= await viewShotRef.current.capture();
        console.log(imageURI)
        await Share.open({url:imageURI})
       /*RNFetchBlob.config({
            fileCache:true,
            appendExt: 'png',
        }).fetch('GET', imageURI)
        .then(res=>{
            CameraRoll.saveToCameraRoll(res.data, 'photo')
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
        }).catch(error=>console.log(error))
    */
    }


   /* const captureViewShot = async()=>{
        try{
            const uri = await captureRef(viewShotRef,{
                format: 'png',
                quality: 0.7
            });
            await Share.open({url: uri})
        }catch(err){
            console.log(err);
        }
    }
*/

    return (
        <ImageBackground 
            style={styles.background}
            source={require('../../assets/Background/1.png')}>
        <View>
        <ScrollView>
        <Text style={styles.headerr}>FORMATIVE ASSESMENT</Text>
        <Text style={styles.subHead}>Questions:</Text>
        <Text style={styles.body}>1.	What is the difference between charging by rubbing and charging by induction?</Text>
        <Text style={styles.body}>2.	What is static electricity? </Text>
        <Text> </Text>
        <Text> </Text>
        <Text style={styles.body}>Enter Full Name:</Text>
        <TextInput 
        style={styles.input}
        placeholder='e.g. Mark Christian L. Balagot'
        onChangeText={(val)=> handleOnChange("FullName", val)}/>
        
              
        <Text style={styles.body}>Enter section:</Text>
        <TextInput 
        style={styles.input}
        placeholder='e.g. BSCS-3A'
        onChangeText={(val)=> handleOnChange("Section", val)}/>
        

        <Text style={styles.body}>Answer to the Questions:</Text>
        <Text style={styles.body}>1.</Text>
        <TextInput 
        multiline
        style={styles.input}
        placeholder='e.g. I love Science'
        onChangeText={(val)=> handleOnChange("Answer_number1", val)}/>
        <Text style={styles.body}>2.</Text>
        <TextInput 
        multiline
        style={styles.input}
        placeholder='e.g. I love Science'
        onChangeText={(val)=> handleOnChange("Answer_number2", val)}/>
        <View style={{alignItems: 'center'}}>
        <RoundCornerButton title="Pass your answer" onPress={()=>
            {
                captureViewShot();
                //alert("Inputs of the qr code:\n"+answerInput+"\n\nMake sure you screenshot the qr and pass it to your professor!!")
                //navigation.replace('ModuleListScreen')
            }
            
            }/>

       
        <View style={{backgroundColor:color.BLACK}}>

        <ViewShot ref={viewShotRef}>
        <QRCode
            value={answerInput}  
            size={250}
        />
        </ViewShot>
        </View>
       
    
        <Text style={{fontWeight:'bold'}}>Take a Screenshot! And Crop Before saving it to your teacher!</Text>
        </View>
        </ScrollView>
        </View>
        </ImageBackground>
        

);
}


const styles = StyleSheet.create({
    background:{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: 40,
        paddingHorizontal: 20,
    
},
    input:{
        borderWidth: 2,
        borderColor: '#777',
        padding: 10,
        margin: 15,
        width: 200,
        fontSize: 16,
        fontWeight: 'bold',
    },

    answerInput:{
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        margin: 10,
        width: 300,
        height: 300,
    },
    fontEdit:{
        fontSize: 23,
        fontWeight: "bold",
        marginTop: 24,
        padding: 30,
        backgroundColor: "#85cfc3",
        borderRadius: 50,
        textAlign: 'center',
    },
    headerr:{
        fontSize: 35,
        fontWeight: "bold",
        textAlign: "center",
        
    },
    subHead:{
        fontSize:25,
        fontWeight: "bold",
        paddingTop: 30,

    },
    body:{
        fontSize: 20,
        paddingTop: 20
    },  
})

export default Exercise1Screen;