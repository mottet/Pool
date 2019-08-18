import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface MainViewProps {
  title: string,
  subTitle: string,
  backgroundColor: string
}

export class MainView extends Component <MainViewProps> {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.header, { backgroundColor: this.props.backgroundColor }]}>
          <Text style={styles.title}>{ this.props.title }</Text>
          <Text>{ this.props.subTitle }</Text>
        </View>
        <View style={[styles.main, { backgroundColor: this.props.backgroundColor }]}>
          { this.props.children }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15
  },
  main: {
    flex: 1
  },
  header: {
    height: 70,
    marginBottom: 5,
    textAlign: 'center'
  },
  title: {
    fontSize: 30
  }
});