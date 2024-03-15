import React from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';

export default function Info1({ navigation }) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Como criar um blog de sucesso:</Text>
            <View style={styles.listContainer}>
                <Text style={styles.listItem}>
                    1. Escolha um tema ou design: Personalize a aparência do seu blog com um tema atraente e responsivo.
                </Text>
                <Text style={styles.listItem}>
                    2. Crie conteúdo de qualidade: Escreva posts interessantes e relevantes para o seu público-alvo.
                </Text>
                <Text style={styles.listItem}>
                    3. Otimize para mecanismos de busca (SEO): Use palavras-chave relevantes, meta descrições e tags para
                    otimizar seu conteúdo para mecanismos de busca, o que ajudará a aumentar a visibilidade do seu blog.
                </Text>
                <Text style={styles.listItem}>
                    4. Promova seu blog: Compartilhe seus posts nas mídias sociais, participe de comunidades online
                    relacionadas ao seu nicho e considere investir em publicidade para aumentar o tráfego para o seu blog.
                </Text>
                <Text style={styles.listItem}>
                    5. Engaje com seu público: Responda aos comentários dos leitores, incentive a participação e construa
                    relacionamentos com seus seguidores.
                </Text>
                <Text style={styles.listItem}>
                    6. Monetize seu blog (opcional): Se desejar, explore opções de monetização, como publicidade, marketing
                    de afiliados, vendas de produtos digitais ou assinaturas pagas.
                </Text>
                <Text style={styles.listItem}>
                    7. Mantenha seu blog atualizado: Continue criando conteúdo regularmente e mantenha seu blog atualizado
                    com as últimas informações e tendências do seu nicho.
                </Text>
            </View>
            <Pressable style={styles.button} onPress={() => navigation.goBack()}>
                <Text style={styles.buttonText}>VOLTAR</Text>
            </Pressable>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingVertical: 20,
        paddingHorizontal: 20,
        backgroundColor: '#F2E8FB',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#4F148C',
    },
    listContainer: {
        alignSelf: 'stretch',
    },
    listItem: {
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 10,
        textAlign: 'justify',
        paddingHorizontal: 10, 
    },
    button: {
        backgroundColor: '#4F148C',
        paddingVertical: 12,
        paddingHorizontal: 20,
        marginTop: 20,
        borderRadius: 5,
        alignSelf: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        textAlign: 'center', 
        fontWeight: 'bold',
    },
});
