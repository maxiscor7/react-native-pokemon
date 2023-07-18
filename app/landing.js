import { View, Text, Button, StyleSheet, ScrollView } from "react-native"
import { useRouter } from "expo-router"
import { useState, useEffect } from "react"
import CardPokemon from "../components/CardPokemon"


const landing = () => {
    const [urls, setUrls] = useState()
    const router = useRouter()
    const urlsContainer = []

    const getUrls = async () => {
        const urlsPokemons = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20')
            .then(response => response.json())
            .then(res => setUrls(res.results))

    }


    useEffect(() => {
        getUrls()
    }, [])




    return (
        <View style={styles.container}>
            <View style={styles.containerTittle}>
                <Text style={styles.tittle}>Pokemons</Text>
            </View>


            <ScrollView>
                <Text style={styles.containerAllPokemon}>{urls ? urls.map(e =>
                    <CardPokemon key={e.name} name={e.name} url={e.url} />) : ''}</Text>
            </ScrollView>

            <Button onPress={() => router.back()} title='Go back' ></Button>

        </View>
    )
}
export default landing

/*  
<Button onPress={() => router.back()} title='Go back' ></Button>
*/

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ccc'
    },
    containerTittle: {
        backgroundColor: '#f2190a',
        height: 50,
        justifyContent: "center",
    },
    tittle: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    containerAllPokemon: {
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: 'blue',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        textAlign: 'center'
    },

}) 