module.exports = {
  plugins: [
    require("postcss-typography")({
      baseFontSize: "18px",
      baseLineHeight: 1.45,
      headerFontFamily: [
        "Advent Pro",
        "Helvetica Neue",
        "Segoe UI",
        "Helvetica",
        "Arial",
        "sans-serif",
      ],
      bodyFontFamily: ["Aleo", "serif"],
    }),
    require("postcss-font-magician")(),
    require("autoprefixer"),
    process.env.NODENV !== "development" &&
      require("cssnano")({
        preset: "default",
      }),
  ],
};
