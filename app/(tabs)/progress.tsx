import { View, Text, StyleSheet } from "react-native";

export default function ProgressScreen() {
  const progress = 0.75; // 75%

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📊 Your Progress</Text>
      <Text style={styles.text}>Sustainability Score</Text>

      <View style={styles.progressBar}>
        <View style={[styles.progressFill, { width: `${progress * 100}%` }]} />
      </View>

      <Text style={styles.text}>Badges Earned: 🌱 🌾</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  text: { fontSize: 16, marginVertical: 10 },
  progressBar: {
    width: 250,
    height: 12,
    backgroundColor: "#e5e7eb",
    borderRadius: 6,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#16a34a",
  },
});
