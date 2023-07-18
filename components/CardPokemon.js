import { Text, View, StyleSheet, Image, ActivityIndicator } from "react-native"
import { useState, useEffect } from "react"
import { Link } from "expo-router"

const CardPokemon = ({ name, url }) => {

const [ pokemon, setPokemon ] = useState([])

const getPokemon = async () => {
    const pokemonPromise = await fetch(`${url}`)
    .then(response => response.json())
    .then(res => setPokemon(res))
}

useEffect(() => {
    getPokemon()
},[])


    return(
        <Link href={`/pokemon?name=${pokemon.name}`} >
            {pokemon ? 
            <View style={styles.cardContainer}>
                <Text>{pokemon.id}</Text>
                <Text>{pokemon.name}</Text>
                {pokemon.sprites ? 
    
                <Image 
                source={{uri: `${pokemon.sprites.front_default}` }} style={styles.imagesPokemon} />

                 : 

                 <ActivityIndicator size="small" color="grey" /> }
                
            </View>
             : '' }
        </Link>
    )
}
export default CardPokemon

const styles = StyleSheet.create({
    cardContainer : {
        backgroundColor: 'orange',
        height: 200,
        width: 150,
        margin: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    imagesPokemon: {
        width: 100, 
        height: 100, 
        marginTop: 10,
        resizeMode: 'contain'
        
    }
})
