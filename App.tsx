import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function App() {
  // State to store flexBasis value
  const [flexBasisValue, setFlexBasisValue] = useState<string>("30%");

  // Function to increase flexBasis value
  const increaseFlexBasis = () => {
    const newValue = `${parseInt(flexBasisValue) + 10}%`; // Increase by 10%
    setFlexBasisValue(newValue);
  };

  // Function to decrease flexBasis value
  const decreaseFlexBasis = () => {
    const newValue = `${parseInt(flexBasisValue) - 10}%`; // Decrease by 10%
    setFlexBasisValue(newValue);
  };

  console.log("flexBasisValue", flexBasisValue);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adjust FlexBasis</Text>

      {/* Parent View with 3 children */}
      <View style={styles.row}>
        <View style={[styles.box, { flexBasis: flexBasisValue }]}>
          <Text style={styles.boxText}>Box 1</Text>
        </View>
        <View style={[styles.box, { flexBasis: flexBasisValue }]}>
          <Text style={styles.boxText}>Box 2</Text>
        </View>
        <View style={[styles.box, { flexBasis: flexBasisValue }]}>
          <Text style={styles.boxText}>Box 3</Text>
        </View>
      </View>

      {/* Buttons to increase and decrease flexBasis */}
      <View style={styles.buttonContainer}>
        <Button title="Decrease FlexBasis" onPress={decreaseFlexBasis} />
        <Button title="Increase FlexBasis" onPress={increaseFlexBasis} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    width: "100%",
    marginBottom: 20,
  },
  box: {
    backgroundColor: "lightblue",
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    height: 100,
  },
  boxText: {
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
});
