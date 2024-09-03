import React, { useCallback, useEffect, useMemo, useState } from "react";
import { View, TextInput, Alert, Text } from "react-native";
import styles from './todoListStyle'
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/commonComponents/button";
import List from "../components/todoList/list";
import AsyncStorage from '@react-native-async-storage/async-storage';


const TodoList = () => {
    const [taskList, setTaskList] = useState([])
    const [taskValue, setTaskValue] = useState('')

    const TodoTasks = useMemo(() => {
        return taskList.filter(item => !item.completed)
    }, [taskList])

    const CompletedTasks = useMemo(() => {
        return taskList.filter(item => item.completed)
    }, [taskList])

    useEffect(() => {
        AsyncStorage.getItem("taskList").then(res => {
            if (res) {
                setTaskList(JSON.parse(res))
            }
        }).catch(e => { })
    }, [])

    useEffect(() => {
        AsyncStorage.setItem("taskList", JSON.stringify(taskList))
    }, [taskList])

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

    const onPressComplete = useCallback(({ item }) => {
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

    const TodoTaskList = props => {
        if (!TodoTasks) {
            return null
        }
        return (
            <View style={styles.todoView}>
                <Text style={styles.name}>TODO Tasks</Text>
                <List
                    data={TodoTasks}
                    onComplete={onPressComplete}
                    onDelete={onPressDelete}
                    onEdit={onPressEdit}
                />
            </View>
        )
    }

    const CompletedTaskList = props => {
        if (!CompletedTasks) {
            return null
        }
        return (
            <View style={styles.completedView}>
                <Text style={styles.name}>Completed Tasks</Text>
                <List
                    isCompletedList
                    data={CompletedTasks}
                />
            </View>
        )
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
            <View style={{ flex: 1, flexDirection: "row", marginTop: 20 }}>
                <TodoTaskList />
                <CompletedTaskList />
            </View>

        </SafeAreaView>
    )
}

export default TodoList