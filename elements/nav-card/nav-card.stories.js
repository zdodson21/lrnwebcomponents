import { html } from "lit-html";
import { NavCard } from "@haxtheweb/nav-card/nav-card.js";
import { NavCardItem } from "@haxtheweb/nav-card/lib/nav-card-item.js";
import { withKnobs } from "@open-wc/demoing-storybook";
import { StorybookUtilities } from "@haxtheweb/storybook-utilities/storybook-utilities.js";

export default {
  title: "Cards| Navigation Card",
  component: "nav-card",
  decorators: [withKnobs],
  parameters: {
    options: { selectedPanel: "storybookjs/knobs/panel", escapeHTML: false },
  },
};
const utils = new StorybookUtilities();

const NavItem = (index) => {
  let nav = utils.randomOption(["button", "a"]),
    tag = utils.randomOption(["span", "div", false]),
    type = utils.randomOption(["label", "img", "icon"]),
    id = `nav-card-item-${index}`,
    descBy = tag ? `nav-card-item-desc-${index}` : undefined,
    labelHTML = `Link Item ${index}`,
    href =
      nav === "a"
        ? `href="#"`
        : `onclick="alert('clicked ${labelHTML} (${id})')"`;
  return {
    accentColor: utils.randomColor(),
    dark: utils.randomOption("dark", ""),
    icon: "chevron-right",
    avatar:
      type === "label"
        ? undefined
        : type === "img"
          ? utils.randomImage()
          : utils.randomIcon(),
    initials:
      type === "label"
        ? utils.randomOption("", label.innerHTML, utils.randomPhrase(1, 5))
        : undefined,
    description: tag
      ? `<${tag} id="${descBy}" slot="description">${utils.randomSentence(
          1,
          5,
        )}</${tag}>`
      : undefined,
    label: `<${nav} id ="${id}" slot="label" ${
      tag ? `aria-describedby="${descBy}"` : ""
    } ${href}>${labelHTML}</${nav}>`,
  };
};

const MakeNavItem = (index) => {
  let item = NavItem(index);
  return `
    <nav-card-item 
      accent-color="${item.accentColor}"
      ${item.dark ? "dark" : ""} 
      ${item.icon ? `icon="${item.icon}"` : ""} 
      ${item.avatar ? `avatar="${item.avatar}"` : ""} 
      ${item.initials ? `avatar="${item.initials}"` : ""}>
      ${item.label}
      ${item.description}
    </nav-card-item>`;
};
export const NavCardStory = () => {
  return utils.makeElementFromClass(
    NavCard,
    {
      heading: utils.randomPhrase(1, 5),
      subheading: utils.randomBool() ? utils.randomPhrase(1, 5) : undefined,
      content: utils.randomParagraph(2, 7),
      footer: utils.randomBool()
        ? `<p style="font-size:80%;padding-bottom: 10px;text-align:center;">${utils.randomSentence(
            1,
            5,
          )}</p>`
        : undefined,
      color: utils.randomColor(),
      imageSrc: utils.randomImage(),
      linklist: `<div>${[1, 2, 3, 4, 5]
        .map((i) => MakeNavItem(i))
        .join("")}</div>`,
      maxWidth: "600px",
    },
    [
      { css: "--nav-card-image-width", title: "Width of horizontal image" },
      { css: "--nav-card-image-height", title: "Height of vertical image" },
      { css: "--nav-card-padding", title: "Default padding unit" },
      { css: "--nav-card-footer-border-color", title: "Footer border color" },
      { css: "--nav-card-box-shadow", title: "Card box-shadow" },
      { css: "--nav-card-padding-top", title: "Card padding-top " },
      { css: "--nav-card-padding-left", title: "Card padding-left" },
      { css: "--nav-card-padding-right", title: "Card padding-right" },
      { css: "--nav-card-padding-bottom", title: "Card padding-bottom" },
      { css: "--nav-card-heading-padding-top", title: "Heading padding-top" },
      { css: "--nav-card-heading-padding-left", title: "Heading padding-left" },
      {
        css: "--nav-card-heading-padding-right",
        title: "Heading padding-right",
      },
      {
        css: "--nav-card-heading-padding-bottom",
        title: "Heading padding-bottom",
      },
      {
        css: "--nav-card-subheading-padding-top",
        title: "Subeading padding-top",
      },
      {
        css: "--nav-card-subheading-padding-left",
        title: "Subeading padding-left",
      },
      {
        css: "--nav-card-subheading-padding-right",
        title: "Subeading padding-right",
      },
      {
        css: "--nav-card-subheading-padding-bottom",
        title: "Subeading padding-bottom",
      },
      { css: "--nav-card-content-padding-top", title: "Content padding-top" },
      { css: "--nav-card-content-padding-left", title: "Content padding-left" },
      {
        css: "--nav-card-content-padding-right",
        title: "Content padding-right",
      },
      {
        css: "--nav-card-content-padding-bottom",
        title: "Content padding-bottom",
      },
      {
        css: "--nav-card-linklist-border-bottom",
        title: "item's border-bottom",
      },
      { css: "--nav-card-footer-padding-top", title: "Footer padding-top" },
      { css: "--nav-card-footer-padding-left", title: "Footer padding-left" },
      { css: "--nav-card-footer-padding-right", title: "Footer padding-right" },
      {
        css: "--nav-card-footer-padding-bottom",
        title: "Footer padding-bottom",
      },
      { css: "--nav-card-color", title: "Card text color" },
      { css: "--nav-card-background-color", title: "Card background color" },
      { css: "--nav-card-border-color", title: "Card background color" },
      { css: "--nav-card-border-color", title: "Card heading text color" },
      { css: "width" },
      { css: "maxWidth" },
    ],
  );
};

