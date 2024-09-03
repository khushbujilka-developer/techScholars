import React, { useCallback } from "react";
import { View, Text, FlatList } from "react-native";
import styles from './displayApiDataStyle'
import { SafeAreaView } from "react-native-safe-area-context";
import withLoader from "../components/commonComponents/withLoader";

const apiUrl = "https://restcountries.com/v3.1/all"

const DisplayApiData = (props) => {


    const ListEmptyComponent = () => {
        return (
            <View style={styles.emptyView}>
            <Text style={styles.msg}>{`Opps! No data found.`}</Text>
        </View>
        )
    }

    const renderItem = useCallback(({item, index}) => {
        return (
            <View style={styles.item}>
                <Text style={styles.name}>{item.name.common}</Text>
            </View>
        )
    })

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}><Text style={styles.name}>Country Data</Text></View>
            <FlatList
            data={props.data}
            renderItem={renderItem}
            ListEmptyComponent={ListEmptyComponent}
            />
        </SafeAreaView>
    )
}

export default withLoader(DisplayApiData, apiUrl)