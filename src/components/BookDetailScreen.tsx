import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const BookDetail = ({ selectedBook, setScreen }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Book Details</Text>
      {selectedBook ? (
        <View style={styles.detailContainer}>
          <Text style={styles.title}>Title: {selectedBook.title}</Text>
          <Text style={styles.author}>Author: {selectedBook.author}</Text>
        </View>
      ) : (
        <Text style={styles.noBookText}>No book selected</Text>
      )}

      <TouchableOpacity
        style={styles.buttonBack}
        onPress={() => setScreen("bookList")}
      >
        <Text style={styles.buttonText}>Back to Book List</Text>
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
  header: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#2C3E50",
  },
  detailContainer: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 20,
    marginBottom: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2C3E50",
  },
  author: {
    fontSize: 18,
    color: "#7F8C8D",
    marginTop: 10,
  },
  buttonBack: {
    backgroundColor: "#F8ABEB",
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  noBookText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FF6B6B",
    textAlign: "center",
    marginTop: 20,
  },
});

export default BookDetail;
