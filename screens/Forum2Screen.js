import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Linking, Image } from 'react-native';

const youtubeData = [
  { id: '1', name: 'GadgetIn', url: 'https://www.youtube.com/@GadgetIn', image: require('../assets/forum/youtube/gadgetin.jpg') },
  { id: '2', name: 'Linus Tech Tips', url: 'https://www.youtube.com/@LinusTechTips', image: require('../assets/forum/youtube/ltt.jpg') },
  { id: '3', name: 'DKID Media', url: 'https://www.youtube.com/@DKIDMedia', image: require('../assets/forum/youtube/dkid.jpg') },
  { id: '4', name: 'Jagat Review', url: 'https://www.youtube.com/@JagatReview', image: require('../assets/forum/youtube/jagat.jpg') },
];

export default function Forum2Screen({ navigation }) {
  const openYouTube = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Forum')}>
          <Text style={styles.tab}>Reddit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Youtube')}>
          <Text style={styles.tab}>YouTube</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={youtubeData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => openYouTube(item.url)}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  tabContainer: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10 },
  tab: { fontSize: 18, color: 'blue' },
  item: { backgroundColor: '#e0e0e0', padding: 20, marginVertical: 8, alignItems: 'center' },
  title: { fontSize: 18, marginTop: 10 },
  image: { width: 100, height: 100 },
});
