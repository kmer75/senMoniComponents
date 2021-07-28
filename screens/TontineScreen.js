import * as React from 'react';
import { View, StyleSheet, Dimensions, StatusBar, Animated, TouchableOpacity, Text } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Button, List, useTheme, Caption,
  Headline,
  Paragraph,
  Subheading,
  Title, } from 'react-native-paper';
  import Colors from '../utils/constants/colors'
import CreateTontineListExample from './CreateTontineListExample';
import Spacer from './../utils/Spacer';

  const FirstRoute = () => (
    <React.Fragment>
    <CreateTontineListExample />
    </React.Fragment>
  );
  
  const SecondRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#34495e' }} />
  );

  const thirdRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#3498db' }} />
  );

const initialLayout = { width: Dimensions.get('window').width };


const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: thirdRoute
});


export default function TontineScreen({navigation}) {
  const { colors } = useTheme();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Active' },
    { key: 'second', title: 'Favoris' },
    { key: 'third', title: 'Past' },
  ]);

  const renderTabBarClassic = (props) => {
    return (
    <TabBar {...props}
        indicatorStyle={{ backgroundColor: Colors.greenThemeColor }}
        style={{ backgroundColor: 'transparent', marginLeft: 3 }}
        tabStyle={{width: 'auto'}}
        activeColor={Colors.greenThemeColor}
        inactiveColor='black'
        renderLabel={({ route, focused, color }) => {
          let opacity = focused ? 1 : 0.5;
          return (
            <Caption style={{color, margin: 8, opacity: opacity}}>
              {route.title}
            </Caption>
          )}}
    />);
  }

  return (
    <React.Fragment>
      <View style={styles.row}>
        <Subheading style={styles.text}>My tontines</Subheading>
        <Button
          mode="contained"
          color={colors.accent}
          onPress={() => { navigation.push('CreateTontine') }}
          dark={true}
        // style={styles.button}
        >
          Create Tontine
        </Button>
      </View>

      <TabView
        navigationState={{ index, routes }}
        renderTabBar={renderTabBarClassic}
        renderScene={renderScene}
        onIndexChange={setIndex}
      // initialLayout={initialLayout}
      style={{paddingHorizontal: 20}}
      />
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  
  row: {
    flexDirection: 'row',
    // alignItems: '', 
    justifyContent: 'space-around',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  button: {
    margin: 4,
  },
  text: {
    marginVertical: 4,
    // borderBottomWidth: 1,
    // borderBottomColor: 'black',
    // textAlign: 'left'
  },
  tabBar: {
    flexDirection: 'row'
  },
  tabItem: {
    // flex: 1,
    // alignItems: 'center',
    padding: 16,
    backgroundColor: 'transparent'
  },
});
