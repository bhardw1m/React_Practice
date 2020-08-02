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

const SearchScreen = () => {
    
   
    const [term, setTerm] = useState('')
   const [searchApi, results, errMessage, initialval] = useResult('')
    
    const resultsByPrice = (price) => {
       
            
        return results.filter(result => {
            return result.price === price}) 
            
    }

    return <View style = {styles.scroll} >
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
        (<Text style = {styles.textStyle}> You have searched for "{initialval}"{"\n"}
        And we have found {results.length} {sInResult(results.length)} </Text>)}
        <ScrollView>
        <ResultsList 
        resultsByPrice = {resultsByPrice('$')} 
        title = "Cost Friendly"
        />
        <Text> Total Results in this category: {resultsByPrice('$').length}</Text>

        <ResultsList 
        resultsByPrice = {resultsByPrice('$$')}
        title = "Bit Pricier"
        />
        <Text> Total Results in this category: {resultsByPrice('$$').length}</Text>

        <ResultsList 
        resultsByPrice = {resultsByPrice('$$$')} 
        title = "Big Spender"
        />
        <Text> Total Results in this category: {resultsByPrice('$$$').length}</Text>
        </ScrollView>
        </View>
       
}

const styles = StyleSheet.create({

    textStyle: {
        fontSize: 25
    },
    scroll: {
        flex: 1,
        marginBottom: 15
    }
})

export default SearchScreen;