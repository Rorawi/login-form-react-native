import { useState } from "react";
 import LoginScreen from "./LoginScreen";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  FlatList,
} from "react-native";
// import ContactScreen from "./ContactScreen";
import Contact from "./components/Contact";
import ContactScreen from "./ContactScreen";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
    "Ama",
    "Kofi",
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.textColor}>CONTACT LIST</Text>
    
      <ContactScreen />
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
    backgroundColor: "#000",
    flex: 1,
    marginTop: 20,
    justifyContent: "center",
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

  textColor: {
    color: "#e88e4e",
    fontSize: 25,
    fontWeight: 900,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default App;

{
  /* <ScrollView>
        {data.map((data) => {
          return (
            <View>
              <Text>{data.name}</Text>
            </View>
          );
        })}
      </ScrollView> */
}
