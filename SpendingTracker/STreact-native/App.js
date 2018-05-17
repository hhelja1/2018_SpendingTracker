import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PregledStatistike from './components/PregledStatistike';
import DevelopersHelp from './components/DevelopersHelp';
import Home from './components/Home';
import NewExpense from './components/NewExpense';
import IzborPrikazaStatistike from './components/IzborPrikazaStatistike';
import BarChart from './components/charts/BarChart';
import LineChart from './components/charts/LineChart';
import PieChart from './components/charts/PieChart';
import {Navigation, StackNavigator} from 'react-navigation';

const AppNavigator = StackNavigator({
    Home: {screen: Home},
    DevelopersHelp: {screen: DevelopersHelp},
    NewExpense: {screen: NewExpense},
    PregledStatistike: {screen: PregledStatistike},
    IzborPrikazaStatistike: {screen: IzborPrikazaStatistike},
    BarChart: {screen: BarChart},
    LineChart: {screen: LineChart},
    PieChart: {screen: PieChart},
  });
export default class App extends React.Component {
  render() {
    return ( 
      <AppNavigator/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: 500,
    height: 500
  },
});
