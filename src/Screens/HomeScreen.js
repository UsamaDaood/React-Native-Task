/* @flow */

import React, { useRef, useState, useEffect} from 'react';

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import functions from '../utils/functions';
import CountryPicker, {
  Country,
  getAllCountries
} from 'react-native-country-picker-modal';
import services from '../Services/Services';
import Colors_1 from '../utils/Colors_used';

const countryKeys = getAllCountries().map(country => country.cca2);

export default function MyComponent() {
  const pickerRef = useRef<CountryPicker>("US");
  const [number, setNumber] = useState('+1');
  const [DATA, setData] = useState([]);

  const onSelect = (country: Country) => {
    setCountryCode(country.cca2)
    setCountry(country)
  }
  const [country, setCountry] = useState<Country>({
    cca2: 'US',
    callingCode: '1',
    name: 'United States',
  });

  function handleModal() {
    if (pickerRef && pickerRef.current) {
        try{
          pickerRef.current.openModal();
        }catch(c){

        }
      }
  }

 async function UserselectCountry(value) {
    setCountry(value);
    setNumber(`+${value.callingCode}`);
    let data = {
      'country': value.name,
    };

    let response = await services.getUniverities(data);
    console.log("Log,, Response Signup " , response);
    setData(response);

  }

  function renderPromosItem(item, index) {
    console.log("item is here ", item);

    return <View style={styles.textViewStyle}>
    <Text style={{textAlign: 'left', color: '#000', fontSize: 20}}>
       {item.name}
      </Text>
      </View>
 }

    return (
      <SafeAreaView style={{flex: 1, }}>
      <View style={{flex: 1, flexDirection: 'column',}}>
      <View style={styles.picker}>
        <CountryPicker
          ref={pickerRef}
          filterable
          hideAlphabetFilter
          countryList={countryKeys}
          cca2={country.cca2}
          onChange={value => {
            UserselectCountry(value)
          }}
          closeable
          onClose={() => null}
        />
      </View>
      <Text style={{textAlign: 'center', fontSize: 17, marginTop: 30}}>
        Select Country to View the University List. 
      </Text>
      <TouchableOpacity style={styles.button} mode="outlined" onPress={handleModal}>
        <Text style={{alignSelf: 'center', justifyContent: 'center', textAlign: 'center'}}>
        {`${country.name} ( ${country.cca2} )`}
        </Text>
      </TouchableOpacity>
        <Text style={{
          borderWidth: 2, 
          borderRadius: 30, 
          backgroundColor: Colors_1.uni_card_color, 
          padding: 10, color: '#fff', 
          borderColor: Colors_1.uni_card_color, 
          marginRight: 20, 
          marginLeft: 20, 
          textAlign: 'center'}}>  
          {'Total Number of Universities: ' + DATA.length}  </Text>
        <FlatList
          data={DATA}
          renderItem={({item,index}) => renderPromosItem(item, index)}
          horizontal={false}
          style={{marginTop: 20}}
        />
      </View>
      </SafeAreaView>
    );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    marginBottom: 20,
    backgroundColor: '#FBD638',
    width: functions.getWidth(50),
    height: functions.getWidth(15),
    borderRadius: 30,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: functions.getWidth(10)
  },
  picker: {
    height: 0,
    opacity: 0,
  },
  textViewStyle:{
    flexDirection: 'column', 
    marginLeft: 10, 
    justifyContent: 'flex-start',
    margin: 10,
    borderRadius: 40, 
    borderColor: '#000', 
    borderWidth: 1, 
    padding: 10
  }


});
