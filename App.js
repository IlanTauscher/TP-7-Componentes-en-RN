import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, ImageBackground, Text, View, Image, TextInput, TouchableOpacity, Pressable, KeyboardAvoidingView, Platform, ScrollView} from 'react-native';

export default function App() {
  const fondo  = require('./assets/Hollow.jpg');
  const perfil = require('./assets/perfil.jpg');

  const [comment, setComment] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const textColor = darkMode ? 'black' : 'white';
  const label     = darkMode ? 'Claro'  : 'Oscuro';

  const handlePress = () => alert(comment);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="inverted"/>
      <Pressable onPress={() => setDarkMode(prev => !prev)} style={styles.toggleButton}>
        <Text style={[styles.changeText, { color: label === 'Claro' ? 'white' : textColor }]}>{label}</Text>
      </Pressable>
      <KeyboardAvoidingView style={styles.flex} behavior={Platform.OS === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}>
        <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
          <ImageBackground source={fondo} resizeMode="cover" style={styles.background}>
            <View style={styles.card}>
              <Image source={perfil} style={styles.foto} />
              <Text style={[styles.title, { color: textColor }]}>Hollow Knight</Text>
              <Text style={[styles.subtitle, { color: textColor }]}>A Vessel</Text>
              <TextInput style={styles.input} placeholder="Comenta algo" placeholderTextColor="white" onChangeText={setComment} value={comment}/>
              <TouchableOpacity style={styles.touchableButton} onPress={handlePress}>
                <Text style={[styles.touchableText, { color: textColor }]}>Mostrar</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: '#000'
  },
  toggleButton: {
    alignSelf: 'flex-end',
    marginTop: 10,
    marginRight: 20
  },
  changeText: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  background: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: {
    width: '85%',
    backgroundColor: 'rgba(0,0,0,0.7)',
    padding: 30,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  foto: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20
  },
  title: {
    fontFamily: 'Georgia',
    fontSize: 36,
    textAlign: 'center',
    textShadowColor: '#999',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
    letterSpacing: 2
  },
  subtitle: {
    fontFamily: 'Georgia',
    fontSize: 30,
    textAlign: 'center',
    marginTop: 8,
    fontStyle: 'italic'
  },
  input: {
    width: '100%',
    height: 50,
    marginTop: 20,
    padding: 15,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.5)',
    color: 'white',
    fontSize: 16,
    textAlign: 'center'
  },
  touchableButton: {
    width: '100%',
    marginTop: 20,
    padding: 15,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 10,
    alignItems: 'center'
  },
  touchableText: {
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1
  }
});