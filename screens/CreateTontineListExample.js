import * as React from 'react';
import { ScrollView, StyleSheet, Image, View } from 'react-native';
import { List, Text, Chip, Divider, useTheme, Caption, Headline, Paragraph, Subheading, Title } from 'react-native-paper';
import Spacer from '../utils/Spacer';
import Colors from '../utils/constants/colors'

const CreateTontineListExample = (props) => {
  const {
    colors: { background },
  } = useTheme();
  

  return (
    
    <ScrollView style={[styles.container, { backgroundColor: background }]}>
      
    <List.Section style={styles.listWrapper}>
      <List.Item
        left={() => (
          <Image
            source={require('../assets/images/email-icon.png')}
            style={styles.image}
          />
        )}
        title="List item 1"
        description="Describes item 1"
      />
      <Divider />
      <List.Item
        left={() => (
          <Image
            source={require('../assets/images/email-icon.png')}
            style={styles.image}
          />
        )}
        right={props => <List.Icon {...props} icon="information" />}
        title="List item 2"
        description="Describes item 2"
      />   
      <Divider />  
      <Caption style={styles.bottomList}>See all the 8 members </Caption> 
    </List.Section>
  </ScrollView>
  );
};

CreateTontineListExample.title = 'Button';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 40,
    width: 40,
    margin: 8,
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  listWrapper: {
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  bottomList: {
    textAlign: 'center',
    padding: 10,
    color: Colors.greenThemeColor
  }
});

export default CreateTontineListExample;
