import gjsPreset from "grapesjs-preset-newsletter";

export const grapeSettings = {
  container: "#gjs",
  plugins: [gjsPreset],
  pluginOpts: {
    gjsPreset: {},
  },
  blockManager: {
    appendTo: "#block-editor",
  },
  panels: {
    default: {},
  },
};
