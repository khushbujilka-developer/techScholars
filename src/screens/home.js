import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from './homeStyle'

const Home = props => {
  

    const onPressGoToDetail = value => {
        props.navigation.navigate("Detail", {
            detail: {
                name: 'iPhone 15',
                price: '₹61045.00',
                display: '15.5 cm (6.1")',
                storage: '128GB',
                description: "Super-high-resolution photos (24MP and 48MP) Next-generation portraits with Focus and Depth Contro"
            }
          })
    }

    return (
        <SafeAreaView style={styles.container}>
            <View>
            <Text style={styles.name}>Product Name: iPhone 15</Text>
            <Text style={styles.name}>Product Price: ₹61045.00</Text>
            </View>
            <TouchableOpacity onPress={onPressGoToDetail} style={styles.btn}>

                <Text style={styles.head}>View Detail</Text></TouchableOpacity>
        </SafeAreaView>
    )
}

export default Home
