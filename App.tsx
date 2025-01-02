import React, { useState } from "react";
import { View, StyleSheet, Alert, StatusBar, Text } from "react-native";
import Toast from "react-native-toast-message"; // Import toast
import LoginScreen from "./src/screens/LoginScreen";
import BookList from "./src/components/BookListScreen";
import AddBook from "./src/components/AddBookScreen";
import EditBook from "./src/components/EditBookScreen";
import BookDetail from "./src/components/BookDetailScreen";

const App = () => {
  const [screen, setScreen] = useState("login");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [books, setBooks] = useState([
    { id: "1", title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { id: "2", title: "To Kill a Mockingbird", author: "Harper Lee" },
  ]);
  const [newBookTitle, setNewBookTitle] = useState("");
  const [newBookAuthor, setNewBookAuthor] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); // New state for search query

  const loginHandler = () => {
    if (username === "admin" && password === "admin") {
      setScreen("bookList");
      Toast.show({
        type: "success",
        position: "top",
        text1: "Login Successful",
      });
    } else {
      Toast.show({
        type: "error",
        position: "top",
        text1: "Invalid username or password",
      });
    }
  };

  const addBook = () => {
    if (newBookTitle.trim() === "" || newBookAuthor.trim() === "") {
      Toast.show({
        type: "error",
        position: "top",
        text1: "Please fill in all fields",
      });
      return;
    }
    const newBook = {
      id: Math.random().toString(),
      title: newBookTitle,
      author: newBookAuthor,
    };
    setBooks((prevBooks) => [...prevBooks, newBook]);
    setNewBookTitle("");
    setNewBookAuthor("");
    Toast.show({
      type: "success",
      position: "top",
      text1: "Book added!",
    });
    setScreen("bookList");
  };

  const updateBook = () => {
    if (newBookTitle.trim() === "" || newBookAuthor.trim() === "") {
      Toast.show({
        type: "error",
        position: "top",
        text1: "Please fill in all fields",
      });
      return;
    }
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === selectedBook.id
          ? { ...book, title: newBookTitle, author: newBookAuthor }
          : book
      )
    );
    setNewBookTitle("");
    setNewBookAuthor("");
    setSelectedBook(null);
    Toast.show({
      type: "success",
      position: "top",
      text1: "Book updated!",
    });
    setScreen("bookList");
  };

  const deleteBook = (id) => {
    Alert.alert("Confirm", "Are you sure you want to delete this book?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Delete",
        style: "destructive",
        onPress: () => {
          const updatedBooks = books.filter((book) => book.id !== id);
          setBooks(updatedBooks);
          Toast.show({
            type: "success",
            position: "top",
            text1: "Book deleted!",
          });
        },
      },
    ]);
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderScreen = () => {
    switch (screen) {
      case "login":
        return <LoginScreen loginHandler={loginHandler} setUsername={setUsername} setPassword={setPassword} />;
      case "bookList":
        return <BookList books={filteredBooks} deleteBook={deleteBook} setSelectedBook={setSelectedBook} setNewBookTitle={setNewBookTitle} setNewBookAuthor={setNewBookAuthor} setScreen={setScreen} setSearchQuery={setSearchQuery} />;
      case "addBook":
        return <AddBook addBook={addBook} setNewBookTitle={setNewBookTitle} setNewBookAuthor={setNewBookAuthor} setScreen={setScreen} />;
      case "editBook":
        return <EditBook updateBook={updateBook} setNewBookTitle={setNewBookTitle} setNewBookAuthor={setNewBookAuthor} setScreen={setScreen} />;
      case "bookDetail":
        return <BookDetail selectedBook={selectedBook} setScreen={setScreen} />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.app}>
      <StatusBar barStyle="light-content" backgroundColor="#FFC8DD" />
      {renderScreen()}
      <Toast />
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: "#FFC8DD",
  },
});

export default App;
