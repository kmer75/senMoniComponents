import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, List, useTheme, Caption,
    Headline,
    Paragraph,
    Subheading,
    Title, } from 'react-native-paper';
import ScreenWrapper from '../src/ScreenWrapper';
import Spacer from '../utils/Spacer';

const TontineScreen = () => {
  const { colors } = useTheme();

  return (
        <View style={styles.row}>
        <Subheading style={styles.text}>My tontines</Subheading>
          <Button
            mode="outlined"
            color={colors.accent}
            onPress={() => {}}
            style={styles.button}
          >
            Custom
          </Button>
        </View>
  );
};

TontineScreen.title = 'Button';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flex: 2,
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
});

export default TontineScreen;
