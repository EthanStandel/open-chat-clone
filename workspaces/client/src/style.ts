import { createStitches } from "@stitches/react";
import create from "zustand";

export const { css, styled, globalCss, createTheme } = createStitches({
  media: {
    mobile: "(max-width: 750px)",
  },
  theme: {
    colors: {
      primary: "#ff00aa",
      secondary: "#0080ff",
      bgMain: "#f8f8ff",
      bgCard: "#ffffff",
      txtMain: "#222222",
      txtHeavy: "#000000",
      txtDim: "#666666",
    },
  },
});

const dark = createTheme({
  colors: {
    bgMain: "#20201c",
    bgCard: "#000000",
    txtMain: "#dddddd",
    txtHeavy: "#ffffff",
    txtDim: "#999999",
  },
});

globalCss({
  "html, body": {
    fontFamily: "'Nunito', sans-serif",
    backgroundColor: "$bgMain",
    color: "$txtMain",
    margin: 0,
    minHeight: "100vh",
    "&, > div": {
      minHeight: "100vh",
    },
    "> div": {
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
    },
  },
})();

type ThemeModeStore = {
  themeMode: "dark" | "light";
  setThemeMode: (themeMode: ThemeModeStore["themeMode"]) => void;
};

const useThemeMode = create<ThemeModeStore>(set => ({
  themeMode:
    localStorage.getItem("THEME_MODE") === "dark" ||
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light",
  setThemeMode: themeMode => {
    localStorage.setItem("THEME_MODE", themeMode);
    set({ themeMode });
  },
}));

const adjustThemeMode = (store: ThemeModeStore) => {
  document.body.style.colorScheme = store.themeMode;
  if (document.body.classList.contains(dark) && store.themeMode !== "dark") {
    document.body.classList.remove(dark);
  } else if (
    !document.body.classList.contains(dark) &&
    store.themeMode === "dark"
  ) {
    document.body.classList.add(dark);
  }
};

adjustThemeMode(useThemeMode.getState());
useThemeMode.subscribe(adjustThemeMode);
