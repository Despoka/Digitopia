import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Linking, Image } from 'react-native';

const redditData = [
  { id: '1', name: 'r/LinusTechTips', url: 'https://www.reddit.com/r/LinusTechTips/', image: require('../assets/forum/reddit/reddit.png') },
  { id: '2', name: 'r/pcmasterrace', url: 'https://www.reddit.com/r/pcmasterrace/', image: require('../assets/forum/reddit/reddit.png') },
  { id: '3', name: 'r/Gamingcirclejerk', url: 'https://www.reddit.com/r/Gamingcirclejerk/', image: require('../assets/forum/reddit/reddit.png') },
  { id: '4', name: 'r/hardware', url: 'https://www.reddit.com/r/hardware/', image: require('../assets/forum/reddit/reddit.png') },
];

export default function ForumScreen({ navigation }) {
  const openReddit = (url) => {
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
        data={redditData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => openReddit(item.url)}>
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
