import React from 'react'
import {View, Image, StyleSheet, Text} from 'react-native'

const ResultDetail =({result}) => {
    return <View style = {styles.container}>
        <Image style = {styles.image} source = { {uri: result.image_url } } />
    <Text style = {styles.name}> {result.name}</Text>
<Text style = {styles.rating}> {result.rating} stars, Reviews: {result.review_count}</Text>
    </View>
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20
    },
    image: {
        width: 250,
        height: 140,
        borderRadius: 2
    },
    name: {
        fontSize: 15
    },
    rating: {
        fontSize: 12
    },
    container: {
        marginLeft: 10,
        marginBottom: 15
    }
});

export default ResultDetail;