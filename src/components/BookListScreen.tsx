import React from "react";
import { View, Text, TouchableOpacity, FlatList, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const BookList = ({ books, deleteBook, setSelectedBook, setNewBookTitle, setNewBookAuthor, setScreen, setSearchQuery }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Books</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Search books..."
        onChangeText={(text) => setSearchQuery(text)}
      />
      <FlatList
        data={books}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.bookItem}>
            <Text style={styles.bookTitle}>{item.title}</Text>
            <Text style={styles.bookAuthor}>{item.author}</Text>
            <View style={styles.actionButtons}>
              <TouchableOpacity
                style={styles.iconButton}
                onPress={() => {
                  setSelectedBook(item);
                  setScreen("bookDetail");
                }}
              >
                <Ionicons name="eye" size={24} color="#F8ABEB" />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.iconButton}
                onPress={() => {
                  setSelectedBook(item);
                  setNewBookTitle(item.title);
                  setNewBookAuthor(item.author);
                  setScreen("editBook");
                }}
              >
                <Ionicons name="pencil" size={24} color="#F8ABEB" />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.iconButton}
                onPress={() => deleteBook(item.id)}
              >
                <Ionicons name="trash" size={24} color="#FF6B6B" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => setScreen("addBook")}
      >
        <Ionicons name="add" size={20} color="#FFF" />
        <Text style={styles.buttonText}>Add New Book</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFF",
  },
  header: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
    marginBottom: 20,
    marginTop: 20,
    letterSpacing: 2,
  },
  searchInput: {
    height: 50,
    borderColor: "#F8ABEB",
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 10,
    paddingLeft: 15,
    fontSize: 18,
    backgroundColor: "#F8F8F8",
  },
  bookItem: {
    backgroundColor: "#FFF",
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#F8ABEB",
  },
  bookTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  bookAuthor: {
    fontSize: 16,
    color: "#888",
  },
  actionButtons: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  iconButton: {
    marginLeft: 10,
  },
  button: {
    backgroundColor: "#F8ABEB",
    padding: 15,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default BookList;
