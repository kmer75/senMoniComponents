import React from 'react';
import { View, StyleSheet, TextInput as NativeTextInput} from 'react-native';
import { Button, List, useTheme, Caption, Headline, 
  Paragraph, Subheading,  Title, TextInput } from 'react-native-paper';
import ScreenWrapper from '../src/ScreenWrapper';
import Spacer from '../utils/Spacer';
import Colors from '../utils/constants/colors'
import TextWrapper from '../components/TextWrapper';

const CreateTontineExample = (props) => {
  const { colors } = useTheme();
  const [text, setText] = React.useState("Adobe Tontine");
  const [longText, setLongText] = React.useState("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took ");

  return (
    <React.Fragment>



      <View style={styles.row}>
        <Title>Create </Title>
        <Title style={{ color: Colors.greenThemeColor }}> Tontine</Title>
      </View>

      <View style={styles.Content}>
        <Caption style={styles.text}>Name</Caption>
        
        
        <TextWrapper>
          <NativeTextInput
        onChangeText={setText}
        value={text}
        placeholder="Tontine Name"
      />
        </TextWrapper>

        <Spacer/>

        <TextInput
        dense
        onChangeText={setText}
        value={text}
        placeholder="Tontine Name"
        selectionColor={Colors.greenThemeColor}
        outlineColor={Colors.greenThemeColor}
        underlineColor={Colors.greenThemeColor}
      />

      </View>

      <View style={styles.Content}>
        <Caption style={styles.text}>Resume (240 caracter)</Caption>
        <TextWrapper>
        <NativeTextInput
        onChangeText={setLongText}
        value={longText}
        placeholder="Tontine Description"
        multiline={true}
      />
        </TextWrapper>

<Spacer/>

        <TextInput
        dense
        onChangeText={setLongText}
        value={longText}
        placeholder="Tontine Description"
        multiline={true}
      />
      </View>
    </React.Fragment>
  );
};

CreateTontineExample.title = 'Button';

const styles = StyleSheet.create({
  Content: {
    flexDirection: 'column',
    // flex: 2,
    // alignItems: '', 
    // justifyContent: 'space-around',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  row: {
    flexDirection: 'row',
    // flex: 2,
    // alignItems: '', 
    // justifyContent: 'space-around',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  TextWrapper: {
    backgroundColor: Colors.backgroundGrey,
    padding: 10,
    borderRadius: 10
  },
});

export default CreateTontineExample;
