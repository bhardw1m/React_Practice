import React, { useState, useEffect } from 'react'
import {View, Text, StyleSheet, FlatList, Image} from 'react-native'
import yelp from "../api/yelp"

const ResultsShowScreen = ({navigation}) => {

    
    const id = navigation.getParam('id')

    const [result, setResult] = useState(null)
 
    const getBusineess = async (id) => {

        const response = await yelp.get(`${id}`)
        setResult(response.data)
    }

    

    useEffect (() => {
        getBusineess(id)
    }, [])

    if(!result) {
        return null;
    }
    
    return <View>
        <Text style = {styles.textStyle}>{result.name} </Text>
        <FlatList 
            data = {result.photos}
            keyExtractor = {(love) => love}
            renderItem = {({ item }) => {
                return <Image style = {styles.image} source = {{uri: item}}/>
            }}
        
        
        />
    </View>
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20
    },
    image: {
        width: 250,
        height: 120,
        marginBottom: 15
    }
})

export default ResultsShowScreen;