import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export class MyDrops extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>My Drops</Text>
        <Text>My thoughts drop in the world pool</Text>
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