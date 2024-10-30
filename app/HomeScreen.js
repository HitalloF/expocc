// app/HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const handleGoToEventDetail = () => {
    navigation.navigate('EventDetail', { eventId: 1 });
  };

  return (
    <View style={styles.container}>
      <Text>Home Screen - Lista de Eventos</Text>
      <Button title="Ver Detalhes do Evento" onPress={handleGoToEventDetail} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default HomeScreen;
