import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-navigation';

class LoadingScene extends Component {


  startTimer = () => {
    setTimeout(()=>{
      
    }, 1000);
  }

  render () {
    console.log("loading");
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.loadInText}>Snö</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black'
    },
    loadInText: {
      fontSize: 80,
      color: 'white',
//      fontFamily: "Montserrat-Medium"
    }
  }) 

export default LoadingScene;