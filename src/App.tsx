import React from 'react';
import {SafeAreaView} from 'react-native';
import {globalStyles} from './config/theme/app-theme';
import HomeScreen from './presentations/screens/home/HomeScreen';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{...globalStyles.background}}>
      <HomeScreen />
    </SafeAreaView>
  );
}

export default App;
