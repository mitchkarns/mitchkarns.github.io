if("undefined"==typeof console)var console={log:function(){},time:function(){},timeEnd:function(){}};!function(a){"undefined"==typeof a.prototype.trim&&(a.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")})}(String),Object.prototype.hasOwnProperty||(Object.prototype.hasOwnProperty=function(a){var b=this.__proto__||this.constructor.prototype;return a in this&&(!(a in b)||b[a]!==this[a])}),"function"!=typeof Object.getOwnPropertyNames&&(Object.getOwnPropertyNames=function(a){var b=[];if("object"==typeof a&&null!==a)for(var c in a)a.hasOwnProperty(c)&&b.push(c);return b}),function(){function a(){if(!d.isReady){try{document.documentElement.doScroll("left")}catch(b){return void setTimeout(a,1)}d.ready()}}var b,c,d=function(){},e=(window.an_jQuery,window.$an,!1),f=[];d.fn={ready:function(a){return d.bindReady(),d.isReady?a.call(document,d):f&&f.push(a),this}},d.isReady=!1,d.ready=function(){if(!d.isReady){if(!document.body)return setTimeout(d.ready,13);if(d.isReady=!0,f){for(var a,b=0;a=f[b++];)a.call(document,d);f=null}d.fn.triggerHandler&&d(document).triggerHandler("ready")}},d.bindReady=function(){if(!e){if(e=!0,"complete"===document.readyState)return d.ready();if(document.addEventListener)document.addEventListener("DOMContentLoaded",c,!1),window.addEventListener("load",d.ready,!1);else if(document.attachEvent){document.attachEvent("onreadystatechange",c),window.attachEvent("onload",d.ready);var b=!1;try{b=null==window.frameElement}catch(f){}document.documentElement.doScroll&&b&&a()}}},b=d(document),document.addEventListener?c=function(){document.removeEventListener("DOMContentLoaded",c,!1),d.ready()}:document.attachEvent&&(c=function(){"complete"===document.readyState&&(document.detachEvent("onreadystatechange",c),d.ready())}),window.an_jQuery=window.$an=d}(),function(){var a=new function(){"use strict";var a="",b=null;this.activeWindow=function(){var a=window;try{this.isPreview()||window.top==window.self||(a=window.top)}catch(b){a=window}return a},this.activeWindowDocument=function(){var a,b=this.activeWindow();try{a=b.document}catch(c){a=window.document}return a},this.isPreviewGenerator=function(){if(this.isPreview()){document.domain="adsnative.com";try{if(window.top!=window.self&&-1!=window.top.document.location.href.indexOf("adsnative.com/preview/"))return!0}catch(a){return!1}}return!1},this.isPreview=function(){var a=this.getPageHostName();return-1!=a.indexOf("adsnative.com")?!0:!1},this.getPageHostName=function(){if(a)return a;try{a=window.top.document.location.host}catch(b){a=window.document.location.host}return a},this.isPreviewMode=function(){var a=this.getURLParams();return this.isPreview()||a.hasOwnProperty("adsnative_preview")?!0:!1},this.isProfilingMode=function(){var a=this.getURLParams();return this.isPreviewMode()&&a.hasOwnProperty("profile")&&a.profile?!0:!1},this.urlPrefix=function(){return"https:"==location.protocol?"https:":"http:"},this.getPreviewModeHost=function(){if(this.isPreview()&&this.isPreviewGenerator()){var a=this.getPageHostName();if("dev-www.adsnative.com"==a)return"http://dev-api.adsnative.com";if("stage.adsnative.com"==a)return this.urlPrefix()+"//stage-api.adsnative.com";if("demo2.adsnative.com"==a)return this.urlPrefix()+"//demo-api2.adsnative.com";if("demo.adsnative.com"==a)return this.urlPrefix()+"//demo-api.adsnative.com";if("console.adsnative.com"==a||"adsnative.com"==a)return this.urlPrefix()+"//api.adsnative.com"}else{var b=this.getURLParams();if(b.hasOwnProperty("server")){if("prod"==b.server)return this.urlPrefix()+"//api.adsnative.com";if("stage"==b.server)return this.urlPrefix()+"//stage-api.adsnative.com";if("demo"==b.server)return this.urlPrefix()+"//demo-api.adsnative.com";if("local"==b.server)return"http://dev-api.adsnative.com"}}return null},this.getURLParams=function(){if(b)return b;var a,c,d=/\+/g,e=/([^&=]+)=?([^&]*)/g,f=function(a){return decodeURIComponent(a.replace(d," "))};try{c=this.activeWindow().location.search.substring(1)}catch(g){c=window.location.search.substring(1)}for(b={};a=e.exec(c);)b[f(a[1])]=f(a[2]);return b},this.encodeQueryData=function(a){var b=[];for(var c in a)b.push(encodeURIComponent(c)+"="+encodeURIComponent(a[c]));return b.join("&")},this.extend=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return a},this.isEmpty=function(a){for(var b in a)if(a.hasOwnProperty(b))return!1;return!0},this.removeClickEvents=function(a){for(var b=a.getElementsByTagName("a"),c=0;c<b.length;c++)-1===b[c].className.indexOf("adsnative-share-button")&&-1===b[c].className.indexOf("adsnative-cta-button")&&(b[c].onclick=function(){return!1})},this.anyClickTags=function(a){for(var b=a.getElementsByTagName("a"),c=!1,d=0;d<b.length;d++)if(-1===b[d].className.search("adsnative")&&null!=b[d].getAttribute("href")){c=!0;break}return c},this.isScriptInBody=function(){for(var a=document.getElementsByTagName("script"),b=a[a.length-1],c=b;c;c=c.parentNode){if("BODY"==c.tagName)return!0;if("HEAD"==c.tagName)return!1}return!1},this.checkCSSPath=function(a){for(var b=this.activeWindowDocument(),c={status:!1},d=b,e=a.trim().split(">"),f=0,g="before",h=0;h<e.length;h++){var i=e[h].trim(),j=!1;if("#"==i[0]){var k=i.split(":");if(d=b.getElementById(k[0].slice(1)),k.length>1&&(g=k[1]),!d)return!1}else{var k=i.split(":");if(!(k.length>1))return!1;var l=/eq\((\d+)\)/g.exec(k[1].trim());l&&l.length>1&&(f=parseInt(l[1])),k.length>2&&(g=k[2]),k=k[0].split(".");var m=k[0],n=null,o=0,p=d.childNodes;k.length>1&&(n=k[1]),m&&(p=d.getElementsByTagName(m)),n&&"getElementsByClassName"in document&&(p=d.getElementsByClassName(n));for(var q=0;q<p.length;q++)if(1==p[q].nodeType&&(!n||(" "+p[q].className+" ").indexOf(" "+n+" ")>-1)){if(o==f){d=p[q],j=!0;break}o++}if(0==j)return!1}}return c.status=!0,c.currentElement=d,c.position=g,c},this.dropTags=function(a,b,c,d){function e(a){for(var b=0;b<a.childNodes.length;b++)if("SCRIPT"==a.childNodes[b].tagName){var d=a.childNodes[b];a.removeChild(a.childNodes[b]),f(a,d,c)}else a.childNodes[b].childNodes.length&&e(a.childNodes[b])}function f(a,b){var e=!1,f=document.createElement("script");if(f.type=b.type,b.src&&(f.src=b.src),f.async="true",b.innerHTML&&(f.innerHTML=b.innerHTML),"undefined"!=typeof d&&d)for(var g in d)d.hasOwnProperty(g)&&f.setAttribute(g,d[g]);"undefined"!=typeof c&&(b.innerHTML&&!b.src?c():f.onload=f.onreadystatechange=function(){try{e||this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState||(e=!0,c(),f.onload=f.onreadystatechange=null)}catch(a){console.log(a)}});for(var h=0;h<b.attributes.length;h++)!b.attributes[h].value||b.attributes[h].value in{"null":"","false":"",0:""}||"src"==b.attributes[h].name||f.setAttribute(b.attributes[h].name,b.attributes[h].value);a.appendChild(f)}var g=document.createElement("div");g.innerHTML=b;for(var h=g.childNodes,i=0,j=0;h.length&&j<h.length&&!(i>6);i++){var k=h[j];"IMG"==k.tagName?(k.style.cssText="margin:0;padding:0;height:1px;width:1px;border:none;float:left;",a.appendChild(k)):"SCRIPT"==k.tagName?(f(a,k),j++):"IFRAME"==k.tagName?(arguments.length>2&&(k.onload=c),a.appendChild(k)):(a.appendChild(k),e(k))}},this.indexOf=function(a){var b;return b="function"==typeof Array.prototype.indexOf?Array.prototype.indexOf:function(a){var b=-1,c=-1;for(b=0;b<this.length;b++)if(this[b]===a){c=b;break}return c},b.call(this,a)}},b=new function(){function a(a,b,f,g,h){d=document.createElement("iframe"),d.width=b,d.height=f,d.setAttribute("src",a.embedUrl),d.style.margin="20px auto 10px",d.style.border="none",d.className="adsnative-video-embed",e=document.createElement("div"),e.innerHTML=a.summary,"story"==a.type&&(e.innerHTML=e.innerHTML+'&#32;<a href="'+a.url+'" class="adsnative-read-more" '+("_blank"==a.target?'target="_blank"':"")+">Read more</a>"),e.className="adsnative-video-summary",e.style.cssText="line-height:120%; font-size:14px; margin:10px auto 20px;","video"==a.type&&g.appendChild(d),g.appendChild(e),c=h+d.offsetHeight+e.offsetHeight,e.style.display="none",d.style.display="none"}function b(){f?(d.style.display="none",e.style.display="none"):(d.style.display="block",e.style.display="block")}var c,d,e,f=!1;this.expandStoryElement=function(d,e,g){c||a(d,e.clientWidth,180,e,g),f&&b();var h=c,i=g,j=300,k=(new Date).getTime(),l=parseInt(e.clientHeight),m=f?i:h,n=m-l;e.style.height=m;var o=setInterval(function(){var a=(new Date).getTime()-k;if(j>=a){var c=l+Math.floor(n*a/j);e.style.height=c+"px"}else clearInterval(o),e.style.height=m+"px",f||b(),f=!f},1)}},c=new function(){this.postRequest=function(a,b,c,d){var e;e=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP"),e.onreadystatechange=function(){4==e.readyState&&(200==e.status?arguments.length>2&&c(e.responseText):arguments.length>3&&d())},e.open("POST",a,!0),e.setRequestHeader("Content-type","application/x-www-form-urlencoded"),e.send(b)},this.getJSONP=function(a,b,c){var d;d=arguments.length>2?c:Math.floor(1e9*Math.random()+1e4),window["an_callback_"+d]=function(a){b(a)};var e=document.createElement("script");e.src=a+"&callback=an_callback_"+d,document.getElementsByTagName("head")[0].appendChild(e)}},d=new function(){this.dropCookieMatchingPixel=function(){var b=document.createElement("img");b.src=a.urlPrefix()+"//rudy.adsnative.com/cm.gif",b.style.cssText="height:1px;width:1px;border:none;",document.getElementsByTagName("body").length?document.getElementsByTagName("body")[0].appendChild(b):$an.fn.ready(function(){document.getElementsByTagName("body")[0].appendChild(b)})}},e=function(d){"use strict";function e(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)||n.forceMobile}function f(b){this.status=!1,this.apiKey=null,this.current_network_index=0,this.addVideoDetectiveListner=function(a){var b=function(b){var c=b.message||b.data;if(c.hasOwnProperty("video_detective")&&b.origin==n.apiUrl)try{a.getElementsByTagName("vd_title")[0].outerHTML=c.title,a.getElementsByTagName("vd_summary")[0].outerHTML=c.description}catch(d){}};window.addEventListener?window.addEventListener("message",b,!1):window.attachEvent&&window.attachEvent("onmessage",b)};!function(c){c.content=b,p.log("console",c.content),c.content.hasOwnProperty("zid")?c.apiKey=c.content.zid:n.apiKey&&(c.apiKey=n.apiKey),"OK"==c.content.status&&(c.status=!0),c.win=a.activeWindow(),c.win_doc=a.activeWindowDocument()}(this)}function g(c,d,f){if("video"==c.type&&o.apiData&&o.adUnits.hasOwnProperty(o.apiData.zid)&&o.adUnits[o.apiData.zid].hasOwnProperty("onclick"))return o.adUnits[o.apiData.zid].onclick({type:c.type,url:c.url,embedUrl:c.embedUrl,title:c.title,summary:c.summary,brand_name:c.promotedBy,image:c.imageSrc}),!1;if(c.expandOnMobile&&e())return b.expandStoryElement(c,d,f),!1;if(e()||!a.anyClickTags(d)){if("video"!=c.type||"_blank"==c.target){var g=a.activeWindow();if("_blank"==c.target){var h=g.open(c.url,"_blank");h.focus()}else g.location.href=c.url;return!1}}else if(!c.url)return!1;return!0}function h(){var a=document.getElementsByTagName("script"),b=a[a.length-1],c=document.createElement("div"),d="adsnative-dummy-"+n.apiKey;return c.id=d,b.parentNode.insertBefore(c,b.nextSibling),d}function i(b){var d=n.domainLookupUrl+n.domainLookupEndpoint+a.getPageHostName()+"/?";c.getJSONP(d,b,"lookup")}function j(b,c,d,e){var f;f=arguments.length>3?function(a){q.end("Get_Ad");try{e(a)}catch(b){p.log("error","name: "+b.name+" message: "+b.message,b)}}:function(a){q.end("Get_Ad");try{l(a)}catch(b){p.log("error","name: "+b.name+" message: "+b.message,b)}},b||!a.getPageHostName()||a.isPreview()?k("zid="+b,c,d,f):(p.log("console","Domain lookup check started"),q.start("Domain_Lookup_Check"),i(function(b){q.end("Domain_Lookup_Check"),p.log("console","Domain lookup check ended"),b&&b.length||p.log("console","No valid placements found for this domain in the lookup");var e=[],g="";if(p.log("console",b),o.isScriptInBody){for(var h=0;h<b.length;h++)a.checkCSSPath(b[h].cssPath)&&(e.push(b[h].zid),g+="zid="+b[h].zid+"&");p.log("console",e),e.length||b.length&&!e.length?k(g,c,d,f):p.log("console","No valid placements found for this domain")}else q.start("Wait_To_Render"),$an.fn.ready(function(){q.end("Wait_To_Render");for(var h=0;h<b.length;h++)a.checkCSSPath(b[h].cssPath)&&(e.push(b[h].zid),g+="zid="+b[h].zid+"&");p.log("console",e),e.length?k(g,c,d,f):p.log("console","No valid placements found for this domain")})}))}function k(b,d,e,f){var g={force_mobile:n.forceMobile?1:0};e&&(g.kw=e),d>0&&(g.num_ads=d);try{window.top!=window.self&&"undefined"!=typeof window.top.location.href&&window.top.location.href?(g.url=window.top.location.href,g.ref=window.top.document.referrer):(g.url=window.location.href,g.ref=document.referrer)}catch(h){g.url=window.location.href,g.ref=document.referrer}o.isPreviewMode&&(o.forceCampaignID&&(g.preview=1,g.cid=o.forceCampaignID),o.forceCreativeID&&(g.crid=o.forceCreativeID));var i=n.apiUrl+n.apiEndpoint+"?"+b+"&"+a.encodeQueryData(g);q.start("Get_Ad"),c.getJSONP(i,f)}function l(a){o.apiData=a,m(a)}function m(a){if(q.start("Render"),a instanceof Array)for(var b=0;b<a.length;b++){var c=new f(a[b]);c.processAd()}else{var c=new f(a);c.processAd()}q.end("Render"),q.end("Total_Self"),q.timeSincePageStart("Total_Overall")}var n={apiUrl:a.urlPrefix()+"//api.adsnative.com",apiEndpoint:"/v1/ad-template.json",domainLookupUrl:a.urlPrefix()+"//d2b3uqm49lqeua.cloudfront.net",domainLookupEndpoint:"/v1/host/",apiKey:"",apiData:null,staticUrl:a.urlPrefix()+"//static.adsnative.com/static/",version:"1.0",subversion:"1.355",onready:null,userCallbackOnAdLoad:null,processNativeAdElement:null,numAds:0,forceMobile:!1,callbackOnNoAds:null,blockAdLoad:!1,blockAdDisplay:!1,nativeAdElementId:null,keywords:null,autoPosition:!1,preview:!1},o={isScriptInBody:!1,isPreviewMode:!1,isProfilingMode:!1,forceCampaignID:null,forceCreativeID:null,apiData:null,adUnits:{}},p=new function(){function b(a,b,d){var e=n.apiUrl+"/v1/log/error/?",f="level="+d+"&message_type="+encodeURIComponent(a)+"&data="+encodeURIComponent(b);c.postRequest(e,f)}this.log=function(c,d,e){if(o.isPreviewMode&&(console.log(d),arguments.length>2&&console.log(e)),"error"==c){var f=(n.apiKey?n.apiKey:a.getPageHostName(),{settings:n,session:o,pageURL:a.activeWindow().location.href,userAgent:navigator.userAgent});arguments.length>2&&(f.error=e),b(d,JSON.stringify(f),c)}}},q=new function(){this.timeSincePageStart=function(b){if(o.isProfilingMode)try{console.debug("AN_"+b+": "+(Date.now()-a.activeWindow().performance.timing.navigationStart)+"ms")}catch(c){}},this.start=function(a){o.isProfilingMode&&console.time("AN_"+a)},this.end=function(a){o.isProfilingMode&&console.timeEnd("AN_"+a)}},r=new function(){function b(a){var b=a.getBoundingClientRect(),c=b.height*b.width,d=Math.min(b.height,b.bottom,(window.innerHeight||document.documentElement.clientHeight)-b.top),e=Math.min(b.width,b.right,(window.innerWidth||document.documentElement.clientWidth)-b.left),f=d*e;return f/c>=.5}function c(a,b,f,g,h,i,j){var k=a.parentNode,l=2;return e(a)?"BODY"===k.tagName?!0:"0"===d(a,"opacity")||"none"===d(a,"display")||"hidden"===d(a,"visibility")?!1:(("undefined"==typeof b||"undefined"==typeof f||"undefined"==typeof g||"undefined"==typeof h||"undefined"==typeof i||"undefined"==typeof j)&&(b=a.offsetTop,h=a.offsetLeft,g=b+a.offsetHeight,f=h+a.offsetWidth,i=a.offsetWidth,j=a.offsetHeight),k?"hidden"!==d(k,"overflow")&&"scroll"!==d(k,"overflow")||!(h+l>k.offsetWidth+k.scrollLeft||h+i-l<k.scrollLeft||b+l>k.offsetHeight+k.scrollTop||b+j-l<k.scrollTop)?(a.offsetParent===k&&(h+=k.offsetLeft,b+=k.offsetTop),c(k,b,f,g,h,i,j)):!1:!0):!1}function d(a,b){return window.getComputedStyle?document.defaultView.getComputedStyle(a,null)[b]:a.currentStyle?a.currentStyle[b]:void 0}function e(a){for(;a=a.parentNode;)if(a==document)return!0;return!1}this.inViewCheck=function(d,e){var f=0,g=setInterval(function(){b(d)&&c(d)?f++:f=0,f>=9&&(a.dropTags(d,e),clearInterval(g),p.log("console","view logged!"))},100)}};f.prototype.applyCommonStyle=function(a){var b=document.createElement("style");b.setAttribute("type","text/css");var c='div.adsnative-labels { } div.adsnative-powered-by { margin-right:5px !important; font-size: 11px; color: #777; float: right; text-align: right; margin-right: 0px; }div.adsnative-powered-by a { text-decoration: none; color: #333; font-size:14px;  font-family: "BenchNine", sans-serif; }div.adsnative-powered-by a:hover { color: #cc0033; }.adsnative-sponsored-label { font-size:12px; color: #999; margin-bottom:5px; }.adsnative-share-buttons { float: left; margin-left:8px; margin-bottom:5px; }.adsnative-share-button { text-decoration:none; display:block; height:24px; float:left; margin-right:10px; padding-left:25px; line-height:21px; font-size:14px; font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;  }.adsnative-fb-share { background:url('+n.staticUrl+"img/facebook.png) no-repeat; color:#3a5899; }.adsnative-tw-share { background:url("+n.staticUrl+"img/twitter.png) no-repeat; color:#40aceb; }.adsnative-cta-button { display:block; float:left; width:100%; margin:8px 0px auto; border-radius: 0px; background:-webkit-gradient( linear, left top, left bottom, color-stop(5%, #ededed), color-stop(100%, #dfdfdf) ); border:1px solid #DDD; padding:8px 0; font-size:14px; font-family:Helvetica, Arial, sans-serif; text-decoration:none; text-align:center; text-shadow:none; color:#004276; text-shadow:0 1px 0 rgba(255,255,255, 1); }div.adsnative-reset { clear: both; }";if(c+='[class^="adsnative-icon-"], [class*=" adsnative-icon-"] { display:none; }',document.getElementsByTagName("head")[0].appendChild(b),Object.prototype.hasOwnProperty.call(b,"styleSheet"))b.styleSheet.cssText=c+a;else try{b.innerHTML=c+a}catch(d){try{b.textContent=c+a}catch(d){b.innerText=c+a}}},f.prototype.outputAd=function(b){var c=document.createElement("div");c.innerHTML=b.html;var d;c.childNodes.length>1?(d=c,b.backgroundColor&&(d.style.backgroundColor=b.backgroundColor),this.referenceElement.parentNode.insertBefore(d,this.referenceElement)):(d=c.firstChild,b.backgroundColor&&(d.style.backgroundColor=b.backgroundColor),this.referenceElement.parentNode.insertBefore(d,this.referenceElement)),b.hasOwnProperty("trackingTags")&&a.dropTags(d,b.trackingTags),n.processNativeAdElement&&n.processNativeAdElement(d),this.ctaButton=document.createElement("div"),this.ctaButton.innerHTML='<a href="'+b.ctaUrl+'" class="adsnative-cta-button" target="_blank">'+b.ctaTitle+"</a>",this.shareButtons=document.createElement("div"),this.shareButtons.innerHTML='<a href="https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(b.url)+'" class="adsnative-fb-share adsnative-share-button" target="_blank">Share</a><a href="https://twitter.com/intent/tweet/?text='+encodeURIComponent(b.title)+"&url="+b.url+'" class="adsnative-tw-share adsnative-share-button" target="_blank">Tweet</a><div class="adsnative-reset"></div>',this.shareButtons.style.cssText="display:block;margin-top:10px;",this.shareButtons.className="adsnative-share-buttons";var e=document.createElement("div");e.className="adsnative-reset";var f=document.createElement("div");f.style.cssText="",f.appendChild(b.ctaUrl?this.ctaButton:this.shareButtons),f.appendChild(e),f.className="adsnative-labels";try{this.origClientHeight=window.getComputedStyle(d).getPropertyValue("height")?parseInt(window.getComputedStyle(d).getPropertyValue("height").slice(0,-2)):this.nativeAdElement.clientHeight}catch(g){origClientHeight=d.getBoundingClientRect().bottom-d.getBoundingClientRect().top}this.setupClick(b,d),b.hasOwnProperty("viewableTags")&&r.inViewCheck(d,b.viewableTags),this.addVideoDetectiveListner(d)},f.prototype.setupClick=function(b,c){var d=this.origClientHeight;c.onclick=function(a){return-1===a.target.className.indexOf("adsnative-share-button")&&-1===a.target.className.indexOf("adsnative-cta-button")&&-1===a.target.className.indexOf("adsnative-read-more")?g(b,c,d):void 0},!a.anyClickTags(c)&&b.url&&(c.style.cursor="pointer")},f.prototype.outputHTML=function(a){var b=document.createElement("div");b.innerHTML=a;for(var c=0;c<b.childNodes.length;c++){var d=b.childNodes[c];this.referenceElement.parentNode.insertBefore(d,this.referenceElement)}},f.prototype.renderNativeAd=function(){if(this.content.hasOwnProperty("ads")&&!a.isEmpty(this.content.ads)){this.applyCommonStyle(this.content.ads[0].ad.style),this.outputHTML(this.content.htmlWrapperTop);for(var b=0;b<this.content.ads.length;b++)this.outputAd(this.content.ads[b].ad);this.outputHTML(this.content.htmlWrapperBottom)}else this.content.hasOwnProperty("ad")&&Object.getOwnPropertyNames(this.content.ad).length&&(this.applyCommonStyle(this.content.ad.style),this.outputAd(this.content.ad))},f.prototype.renderNetworkAd=function(b){var c=this,d=!1,e=!1,f=!1,g=!1;this.thirdPartyElement=document.createElement("div"),this.referenceElement.parentNode.insertBefore(this.thirdPartyElement,this.referenceElement),this.nativeAdElement=this.thirdPartyElement;var h=["ntent_feed","aol_feed","ebay_feed","gravity_feed","kixer_feed","triple_lift","federated_media","kixer","saymedia","contentad","connatix","outbrain","sharethrough","taboola","nativo","other"];if(a.indexOf.call(h,b.providerName)>-1){var i=a.urlPrefix()+"//bevo.adsnative.com/ca.gif?sid="+b.sid+"&action_name=req_"+b.providerName.substring(0,2)+"&action_value=1";a.dropTags(this.thirdPartyElement,'<img src="'+i+'" height="1" width="1" style="margin:0;padding:0;height:1px;width:1px;border:none;"/>')}if("ntent_feed"==b.providerName||"aol_feed"==b.providerName||"ebay_feed"==b.providerName||"gravity_feed"==b.providerName||"kixer_feed"==b.providerName){var j={};b.hasOwnProperty("customFields")&&!a.isEmpty(b.customFields)&&(j=b.customFields),this.fetchNetworkCreative(b.sid,b.providerName,j)}else a.dropTags(this.thirdPartyElement,b.html,function(){"kixer"==b.providerName?"function"==typeof __kx_ad_start&&(__kx_ad_start(),b.hasOwnProperty("trackingTags")&&a.dropTags(c.thirdPartyElement,b.trackingTags)):"triple_lift"==b.providerName?setTimeout(function(){d||(p.log("console","filled and done: "+c.current_network_index+" - "+b.providerName+" (zid: "+c.apiKey+")"),b.hasOwnProperty("trackingTags")&&a.dropTags(c.thirdPartyElement,b.trackingTags))},2e3):"federated_media"==b.providerName?setTimeout(function(){e||(p.log("console","filled and done: "+c.current_network_index+" - "+b.providerName+" (zid: "+c.apiKey+")"),b.hasOwnProperty("trackingTags")&&a.dropTags(c.thirdPartyElement,b.trackingTags))},2e3):"saymedia"==b.providerName?setTimeout(function(){g||(p.log("console","filled and done: "+c.current_network_index+" - "+b.providerName+" (zid: "+c.apiKey+")"),b.hasOwnProperty("trackingTags")&&a.dropTags(c.thirdPartyElement,b.trackingTags),c.finish())},2e3):"contentad"==b.providerName&&(b.hasOwnProperty("trackingTags")&&a.dropTags(c.thirdPartyElement,b.trackingTags),c.finish())});"triple_lift"==b.providerName&&(window._an_noTripleLiftAdFill=function(){p.log("console","fallback: "+c.current_network_index+" - "+b.providerName+" (zid: "+c.apiKey+")"),c.fallbackNetwork(),d=!0}),"saymedia"==b.providerName&&(window._an_noSayMediaAdFill=function(){p.log("console","fallback: "+c.current_network_index+" - "+b.providerName+" (zid: "+c.apiKey+")"),c.fallbackNetwork(),g=!0}),"federated_media"==b.providerName&&(window._an_noFMAdFill=function(){p.log("console","fallback: "+c.current_network_index+" - "+b.providerName+" (zid: "+c.apiKey+")"),c.fallbackNetwork(),e=!0});var k=null;if("connatix"==b.providerName&&(window.connatix_no_content=function(){p.log("console","fallback: "+c.current_network_index+" - "+b.providerName+" (zid: "+c.apiKey+")"),c.fallbackNetwork()},window.connatix_content_fill=function(){p.log("console","filled and done: "+c.current_network_index+" - "+b.providerName+" (zid: "+c.apiKey+")"),b.hasOwnProperty("trackingTags")&&a.dropTags(c.thirdPartyElement,b.trackingTags),c.finish()},k={"data-connatix-event":"connatix_content_fill"}),"other"==b.providerName&&(b.hasOwnProperty("trackingTags")&&a.dropTags(this.thirdPartyElement,b.trackingTags),this.finish()),"sharethrough"==b.providerName){var l=function(d){var e=d.message||d.data,g=window.JSON&&window.JSON.parse?window.JSON.parse(e.trim()):new Function("return "+e.trim())();"http://btlr.sharethrough.com"==d.origin&&(g.response.creatives.length?(p.log("console","filled and done: "+c.current_network_index+" - "+b.providerName+" (zid: "+c.apiKey+")"),b.hasOwnProperty("trackingTags")&&a.dropTags(c.thirdPartyElement,b.trackingTags),c.finish(),f=!0):(p.log("console","fallback: "+c.current_network_index+" - "+b.providerName+" (zid: "+c.apiKey+")"),c.fallbackNetwork()))};window.addEventListener?window.addEventListener("message",l,!1):window.attachEvent&&window.attachEvent("onmessage",l)}b.hasOwnProperty("headerTags")&&b.headerTags&&a.dropTags(document.getElementsByTagName("head")[0],b.headerTags,function(){if("outbrain"==b.providerName||"taboola"==b.providerName)p.log("console","filled and done: "+c.current_network_index+" - "+b.providerName+" (zid: "+c.apiKey+")"),b.hasOwnProperty("trackingTags")&&a.dropTags(c.thirdPartyElement,b.trackingTags),c.finish();else if("nativo"==b.providerName){var d=_pr.prototype.OnReady;_pr.prototype.OnReady=function(e){var f=/PostRelease.PushAd/g,g=f.exec(e),h=/PostRelease.Render_TemplateAd/g,i=h.exec(e);g&&g.length||i&&i.length?(p.log("console","filled and done: "+c.current_network_index+" - "+b.providerName+" (zid: "+c.apiKey+")"),b.hasOwnProperty("trackingTags")&&a.dropTags(c.thirdPartyElement,b.trackingTags),c.finish()):(p.log("console","fallback: "+c.current_network_index+" - "+b.providerName+" (zid: "+c.apiKey+")"),c.fallbackNetwork()),d(e)}}},k),b.hasOwnProperty("footerTags")&&b.footerTags&&a.dropTags(document.getElementsByTagName("body")[0],b.footerTags)},f.prototype.fallbackNetwork=function(){if(this.content.networks){var b=this.content.networks[this.current_network_index],c=a.urlPrefix()+"//bevo.adsnative.com/ca.gif?sid="+b.sid+"&action_name=no_"+b.providerName.substring(0,2)+"&action_value=1";a.dropTags(this.thirdPartyElement,'<img src="'+c+'" height="1" width="1" style="margin:0;padding:0;height:1px;width:1px;border:none;"/>')}this.content.networks&&this.content.networks.length>this.current_network_index+1?(this.cleanupNetwork(),this.current_network_index++,this.renderNetworkAd(this.content.networks[this.current_network_index])):a.isEmpty(this.content.ad)?this.finish():(this.cleanupNetwork(),this.renderNativeAd(),this.finish())},f.prototype.fetchNetworkCreative=function(b,d,e){var f=this,g=function(a){p.log("console",a),a&&"OK"==a.status&&a.ads&&a.ads.length>0?(f.applyCommonStyle(a.ads[0].style),f.outputAd(a.ads[0]),f.finish()):f.fallbackNetwork()},h={sid:b,kw:e.hasOwnProperty("kw")?e.kw:"",pub_id:e.hasOwnProperty("pub_id")?e.pub_id:"",placement_id:e.hasOwnProperty("placement_id")?e.placement_id:"",platform:e.hasOwnProperty("platform")?e.platform:"",device:e.hasOwnProperty("device")?e.device:""};c.getJSONP(n.apiUrl+"/v1/proxy/"+d+"/?"+a.encodeQueryData(h),g)},f.prototype.cleanupNetwork=function(){this.thirdPartyElement&&this.thirdPartyElement.parentNode&&this.thirdPartyElement.parentNode.removeChild(this.thirdPartyElement)},f.prototype.finish=function(){this.referenceElement.parentNode.removeChild(this.referenceElement)},f.prototype.processAd=function(){if(n.userCallbackOnAdLoad&&n.userCallbackOnAdLoad(this.status),this.content.hasOwnProperty("zid")&&o.adUnits.hasOwnProperty(this.content.zid)){var a={};this.status&&(a={type:this.content.ad.type,url:this.content.ad.url,embedUrl:this.content.ad.embedUrl,title:this.content.ad.title,summary:this.content.ad.summary,brand_name:this.content.ad.promotedBy,image:this.content.ad.imageSrc}),o.adUnits[this.content.zid].content=this.content,o.adUnits[this.content.zid].hasOwnProperty("callback")&&o.adUnits[this.content.zid].callback("OK"==this.content.status,this.apiKey,a)}if(!n.blockAdDisplay){if(!this.status)return n.callbackOnNoAds&&n.callbackOnNoAds(),void(this.content.hasOwnProperty("message")?"no active campaigns found"!=this.content.message&&"ad-unit is not active"!=this.content.message&&p.log("warning",this.content.message):p.log("warning","An unknown error occurred."));if(n.nativeAdElementId){if(this.referenceElement=document.getElementById(n.nativeAdElementId),!this.referenceElement)return void p.log("warning","Given nativeAdElementId not found.")}else{if(n.autoPosition){var b;if(!this.content.hasOwnProperty("cssPath")||!this.content.cssPath)return void p.log("warning","No CSS path configured for this page.");if(b=this.content.cssPath,o.isScriptInBody){var c=this.insertReferenceElement(b);c?this.startRender():this.waitPositionAdAndRender(b)}else this.waitPositionAdAndRender(b);return}if(o.adUnits.hasOwnProperty(this.apiKey)&&o.adUnits[this.apiKey].hasOwnProperty("nativeAdElementId")){if(this.referenceElement=document.getElementById(o.adUnits[this.apiKey].nativeAdElementId),!this.referenceElement)return void p.log("warning","Given nativeAdElementId not found for apiKey")}else this.referenceElement=document.getElementById("adsnative-dummy-"+this.apiKey)}this.startRender()}},f.prototype.waitPositionAdAndRender=function(a){var b=this;q.start("Wait_To_Render"),$an.fn.ready(function(){q.end("Wait_To_Render"),b.positionAdAndRender(a)})},f.prototype.positionAdAndRender=function(a){var b=this.insertReferenceElement(a);return b?void this.startRender():void p.log("warning","Configured CSS path not found on this page.")},f.prototype.startRender=function(){if(this.content.hasOwnProperty("networks")&&this.content.networks.length)this.renderNetworkAd(this.content.networks[0]);else if(this.content.hasOwnProperty("ad")&&this.content.ad.hasOwnProperty("customFields")&&this.content.ad.customFields.hasOwnProperty("network_feed")){var b={};this.content.ad.hasOwnProperty("customFields")&&!a.isEmpty(this.content.ad.customFields)&&(b=this.content.ad.customFields),this.fetchNetworkCreative(this.content.sid,this.content.ad.customFields.network_feed,b)}else this.renderNativeAd(),this.finish()},f.prototype.insertReferenceElement=function(b){q.start("CSSPath_Search");var c=this.win_doc.createElement("div"),d=a.checkCSSPath(b);return d?("after"==d.position?d.currentElement.parentNode.insertBefore(c,d.currentElement.nextSibling):"append"==d.position?d.currentElement.appendChild(c):d.currentElement.parentNode.insertBefore(c,d.currentElement),this.referenceElement=c,q.end("CSSPath_Search"),!0):!1};!function(){n=a.extend(n,d),o.isScriptInBody=a.isScriptInBody(),o.isPreviewMode=a.isPreviewMode()||n.preview,o.isProfilingMode=a.isProfilingMode(),o.previewModeHost=a.getPreviewModeHost(),o.urlParams=a.getURLParams(),q.timeSincePageStart("Start"),q.start("Total_Self"),o.isPreviewMode&&(o.previewModeHost?(n.apiUrl=o.previewModeHost,n.domainLookupUrl=o.previewModeHost):o.previewModeHost=n.apiUrl,o.urlParams.hasOwnProperty("zid")&&(n.apiKey=o.urlParams.zid),o.urlParams.hasOwnProperty("force_mobile")&&(n.forceMobile=Boolean(o.urlParams.force_mobile)),o.urlParams.hasOwnProperty("cid")&&(o.forceCampaignID=o.urlParams.cid),o.urlParams.hasOwnProperty("crid")&&(o.forceCreativeID=o.urlParams.crid))}();window.AdsNative=function(a,b){!function(c){c.apiKey=a,c.keywords="undefined"!==b?b:"",c.status=!1,c.adRendered=!1}(this)},window.AdsNative.prototype.fetchAd=function(a){var b=this;j(this.apiKey,1,n.keywords?n.keywords:this.keywords,function(c){b.callbackData=c,b.placementProcessor=new f(b.callbackData),c.hasOwnProperty("status")&&"OK"==c.status&&(b.status=!0),a(b.status)})},window.AdsNative.prototype.displayAd=function(a){return this.status?this.adRendered?(p.log("console","Placement "+this.apiKey+" : This ad unit already rendered. A placement can be rendered only once."),!1):(this.elementId=document.getElementById(a),this.elementId?(this.placementProcessor.referenceElement=this.elementId,this.placementProcessor.startRender(),this.adRendered=!0,!0):(p.log("console","Placement "+this.apiKey+" : Element not found"),!1)):(p.log("console","Placement "+this.apiKey+" : No valid campaign returned"),!1)},window.AdsNative.prototype.refresh=function(){var a,b=this;
if(this.status&&this.adRendered)a=this.placementProcessor.nativeAdElement;else{if(!this.elementId)return p.log("console","Placement "+this.apiKey+" : The placement was never fetched so cannot be refreshed."),!1;a=this.elementId}return this.fetchAd(function(){b.placementProcessor.referenceElement=a,b.placementProcessor.startRender()}),!0},this.load=function(){if(p.log("console","RenderJS Loaded!"),n.onready&&n.onready(),!n.blockAdLoad)if(n.hasOwnProperty("adUnits"))for(var a in n.adUnits){var b=n.adUnits[a];if(b.hasOwnProperty("apiKey")){var c=1;b.hasOwnProperty("numAds")&&(c=b.numAds);var d="";b.hasOwnProperty("keywords")&&b.keywords&&(d=b.keywords.join()),b.hasOwnProperty("nativeAdElementId")&&document.getElementById(b.nativeAdElementId)&&(o.adUnits.hasOwnProperty(b.apiKey)||(o.adUnits[b.apiKey]={}),o.adUnits[b.apiKey].nativeAdElementId=b.nativeAdElementId),j(b.apiKey,c,d)}}else n.nativeAdElementId||!n.apiKey||n.autoPosition||h(),j(n.apiKey,n.numAds,n.keywords)},this.fetchAds=function(a,b,c){n.blockAdDisplay=!0;for(var d=0;d<a.length;d++)o.adUnits.hasOwnProperty(a[d])||(o.adUnits[a[d]]={}),o.adUnits[a[d]].callback=c,j(a[d],1,n.keywords?n.keywords:b)},this.displayAd=function(a,b){if(o.adUnits.hasOwnProperty(a)&&o.adUnits[a].hasOwnProperty("content")){var c=o.adUnits[a].content,d=document.getElementById(b),e=new f(c);e.referenceElement=d,e.startRender()}},this.renderAd=function(a,b,c,d){var e=this;this.fetchAds([d],b,function(b,d){b&&e.displayAd(d,a),c(b)})},this.onClickHandler=function(a,b){o.adUnits.hasOwnProperty(a)||(o.adUnits[a]={}),o.adUnits[a].onclick=b},this.getVersion=function(){return n.version}};if("undefined"==typeof f)var f=[],g=[];"undefined"==typeof window._AdsNativeOpts?window._AdsNativeOpts={autoPosition:!0}:window._AdsNativeOpts.hasOwnProperty("apiKey")||window._AdsNativeOpts.hasOwnProperty("adUnits")||window._AdsNativeOpts.hasOwnProperty("blockAdLoad")||(window._AdsNativeOpts.autoPosition=!0),g.push(window._AdsNativeOpts),f.push(new e(g[g.length-1])),f[f.length-1].load(),"undefined"==typeof window._AdsNative&&(window._AdsNative=new e({blockAdLoad:!0}),window._AdsNative.load()),d.dropCookieMatchingPixel()}();