import { Image, StyleSheet, SafeAreaView, FlatList, Text } from "react-native";
import { Themes } from "../assets/Themes";
import { millisToMinutesAndSeconds } from "../utils";
const SongComponent = ({ item, index }) => {
  let url_image = item.imageUrl;
  return (
    <SafeAreaView>
      <Text style={styles.songText} numberOfLines={1}>
        {index + 1}
      </Text>
      <Text style={styles.songText} numberOfLines={1}>
        {item.songTitle}
      </Text>
      <Text style={styles.artistText} numberOfLines={1}>
        {item.songArtists[0].name}
      </Text>
      <Image source={{ uri: url_image }} style={styles.albumArtStyle} />
      <Text style={styles.songText} numberOfLines={1}>
        {item.albumName}
      </Text>
      <Text style={styles.songText} numberOfLines={1}>
        {millisToMinutesAndSeconds(item.duration)}
      </Text>
      {/* <Text style={styles.songText}>{item.songArtists}</Text>
            <Text style={styles.songText}>{item.albumName}</Text> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  songText: {
    color: "white",
  },
  artistText: {
    color: Themes.colors.gray,
  },
  albumArtStyle: {
    width: 200,
    height: 200,
  },
});
export default SongComponent;
