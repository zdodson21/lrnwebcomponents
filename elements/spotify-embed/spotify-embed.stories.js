import { html } from "lit-html";
import { withKnobs, text, boolean } from "@open-wc/demoing-storybook";
import { StorybookUtilities } from "@haxtheweb/storybook-utilities/storybook-utilities.js";
import { SpotifyEmbed } from "./spotify-embed.js";
// need to account for polymer goofiness when webpack rolls this up

export default {
  title: "Media|SpotifyEmbed",
  component: "spotify-embed",
  decorators: [withKnobs],
  parameters: {
    options: { selectedPanel: "storybookjs/knobs/panel" },
  },
};
const utils = new StorybookUtilities();
export const SpotifyEmbedStory = () => {
  return utils.makeUsageDocs(
    SpotifyEmbed,
    import.meta.url,
    utils.makeElementFromClass(SpotifyEmbed),
  );
};
