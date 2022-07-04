import gjsPreset from "grapesjs-preset-newsletter";

export const grapeSettings = {
  container: "#gjs",
  plugins: [gjsPreset],
  pluginOpts: {
    [gjsPreset]: {},
  },
  blockManager: {
    appendTo: "#blocks-editor",
  },
  styleManager: {
    appendTo: "#styles-editor",
  },
  layerManager: {
    appendTo: "#layers-editor",
  },
  panels: {
    default: [],
  },
};
