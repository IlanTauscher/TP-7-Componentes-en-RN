import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, ImageBackground, Text} from 'react-native';

export default function App() {
  const fondo = require('./assets/Hollow.jpg')
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="inverted"/>
        <ImageBackground source={fondo} resizeMode="cover" style={styles.background}>
          <Text style={styles.title}>Hollow Knight</Text>
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
});
