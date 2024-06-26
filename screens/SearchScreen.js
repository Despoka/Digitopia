import React from 'react';
import { View, TextInput, StyleSheet, ScrollView, Text } from 'react-native';

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.searchBar} placeholder="Search for categories, keywords, forums" />
      <ScrollView style={styles.tagContainer}>
        <View style={styles.tag}><Text>Asus</Text></View>
        <View style={styles.tag}><Text>Android</Text></View>
        <View style={styles.tag}><Text>Android</Text></View>
        <View style={styles.tag}><Text>Lorem Ipsum Dolor</Text></View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  searchBar: { height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 10, paddingHorizontal: 10, marginBottom: 10 },
  tagContainer: { flexDirection: 'row', flexWrap: 'wrap' },
  tag: { backgroundColor: '#e0e0e0', padding: 10, borderRadius: 5, margin: 5 },
});
