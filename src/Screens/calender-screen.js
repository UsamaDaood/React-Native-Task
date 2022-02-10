
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import functions from '../utils/functions';
import {BoldText} from '../components/elements/custom-components/bold-text'
import {CustomeCard} from '../components/elements/custom-components/custom-card'
import Colors_1 from '../utils/Colors_used';
import Constants from '../utils/Constants'

const DATA = [
    {
      id: '11',
      day: '11',
      dayName: 'Sun',
      isSelect: '0'
    },
    {
    id: '05',
    day: '05',
    dayName: 'Mon',
    isSelect: '0'
    },
    {
    id: '06',
    day: '06',
    dayName: 'Tue',
    isSelect: '0'
    },
    {
    id: '07',
    day: '07',
    dayName: 'Wed',
    isSelect: '0'
    }, 
    {
    id: '08',
    day: '08',
    dayName: 'Fri',
    isSelect: '0'
    },
    {
    id: '09',
    day: '09',
    dayName: 'Sat',
    isSelect: '0'
    },
  ];
export default class CalenderScreen extends Component {

    state = {
        itemId: null,
        imgLink: null,
        listClicked: false,
        itemindex: "0",
      };

    PressedItem = (itemId, itemImg) => {
        console.log(itemId)
        this.setState({ itemId: itemId, btnDisabled: false, imgLink: itemImg })
    }


    renderPromosItem(item, index){

    return(
        <TouchableOpacity onPress={() => { this.PressedItem(item.id, item.image), this.setState({ itemindex: item.id }) }} >
        <View style={{
            flexDirection: 'column',
            justifyContent: 'flex-start',
            borderRadius: 5, 
            backgroundColor: this.state.itemindex == item.id ? '#38274C' : null,
            borderBottomLeftRadius: this.state.itemindex == item.id ? 10 : null,
            borderBottomRightRadius: this.state.itemindex == item.id ? 10 : null,
            padding: this.state.itemindex == item.id ? 15 : 15,
            }}>
                <Text style={{
                    textAlign: 'center', 
                    color: '#000', 
                    fontSize: 20,
                    color: this.state.itemindex == item.id ? '#fff' : null,
                    
                    }}>
                {item.dayName}
                </Text>
                <Text style={{
                    textAlign: 'center', 
                    color: '#000', 
                    fontSize: 20, 
                    marginTop: functions.getWidth(2),
                    color: this.state.itemindex == item.id ? '#fff' : null,
                    
                    }}>
                {item.day}
                </Text>
        </View>   

        </TouchableOpacity>
        );
    }

  render() {
    return (
   <SafeAreaView style={{flex: 1, }}>
    <ScrollView horizontal={false}>
     <View style={{flex: 1, flexDirection: 'column',}}>
      <View style={styles.dateListStyle}>
        <Text style={styles.textStyle}>
         Aug
        </Text>

        <FlatList
        data={DATA}
        renderItem={({item,index}) => this.renderPromosItem(item, index)}
        keyExtractor={item => item.id}
        horizontal={true}
        style={{alignSelf: 'center'}}
      />
      </View>

      <View style={{flexDirection: 'row'}}>

      <View style={{flexDirection: 'column'}}>
        
        {/* This is the Custome Component and YOU 
        can find this into "component/elements/custome-components" */}

        <BoldText
            subTextVal={"07 August 2021"}
            boldTextVal={"Wednesday"}
            isSubTextDisplay={true}
            boldTextStyle={styles.boldTextStyle}
            subTextStyle={styles.subTextStyle}
        />

        <View style={{marginTop: 10}}>
           {/* This is the Custome Component and YOU 
        can find this into "component/elements/custome-components" */}
        <CustomeCard
            locationText={Constants.CARD_TEXT}
            cardBackgroundColor={Colors_1.CARD1_color}
            UserName={"Usama Daood"}
            status={"Approved"}
            TimeText={"8 AM"}
            remainingTime={"(30 mins)"}
            leftDotImage={ require('../components/elements/svgs/ic_green_circle.png')}
            
        />

        <CustomeCard
            locationText={Constants.CARD_TEXT}
            cardBackgroundColor={Colors_1.CARD2_color}
            UserName={"Usama Daood"}
            status={"Pending"}
            TimeText={"8 AM"}
            remainingTime={"(60 mins)"}
            leftDotImage={ require('../components/elements/svgs/ic_orange_color.png')}
        />

        <View style={{marginTop: functions.getWidth(4)}}>
        <BoldText
            subTextVal={"08 August 2021"}
            boldTextVal={"Thrusday"}
            isSubTextDisplay={true}
            boldTextStyle={styles.boldTextStyle}
            subTextStyle={styles.subTextStyle}
        />
        </View>
        <View style={{marginTop: functions.getWidth(4)}}>
        <CustomeCard
             locationText={Constants.CARD_TEXT}
            cardBackgroundColor={Colors_1.CARD3_color}
            UserName={"Usama Daood"}
            status={"Pending"}
            TimeText={"8 AM"}
            remainingTime={"(30 mins)"}
            leftDotImage={ require('../components/elements/svgs/ic_purple_color.png')}
        />
        </View>
        
        </View>
      </View>

      </View>  

     </View>
    </ScrollView>
  </SafeAreaView>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dateListStyle:{
    flexDirection: 'row', 
    backgroundColor: '#E5E5E5', 
    height: functions.getWidth(22),
    
  },

  textStyle: {
    fontSize: functions.getFontSize(4), 
    fontWeight: '400', 
    alignSelf: 'center',
    marginLeft: functions.getWidth(5),
    marginRight: functions.getWidth(5),
  },
  boldTextStyle: {
    justifyContent: 'center',
    fontSize: functions.getFontSize(3.3), 
    fontWeight: 'bold', 
    alignSelf: 'center',

  },
  subTextStyle:{
    justifyContent: 'center', 
    fontSize: functions.getFontSize(2.3), 
    alignSelf: 'center', 
    marginTop: functions.getWidth(1.5)
}
});
