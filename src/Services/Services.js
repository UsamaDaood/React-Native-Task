import {BASE_URL, API_VERSION, PLATFORM} from '../utils/Constants';
export default {

    async getUniverities(data) {
        console.log("okay ", BASE_URL + '/search?country=' + data.country);
      try {
        let response = await fetch(BASE_URL + '/search?country=' + data.country, {
          method: 'GET', // or 'PUT'
          headers: new Headers({
            'Content-Type': 'application/json',
          }),
        });
        console.log(response);
        let responseJson = await response.json();
        return responseJson;
      } catch (error) {
        console.log(error);
      }
    },

}