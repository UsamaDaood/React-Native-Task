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
  ViewStyle
} from 'react-native';

import functions from '../../../utils/functions';

interface BoldTextProps {
    isSubTextDisplay?: boolean;
    boldTextVal ?: string;
    subTextVal ?: string;
    boldTextStyle?: StyleProp<ViewStyle>;
    subTextStyle ?: StyleProp<ViewStyle>;
  }
  

  export const BoldText = ({ isSubTextDisplay, boldTextVal, subTextVal , boldTextStyle, subTextStyle }: BoldTextProps) => (

    <View style={styles.textContainer}>
      <Text style={boldTextStyle}>
       {boldTextVal} 
      </Text>
      {isSubTextDisplay ? <Text style={subTextStyle}> {subTextVal} </Text> : null }
  </View>
    
  );

  const styles = StyleSheet.create({
    textContainer :{
      flexDirection: 'row', 
      height: functions.getWidth(7),
      marginLeft: functions.getWidth(8)
      
    },
  
    textStyle: {
      fontSize: functions.getFontSize(4), 
      fontWeight: '400', 
      alignSelf: 'center',
      marginLeft: functions.getWidth(5),
      marginRight: functions.getWidth(5),
    }
  });