import React, { useState } from "react";
import Logo from "../../../assets/Logo.png";
import {
  View,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import { RouteProp } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../App";

type ScreenNavigationProp<T extends keyof RootStackParamList> =
  StackNavigationProp<RootStackParamList, T>;

type ScreenRouteProp<T extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  T
>;
type Props<T extends keyof RootStackParamList> = {
  route: ScreenRouteProp<T>;
  navigation: ScreenNavigationProp<T>;
};

const Initial: React.FC<Props<"Initial">> = ({ navigation }) => {
  const [textSearch, setTextSearch] = useState("");
  return (
    <View style={styles.container}>
      <Image testID="logo" source={Logo} style={styles.tinyLogo} />
      <View style={styles.row}>
        <TextInput
          placeholder="Search character"
          placeholderTextColor="#fff"
          style={styles.input}
          onChangeText={setTextSearch}
          value={textSearch}
        />
        <TouchableOpacity
          testID="searchButton"
          style={styles.button}
          onPress={() =>
            navigation.navigate("Search", {
              textSearched: textSearch,
            })
          }
        >
          <Text style={{ color: "#fff" }}>Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 30,
    alignItems: "center",
  },
  row: {
    paddingLeft: 40,
    paddingRight: 40,
    padding: 20,
    flex: 1,
    marginBottom: 20,
    marginTop: 20,
    flexDirection: "row",
  },
  tinyLogo: {
    width: 250,
    height: 100,
  },
  input: {
    height: 40,
    width: 250,
    padding: 10,
    color: "white",
    backgroundColor: "transparent",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 8,
    flex: 2,
    marginRight: 8,
  },
  button: {
    height: 40,
    padding: 10,
    backgroundColor: "transparent",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 8,
    flex: 1,
  },
});

export default Initial;
