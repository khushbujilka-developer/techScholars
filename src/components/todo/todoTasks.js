import React, { useCallback, useMemo } from "react";
import { View, Alert, Text } from "react-native";
import styles from './todoTasksStyle'
import List from "./list";


const TodoTasks = (props) => {
    const {
        taskList,
        setTaskList
    } = props

    const TodoTasks = useMemo(() => {
        return taskList.filter(item => !item.completed)
    }, [taskList])

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
    

    if (!TodoTasks.length) {
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

export default TodoTasks