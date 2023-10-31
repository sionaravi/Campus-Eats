//Code for HomeScreen Greeting page for users
import { Button, Text, View, useColorScheme } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
function HomeScreen({ navigation }: { navigation: StackNavigationProp<any> }): JSX.Element {
    
    return (
      <View >
        <Text>
          Home
        </Text>
        <Text>
          Welcome to the home screen!
        </Text>
        <Button
          title="Go to another screen"
          onPress={() => navigation.navigate('AnotherScreen')}
        />
      </View>
    );
  }
  
export default HomeScreen;