// app/EventDetailScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EventDetailScreen = ({ route }) => {
  const { eventId } = route.params;

  return (
    <View style={styles.container}>
      <Text>Detalhes do Evento {eventId}</Text>
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

export default EventDetailScreen;
