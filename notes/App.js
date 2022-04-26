import { StyleSheet, Button, SafeAreaView, TextInput, Text, ScrollView, Alert } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: [
        "Muistiinpano1",
        "Muistiinpano2",
        "Muistiinpano3",
        "Muistiinpano4",
        "Muistiinpano5",
        "Muistiinpano6",
        "Muistiinpano7",
        "Muistiinpano8",
        "Muistiinpano9",
        "Muistiinpano10",
        "Muistiinpano11",
        "Muistiinpano12",
        "Muistiinpano13",
        "Muistiinpano14",
        "Muistiinpano15"
        
      ],
      text: "",
      setText: ""
    }

  }
  createAlert = () => {
    Alert.alert(
      "Added note already exists!",
      "Please write a new note.",
      [{
        text: "OK",
        onPress: () => console.log("noticed.")
      }]
    )
  }

  addNote = (event) => {

    event.preventDefault();
    const noteObject = this.state.setText;

    if (this.state.notes.includes(noteObject)) {
      this.createAlert();
    } else {
      const note = this.state.notes.concat(noteObject);


      this.setState({
        notes: note,
        text: "",
        setText: ""
      })
      console.log(note);
    }
    //this.te
    console.log(this.state.notes);

  }


  DefaultScreen = (props) => {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.contentContainer}>
          {this.state.notes.map(note => <Text style={styles.notes}>{note}</Text>)}

        </ScrollView>
        <Button
          title="Lisää muistiinpano"
          color='#e8bd48'
          style={styles.button}
          onPress={() => props.navigation.navigate("Lisää muistiinpano: ")}
        />
      </SafeAreaView>
    )
  }

  AddScreen = (props) => {
    return (
      <SafeAreaView>
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

      </SafeAreaView>
    )
  }

  render() {

    return (

      <NavigationContainer>
        <Stack.Navigator initialRouteName="Muistikirja: ">
          <Stack.Screen name="Muistikirja: " component={this.DefaultScreen} />
          <Stack.Screen name="Lisää muistiinpano: " component={this.AddScreen} />
        </Stack.Navigator>
      </NavigationContainer>


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
    flex: 2,
    backgroundColor: "#ffe0f5",


  },
  input: {
    backgroundColor: "#fa96da",
    color: "#ffffff",
    borderColor: "#ffffff",
    fontSize: 30,
    textAlign: "center"
  },
  notes: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 25

  },
  button: {
    fontSize:30,
    fontWeight: "bold"
  }
});

export default App