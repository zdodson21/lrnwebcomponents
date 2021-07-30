"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.CSVtoArray = CSVtoArray;
exports.cleanVideoSource = cleanVideoSource;
exports.normalizeEventPath = normalizeEventPath;
exports.utf2Html = utf2Html;
exports.htmlEntities = htmlEntities;
exports.wrap = wrap;
exports.wrapAll = wrapAll;
exports.unwrap = unwrap;
exports.formatHTML = formatHTML;
exports.validURL = validURL;
exports.valueMapTransform = valueMapTransform;
exports.haxElementToNode = haxElementToNode;
exports.dashToCamel = dashToCamel;
exports.camelToDash = camelToDash;
exports.camelCaseToDash = camelCaseToDash;
exports.encapScript = encapScript;
exports.findTagsInHTML = findTagsInHTML;
exports.wipeSlot = wipeSlot;
exports.generateResourceID = generateResourceID;
exports.stripMSWord = stripMSWord;
exports.varExists = varExists;
exports.varGet = varGet;
exports.objectValFromStringPos = objectValFromStringPos;
exports.nodeToHaxElement = nodeToHaxElement;
exports.isElementInViewport = isElementInViewport;
exports.getRange = getRange;
exports.internalGetShadowSelection = internalGetShadowSelection;
exports.ReplaceWithPolyfill = ReplaceWithPolyfill;
exports.winEventsElement = void 0;

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return self;
}

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);
      if (desc.get) {
        return desc.get.call(receiver);
      }
      return desc.value;
    };
  }
  return _get(target, property, receiver || target);
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }
  return object;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true },
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
  return _setPrototypeOf(o, p);
}

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj &&
        typeof Symbol === "function" &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? "symbol"
        : typeof obj;
    };
  }
  return _typeof(obj);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key)
        );
      });
    }
  }
  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

