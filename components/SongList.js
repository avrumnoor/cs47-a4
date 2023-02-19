import {StyleSheet, SafeAreaView, FlatList, Text} from 'react-native';
import SongComponent from './Song';
const SongList = ({tracks}) => {
    return (
        <FlatList
        data={tracks}
        renderItem={({item}) => <SongComponent item={item} />}
        keyExtractor={(item) => item.id}
        />
    );
};
export default SongList;
