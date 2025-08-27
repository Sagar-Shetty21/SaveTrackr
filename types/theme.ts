export interface ThemeColors {
    primary: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
    border: string;
    card: string;
    notification: string;
    error: string;
    success: string;
}

export interface ThemeSpacing {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
}

export interface ThemeFonts {
    regular: string;
    medium: string;
    bold: string;
}

export interface ThemeSizes {
    small: number;
    medium: number;
    large: number;
    xlarge: number;
}

export interface Theme {
    colors: ThemeColors;
    spacing: ThemeSpacing;
    fonts: ThemeFonts;
    fontSizes: ThemeSizes;
    borderRadius: {
        small: number;
        medium: number;
        large: number;
    };
}

export type ThemeMode = "light" | "dark" | "system";

export interface ThemeContextType {
    theme: Theme;
    themeMode: ThemeMode;
    isDark: boolean;
    setTheme: (mode: ThemeMode) => Promise<void>;
    toggleTheme: () => Promise<void>;
}
