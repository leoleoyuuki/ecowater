import { StyleSheet, Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";

export default function Header({ navigation }) {
  return (
    <SafeAreaView style={styles.header}>
      <View>
        <Image source={require("../assets/Logo.png")} style={styles.img} />
      </View>

      <View style={styles.icon}>
          <Feather
            name="menu"
            size={33}
            color="#fff"
            onPress={() => navigation.openDrawer()}
          />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 7,
    paddingHorizontal: 20,
    height: 115,
    backgroundColor: "#000",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  img: {
    width: 200,
    height: 35,
  },
    icon: {
        paddingTop: 3,
    },
});
