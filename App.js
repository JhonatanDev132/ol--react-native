import { StatusBar, View, Text, Button, Alert } from "react-native";
import { SafeAreaView } from "react-native";

export default function App(){
  const vai = () => {
    Alert.alert("Foi", "Oi")
  };

  return (
    <>
    <SafeAreaView>

    <StatusBar barStyle="default" />
    
    <View>
    <Text>Topo/Cabeçalho</Text>
    </View>

    <View>
    <Text>Conteúdo...</Text>
    </View>

    <View>
    <Text>Footer</Text>
    <Button title="Lá nele" onPress={vai} />
    </View>

    </SafeAreaView>
    </>

  )  
}