import { ResetOnboarding } from "@/components/dev/ResetOnboarding";
import { PieChart, Plus, Target, TrendingUp, Users } from "lucide-react-native";
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

export default function App() {
    const Dashboard = () => (
        <SafeAreaView style={styles.dashboardContainer}>
            <ResetOnboarding />
            <StatusBar barStyle="light-content" backgroundColor="#111827" />

            {/* Header */}
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <View style={styles.headerLeft}>
                        <Target size={32} color="#60a5fa" />
                        <Text style={styles.headerTitle}>SaveTrackr</Text>
                    </View>
                    <View style={styles.headerRight}>
                        <Text style={styles.welcomeText}>Welcome back!</Text>
                        <View style={styles.avatar}>
                            <Text style={styles.avatarText}>U</Text>
                        </View>
                    </View>
                </View>
            </View>

            <ScrollView contentContainerStyle={styles.dashboardContent}>
                <View style={styles.dashboardHeader}>
                    <Text style={styles.dashboardTitle}>
                        Your Savings Dashboard
                    </Text>
                    <Text style={styles.dashboardSubtitle}>
                        Start your savings journey by creating your first goal
                    </Text>
                </View>

                {/* Empty State */}
                <View style={styles.emptyStateCard}>
                    <View style={styles.emptyStateIcon}>
                        <Target size={48} color="#6b7280" />
                    </View>
                    <Text style={styles.emptyStateTitle}>No Goals Yet</Text>
                    <Text style={styles.emptyStateDescription}>
                        Create your first savings goal and start tracking your
                        progress with friends and family.
                    </Text>
                    <TouchableOpacity style={styles.createGoalButton}>
                        <Plus size={20} color="#ffffff" />
                        <Text style={styles.createGoalButtonText}>
                            Create Your First Goal
                        </Text>
                    </TouchableOpacity>
                </View>

                {/* Features Preview */}
                <View style={styles.featuresPreview}>
                    <View style={styles.featurePreviewCard}>
                        <Users size={48} color="#c084fc" />
                        <Text style={styles.featurePreviewTitle}>
                            Collaborate
                        </Text>
                        <Text style={styles.featurePreviewDescription}>
                            Invite members and work together towards your goals
                        </Text>
                    </View>

                    <View style={styles.featurePreviewCard}>
                        <PieChart size={48} color="#4ade80" />
                        <Text style={styles.featurePreviewTitle}>
                            Track Progress
                        </Text>
                        <Text style={styles.featurePreviewDescription}>
                            Visualize your savings with beautiful charts and
                            insights
                        </Text>
                    </View>

                    <View style={styles.featurePreviewCard}>
                        <TrendingUp size={48} color="#60a5fa" />
                        <Text style={styles.featurePreviewTitle}>
                            Stay Motivated
                        </Text>
                        <Text style={styles.featurePreviewDescription}>
                            See contributions and celebrate milestones together
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );

    return <Dashboard />;
}

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
