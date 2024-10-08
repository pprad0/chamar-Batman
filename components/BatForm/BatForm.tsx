import React from 'react';
import { Text, TextInput, View } from 'react-native';

import { styles } from './BatFormStyles';

export function BatForm() {
  return (
    <View style={styles.container}>
        <Text>Preencha o chamado:</Text>
        <TextInput placeholder='Qual a emergência ?' />
    </View> 
  );
}