import React from "react";
import { SafeAreaView, View, ScrollView, TouchableOpacity, Text, Image, StyleSheet } from "react-native";

interface Props {}

const Home: React.FC<Props> = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.column}>
          <View style={styles.column2}>
            <TouchableOpacity style={styles.buttonRow} onPress={() => alert('Pressed!')}>
              <Text style={styles.text}>{"Pesquisar"}</Text>
              <Image
                source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/DDV5d60Amb/jowdfwu7_expires_30_days.png" }}
                resizeMode={"stretch"}
                style={styles.image}
              />
            </TouchableOpacity>
            <View style={styles.row}>
              <View style={styles.column3}>
                <Image
                  source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/DDV5d60Amb/3umaxq2t_expires_30_days.png" }}
                  resizeMode={"stretch"}
                  style={styles.image2}
                />
                <Text style={styles.text2}>{"Ofertas"}</Text>
              </View>
              <View style={styles.column3}>
                <Image
                  source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/DDV5d60Amb/ldon5w5n_expires_30_days.png" }}
                  resizeMode={"stretch"}
                  style={styles.image2}
                />
                <Text style={styles.text2}>{"Hortifruti"}</Text>
              </View>
              <View style={styles.column3}>
                <Image
                  source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/DDV5d60Amb/o0itb8uo_expires_30_days.png" }}
                  resizeMode={"stretch"}
                  style={styles.image2}
                />
                <Text style={styles.text2}>{"Açougue"}</Text>
              </View>
              <View style={styles.column3}>
                <Image
                  source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/DDV5d60Amb/6xk29j4k_expires_30_days.png" }}
                  resizeMode={"stretch"}
                  style={styles.image2}
                />
                <Text style={styles.text2}>{"Bebidas"}</Text>
              </View>
              <View style={styles.column4}>
                <Image
                  source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/DDV5d60Amb/isbfn1o8_expires_30_days.png" }}
                  resizeMode={"stretch"}
                  style={styles.image2}
                />
                <Text style={styles.text2}>{"Limpeza"}</Text>
              </View>
            </View>
          </View>
          <Text style={styles.absoluteText}>{"Login"}</Text>
        </View>
        <View style={styles.row2}>
          <Text style={styles.text3}>{"Mais procurados"}</Text>
          <View style={styles.box}></View>
          <Text style={styles.text4}>{"Ver mais"}</Text>
        </View>
        <View style={styles.row3}>
          <View style={styles.column5}>
            <Image
              source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/DDV5d60Amb/nfptfeby_expires_30_days.png" }}
              resizeMode={"stretch"}
              style={styles.image3}
            />
            <View style={styles.column6}>
              <Text style={styles.text5}>{"R$4,49"}</Text>
              <Text style={styles.text6}>{"Pão de forma Baud.."}</Text>
            </View>
            <View style={styles.view}>
              <Text style={styles.text7}>{"Ver mais sobre"}</Text>
            </View>
          </View>
          <View style={styles.column7}>
            <Image
              source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/DDV5d60Amb/1ko72jy2_expires_30_days.png" }}
              resizeMode={"stretch"}
              style={styles.image4}
            />
            <View style={styles.column6}>
              <Text style={styles.text}>{"R$17,65"}</Text>
              <Text style={styles.text6}>{"Molico Composto L..."}</Text>
            </View>
            <View style={styles.view2}>
              <Text style={styles.text7}>{"Ver mais sobre"}</Text>
            </View>
          </View>
          <View style={styles.column8}>
            <Image
              source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/DDV5d60Amb/40g0wgk4_expires_30_days.png" }}
              resizeMode={"stretch"}
              style={styles.image5}
            />
            <View style={styles.column6}>
              <Text style={styles.text}>{"R$41,30"}</Text>
              <Text style={styles.text6}>{"Downy Brisa Suave..."}</Text>
            </View>
            <View style={styles.view3}>
              <Text style={styles.text7}>{"Ver mais sobre"}</Text>
            </View>
          </View>
          <View style={styles.column9}>
            <Image
              source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/DDV5d60Amb/vmr3s1kh_expires_30_days.png" }}
              resizeMode={"stretch"}
              style={styles.image6}
            />
            <View style={styles.column}>
              <Text style={styles.text}>{"R$9,99"}</Text>
              <Text style={styles.text6}>{"Colgate Cla..."}</Text>
            </View>
            <View style={styles.view4}>
              <Text style={styles.text7}>{"Ver mais sobre"}</Text>
            </View>
          </View>
        </View>
        <View style={styles.row4}>
          <View style={styles.column11}>
            <Text style={styles.text11}>{"Ofertas do dia"}</Text>
            <View style={styles.view5}>
              <View style={styles.column12}>
                <Image
                  source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/DDV5d60Amb/n6xi6xca_expires_30_days.png" }}
                  resizeMode={"stretch"}
                  style={styles.image7}
                />
                <View style={styles.column13}>
                  <Text style={styles.text12}>{"R$11,99"}</Text>
                  <Text style={styles.text13}>{"-15% de R$16,90"}</Text>
                </View>
                <Text style={styles.text14}>{"Caixa de Variedad..."}</Text>
                <View style={styles.view6}>
                  <Text style={styles.text7}>{"Ver mais sobre"}</Text>
                </View>
              </View>
            </View>
            <View style={styles.column14}>
              <Image
                source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/DDV5d60Amb/1zsf1o0q_expires_30_days.png" }}
                resizeMode={"stretch"}
                style={styles.image8}
              />
              <View style={styles.column15}>
                <Text style={styles.text15}>{" R$29,90"}</Text>
                <Text style={styles.text13}>{"-28% de R$41,90"}</Text>
              </View>
              <Text style={styles.text16}>{"Filé de Salmão em..."}</Text>
              <View style={styles.view7}>
                <Text style={styles.text7}>{"Ver mais sobre"}</Text>
              </View>
            </View>
          </View>
          <View style={styles.column16}>
            <Image
              source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/DDV5d60Amb/ks3d0tei_expires_30_days.png" }}
              resizeMode={"stretch"}
              style={styles.image9}
            />
            <View style={styles.column17}>
              <Text style={styles.text17}>{"R$5,29"}</Text>
              <Text style={styles.text13}>{"-5% de desconto"}</Text>
            </View>
            <Text style={styles.text18}>{"Camponesa LeiteU..."}</Text>
            <View style={styles.view3}>
              <Text style={styles.text7}>{"Ver mais sobre"}</Text>
            </View>
          </View>
          <View style={styles.column18}>
            <Text style={styles.text19}>{"Ver mais"}</Text>
            <View style={styles.column19}>
              <Image
                source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/DDV5d60Amb/j543qq8i_expires_30_days.png" }}
                resizeMode={"stretch"}
                style={styles.image10}
              />
              <View style={styles.column20}>
                <Text style={styles.text20}>{"R$22,14"}</Text>
                <Text style={styles.text13}>{"-17% de R$26,94 "}</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    marginHorizontal: 20,
  },
  column: {
    flex: 1,
  },
  column2: {
    marginTop: 20,
  },
  buttonRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 10,
  },
  image: {
    width: 20,
    height: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  column3: {
    alignItems: "center",
  },
  image2: {
    width: 50,
    height: 50,
  },
  text2: {
    fontSize: 14,
    marginTop: 5,
  },
  column4: {
    alignItems: "center",
  },
  absoluteText: {
    position: "absolute",
    top: 50,
    left: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  row2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  text3: {
    fontSize: 22,
    fontWeight: "bold",
  },
  box: {
    width: 50,
    height: 2,
    backgroundColor: "#000",
  },
  text4: {
    fontSize: 14,
    color: "#007BFF",
  },
  row3: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  column5: {
    width: "22%",
    alignItems: "center",
  },
  image3: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  column6: {
    alignItems: "center",
    marginTop: 5,
  },
  text5: {
    fontSize: 16,
    fontWeight: "bold",
  },
  text6: {
    fontSize: 14,
    color: "#666",
  },
  view: {
    marginTop: 5,
  },
  text7: {
    fontSize: 12,
    color: "#007BFF",
  },
  column7: {
    width: "22%",
    alignItems: "center",
  },
  image4: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  view2: {
    marginTop: 5,
  },
  column8: {
    width: "22%",
    alignItems: "center",
  },
  image5: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  view3: {
    marginTop: 5,
  },
  column9: {
    width: "22%",
    alignItems: "center",
  },
  image6: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  view4: {
    marginTop: 5,
  },
  row4: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  column11: {
    width: "48%",
  },
  text11: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  view5: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  column12: {
    width: "48%",
  },
  image7: {
    width: "100%",
    height: 120,
    borderRadius: 10,
  },
  column13: {
    marginTop: 5,
    marginBottom: 5,
  },
  text12: {
    fontSize: 18,
    fontWeight: "bold",
  },
  text13: {
    fontSize: 14,
    color: "#FF0000",
  },
  text14: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 5,
  },
  view6: {
    marginTop: 5,
  },
  column14: {
    width: "48%",
  },
  image8: {
    width: "100%",
    height: 120,
    borderRadius: 10,
  },
  column15: {
    marginTop: 5,
    marginBottom: 5,
  },
  text15: {
    fontSize: 18,
    fontWeight: "bold",
  },
  text16: {
    fontSize: 14,
    marginTop: 5,
  },
  view7: {
    marginTop: 5,
  },
  column16: {
    width: "48%",
  },
  image9: {
    width: "100%",
    height: 120,
    borderRadius: 10,
  },
  column17: {
    marginTop: 5,
    marginBottom: 5,
  },
  text17: {
    fontSize: 18,
    fontWeight: "bold",
  },
  text18: {
    fontSize: 14,
    marginTop: 5,
  },
  column18: {
    width: "48%",
  },
  text19: {
    fontSize: 14,
    color: "#007BFF",
    textAlign: "center",
    marginTop: 5,
  },
  column19: {
    width: "48%",
  },
  image10: {
    width: "100%",
    height: 120,
    borderRadius: 10,
  },
  column20: {
    marginTop: 5,
  },
  text20: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Home;
