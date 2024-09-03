import React, {useMemo, useState} from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import FormInput from '../components/commonComponents/formInput';
import Button from '../components/commonComponents/button';
import styles from './formStyle';

const Form = props => {
  const [inputs, setInputs] = useState([
    {
      name: 'fullName',
      placeHolder: 'Full Name',
      label: 'Full Name',
      value: '',
      type: 'default',
      regex: /^[a-zA-Z]+ [a-zA-Z]+$/,
      maxLength: 30,
      matched: true,
    },
    {
      name: 'email',
      placeHolder: 'Email',
      label: 'Email',
      value: '',
      type: 'email-address',
      regex: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
      matched: true,
    },
    {
      name: 'password',
      placeHolder: 'Password',
      label: 'Password',
      value: '',
      type: 'default',
      regex: /^.{8,}$/,
      maxLength: 8,
    },
  ]);

  const isSubmitButtonDisable = useMemo(() => {
    let isEnable = inputs.every(item => item.value && item.matched);
    return !isEnable;
  }, [inputs]);

  const onChangeText = (item, index, value) => {
    let matched = value?.match(inputs[index].regex);
    if (matched) {
      if (value.length < 5) {
        matched = false;
      }
    }
    let data = [...inputs];
    data[index] = {
      ...data[index],
      value,
      matched: matched,
    };
    setInputs(data);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 80, flex: 1}}>
          {inputs.map((item, index) => {
            return (
              <FormInput
                {...item}
                onChangeText={value => onChangeText(item, index, value)}
                key={String(index)}
              />
            );
          })}
        </KeyboardAwareScrollView>
        <Button
          disabled={isSubmitButtonDisable}
          title={'Submit'}
          style={styles.button}
        />
      </View>
    </SafeAreaView>
  );
};

export default Form;
