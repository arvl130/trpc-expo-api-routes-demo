import { StyleSheet } from "react-native"

import EditScreenInfo from "@/components/EditScreenInfo"
import { Text, View } from "@/components/Themed"
import { api } from "@/utils/api"

export default function TabOneScreen() {
  const { status, data, error } = api.hello.useQuery({
    text: "the server",
  })

  return (
    <View style={styles.container}>
      {status === "loading" && <Text style={styles.title}>Loading ...</Text>}
      {status === "error" && (
        <Text style={styles.title}>Error: {error.message}</Text>
      )}
      {status === "success" && (
        <Text style={styles.title}>{data.greeting}</Text>
      )}

      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
})
