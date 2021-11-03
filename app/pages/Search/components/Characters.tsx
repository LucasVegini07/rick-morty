import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { CharacterProps } from "../../types";

interface Props {
  characters: CharacterProps[];
  testID: string;
}

const Characters: React.FC<Props> = ({ characters }) => {
  return (
    <>
      {characters.map((character) => {
        return (
          <View key={character.name}>
            <Image
              source={{ uri: character.image }}
              style={styles.image}
              testID="image"
            />
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
              <Text
                style={{
                  color: "#fff",
                  fontSize: 16,
                }}
              >
                {character.species}
              </Text>
            </View>
          </View>
        );
      })}
    </>
  );
};

const styles = StyleSheet.create({
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
