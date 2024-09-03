import React, {useCallback, useEffect, useState} from 'react';
import {View, TextInput} from 'react-native';
import styles from './todoStyle';
import {SafeAreaView} from 'react-native-safe-area-context';
import Button from '../components/commonComponents/button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TodoTasksList from '../components/todo/todoTasks';
import CompletedTaskList from '../components/todo/completedTasks';

const TodoList = () => {
  const [taskList, setTaskList] = useState([]);
  const [taskValue, setTaskValue] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('taskList')
      .then(res => {
        if (res) {
          setTaskList(JSON.parse(res));
        }
      })
      .catch(e => {});
  }, []);

  useEffect(() => {
    
    AsyncStorage.setItem('taskList', JSON.stringify(taskList));
  }, [taskList]);

  const onPressAdd = useCallback(() => {
    setTaskList([
      ...taskList,
      {name: taskValue, id: new Date().getTime(), completed: false},
    ]);
    setTaskValue('');
  }, [taskList, taskValue]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.addTaskView}>
        <TextInput
          value={taskValue}
          placeholder="Enter Task"
          onChangeText={setTaskValue}
          style={styles.input}
        />
        <Button disabled={!taskValue} title={'ADD'} onPress={onPressAdd} />
      </View>
      <View style={{flex: 1, flexDirection: 'row', marginTop: 20}}>
        <TodoTasksList taskList={taskList} setTaskList={setTaskList} />
        <CompletedTaskList taskList={taskList} />
      </View>
    </SafeAreaView>
  );
};

export default TodoList;
