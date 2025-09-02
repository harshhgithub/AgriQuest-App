import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal } from "react-native";

const practices = [
  { key: "organic", title: "🌱 Organic Inputs", description: "Use compost and natural fertilizers." },
  { key: "irrigation", title: "💧 Efficient Irrigation", description: "Switch to drip irrigation." },
  { key: "rotation", title: "🌾 Crop Rotation", description: "Rotate crops to improve soil." },
  { key: "mulching", title: "🍂 Mulching", description: "Cover soil with mulch to retain moisture." },
];

export default function ExploreScreen() {
  const [selectedPractice, setSelectedPractice] = useState<any>(null);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🔍 Explore Practices</Text>
      {practices.map((practice) => (
        <TouchableOpacity
          key={practice.key}
          style={styles.practice}
          onPress={() => setSelectedPractice(practice)}
        >
          <Text style={styles.practiceText}>{practice.title}</Text>
        </TouchableOpacity>
      ))}

      {/* Practice Modal */}
      <Modal visible={!!selectedPractice} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>{selectedPractice?.title}</Text>
            <Text style={styles.modalDesc}>{selectedPractice?.description}</Text>
            <TouchableOpacity
              onPress={() => setSelectedPractice(null)}
              style={styles.closeBtn}
            >
              <Text>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  practice: { padding: 15, marginBottom: 10, backgroundColor: "#f0fdf4", borderRadius: 8 },
  practiceText: { fontSize: 16 },
  modalOverlay: { flex: 1, backgroundColor: "rgba(0,0,0,0.5)", justifyContent: "center", alignItems: "center" },
  modalBox: { width: 300, padding: 20, backgroundColor: "white", borderRadius: 12, alignItems: "center" },
  modalTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  modalDesc: { fontSize: 14, textAlign: "center", marginBottom: 20 },
  closeBtn: { padding: 8 },
});
