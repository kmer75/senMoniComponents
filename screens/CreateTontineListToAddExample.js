import * as React from 'react';
import { ScrollView, StyleSheet, Image, View } from 'react-native';
import { List, Text, Chip, Divider, useTheme, Caption, Headline, Paragraph, Subheading, Title,
  Checkbox,
  Colors,
  TouchableRipple, } from 'react-native-paper';
import Spacer from '../utils/Spacer';
import Colorz from '../utils/constants/colors'
import { AntDesign } from '@expo/vector-icons';

const CreateTontineListToAddExample = (props) => {
  const [checkedNormal, setCheckedNormal] = React.useState(true);
  const {
    colors: { background },
  } = useTheme();
  
  const checkbox = (
    <TouchableRipple onPress={() => setCheckedNormal(!checkedNormal)}>
      <View style={styles.row}>
        <View pointerEvents="none">
          <Checkbox status={checkedNormal ? 'checked' : 'unchecked'} />
        </View>
      </View>
    </TouchableRipple>
  )


  return (
    
    <ScrollView style={[styles.container, { backgroundColor: background }]}>

<View style={styles.TextWrapper}>
        <TouchableRipple
        style={{...styles.ripple, padding: 5}}
        onPress={() => {}}
        rippleColor="rgba(0, 0, 0, .32)"
      >
          <View style={styles.row}>
          <Caption>Adress wallet</Caption>
          <AntDesign name="adduser" size={24} color={Colorz.greenThemeColor} />
          </View>
          </TouchableRipple>
        </View>
        

      <Spacer/>
  
      
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
        right={props => checkbox }
        title="List item 2"
        description="Describes item 2"
      />   
      <Divider />  
      <Caption style={styles.bottomList}>See all the 8 members </Caption> 
    </List.Section>
  </ScrollView>
  );
};

CreateTontineListToAddExample.title = 'Button';

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
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 16,
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
    color: Colorz.greenThemeColor
  },
  TextWrapper: {
    backgroundColor: Colorz.backgroundGrey,
    // padding: 10,
    borderRadius: 10,
    margin: 20
  }
});

export default CreateTontineListToAddExample;
