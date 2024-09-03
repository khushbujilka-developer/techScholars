import {StyleSheet} from 'react-native';
import {width} from '../helpers/dimensions';
import colors from '../helpers/colors';

export default StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: width/5, width: width/5,
    alignSelf: "center",
    marginBottom: 30
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: colors.sky,
    height: 50,
    width: width / 2,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
