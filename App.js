import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends Component {
  state = {
    placeName: '',
    places: []
  }
  placeNameChangeHandler = (vals) => {
    this.setState({
      placeName: vals
    })
  }

  placeSubmitHandler = () => {
    if(this.state.placeName.trim() ===""){
      return;
    }
    this.setState(prevState =>{
      return {
        places: prevState.places.concat(prevState.placeName)
      };
    });
  };

  render() {
    const placeOutput = this.state.places.map((place,i) => (
      <Text key={i}>{place}</Text>
    ))
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.placeInput}
            placeholder="an awesome places"
            value={this.state.placeName}
            onChangeText={this.placeNameChangeHandler}
          />
          <Button 
            style={styles.placeButton}
            onPress={this.placeSubmitHandler}
            title="Add"/>
        </View>
        <View>{placeOutput}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  inputContainer: {
    //flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
    
  },
  placeInput: {
    width: "70%",
    height: 50,
  },
  placeButton: {
    width: "30%"
  }
});
