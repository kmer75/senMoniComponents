import React, { useState } from 'react';
import { View, StyleSheet, Image, TextInput } from 'react-native';
import { Button, List, useTheme, Caption, Headline, Paragraph, Subheading, Title, TouchableRipple } from 'react-native-paper';
import ScreenWrapper from '../src/ScreenWrapper';
import Spacer from '../utils/Spacer';
import Colors from '../utils/constants/colors'
import DateTimePicker from '@react-native-community/datetimepicker';
import { Fontisto } from '@expo/vector-icons';
import { AntDesign, Entypo } from '@expo/vector-icons';
import InputWrapper from './../components/InputWrapper';
import DropDownPicker from 'react-native-dropdown-picker';
import TextWrapper from './../components/TextWrapper';

const CreateTontineSuiteExample = (props) => {
  const { colors } = useTheme();

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


        <View style={styles.rowWithSpace}>
          <Caption>8 members (with you) </Caption>
          <Button
            mode="contained"
            color={colors.accent}
            onPress={() => { }}
            labelStyle={{ color: 'white' }}
          >
            <AntDesign name="adduser" size={15} color={'white'} />
            Custom
          </Button>
        </View>

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
  }
});

export default CreateTontineSuiteExample;
