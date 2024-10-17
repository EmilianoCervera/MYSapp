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
  const [index, setIndex] = useState(0);

  const nextAffirmation = () => {
    setIndex((prevIndex) => (prevIndex + 1) % affirmations.length);
  };

  return (
    <ImageBackground
      source={require('../assets/mockup1.jpg')}
      style={styles.backgroundImage}
      imageStyle={{ resizeMode: 'cover' }}
    >
      <View style={styles.innerContainer}>
        <Text style={styles.affirmationText}>{affirmations[index]}</Text>
        <TouchableOpacity style={styles.button} onPress={nextAffirmation}>
          <Text style={styles.buttonText}>Siguiente</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
    width: '100%',
  },
  innerContainer: {
    width: '90%',
    //backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 20,
    borderRadius: 25,
    alignItems: 'center', 
  },
  affirmationText: {
    fontSize: 24,
    textAlign: 'center',
    color: 'black',
    marginBottom: 150, 
  },
  button: {
    backgroundColor: '#c2da7c',
    padding: 15,
    borderRadius: 25,
    width: '60%', 
    alignItems: 'center', 
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});
