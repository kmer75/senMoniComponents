import React, { useState } from 'react';
import { View, StyleSheet, Image, TextInput, ScrollView } from 'react-native';
import { Button, List, useTheme, Caption, Headline, Paragraph, Subheading, Title, TouchableRipple, Divider, Checkbox, Portal, Modal } from 'react-native-paper';
import ScreenWrapper from '../src/ScreenWrapper';
import Spacer from '../utils/Spacer';
import Colors from '../utils/constants/colors'
import DateTimePicker from '@react-native-community/datetimepicker';
import { Fontisto } from '@expo/vector-icons';
import { AntDesign, Entypo } from '@expo/vector-icons';
import InputWrapper from './../components/InputWrapper';
import DropDownPicker from 'react-native-dropdown-picker';
import TextWrapper from './../components/TextWrapper';
import Colorz from '../utils/constants/colors'
import CreateTontineListToAddExample from './CreateTontineListToAddExample';

const CreateTontineSuiteExample = ({navigation}) => {
  const { colors } = useTheme();

  //modal handler
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  //checkbox handler 
  const [checkedNormal, setCheckedNormal] = React.useState(true);
  const checkbox = (
    <TouchableRipple onPress={() => setCheckedNormal(!checkedNormal)}>
      <View style={styles.row}>
        <View pointerEvents="none">
          <Checkbox status={checkedNormal ? 'checked' : 'unchecked'} />
        </View>
      </View>
    </TouchableRipple>
  )

  //Dates handler
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  //dropdownlist Handler

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Celo', value: 'Celo', icon: () => <Image source={require('../assets/images/celo-celo-logo.png')} style={styles.iconStyle} /> },
    { label: 'Dollar USDT', value: 'USDT', icon: () => <Image source={require('../assets/images/tether-usdt-logo.png')} style={styles.iconStyle} /> }
  ]);

  const [openPeriod, setOpenPeriod] = useState(false);
  const [valuePeriod, setValuePeriod] = useState(null);
  const [itemsPeriod, setItemsPeriod] = useState([
    { label: 'Day', value: 'Day' },
    { label: 'Week', value: 'week' },
    { label: 'Mont', value: 'Month' },
  ]);

  //input handler
  const [text, setText] = React.useState("100");

  return (
    <React.Fragment>
      <View style={styles.Content}>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}

        <Caption style={styles.text}>Date start</Caption>
        <InputWrapper onPress={() => { showDatepicker() }}>
          <View style={styles.row}>
            <Fontisto style={{ marginRight: 30 }} name="date" size={24} color="black" />
            <Paragraph>{date.toDateString()}</Paragraph>
          </View>
        </InputWrapper>

        <Spacer />

        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          zIndex={2000}
          selectedItemLabelStyle={{
            color: Colors.greenThemeColor,
          }}
          placeholder="Select the currency"
          TickIconComponent={({ style }) => <AntDesign name="check" size={24} color={Colors.greenThemeColor} />}
          style={{
            borderColor: "transparent",
            backgroundColor: Colors.backgroundGrey,
            borderRadius: 10
          }}
        // listMode="MODAL"
        // modalProps={{
        //   animationType: 'slide'
        // }}
        />


        <View style={styles.row2Col}>

          <TextInput
            onChangeText={setText}
            value={text}
            placeholder="Quantity"
            keyboardType="number-pad"
          />

          <DropDownPicker
            open={openPeriod}
            value={valuePeriod}
            items={itemsPeriod}
            setOpen={setOpenPeriod}
            setValue={setValuePeriod}
            setItems={setItemsPeriod}
            zIndex={2000}
            selectedItemLabelStyle={{
              color: Colors.greenThemeColor,
            }}
            placeholder="Select the period"
            TickIconComponent={({ style }) => <AntDesign name="check" size={24} color={Colors.greenThemeColor} />}
            style={{
              borderColor: "transparent",
              backgroundColor: Colors.backgroundGrey,
              borderRadius: 10
            }}
          // listMode="MODAL"
          // modalProps={{
          //   animationType: 'slide'
          // }}
          />

        </View>

    {/* SECTION Affichage des Membres */}

        <View style={styles.rowWithSpace}>
          <Caption>8 members (with you) </Caption>
          <Button
            mode="contained"
            color={colors.accent}
            onPress={showModal}
            dark={true}
            // labelStyle={{ color: 'white' }}
          >
            <AntDesign name="adduser" size={15} color={'white'} />
            Manage Addresses
          </Button>
        </View>

    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>

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

  
  <View>
  <Button
            color={colors.accent}
            onPress={() => { navigation.push('CreateTontine') }}
          >
            <AntDesign name="adduser" size={15} color={colors.accent} />
            Previous
          </Button>

          <Button
            mode="contained"
            color={colors.accent}
            onPress={() => { navigation.push('Home') }}
            loading={true}
            dark={true}
          >
            <AntDesign name="adduser" size={15} color={'white'} />
            Create
          </Button>
  </View>

  <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={{backgroundColor: 'white', padding: 20}}>
          <CreateTontineListToAddExample/>
        </Modal>
      </Portal>

      </View>
    </React.Fragment>
  );
};

CreateTontineSuiteExample.title = 'Button';

const styles = StyleSheet.create({
  Content: {
    flexDirection: 'column',
    // flex: 2,
    // alignItems: '', 
    justifyContent: 'space-around',
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
  rowWithSpace: {
    flexDirection: 'row',
    zIndex: 1,
    // flex: 2,
    // alignItems: '', 
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  row2Col: {
    flexDirection: 'row',
    // flex: 2,
    // alignItems: '', 
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  iconStyle: {
    width: 20,
    height: 20
  },
  //Style List
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
  image: {
    height: 40,
    width: 40,
    margin: 8,
  },
});

export default CreateTontineSuiteExample;
