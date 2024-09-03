import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './detailStyle';
import {useRoute} from '@react-navigation/native';
import Button from '../components/commonComponents/button';

const Detail = props => {
  const route = useRoute();
  const params = route.params;

  useEffect(() => {
    if (params?.detail?.name) {
      props.navigation.setOptions({
        title: params?.detail?.name,
      });
    }
  }, []);

  const onPressBack = () => {
    props.navigation.goBack()
  }

  const ProductDetail = props => {
    if (!params?.detail) {
      return null;
    }
    const {name, price, display, storage, description} = params.detail;
    return (
      <View style={styles.header}>
        <Text style={styles.name}>{`name: ${name}`}</Text>
        <Text style={styles.name}>{`price: ${price}`}</Text>
        <Text style={styles.name}>{`display: ${display}`}</Text>
        <Text style={styles.name}>{`storage: ${storage}`}</Text>
        <Text style={styles.name}>{`description: \n ${description}`}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ProductDetail />
      <Button onPress={onPressBack} title={"Back"} style={{ marginBottom: 20}}/>
    </SafeAreaView>
  );
};

export default Detail;
