import { View, Text, Button, StyleSheet, ScrollView, TouchableOpacity } from "react-native"
import { useRouter } from "expo-router"
import { useState, useEffect } from "react"
import CardPokemon from "../components/CardPokemon"


const landing = () => {
    const [urls, setUrls] = useState()
    
    const [ pages, setPages ] = useState({
        next: '',
        previous: null
    })
    const [offSet, setOffSet] = useState(0)
    
    const [pagination, setPagination] = useState([1, 2, 3, 4])

    const router = useRouter()
    

    const getUrls = async () => {
        const urlsPokemons = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offSet}&limit=20`)
            .then(response => response.json())
            .then(res => {
                setUrls(res.results)
                setPages({next: res.next, previous: res.previous})
                console.log(res)
            })

    }

    const prevButton = () => {
        setOffSet(offSet - 20)
        getUrls()
    }
    const nextButton = () => {
        setOffSet(offSet + 20)
        getUrls()
    }


    useEffect(() => {
        getUrls()
    }, [offSet])

    console.log('aca pagination: ', pagination)    


    return (
        <View style={styles.container}>
            <View style={styles.containerTittle}>
                <Text style={styles.tittle}>Pokemons</Text>
            </View>

            <View style={styles.containerButtons}>
                {pages.previous !== null ?
                <TouchableOpacity style={styles.buttonPages} onPress={prevButton}>
                    <Text style={{color: 'white'}}>Prev</Text>
                </TouchableOpacity>
                : 
                <TouchableOpacity style={styles.buttonPagesDisable} disabled={true}>
                    <Text style={{color: '#707070'}}>Prev</Text>
                </TouchableOpacity>}

                {
                    pagination.map((e, i) => {
                        return(
                            <TouchableOpacity key={i} style={styles.buttonPaginationNum}>
                                <Text style={{color: 'white'}}>{e}</Text>
                            </TouchableOpacity>
                        )
                    })
                }

                {pages.next !== null ?
                <TouchableOpacity style={styles.buttonPages} onPress={nextButton}>
                    <Text style={{color: 'white'}}>Next</Text>
                </TouchableOpacity>
                : 
                <TouchableOpacity style={styles.buttonPagesDisable} disabled={true}>
                    <Text style={{color: '#707070'}}>Next</Text>
                </TouchableOpacity>}
            </View>
            <ScrollView>
                <Text style={styles.containerAllPokemon}>
                    {urls ? 
                    urls.map(e =>
                    <CardPokemon key={e.name} name={e.name} url={e.url} />
                    ) : ''}
                </Text>
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
    containerButtons: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        
    },
    buttonPages: {
        alignItems: 'center',
        justifyContent: 'center',   
        backgroundColor: '#232423',
        width: 60,
        height: 30
    },
    buttonPagesDisable:{
        alignItems: 'center',
        justifyContent: 'center',   
        backgroundColor: '#4f4f4f',
        width: 60, 
        height: 30
    },
    buttonPaginationNum: {
        width: 30, 
        height: 30,
        backgroundColor: '#232423',
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center', 
    }

}) 