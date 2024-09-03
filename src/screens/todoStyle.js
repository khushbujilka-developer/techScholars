import {StyleSheet} from 'react-native';
import {width} from '../helpers/dimensions';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },

  completedView: {flex: 1, marginLeft: 10},
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  addTaskView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    flex: 1,
    borderRadius: 10,
    height: 50,
    borderWidth: 1,
    marginRight: 12,
    padding: 10,
  },
});
