import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button } from "react-native";

export function ResetOnboarding() {
    return (
        <Button
            title="Reset Onboarding"
            onPress={async () => {
                await AsyncStorage.removeItem("hasOnboarded");
                alert("Onboarding reset. Restart the app!");
            }}
        />
    );
}
