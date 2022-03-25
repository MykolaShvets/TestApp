import React, {useEffect} from 'react';
import {Button, Text, View, StyleSheet, SafeAreaView, ScrollView} from "react-native";
import {useDispatch, useSelector} from "react-redux";

import {getLatestPhoto, changePage} from "../store/photo.slice";
import PhotoListItem from "../components/PhotoListItem";

const PhotosList = ({navigation}) => {

    const {photos, page} = useSelector(state => state['photoReducer'])
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getLatestPhoto(page))
    }, [page]);

    return (<SafeAreaView>
            <ScrollView>
                <View style={style.content}>
                    {photos ? photos.map(photo => <PhotoListItem key={photo.id} photo={photo}
                                                                 navigation={navigation}/>) : <Text>wait</Text>}
                </View>
                <View style={style.btns}>
                    <Button title={'Prev'}
                            disabled={page === 1}
                            onPress={() => dispatch(changePage(page - 1))}/>
                    <Text>{`  ... ${page} ...  `}</Text>
                    <Button title={'Next'}
                            onPress={() => dispatch(changePage(page + 1))}/>
                </View>
            </ScrollView>
        </SafeAreaView>);
};

const style = StyleSheet.create({
    content: {
        display: 'flex', flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "center",
    }, btns: {
        display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center",
    },
})

export default PhotosList;
