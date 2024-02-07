import { StatusBar, View, Text, Alert, Pressable } from "react-native";
import { SafeAreaView } from "react-native";
import estilos from "./src/stylesheet/estilos";

export default function App(){
  const vai = () => {
    Alert.alert("Foi", "Oi")
  };

  return (
    <>
    <SafeAreaView style={estilos.container}>

    <StatusBar barStyle="default" />
    
    <View style={estilos.header}>
    <Text style={estilos.texto}>Olá Native</Text>
    </View>

    <View style={estilos.main}>
    <Text style={estilos.textoMain}>Conteúdo</Text>
    <Pressable style={estilos.buttonMain} onPress={vai}>
      <Text style={estilos.textoPressable}>Lá nele</Text>
    </Pressable>
    </View>

    <View style={estilos.footer}>
    <Text style={estilos.textoFooter}>Footer</Text>
    </View>

    </SafeAreaView>
    </>

  )  
}
