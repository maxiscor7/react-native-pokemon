import { Link, useLocalSearchParams } from "expo-router"
import { useState, useEffect } from "react"
import { View,Image,  Text, StyleSheet, ActivityIndicator } from "react-native"



const pokemon = () => {

    const [poke, setPoke] = useState([])
    const { name } = useLocalSearchParams();

    const getPokemonByName = async () => {
        const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then(response => response.json())
            .then(res => setPoke(res))
    }

    useEffect(() => {
        getPokemonByName()

    }, [name])

    console.log(poke)


    return (
        <View>
            <Text style={styles.header}>{poke.name}</Text>

            {poke.sprites ?

                <Image
                    source={{ uri: `${poke.sprites.front_default}` }} style={styles.imagesPokemon} />
                :
                <ActivityIndicator size="small" color="grey" />}


            <Link href='/landing'>to landing</Link>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'orange'
    },
    imagesPokemon: {
        width: 200, 
        height: 200, 
        marginTop: 10,
        resizeMode: 'contain'
    }
})

export default pokemon