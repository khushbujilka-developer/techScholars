import React, {useMemo} from 'react';
import {View, Text} from 'react-native';
import styles from './completedTasksStyle';
import List from './list';

const CompletedTaskList = props => {
  const {taskList} = props;

  const CompletedTasks = useMemo(() => {
    return taskList.filter(item => item.completed);
  }, [taskList]);

  if (!CompletedTasks.length) {
    return null;
  }
  return (
    <View style={styles.completedView}>
      <Text style={styles.name}>Completed Tasks</Text>
      <List isCompletedList data={CompletedTasks} />
    </View>
  );
};

export default CompletedTaskList;
