import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal } from "react-native";

const quests = [
  { key: "mulching", title: "🌿 Mulch Banana Fields", description: "Apply mulch to improve soil health.", points: 100 },
  { key: "bio", title: "💧 Adopt Bio-Pesticides", description: "Switch to bio-friendly alternatives.", points: 200 },
  { key: "saplings", title: "🌱 Plant Saplings", description: "Plant 50 new saplings.", points: 150 },
];

export default function QuestsScreen() {
  const [selectedQuest, setSelectedQuest] = useState<any>(null);
  const [completed, setCompleted] = useState<Record<string, boolean>>({});

  const completeQuest = (quest: any) => {
    setCompleted({ ...completed, [quest.key]: true });
    setSelectedQuest(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏆 Active Quests</Text>
      {quests.map((quest) => (
        <TouchableOpacity
          key={quest.key}
          style={[
            styles.quest,
            completed[quest.key] && { backgroundColor: "#d1fae5" },
          ]}
          onPress={() => setSelectedQuest(quest)}
        >
          <Text style={styles.questText}>
            {quest.title} {completed[quest.key] ? "✅" : ""}
          </Text>
        </TouchableOpacity>
      ))}

      {/* Quest Modal */}
      <Modal visible={!!selectedQuest} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>{selectedQuest?.title}</Text>
            <Text style={styles.modalDesc}>{selectedQuest?.description}</Text>
            <TouchableOpacity
              style={styles.completeBtn}
              onPress={() => completeQuest(selectedQuest)}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Complete Quest
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSelectedQuest(null)}
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
  quest: { padding: 15, marginBottom: 10, backgroundColor: "#f0fdf4", borderRadius: 8 },
  questText: { fontSize: 16 },
  modalOverlay: { flex: 1, backgroundColor: "rgba(0,0,0,0.5)", justifyContent: "center", alignItems: "center" },
  modalBox: { width: 300, padding: 20, backgroundColor: "white", borderRadius: 12, alignItems: "center" },
  modalTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  modalDesc: { fontSize: 14, textAlign: "center", marginBottom: 20 },
  completeBtn: { backgroundColor: "#16a34a", padding: 10, borderRadius: 8, marginBottom: 10 },
  closeBtn: { padding: 8 },
});
