import { useCallback, useEffect } from 'react';
import { AppRegistry, SafeAreaView } from 'react-native';
import { setStatusBarBackgroundColor, setStatusBarHidden, setStatusBarStyle, setStatusBarTranslucent } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

// Hooks
import Colors from './hooks/Colors';
import Styles from './hooks/Styles';

// Screens
import Home from './screens/Home';

SplashScreen.preventAutoHideAsync();

function App() {
  const [fontsLoaded, fontError] = useFonts({ 'OpenSans-Regular': require('./assets/fonts/OpenSans-Regular.ttf') });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  useEffect(() => {
    setStatusBarBackgroundColor(Colors.gray.d, true);
    setStatusBarHidden(false, 'none');
    setStatusBarStyle('dark');
    setStatusBarTranslucent(true);
  }, []);


  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaView style={Styles.AreaView} onLayout={onLayoutRootView}>
      <Home />
    </SafeAreaView>
  );
}

AppRegistry.registerComponent('App', () => App);

export default App;
