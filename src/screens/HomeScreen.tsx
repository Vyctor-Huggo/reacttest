import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { getPokemons } from '../services/pokemonService';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';



interface Pokemon {
    id: number;
    name: string;
    url: string;
}

export default function HomeScreen() {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'HomeScreen'>>();

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getPokemons();
    
                const pokemonsWithId = data.results.map((pokemon: Pokemon) => {
                    const id = pokemon.url.split('/')[6]; // extrai o ID da URL
                    return { ...pokemon, id };
                });
    
                setPokemons(pokemonsWithId);
            } catch (err) {
                console.error('Erro ao buscar Pokémons', err);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);
    

    if(loading) {
        return (
            <View style={styles.centered}>
                <ActivityIndicator size="large" color="#FF0000"/>
            </View>
        );
    }

    return (
        <FlatList
            data={pokemons}
            keyExtractor={(item) => item.name}
            contentContainerStyle={styles.list}
            renderItem={({ item }) => (
                <TouchableOpacity
                    style={styles.card}
                    onPress={() => navigation.navigate('DetailsScreen', { name: item.name })}>
                        
                    {/* Imagem do Pokémon */}
                    <Image
                        source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${item.id}.png` }}
                        style={styles.image}
                    />

                    <View style={styles.row}>
                        <Text style={styles.name}>{item.name.toUpperCase()}</Text>
                        <Text style={styles.name}>{item.id}</Text>
                    </View>
                </TouchableOpacity>
            )}
        />
    );
}


const styles = StyleSheet.create({
    centered: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },          
    list: {
      padding: 16,
    },
    card: {
      backgroundColor: '#EEE',
      padding: 16,
      marginBottom: 12,
      borderRadius: 8,
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center',
    },
    name: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        marginBottom: 10,
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        gap: 10,
    }
});