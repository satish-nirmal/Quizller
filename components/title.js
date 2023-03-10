import React from 'react';
import {View, StyleSheet,Text} from 'react-native';

const Title = ({titleText}) => {
    return (
        <View style={styles.container}>
           <Text style={styles.title}>{titleText}</Text>
        </View>
    );
}


export default Title;

const styles  = StyleSheet.create({
title:{
    fontSize: 45,
    fontWeight:'600',
},
container:{
    paddingVertical:16,
    justifyContent:'center',
    alignItems:'center'

}
})