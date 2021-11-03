import React, { useState, useEffect } from "react";
import Logo from "../../../assets/Logo.png";
import LoadingImage from "../../../assets/loading.png";
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import { RouteProp } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../App";
import { getChacarters } from "../../API";
import Pagination from "./components/Pagination";
import Characters from "./components/Characters";
import { CharacterProps } from "../types";

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

const Search: React.FC<Props<"Search">> = ({ route }) => {
  const [textSearch, setTextSearch] = useState(route.params.textSearched);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);
  const [characters, setCharacters] = useState<CharacterProps[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await getChacarters();
      filter(response.data.results);
    };

    fetchPosts();
  }, []);

  const filter = (charactersArray: CharacterProps[]) => {
    setLoading(true);
    let filtredList = charactersArray.filter(function (item) {
      return item.name
        .split(" ")
        .join("")
        .toLowerCase()
        .includes(textSearch.split(" ").join("").toLowerCase());
    });

    let List = charactersArray.filter(function (item) {
      return !item.name
        .split(" ")
        .join("")
        .toLowerCase()
        .includes(textSearch.split(" ").join("").toLowerCase());
    });

    let newArray: CharacterProps[] = [];
    newArray.push(...filtredList, ...List);
    setCharacters(newArray);
    setCurrentPage(1);
    setTimeout(() => setLoading(false), 1000);
  };

  //Get current characters
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = characters.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: React.SetStateAction<number>) =>
    setCurrentPage(pageNumber);

  return (
    <>
      {loading ? (
        <View style={styles.loading}>
          <Image
            source={Logo}
            style={{ top: -100, width: 250, height: 100, opacity: 0.2 }}
          />
          <Image source={LoadingImage} style={styles.loadingImage} />
          <Text style={styles.loadingText}>Loading</Text>
        </View>
      ) : (
        <View style={styles.container}>
          <Image source={Logo} style={styles.tinyLogo} />

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
              onPress={() => filter(characters)}
            >
              <Text style={{ color: "#fff" }}>Search</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            style={styles.scrollView}
            showsVerticalScrollIndicator={false}
          >
            <Characters characters={currentPosts} testID="characters" />
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={characters.length}
              paginate={paginate}
            ></Pagination>
          </ScrollView>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  loading: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  loadingText: {
    color: "#fff",
    fontSize: 22,
  },
  loadingImage: {
    borderRadius: 12,
    width: 182,
    height: 250,
    marginBottom: 20,
  },
  row: {
    paddingLeft: 40,
    paddingRight: 40,
    padding: 20,
    marginBottom: 20,
    marginTop: 20,
    display: "flex",
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
  scrollView: {
    display: "flex",
    marginBottom: 25,
  },
});

export default Search;
