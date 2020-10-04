import React from "react";
import { Text, View, Button, Image, Platform } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import HomeBanner from "../components/HomeBanner";
import HomeCategory from "../components/HomeCategory";

const Home = ({ navigation }) => {
  return (
    <ScrollView>
        <HomeBanner/>
        <HomeCategory id={49} title={"#dirumahaja"} />
        <HomeCategory id={45} title={"Best Seller"} />
    </ScrollView>
  );
};

export default Home;