function _toConsumableArray(arr) {
  return (
    _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread()
  );
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _iterableToArray(iter) {
  if (
    Symbol.iterator in Object(iter) ||
    Object.prototype.toString.call(iter) === "[object Arguments]"
  )
    return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
}

/**
 * A collection of utility functions exported for convenience
 */

/**
 * Mix of solutions from https://stackoverflow.com/questions/8493195/how-can-i-parse-a-csv-string-with-javascript-which-contains-comma-in-data
 */
function CSVtoArray(text) {
  var p = "",
    row = [""],
    ret = [row],
    i = 0,
    r = 0,
    s = !0,
    l;

  for (l in text) {
    l = text[l];

    if ('"' === l) {
      if (s && l === p) row[i] += l;
      s = !s;
    } else if ("," === l && s) l = row[++i] = "";
    else if ("\n" === l && s) {
      if ("\r" === p) row[i] = row[i].slice(0, -1);
      row = ret[++r] = [(l = "")];
      i = 0;
    } else row[i] += l;

    p = l;
  }

  return ret;
}
/**
 * Check source of the video, potentially correcting bad links.
 */

function cleanVideoSource(input) {
  // strip off the ? modifier for youtube/vimeo so we can build ourselves
  var tmp = input.split("?");
  var v = "";
  input = tmp[0];

  if (tmp.length == 2) {
    var tmp2 = tmp[1].split("&"),
      args = tmp2[0].split("="),
      qry = Array.isArray(tmp2.shift()) ? tmp2.shift().join("") : tmp2.shift();

    if (args[0] == "v") {
      var q = qry !== undefined && qry !== "" ? "?" + qry : "";
      v = args[1] + q;
    }
  } // link to the vimeo video instead of the embed player address

  if (
    input.indexOf("player.vimeo.com") == -1 &&
    input.indexOf("vimeo.com") != -1
  ) {
    // normalize what the API will return since it is API based
    // and needs cleaned up for front-end
    if (input.indexOf("/videos/") != -1) {
      input = input.replace("/videos/", "/");
    }

    return input.replace("vimeo.com/", "player.vimeo.com/video/");
  } // copy and paste from the URL
  else if (input.indexOf("youtube.com/watch") != -1) {
    return input.replace("youtube.com/watch", "youtube.com/embed/") + v;
  } // copy and paste from the URL
  else if (input.indexOf("youtube-no-cookie.com/") != -1) {
    return input.replace("youtube-no-cookie.com/", "youtube.com/") + v;
  } // weird share-ly style version
  else if (input.indexOf("youtu.be") != -1) {
    return input.replace("youtu.be/", "www.youtube.com/embed/") + v;
  } // copy and paste from the URL for sketchfab
  else if (
    input.indexOf("sketchfab.com") != -1 &&
    input.indexOf("/embed") == -1
  ) {
    return input + "/embed";
  } // copy and paste from the URL for sketchfab
  else if (
    input.indexOf("dailymotion.com") != -1 &&
    input.indexOf("/embed") == -1
  ) {
    return input.replace("/video/", "/embed/video/");
  }

  return input;
} // wrap an element with another; super basic but makes it consistent across our apps

function wrap(el, wrapper) {
  if (el && el.parentNode) {
    el.parentNode.insertBefore(wrapper, el);
    wrapper.appendChild(el);
  }
}
/**
 * Wrap an array of items all at once
 */

function wrapAll(ary, wrapper) {
  if (ary && ary.length) {
    ary[0].parentNode.insertBefore(wrapper, ary[0]);

    for (var i in ary) {
      wrapper.appendChild(ary[i]);
    }
  }
} // unwrap away from an element; super basic but makes it consistent across our apps

function unwrap(el) {
  if (el && el.parentNode) {
    // move all children out of the element
    while (el.firstChild) {
      el.parentNode.insertBefore(el.firstChild, el);
    } // remove the empty element

    el.remove();
  }
} // resolve platform differences in mouse path
// some platforms falling back to just the target itself

function normalizeEventPath(e) {
  if (e.composed && e.composedPath) {
    return e.composedPath();
  } else if (e.path) {
    return e.path;
  } else if (e.originalTarget) {
    return [e.originalTarget];
  } else {
    return [e.target];
  }
} // nicely formats / indents an HTML DOM tree for output

function formatHTML(str) {
  var div = document.createElement("div");
  div.innerHTML = str.trim();
  return formatHTMLInternals(div, 0).innerHTML;
} // HTML internals of the DOM tree

function formatHTMLInternals(node, level) {
  var indentBefore = new Array(level++ + 1).join("  "),
    indentAfter = new Array(level - 1).join("  "),
    textNode;

  for (var i = 0; i < node.children.length; i++) {
    textNode = document.createTextNode("\n" + indentBefore);
    node.insertBefore(textNode, node.children[i]);
    formatHTMLInternals(node.children[i], level);

    if (node.lastElementChild == node.children[i]) {
      textNode = document.createTextNode("\n" + indentAfter);
      node.appendChild(textNode);
    }
  }

  return node;
} // https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url

function validURL(str) {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator

  return !!pattern.test(str);
}
/**
 * Take an array of items and apply a map of values to generate a new
 * array that is the structure you're looking for with default values
 * filling in the gaps.
 */

function valueMapTransform(items, map) {
  // ensure we have a map to render
  var tmpAry = [];

  if (map) {
    items.forEach(function (item) {
      // create tag for the map
      var tmp = {};

      for (var key in map) {
        var value = map[key]; // complex transform capability for values that need processing
        // prior to being set

        if (value === true || value === false || value === null) {
          tmp[key] = value;
        } else if (typeof value === "function") {
          try {
            tmp[key] = value(item);
          } catch (e) {
            console.warn(e);
          }
        } // only set the value in the node IF we have a match in the item for data
        // odd trap but the transform case can potentially miss above and this then pass
        // which varExists requires value be a string
        else if (typeof value === "string" && varExists(item, value)) {
          tmp[key] = varGet(item, value);
        } else {
          tmp[key] = value;
        }
      }

      tmpAry.push(tmp);
    });
  }

  return tmpAry;
}
/**
 * Helper to convert camel case to dash; important when setting attributes.
 */

function camelToDash(str) {
  return str
    .replace(/\W+/g, "-")
    .replace(/([a-z\d])([A-Z])/g, "$1-$2")
    .toLowerCase();
}
/**
 * Helper to convert dash to camel; important when reading attributes.
 */

function dashToCamel(str) {
  return str.replace(/-([a-z])/g, function (g) {
    return g[1].toUpperCase();
  });
}
/**
 * Convert a haxElement to a DOM node.
 */

function haxElementToNode(haxSchema) {
  var tag = haxSchema.tag;
  var content = haxSchema.content ? haxSchema.content : "";
  var properties = haxSchema.properties ? haxSchema.properties : {}; // support sandboxed environments which
  // will hate iframe tags but love webview

  if (
    window.HaxStore &&
    window.HaxStore.instance &&
    window.HaxStore.instance._isSandboxed &&
    tag === "iframe"
  ) {
    tag = "webview";
  }

  var frag = document.createElement(tag);
  frag.innerHTML = content; // clone the fragment which will force an escalation to full node

  var newNode = frag.cloneNode(true); // support for properties if they exist

  for (var property in properties) {
    var attributeName = camelToDash(property);

    if (properties.hasOwnProperty(property)) {
      // special supporting for boolean because html is weird :p
      if (properties[property] === true) {
        newNode.setAttribute(attributeName, properties[property]);
      } else if (properties[property] === false) {
        newNode.removeAttribute(attributeName);
      } else if (
        properties[property] != null &&
        properties[property].constructor === Array
      ) {
        // do nothing if we have additional data to suggest this is actually readOnly
        // polymer / typed specific thing
        if (
          frag.properties &&
          frag.properties[property] &&
          frag.properties[property].readOnly
        ) {
        } else {
          if (newNode.set) {
            newNode.set(attributeName, properties[property]);
          } else {
            newNode[attributeName] = _toConsumableArray(properties[property]);
          }
        }
      } else if (
        properties[property] != null &&
        properties[property].constructor === Object
      ) {
        // do nothing if we have additional data to suggest this is actually readOnly
        // polymer / typed specific thing
        if (
          frag.properties &&
          frag.properties[property] &&
          frag.properties[property].readOnly
        ) {
        } else {
          if (newNode.set) {
            newNode.set(attributeName, properties[property]);
          } else {
            newNode[attributeName] = _objectSpread({}, properties[property]);
          }
        }
      } else {
        newNode.setAttribute(attributeName, properties[property]);
      }
    }
  }

  return newNode;
}
/**
 * Conver camel case to dash case
 */

function camelCaseToDash(key) {
  return key.replace(/([A-Z])/g, function (g) {
    return "-".concat(g[0].toLowerCase());
  });
}
/**
 * Encapsulate script types in an HTML blob
 */

function encapScript(html) {
  // ensure this is a string to then do replacements on, rare but possible w/ null
  if (html && typeof html.replace === "function") {
    html = html.replace(/<script[\s\S]*?>/gi, "&lt;script&gt;");
    html = html.replace(/<\/script>/gi, "&lt;/script&gt;"); // ensure that HAX tags aren't leaking in here

    html = html.replace(/<hax-(body|tray|store)[\s\S]*?>/gi, "");
    html = html.replace(/<\/hax-(body|tray|store)[\s\S]*?>/gi, "");
    html = html.replace(/<h-a-x[\s\S]*?>/gi, "");
    html = html.replace(/<\/h-a-x*?>/gi, "");
    html = html.replace(/<style[\s\S]*?>/gi, "&lt;style&gt;");
    html = html.replace(/<\/style>/gi, "&lt;/style&gt;"); // special case, it's inside a template tag

    html = html.replace(
      /<template[\s\S]*?>[\s\S]*?&lt;script[\s\S]*?&gt;[\s\S]*?&lt;\/script&gt;/gi,
      function (match, contents, offset, input_string) {
        match = match.replace("&lt;script&gt;", "<script>");
        match = match.replace("&lt;/script&gt;", "</script>");
        match = match.replace("&lt;style&gt;", "<style>");
        match = match.replace("&lt;/style&gt;", "</style>");
        return match;
      }
    );
  }

  return html;
}
/**
 * Find custom elements in HTML
 */

function findTagsInHTML(html) {
  var tags = {};
  var tag = "";
  var matches = html.match(/<\/([a-z,0-9]*?)-(\S*?)>/g);

  for (var i in matches) {
    tag = matches[i].replace("</", "").replace(">", "");
    tags[tag] = tag;
  }

  return tags;
}
/**
 * Wipe slotted content
 */

function wipeSlot(element) {
  var slot =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "*";

  // 100% clean slate
  if (slot === "*") {
    while (element.firstChild !== null) {
      element.removeChild(element.firstChild);
    }
  } else {
    for (var i in element.childNodes) {
      // test for element nodes to be safe
      if (
        _typeof(element.childNodes[i]) !==
          (typeof undefined === "undefined"
            ? "undefined"
            : _typeof(undefined)) &&
        element.childNodes[i].slot === slot
      ) {
        element.removeChild(element.childNodes[i]);
      }
    }
  }
}
/**
 * Generate a uinque ID
 */

function generateResourceID() {
  var base =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "#";

  function idPart() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  return (
    base +
    idPart() +
    idPart() +
    "-" +
    idPart() +
    "-" +
    idPart() +
    "-" +
    idPart() +
    "-" +
    idPart() +
    idPart() +
    idPart()
  );
}

function utf2Html(str) {
  var result = "",
    //converts unicode decimal value into an HTML entity
    decimal2Html = function decimal2Html(num) {
      return "&#".concat(num, ";");
    },
    //converts a character into an HTML entity
    char2Html = function char2Html(_char) {
      //spread operator can detect emoji surrogate pairs
      if (_toConsumableArray(_char).length > 1) {
        //handle and convert utf surrogate pairs
        var concat = ""; //for each part of the pair

        for (var i = 0; i < 2; i++) {
          //get the character code value
          var dec = _char[i].charCodeAt(),
            //convert to binary
            bin = dec.toString(2),
            //take the last 10 bits
            last10 = bin.slice(-10); //concatenate into 20 bit binary

          (concat = concat + last10), //add 0x10000 to get unicode value
            (unicode = parseInt(concat, 2) + 0x10000);
        } //html entity from unicode value

        return decimal2Html(unicode);
      } //ASCII character or html entity from character code

      return _char.charCodeAt() > 127
        ? decimal2Html(_char.charCodeAt())
        : _char;
    }; //check each character

  _toConsumableArray(str).forEach(function (_char2) {
    result += char2Html(_char2);
  });

  return result;
}

function htmlEntities(s) {
  return s.replace(/[\u00A0-\u9999<>\&]/gim, function (i) {
    return "&#" + i.charCodeAt(0) + ";";
  });
}
/**
 * Strip word BS as well as GDocs, box notes, Medium and some others as best we can
 */

function stripMSWord(input) {
  // 1. remove line breaks / Mso classes right off the bat
  var output = input
    .split("\n\r")
    .join("\n")
    .split("\r")
    .join("\n")
    .split("\n\n")
    .join("\n")
    .split("\n\n")
    .join("\n")
    .split("\n\n")
    .join("\n")
    .split("\n")
    .join(" ")
    .replace(/( class=(")?Mso[a-zA-Z]+(")?)/g, ""); // 2. strip Word generated HTML comments

  output = output.replace(/<\!--(\s|.)*?-->/gim, "");
  output = output.replace(/<\!(\s|.)*?>/gim, ""); // 3. remove tags leave content if any

  output = output.replace(
    /<(\/)*(meta|link|title|html|head|body|span|font|br|\\\\?xml:|xml|st1:|o:|w:|m:|v:)(\s|.)*?>/gim,
    ""
  ); // 4. Remove everything in between and including tags '<style(.)style(.)>'

  var badTags = ["style", "script", "applet", "embed", "noframes", "noscript"];

  for (var i in badTags) {
    var tagStripper = new RegExp(
      "<" + badTags[i] + "(s|.)*?" + badTags[i] + "(.*?)>",
      "gim"
    );
    output = output.replace(tagStripper, "");
  } // 5. remove attributes ' style="..."', align, start and others that we know we dont need

  output = output.replace(/ style='(\s|.)*?'/gim, "");
  output = output.replace(/ face="(\s|.)*?"/gim, "");
  output = output.replace(/ align=.*? /g, "");
  output = output.replace(/ start='.*?'/g, ""); // remove line-height; commonly set via html copy and paste in google docs

  output = output.replace(/line-height:.*?\"/g, '"');
  output = output.replace(/line-height:.*?;/g, ""); // normal font cause... obviously

  output = output.replace(/font-weight:normal;/g, ""); // text decoration in a link...

  output = output.replace(/text-decoration:none;/g, ""); // margin clean up that is in point values; only machines make these

  output = output.replace(/margin-.*?:.*?\"/g, '"');
  output = output.replace(/margin-.*?:.*?;/g, ""); // empty style tags

  output = output.replace(/ style=""/g, ""); // ID's wont apply meaningfully on a paste

  output = output.replace(/ id="(\s|.)*?"/gim, ""); // Google Docs ones

  output = output.replace(/ dir="(\s|.)*?"/gim, "");
  output = output.replace(/ role="(\s|.)*?"/gim, ""); // these are universally true tho so fine to have here

  output = output.replace(/ contenteditable="(\s|.)*?"/gim, ""); // some medium, box, github and other paste stuff as well as general paste clean up for classes
  // in multiple html primatives

  output = output.replace(/ data-(\s|.)*?"(\s|.)*?"/gim, "");
  output = output.replace(/ class="(\s|.)*?"/gim, "");
  output = output.replace(/<pstyle/gm, "<p style"); // HIGHLY specific to certain platforms, empty link tag

  output = output.replace(/<a name=\"_GoBack\"><\/a>/gm, ""); // 7. clean out empty paragraphs and endlines that cause weird spacing

  output = output.replace(/&nbsp;/gm, " "); // start of double, do it twice for nesting

  output = output.replace(/<section>/gm, "<p>");
  output = output.replace(/<\/section>/gm, "</p>");
  output = output.replace(/<p><p>/gm, "<p>");
  output = output.replace(/<p><p>/gm, "<p>"); // double, do it twice for nesting

  output = output.replace(/<\/p><\/p>/gm, "</p>");
  output = output.replace(/<\/p><\/p>/gm, "</p>"); // normalize BR's; common from GoogleDocs

  output = output.replace(/<br \/>/gm, "<br/>");
  output = output.replace(/<p><br \/><b>/gm, "<p><b>");
  output = output.replace(/<\/p><br \/><\/b>/gm, "</p></b>"); // some other things we know not to allow to wrap and
  // some things bold stuff like crazy for some odd reason

  output = output.replace(/<b><p>/gm, "<p>");
  output = output.replace(/<\/p><\/b>/gm, "</p>");
  output = output.replace(/<b>/gm, "<strong>");
  output = output.replace(/<\/b>/gm, "</strong>"); // clean up in lists because they get messy for no real reason...ever.
  // tables as well

  output = output.replace(/<p style=\".*?\">/gm, "<p>");
  output = output.replace(/<ul style=\".*?\">/gm, "<ul>");
  output = output.replace(/<ol style=\".*?\">/gm, "<ol>");
  output = output.replace(/<li style=\".*?\">/gm, "<li>");
  output = output.replace(/<td style=\".*?\">/gm, "<td>");
  output = output.replace(/<tr style=\".*?\">/gm, "<tr>"); // drop list wrappers

  output = output.replace(/<li><p>/gm, "<li>");
  output = output.replace(/<\/p><\/li>/gm, "</li>"); // bold wraps as an outer tag like p can, and on lists

  output = output.replace(/<b><ul>/gm, "<ul>");
  output = output.replace(/<\/ul><\/b>/gm, "</ul>");
  output = output.replace(/<b><ol>/gm, "<ol>");
  output = output.replace(/<\/ol><\/b>/gm, "</ol>"); // try ax'ing extra spans

  output = output.replace(/<span><p>/gm, "<p>");
  output = output.replace(/<\/p><\/span>/gm, "</p>"); // empty with lots of space

  output = output.replace(/<p>(\s*)<\/p>/gm, " "); // empty p / more or less empty

  output = output.replace(/<p><\/p>/gm, "");
  output = output.replace(/<p>&nbsp;<\/p>/gm, " "); // br somehow getting through here

  output = output.replace(/<p><br\/><\/p>/gm, "");
  output = output.replace(/<p><br><\/p>/gm, ""); // whitespace in reverse of the top case now that we've cleaned it up

  output = output.replace(/<\/p>(\s*)<p>/gm, "</p><p>"); // wow do I hate contenteditable and the dom....
  // bold and italic are treated as if they are block elements in a paste scenario
  // 8. check for empty bad tags

  for (var i in badTags) {
    var emptyTagRemove = new RegExp(
      "<" + badTags[i] + "></" + badTags[i] + ">",
      "gi"
    );
    output = output.replace(emptyTagRemove, "");
  }

  output = output.trim();
  return output;
}
/**
 * Test if a variable along a given object path exists
 */

function varExists(obj, path) {
  var g = objectValFromStringPos(obj, path, "__failedToFind__");

  if (g != "__failedToFind__") {
    return true;
  }

  return false;
}
/**
 * Return an object path or fallback value if not set
 */

function varGet(obj, path) {
  var fallback =
    arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
  return objectValFromStringPos(obj, path, fallback);
} // helper to use strings for index in Objects

function objectValFromStringPos(o, s) {
  var r =
    arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  s = s.replace(/\[(\w+)\]/g, ".$1"); // convert indexes to properties

  s = s.replace(/^\./, ""); // strip a leading dot

  var a = s.split(".");

  for (var i = 0, n = a.length; i < n; ++i) {
    var k = a[i];

    if (o) {
      if (k in o) {
        o = o[k];
      } else {
        return r;
      }
    } else {
      return r;
    }
  }

  return o;
}
/**
 * Convert a node to a HAX element. Hax elements ensure
 * a certain level of sanitization by verifying tags and
 * properties / attributes that have values.
 */

function nodeToHaxElement(node) {
  var eventName,
    props,
    tmpProps,
    property,
    attribute,
    tag,
    slotContent,
    element,
    _args = arguments;
  return regeneratorRuntime.async(function nodeToHaxElement$(_context) {
    while (1) {
      switch ((_context.prev = _context.next)) {
        case 0:
          eventName =
            _args.length > 1 && _args[1] !== undefined
              ? _args[1]
              : "insert-element";

          if (node) {
            _context.next = 3;
            break;
          }

          return _context.abrupt("return", null);

        case 3:
          // build out the properties to send along
          props = {}; // support basic styles

          if (
            _typeof(node.style) !==
            (typeof undefined === "undefined"
              ? "undefined"
              : _typeof(undefined))
          ) {
            props.style = node.getAttribute("style");
          } // don't set a null style

          if (props.style === null || props.style === "null") {
            delete props.style;
          } // test if a class exists, not everything scopes

          if (
            _typeof(node.attributes["class"]) !==
            (typeof undefined === "undefined"
              ? "undefined"
              : _typeof(undefined))
          ) {
            props["class"] = node.attributes["class"].value.replace(
              "hax-active",
              ""
            );
          } // test if a id exists as its a special case in attributes... of course

          if (
            _typeof(node.attributes.id) !==
            (typeof undefined === "undefined"
              ? "undefined"
              : _typeof(undefined))
          ) {
            props.id = node.getAttribute("id");
          }

          // relatively cross library
          if (customElements.get(node.tagName.toLowerCase())) {
            tmpProps = customElements.get(node.tagName.toLowerCase())
              .properties;
          } // weak fallback

          if (
            _typeof(tmpProps) ===
            (typeof undefined === "undefined"
              ? "undefined"
              : _typeof(undefined))
          ) {
            tmpProps = node.__data;
          } // complex elements need complex support

          if (
            _typeof(tmpProps) !==
            (typeof undefined === "undefined"
              ? "undefined"
              : _typeof(undefined))
          ) {
            // run through attributes, though non-reflected props won't be here
            // run through props, we always defer to property values
            for (property in tmpProps) {
              // make sure we only set things that have a value
              if (
                property != "class" &&
                property != "style" &&
                tmpProps.hasOwnProperty(property) &&
                _typeof(node[property]) !== undefined &&
                node[property] != null &&
                node[property] != ""
              ) {
                props[property] = node[property];
              } // special support for false boolean
              else if (node[property] === false) {
                props[property] = node[property];
              } else {
              }
            }

            for (attribute in node.attributes) {
              // make sure we only set things that have a value
              if (
                _typeof(node.attributes[attribute].name) !==
                  (typeof undefined === "undefined"
                    ? "undefined"
                    : _typeof(undefined)) &&
                node.attributes[attribute].name != "class" &&
                node.attributes[attribute].name != "style" &&
                node.attributes[attribute].name != "id" &&
                node.attributes.hasOwnProperty(attribute) &&
                _typeof(node.attributes[attribute].value) !== undefined &&
                node.attributes[attribute].value != null &&
                node.attributes[attribute].value != "" &&
                !tmpProps.hasOwnProperty(
                  dashToCamel(node.attributes[attribute].name)
                )
              ) {
                props[dashToCamel(node.attributes[attribute].name)] =
                  node.attributes[attribute].value;
              } else {
                // note: debug here if experiencing attributes that won't bind
              }
            }
          } else {
            // much easier case, usually just in primatives
            for (attribute in node.attributes) {
              // make sure we only set things that have a value
              if (
                _typeof(node.attributes[attribute].name) !==
                  (typeof undefined === "undefined"
                    ? "undefined"
                    : _typeof(undefined)) &&
                node.attributes[attribute].name != "class" &&
                node.attributes[attribute].name != "style" &&
                node.attributes[attribute].name != "id" &&
                node.attributes.hasOwnProperty(attribute) &&
                _typeof(node.attributes[attribute].value) !== undefined &&
                node.attributes[attribute].value != null &&
                node.attributes[attribute].value != ""
              ) {
                props[dashToCamel(node.attributes[attribute].name)] =
                  node.attributes[attribute].value;
              }
            }
          } // support sandboxed environments which
          // will hate iframe tags but love webview

          tag = node.tagName.toLowerCase();

          if (window.HaxStore.instance._isSandboxed && tag === "iframe") {
            tag = "webview";
          }

          _context.next = 15;
          return regeneratorRuntime.awrap(
            window.HaxStore.instance.getHAXSlot(node)
          );

        case 15:
          slotContent = _context.sent;

          // support fallback on inner text if there were no nodes
          if (slotContent == "") {
            slotContent = node.innerText;
          } // special edge case for slot binding in primatives

          if (tag === "a") {
            props.innerText = slotContent;
          } else if (
            tag === "p" ||
            tag === "table" ||
            tag === "ol" ||
            tag === "ul" ||
            tag === "div"
          ) {
            props.innerHTML = slotContent;
          }

          element = {
            tag: tag,
            properties: props,
            content: slotContent,
          };

          if (eventName !== null) {
            element.eventName = eventName;
          }

          return _context.abrupt("return", element);

        case 21:
        case "end":
          return _context.stop();
      }
    }
  });
}
/**
 * Manage window based events in a consistent and simple manner
 */

var winEventsElement = function winEventsElement(SuperClass) {
  return (
    /*#__PURE__*/
    (function (_SuperClass) {
      _inherits(_class, _SuperClass);

      function _class() {
        _classCallCheck(this, _class);

        return _possibleConstructorReturn(
          this,
          _getPrototypeOf(_class).apply(this, arguments)
        );
      }

      _createClass(_class, [
        {
          key: "__applyWinEvents",
          value: function __applyWinEvents(status) {
            if (this.__winEvents) {
              for (var eName in this.__winEvents) {
                window["".concat(status ? "add" : "remove", "EventListener")](
                  eName,
                  this[this.__winEvents[eName]].bind(this)
                );
              }
            }
          },
          /**
           * HTMLElement connected element
           */
        },
        {
          key: "connectedCallback",
          value: function connectedCallback() {
            if (
              _get(_getPrototypeOf(_class.prototype), "connectedCallback", this)
            ) {
              _get(
                _getPrototypeOf(_class.prototype),
                "connectedCallback",
                this
              ).call(this);
            }

            this.__applyWinEvents(true);
          },
          /**
           * HTML Element disconnected element
           */
        },
        {
          key: "disconnectedCallback",
          value: function disconnectedCallback() {
            this.__applyWinEvents(false);

            if (
              _get(
                _getPrototypeOf(_class.prototype),
                "disconnectedCallback",
                this
              )
            ) {
              _get(
                _getPrototypeOf(_class.prototype),
                "disconnectedCallback",
                this
              ).call(this);
            }
          },
        },
      ]);

      return _class;
    })(SuperClass)
  );
};

exports.winEventsElement = winEventsElement;

/**
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
var debug = false;
var validNodeTypes = [
  Node.ELEMENT_NODE,
  Node.TEXT_NODE,
  Node.DOCUMENT_FRAGMENT_NODE,
];

function isValidNode(node) {
  return validNodeTypes.includes(node.nodeType);
}

function findNode(s, parentNode, isLeft) {
  var nodes = parentNode.childNodes || parentNode.children;

  if (!nodes) {
    return parentNode; // found it, probably text
  }

  for (var i = 0; i < nodes.length; ++i) {
    var j = isLeft ? i : nodes.length - 1 - i;
    var childNode = nodes[j];

    if (!isValidNode(childNode)) {
      continue;
    }

    debug && console.debug("checking child", childNode, "IsLeft", isLeft);

    if (s.containsNode(childNode, true)) {
      if (s.containsNode(childNode, false)) {
        debug && console.info("found child", childNode);
        return childNode;
      }

      debug && console.info("descending child", childNode);
      return findNode(s, childNode, isLeft);
    }

    debug && console.info(parentNode, "does NOT contain", childNode);
  }

  return parentNode;
}
/**
 * @param {function(!Event)} fn to add to selectionchange internals
 */

var addInternalListener = (function () {
  var testNode = document.createElement("div");
  var testRoot = testNode.attachShadow({
    mode: "open",
  });

  if (testRoot.getSelection) {
    // getSelection really exists, why are you using us?
    document.addEventListener("selectionchange", function (ev) {
      document.dispatchEvent(new CustomEvent("-shadow-selectionchange"));
    });
    return function () {};
  }

  var withinInternals = false;
  var handlers = [];
  document.addEventListener("selectionchange", function (ev) {
    if (withinInternals) {
      return;
    }

    document.dispatchEvent(new CustomEvent("-shadow-selectionchange"));
    withinInternals = true;
    window.setTimeout(function () {
      withinInternals = false;
    }, 0);
    handlers.forEach(function (fn) {
      return fn(ev);
    });
  });
  return function (fn) {
    return handlers.push(fn);
  };
})();

var wasCaret = false;
var resolveTask = null;
addInternalListener(function (ev) {
  var s = window.getSelection();

  if (s.type === "Caret") {
    wasCaret = true;
  } else if (wasCaret && !resolveTask) {
    resolveTask = Promise.resolve(true).then(function () {
      wasCaret = false;
      resolveTask = null;
    });
  }
});
/**
 * detect if an element is currently in the viewport / visible
 * @param {Node} el
 * @returns Boolean
 */

function isElementInViewport(el) {
  var bounds =
    arguments.length > 1 && arguments[1] !== undefined
      ? arguments[1]
      : {
          top: 0,
          right: window.innerWidth,
          bottom: window.innerHeight,
          left: 0,
        };
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= bounds.top &&
    rect.left >= bounds.left &&
    rect.bottom <= bounds.bottom &&
    rect.right <= bounds.right
  );
}
/**
 * @param {!Selection} s the window selection to use
 * @param {!Node} node the node to walk from
 * @param {boolean} walkForward should this walk in natural direction
 * @return {boolean} whether the selection contains the following node (even partially)
 */

function containsNextElement(s, node, walkForward) {
  var start = node;

  while ((node = walkFromNode(node, walkForward))) {
    // walking (left) can contain our own parent, which we don't want
    if (!node.contains(start)) {
      break;
    }
  }

  if (!node) {
    return false;
  } // we look for Element as .containsNode says true for _every_ text node, and we only care about
  // elements themselves

  return node instanceof Element && s.containsNode(node, true);
}
/**
 * @param {!Selection} s the window selection to use
 * @param {!Node} leftNode the left node
 * @param {!Node} rightNode the right node
 * @return {boolean|undefined} whether this has natural direction
 */

function getSelectionDirection(s, leftNode, rightNode) {
  if (s.type !== "Range") {
    return undefined; // no direction
  }

  var measure = function measure() {
    return s.toString().length;
  };

  var initialSize = measure();
  debug && console.info('initial selection: "'.concat(s.toString(), '"'));

  if (initialSize === 1 && wasCaret && leftNode === rightNode) {
    // nb. We need to reset a single selection as Safari _always_ tells us the cursor was dragged
    // left to right (maybe RTL on those devices).
    // To be fair, Chrome has the same bug.
    debug && console.debug("resetting size=1");
    s.extend(leftNode, 0);
    s.collapseToEnd();
    return undefined;
  }

  var updatedSize; // Try extending forward and seeing what happens.

  s.modify("extend", "forward", "character");
  updatedSize = measure();
  debug && console.info('forward selection: "'.concat(s.toString(), '"'));

  if (updatedSize > initialSize || containsNextElement(s, rightNode, true)) {
    debug && console.info("got forward >, moving right");
    s.modify("extend", "backward", "character");
    return true;
  } else if (updatedSize < initialSize || !s.containsNode(leftNode)) {
    debug && console.info("got forward <, moving left");
    s.modify("extend", "backward", "character");
    return false;
  } // Maybe we were at the end of something. Extend backwards.
  // TODO(samthor): We seem to be able to get away without the 'backwards' case.

  s.modify("extend", "backward", "character");
  updatedSize = measure();
  debug && console.info('backward selection: "'.concat(s.toString(), '"'));

  if (updatedSize > initialSize || containsNextElement(s, leftNode, false)) {
    debug && console.info("got backwards >, moving left");
    s.modify("extend", "forward", "character");
    return false;
  } else if (updatedSize < initialSize || !s.containsNode(rightNode)) {
    debug && console.info("got backwards <, moving right");
    s.modify("extend", "forward", "character");
    return true;
  } // This is likely a select-all.

  return undefined;
}
/**
 * Returns the next valid node (element or text). This is needed as Safari doesn't support
 * TreeWalker inside Shadow DOM. Don't escape shadow roots.
 *
 * @param {!Node} node to start from
 * @param {boolean} walkForward should this walk in natural direction
 * @return {Node} node found, if any
 */

function walkFromNode(node, walkForward) {
  if (!walkForward) {
    return node.previousSibling || node.parentNode || null;
  }

  while (node) {
    if (node.nextSibling) {
      return node.nextSibling;
    }

    node = node.parentNode;
  }

  return null;
}
/**
 * @param {!Node} node to start from
 * @param {boolean} isLeft is this a left node
 * @param {string} s expected string
 * @return {?{node: !Node, offset: number}}
 */

function walkTextFromNode(node, isLeft, s) {
  for (; node; node = walkFromNode(node, isLeft)) {
    if (node.nodeType !== Node.TEXT_NODE) {
      continue;
    }

    var t = node.textContent;

    if (isLeft) {
      if (s.length < t.length) {
        return {
          node: node,
          offset: s.length,
        };
      }

      var prefix = s.substr(0, t.length);

      if (prefix !== t) {
        console.debug("unexpected string prefix", prefix, "expected", t);
      }

      s = s.substr(t.length);
    } else {
      if (s.length < t.length) {
        return {
          node: node,
          offset: t.length - s.length,
        };
      }

      var suffix = s.substr(s.length - t.length);

      if (suffix !== t) {
        console.debug("unexpected string suffix", suffix, "expected", t);
      }

      s = s.substr(0, s.length - t.length);
    }
  }

  return null; // too far
}
/**
 * @param {!Node} node
 * @return {number} count of initial space
 */

function initialSpace(node) {
  if (node.nodeType !== Node.TEXT_NODE) {
    return 0;
  }

  return /^\s*/.exec(node.textContent)[0].length;
}
/**
 * @param {!Node} node
 * @return {number} count of ignored trailing space
 */

function ignoredTrailingSpace(node) {
  if (node.nodeType !== Node.TEXT_NODE) {
    return 0;
  }

  var trailingSpaceCount = /\s*$/.exec(node.textContent)[0].length;

  if (!trailingSpaceCount) {
    return 0;
  }

  return trailingSpaceCount - 1; // always allow single last
}

var cachedRange = new Map();

function getRange(root) {
  if (root.getSelection) {
    var s = root.getSelection();
    return s.rangeCount ? s.getRangeAt(0) : null;
  }

  var thisFrame = cachedRange.get(root);

  if (thisFrame) {
    return thisFrame;
  }

  var initialText = window.getSelection().toString();
  var result = internalGetShadowSelection(root);
  var rs = (result && result.range && result.range.toString()) || null;

  if (rs !== null && rs !== initialText) {
    // TODO: sometimes triggers on single-char hack etc
    if (rs.replace(/\s/g, "") !== initialText.replace(/\s/g, "")) {
      // nb. selection eats initial/ending space, range does not: if whitespace is the only
      // difference, then ignore
      console.warn("invalid range, initial text:", initialText);
      console.warn("vs", rs, result.mode, result.range);
    }
  }

  cachedRange.set(root, result.range);
  window.setTimeout(function () {
    cachedRange["delete"](root);
  }, 0);
  debug && console.debug("getRange got", result);
  return result.range;
}

var fakeSelectionNode = document.createTextNode("");

function internalGetShadowSelection(root) {
  var range = document.createRange();
  var s = window.getSelection();

  if (s && root.host && !s.containsNode(root.host, true)) {
    return {
      range: null,
      mode: "none",
    };
  } // TODO: inserting fake nodes isn't ideal, but containsNode doesn't work on nearby adjacent
  // text nodes (in fact it returns true for all text nodes on the page?!).
  // insert a fake 'before' node to see if it's selected

  root.insertBefore(fakeSelectionNode, root.childNodes[0]);
  var includesBeforeRoot = s.containsNode(fakeSelectionNode);
  fakeSelectionNode.remove();

  if (includesBeforeRoot) {
    return {
      range: null,
      mode: "outside-before",
    };
  } // insert a fake 'after' node to see if it's selected

  root.appendChild(fakeSelectionNode);
  var includesAfterRoot = s.containsNode(fakeSelectionNode);
  fakeSelectionNode.remove();

  if (includesAfterRoot) {
    return {
      range: null,
      mode: "outside-after",
    };
  }

  var measure = function measure() {
    return s.toString().length;
  };

  var initialSelectionContent = s.toString();

  if (s.type === "None") {
    return null;
  }

  if (!(s.type === "Caret" || s.type === "Range")) {
    throw new TypeError("unexpected type: " + s.type);
  }

  var initialCaret = s.type === "Caret";
  var leftNode = findNode(s, root, true);
  var rightNode;
  var isNaturalDirection = undefined;

  if (s.type === "Range") {
    rightNode = findNode(s, root, false); // get right node here _before_ getSelectionDirection

    isNaturalDirection = getSelectionDirection(s, leftNode, rightNode); // isNaturalDirection means "going right"
  }

  if (s.type === "Caret") {
    // we might transition to being a caret, so don't check initial value
    s.extend(leftNode, 0);
    var at = measure();
    s.collapseToEnd();

    if (
      leftNode.nodeType === 1 &&
      leftNode.childNodes &&
      leftNode.childNodes.length > 0
    ) {
      range.setStart(leftNode.childNodes[0], at);
      range.setEnd(leftNode.childNodes[0], at);
    } else {
      range.setStart(leftNode, at);
      range.setEnd(leftNode, at);
    }

    return {
      range: range,
      mode: "caret",
    };
  } else if (isNaturalDirection === undefined) {
    if (s.type !== "Range") {
      throw new TypeError("unexpected type: " + s.type);
    } // This occurs when we can't move because we can't extend left or right to measure the
    // direction we're moving in. Good news though: we don't need to _change_ the selection
    // to measure it, so just return immediately.

    range.setStart(leftNode.childNodes[0], 0);
    range.setEnd(rightNode, rightNode.length);
    return {
      range: range,
      mode: "all",
    };
  }

  var size = measure();
  var offsetLeft, offsetRight; // only one newline/space char is cared about

  var validRightLength = rightNode.length - ignoredTrailingSpace(rightNode);

  if (isNaturalDirection) {
    // walk in the opposite direction first
    s.extend(leftNode, 0);
    offsetLeft = measure() + initialSpace(leftNode); // measure doesn't include initial space
    // then in our actual direction

    s.extend(rightNode, validRightLength);
    offsetRight = validRightLength - (measure() - size); // then revert to the original position

    s.extend(rightNode, offsetRight);
  } else {
    // walk in the opposite direction first
    s.extend(rightNode, validRightLength);
    offsetRight = validRightLength - measure(); // then in our actual direction

    s.extend(leftNode, 0);
    offsetLeft = measure() - size + initialSpace(leftNode); // doesn't include initial space
    // then revert to the original position

    s.extend(leftNode, offsetLeft);
  }

  if (debug) {
    if (leftNode === rightNode) {
      console.info(
        "got string",
        leftNode.textContent.substr(offsetLeft, offsetRight - offsetLeft)
      );
    } else {
      console.info(">>> string", leftNode.textContent.substr(offsetLeft));
      console.info("<<< string", rightNode.textContent.substr(0, offsetRight));
    }
  }

  range.setStart(leftNode, offsetLeft);
  range.setEnd(rightNode, offsetRight);
  return {
    mode: isNaturalDirection ? "right" : "left",
    range: range,
  };
} // polyfill from https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/replaceWith

function ReplaceWithPolyfill() {
  "use-strict"; // For safari, and IE > 10

  var parent = this.parentNode,
    i = arguments.length,
    currentNode;
  if (!parent) return;
  if (!i)
    // if there are no arguments
    parent.removeChild(this);

  while (i--) {
    // i-- decrements i and returns the value of i before the decrement
    currentNode = arguments[i];

    if (_typeof(currentNode) !== "object") {
      currentNode = this.ownerDocument.createTextNode(currentNode);
    } else if (currentNode.parentNode) {
      currentNode.parentNode.removeChild(currentNode);
    } // the value of "i" below is after the decrement

    if (!i)
      // if currentNode is the first argument (currentNode === arguments[0])
      parent.replaceChild(currentNode, this);
    // if currentNode isn't the first
    else parent.insertBefore(currentNode, this.nextSibling);
  }
}
