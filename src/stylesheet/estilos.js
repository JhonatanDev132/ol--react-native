import { StyleSheet } from "react-native"

const estilos = StyleSheet.create({
    container: {
      backgroundColor: "#127369",
      flex: 1,
      // justifyContent: "space-between",
  },
    header: {
      backgroundColor: "#10403B",
      flex: 1,
      justifyContent: "center",
  },
    texto: {
      color: "white",
      fontSize: 25,
      paddingLeft: 20
  },
    main: {
      backgroundColor: "#fff",
      flex: 5,
      width: "80%",
      alignItems: "center",
      justifyContent: "space-around",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: 4,
      marginBottom: 4,
      borderRadius: 7,
      borderWidth: 3,
      borderColor: "black"
  },
    textoMain: {
      fontSize: 20,
  },
    buttonMain: {
      backgroundColor: "#4C5958",
      padding: 12,
      borderRadius: 4
  },
    textoPressable: {
      color: "white",
      fontWeight: "300"
  },
    footer: {
      backgroundColor: "#10403B",
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
  },
    textoFooter: {
      color: "white"
  }
  
  })

export default estilos