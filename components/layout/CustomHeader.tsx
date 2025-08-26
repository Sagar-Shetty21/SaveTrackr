// components/CustomHeader.tsx
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface User {
    name: string;
    avatar?: string;
}

interface CustomHeaderProps {
    isHomeScreen?: boolean;
    user?: User;
    onBackPress?: () => void;
    onNotificationPress?: () => void;
    onProfilePress?: () => void;
    title?: string;
    backgroundColor?: string;
    textColor?: string;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({
    isHomeScreen = false,
    user = { name: "User" },
    onBackPress,
    onNotificationPress,
    onProfilePress,
    title,
    backgroundColor = "#111827",
    textColor = "#ffffff",
}) => {
    const insets = useSafeAreaInsets();

    const renderLeftContent = () => {
        if (isHomeScreen) {
            return (
                <TouchableOpacity
                    style={styles.profileContainer}
                    onPress={onProfilePress}
                    activeOpacity={0.7}
                >
                    <View style={styles.avatarContainer}>
                        {user.avatar ? (
                            <Image
                                source={{ uri: user.avatar }}
                                style={styles.avatar}
                            />
                        ) : (
                            <View style={[styles.avatar, styles.defaultAvatar]}>
                                <Text style={styles.avatarText}>
                                    {user.name.charAt(0).toUpperCase()}
                                </Text>
                            </View>
                        )}
                    </View>
                    <View style={styles.userInfo}>
                        <Text style={styles.greeting}>Good morning</Text>
                        <Text style={[styles.userName, { color: textColor }]}>
                            {user.name}
                        </Text>
                    </View>
                </TouchableOpacity>
            );
        } else {
            return (
                <View style={styles.backContainer}>
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={onBackPress}
                        activeOpacity={0.7}
                    >
                        <Text style={[styles.backIcon, { color: textColor }]}>
                            ←
                        </Text>
                    </TouchableOpacity>
                    {title && (
                        <Text style={[styles.pageTitle, { color: textColor }]}>
                            {title}
                        </Text>
                    )}
                </View>
            );
        }
    };

    return (
        <View
            style={[
                styles.container,
                {
                    backgroundColor,
                    paddingTop: insets.top, // Safe area handling
                },
            ]}
        >
            <View style={styles.content}>
                {renderLeftContent()}

                <TouchableOpacity
                    style={styles.notificationButton}
                    onPress={onNotificationPress}
                    activeOpacity={0.7}
                >
                    <View style={styles.notificationIconContainer}>
                        <Text
                            style={[
                                styles.notificationIcon,
                                { color: textColor },
                            ]}
                        >
                            🔔
                        </Text>
                        <View style={styles.notificationBadge}>
                            <Text style={styles.badgeText}>3</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
    },
    content: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        minHeight: 50,
        padding: 12,
    },
    profileContainer: {
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
    },
    avatarContainer: {
        marginRight: 12,
    },
    avatar: {
        width: 45,
        height: 45,
        borderRadius: 22.5,
    },
    defaultAvatar: {
        backgroundColor: "#4c6ef5",
        justifyContent: "center",
        alignItems: "center",
    },
    avatarText: {
        color: "#ffffff",
        fontSize: 18,
        fontWeight: "600",
    },
    userInfo: {
        flex: 1,
    },
    greeting: {
        fontSize: 12,
        color: "#a0a0a0",
        marginBottom: 2,
    },
    userName: {
        fontSize: 16,
        fontWeight: "600",
    },
    backContainer: {
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
    },
    backButton: {
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        marginRight: 12,
    },
    backIcon: {
        fontSize: 20,
        fontWeight: "bold",
    },
    pageTitle: {
        fontSize: 18,
        fontWeight: "600",
        flex: 1,
    },
    notificationButton: {
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
    notificationIconContainer: {
        position: "relative",
    },
    notificationIcon: {
        fontSize: 20,
    },
    notificationBadge: {
        position: "absolute",
        top: -8,
        right: -8,
        backgroundColor: "#ff4757",
        borderRadius: 10,
        width: 20,
        height: 20,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        borderColor: "#1a1a2e",
    },
    badgeText: {
        color: "#ffffff",
        fontSize: 10,
        fontWeight: "bold",
    },
});

export default CustomHeader;
