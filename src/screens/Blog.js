import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

export default function Blog({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Quer ser um entusiasta também? Participe fazendo e compartilhando postagens!</Text>
            <Pressable style={styles.button} onPress={() => navigation.navigate("Info1")}>
                <Text style={styles.buttonText}>CRIE SEU BLOG</Text>
            </Pressable>
            <Pressable style={[styles.button, { marginTop: 20 }]} onPress={() => navigation.navigate("Info2")}>
                <Text style={styles.buttonText}>COMPARTILHE</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F2E8FB',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center',
        color: '#4F148C',
    },
    button: {
        paddingVertical: 15,
        paddingHorizontal: 50,
        backgroundColor: '#4F148C',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        elevation: 3,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
