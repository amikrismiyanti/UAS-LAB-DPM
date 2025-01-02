import React from "react";
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image } from "react-native";

const LoginScreen = ({ loginHandler, setUsername, setPassword, username, password }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Welcome Back!</Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={loginHandler}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.link}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.link}>Create an Account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFC8DD",
    paddingHorizontal: 20,
  },
  headerContainer: {
    alignItems: "center",
    marginBottom: 50,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2C3E50",
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#FFF",
    borderRadius: 25,
    marginBottom: 15,
    paddingHorizontal: 20,
    fontSize: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    elevation: 5,
  },
  button: {
    backgroundColor: "#F8ABEB",
    width: "100%",
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "bold",
  },
  link: {
    color: "#2C3E50",
    fontSize: 16,
    fontWeight: "500",
    marginTop: 10,
  },
});

export default LoginScreen;
