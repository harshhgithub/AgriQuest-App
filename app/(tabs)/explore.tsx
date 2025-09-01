// app/(tabs)/explore.tsx
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function ExploreScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🔍 Explore Sustainable Practices</Text>
      <Text style={styles.card}>🌿 Organic Inputs</Text>
      <Text style={styles.card}>💧 Efficient Irrigation</Text>
      <Text style={styles.card}>🌾 Crop Rotation</Text>
      <Text style={styles.card}>🌱 Mulching</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  card: { fontSize: 18, padding: 15, marginVertical: 8, backgroundColor: "#e6f7e6", borderRadius: 10 },
});
