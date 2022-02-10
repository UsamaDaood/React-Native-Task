import React from "react";
import { NavigationContainer } from "@react-navigation/native";

// Screens
import HomeScreen from "./Screens/HomeScreen";
import CalenderScreen from "./Screens/calender-screen";

import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ListingIcon } from "../src/components/elements/svgs/tab-icon-listing";
import { SearchIcon } from "../src/components/elements/svgs/search-icon";
import { CalenderIconSVG } from "../src/components/elements/svgs/tab-icon-calender";

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();


function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={"Root"}
      screenOptions={{
        header: () => null,
      }}
    >
      <Stack.Screen
        name={"Root"}
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}




function BottomTabNavigator() {

  return (
    <BottomTab.Navigator
      initialRouteName={"HomeScreen"}
      screenOptions={{
        header: () => null,
      }}
    >
      <BottomTab.Screen
        name={"CalenderScreen"}
        component={CalenderScreen}
        options={({ navigation }) => ({
          title: "Calender",
          tabBarIcon: ({ color }) => <CalenderIconSVG fill={color} />,
        })}
      />


      <BottomTab.Screen
        name={"SearchScreen"}
        component={HomeScreen}
        options={{
          title: "Listing",
          tabBarIcon: ({ color }) =><ListingIcon fill={color} />,
        }}
      />
     
    </BottomTab.Navigator>
  );

  }

const App = () => {

let initialRoute = "";
  return (
    <NavigationContainer
    >
    <RootNavigator />
  </NavigationContainer>
  );
}
export default App;
