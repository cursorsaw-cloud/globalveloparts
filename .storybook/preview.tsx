import type { Preview } from "@storybook/react-vite";
import "../client/src/index.css";

const preview: Preview = {
  parameters: {
    layout: "fullscreen",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "canvas",
      values: [
        { name: "canvas", value: "#f8fafc" },
        { name: "slate", value: "#0f172a" },
        { name: "white", value: "#ffffff" },
      ],
    },
  },
};

export default preview;
