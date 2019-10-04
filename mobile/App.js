import React from 'react';
import { YellowBox } from 'react-native';
import Routes from './src/routes';

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket'
]);
// View = div, form.
//Text = h1, h2, h3, p, strong, span.
//StyleSheet = css (sem ';', sem '-',), sempre tem display flex.
export default function App() {
  return <Routes />
}
