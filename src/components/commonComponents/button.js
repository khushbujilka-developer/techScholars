import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './buttonStyle';

export default Button = props => {
  const {title, onPress, disabled, style} = props;
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.container,
        {
          opacity: disabled ? 0.5 : 1,
        },
        style,
      ]}>
      <Text style={styles.titleStyle}>{title}</Text>
    </TouchableOpacity>
  );
};
