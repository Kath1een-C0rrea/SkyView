import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Pressable } from 'react-native';

export default function About() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>
                    Em nossa comunidade, você pode encontrar:
                </Text>
                <Text style={styles.text}>
                    1. Fóruns de Discussão;
                </Text>
                <Text style={styles.text}>
                    2. Galeria de Fotos;
                </Text>
                <Text style={styles.text}>
                    3. Criações Criativas;
                </Text>
                <Text style={styles.text}>
                    4. Eventos e Encontros.
                </Text>
                <Image
                    source={require('../assets/about.jpg')}
                    style={styles.image}
                />
                <Pressable style={styles.button} onPress={() => console.log("Consulte nossa equipe")}>
                    <Text style={styles.buttonText}>CONSULTE A NOSSA EQUIPE</Text>
                </Pressable>
            </View>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F2E8FB',
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    title: {
        fontSize: 24, 
        fontWeight: 'bold',
        marginBottom: 20, 
        textAlign: 'center',
        color: '#4F148C', 
    },
    text: {
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'center',
        marginBottom: 10, 
    },
    image: {
        width: 200,
        height: 200,
        marginTop: 20,
        borderRadius: 10, 
    },
    button: {
        backgroundColor: '#4F148C',
        paddingHorizontal: 20,
        paddingVertical: 12, 
        marginTop: 20,
        borderRadius: 5,
        marginBottom: 20, 
        elevation: 3, 
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
