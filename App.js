import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './components/Navigation.js';
import { MD3LightTheme, MD3DarkTheme, PaperProvider, useTheme } from 'react-native-paper';
import { useContext, useState } from 'react';
import { ModeVal } from './components/UseContexts.js';

export default function App() {
  const [modeval, setModeVal] = useState(false);
  return (
    <ModeVal.Provider value={{ modeval, setModeVal }}>
      <PaperProvider theme={modeval ? MD3LightTheme : MD3DarkTheme}>
        <Navigation />
      </PaperProvider>
    </ModeVal.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
