import React from 'react';
import {View, Image} from "react-native";

const Photo = ({route}) => {

    const {photo} = route.params

    return (
        <View>
            <Image style={{width: '100%', height: '100%'}} source={{uri: photo.urls.regular}}/>
        </View>
    );
};


export default Photo;
