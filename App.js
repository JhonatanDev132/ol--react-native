import { StatusBar, View, Text, Button, Alert } from "react-native";
import { SafeAreaView, StyleSheet } from "react-native";


export default function App(){
  const vai = () => {
    Alert.alert("Foi", "Oi")
  };

  return (
    <>
    <SafeAreaView style={estilos.container}>

    <StatusBar barStyle="default" />
    
    <View style={estilos.header}>
    <Text style={estilos.texto}>Topo/Cabeçalho</Text>
    </View>

    <View style={estilos.main}>
    <Text>Conteúdo...</Text>
    </View>

    <View style={estilos.footer}>
    <Text>Footer</Text>
    <Button title="Lá nele" onPress={vai} />
    </View>

    </SafeAreaView>
    </>

  )  
}

const estilos = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  header: {
    backgroundColor: "#2b2b2b"
  },
  texto: {
    color: "white",
    flex: 5
  },
})