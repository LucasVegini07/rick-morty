import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  Modal,
  TouchableOpacity,
} from "react-native";
import { CharacterProps } from "../../types";

interface Props {
  characters: CharacterProps[];
  testID: string;
}

const Characters: React.FC<Props> = ({ characters }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [character, setCharacter] = useState<CharacterProps>({
    name: ";",
    image: ";",
    gender: ";",
    species: ";",
    status: ";",
    location: {
      name: ";",
    },
    origin: {
      name: ";",
    },
  });
  return (
    <>
      {characters.map((character) => {
        return (
          <View key={character.name}>
            <TouchableOpacity
              onPress={() => {
                setCharacter(character);
                setModalVisible(true);
              }}
            >
              <Image
                source={{ uri: character.image }}
                style={styles.image}
                testID="image"
              />
            </TouchableOpacity>
            <View style={styles.textContainer}>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 24,
                }}
                testID="text"
              >
                {character.name}
              </Text>
            </View>
          </View>
        );
      })}
      <Modal
        animationType="fade"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
        transparent={true}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image source={{ uri: character.image }} style={styles.image} />
            <View
              style={{
                display: "flex",
                backgroundColor: "#000",
                opacity: 1,
                width: "100%",
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontSize: 26,
                  textAlign: "center",
                  marginBottom: 18,
                  marginTop: 18,
                }}
                testID="text"
              >
                {character.name}
              </Text>
              <Text
                style={{
                  color: "yellow",
                  fontSize: 18,
                }}
                testID="text"
              >
                ABOUT
              </Text>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 18,
                  marginBottom: 18,
                }}
              >
                {character.name} is a {character.gender} {character.species}
              </Text>
              <Text
                style={{
                  color: "yellow",
                  fontSize: 18,
                }}
                testID="text"
              >
                ORIGIN
              </Text>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 18,
                  marginBottom: 18,
                }}
              >
                {character.origin.name}
              </Text>
              <Text
                style={{
                  color: "yellow",
                  fontSize: 18,
                }}
                testID="text"
              >
                LOCATION
              </Text>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 18,
                  marginBottom: 18,
                }}
              >
                {character.location.name}
              </Text>
              <Text
                style={{
                  color: "yellow",
                  fontSize: 18,
                }}
                testID="text"
              >
                STATUS
              </Text>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 18,
                  marginBottom: 18,
                }}
              >
                {character.status}
              </Text>
              <TouchableOpacity
                style={(styles.button, { marginBottom: 18 })}
                onPress={() => setModalVisible(false)}
              >
                <Text
                  style={{
                    color: "#fff",
                    textAlign: "center",
                    fontSize: 18,
                  }}
                >
                  Fechar
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    backgroundColor: "#000000AA",
  },
  modalView: {
    margin: 20,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    height: 40,
    padding: 10,
    backgroundColor: "transparent",
  },
  image: {
    width: 260,
    height: 260,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  textContainer: {
    backgroundColor: "#1B1B1B",
    display: "flex",
    padding: 8,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    marginBottom: 20,
    width: 260,
  },
  text: {
    color: "#fff",
  },
});

export default Characters;
