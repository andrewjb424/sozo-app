// app/artists/index.tsx
import { Link } from "expo-router";
import { Text, View } from "react-native";
import { artists } from "../../../apps/mobile/.expo/data/artists";

export default function ArtistsListPage() {
  return (
    <View style={{ padding: 24 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 16 }}>
        Artists
      </Text>

      {artists.map((artist) => (
        <View key={artist.id} style={{ marginBottom: 16 }}>
          <Link href={`/artists/${artist.id}`}>
            <Text style={{ fontSize: 18, color: "blue" }}>{artist.name}</Text>
          </Link>

          <Text style={{ color: "gray" }}>
            {artist.genre} • {artist.discipline}
          </Text>
        </View>
      ))}
    </View>
  );
}
