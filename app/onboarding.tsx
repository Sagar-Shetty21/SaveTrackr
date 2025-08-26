import { LinearGradient } from "expo-linear-gradient";
import {
    ChevronLeft,
    ChevronRight,
    DollarSign,
    Edit3,
    Target,
    TrendingUp,
    Users,
} from "lucide-react-native";
import { useState } from "react";
import {
    Dimensions,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const { width, height } = Dimensions.get("window");

export default function Onboarding() {
    const [currentPage, setCurrentPage] = useState(0);

    const nextPage = () => {
        if (currentPage < onboardingPages.length - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleAuth = (type: string) => {
        console.log("handle login/signup");
    };

    const onboardingPages = [
        {
            title: "Welcome to SaveTrackr",
            subtitle: "Your collaborative savings companion",
            description:
                "Track savings goals with friends, family, and teammates. Make saving money a shared journey towards your dreams.",
            icon: Target,
            gradient: ["#2563eb", "#9333ea"],
            iconColor: "#60a5fa",
        },
        {
            title: "Create Savings Goals",
            subtitle: "Set your targets and watch them grow",
            description:
                "Define your savings goals with custom amounts or simply name your dreams. Whether it's a vacation, new car, or emergency fund - we've got you covered.",
            icon: DollarSign,
            gradient: ["#059669", "#0d9488"],
            iconColor: "#4ade80",
            features: [
                "Set target amounts or goal names",
                "Add detailed descriptions",
                "Track multiple goals simultaneously",
            ],
        },
        {
            title: "Invite Your Circle",
            subtitle: "Saving is better together",
            description:
                "Add family members, friends, or colleagues to your goals. Give them view or edit access to keep everyone engaged and accountable.",
            icon: Users,
            gradient: ["#9333ea", "#ec4899"],
            iconColor: "#c084fc",
            features: [
                "Add unlimited members",
                "Control access levels (View/Edit)",
                "Collaborate on shared goals",
            ],
        },
        {
            title: "Track Every Contribution",
            subtitle: "Log deposits and withdrawals with ease",
            description:
                "Members with edit access can add transactions, track who contributed what, and add notes to keep everyone informed.",
            icon: Edit3,
            gradient: ["#ea580c", "#dc2626"],
            iconColor: "#fb923c",
            features: [
                "Add/remove funds instantly",
                "Track individual contributions",
                "Add notes and context",
            ],
        },
        {
            title: "Visualize Your Progress",
            subtitle: "Beautiful insights at your fingertips",
            description:
                "Get detailed analytics, progress charts, and insights about your savings goals. See who's contributing the most and celebrate milestones together.",
            icon: TrendingUp,
            gradient: ["#0891b2", "#2563eb"],
            iconColor: "#22d3ee",
            features: [
                "Progress tracking charts",
                "Contribution leaderboards",
                "Goal completion insights",
            ],
        },
    ];

    const OnboardingPage = ({
        page,
        isLast,
    }: {
        page: any;
        isLast: boolean;
    }) => {
        const IconComponent = page.icon;

        return (
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle="light-content" backgroundColor="#111827" />
                <LinearGradient
                    colors={page.gradient}
                    style={styles.gradientBorder}
                >
                    <View style={styles.contentContainer}>
                        <ScrollView
                            contentContainerStyle={styles.scrollContent}
                            showsVerticalScrollIndicator={false}
                        >
                            <View style={styles.iconContainer}>
                                <IconComponent
                                    size={96}
                                    color={page.iconColor}
                                />
                            </View>

                            <Text style={styles.title}>{page.title}</Text>
                            <Text style={styles.subtitle}>{page.subtitle}</Text>
                            <Text style={styles.description}>
                                {page.description}
                            </Text>

                            {page.features && (
                                <View style={styles.featuresContainer}>
                                    {page.features.map(
                                        (feature: string, idx: number) => (
                                            <View
                                                key={idx}
                                                style={styles.featureCard}
                                            >
                                                <Text
                                                    style={styles.featureText}
                                                >
                                                    {feature}
                                                </Text>
                                            </View>
                                        )
                                    )}
                                </View>
                            )}
                        </ScrollView>

                        <View style={styles.navigationContainer}>
                            <TouchableOpacity
                                onPress={prevPage}
                                disabled={currentPage === 0}
                                style={[
                                    styles.navButton,
                                    currentPage === 0 &&
                                        styles.navButtonDisabled,
                                ]}
                            >
                                <ChevronLeft
                                    size={20}
                                    color={
                                        currentPage === 0
                                            ? "#6b7280"
                                            : "#d1d5db"
                                    }
                                />
                                <Text
                                    style={[
                                        styles.navButtonText,
                                        currentPage === 0 &&
                                            styles.navButtonTextDisabled,
                                    ]}
                                >
                                    Previous
                                </Text>
                            </TouchableOpacity>

                            {!isLast ? (
                                <TouchableOpacity
                                    onPress={nextPage}
                                    style={styles.nextButton}
                                >
                                    <Text style={styles.nextButtonText}>
                                        Next
                                    </Text>
                                    <ChevronRight size={20} color="#111827" />
                                </TouchableOpacity>
                            ) : (
                                <TouchableOpacity
                                    onPress={() => handleAuth("login")}
                                    style={styles.loginButton}
                                >
                                    <Text style={styles.loginButtonText}>
                                        Login
                                    </Text>
                                </TouchableOpacity>
                            )}
                        </View>
                    </View>
                </LinearGradient>

                <View style={styles.pagination}>
                    {onboardingPages.map((_, idx) => (
                        <View
                            key={idx}
                            style={[
                                styles.paginationDot,
                                idx === currentPage &&
                                    styles.paginationDotActive,
                            ]}
                        />
                    ))}
                </View>
            </SafeAreaView>
        );
    };

    return (
        <OnboardingPage
            page={onboardingPages[currentPage]}
            isLast={currentPage === onboardingPages.length - 1}
        />
    );
}

export const screenOptions = {
    headerShown: false,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#111827",
    },
    gradientBorder: {
        flex: 1,
        margin: 24,
        borderRadius: 24,
        padding: 4,
    },
    contentContainer: {
        flex: 1,
        backgroundColor: "#111827",
        borderRadius: 20,
        padding: 32,
    },
    scrollContent: {
        flexGrow: 1,
        alignItems: "center",
        paddingBottom: 20,
    },
    iconContainer: {
        marginBottom: 24,
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#ffffff",
        textAlign: "center",
        marginBottom: 16,
    },
    subtitle: {
        fontSize: 20,
        color: "#d1d5db",
        textAlign: "center",
        marginBottom: 24,
    },
    description: {
        fontSize: 18,
        color: "#9ca3af",
        textAlign: "center",
        lineHeight: 26,
        maxWidth: width * 0.8,
        marginBottom: 32,
    },
    featuresContainer: {
        width: "100%",
        gap: 16,
    },
    featureCard: {
        backgroundColor: "#1f2937",
        borderRadius: 12,
        padding: 16,
        alignItems: "center",
    },
    featureText: {
        color: "#d1d5db",
        textAlign: "center",
        fontSize: 16,
    },
    navigationContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 32,
    },
    navButton: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 24,
    },
    navButtonDisabled: {
        opacity: 0.5,
    },
    navButtonText: {
        color: "#d1d5db",
        marginLeft: 8,
        fontSize: 16,
    },
    navButtonTextDisabled: {
        color: "#6b7280",
    },
    nextButton: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#ffffff",
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 24,
    },
    nextButtonText: {
        color: "#111827",
        marginRight: 8,
        fontSize: 16,
        fontWeight: "500",
    },
    loginButton: {
        backgroundColor: "#2563eb",
        paddingHorizontal: 32,
        paddingVertical: 12,
        borderRadius: 24,
    },
    loginButtonText: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: "500",
    },
    pagination: {
        flexDirection: "row",
        justifyContent: "center",
        paddingVertical: 24,
        gap: 8,
    },
    paginationDot: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: "#6b7280",
    },
    paginationDotActive: {
        backgroundColor: "#ffffff",
    },
    dashboardContainer: {
        flex: 1,
        backgroundColor: "#111827",
    },
    header: {
        backgroundColor: "#1f2937",
        borderBottomWidth: 1,
        borderBottomColor: "#374151",
    },
    headerContent: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 24,
        paddingVertical: 16,
    },
    headerLeft: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#ffffff",
    },
    headerRight: {
        flexDirection: "row",
        alignItems: "center",
        gap: 16,
    },
    welcomeText: {
        color: "#d1d5db",
        fontSize: 16,
    },
    avatar: {
        width: 40,
        height: 40,
        backgroundColor: "#374151",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    avatarText: {
        color: "#ffffff",
        fontSize: 14,
        fontWeight: "500",
    },
    dashboardContent: {
        paddingHorizontal: 24,
        paddingVertical: 48,
    },
    dashboardHeader: {
        alignItems: "center",
        marginBottom: 48,
    },
    dashboardTitle: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#ffffff",
        marginBottom: 16,
        textAlign: "center",
    },
    dashboardSubtitle: {
        color: "#9ca3af",
        fontSize: 18,
        textAlign: "center",
    },
    emptyStateCard: {
        backgroundColor: "#1f2937",
        borderRadius: 16,
        padding: 48,
        alignItems: "center",
        marginBottom: 64,
    },
    emptyStateIcon: {
        width: 96,
        height: 96,
        backgroundColor: "#374151",
        borderRadius: 48,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 24,
    },
    emptyStateTitle: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#ffffff",
        marginBottom: 16,
    },
    emptyStateDescription: {
        color: "#9ca3af",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 32,
        maxWidth: 280,
    },
    createGoalButton: {
        backgroundColor: "#2563eb",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 32,
        paddingVertical: 16,
        borderRadius: 12,
        gap: 8,
    },
    createGoalButtonText: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: "500",
    },
    featuresPreview: {
        gap: 32,
    },
    featurePreviewCard: {
        backgroundColor: "#1f2937",
        borderRadius: 12,
        padding: 24,
        alignItems: "center",
    },
    featurePreviewTitle: {
        fontSize: 18,
        fontWeight: "600",
        color: "#ffffff",
        marginTop: 16,
        marginBottom: 8,
    },
    featurePreviewDescription: {
        color: "#9ca3af",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 22,
    },
});
