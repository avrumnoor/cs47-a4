import { Image, StyleSheet, View, SafeAreaView, Text } from "react-native";
import { useSpotifyAuth } from "../utils";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import SongList from "../components/SongList";
import { Themes } from "../assets/Themes";

export default function HomeScreen() {
  // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
  const { token, tracks, getSpotifyAuth } = useSpotifyAuth();
  // console.log("token", token);
  // console.log("tracks", tracks);

  let contentDisplayed = null;
  if (token) {
    contentDisplayed = (
      <SafeAreaView>
        <View style={styles.toptracks}>
          <Image
            source={require("../assets/spotify-logo.png")}
            style={styles.ImageIconStyle}
          />
          <Text style={styles.logoText}> My Top Tracks</Text>
        </View>
        <SongList tracks={tracks} />
      </SafeAreaView>
    );
  } else {
    contentDisplayed = (
      <Pressable style={styles.authButton} onPress={getSpotifyAuth}>
        <Image
          source={require("../assets/spotify-logo.png")}
          style={styles.ImageIconStyle}
        />
        <Text style={styles.authText}> CONNECT WITH SPOTIFY</Text>
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
  authButton: {
    backgroundColor: Themes.colors.spotify,
    padding: 12,
    borderRadius: 99999,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  authText: {
    color: "white",
    textAlign: "right",
  },
  toptracks: {
    padding: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  ImageIconStyle: {
    width: 30,
    height: 30,
  },
  logoText: {
    color: "white",
    fontWeight: "bold",
    fontSize: "30%",
  },
});
