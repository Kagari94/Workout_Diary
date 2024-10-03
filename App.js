import Navigation from './components/Navigation.js';
import { MD3LightTheme, MD3DarkTheme, PaperProvider, useTheme } from 'react-native-paper';
import { useState } from 'react';
import { ModeVal } from './components/UseContexts.js';

export default function App() {
  const [modeval, setModeVal] = useState(false);
  return (
    <ModeVal.Provider value={{ modeval, setModeVal }}>
      <PaperProvider theme={modeval ?  MD3DarkTheme : MD3LightTheme}>
        <Navigation />
      </PaperProvider>
    </ModeVal.Provider>
  );
}