import React, { useEffect, useState } from "react";
import { ActivityIndicator, Alert, Text, View } from "react-native";
import axios from "axios";
import styles from './withLoaderStyle'
import colors from "../../helpers/colors";

export default function withLoader(Component, url) {
    return (props) => {
        const [data, setData] = useState([])
        const [isLoading, setIsLoading] = useState(true)
        const [isError, setIsError] = useState(false)

        useEffect(() => {
            axios.get(url)
                .then(res => {
                    if (res.status == 200) {
                        setData(res.data)
                    } else {
                        setIsError(true)
                        Alert.alert("Unknown error")
                    }
                }).catch(error => {
                    setIsError(true)
                    Alert.alert(error.message || "Unknown error")
                }).finally(() => {
                    setIsLoading(false)
                })
        }, []);

        if (isLoading) {
            return (
                <View style={styles.loaderView}>
                    <ActivityIndicator size={"large"} color={colors.blue}/>
                    <Text style={styles.loadingMsg}>{`LOADING...`}</Text>

                </View>
            );
        }

        if(isError) {
            return (
                <View style={styles.errorView}>
                    <Text style={styles.errorMsg}>{`Opps! Something went wrong \n please try again later.`}</Text>
                </View>
            );
        }

        return <Component {...props} data={data} />;
    };
}