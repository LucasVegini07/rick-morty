import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

interface Props {
  postsPerPage: number;
  totalPosts: number;
  paginate: (number: number) => void;
}
const Pagination: React.FC<Props> = ({
  postsPerPage,
  totalPosts,
  paginate,
}) => {
  const pageNumbers: number[] = [];

  const [currentPage, setCurrentPage] = useState(1);

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleChangePage = (currentPage: any) => {
    if (currentPage === 0 || currentPage === pageNumbers.length + 1) {
      return;
    }
    setCurrentPage(currentPage);
    paginate(currentPage);
  };

  return (
    <View style={styles.row}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleChangePage(currentPage - 1)}
      >
        <Text style={{ color: "#fff" }}>Previos</Text>
      </TouchableOpacity>
      <Text style={styles.text}>{currentPage}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleChangePage(currentPage + 1)}
      >
        <Text style={{ color: "#fff" }}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    height: 40,
    padding: 10,
    backgroundColor: "transparent",
  },
  text: {
    textAlign: "center",
    fontSize: 26,
    lineHeight: 32,
    margin: 20,
    color: "yellow",
  },
});

export default Pagination;
