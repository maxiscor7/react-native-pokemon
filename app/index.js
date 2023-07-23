import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import { Link } from "expo-router";


export default function Page() {

  return (
    
      <ImageBackground source={require('../assets/images/pokImg.jpg')} style={styles.container}>
        <View style={styles.main}>
          <Image source={require('../assets/images/pokeLog.png')} style={styles.imageLogo} />
          <Image source={require('../assets/images/pokeBall.png')} style={styles.pokeBall} />
          <Link href="/landing" style={styles.buttom} >
            Go
          </Link>
        </View>
      </ImageBackground>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  
  buttom: {
    width: 30,
    height: 30,
    alignSelf: 'center',
    textAlign: 'center',
    borderRadius: 60,
    textAlignVertical: 'center',
    backgroundColor: 'red',
    color: '#fff',
    position: 'absolute',
    left: -9,
    bottom: 343
  },
  imageLogo: {
    height: 100, 
    width: 500,
    position: 'absolute',
    top: 70,
    left: -250
  },
  pokeBall:{
    height: 150,
    width: 150,
    position: 'absolute',
    left: -70
  }
  
});
