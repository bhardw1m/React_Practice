import React from 'react'
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import ResultsDetail from "../components/ResultsDetail"
import {withNavigation} from 'react-navigation'

const ResultsList = ({title, resultsByPrice, navigation}) => {
    
    return <View>
        <Text style = {styles.title}> {title}</Text>
       
        <FlatList 
            showsHorizontalScrollIndicator = {false}
            horizontal
            data = {resultsByPrice}
            keyExtractor = {resultsByPrice.id}
            renderItem = {({ item }) => 
                {
                    return ( <TouchableOpacity onPress = {() => {navigation.navigate('ResultsShow', { id: item.id})}}>
                    <ResultsDetail result = {item} />
                    </TouchableOpacity> )
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

export default withNavigation(ResultsList);