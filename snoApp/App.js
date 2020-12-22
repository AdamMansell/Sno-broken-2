import React from 'react';
import { StyleSheet, View, Text, } from 'react-native'; // react-dom
import {Router, Scene} from 'react-native-router-flux';


// import {Router, Scene} from 'react-native-router-flux';
// import LoadingScreen from './src/screens/LoadingScreen';

const App = () => {
  return (
    <View style={styles.container}>
      <Router navigationBarStyle={styles.container}>
        <Scene key="root">
          <Scene key="loading" component={LoadingScene} initial={true}></Scene>
        </Scene>
      </Router>
    </View>
    // <LoadingScreen />
    // <View style={styles.container}>
    //   <Text style={styles.loadInText}>Snö</Text>
    // </View>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    borderBottomWidth: 0,
  },
  // loadInText: {
  //   fontSize: 80,
  //   color: 'white',
  //   fontFamily: "Montserrat-Medium"
  // }
})

export default App;