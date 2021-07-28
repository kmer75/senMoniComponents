import * as React from 'react';
import { I18nManager, Platform, Text, View } from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Updates } from 'expo';
import { useKeepAwake } from 'expo-keep-awake';
import { StatusBar } from 'expo-status-bar';
import { InitialState, NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  Provider as PaperProvider,
  DarkTheme,
  DefaultTheme,
  Divider
} from 'react-native-paper';
import App from './RootNavigator';
import HomeStack from './Navigator';
import DrawerItems from './DrawerItems';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TontineScreen from './../screens/TontineScreen';
import TabViewExample from '../screens/TabViewExample';
import ButtonExample from './Examples/ButtonExample';
import CreateTontineExample from './../screens/CreateTontineExample';
import CreateTontineSuiteExample from './../screens/CreateTontineSuiteExample';
import CreateTontineListExample from './../screens/CreateTontineListExample';
import CreateTontineListToAddExample from './../screens/CreateTontineListToAddExample';
import ScreenWrapper from './ScreenWrapper';
import CheckboxExample from './Examples/CheckboxExample';

// Add new typescript properties to the theme
declare global {
  namespace ReactNativePaper {
    interface ThemeFonts {
      superLight: ThemeFont;
    }
    interface ThemeColors {
      customColor: string;
    }
    interface ThemeAnimation {
      customProperty: number;
    }
    interface Theme {
      userDefinedThemeProperty: string;
    }
  }
}

const PERSISTENCE_KEY = 'NAVIGATION_STATE';
const PREFERENCES_KEY = 'APP_PREFERENCES';

const CustomDarkTheme: ReactNativePaper.Theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    customColor: '#BADA55',
  },
  fonts: {
    ...DarkTheme.fonts,
    superLight: { ...DarkTheme.fonts['light'] },
  },
  userDefinedThemeProperty: '',
  animation: {
    ...DarkTheme.animation,
    customProperty: 1,
  },
};

const CustomDefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    customColor: '#BADA55',
  },
  fonts: {
    ...DefaultTheme.fonts,
    superLight: { ...DefaultTheme.fonts['light'] },
  },
  userDefinedThemeProperty: '',
  animation: {
    ...DefaultTheme.animation,
    customProperty: 1,
  },
};

const PreferencesContext = React.createContext<any>(null);

const DrawerContent = () => {
  return (
    <PreferencesContext.Consumer>
      {(preferences) => (
        <DrawerItems
          toggleTheme={preferences.toggleTheme}
          toggleRTL={preferences.toggleRtl}
          isRTL={preferences.rtl}
          isDarkTheme={preferences.theme.dark}
        />
      )}
    </PreferencesContext.Consumer>
  );
};

const Drawer = createDrawerNavigator<{ Home: undefined }>();

export default function PaperExample() {
  useKeepAwake();

  const [isReady, setIsReady] = React.useState(false);
  const [initialState, setInitialState] = React.useState<
    InitialState | undefined
  >();

  const [theme, setTheme] = React.useState<ReactNativePaper.Theme>(
    CustomDefaultTheme
  );
  const [rtl, setRtl] = React.useState<boolean>(I18nManager.isRTL);

  React.useEffect(() => {
    const restoreState = async () => {
      try {
        const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
        const state = JSON.parse(savedStateString || '');

        setInitialState(state);
      } catch (e) {
        // ignore error
      } finally {
        setIsReady(true);
      }
    };

    if (!isReady) {
      restoreState();
    }
  }, [isReady]);

  React.useEffect(() => {
    const restorePrefs = async () => {
      try {
        const prefString = await AsyncStorage.getItem(PREFERENCES_KEY);
        const preferences = JSON.parse(prefString || '');

        if (preferences) {
          // eslint-disable-next-line react/no-did-mount-set-state
          setTheme(
            preferences.theme === 'dark' ? CustomDarkTheme : CustomDefaultTheme
          );

          if (typeof preferences.rtl === 'boolean') {
            setRtl(preferences.rtl);
          }
        }
      } catch (e) {
        // ignore error
      }
    };

    restorePrefs();
  }, []);

  React.useEffect(() => {
    const savePrefs = async () => {
      try {
        await AsyncStorage.setItem(
          PREFERENCES_KEY,
          JSON.stringify({
            theme: theme === DarkTheme ? 'dark' : 'light',
            rtl,
          })
        );
      } catch (e) {
        // ignore error
      }

      if (I18nManager.isRTL !== rtl) {
        I18nManager.forceRTL(rtl);
        Updates.reloadFromCache();
      }
    };

    savePrefs();
  }, [rtl, theme]);

  const preferences = React.useMemo(
    () => ({
      toggleTheme: () =>
        setTheme((theme) =>
          theme === CustomDefaultTheme ? CustomDarkTheme : CustomDefaultTheme
        ),
      toggleRtl: () => setRtl((rtl) => !rtl),
      rtl,
      theme,
    }),
    [rtl, theme]
  );

  if (!isReady) {
    return null;
  }

  //Drawer Navigation : Navigation sur le coté 
  //ici créé a partir des preferences. a debugger

  const EntryPoint = 
  <PaperProvider theme={theme}>
  <SafeAreaProvider>
    <PreferencesContext.Provider value={preferences}>
      <React.Fragment>
        <NavigationContainer
          initialState={initialState}
          onStateChange={(state) =>
            AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
          }
        >
            <Drawer.Navigator drawerContent={() => <DrawerContent />}>
              <Drawer.Screen name="Home" component={App} />
            </Drawer.Navigator>
          <StatusBar style="light" />
        </NavigationContainer>
      </React.Fragment>
    </PreferencesContext.Provider>
  </SafeAreaProvider>
</PaperProvider>;

const EntryPointSn = 
<PaperProvider theme={theme}>
<SafeAreaProvider>
  <PreferencesContext.Provider value={preferences}>
    <React.Fragment>
      <NavigationContainer
        initialState={initialState}
        onStateChange={(state) =>
          AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
        }
      >
          <Drawer.Navigator drawerContent={() => <DrawerContent />}>
            <Drawer.Screen name="Home" component={HomeStack} />
          </Drawer.Navigator>
        <StatusBar style="light" />
      </NavigationContainer>
    </React.Fragment>
  </PreferencesContext.Provider>
</SafeAreaProvider>
</PaperProvider>;

return EntryPointSn;

// return EntryPoint;

  return (
    <SafeAreaProvider>
    <ScreenWrapper>
      {/* 1ere ecran */}
    {/* <TontineScreen/>  */}
    {/* <TabViewExample /> */}
     {/*fin 1ere ecran */}
     {/* Create Tontine  */}
     {/* <CreateTontineExample/> */}
     <CreateTontineSuiteExample/>
     {/* <CreateTontineListExample/>  */}
     {/* <CreateTontineListToAddExample/>   */}
     {/* Fin Create Tontine */}
    </ScreenWrapper>
    </SafeAreaProvider>
  );
}
