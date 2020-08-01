import React, { useState } from 'react'
import {View, Text, StyleSheet, ToastAndroid} from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons';  

const SearchBar = ({term, onChangeTerm, onTermSubmit}) => {

    const [state,setState] = useState('true');
    
    let val =''
    const mVal = (myVal) => {
        
        val = myVal.term
        
        if(myVal === '')
        setState ('true');
      else
        setState('false');
    }

    // const saveData = () => {
    //     setState('
    // }
    
    return <View style = {styles.backgroundStyle}>
       
     
     { state === 'true' ? ( <Feather name="search" size={24} color="black" />) : null}       
        
        <TextInput style = {styles.textStyle} placeholder="search" 
        autoCorrect = {true}
         
        value = {term}
        onChangeText = {(newTerm) => {
            onChangeTerm(newTerm);
            mVal(newTerm)   
        }
        
        }
        onEndEditing = { () => {
           setState('true')
            onTermSubmit()
            ToastAndroid.show("Submitted Successfuly!", ToastAndroid.SHORT);
        }}
        /> 
       
        
    </View>
}

const styles = StyleSheet.create({

    backgroundStyle: {
        backgroundColor: "#EFE8E7",
        height: 50,
        margin: 15,
        borderRadius: 20,
        paddingLeft : 10,
        flexDirection : "row",
        alignItems : "center"
    },
    textStyle : {
        marginLeft : 10,
        fontSize : 20,
        flex : 1
    }
})

export default SearchBar;