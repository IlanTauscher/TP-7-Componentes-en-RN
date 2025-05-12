import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, ImageBackground, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';

export default function App() {
  const fondo = require('./assets/Hollow.jpg')
  const perfil = require('./assets/perfil.jpg')

  const [comment, setComment] = useState('');
  const handlePress = () => {
  alert(comment)
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="inverted"/>
        <ImageBackground source={fondo} resizeMode="cover" style={styles.background}>
          <View style={styles.card}>
            <Image source={perfil} style={styles.foto}/>
            <Text style={styles.title}>Hollow Knight</Text>
            <Text style={styles.subtitle}>A Vessel</Text>
            <TextInput style={styles.input} placeholder='Comenta algo' placeholderTextColor="white" onChangeText={setComment}/>
            <TouchableOpacity style={styles.touchableButton} onPress={handlePress}>
              <Text style={styles.touchableText}>Mostrar</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  background: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 30,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  foto:{
    borderRadius: '50%',
    width: 120,
    height: 120,
  },
  title: {
    fontFamily: 'Georgia',
    fontSize: 36,
    color: 'white',
    textAlign: 'center',
    textShadowColor: '#999',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
    letterSpacing: 2,
  },
  subtitle: {
    fontFamily: 'Georgia',
    fontSize: 30,
    color: 'rgba(255, 255, 255, 0.7)',
    textAlign: 'center',
    marginTop: 8,
    fontStyle: 'italic',
  },
  input:{
    width: '90%',
    padding: 15,
    marginTop: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.5)',
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    height: 50, 
  },
  touchableButton: {
    marginTop: 20,
  },
  touchableText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1,
  }
});
