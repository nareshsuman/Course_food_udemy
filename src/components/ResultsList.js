import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import ResultDetails from './ResultDetail'
import { withNavigation } from 'react-navigation'
const ResultSlist = ({ title, results, navigation }) => {
    if(!results.length)
    {
        return null;
    }
    // console.log("dsfds",results)
    return (
        <View style={{ marginBottom: 10 }}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(item) => (item._id)}
                renderItem={({ item }) => {
                    return (<TouchableOpacity onPress={() => { navigation.navigate('Detail',{url:item.trailerVideo}) }}>
                        <ResultDetails result={item} />
                    </TouchableOpacity>)
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        fontWeight: "bold",
        marginLeft: 10
    }
})

export default withNavigation(ResultSlist);