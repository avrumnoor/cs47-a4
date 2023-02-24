import { Image, StyleSheet, View, SafeAreaView, Text } from "react-native";
import { useSpotifyAuth } from "./utils";
import { Themes } from "./assets/Themes";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import SongList from "./components/SongList";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import 'react-native-gesture-handler';
import HomeScreen from "./screens/HomeScreen";
// import PreviewScreen from "./screens/PreviewScreen";
// import DetailsScreen from "./screens/DetailsScreen";

const Stack = createStackNavigator();

export default function App() {
  // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        {/* <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        <Stack.Screen name="PreviewScreen" component={PreviewScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
