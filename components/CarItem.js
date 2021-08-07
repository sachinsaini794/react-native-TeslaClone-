import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Dimensions } from "react-native";
import Button from './Button';

const CarItem = (props) => {

  const { name, tagline, image, taglineCta } = props.car; 

  return (
    <View style={styles.carContainer}>
      <ImageBackground style={styles.backGroundImage} source={image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subTitle}>
          {tagline} {' '}
          <Text style={styles.taglineCta}>{taglineCta}</Text>
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          type="primary"
          text={"Custom Order"}
          onPress={() => {
            console.warn("custom clicked");
          }}
        />
        <Button
          type="secondary"
          text={"Existing Inventory"}
          onPress={() => {
            console.warn("Existing Inventory clicked");
          }}
        />
      </View>
    </View>
  );
}

export default CarItem;

const styles = StyleSheet.create({
  carContainer: {
    width: "100%",
    height: Dimensions.get("window").height,
  },
  titles: {
    marginTop: "30%",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "600",
  },
  subTitle: {
    fontSize: 16,
    color: "#5c5e62",
  },
  backGroundImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    position: "absolute",
  },
  buttonContainer: {
    width: "100%",
    position: "absolute",
    bottom: 50,
  },
  taglineCta: {
    textDecorationLine: "underline",
  },
});
