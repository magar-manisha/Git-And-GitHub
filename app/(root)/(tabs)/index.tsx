import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-red-400  bg-black">Hello Daily Sewa App.</Text>
      <Link href="/(auth)/sign-in"><Text>SignIn</Text></Link>
      <Link href="/explore"><Text>Explore</Text></Link>
      <Link href="/profile"><Text>Profile</Text></Link>
      <Link href="/properties/1"><Text>Property</Text></Link>
    </View>
  );
}
