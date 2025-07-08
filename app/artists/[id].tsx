// app/artists/[id].tsx
import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import { artists } from "../../../apps/mobile/.expo/data/artists";

export default function ArtistDetailPage() {
  const { id } = useLocalSearchParams();
  const artist = artists.find((a) => a.id === id);

  if (!artist) {
    return (
      <View style={{ padding: 24 }}>
        <Text>Artist not found.</Text>
      </View>
    );
  }

  return (
    <View style={{ padding: 24 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>{artist.name}</Text>
      <Text>{artist.genre}</Text>
      <Text>{artist.discipline}</Text>
      <Text style={{ marginTop: 16 }}>{artist.bio}</Text>
    </View>
  );
}