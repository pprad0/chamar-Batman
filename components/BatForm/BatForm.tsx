import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";


type BatFormProps = {
  toggleComponent: () => void;
};

const BatForm: React.FC<BatFormProps> = ({ toggleComponent }) => {
  // export function BatForm() {
  return (
    <View
      style={{
        backgroundColor: "rgb(250, 232, 47)",
        height: "100%",
        alignItems: "center",
      }}
    >
      <View>
        <Text style={{ fontWeight: "bold" }}>
          Qual o motivo de chamar o Batman ?
        </Text>
        <TextInput
          style={{
            borderWidth: 2,
            borderColor: "gray",
            backgroundColor: "white",
          }}
        />
      </View>
      <TouchableOpacity
        onPress={toggleComponent}
        style={{
          width: "40%",
          alignItems: "center",
          borderColor: "black",
          borderWidth: 3,
          borderRadius: 8,
          margin: 5,
          padding: 5,
        }}
      >
        <Text style={{ fontWeight: "bold" }}>Chamar o Homi</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={toggleComponent}
        style={{
          width: "40%",
          alignItems: "center",
          borderColor: "black",
          borderWidth: 3,
          borderRadius: 8,
          margin: 15,
          padding: 5,
        }}
      >
        <Text style={{ fontWeight: "bold" }}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BatForm;
