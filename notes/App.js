import { StyleSheet, Button, SafeAreaView, TextInput, Text, View, Alert, ActivityIndicator,ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { add } from "react-native-reanimated";



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: [
        "Note1",
        "Note2",
        "Note3",
        "Note4"
      ],
      text: "",
      setText: ""
    }

  }

  addNote = (event) => {

    event.preventDefault();
    const noteObject = this.state.setText;
    const note = this.state.notes.concat(noteObject);

    this.setState({
      notes: note,
      text: "",
      setText: ""
    })
    console.log(note);
    console.log(this.state.notes);

  }


  render() {

    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Muistiinpanot:</Text>
        {this.state.notes.map(note => <Text>{note}</Text>)}
        <TextInput
          placeholder="Muistiinpano"

          onChangeText={(newText) => this.setState({ setText: newText })}
          keyboardType="default"
          style={styles.input}

        />
        <Button
          title="Lisää muistiinpano"
          color='#f194ff'
          onPress={this.addNote}
        />
      </SafeAreaView >
    );
  }
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

export default App