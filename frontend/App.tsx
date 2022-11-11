import React, {type PropsWithChildren} from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import MainScreen from './src/features/main';

const App = () => {
  const backgroundStyle = {
    backgroundColor: Colors.darker
  };

  return (
<SafeAreaView style={styles.container}>
    <MainScreen/>
</SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
  }
});
export default App;