import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, List, useTheme, Caption, Headline, Paragraph, Subheading, Title, TouchableRipple } from 'react-native-paper';
import Colors from '../utils/constants/colors'

const InputWrapper = (props) => {
  const { colors } = useTheme();
  return (
        <View style={{...styles.InputWrapper, ...props.viewStyle}}>
        <TouchableRipple {...props}
        rippleColor={ props.rippleColor ? props.rippleColor : Colors.blackFontColor }
      >
          <View style={{padding: 5}}>
          {props.children}
          </View>
          </TouchableRipple>
        </View>
  );
};

InputWrapper.title = 'Button';

const styles = StyleSheet.create({
    InputWrapper: {
    backgroundColor: Colors.backgroundGrey,
    borderRadius: 10
  },
});

export default InputWrapper;
