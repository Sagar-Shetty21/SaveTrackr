// utils/headerOptions.tsx
import CustomHeader from "@/components/layout/CustomHeader";

interface HeaderConfig {
    isHomeScreen?: boolean;
    title?: string;
    backgroundColor?: string;
    showNotifications?: boolean;
}

// Global user data - you can move this to context/redux
const user = {
    name: "John Doe",
    avatar: "https://example.com/avatar.jpg",
};

export const createHeaderOptions = (config: HeaderConfig = {}) => {
    const {
        isHomeScreen = false,
        title,
        backgroundColor,
        showNotifications = true,
    } = config;

    return ({ navigation }: { navigation: any }) => ({
        header: () => (
            <CustomHeader
                isHomeScreen={isHomeScreen}
                title={title}
                user={user}
                backgroundColor={backgroundColor}
                onBackPress={() => navigation.goBack()}
                onNotificationPress={
                    showNotifications
                        ? () => navigation.navigate("Notifications")
                        : undefined
                }
                onProfilePress={() => navigation.navigate("Profile")}
            />
        ),
    });
};
