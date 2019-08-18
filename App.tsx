import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';

import { MainView } from './views/MainView';
import { MyDrops } from './views/MyDrops';
import { Pool } from './views/Pool';
import { NewDrop } from './views/NewDrop';

export default class App extends Component {
  
  private views = [
    {
      backgroundColor: 'powderblue',
      component: <MyDrops/>,
      description: 'Thoughts drop in the world pool',
      name: 'My Drops'
    },
    {
      backgroundColor: 'skyblue',
      description: 'Thoughts drop in the world pool',
      component: <Pool/>,
      name: 'Pool'
    },
    {
      backgroundColor: 'steelblue',
      component: <NewDrop/>,
      description: 'Thoughts drop in the world pool',
      name: 'New Drop'
    }
  ];

  public state = {
    currentView: 'Pool',
  };

  getCurrentView(): React.ReactNode {
    const index = this.views.findIndex(v => v.name === this.state.currentView);
    if (index !== -1) {
      const view = this.views[index];
      return (
      <MainView
        title={view.name}
        subTitle={view.description}
        backgroundColor={view.backgroundColor}
      >
        { view.component }
      </MainView>);
    }
  }

  generateNavigationButtons(): React.ReactNode[] {
    return this.views.map(view => <Button 
      color={view.backgroundColor}
      onPress={() => this.setState({currentView: view.name})}
      title={view.name}
    />)
  }

  render() {
    return (
    <View style={styles.mainView}>
      { this.getCurrentView() }
      <View style={styles.navigationButtons}>
        { this.generateNavigationButtons() }
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1
  },
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 70
  }
});
