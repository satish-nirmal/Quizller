import React from 'react'
import { Text, View, Button, TouchableOpacity, Image, StyleSheet } from 'react-native'
import Title from '../components/title'

const Home = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Title  titleText='QUIZLLER'/>
      <View style={styles.bannerContainer}>
        <Image source={{
          uri: 'https://cdn3d.iconscout.com/3d/premium/preview/exam-4048714-3369796.png'
          // uri: 'https://cdn3d.iconscout.com/3d/premium/preview/online-test-time-4033995-3337507.png'
        }}
          style={styles.banner}
          resizeMode="contain"
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Quiz")} style={styles.button}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>

    </View>
  )
}


const styles = StyleSheet.create({
  banner: {
    height: 300,
    width: 300
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  container: {
    paddingTop: 40,
    paddingh: 20,
    height: '100%'
  },
  button: {
    width: '100%',
    backgroundColor: '#D9ED92',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 30
  },
  buttonText: {
    fontSize: 30,
    fontWeight: '600'
  }
});


export default Home;