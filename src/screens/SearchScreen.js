import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import SearchBar from "../components/SearchBar"
import ResultsList from "../components/ResultsList"
import useResult from "../Hooks/useResult"

let sRes = ''
const getRes = (val) => {
    sRes = val.term
    
}

const sInResult = (num) => {
    //console.log('sInResult called')
    return num > 1 || num < 1 ? 'results' : 'result'

}

const SearchScreen = ({navigation}) => {
    
   
    const [term, setTerm] = useState('')
    const [searchApi, results,  errMessage] = useResult();

    const resultsByPrice = (price) => {
            console.log(price)
            
        return results.filter(result => {
            return result.price === price}) 
            
    }

    return <View style= {styles.scroll}>
        <SearchBar 
        term = {term} 
        onChangeTerm = {(newTerm) => {setTerm(newTerm)}}
        onTermSubmit = {() => {searchApi({term})
           getRes({term})
            setTerm('')
             
            } }    
        />
        
       
        
         {errMessage ? <Text>{errMessage}</Text> : null}
       
{sRes ? (<Text style = {styles.textStyle}> You have searched for  "{sRes}"{"\n"}
        And we have found {results.length} {sInResult(results.length)} </Text>): 
        (<Text style = {styles.textStyle}> You have searched for "Pasta"{"\n"}
        And we have found {results.length} {sInResult(results.length)} </Text>)}
        <ScrollView>
        <ResultsList resultsByPrice = {resultsByPrice('$')} title = "Cost Friendly"/>
        <ResultsList resultsByPrice = {resultsByPrice('$$')} title = "Bit Pricier"/>
        <ResultsList resultsByPrice = {resultsByPrice('$$$')} title = "Big Spender"/>
        </ScrollView>
        </View>
       
}

const styles = StyleSheet.create({

    textStyle: {
        fontSize: 25
    },
    scroll: {
        flex: 1
    }
})

export default SearchScreen;