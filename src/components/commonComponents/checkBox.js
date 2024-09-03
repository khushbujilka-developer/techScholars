import React, {useState} from 'react';
import {Image, TouchableOpacity} from 'react-native';
import styles from './checkBoxStyle';

export default CheckBox = props => {
  const {setIsChecked, isChecked, disabled} = props;

  const onPressCheckBox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPressCheckBox}
      style={styles.checkBox}>
      {isChecked ? (
        <Image
          style={styles.checkImg}
          source={require('../../images/check.png')}
        />
      ) : null}
    </TouchableOpacity>
  );
};
