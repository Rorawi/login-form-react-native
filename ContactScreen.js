import React from "react";
import { StyleSheet } from "react-native";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import img4 from "./assets/img4.jpg";
import img5 from "./assets/img5.jpg";
import img6 from "./assets/img6.jpg";
import img7 from "./assets/img7.png";
import { FlatList, View, Text, Image } from "react-native";
import Contact from "./components/Contact";

const ContactScreen = () => {
  const contacts = [
    {
      name: "Pruddy",
      number: "0000 000 000",
      img: img1,
    },
    {
      name: "Amira",
      number: "0200 000 001",
      img: img2,
    },
    {
      name: "Zulfawu",
      number: "0300 000 002",
      img: img3,
    },
    {
      name: "Laura",
      number: "0400 000 003",
      img: img4,
    },
    {
      name: "Debbie",
      number: "0500 000 004",
      img: img5,
    },
    {
      name: "Albie",
      number: "0600 000 005",
      img: img6,
    },
    {
      name: "Wini",
      number: "0600 000 075",
      img: img7,
    },
  ];

  return (
    <View>
      <FlatList
        data={contacts}
        renderItem={({ item }) => {
          return (
            <View>
              {/* <Image source={item.img} alt="image" style={styles.image} />
              <Text>{item.name}</Text>
              <Text>{item.number}</Text> */}
              <Contact name={item.name} number={item.number} image={item.img}/>
            
            </View>
          );
        }}
        keyExtractor={(item, index) => item.number}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    maxHeight: "auto",
    borderRadius: 50,
  },
 
});

export default ContactScreen;
