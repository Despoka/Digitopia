import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking,
  Button,
} from 'react-native';

export default function HomeScreen({ route }) {
  const { email } = route.params;

  const articles = [
    {
      image: require('../assets/artikel/artikel1.jpg'),
      link: 'https://www.bhinneka.com/blog/msi-cyborg-15-a1v-laptop-gaming-ai/',
      header: 'MSI Cyborg 15 A1V: Laptop AI untuk Gamer & Content Creator',
      content:
        'MSI Cyborg 15 AI A1V cocok untuk gamer yang membutuhkan laptop untuk kerja. Performanya kencang dan hemat daya dapat menangani tugas dari aplikasi berat atau membuat konten. Streamer Game bisa memanfaatkan laptop ini untuk live streaming dan edit konten di satu perangkat.',
    },
    {
      image: require('../assets/artikel/artikel2.jpg'),
      link: 'https://www.bhinneka.com/blog/msi-prestige-13-a1m-laptop-ai/',
      header: 'MSI Prestige 13 A1M: Laptop AI dengan Sertifikat Intel Evo',
      content: 'Laptop AI MSI Prestige 13 A1M ditenagai prosesor Intel Core Ultra dengan NPU khusus yang berfungsi menjalankan tugas AI.',
    },
    {
      image: require('../assets/artikel/artikel3.jpg'),
      link: 'https://www.bhinneka.com/blog/fujifilm-luncurkan-kamera-mirrorles-entry-level-x-a7/',
      header: 'Fujifilm Luncurkan Kamera Mirrorles Entry-level X-A7',
      content: 'Fujifilm belum lama ini meluncurkan kamera terbarunya Fujfilm X-A7 yang masuk ke dalam jajaran kamera mirrorles entry-level yang tentunya menawarkan beberapa fitur lebih baru dibanding sebelumnya.',
    },
    {
      image: require('../assets/artikel/artikel4.jpg'),
      link: 'https://www.bhinneka.com/blog/ssd-portable-wd-dengan-kapasitas-8-tb/',
      header: 'SSD Portable WD dengan Kapasitas 8 TB',
      content: 'WD baru-baru ini memperkenalkan perangkat SSD portable yang diberi nama WD_BLACK P50 pada ajang bergensi CES 2020 yang baru berlangsung dengan kapasitas hingga 8TB dan merupakan SSD portable yang pertama di dunia dengan kapasitas besar tersebut.',
    },
    {
      image: require('../assets/artikel/artikel5.jpg'),
      link: 'https://www.bhinneka.com/blog/iphone-15-pro-vs-iphone-15-pro-max/',
      header: 'iPhone 15 Pro vs 15 Pro Max: Perbedaan Spesifikasi & Harga',
      content: 'Sama seperti seri iPhone 14 Pro sebelumnya, kali ini iPhone kembali meluncurkan iPhone 15 Pro dan iPhone 15 Pro Max sebagai varian tertinggi dari seri iPhone 15.',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Digitopia</Text>
      <Text style={styles.email}>Hello, {email}</Text>
      {articles.map((article, index) => (
        <View key={index} style={styles.article}>
          <Image source={article.image} style={styles.articleImage} />
          <Text style={styles.articleHeader}>{article.header}</Text>
          <Text style={styles.articleText}>{article.content}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Linking.openURL(article.link)}
          >
            <Text style={styles.buttonText}>Lihat Selengkapnya</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#f5f5f5' },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'left' },
  email: { fontSize: 18, marginVertical: 10, textAlign: 'left' },
  article: {
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  articleImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  articleHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  articleText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

