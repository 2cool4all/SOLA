import React from 'react';
import { useLayoutEffect } from 'react';
import { StyleSheet, Dimensions, View, Text, ImageBackground, ScrollView,TextInput } from 'react-native';
import { appStyle, color, globalStyle } from "../../../utility";
import style from "./style";
import Pdf from 'react-native-pdf';


const pdfView1 = ({navigation})=> {


    const source = {uri:'bundle-assets://path/to/Gen.-Physics-2_USLeM_Week-1 (2).pdf', cache: true};

    return(
<View style={styles.container}>
    <Pdf
                    source={source}
                    onLoadComplete={(numberOfPages,filePath)=>{
                        console.log(`number of pages: ${numberOfPages}`);
                    }}
                    onPageChanged={(page,numberOfPages)=>{
                        console.log(`current page: ${page}`);
                    }}
                    onError={(error)=>{
                        console.log(error);
                    }}
                    onPressLink={(uri)=>{
                        console.log(`Link presse: ${uri}`)
                    }}
                    style={styles.pdf}/>
 
    
    </View>
    )
}
export default pdfView1;

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
    position: 'absolute',
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