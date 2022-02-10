import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  FlatList,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  Image,
  ImageURISource
} from 'react-native';

import functions from '../../../utils/functions';
import { MarkerIcon } from '../../elements/svgs/location-marker'
import { CalenderIconSVG } from '../../elements/svgs/tab-icon-calender'


interface CustomeCardProps {
    locationText?: string;
    UserName ?: string;
    UserImage ?: string;
    status ?: string;
    TimeText ?: string;
    remainingTime ?: string;
    cardBackgroundColor ?: string,
    leftDotImage?: ImageURISource
    //boldTextStyle?: StyleProp<ViewStyle>;
    //subTextStyle ?: StyleProp<ViewStyle>;
  }
  

  export const CustomeCard = ({ 
      locationText, 
      UserName, 
      UserImage , 
      status, 
      TimeText,
      remainingTime,
      cardBackgroundColor,
      leftDotImage
    }: CustomeCardProps) => (
    <View >
    
    <View style={styles.textContainer}>
      <View style={{flexDirection: 'column', alignSelf: 'center'}}>
      <Image
        style={styles.ic_dot_style}
        source={leftDotImage}
        resizeMode={'cover'}
      />

      

      </View>
     
      <View style={{flexDirection: 'column', alignSelf: 'center'}}>
       <Text style={styles.timeTextStyle}>{TimeText} </Text>
       <Text style={styles.timeTextStyle}>{remainingTime} </Text>

      </View>
     <View style={{
        borderRadius: 10, 
        flexDirection: 'column', 
        backgroundColor: cardBackgroundColor,
        padding: 10,
        width: functions.getWidth(66),
        height: functions.getWidth(30),
       }}>
      
      <View style={{flexDirection: 'row',}}>
      <Image
        style={styles.ic_location_style}
        source={require('../svgs/Vector_11.png')}
        resizeMode={'cover'}
        
      />
       <Text style={styles.textlocationStyle}>{locationText} </Text>
      </View>

      <View style={{flexDirection: 'row', marginLeft: functions.getWidth(1)}}>
      <Image
        style={styles.ic_profile_style}
        source={require('../svgs/Agent_Photo.png')}
        resizeMode={'cover'}
        
      />
       <Text style={styles.textUserNameStyle}>{UserName} </Text>
      </View>

      <View style={styles.statusViewStyle}>
       <Text style={{color: cardBackgroundColor, padding: 5,  alignSelf: 'center'}}>{status}</Text>
      </View>    

      

     </View>
    </View>
    
    {/* <Text style={{color: cardBackgroundColor, padding: 5,  alignSelf: 'center'}}>{status}</Text> */}
   

    
    </View>
    
    
  );

  const styles = StyleSheet.create({
    textContainer :{
      flexDirection: 'row', 
      marginLeft: 10, 
      height: functions.getWidth(28),
      // width: '100%',
      margin: 10,
      justifyContent: 'center',

    },
  
    textlocationStyle: {
      fontSize: functions.getFontSize(2.5), 
      fontWeight: '700', 
      alignSelf: 'center',
      color: '#fff'
    },
    textUserNameStyle:{
      fontSize: functions.getFontSize(2.0), 
      fontWeight: '400', 
      alignSelf: 'center',
      color: '#fff'
    },
    timeTextStyle :{
      fontSize: functions.getFontSize(2.5), 
      fontWeight: '400', 
      alignSelf: 'center',
      color: '#000'
    }, 
    ic_location_style: {
      width: 13, 
      height: 16 ,
      marginLeft: 
      functions.getWidth(2) ,
      marginTop: functions.getWidth(2), 
      marginRight: functions.getWidth(2), 
      alignSelf: 'flex-start', 
      marginBottom: functions.getWidth(2)
    }, 

    ic_profile_style: {
      width: 13, 
      height: 16 ,
      marginLeft: functions.getWidth(1) , 
      marginRight: functions.getWidth(2), 
      alignSelf: 'flex-start',
    }, 

    statusViewStyle: {
      marginLeft: functions.getWidth(2), 
      marginTop: functions.getWidth(3) ,
      borderRadius: 20, 
      alignContent: 'center' ,
      backgroundColor: '#fff', 
      width: functions.getWidth(20)
    },
    ic_dot_style:{
      width: 28, 
      height: 28, 
      alignSelf: 'center',
    }


  });