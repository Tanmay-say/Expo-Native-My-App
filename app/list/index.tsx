import { Stack } from 'expo-router';
import {View, Text} from 'react-native';


export default function TabTwoScreen() {
  return (
    <View>
        <Stack.Screen 
        options={{
            headerTitle : "List",
            headerShown: true,
            headerBackVisible : true,
        }}/>
      <Text>Hello from lists</Text>
    </View>
    
  );
}
//onreach , item to render, onscroll 

