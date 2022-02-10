import {Platform
} from 'react-native';

const BASE_URL = "http://universities.hipolabs.com"; 
const PLATFORM = Platform.OS == 'ios' ? 'ios' : 'android';
const CURRENT_VERSION = '1.0';
const API_VERSION = '1.0';
const CARD_TEXT = "5519 NE Skidmore Portland";


module.exports = {
    BASE_URL,
    PLATFORM,
    CURRENT_VERSION,
    API_VERSION,
    CARD_TEXT
}