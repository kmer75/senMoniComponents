import * as React from 'react';
import { ScrollView, StyleSheet, Image, View } from 'react-native';
import { List, Text, Chip, Divider, useTheme, Caption, Headline, Paragraph, Subheading, Title } from 'react-native-paper';
import Spacer from '../utils/Spacer';
import Colors from '../utils/constants/colors'

const CreateTontineListExample = (props) => {
  const {
    colors: { background },
  } = useTheme();
  
  const data = [
    {}, {}
  ];

  return (

    <ScrollView style={[styles.container]}>
      <Spacer />
      {data.map((d, i) => {
        let item = (
          <React.Fragment key={i}>
            <List.Item  style={{ backgroundColor: '#fff', borderRadius: 12 }}
              left={() => (
                <Image
                  source={require('../assets/images/forest.jpg')}
                  style={styles.image}
                />
              )}
              right= {()=> (
                <View style={{flexDirection: 'row',
                //  borderWidth: 1, borderColor: 'blue', 
                justifyContent: 'center', //Centered horizontally
                alignItems: 'center', //Centered vertically
                paddingRight: 10
                }}>
                <Image
                  source={require('../assets/images/celo-celo-logo.png')}
                  style={{height: 17, width: 17,}}
                />
                <View>
                <Title> 58</Title>
                <Caption style={{position: 'absolute', bottom: -10, right: 0}}>test</Caption>
                </View>
                </View>
              )}
              title="List item 1"
              description={()=>
                <View>
                  <Text style={{color: Colors.greyColor, fontSize: 12}}>3 members</Text>
                  <Text style={{color: Colors.greyColor, fontSize: 12}}>01 September 21 - 01 December 21</Text>
                </View>
                }
            />
            <Spacer />
          </React.Fragment>
        );
        return item;
      })}
    </ScrollView>
  );
};

CreateTontineListExample.title = 'Button';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 55,
    width: 55,
    margin: 8,
    borderRadius: 5
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  listWrapper: {
    backgroundColor: 'white',
    marginTop: 20,
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
