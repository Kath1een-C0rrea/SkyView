import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function Home() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>
                Cansado de mirabolar sobre o universo físico, sozinho? 
            </Text>
            <Image
                source={require('../assets/univ.png')}
                style={styles.image}
            />
            <Text style={styles.text}>
                Descubra onde entusiastas do cosmos se reúnem para compartilhar suas paixões, experiências e descobertas. 
                Aqui, você encontrará um espaço acolhedor e inspirador para se conectar com outros exploradores do universo, 
                trocar ideias e celebrar o fascínio pelo cosmos.
            </Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 20,
        backgroundColor: '#F2E8FB',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#4F148C',
    },
    image: {
        width: 200,
        height: 200, 
        marginBottom: 20,
        borderRadius: 10,
    },
    text: {
        textAlign: 'justify',
        fontSize: 16,
        lineHeight: 24,
        color: '#333333',
    },
});
