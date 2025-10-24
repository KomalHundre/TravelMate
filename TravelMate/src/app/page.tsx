"use client";

import { C1Chat, ThemeProvider } from "@thesysai/genui-sdk";
import "@crayonai/react-ui/styles/index.css";
import { Theme, themePresets } from "@crayonai/react-ui";

export type ThemeFont =
  | "Inter"
  | "Roboto"
  | "Plus Jakarta Sans"
  | "Open Sans"
  | "Bitter"
  | "Merriweather"
  | "Playfair Display"
  | "Crimson Text"
  | "Geist"
  | "Figtree"
  | "Manrope"
  | "Work Sans"
  | "DM Sans"
  | "IBM Plex Serif"
  | "Space Mono"
  | "Geist Mono"
  | "Host Grotesk";

const generateTypography = () => ({
  fontPrimary: `400 16px/20px Inter`,
  fontHeadingLarge: `600 28px/32.2px Inter`,
  fontHeadingMedium: `600 24px/27.6px Inter`,
  fontHeadingSmall: `500 18px/22.5px Inter`,
  fontTitle: `500 16px/20px Inter`,
  fontTitleMedium: `500 16px/20px Inter`,
  fontTitleSmall: `500 16px/20px Inter`,
  fontBody: `400 16px/24px Inter`,
  fontBodyLargeHeavy: `500 18px/27px Inter`,
  fontBodyLarge: `400 18px/27px Inter`,
  fontBodyMedium: `400 16px/20px Inter`,
  fontBodySmall: `400 14px/21px Inter`,
  fontBodyHeavy: `500 16px/24px Inter`,
  fontBodySmallHeavy: `600 16px/20px Inter`,
  fontBodyLink: `500 16px/24px Inter`,
  fontLabelLarge: `400 16px/19.2px Inter`,
  fontLabelLargeHeavy: `500 16px/19.2px Inter`,
  fontLabel: `400 14px/16.8px Inter`,
  fontLabelHeavy: `500 14px/16.8px Inter`,
  fontLabelMedium: `400 16px/20px Inter`,
  fontLabelMediumHeavy: `600 16px/20px Inter`,
  fontLabelSmall: `400 12px/14.4px Inter`,
  fontLabelSmallHeavy: `500 12px/14.4px Inter`,
  fontLabelExtraSmall: `400 10px/12px Inter`,
  fontLabelExtraSmallHeavy: `500 10px/12px Inter`,
  shadowS: "0px 1px 2px rgba(0, 0, 0, 0.04)",
  shadowM: "0px 4px 6px rgba(0, 0, 0, 0.04)",
  shadowL: "0px 1px 8px rgba(0, 0, 0, 0.08)",
  shadowXl: "0px 10px 15px rgba(0, 0, 0, 0.1)",
});

const theme = {
  ...themePresets.default.darkTheme,
  ...generateTypography(),
} as Theme;

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <C1Chat apiUrl="/api/chat" />
    </ThemeProvider>
  );
}
