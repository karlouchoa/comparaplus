import React from "react";
import {
  SafeAreaView,
  View,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

interface Props {}

const FilterScreen: React.FC<Props> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.row}>
          <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/DDV5d60Amb/fcntrtmy_expires_30_days.png",
            }}
            resizeMode="stretch"
            style={styles.image}
          />
          <Text style={styles.text}>Filtro</Text>
        </View>

        <Text style={styles.text2}>Buscar lojas</Text>
        <Text style={styles.text3}>Filtrar por</Text>

        <View style={styles.row2}>
          <View style={styles.row3}>
            <Text style={styles.text4}>Estado</Text>
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/DDV5d60Amb/1yuf0wiq_expires_30_days.png",
              }}
              resizeMode="stretch"
              style={styles.image2}
            />
          </View>
          <View style={styles.row4}>
            <Text style={styles.text5}>Cidade</Text>
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/DDV5d60Amb/om6y46h5_expires_30_days.png",
              }}
              resizeMode="stretch"
              style={styles.image3}
            />
          </View>
        </View>

        <View style={styles.row5}>
          <Text style={styles.text6}>Bairro</Text>
          <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/DDV5d60Amb/kxir9wzp_expires_30_days.png",
            }}
            resizeMode="stretch"
            style={styles.image3}
          />
        </View>

        <View style={styles.row6}>
          <View style={styles.box} />
          <Text style={styles.text7}>Aberta</Text>
          <View style={styles.box2} />
          <Text style={styles.text8}>Fechada</Text>
        </View>

        <Text style={styles.text9}>Ordernar por</Text>
        <View style={styles.row7}>
          <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/DDV5d60Amb/5n8psvgr_expires_30_days.png",
            }}
            resizeMode="stretch"
            style={styles.image4}
          />
          <Text style={styles.text10}>Proximidade</Text>
          <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/DDV5d60Amb/5z92pf3a_expires_30_days.png",
            }}
            resizeMode="stretch"
            style={styles.image5}
          />
          <Text style={styles.text8}>Lojas recentes</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => alert("Pressed!")}>
          <Text style={styles.text8}>Aplicar filtros</Text>
        </TouchableOpacity>

        <Text style={styles.text11}>Buscar produtos</Text>
        <Text style={styles.text12}>Filtrar por</Text>

        <View style={styles.row8}>
          <Text style={styles.text13}>Categorias</Text>
          <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/DDV5d60Amb/rpk6cs0z_expires_30_days.png",
            }}
            resizeMode="stretch"
            style={styles.image3}
          />
        </View>

        <Text style={styles.text14}>Ordernar por</Text>

        <View style={styles.row9}>
          <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/DDV5d60Amb/v43uzzt7_expires_30_days.png",
            }}
            resizeMode="stretch"
            style={styles.image4}
          />
          <Text style={styles.text15}>Lojas próximas</Text>
          <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/DDV5d60Amb/3wo7ufzk_expires_30_days.png",
            }}
            resizeMode="stretch"
            style={styles.image5}
          />
          <Text style={styles.text8}>Preços mais baixos</Text>
        </View>

        <View style={styles.row10}>
          <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/DDV5d60Amb/p5xsfuio_expires_30_days.png",
            }}
            resizeMode="stretch"
            style={styles.image4}
          />
          <Text style={styles.text8}>Recentes</Text>
        </View>

        <TouchableOpacity style={styles.button2} onPress={() => alert("Pressed!")}>
          <Text style={styles.text8}>Aplicar filtros</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FilterScreen;

// O objeto `styles` permanece inalterado, pois o StyleSheet do React Native já é tipado.
