import React, { useCallback, useMemo } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import styles from './tasksStyle'
import { Screen } from "react-native-screens";

const taskList = [
    {
        name: "Create a To-Do List App",
        screen: "Todo",
        id: "1",
    },
    {
        name: "Fetch and Display Data from an API",
        id: "2",
        screen: "DisplayApiData"
    },
    {
        name: "Create a Custom Modal Component",
        id: "3",
        screen: "CustomModal"
    },
    {
        name: "Implement a Simple Navigation Flow",
        id: "4",
        screen: "Home"
    },
    {
        name: "Implement a Form with Validation",
        id: "5",
        screen: "Form"
    },
]

const Tasks = props => {
    const {navigation} = props    


    const onPressItem = useCallback((item) => {
        navigation.navigate(item.screen)
    }, [])

    const TaskItem = React.memo(props => {
        const {item}= props

        return (
            <TouchableOpacity onPress={() => onPressItem(item)} style={styles.item}>
                <Text style={styles.name}>{`${item.id}. ${item.name}`}</Text>
            </TouchableOpacity>
        )
    })

    return (
        <SafeAreaView style={styles.container}>
            {
                taskList.map((item, index) => {
                    return <TaskItem item={item} key={String(index)}/>
                })
            }
          
        </SafeAreaView>
    )
}

export default Tasks