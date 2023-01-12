import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    minWidth: 50,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  likeInactive: {
    backgroundColor: 'rgba(66,155,66,0.3)',
    borderColor: '#c1c1c1',
    borderWidth: 1,
  },
  likeActive: {
    backgroundColor: 'rgba(66,155,66,0.8)',
    borderColor: 'rgba(66,155,66,1)',
    borderWidth: 1,
  },
  dislikeInactive: {
    backgroundColor: 'rgba(155,66,66,0.3)',
    borderColor: '#c1c1c1',
    borderWidth: 1,
  },
  dislikeActive: {
    backgroundColor: 'rgba(155,66,66,0.8)',
    borderColor: 'rgba(155,66,66,1)',
    borderWidth: 1,
  },
});
