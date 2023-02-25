import { View, StyleSheet, SafeAreaView, FlatList, Text } from "react-native";
import SongComponent from "./Song";

const SongList = ({ tracks, navigation }) => {
  return (
    <FlatList
      data={tracks}
      renderItem={({item, index}) => (
        <SongComponent item={item} index={index} navigation={navigation}/>
      )}
      keyExtractor={(item) => item.id}
    />
  );
};
export default SongList;
