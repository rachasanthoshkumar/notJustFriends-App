import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, FlatList, SafeAreaView } from "react-native";
import FeedPost from "./src/components/FeedPost";
import posts from "./assets/data/posts.json";
export default function App() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <FlatList
          data={posts}
          renderItem={({ item }) => <FeedPost post={item} />}
        />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  container: {
    marginTop: 15,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
