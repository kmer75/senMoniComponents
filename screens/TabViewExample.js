import * as React from 'react';
import { View, StyleSheet, Dimensions, StatusBar, Animated, TouchableOpacity, Text } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Button, List, useTheme, Caption,
  Headline,
  Paragraph,
  Subheading,
  Title, } from 'react-native-paper';
  import Colors from '../utils/constants/colors'

  const FirstRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#ff4081' }} />
  );
  
  const SecondRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
  );

const initialLayout = { width: Dimensions.get('window').width };


const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});


export default function TabViewExample() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
  ]);

  const renderTabBarClassic = (props) => {
    return (
    <TabBar {...props}
        indicatorStyle={{ backgroundColor: Colors.greenThemeColor }}
        style={{ backgroundColor: 'transparent', }}
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
  
const _renderTabBar = (props) => {
  
  const inputRange = props.navigationState.routes.map((x, i) => i);
  return (
    <View style={styles.tabBar}>
      {props.navigationState.routes.map((route, i) => {
        const opacity = props.position.interpolate({
          inputRange,
          outputRange: inputRange.map((inputIndex) => 
            inputIndex === i ? 1 : 0.5
          
          ),
        });
        
        return (
          <TouchableOpacity
          key={i}
            style={styles.tabItem}
            onPress={() => setIndex(i)}>
            <Animated.Text >{route.title}</Animated.Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

  return (
    <TabView
      navigationState={{ index, routes }}
      renderTabBar={renderTabBarClassic}
      renderScene={renderScene}
      onIndexChange={setIndex}
      // initialLayout={initialLayout}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
