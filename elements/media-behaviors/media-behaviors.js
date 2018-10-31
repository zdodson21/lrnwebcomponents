// ensure MediaBehaviors exists
window.MediaBehaviors = window.MediaBehaviors || {};
/**
 * `MediaBehaviors.Video` provides some helper functions for working with video
 * from multiple sources. It helps resolve a video by type and currently supports
 * youtube, vimeo, and a few other sources and helps to determine if we need
 * an iframe to display the media or a local `<video>` tag.
 *
 * This also provides a powerful little utility to clean up embedded
 * URLs that reference popular media sources in order to make sure
 * that their embed URLs are structured correctly. This is especially
 * useful for allowing users to copy and paste links from youtube's URL
 * bar yet actually transform that address into a cookie free embed that
 * strips off the related videos and other options.
 *
 * @polymerBehavior MediaBehaviors.Video
 **/
window.MediaBehaviors.Video = {
  /**
   * Compute iframe or video tag for implementation.
   */
  _sourceIsIframe: function(source) {
    let type = this.getVideoType(source);
    if (type == "local") {
      return false;
    } else {
      return true;
    }
  },
  /**
   * Check source of the video, potentially correcting bad links.
   */
  cleanVideoSource: function(input, type) {
    if (type != "local") {
      // strip off the ? modifier for youtube/vimeo so we can build ourselves
      var tmp = input.split("?");
      var v = "";
      input = tmp[0];
      if (tmp.length == 2) {
        let args = tmp[1].split("=");
        if (args[0] == "v") {
          v = args[1];
        }
      }
      // link to the vimeo video instead of the embed player address
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
      }
      // copy and paste from the URL
      else if (input.indexOf("youtube.com/watch") != -1) {
        return input.replace("youtube.com/watch", "youtube.com/embed/") + v;
      }
      // copy and paste from the URL
      else if (input.indexOf("youtube-no-cookie.com/embed") != -1) {
        return (
          input.replace("youtube-no-cookie.com/embed", "youtube.com/embed/") + v
        );
      }
      // weird share-ly style version
      else if (input.indexOf("youtu.be") != -1) {
        return input.replace("youtu.be/", "www.youtube.com/embed/") + v;
      }
      // copy and paste from the URL for sketchfab
      else if (
        input.indexOf("sketchfab.com") != -1 &&
        input.indexOf("/embed") == -1
      ) {
        return input + "/embed";
      }
      // copy and paste from the URL for sketchfab
      else if (
        input.indexOf("dailymotion.com") != -1 &&
        input.indexOf("/embed") == -1
      ) {
        return input.replace("/video/", "/embed/video/");
      }
    }
    return input;
  },
  /**
   * Figure out the type of video based on source.
   */
  getVideoType: function(source) {
    let localFormats = [
        "aac",
        "flac",
        "mov",
        "mp3",
        "mp4",
        "oga",
        "ogg",
        "ogv",
        "wav",
        "webm"
      ],
      isLocal = false;
    // some common ones
    if (source.indexOf("vimeo") != -1) {
      return "vimeo";
    } else if (
      source.indexOf("youtube") != -1 ||
      source.indexOf("youtu.be") != -1
    ) {
      return "youtube";
    } else if (source.indexOf("sketchfab.com") != -1) {
      return "sketchfab";
    } else if (source.indexOf("dailymotion.com") != -1) {
      return "dailymotion";
    }
    for (let i = 0; i < localFormats.length; i++) {
      if (!isLocal && source.toLowerCase().indexOf("." + localFormats[i]) > -1)
        isLocal = true;
    }
    // see if it's a direct file reference, otherwise we'll assume it's external
    if (isLocal) {
      return "local";
    } else {
      // not sure but iframe it for funzies
      return "external";
    }
  }
};
