import React from 'react';
import { Image, StyleSheet } from 'react-native';
import frogImage from '@/assets/images/Frog.png'; // Import your frog image

const FrogIcon: React.FC = () => {
  return (
    <Image source={frogImage} style={styles.frogIcon} />
  );
};

const styles = StyleSheet.create({
  frogIcon: {
    width: 50, // Adjust the width and height as needed
    height: 50,
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

export default FrogIcon;