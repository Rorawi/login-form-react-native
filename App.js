import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import LoginScreen from "./LoginScreen";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  FlatList
} from "react-native";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   'Ama',
   'Kofi',
   
  ]);

  return (
    <View style={styles.container}>
      <LoginScreen/>
      {/* <FlatList
      data={data}
      renderItem={({item})=> {
        return <Text>{item}</Text>
      }}
      keyExtractor={(data,index)=>index}
      /> */}
     






















      {/* <TextInput
        style={styles.input}
        placeholder="email here"
        autoCapitalize="none"
        autoCorrect={false}
        value={email}
        //secureTextEntry={true}
        onChangeText={(email) => {
          setEmail(email);
          console.log(email);
        }}
      />

      <TextInput
        style={styles.input}
        placeholder="Password here"
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        secureTextEntry={true}
        onChangeText={(password) => {
          setPassword(password);
          console.log(password);
        }}
      />

      <TouchableOpacity style={styles.btnContainer}>
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
  },
  input: {
    backgroundColor: "dodgerblue",
    color: "white",
    height: 60,
    marginLeft: 15,
    marginBottom: 10,
  },
  btnContainer: {
    height: 40,
    backgroundColor: "green",
    marginHorizontal: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  btnText: {
    fontSize: 20,
    color: "white",
  },
});

export default App;


{/* <ScrollView>
        {data.map((data) => {
          return (
            <View>
              <Text>{data.name}</Text>
            </View>
          );
        })}
      </ScrollView> */}