import React from 'react'
import cars from './cars'
import { StyleSheet, Text, View, FlatList, Dimensions } from "react-native";
import CarItem from './CarItem'

const CarList = () => {
  return (
    <View style={styles.container}>
      {/* <CarItem
        name={"Model S"}
        tagline={"Order Online For"}
        taglineCta={"Touchable Delivery"}
        image={require("../assets/images/ModelX.jpeg")}
      /> */}
      <FlatList
        data={cars}
        keyExtractor={(car) => car.name}
        showsVerticalScrollIndicator={false}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
        // legacyImplementation={false}
        // pagingEnabled={true}
        renderItem={({ item }) => <CarItem car={item} />}
      />
    </View>
  );
}

export default CarList;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    // height: '100vh'
  },
});
