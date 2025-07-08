import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function HomePage() {
  return (
    <View style={{ padding: 24 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Welcome to SOZO</Text>
      <Text style={{ marginVertical: 12 }}>
        A platform to discover and showcase artists.
      </Text>
      <Link href="/artists">
        <Text style={{ color: "blue", fontSize: 18 }}>View All Artists</Text>
      </Link>
    </View>
  );
}
