import React from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native'
import ResultsDetail from "../components/ResultsDetail"

const ResultsList = ({title, resultsByPrice}) => {
    
    return <View>
        <Text style = {styles.title}> {title}</Text>
        <FlatList 
            showsHorizontalScrollIndicator = {false}
            horizontal
            data = {resultsByPrice}
            keyExtractor = {resultsByPrice.id}
            renderItem = {({ item }) => 
                {
                    return <ResultsDetail result = {item} />
                    }
        }
        
        
        />

    </View>

}

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 5,
        marginBottom: 5
        
    },
    pricetag: {
        fontSize: 20,
        
    }
});

export default ResultsList;