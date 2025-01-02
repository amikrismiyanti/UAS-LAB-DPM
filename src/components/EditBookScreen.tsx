import React from "react";
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from "react-native";

const EditBook = ({ updateBook, setNewBookTitle, setNewBookAuthor, setScreen }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Book Title"
        onChangeText={(text) => setNewBookTitle(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Book Author"
        onChangeText={(text) => setNewBookAuthor(text)}
      />
      <TouchableOpacity style={styles.button} onPress={updateBook}>
        <Text style={styles.buttonText}>Update Book</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonCancel} onPress={() => setScreen("bookList")}>
        <Text style={styles.buttonText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#FFC8DD",
  },
  input: {
    height: 50,
    borderColor: "#FFC8DD",
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 10,
    paddingLeft: 15,
    fontSize: 18,
  },
  button: {
    backgroundColor: "#F8ABEB",
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: "center",
    marginBottom: 15,
  },
  buttonCancel: {
    backgroundColor: "#FF6B6B",
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default EditBook;
