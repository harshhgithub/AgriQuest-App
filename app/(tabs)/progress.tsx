// app/(tabs)/progress.tsx
import { View, Text, StyleSheet } from "react-native";

export default function ProgressScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📊 Your Progress</Text>
      <Text style={styles.text}>Sustainability Score: 75%</Text>
      <Text style={styles.text}>Badges Earned: 🌱🌾</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  text: { fontSize: 16, marginBottom: 10 },
});
