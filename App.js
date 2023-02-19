import { StyleSheet, SafeAreaView, Text } from "react-native";
import { useSpotifyAuth } from "./utils";
import { Themes } from "./assets/Themes";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import SongList from "./components/SongList";

export default function App() {
  // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
  const { token, tracks, getSpotifyAuth } = useSpotifyAuth();
  console.log("token", token);
  console.log("tracks", tracks);

  let contentDisplayed = null;
  if (token) {
    contentDisplayed = <SongList tracks={tracks} />;
  } else {
    contentDisplayed = (
    <Pressable style ={styles.authButton} onPress={getSpotifyAuth}>
      <Text style={styles.authText}>Connect with Spotify</Text>
    </Pressable>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      {/* TODO: Your code goes here */}
      {/* <Text onPress={getSpotifyAuth}>Fetch</Text> */}
      {contentDisplayed}
      {/* <Text style={{ color: "white" }}>Welcome to Assignment 3 - Spotify!</Text> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  authButton:
  {
    backgroundColor: Themes.colors.spotify,
    padding: 12,
    borderRadius: 99999,
  },
  authText:
  {
    color: "white"
  },
});
