import React, {useCallback, useState} from 'react';
import {
  FlatList,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import CheckBox from '../commonComponents/checkBox';
import styles from './listStyle';
import Button from '../commonComponents/button';
import {width} from '../../helpers/dimensions';

export default List = props => {
  const {data, onComplete, isCompletedList, onDelete, onEdit, deleteCompltedTask} = props;
  const [taskIndexToEdit, setTaskIndexToEdit] = useState(null);
  const [taskValue, setTaskValue] = useState('');

  const onPressEdit = ({index, name, taskValue}) => {
    if (taskIndexToEdit != null) {
      setTaskIndexToEdit(null);
      onEdit({index, taskValue, item: data[index]});
      return;
    }
    setTaskValue(name);
    setTaskIndexToEdit(index);
  };

  const setIsChecked = values => {
    if(isCompletedList) {
      deleteCompltedTask(values)
      return
    }
    onComplete(values)
  }

  const renderItem = useCallback(
    ({item, index}) => {
      return (
        <View key={String(new Date().getTime())} style={styles.item}>
          <View style={[styles.row, {paddingVertical: 15}]}>
            <CheckBox
            isCompletedList={isCompletedList}
              // disabled={isCompletedList}
              setIsChecked={() => setIsChecked({index, item})}
              isChecked={item.completed}
            />
            <View style={{marginLeft: 10}}>
              <Text style={styles.name}>{item.name}</Text>
            </View>
          </View>
          {item.completed ? null : (
            <View style={[styles.row, styles.btnView]}>
              <Button
                onPress={() => onPressEdit({index, name: item.name})}
                title={'Edit'}
                style={[styles.deleteBtn, {marginLeft: 0}]}
              />
              <Button
                onPress={() => onDelete({item, index})}
                title={'Delete'}
                style={styles.deleteBtn}
              />
            </View>
          )}
        </View>
      );
    },
    [data],
  );

  return (
    <View style={{flex: 1}}>
      <FlatList data={data} renderItem={renderItem} style={styles.container} />
      <Modal visible={taskIndexToEdit != null} transparent>
        <View style={styles.modalContent}>
          <View style={styles.modal}>
            <View style={styles.head}>
              <Text style={[styles.name]}>{`Edit Task "${taskValue}"`}</Text>
            </View>
            <View style={styles.center}>
              <TextInput
                value={taskValue}
                style={styles.inputView}
                onChangeText={setTaskValue}
              />
              <Button
                disabled={!taskValue}
                onPress={() =>
                  onPressEdit({
                    index: taskIndexToEdit,
                    item: data[taskIndexToEdit],
                    taskValue,
                  })
                }
                title={'Edit'}
                style={[styles.deleteBtn, {marginLeft: 0, width: width / 2}]}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
