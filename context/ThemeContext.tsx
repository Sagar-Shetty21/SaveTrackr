import { Theme, ThemeContextType, ThemeMode } from "@/types/theme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setStatusBarStyle } from "expo-status-bar";
import React, {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react";
import { Appearance, ColorSchemeName } from "react-native";
import { darkTheme, lightTheme } from "../themes";

const THEME_STORAGE_KEY = "themeMode";

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [themeMode, setThemeMode] = useState<ThemeMode>("system");
    const [systemTheme, setSystemTheme] = useState<ColorSchemeName>(
        Appearance.getColorScheme()
    );

    // Determine current theme based on mode
    const getCurrentTheme = (): Theme => {
        if (themeMode === "system") {
            return systemTheme === "dark" ? darkTheme : lightTheme;
        }
        return themeMode === "dark" ? darkTheme : lightTheme;
    };

    const currentTheme = getCurrentTheme();
    const isDark = currentTheme === darkTheme;

    // Load saved theme preference
    useEffect(() => {
        const loadTheme = async (): Promise<void> => {
            try {
                const savedTheme = await AsyncStorage.getItem(
                    THEME_STORAGE_KEY
                );
                if (savedTheme && isValidThemeMode(savedTheme)) {
                    setThemeMode(savedTheme as ThemeMode);
                }
            } catch (error) {
                console.error("Error loading theme:", error);
            }
        };
        loadTheme();
    }, []);

    // Listen to system theme changes
    useEffect(() => {
        const subscription = Appearance.addChangeListener(({ colorScheme }) => {
            setSystemTheme(colorScheme);
        });
        return () => subscription?.remove();
    }, []);

    // Update status bar when theme changes
    useEffect(() => {
        setStatusBarStyle(isDark ? "light" : "dark");
    }, [isDark]);

    const setTheme = async (mode: ThemeMode): Promise<void> => {
        try {
            setThemeMode(mode);
            await AsyncStorage.setItem(THEME_STORAGE_KEY, mode);
        } catch (error) {
            console.error("Error saving theme:", error);
        }
    };

    const toggleTheme = async (): Promise<void> => {
        const newMode: ThemeMode = isDark ? "light" : "dark";
        await setTheme(newMode);
    };

    const value: ThemeContextType = {
        theme: currentTheme,
        themeMode,
        isDark,
        setTheme,
        toggleTheme,
    };

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
};

const isValidThemeMode = (mode: string): mode is ThemeMode => {
    return ["light", "dark", "system"].includes(mode);
};
