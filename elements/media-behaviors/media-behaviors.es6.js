window.MediaBehaviors=window.MediaBehaviors||{};window.MediaBehaviors.Video={_sourceIsIframe:function(source){let type=this.getVideoType(source);if("local"==type){return!1}else{return!0}},cleanVideoSource:function(input,type){if("local"!=type){var tmp=input.split("?"),v="";input=tmp[0];if(2==tmp.length){args=tmp[1].split("=");if("v"==args[0]){v=args[1]}}if(-1==input.indexOf("player.vimeo.com")&&-1!=input.indexOf("vimeo.com")){if(-1!=input.indexOf("/videos/")){input=input.replace("/videos/","/")}return input.replace("vimeo.com/","player.vimeo.com/video/")}else if(-1!=input.indexOf("youtube.com/watch")){return input.replace("youtube.com/watch","youtube.com/embed/")+v}else if(-1!=input.indexOf("youtube-no-cookie.com/embed")){return input.replace("youtube-no-cookie.com/embed","youtube.com/embed/")+v}else if(-1!=input.indexOf("youtu.be")){return input.replace("youtu.be/","www.youtube.com/embed/")+v}else if(-1!=input.indexOf("sketchfab.com")&&-1==input.indexOf("/embed")){return input+"/embed"}else if(-1!=input.indexOf("dailymotion.com")&&-1==input.indexOf("/embed")){return input.replace("/video/","/embed/video/")}}return input},getVideoType:function(source){let localFormats=["aac","flac","mov","mp3","mp4","oga","ogg","ogv","wav","webm"],isLocal=!1;if(-1!=source.indexOf("vimeo")){return"vimeo"}else if(-1!=source.indexOf("youtube")||-1!=source.indexOf("youtu.be")){return"youtube"}else if(-1!=source.indexOf("sketchfab.com")){return"sketchfab"}else if(-1!=source.indexOf("dailymotion.com")){return"dailymotion"}for(let i=0;i<localFormats.length;i++){if(!isLocal&&-1<source.toLowerCase().indexOf("."+localFormats[i]))isLocal=!0}if(isLocal){return"local"}else{return"external"}}};