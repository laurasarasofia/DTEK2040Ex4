import { StyleSheet, Button, SafeAreaView, TextInput, Text, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from 'react';



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: [
        "Note1",
        "Note2",
        "Note3",
        "Note4",
        "Note2",
        "Note3",
        "Note4",
        "Note2",
        "Note3",
        "Note4",
        "Note2",
        "Note3",
        "Note4",
        "Note4",
        "Note2",
        "Note3",
        "Note4",
        "Note4",
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
        <ScrollView style={styles.contentContainer}>
          {this.state.notes.map(note => <Text style={styles.notes}>{note}</Text>)}
        </ScrollView>
        <TextInput
          placeholder="muistiinpano"

          onChangeText={(newText) => this.setState({ setText: newText })}
          keyboardType="default"
          style={styles.input}
          

        />
        <Button
          title="Lisää muistiinpano"
          color='#e8bd48'
          onPress={this.addNote}
        />

      </SafeAreaView >
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fa96da",


  },
  title: {
    textAlign: "center",
    fontSize: 40,
    color: "#e8bd48",
    marginBottom: 5,
    fontWeight: "bold",
  },
  contentContainer: {
    textAlign: "center",
    flex:2,
    backgroundColor: "#ffe0f5",
    alignSelf: "space-around"

  },
  input: {
    backgroundColor: "#fa96da",
    color: "#ffffff",
    borderColor: "#ffffff",
    fontSize: 30,
    textAlign: "center"
  },
  notes:{
    color:"#ffffff",
    fontWeight: "bold",
    fontSize: 25

  }
});

export default App