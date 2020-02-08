import React from 'react'
import { View, Text, StyleSheet, Button, TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons'
const SearchBar = ({ searchTerm, onChangeFunc,onTermSubmit }) => {
    return (
        <View>

            <View style={styles.viewInput}>
                <Feather name="search" style={styles.IconStyle} />
                <TextInput
                    placeholder="Search"
                    style={styles.searchInput}
                    value={searchTerm}
                    onChangeText={(newValue) => { onChangeFunc(newValue) }}
                    autoCapitalize="none"
                    autoCorrect={false}
                    onEndEditing={onTermSubmit}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    viewInput: {
        margin:10,
        flexDirection: "row",
        backgroundColor: "gray",
        borderRadius: 5,
        borderWidth: 1,
        alignSelf: "center",
        height: 50,
        justifyContent: "space-around"
    },
    searchInput: {
        fontSize: 18,
        flex: 1
    },
    IconStyle: {
        fontSize: 35,
        alignSelf: "center",
        marginHorizontal: 10
    }
})
export default SearchBar;