import { StyleSheet, Image, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";

export default function Header({ navigation, menu }) {

  
  return (
    <SafeAreaView style={styles.header}>
      <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
        <Image source={require("../assets/Logo.png")} style={styles.img} />
      </TouchableOpacity>

      {menu === true ? <View style={styles.icon}>
          <Feather
            name="menu"
            size={33}
            color="#fff"
            onPress={() => navigation.openDrawer()}
          />
      </View> : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 10,
    paddingBottom: 15,
    paddingHorizontal: 20,
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
