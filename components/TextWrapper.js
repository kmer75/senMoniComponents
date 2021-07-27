import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, List, useTheme, Caption,
    Headline,
    Paragraph,
    Subheading,
    Title, } from 'react-native-paper';
import ScreenWrapper from '../src/ScreenWrapper';
import Spacer from '../utils/Spacer';
import Colors from '../utils/constants/colors'

const TextWrapper = (props) => {
  const { colors } = useTheme();

  return (
        <View style={{...styles.TextWrapper, ...props.style}}>
          {props.children}
        </View>
  );
};

TextWrapper.title = 'Button';

const styles = StyleSheet.create({
  TextWrapper: {
    backgroundColor: Colors.backgroundGrey,
    padding: 10,
    borderRadius: 10
  }
});

export default TextWrapper;
