import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import {Amplify} from 'aws-amplify'
import { withAuthenticator } from "aws-amplify-react-native";
import Navigator from './src/navigation';

Amplify.configure(awsconfig)

function App () {
  return (
    <View style={styles.container}>
      <Navigator />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    justifyContent: 'center',
  },
});
export default withAuthenticator(App);