export const NavCardItemStory = () => {
  let card = `<nav-card 
  color="${utils.randomColor()}" 
  image-src="${utils.randomImage()}">
  <div slot="heading">${utils.randomPhrase(1, 5)}</div>
  <div slot="subheading">${
    utils.randomBool() ? utils.randomPhrase(1, 5) : ""
  }</div>
  <div slot="content">${utils.randomParagraph(2, 7)}</div>
  <div slot="linklist">
    <!-- nav-card-item code-->
    ${utils.makeElementFromClass(
      NavCardItem,
      NavItem("demo"),
      [
        {
          css: "--nav-card-item-label-color",
          title: "item's default text color",
        },
        {
          css: "--nav-card-item-label-background-color",
          title: "item's default background-color",
        },
        {
          css: "--nav-card-item-label-font-size",
          title: "item's default font-size",
        },
        {
          css: "--nav-card-item-label-font-weight",
          title: "item's default font-weight",
        },
        {
          css: "--nav-card-item-label-font-size",
          title: "item description's default font-weight",
        },
        {
          css: "--nav-card-item-label-font-weight",
          title: "item description's default font-wight",
        },
        {
          css: "--nav-card-item-avatar-size",
          title: "default size for item's avatar",
        },
        {
          css: "--nav-card-item-avatar-width",
          title: "default width for item's avatar",
        },
        {
          css: "--nav-card-item-avatar-height",
          title: "efault height for item's avatar",
        },
        {
          css: "--nav-card-item-icon-size",
          title: "default size for item's icon",
        },
        {
          css: "--nav-card-item-icon-width",
          title: "default width for item's icon",
        },
        {
          css: "--nav-card-item-icon-height",
          title: "default height for item's icon",
        },
      ],
      [],
      true,
    )}
    <!-- nav-card-item code-->
    ${MakeNavItem(1)}
  </div>
  <div slot="footer">${
    utils.randomBool()
      ? `<p style="font-size:80%;padding-bottom: 10px;text-align:center;">${utils.randomSentence(
          1,
          5,
        )}</p>`
      : ""
  }</div>
</nav-card>`;
  return utils.getDemo(
    card,
    `<p>Use the knobs below to customize the first nav-card-item.</p>`,
  );
};
