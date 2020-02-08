import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const ResultSlist = ({ result }) => {
    // console.log("dsfds",results)
    return (
        <View style={styles.View}>
            <Image style={styles.image} source={{ uri: result.courseImage }}></Image>
            <Text style={styles.courseName}>{result.courseName}</Text>
            <Text style={styles.title}>Instructor:{result.instructor}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    courseName:{
        fontSize:6
    },
    title: {
        fontSize: 14,
        fontWeight: "bold"
    },
    image: {
        width: 200,
        height: 140,
        borderRadius: 4,
    },
    View: {
        marginLeft: 10
    }
})

export default ResultSlist;