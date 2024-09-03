import React, { useCallback, useState } from "react";
import { View, TextInput, Alert, Text } from "react-native";
import styles from './todoListStyle'
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/commonComponents/button";
import List from "../components/todoList/list";

const TodoList = () => {
    const [taskList, setTaskList] = useState([])
    const [taskValue, setTaskValue] = useState('')

    const onPressAdd = useCallback(() => {
        setTaskList([
            ...taskList,
            { name: taskValue, id: new Date().getTime(), completed: false }
        ])
        setTaskValue("")

    }, [taskList, taskValue])

    const onPressEdit = useCallback((values) => {
        const { taskValue, item } = values
        let updatedTaskList = [...taskList]
        let findIndex = updatedTaskList.findIndex(taskItem => taskItem.id == item.id)
        updatedTaskList[findIndex] = {
            ...updatedTaskList[findIndex],
            name: taskValue
        }
        setTaskList(updatedTaskList)
    }, [taskList])

    const onPressDelete = useCallback((values) => {
        const { item } = values

        Alert.alert('Delete Task', 'Are you sure, wants to delete ?',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {
                    text: 'OK', onPress: () => {
                        const updatedTaskList = taskList.filter((taskItem) => {
                            return item.id != taskItem.id
                        })
                        setTaskList(updatedTaskList)

                    }
                },
            ]
        );
    }, [taskList])

    const onPressComplete = useCallback(({item}) => {
        let updatedTaskList = [...taskList]
        let findIndex = updatedTaskList.findIndex(taskItem => taskItem.id == item.id)

        updatedTaskList[findIndex] = {
            ...updatedTaskList[findIndex],
            completed: !updatedTaskList[findIndex].completed
        }
        setTaskList(updatedTaskList)
    }, [taskList])


    const onChangeTaskText = value => {
        setTaskValue(value)
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.addTaskView}>
                <TextInput
                    value={taskValue}
                    placeholder="Enter Task"
                    onChangeText={onChangeTaskText}
                    style={styles.input} />
                <Button disabled={!taskValue} title={"ADD"} onPress={onPressAdd} />
            </View>
            <View style={{ flexDirection: "row", marginTop: 20 }}>
                <View style={styles.todoView}>
                    <Text style={styles.name}>TODO Tasks</Text>
                    <List
                        data={taskList.filter(item => !item.completed)}
                        onComplete={onPressComplete}
                        onDelete={onPressDelete}
                        onEdit={onPressEdit}
                    />
                </View>
                <View style={styles.completedView}>
                    <Text style={styles.name}>Completed Tasks</Text>
                    <List
                        isCompletedList
                        data={taskList.filter(item => item.completed)}
                    />
                </View>
            </View>

        </SafeAreaView>
    )
}

export default TodoList