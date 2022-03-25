import {Provider} from "react-redux";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import PhotosList from "./src/screens/PhotosList";
import Photo from "./src/screens/Photo";
import store from "./src/store/store.config";


const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName={'PhotosList'}>
                    <Stack.Screen name={'PhotosList'} component={PhotosList} options={{title: 'Latest Photos' }} />
                    <Stack.Screen name={'Photo'} component={Photo}/>
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
