import * as React from 'react';
import { Text, View, Button, ActivityIndicator, TextInput, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const NotesList = () => {
  return (
    <View>
      <Text>Notes Screen</Text>
    </View>
  );
}

const MenuScreen = () => {
  return (
    <View>
      <Text>Menu Screen</Text>
    </View>
  );
}

const AdminScreen = () => {
  return (
    <View>
      <Text>Admin Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Notes">
        <Stack.Screen name="Notes" component={NotesList} />
        <Stack.Screen name="Menus" component={MenuScreen} />
        <Stack.Screen name="Admin" component={AdminScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
