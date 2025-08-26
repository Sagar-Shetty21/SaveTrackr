import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";

export default function RootLayout() {
    const { getItem, setItem } = useAsyncStorage("hasOnboarded");
    const [isFirstLaunch, setIsFirstLaunch] = useState<boolean | null>(null);

    useEffect(() => {
        const checkFirstLaunch = async () => {
            const onboarded = await getItem();
            if (onboarded) {
                setIsFirstLaunch(false);
            } else {
                setIsFirstLaunch(true);
                await setItem("true");
            }
        };
        checkFirstLaunch();
    }, [getItem, setItem]);

    if (isFirstLaunch === null) return null; // or splash screen

    return (
        <Stack>
            {isFirstLaunch ? (
                <Stack.Screen
                    name="onboarding"
                    options={{ headerShown: false }}
                />
            ) : (
                <Stack.Screen
                    name="index"
                    options={{ headerShown: true, title: "Home" }}
                />
            )}
        </Stack>
    );
}
