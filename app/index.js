import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Link } from "expo-router";

export default function Page() {

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Hello There</Text>
        <Text style={styles.subtitle}>Welcome to the Pokemon world</Text>

        <Link href="/landing" style={styles.buttom} >
          Search pokemon
        </Link>
      </View>
    </View>
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
  subtitle: {
    fontSize: 36,
    color: "#38434D",
    alignSelf: 'center',
    
  },
  buttom: {
    /*
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    */
    width: 130,
    alignSelf: 'center',
    textAlign: 'center',
    height: 30,
    textAlignVertical: 'center',
    backgroundColor: 'red',
    color: '#fff',
    marginTop: 20,
    borderRadius: 5

  },
  textButtom: {

  }
});
