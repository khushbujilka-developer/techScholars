import React, {useContext} from 'react';
import {TextInput, View, Text} from 'react-native';
import styles from './formInputStyle';

export default FormInput = props => {
  const {
    placeHolder,
    onChangeText,
    matched,
    label,
    value,
    namestyle,
    type,
    name,
  } = props;

  return (
    <View style={[styles.container]}>
      <Text
        style={[
          styles.nameText,
          namestyle ? {...namestyle} : {},
        ]}>{`${label}`}</Text>
      <TextInput
        onChangeText={onChangeText}
        placeholder={`${placeHolder}`}
        placeholderTextColor={'#888888'}
        value={value}
        keyboardType={type}
        secureTextEntry={name == 'password'}
        style={styles.inputStyle}
      />
      {(matched == false || matched == null) && value ? (
        <Text
          style={[
            {
              color: 'red',
              marginTop: 3,
            },
          ]}>{`Please enter valid value for ${label}`}</Text>
      ) : null}
    </View>
  );
};
