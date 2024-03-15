import React from 'react';
import { View, Text, StyleSheet, Image, Pressable, ScrollView } from 'react-native';

export default function Info2({ navigation }) {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Image source={require('../assets/comp.png')} style={styles.headerImage} />
                <Text style={styles.text}>
                    Para compartilhar um blog, copie o link e compartilhe em redes sociais, por e-mail, mensagens, 
                    grupos online ou plataformas de compartilhamento de conteúdo. Sempre respeite as políticas de 
                    compartilhamento de cada plataforma e inclua uma breve descrição para aumentar o interesse dos leitores.
                </Text>
                <View style={styles.iconsContainer}>
                    <Pressable onPress={() => console.log("Compartilhar via WhatsApp")}>
                        <Image source={require('../assets/wpp.png')} style={styles.icon} />
                    </Pressable>
                    <Pressable onPress={() => console.log("Compartilhar via Instagram")}>
                        <Image source={require('../assets/insta.png')} style={styles.icon} />
                    </Pressable>
                    <Pressable onPress={() => console.log("Compartilhar via GitHub")}>
                        <Image source={require('../assets/git.png')} style={styles.icon} />
                    </Pressable>
                </View>
                <Pressable style={styles.button} onPress={() => navigation.goBack()}>
                    <Text style={styles.buttonText}>VOLTAR</Text>
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
        paddingHorizontal: 20,
        backgroundColor: '#F2E8FB',
    },
    headerImage: {
        width: '100%',
        height: 250,
        marginBottom: 50, 
        resizeMode: 'cover',
    },
    text: {
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'justify',
        marginBottom: 20,
    },
    iconsContainer: {
        flexDirection: 'row',
        marginVertical: 20,
    },
    icon: {
        width: 50,
        height: 50,
        marginHorizontal: 10,
    },
    button: {
        backgroundColor: '#4F148C',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 10, 
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
});
