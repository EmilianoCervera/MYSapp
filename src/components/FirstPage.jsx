import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';

// Lista de afirmaciones
const affirmations = [
  "Eres capaz de lograr todo lo que te propones.",
  "Hoy será un gran día.",
  "Tu esfuerzo vale la pena.",
  "El éxito está en tu camino.",
  "Crees en ti mismo y en tus habilidades."
];

export const FirstPage = () => {
  const [index, setIndex] = useState(0); // Estado para el índice de la afirmación actual

  // Cambiar a la siguiente afirmación
  const nextAffirmation = () => {
    setIndex((prevIndex) => (prevIndex + 1) % affirmations.length);
  };

  return (
    <ImageBackground 
      source={require('../assets/mockup1.jpg')} // Asegúrate de cambiar la ruta a tu imagen
      style={styles.container}
      imageStyle={{ resizeMode: 'cover' }} // Asegurarte de que la imagen cubra todo el fondo
    >
      <View style={styles.innerContainer}>
        <Text style={styles.affirmationText}>{affirmations[index]}</Text>
        <TouchableOpacity style={styles.button} onPress={nextAffirmation}>
          <Text style={styles.buttonText}>Siguiente Afirmación</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1, // Permite que el innerContainer ocupe todo el espacio disponible
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Fondo blanco semi-transparente para el texto
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 25,
    margin: 5,
  },
  affirmationText: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
    color: 'black',
    paddingHorizontal: 10, // Para evitar que el texto toque los bordes
  },
  button: {
    backgroundColor: '#6200EE', // Color del botón
    padding: 15,
    borderRadius: 25,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});
