import React from "react";
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from "react-native";

const AddBook = ({ addBook, setNewBookTitle, setNewBookAuthor, setScreen }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add a New Book</Text>

      <TextInput
        style={styles.input}
        placeholder="Book Title"
        placeholderTextColor="#999"
        onChangeText={(text) => setNewBookTitle(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Book Author"
        placeholderTextColor="#999"
        onChangeText={(text) => setNewBookAuthor(text)}
      />

      <TouchableOpacity style={styles.button} onPress={addBook}>
        <Text style={styles.buttonText}>Add Book</Text>
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
    alignItems: "center",
    padding: 20,
    backgroundColor: "#FFC8DD",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2C3E50",
    marginBottom: 40,
  },
  input: {
    height: 50,
    width: "100%",
    borderColor: "#F8ABEB",
    borderWidth: 1.5,
    marginBottom: 20,
    borderRadius: 10,
    paddingLeft: 15,
    fontSize: 18,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    elevation: 5,
  },
  button: {
    backgroundColor: "#F8ABEB",
    paddingVertical: 15,
    width: "100%",
    borderRadius: 30,
    alignItems: "center",
    marginBottom: 15,
    shadowColor: "#F8ABEB",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    elevation: 8,
  },
  buttonCancel: {
    backgroundColor: "#FF6B6B",
    paddingVertical: 15,
    width: "100%",
    borderRadius: 30,
    alignItems: "center",
    shadowColor: "#FF6B6B",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    elevation: 8,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default AddBook;
