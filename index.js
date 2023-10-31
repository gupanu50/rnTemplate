/**

* @format

*/



import { AppRegistry, LogBox } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import i18n from '@/languages/i18n/i18n';

LogBox.ignoreAllLogs(true);

AppRegistry.registerComponent(appName, () => App);