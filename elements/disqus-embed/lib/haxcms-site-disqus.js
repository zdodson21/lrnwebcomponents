import { DisqusEmbed } from "../disqus-embed";
import { store } from "@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-store.js";
import { autorun, toJS } from "mobx";

class HAXCMSSiteDisqus extends DisqusEmbed {
  constructor() {
    super();
    autorun(() => {
      this.pageTitle = toJS(store.activeTitle);
    });
    autorun(() => {
      this.pageIdentifier = toJS(store.activeId);
    });
    autorun(() => {
      const location = toJS(store.location);
      this.pageURL = location.route.slug;
    });
    autorun(() => {
      const manifest = toJS(store.manifest);
      if (manifest && manifest.metadata.site.lang) {
        this.lang = manifest.metadata.site.lang;
      }
    });
  }
  static get tag() {
    return "haxcms-site-disqus";
  }
  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./${this.tag}.haxProperties.json`, import.meta.url).href;
  }
}

customElements.define(HAXCMSSiteDisqus.tag, HAXCMSSiteDisqus);
export { HAXCMSSiteDisqus };
