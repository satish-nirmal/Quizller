import React from 'react';
import {View, StyleSheet,Text,Image, TouchableOpacity,} from 'react-native';
import Title from '../components/title';

const Result = ({navigation , route }) => {
  const {score} = route.params
    return (
      <View style={styles.container}>
      <Title  titleText='RESULTS'/>
<Text style={styles.scoreValue}>{score}</Text>

      <View style={styles.bannerContainer}>
        <Image source={{
          uri: 'https://cdni.iconscout.com/illustration/premium/thumb/team-victory-5303612-4423551.png'
        }}
          style={styles.banner}
          resizeMode="contain"
        />
      </View>
      <TouchableOpacity onPress={()=> navigation.navigate("Home")} style={styles.button}>
        <Text style={styles.buttonText}>GO TO HOME</Text>
      </TouchableOpacity>

    </View>
    );
};


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
  },
  scoreValue:{
    fontSize:24,
    fontWeight:'800',
    alignSelf:'center',
  }
})

export default Result;
