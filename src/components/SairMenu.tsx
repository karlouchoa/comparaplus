import React from "react";
import {
  SafeAreaView,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  Alert,
} from "react-native";

const MenuScreen: React.FC = () => {
  const handlePress = () => Alert.alert("Pressed!");

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.column}>
          <TouchableOpacity style={styles.buttonRow} onPress={handlePress}>
            <Text style={styles.text}>Pesquisar</Text>
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/DDV5d60Amb/ew2l9ebk_expires_30_days.png",
              }}
              resizeMode="stretch"
              style={styles.image}
            />
          </TouchableOpacity>

          <Text style={styles.text2}>Menu</Text>

          <View style={styles.column2}>
            <View style={styles.column3}>
              <Text style={styles.text3}>Compras</Text>
              <View>
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/DDV5d60Amb/f6poalds_expires_30_days.png",
                  }}
                  resizeMode="stretch"
                  style={styles.image2}
                />
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/DDV5d60Amb/jngw9f7r_expires_30_days.png",
                  }}
                  resizeMode="stretch"
                  style={styles.absoluteImage}
                />
              </View>
              <Text style={styles.text4}>Histórico de compras</Text>
            </View>

            <View style={styles.absoluteView}>
              <Text style={styles.text5}>Departamentos</Text>
            </View>

            <Text style={styles.absoluteText}>Login</Text>
          </View>

          <View style={styles.row}>
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/DDV5d60Amb/02lkyiyw_expires_30_days.png",
              }}
              resizeMode="stretch"
              style={styles.image3}
            />
            <Text style={styles.text6}>Economia semanal</Text>
          </View>

          <Text style={styles.text7}>Minha conta</Text>

          <View style={styles.row2}>
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/DDV5d60Amb/l2a43jma_expires_30_days.png",
              }}
              resizeMode="stretch"
              style={styles.image4}
            />
            <Text style={styles.text8}>Meus dados</Text>
          </View>

          <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Text style={styles.text9}>Sair</Text>
          </TouchableOpacity>

          <View style={styles.column4}>
            <View style={styles.box} />
            <View style={styles.column5}>
              <Text style={styles.text10}>Sair da conta</Text>
              <Text style={styles.text11}>
                Tem certeza de que deseja sair da sua conta? Você terá que efetuar o login novamente.
              </Text>
            </View>

            <TouchableOpacity style={styles.button2} onPress={handlePress}>
              <Text style={styles.text12}>Voltar</Text>
            </TouchableOpacity>

            <View style={styles.column6}>
              <TouchableOpacity style={styles.button3} onPress={handlePress}>
                <Text style={styles.text13}>Sair</Text>
              </TouchableOpacity>

              <View style={styles.column7}>
                <View style={styles.row3}>
                  {["my9j1ssj", "x8fon0qy", "heez4kry", "qlfdw0wu"].map((id, index) => (
                    <Image
                      key={index}
                      source={{
                        uri: `https://storage.googleapis.com/tagjs-prod.appspot.com/v1/DDV5d60Amb/${id}_expires_30_days.png`,
                      }}
                      resizeMode="stretch"
                      style={index === 3 ? styles.image6 : styles.image5}
                    />
                  ))}
                </View>
                <View style={styles.row4}>
                  <Text style={styles.text14}>Início</Text>
                  <Text style={styles.text15}>Listas</Text>
                  <Text style={styles.text16}>Histórico</Text>
                  <Text style={styles.text17}>Menu</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF" },
  scrollView: { flex: 1, backgroundColor: "#FFFFFF" },
  column: { alignItems: "flex-start", backgroundColor: "#00000080", paddingTop: 68 },
  buttonRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FAFAFA",
    borderColor: "#467A59CC",
    borderRadius: 25,
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 11,
    marginBottom: 15,
    marginHorizontal: 11,
  },
  text: { color: "#5E5E62", fontSize: 13, fontWeight: "bold", flex: 1 },
  image: { width: 17, height: 17 },
  text2: {
    color: "#000000",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 6,
    marginLeft: 20,
    width: 54,
  },
  column2: { alignItems: "flex-start", paddingRight: 70, marginBottom: 6, marginLeft: 8 },
  column3: { alignItems: "flex-start" },
  text3: { color: "#000000", fontSize: 13, marginLeft: 12 },
  image2: { width: 45, height: 45 },
  absoluteImage: {
    position: "absolute",
    bottom: -14,
    left: 14,
    width: 20,
    height: 20,
  },
  text4: { color: "#5E5E62", fontSize: 13, textAlign: "center", marginLeft: 40, width: 132 },
  absoluteView: {
    position: "absolute",
    top: 8,
    left: 2,
    width: 240,
    backgroundColor: "#FFFFFF",
  },
  text5: { color: "#5E5E62", fontSize: 13, marginTop: 15, marginBottom: 10, marginLeft: 39 },
  absoluteText: {
    position: "absolute",
    bottom: 19,
    right: 65,
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "bold",
  },
  row: { flexDirection: "row", alignItems: "center", marginBottom: 11, marginLeft: 20 },
  image3: { width: 21, height: 21, marginRight: 7 },
  text6: { color: "#5E5E62", fontSize: 13, textAlign: "center", width: 116 },
  text7: { color: "#000000", fontSize: 13, marginBottom: 11, marginLeft: 20 },
  row2: { flexDirection: "row", alignItems: "center", marginBottom: 22, marginLeft: 19 },
  image4: { width: 18, height: 18, marginRight: 7 },
  text8: { color: "#5E5E62", fontSize: 12 },
  button: {
    backgroundColor: "#C1DFC5",
    borderRadius: 48,
    paddingVertical: 11,
    paddingHorizontal: 69,
    marginBottom: 113,
    marginLeft: 38,
  },
  text9: { color: "#000000", fontSize: 16, fontWeight: "bold" },
  column4: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingTop: 17,
  },
  box: {
    width: 56,
    height: 5,
    backgroundColor: "#E8E8E8",
    borderRadius: 5,
    marginBottom: 18,
  },
  column5: { alignSelf: "stretch", marginBottom: 24, marginHorizontal: 24 },
  text10: { color: "#121212", fontSize: 20, fontWeight: "bold", marginBottom: 16 },
  text11: { color: "#121212", fontSize: 12 },
  button2: {
    alignSelf: "stretch",
    alignItems: "center",
    backgroundColor: "#C1DFC5",
    borderRadius: 48,
    paddingVertical: 12,
    marginBottom: 16,
    marginHorizontal: 24,
  },
  text12: { color: "#121212", fontSize: 16, fontWeight: "bold" },
  column6: { alignSelf: "stretch" },
  button3: {
    alignItems: "center",
    backgroundColor: "#FAF9FD",
    borderColor: "#C1DFC5",
    borderRadius: 48,
    borderWidth: 1,
    paddingVertical: 12,
    marginHorizontal: 24,
  },
  text13: { color: "#3E6B4E", fontSize: 16, fontWeight: "bold" },
  column7: {
    backgroundColor: "#C0DFC5",
    borderRadius: 12,
    paddingVertical: 10,
  },
  row3: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 3,
    marginHorizontal: 25,
  },
  image5: { width: 24, height: 24 },
  image6: { width: 16, height: 12 },
  row4: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 25,
  },
  text14: { color: "#121212", fontSize: 10, marginRight: 72 },
  text15: { color: "#121212", fontSize: 10, flex: 1 },
  text16: { color: "#121212", fontSize: 10, marginRight: 61 },
  text17: { color: "#467A59", fontSize: 10 },
});
