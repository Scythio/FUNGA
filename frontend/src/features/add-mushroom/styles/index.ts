import {
  StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  button: {
    marginBottom: 50,
  },
  subHeader: {
    textAlign: 'center',
    padding: 5,
    color: 'gray70',
    fontWeight: '300',
    fontSize: 24,
  }
});
