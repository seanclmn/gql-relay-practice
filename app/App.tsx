import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MD3LightTheme as DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { RelayEnvironmentProvider } from 'react-relay/hooks'
import environment from './environment';
import { List } from './app/components/List'

const defaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
  },
};

export default function App() {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <PaperProvider theme={defaultTheme}>
        <View style={styles.container}>
          <List/>
        </View>
      </PaperProvider>
    </RelayEnvironmentProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
