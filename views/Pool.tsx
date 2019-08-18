import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export class Pool extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Pool</Text>
        <Text>Thoughts drop in the world pool</Text>
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