import { StyleSheet, Button, SafeAreaView, TextInput, Text, View, Alert } from "react-native";
import React from "react";
import { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { add } from "react-native-reanimated";

let notes =[
  "Note1",
  "Note2",
  "Note3",
  "Note4"
]

export default function App() {
  const [text, setText] = React.useState("");
  //const [notes, setNotes] = useState([]);

  const addNote = () =>{
    notes.push(text.toString());
    console.log(notes);
  }

  


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Muistiinpanot:</Text>
      {notes.map(note=> <Text>{note}</Text>)}
      <TextInput
        placeholder="Muistiinpano"

        onChangeText={(text) => setText(text)}
        keyboardType="default"
        style={styles.input}

      />
      <Button
        title="Lisää muistiinpano"
        color='#f194ff'
        onClick={addNote} 
      />
    </SafeAreaView >
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#98AFC7",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 40,
    color: "#fff",
    marginBottom: 5,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#fff",
    padding: 10,
    width: "80%",
    marginTop: 15,
    color: "#000",
  },
});