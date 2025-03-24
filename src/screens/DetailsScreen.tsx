import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, Image, ActivityIndicator, ScrollView } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";
import { getPokemonDetails } from "../services/pokemonService";

type Props = NativeStackScreenProps<RootStackParamList, 'DetailsScreen'>

interface Pokemon {
    name: string;
    height: number;
    weight: number;
    sprites: {
      front_default: string;
    };
    types: {
      slot: number;
      type: {
        name: string;
      };
    }[];
  }
  

const DetailsScreen: React.FC<Props> = ({ route, navigation }) => {
    const { name } = route.params;
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
            const data = await getPokemonDetails(name);
            setPokemon(data);
            } catch (error) {
            console.error('Erro ao buscar detalhes do Pokémon:', error);
            } finally {
            setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) {
        return (
            <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" color="#FFCB05" />
            </View>
        );
    }

    if (!pokemon) {
        return (
            <View style={styles.loaderContainer}>
            <Text>Erro ao carregar dados.</Text>
            </View>
        );
    }

    return (
    <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>{pokemon.name.toUpperCase()}</Text>
        <Image
        source={{ uri: pokemon.sprites.front_default }}
        style={styles.image}
        />
        <Text style={styles.info}>Altura: {pokemon.height}</Text>
        <Text style={styles.info}>Peso: {pokemon.weight}</Text>
        <Text style={styles.info}>
        Tipos: {pokemon.types.map(t => t.type.name).join(', ')}
        </Text>
    </ScrollView>
    );
}

export default DetailsScreen;


const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#F8F8F8',
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      marginBottom: 20,
      color: '#333',
    },
    image: {
      width: 150,
      height: 150,
      marginBottom: 20,
    },
    info: {
      fontSize: 18,
      marginBottom: 10,
      color: '#555',
    },
    loaderContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });