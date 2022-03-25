import React from 'react';
import {Image, StyleSheet, Text, View, TouchableHighlight} from "react-native";

const PhotoListItem = ({photo, navigation}) => {

    const {id, user, urls} = photo;
    const {first_name} = user;

    return (<View style={styles.container}>
        <TouchableHighlight onPress={() => navigation.push('Photo', {photo})}>
            <Image style={styles.img} source={{uri: urls.small}}/>
        </TouchableHighlight>
        <Text>{id}</Text>
        <Text>By User: {first_name}</Text>
    </View>);
};

const styles = StyleSheet.create({
    container: {
        margin: 10,
    }, img: {
        width: 150, height: 150,
    },
});

export default PhotoListItem;
