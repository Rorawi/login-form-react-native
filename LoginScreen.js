import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
const LoginScreen = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] =useState("")
  return (
    <View style={styles.container}>
      <View>
        <Text style={[styles.textColor, styles.boldText]}>Log In</Text>
      </View>

      <View style={styles.formView}>
        <TextInput 
        style={styles.formText} 
        placeholderTextColor ="#aaaaaa"
        placeholder="Username" 
        value={email}
        onChangeText={((value)=> {
            setEmail(value)
        })}
        />

        <TextInput 
        style={styles.formText} 
        placeholderTextColor ="#aaaaaa"
        placeholder="Password"
        autoCapitalize='none'
        autoCorrect={false} 
        secureTextEntry={true}
        value={password}
        onChangeText={((value)=> {
            setPassword(value)
            console.log(value);
        })}
        />
        
        <Text style={styles.resetPasswordText}>Forgot password?</Text>
      </View>

      <View>
        <TouchableOpacity style={styles.btnView}>
          <Text style={styles.btnText}>Log In</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.signUpView}>
        <Text style={styles.signUpText}>Don't have an account?</Text>
        <Text style={[styles.textColor, styles.signUpText]}>Sign Up</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
  },
  textColor: {
    color: "#6313bf",
  },

  boldText: {
    fontSize: 60,
    fontWeight: 800,
    marginVertical: 40,
  },
  formView: {
    flexDirection: "column",
    marginVertical: 40,
  },
  formText: {
    color: "grey",
    fontSize: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#6313bf",
    marginBottom: 20,
    paddingBottom: 7,
  },
  resetPasswordText: {
    color: "lightblue",
    fontSize: 14,
    alignSelf: 'flex-end'
  },
  btnView: {
    backgroundColor: "#6313bf",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    borderRadius: 7,
    marginVertical: 40,
  },
  btnText: {
    color: "#fff",
    fontSize: 25,
  },
  signUpView: {
    flexDirection:'row',
    justifyContent: "center",
    alignItems: "center",
  },
  signUpText: {
    fontSize: 17,
    marginRight: 9
  },
});

export default LoginScreen;
