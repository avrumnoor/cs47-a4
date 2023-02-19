import {StyleSheet, SafeAreaView, FlatList, Text} from 'react-native';
const SongComponent = ({item}) => {
    return (
        <SafeAreaView>
            <Text style={styles.songText} numberOfLines={1}>{item.songTitle}</Text>
            <Text style={styles.songText} numberOfLines={1}>{item.albumName}</Text>
            {/* <Text style={styles.songText}>{item.songArtists}</Text>
            <Text style={styles.songText}>{item.albumName}</Text> */}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    songText: {
        color: "white",
    },
}
);
export default SongComponent;