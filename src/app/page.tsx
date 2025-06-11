"use client";

import { useState } from "react";
import {
    ChevronRight,
    ChevronLeft,
    Users,
    Target,
    TrendingUp,
    PieChart,
    DollarSign,
    Plus,
    Eye,
    Edit3,
} from "lucide-react";

export default function Home() {
    const [currentPage, setCurrentPage] = useState(0);
    const [showDashboard, setShowDashboard] = useState(false);

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
        // For now, just show Dashboard
        setShowDashboard(true);
    };

    // Onboarding Pages Data
    const onboardingPages = [
        {
            title: "Welcome to SaveTrackr",
            subtitle: "Your collaborative savings companion",
            description:
                "Track savings goals with friends, family, and teammates. Make saving money a shared journey towards your dreams.",
            icon: <Target className="w-24 h-24 text-blue-400" />,
            gradient: "from-blue-600 to-purple-600",
        },
        {
            title: "Create Savings Goals",
            subtitle: "Set your targets and watch them grow",
            description:
                "Define your savings goals with custom amounts or simply name your dreams. Whether it's a vacation, new car, or emergency fund - we've got you covered.",
            icon: <DollarSign className="w-24 h-24 text-green-400" />,
            gradient: "from-green-600 to-teal-600",
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
            icon: <Users className="w-24 h-24 text-purple-400" />,
            gradient: "from-purple-600 to-pink-600",
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
            icon: <Edit3 className="w-24 h-24 text-orange-400" />,
            gradient: "from-orange-600 to-red-600",
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
            icon: <TrendingUp className="w-24 h-24 text-cyan-400" />,
            gradient: "from-cyan-600 to-blue-600",
            features: [
                "Progress tracking charts",
                "Contribution leaderboards",
                "Goal completion insights",
            ],
        },
    ];

    const OnboardingPage = ({ page, isLast }: any) => (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
            <div className="max-w-4xl w-full">
                <div
                    className={`bg-gradient-to-br ${page.gradient} rounded-3xl p-1`}
                >
                    <div className="bg-gray-900 rounded-3xl p-8 md:p-12">
                        <div className="text-center mb-8">
                            <div className="flex justify-center mb-6">
                                {page.icon}
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                                {page.title}
                            </h1>
                            <p className="text-xl text-gray-300 mb-6">
                                {page.subtitle}
                            </p>
                            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                                {page.description}
                            </p>
                        </div>

                        {page.features && (
                            <div className="grid md:grid-cols-3 gap-4 mb-8">
                                {page.features.map(
                                    (feature: string, idx: number) => (
                                        <div
                                            key={idx}
                                            className="bg-gray-800 rounded-xl p-4 text-center"
                                        >
                                            <p className="text-gray-300">
                                                {feature}
                                            </p>
                                        </div>
                                    )
                                )}
                            </div>
                        )}

                        <div className="flex justify-between items-center mt-12">
                            <button
                                onClick={prevPage}
                                disabled={currentPage === 0}
                                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all ${
                                    currentPage === 0
                                        ? "text-gray-600 cursor-not-allowed"
                                        : "text-gray-300 hover:text-white hover:bg-gray-800"
                                }`}
                            >
                                <ChevronLeft className="w-5 h-5" />
                                <span>Previous</span>
                            </button>

                            <div className="flex space-x-2">
                                {onboardingPages.map((_, idx) => (
                                    <div
                                        key={idx}
                                        className={`w-3 h-3 rounded-full transition-all ${
                                            idx === currentPage
                                                ? "bg-white"
                                                : "bg-gray-600"
                                        }`}
                                    />
                                ))}
                            </div>

                            {!isLast ? (
                                <button
                                    onClick={nextPage}
                                    className="flex items-center space-x-2 px-6 py-3 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-all font-medium"
                                >
                                    <span>Next</span>
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            ) : (
                                <div className="flex space-x-4">
                                    <button
                                        onClick={() => handleAuth("login")}
                                        className="px-8 py-3 border border-gray-600 text-white rounded-full hover:bg-gray-800 transition-all font-medium"
                                    >
                                        Login
                                    </button>
                                    <button
                                        onClick={() => handleAuth("signup")}
                                        className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all font-medium"
                                    >
                                        Sign Up
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const Dashboard = () => (
        <div className="min-h-screen bg-gray-900 text-white">
            {/* Header */}
            <div className="bg-gray-800 border-b border-gray-700">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <Target className="w-8 h-8 text-blue-400" />
                            <h1 className="text-2xl font-bold">SaveTrackr</h1>
                        </div>
                        <div className="flex items-center space-x-4">
                            <span className="text-gray-300">Welcome back!</span>
                            <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                                <span className="text-sm font-medium">U</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">
                        Your Savings Dashboard
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Start your savings journey by creating your first goal
                    </p>
                </div>

                {/* Empty State */}
                <div className="bg-gray-800 rounded-2xl p-12 text-center">
                    <div className="max-w-md mx-auto">
                        <div className="w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Target className="w-12 h-12 text-gray-400" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">
                            No Goals Yet
                        </h3>
                        <p className="text-gray-400 mb-8">
                            Create your first savings goal and start tracking
                            your progress with friends and family.
                        </p>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-medium transition-all flex items-center space-x-2 mx-auto">
                            <Plus className="w-5 h-5" />
                            <span>Create Your First Goal</span>
                        </button>
                    </div>
                </div>

                {/* Features Preview */}
                <div className="mt-16 grid md:grid-cols-3 gap-8">
                    <div className="bg-gray-800 rounded-xl p-6 text-center">
                        <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                        <h4 className="text-lg font-semibold mb-2">
                            Collaborate
                        </h4>
                        <p className="text-gray-400">
                            Invite members and work together towards your goals
                        </p>
                    </div>
                    <div className="bg-gray-800 rounded-xl p-6 text-center">
                        <PieChart className="w-12 h-12 text-green-400 mx-auto mb-4" />
                        <h4 className="text-lg font-semibold mb-2">
                            Track Progress
                        </h4>
                        <p className="text-gray-400">
                            Visualize your savings with beautiful charts and
                            insights
                        </p>
                    </div>
                    <div className="bg-gray-800 rounded-xl p-6 text-center">
                        <TrendingUp className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                        <h4 className="text-lg font-semibold mb-2">
                            Stay Motivated
                        </h4>
                        <p className="text-gray-400">
                            See contributions and celebrate milestones together
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );

    if (showDashboard) {
        return <Dashboard />;
    }

    return (
        <OnboardingPage
            page={onboardingPages[currentPage]}
            isLast={currentPage === onboardingPages.length - 1}
        />
    );
}
