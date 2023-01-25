import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';

import theme from './src/shared/styles/theme';
import {Provider} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';
import store from './src/store';
import MainNavigator from './src/navigator';
import Icon from 'react-native-vector-icons/AntDesign';

const App = () => {
  return (
    <PaperProvider
      theme={theme}
      settings={{
        icon: props => <Icon {...props} />,
      }}>
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    </PaperProvider>
  );
};

export default App;
