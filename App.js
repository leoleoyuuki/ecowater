import { StyleSheet, Text, View } from "react-native";
import Drawer from "./src/routes/Drawer";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <Drawer />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
