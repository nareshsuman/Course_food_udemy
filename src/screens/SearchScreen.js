import React, { useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'
const SearchScreen = (props) => {

    const [searchTerm, setSearchTerm] = React.useState("")
    const [courses, errMsg, onTermSubmit] = useResults()

    const searchResultsByCategory = (category) => {
        if (category == "others") {
            return courses.filter((item) => {
                return item['trending'] == false && item['bestSelling'] == false
            })
        }
        else {
            return courses.filter((item) => {
                return item[category] == true
            })
        }
    }

    return (
        <>
            <SearchBar searchTerm={searchTerm}
                onChangeFunc={(value) => { setSearchTerm(value) }}
                onTermSubmit={() => onTermSubmit(searchTerm)}
            >
            </SearchBar>
            {errMsg ? <Text>{errMsg}</Text> : null}
            <ScrollView>
            <ResultsList results={searchResultsByCategory("trending")} title={"Trending"} />
            <ResultsList results={searchResultsByCategory("bestSelling")} title={"Best Selling"} />
            <ResultsList results={searchResultsByCategory("others")} title={"Others"} />
            </ScrollView>
        </>
    )
}

const style = StyleSheet.create({})
export default SearchScreen;