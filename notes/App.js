import { StyleSheet, Button, SafeAreaView, TextInput, Text, View, Alert } from "react-native";
import { useState } from "react";

export default function App() {
  const [header, setHeader] = useState("");
  const [note, setNote] = useState("");

  var muistiinpanot = []

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Muistiinpanot:</Text>
      <TextInput
        placeholder="Otsikko"
        value={header}
        onChangeText={(text) => setHeader(text)}
        keyboardType="default"
        style={styles.input}
      />
      <TextInput
        placeholder="Muistiinpano"
        value={note}
        onChangeText={(text) => setNote(text)}
        keyboardType="default"
        style={styles.input}
        onSubmitEditing={() => alert("Muistiinpano lisätty")}
        defaultValue={note}
      />

      <Button
        title="Lisää muistiinpano"
        color='#f194ff'
        onPress={() => Alert.alert('Simple Button pressed')}
      />
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#228B22",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 40,
    color: "#fff",
    marginBottom: 20,
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