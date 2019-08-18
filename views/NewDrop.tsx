import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export class NewDrop extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>New drop</Text>
        <Text>Drop your thoughts in the world pool</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 30
  }
});