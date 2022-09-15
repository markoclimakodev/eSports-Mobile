import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Eu amo o mozi todos pa xempis</Text>
      <Button title="amo mais pa xempi"/>
      <StatusBar style="auto" />
    </View>
  );
}

interface ButtonProps {
title: string,
}

function Button(props: ButtonProps) {
  return(
<TouchableOpacity>
  <Text>
    {props.title}
  </Text>
</TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1ae7ee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 50,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#ffffff',

  }
});
