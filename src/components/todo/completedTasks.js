import React, {useMemo} from 'react';
import {View, Text} from 'react-native';
import styles from './completedTasksStyle';
import List from './list';

const CompletedTaskList = props => {
  const {taskList, setTaskList} = props;

  const CompletedTasks = useMemo(() => {
    return taskList.filter(item => item.completed);
  }, [taskList]);

  const deleteCompltedTask = value => {
    console.log("deleteCompltedTask", value)
    const {item} = value
    const updatedTaskList = taskList.filter(taskItem => {
      return item.id != taskItem.id;
    });
    console.log("updatedTaskList", updatedTaskList)
    setTaskList(updatedTaskList);
  }

  if (!CompletedTasks.length) {
    return null;
  }
  return (
    <View style={styles.completedView}>
      <Text style={styles.name}>Completed Tasks</Text>
      <List deleteCompltedTask={deleteCompltedTask} isCompletedList data={CompletedTasks} />
    </View>
  );
};

export default CompletedTaskList;
