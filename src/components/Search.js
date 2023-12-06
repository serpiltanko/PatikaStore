import { Dimensions, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

const Search = () => {
  const [text, setText] = useState("");

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Ara..."
        value={text}
        onChangeText={setText}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#ECEFF1",
    width:"90%",
    height: Dimensions.get("window").height / 15,
    margin: 16,
    borderRadius:10,
    padding:10,
  },
});
