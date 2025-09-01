// app/(tabs)/quests.tsx
import { View, Text, StyleSheet } from "react-native";

export default function QuestsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏆 Active Quests</Text>
      <Text style={styles.quest}>🌿 Complete 3 weeks of mulching on banana fields</Text>
      <Text style={styles.quest}>💧 Switch to bio-pesticides this season</Text>
      <Text style={styles.quest}>🌱 Plant 50 saplings this month</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  quest: { fontSize: 16, padding: 12, marginVertical: 8, backgroundColor: "#f0f8ff", borderRadius: 10 },
});
