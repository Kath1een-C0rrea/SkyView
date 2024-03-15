import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';

export default function Feed() {
    const images = [
        { id: 1, uri: require('../assets/img1.jpg') },
        { id: 2, uri: require('../assets/img2.jpg') },
        { id: 3, uri: require('../assets/img3.jpg') },
        { id: 4, uri: require('../assets/img4.jpg') },
        { id: 5, uri: require('../assets/img5.jpg') },
        { id: 6, uri: require('../assets/img6.jpg') },
    ];

    const renderImageItem = ({ item }) => (
        <View style={styles.imageContainer}>
            <Image source={item.uri} style={styles.image} />
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Veja o que nossos entusiastas têm compartilhado:</Text>
            <FlatList
                data={images}
                renderItem={renderImageItem}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                contentContainerStyle={styles.flatListContent}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2E8FB',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#4F148C', 
    },
    flatListContent: {
        alignItems: 'center',
    },
    imageContainer: {
        margin: 10,
        borderRadius: 10,
        overflow: 'hidden',
        elevation: 3, 
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 10,
    },
});
