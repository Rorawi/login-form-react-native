import React from "react";
import { StyleSheet } from "react-native";
import {  View, Text, Image } from "react-native";
import { MaterialIcons, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';

const Contact = ({name,number,image}) => {
  return (
    <View style={styles.container}>
      <Image source={image} alt="image" style={styles.image}/>
      <View style={styles.details}>
      <Text style={styles.detailsText}>{name}</Text>
      <Text style={styles.detailsSmalltext}>{number}</Text>
      </View>
      <View style={styles.icons}>
      <MaterialIcons name="local-phone" size={30} color="#f36b07" style={styles.icon}/>
      <MaterialCommunityIcons name="message-processing" size={30} color="#f36b07" style={styles.icon}/>
      <SimpleLineIcons name="options-vertical" size={30} color="grey" style={styles.icon}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 20,
        marginVertical: 10,
    },
    image: {
      width: 60,
      height: 60,
      maxHeight: "auto",
      borderRadius: 50,
      borderWidth: 2,
      borderColor: "#e88e4e"
    },

    details: {
        justifyContent: 'center',
        marginLeft: 15,
        marginRight: 35,
        flexDirection: 'column',
        flex: 1
    },

    detailsText: {
        fontSize: 20,
        fontWeight: 800,
        color: '#e88e4e',
    },

    detailsSmalltext: {
        color: '#fff',
    },
    icons:{
        flex: 1,
        flexDirection: 'row'
    },
    icon: {
        justifyContent: "space-around",
        alignSelf: "center",
        marginHorizontal: 5
    }
  });

export default Contact;
