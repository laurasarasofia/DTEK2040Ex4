import { StyleSheet, Button, SafeAreaView, TextInput, Text, View, Alert } from "react-native";
import { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const [text, setText] = useState("");
  const [notes, setNotes] = useState("");
  const [timesPressed, setTimesPressed] = useState(0);

  let textLog = '';
  if (timesPressed > 1) {
    textLog = timesPressed + 'x onPress';
  } else if (timesPressed > 0) {
    textLog = 'onPress';
  }





  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Muistiinpanot:</Text>
      <TextInput
        placeholder="Muistiinpano"

        onChangeText={(text) => setText(text)}
        keyboardType="default"
        style={styles.input}

        
      />
      

      <Button
        title="Lisää muistiinpano"
        color='#f194ff'
        onPress={() =>  {this.setNotes({
          notes:[this.state.notes, this.state.text]})}}
      />
      <Text>
        {notes}
      </Text>

    </SafeAreaView >
  );
}
const Stack = createStackNavigator();
const App = () =>{
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen> name ="Notes" component= {HomeScreen}</Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
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