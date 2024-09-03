import {StyleSheet} from 'react-native';
import colors from '../../helpers/colors';

export default StyleSheet.create({
  container: {
    marginBottom: 14,
  },
  nameText: {
    textTransform: 'capitalize',
    marginBottom: 8,
  },
  inputStyle: {
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 80,
    height: 50,
  },
});
