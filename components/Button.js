import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'

const Button = (props) => {
  const { type, text, onPress } = props;

  const backGroundColor = type === 'primary' ? "#171A20CC" : "#FFFFFFA6";
  const textColor = type === "primary" ? "#FFFFFF" : "#171A20";

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor: backGroundColor }]}
        onPress={onPress}
      >
        <Text style={[styles.text, { color: textColor }]}>{text}</Text>
      </Pressable>
    </View>
  );
}

export default Button;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
  },
  button: {
    backgroundColor: "#fff",
    borderRadius: 20,
    // height: 40,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
    textTransform: 'uppercase'
  },
});
