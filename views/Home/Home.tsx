import React, { useState } from "react";

import { styles } from "./HomeStyles";
import { SignalButton } from "../../components/SignalButton/SignalButton";
import { StatusBar } from "expo-status-bar";
import { BatForm } from "../../components/BatForm/BatForm";
import { Button, Switch, Text, TouchableOpacity, View } from "react-native";

// const handleHomeButton = () => {
//   const [toggle, setToggle] = useState();

// }

export const Home = () => {
  const [showButton, setShowButton] = useState(true);
  const [showFirstComponent, setShowFirstComponent] = useState(true);

  const toggleComponent = () => {
    setShowFirstComponent(!showFirstComponent);
    setShowButton(false); // Esconde o botão ao clicar
  };

  return (
    <View style={{ backgroundColor: showFirstComponent ? 'black' : 'white', height: '100%' }}>

    <View style={styles.container}>
      {showFirstComponent ? <SignalButton /> : <BatForm />}

      {showButton && (
        <TouchableOpacity style={styles.buttonChamarBatman} onPress={toggleComponent}>
          <Text style={styles.textoButtonChamarBatman}>
            CHAMAR HOMEM-MORCEGO
          </Text>
        </TouchableOpacity>
      )}
    </View>

    </View>
    
  );
};
