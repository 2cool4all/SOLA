import React from 'react';
import { useLayoutEffect } from 'react';
import { StyleSheet, Dimensions, View, Text, ImageBackground, ScrollView,TextInput } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { appStyle, color, globalStyle } from "../../../utility";
import style from "./style";
import Pdf from 'react-native-pdf';
import { useEffect } from 'react';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import ViewShot, {captureRef} from "react-native-view-shot";
import { useRef } from "react";
import Share from 'react-native-share'
import QRCode from "react-native-qrcode-svg";
import RoundCornerButton from "../../../component/button/RoundCornerButton";


const exeScreen = () => {
    const [answer, setAnswer]=useState({
        FullName:"",
        Section: "",
        Pretest1:"",
        Pretest2:"",
        Pretest3:"",
        Pretest4:"",
        Pretest5:"",
        LookBack1:"",
        LookBack2:"",
        LookBack3:"",
        LookBack4:"",
        LookBack5:"",
        Act1_1:"",
        Act1_2:"",
        Act1_3:"",
        Act1_4:"",
        Act1_5:"",
        Act2_1:"",
        Act2_2:"",
        Act2_3:"",
        Act3_1:"",
        Act3_2:"",
        Act3_3:"",
        Act4_1:"",
        Act4_2:"",
        Act4_3:"",
        Act4_4:"",
        Act4_5:"",
        Ck1_1: "",
        Ck1_2: "",
        Ck1_3: "",
        Ck1_4: "",
        Ck2_1: "",
        Ck2_2: "",
        Ck2_3: "",
        Ck2_4: "",
        PostTest1: "",
        PostTest2: "",
        PostTest3: "",
        PostTest4: "",
        PostTest5: "",
    })
    
    
    const {
    FullName,
    Section,    
    Pretest1,
    Pretest2,
    Pretest3,
    Pretest4,
    Pretest5,
    LookBack1,
    LookBack2,
    LookBack3,
    LookBack4,
    LookBack5,
    Act1_1,
    Act1_2,
    Act1_3,
    Act1_4,
    Act1_5,
    Act2_1,
    Act2_2,
    Act2_3,
    Act3_1,
    Act3_2,
    Act3_3,
    Act4_1,
    Act4_2,
    Act4_3,
    Act4_4,
    Act4_5,
    Ck1_1,
    Ck1_2,
    Ck1_3,
    Ck1_4,
    Ck2_1,
    Ck2_2,
    Ck2_3,
    Ck2_4,
    PostTest1,
    PostTest2,
    PostTest3,
    PostTest4 ,
    PostTest5} = answer;
    
      let answer1 = "Pretest" + "\n1." + Pretest1+ "\n2." + Pretest2+ "\n3." + Pretest3+ "\n4." + Pretest4+ "\n5." + Pretest5;
      let answer2 = "\nLookBack" + "\n1." + LookBack1+ "\n2." + LookBack2+ "\n3." + LookBack3+ "\n4." + LookBack4+ "\n5." + LookBack5;
      let answer3 = "\nActivity1" + "\n1." + Act1_1+ "\n2." + Act1_2+ "\n3." + Act1_3+ "\n4." + Act1_4+ "\n5." + Act1_5;
      let answer4 = "\nActivity2" + "\n1." + Act2_1+ "\n2." + Act2_2+ "\n3." + Act2_3;
      let answer5 = "\nActivity3" + "\n1." + Act3_1+ "\n2." + Act3_2+ "\n3." + Act3_3;
      let answer6 = "\nActivity1" + "\n1." + Act4_1+ "\n2." + Act4_2+ "\n3." + Act4_3+ "\n4." + Act4_4+ "\n5." + Act4_5;
      let answer7 = "\nCheck your Understanding 1" + "\n1." + Ck1_1+ "\n2." + Ck1_2+ "\n3." + Ck1_3+ "\n4." + Ck1_4;
      let answer8 = "\nCheck your Understanding 2" + "\n1." + Ck2_1+ "\n2." + Ck2_2+ "\n3." + Ck2_3+ "\n4." + Ck2_4;
      let answer9 = "\nPost Test" + "\n1." + PostTest1+ "\n2." + PostTest2+ "\n3." + PostTest3+ "\n4." + PostTest4+ "\n5." + PostTest5;
   

      let answerInput = FullName + "\n" + Section + "\n" + answer1 + answer2+ answer3+ answer4+ answer5+ answer6+ answer7+ answer8+ answer9;

      
      const handleOnChange =(name, value)=> {
        setAnswer({
          ...answer,
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



    return(
        <ImageBackground 
        style={styles.background}
        source={require('../../../assets/Background/1.png')}>
    <ScrollView>
  
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
    <Text style={{fontWeight:'bold'}}>Note: Please refer to the PDF below</Text>
    <Text style={styles.headerr}>Assessments</Text>
    <Text style={{fontSize:20, fontWeight:'bold'}}>PRETEST</Text>
    <Text>1. </Text><TextInput 
    style={styles.input}
    placeholder='e.g. BSCS-3A'
    onChangeText={(val)=> handleOnChange("Pretest1", val)}/>
    <Text>2. </Text><TextInput 
    style={styles.input}
    placeholder='e.g. BSCS-3A'
    onChangeText={(val)=> handleOnChange("Pretest2", val)}/>
    <Text>3. </Text><TextInput 
    style={styles.input}
    placeholder='e.g. BSCS-3A'
    onChangeText={(val)=> handleOnChange("Pretest3", val)}/>
    <Text>4. </Text><TextInput 
    style={styles.input}
    placeholder='e.g. BSCS-3A'
    onChangeText={(val)=> handleOnChange("Pretest4", val)}/>
    <Text>5. </Text><TextInput 
    style={styles.input}
    placeholder='e.g. BSCS-3A'
    onChangeText={(val)=> handleOnChange("Pretest5", val)}/>
    <Text style={{fontSize:20, fontWeight:'bold'}}>Looking Back</Text>
    <Text>1. </Text><TextInput 
    style={styles.input}
    placeholder='e.g. BSCS-3A'
    onChangeText={(val)=> handleOnChange("LookBack1", val)}/>
    <Text>2. </Text><TextInput 
    style={styles.input}
    placeholder='e.g. BSCS-3A'
    onChangeText={(val)=> handleOnChange("LookBack2", val)}/>
    <Text>3. </Text><TextInput 
    style={styles.input}
    placeholder='e.g. BSCS-3A'
    onChangeText={(val)=> handleOnChange("LookBack3", val)}/>
    <Text>4. </Text><TextInput 
    style={styles.input}
    placeholder='e.g. BSCS-3A'
    onChangeText={(val)=> handleOnChange("LookBack4", val)}/>
    <Text>5. </Text><TextInput 
    style={styles.input}
    placeholder='e.g. BSCS-3A'
    onChangeText={(val)=> handleOnChange("LookBack5", val)}/>
    <Text style={{fontSize:20, fontWeight:'bold'}}>Activity 1</Text>
    <Text>1. </Text><TextInput 
    style={styles.input}
    placeholder='e.g. BSCS-3A'
    onChangeText={(val)=> handleOnChange("Act1_1", val)}/>   
    <Text>2. </Text><TextInput 
    style={styles.input}
    placeholder='e.g. BSCS-3A'
    onChangeText={(val)=> handleOnChange("Act1_2", val)}/>  
    <Text>3. </Text><TextInput 
    style={styles.input}
    placeholder='e.g. BSCS-3A'
    onChangeText={(val)=> handleOnChange("Act1_3", val)}/> 
    <Text>4. </Text><TextInput 
    style={styles.input}
    placeholder='e.g. BSCS-3A'
    onChangeText={(val)=> handleOnChange("Act1_4", val)}/> 
    <Text>5. </Text><TextInput 
    style={styles.input}
    placeholder='e.g. BSCS-3A'
    onChangeText={(val)=> handleOnChange("Act1_5", val)}/>


    

    <Text style={{fontSize:20, fontWeight:'bold'}}>Activity 1</Text>
    <Text>1. </Text><TextInput 
    style={styles.input}
    placeholder='e.g. BSCS-3A'
    onChangeText={(val)=> handleOnChange("Act2_1", val)}/>
    <Text>2. </Text><TextInput 
    style={styles.input}
    placeholder='e.g. BSCS-3A'
    onChangeText={(val)=> handleOnChange("Act2_2", val)}/>
    <Text>3. </Text><TextInput 
    style={styles.input}
    placeholder='e.g. BSCS-3A'
    onChangeText={(val)=> handleOnChange("Act2_3", val)}/>




    <Text style={{fontSize:20, fontWeight:'bold'}}>Activity 3</Text>
    <Text>1. </Text><TextInput 
    style={styles.input}
    placeholder='e.g. BSCS-3A'
    onChangeText={(val)=> handleOnChange("Act3_1", val)}/>
    <Text>1. </Text><TextInput 
    style={styles.input}
    placeholder='e.g. BSCS-3A'
    onChangeText={(val)=> handleOnChange("Act3_2", val)}/>
    <Text>1. </Text><TextInput 
    style={styles.input}
    placeholder='e.g. BSCS-3A'
    onChangeText={(val)=> handleOnChange("Act3_3", val)}/>


    <Text style={{fontSize:20, fontWeight:'bold'}}>Activity 4</Text>
    <Text>1. </Text><TextInput 
    style={styles.input}
    placeholder='e.g. BSCS-3A'
    onChangeText={(val)=> handleOnChange("Act4_1", val)}/>
    <Text>1. </Text><TextInput 
    style={styles.input}
    placeholder='e.g. BSCS-3A'
    onChangeText={(val)=> handleOnChange("Act4_2", val)}/>
    <Text>1. </Text><TextInput 
    style={styles.input}
    placeholder='e.g. BSCS-3A'
    onChangeText={(val)=> handleOnChange("Act4_3", val)}/>
    <Text>1. </Text><TextInput 
    style={styles.input}
    placeholder='e.g. BSCS-3A'
    onChangeText={(val)=> handleOnChange("Act4_4", val)}/>
    <Text>1. </Text><TextInput 
    style={styles.input}
    placeholder='e.g. BSCS-3A'
    onChangeText={(val)=> handleOnChange("Act4_5", val)}/>

<Text style={{fontSize:20, fontWeight:'bold'}}>Checking Your Understanding</Text>
    <Text style={{fontSize:20, fontWeight:'bold'}}>1.</Text>
    <Text>1. </Text><TextInput 
    style={styles.input}
    placeholder='e.g. BSCS-3A'
    onChangeText={(val)=> handleOnChange("Ck1_1", val)}/>   
    <Text>2. </Text><TextInput 
    style={styles.input}
    placeholder='e.g. BSCS-3A'
    onChangeText={(val)=> handleOnChange("Ck1_2", val)}/>  
    <Text>3. </Text><TextInput 
    style={styles.input}
    placeholder='e.g. BSCS-3A'
    onChangeText={(val)=> handleOnChange("Ck1_3", val)}/> 
    <Text>4. </Text><TextInput 
    style={styles.input}
    placeholder='e.g. BSCS-3A'
    onChangeText={(val)=> handleOnChange("Ck1_4", val)}/> 



<Text style={{fontSize:20, fontWeight:'bold'}}>Checking Your Understanding</Text>
    <Text style={{fontSize:20, fontWeight:'bold'}}>2.</Text>
    <Text>1. </Text><TextInput 
    style={styles.input}
    placeholder='e.g. BSCS-3A'
    onChangeText={(val)=> handleOnChange("Ck2_1", val)}/>   
    <Text>2. </Text><TextInput 
    style={styles.input}
    placeholder='e.g. BSCS-3A'
    onChangeText={(val)=> handleOnChange("Ck2_2", val)}/>  
    <Text>3. </Text><TextInput 
    style={styles.input}
    placeholder='e.g. BSCS-3A'
    onChangeText={(val)=> handleOnChange("Ck2_3", val)}/> 
    <Text>4. </Text><TextInput 
    style={styles.input}
    placeholder='e.g. BSCS-3A'
    onChangeText={(val)=> handleOnChange("Ck2_4", val)}/> 




<Text style={{fontSize:20, fontWeight:'bold'}}>Post Test</Text>
    <Text>1. </Text><TextInput 
    style={styles.input}
    placeholder='e.g. BSCS-3A'
    onChangeText={(val)=> handleOnChange("PostTest1", val)}/>   
    <Text>2. </Text><TextInput 
    style={styles.input}
    placeholder='e.g. BSCS-3A'
    onChangeText={(val)=> handleOnChange("PostTest2", val)}/>  
    <Text>3. </Text><TextInput 
    style={styles.input}
    placeholder='e.g. BSCS-3A'
    onChangeText={(val)=> handleOnChange("PostTest3", val)}/> 
    <Text>4. </Text><TextInput 
    style={styles.input}
    placeholder='e.g. BSCS-3A'
    onChangeText={(val)=> handleOnChange("PostTest4", val)}/> 
    <Text>5. </Text><TextInput 
    style={styles.input}
    placeholder='e.g. BSCS-3A'
    onChangeText={(val)=> handleOnChange("PostTest5", val)}/> 



  



    <View style={{alignItems: 'center'}}>
        <RoundCornerButton title="Pass your answer" onPress={()=>
            {
                alert("Inputs of the qr code:\n"+answerInput+"\n\nMake sure you screenshot the qr and pass it to your professor!!")
                captureViewShot();
                
                
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

    </ImageBackground>
    )
}
  export default exeScreen;
  
  
  
  
  
  
const styles = StyleSheet.create({
    container: {
      flex:1,
      position: 'relative',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
    },
    pdf: {
        flex: 1,
        
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    },
    headerr:{
      fontSize: 30,
      fontWeight: "bold",
      textAlign: "left",
      
  },
  background:{
    flex:1,
    flexDirection: "column",
    justifyContent: "center",
    paddingTop: 20,
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
});

  
