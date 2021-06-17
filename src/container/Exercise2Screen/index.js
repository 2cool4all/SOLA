import { Image, View, Text, StyleSheet, ImageBackground, ScrollView, TouchableOpacity, TextInput, ToastAndroid } from "react-native"
import React from 'react';
import { useState, useLayoutEffect } from "react";
import { color } from "../../utility";
import QRCode from "react-native-qrcode-svg";
import RoundCornerButton from "../../component/button/RoundCornerButton";
import { useEffect } from "react";


const Exercise2Screen = ({navigation}) =>{
   
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
        Answer_number3: "",
        Answer_number4: "",
        Answer_number5: "",
        Answer_number6: "",
        Answer_number7: "",
        Answer_number8: "",
        Answer_number9: "",
        Answer_number10: "",

    })

    const {FullName, Section, Answer_number1, Answer_number2, Answer_number3, Answer_number4, Answer_number5, Answer_number6, Answer_number7, Answer_number8, Answer_number9, Answer_number10} = fullAnswer;
    
    let answerInput = FullName +"\n" + Section +"\n\n"+ "1."+ Answer_number1 +"\n\n"+"2."+Answer_number2
                        +"\n\n"+ "3."+ Answer_number3 +"\n\n"+"4."+Answer_number4+"\n\n"+ "5."+ Answer_number5 +"\n\n"+"6."+Answer_number6
                        +"\n\n"+ "7."+ Answer_number7 +"\n\n"+"8."+Answer_number8+"\n\n"+ "9."+ Answer_number9 +"\n\n"+"10."+Answer_number10;
    
    var answer1= "C"
    var answer2= "C"
    var answer3= 'B'
    var answer4= 'A'
    var answer5= 'D'
    var answer6= 'D'
    var answer7= 'B'
    var answer8= 'D'
    var answer9= 'B'
    var answer10= 'A'

    var counter = 0;
    
    let correct = answerInput;
                        
    const handleOnChange =(name, value)=> {
        setFullAnswer({
          ...fullAnswer,
            [name]: value,
        });
      };
    
    return (
        <ImageBackground 
            style={styles.background}
            source={require('../../assets/Background/1.png')}>
        <View>
        <ScrollView>

        
        
        <Text style={styles.headerr}>FORMATIVE ASSESMENT</Text>

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





        <Text style={styles.subHead}>Questions:</Text>
        <Text style={styles.body}>1. Which among the statements is INCORRECT?</Text>
	    <Text style={styles.body}>	A. Gauss’ law applies to a closed surface of any shape</Text>
	    <Text style={styles.body}>	B. Coulomb’s law can be derived from Gauss’ law and symmetry</Text>
	    <Text style={styles.body}>	C. If a closed surface encloses no charge, then the electric field must vanish everywhere on the surface</Text>
	    <Text style={styles.body}>	D.	Gauss’ law states that the net number of lines crossing any closed surface in an outward direction is proportional to the net charge enclosed within the surface</Text>
        <TextInput 
        multiline
        style={styles.input}
        placeholder='e.g. I love Science'
        onChangeText={(val)=> handleOnChange("Answer_number1", val)}/>
	    <Text> </Text>
	    <Text style={styles.body}>2.	There are several modern uses of magnets.  Magnets allow high speed trains to ______________________ above the track.  They go faster because without touching the tracks there is no friction to slow them down.</Text>
	    <Text style={styles.body}>	A. Collide</Text>
	    <Text style={styles.body}>	B. attract</Text>
	    <Text style={styles.body}>	C. Repel</Text>
	    <Text style={styles.body}>	D. None of the above</Text>
        <TextInput 
        multiline
        style={styles.input}
        placeholder='e.g. I love Science'
        onChangeText={(val)=> handleOnChange("Answer_number2", val)}/>
        <Text> </Text>
	    <Text style={styles.body}>3.	Two long, straight wires are fixed parallel to one another a distance 𝑑 apart. The wires carry equal constant currents 𝐼 in the same direction. The attractive magnetic force per unit length between them is 𝑓 = 𝐹/𝐿. What is the force per unit length between the wires if their separation is 2𝑑 and each carries current 2𝐼?</Text>
	    <Text style={styles.body}>	A.	f/4</Text>
	    <Text style={styles.body}>	B.	2f</Text>
	    <Text style={styles.body}>	C.	3f/2</Text>
	    <Text style={styles.body}>	D.	f/2</Text>
        <TextInput 
        multiline
        style={styles.input}
        placeholder='e.g. I love Science'
        onChangeText={(val)=> handleOnChange("Answer_number3", val)}/>
        <Text> </Text>
	    <Text style={styles.body}>4.	Suppose you are lost and you use your compass to find your way. Your compass points North, what does it mean?</Text>
	    <Text style={styles.body}>	A. Collide</Text>
	    <Text style={styles.body}>	B. attract</Text>
	    <Text style={styles.body}>	C. Repel</Text>
	    <Text style={styles.body}>	D. None of the above</Text>
        <TextInput 
        multiline
        style={styles.input}
        placeholder='e.g. I love Science'
        onChangeText={(val)=> handleOnChange("Answer_number4", val)}/>
        <Text> </Text>
	    <Text style={styles.body}>5.	What is the direction of conventional current in each case shown below?</Text>
        <Image source={require('./Oof.jpg')} style={{width:360, height:250, resizeMode: 'contain'}}/>
	    <Text style={styles.body}>	A.	Conventional current moves to the left for both (a) and (b)</Text>
	    <Text style={styles.body}>	B.	Conventional current moves to the right for both (a) and (b)</Text>
	    <Text style={styles.body}>	C.	Conventional current moves to the left in (a) and to the right in (b)</Text>
	    <Text style={styles.body}>	D.	Conventional current moves to the right in (a) and to the left in (b)</Text>
        <TextInput 
        multiline
        style={styles.input}
        placeholder='e.g. I love Science'
        onChangeText={(val)=> handleOnChange("Answer_number5", val)}/>
        <Text> </Text>
	    <Text style={styles.body}>6.	Which of the following is NOT a similarity between magnets and electrical charges?</Text>
	    <Text style={styles.body}>	A. Collide</Text>
	    <Text style={styles.body}>	B. attract</Text>
	    <Text style={styles.body}>	C. Repel</Text>
	    <Text style={styles.body}>	D. None of the above</Text>
        <TextInput 
        multiline
        style={styles.input}
        placeholder='e.g. I love Science'
        onChangeText={(val)=> handleOnChange("Answer_number6", val)}/>
        <Text> </Text>
	    <Text style={styles.body}>7.	Electrical as well as gravitational effects can be thought to be caused by fields. Which of the following is true of an electrical or gravitational field?</Text>
	    <Text style={styles.body}>	A.	The field concept is often used to describe contact forces.</Text>
	    <Text style={styles.body}>	B.	Fields are useful for understanding forces acting through a distance.</Text>
	    <Text style={styles.body}>	C.	There is no way to verify the existence of a force field since it is just a concept.</Text>
	    <Text style={styles.body}>	D.	A gravitational or electrical field does not always exist in the space around an object.</Text>
        <TextInput 
        multiline
        style={styles.input}
        placeholder='e.g. I love Science'
        onChangeText={(val)=> handleOnChange("Answer_number7", val)}/><Text> </Text>
	    <Text style={styles.body}>8.	Which of the following causes the lights of Aurora Borealis?</Text>
	    <Text style={styles.body}>	A.	Rainbows that occur at the night skies</Text>
	    <Text style={styles.body}>	B.	Static electricity in the troposphere</Text>
	    <Text style={styles.body}>	C.	Lightning storms taking place over the horizon</Text>
	    <Text style={styles.body}>	D.	Particles from the Sun hitting Earth’s magnetosphere.</Text>
        <TextInput 
        multiline
        style={styles.input}
        placeholder='e.g. I love Science'
        onChangeText={(val)=> handleOnChange("Answer_number8", val)}/>
        <Text> </Text>
	    <Text style={styles.body}>9.	Coloumb’s Law : magnitude of the electrical force between electrostatic charges as ______________ : magnitude of force between celestial objects.</Text>
	    <Text style={styles.body}>  A.	Newton’s Law of Interaction</Text>
	    <Text style={styles.body}>	B. Newton’s Law of Universal Gravitation</Text>
	    <Text style={styles.body}>	C. Kepler’s Law of Planetary Motion</Text>
	    <Text style={styles.body}>	D. Gauss’ Law of Electric Charge with Electric Field</Text>
        <TextInput 
        multiline
        style={styles.input}
        placeholder='e.g. I love Science'
        onChangeText={(val)=> handleOnChange("Answer_number9", val)}/>
        <Text> </Text>
	    <Text style={styles.body}>10.	An electronic device that stores charges to bring change in the electrical potential energy of an electrostatic system.</Text>
	    <Text style={styles.body}>	A. Capacitor</Text>
	    <Text style={styles.body}>	B. Resistor</Text>
	    <Text style={styles.body}>	C. Transistor</Text>
	    <Text style={styles.body}>	D. Amplifier</Text>
        <TextInput 
        multiline
        style={styles.input}
        placeholder='e.g. I love Science'
        onChangeText={(val)=> handleOnChange("Answer_number10", val)}/>
        
        
        
        

        <View style={{alignItems: 'center'}}>
        <RoundCornerButton title="Pass your answer" onPress={()=>
            {
                alert("Inputs of the qr code:\n"+answerInput+"\n\nMake sure you screenshot the qr and pass it to your professor!!")
                navigation.replace('ModuleListScreen')
                
                /*if(answer1===Answer_number1){
                    return counter=counter+1   
                }
                console.log(counter)
               */
                
            }
            
            }/>
        <QRCode
            value={correct}  
            size={250} 
     
        />
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

export default Exercise2Screen;