import {StyleSheet} from 'react-native';
import colors from '../helpers/colors';

export default StyleSheet.create({
  container: {
    // paddingVertical: 16,
    paddingHorizontal: 16,
  },
  header: {
    backgroundColor: colors.sky,
    marginBottom: 20,
    padding: 10,
  },
  item: {
    borderBottomWidth: 1,
    padding: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  emptyView: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  msg: {
    fontWeight: '600',
    fontSize: 18,
    textAlign: 'center',
  },
});
