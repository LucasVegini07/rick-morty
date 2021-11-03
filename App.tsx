import React from "react";
import background from "./assets/background.png";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import Initial from "./app/pages/Initial";
import Search from "./app/pages/Search";

const Stack = createStackNavigator();

export type RootStackParamList = {
  Initial: undefined;
  Search: {
    textSearched: string;
  };
};

const App: React.FC<RootStackParamList> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Initial"
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: "black" },
        }}
      >
        <Stack.Screen name="Initial" component={Initial} />
        <Stack.Screen name="Search" component={Search} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    height: "100%",
  },
});

export default App;
