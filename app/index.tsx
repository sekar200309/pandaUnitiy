import { useEffect, useState } from "react";
import { Redirect } from "expo-router";
import { View, Text, ActivityIndicator } from "react-native";
import * as Updates from "expo-updates";

export default function Index() {
  const [isUpdating, setIsUpdating] = useState(true);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    async function checkForUpdates() {
      try {
        const update = await Updates.checkForUpdateAsync();
        if (update.isAvailable) {
          await Updates.fetchUpdateAsync();
          await Updates.reloadAsync(); // Restart app to apply update
        }
      } catch (error) {
        console.log("Error checking for updates:", error);
      }
      setIsUpdating(false);
      setShouldRedirect(true); // Now ready to redirect
    }

    checkForUpdates();
  }, []);

  if (isUpdating) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="blue" />
        <Text>Checking for updates...</Text>
      </View>
    );
  }

  if (shouldRedirect) {
    return <Redirect href={"/home"} />;
  }

  return null;
}
