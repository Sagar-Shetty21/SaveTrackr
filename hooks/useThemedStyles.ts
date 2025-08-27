import { useTheme } from "@/context/ThemeContext";
import { useMemo } from "react";
import { StyleSheet } from "react-native";
import { Theme } from "../types/theme";

export const useThemedStyles = <T extends StyleSheet.NamedStyles<T>>(
    createStyles: (theme: Theme) => T
): T => {
    const { theme } = useTheme();

    return useMemo(() => createStyles(theme), [theme, createStyles]);
};
