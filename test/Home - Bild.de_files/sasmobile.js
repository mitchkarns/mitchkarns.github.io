function getURLParameter(s){return decodeURIComponent((new RegExp("[?|&|;]"+s+"=([^&;]+?)(&|#|;|$)").exec(location.search)||[,""])[1].replace(/\+/g,"%20"))||""}function sasmobile(s,a,e){if("12815"!=a||!s.match(/10045\/.*_story/i)||s.match(/sport/i))if(""!=iID&&fID[prevStart]==a)sas_code="<script id='sas_s"+a+"' src='//ww251.smartadserver.com/call/pubdirj/0/"+iID[prevStart++]+"////no?[countgo]'></script>",sas_d.getElementById("sas_"+a)||(sas_code='<div id="sas_'+a+'">'+sas_code+"</div>"),sas_d.write(sas_code);else{if(""!=iID&&fID[prevStart]!=e&&"yes"!=otherAds)return;pageSet=s.replace(/\)/g,"").split("("),1==sas_masterflag?(sas_masterflag=0,sas_master="M"):sas_master="S",sas_url="//ww251.smartadserver.com/ac?nwid=251&siteid="+pageSet[0].replace("/","")+"&pgname="+pageSet[1]+"&fmtid="+a+"&visit="+sas_master+"&uid="+sas_uuid+"&tmstp="+sas_tmstp+"&tgt=sas_ajax=0;"+encodeURIComponent(e),sas_ccf(a),sas_appendScript(a,sas_url)}}function sascc(s,a){img=new Image,img.src="//ww251.smartadserver.com/call/clicpixel/"+s+"/"+a+"/"+sas_tmstp+"?"}function sas_appendScript(s,a){var e=sas_d.createElement("script");e.id="sas_s"+s,e.type="text/javascript",e.src=a,e.onreadystatechange=e.onload=function(){this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState||(sas_scriptLoadHandler(this),e.onload=e.onreadystatechange=null)};var t=sas_d.getElementById("sas_"+s);t&&t.appendChild(e)}function sas_scriptLoadHandler(s){if(void 0!==s.id?d=s.id.replace("sas_s",""):void 0!==s.target&&void 0!==s.target.id&&(d=s.target.id.replace("sas_s","")),"undefined"!=typeof sas_loadHandler){var a=sas_gcf(d),e={id:d};e.hasAd=null!=a&&a.hasChildNodes()&&a.children.length>1?!0:!1,sas_loadHandler(e)}}function sas_appendToContainer(s,a){var e=sas_d.getElementById("sas_"+s);if("undefined"!=typeof e&&null!=e&&"undefined"!=typeof a&&null!=a){if("string"==typeof a){var t=sas_d.createElement("div");t.innerHTML=a,a=t}e.appendChild(a)}}function sas_ccf(s){var a=sas_gcf(s);if(myLength=a.childNodes.length,null!=a.childNodes&&myLength>0)for(sas_cccn=0;myLength>sas_cccn;sas_cccn++)a.removeChild(a.childNodes[0])}function sas_gcf(s){return sas_d.getElementById("sas_"+s)}sas_tmstp=Math.round(1e10*Math.random()),sas_masterflag=1,sas_ajax=1,sas_d=document,nuggprof="",prevStart=0,iID=getURLParameter("insertionId").split(","),fID=getURLParameter("Format").split(","),otherAds=getURLParameter("otherAds");try{document.cookie.match(/pid=(.*?);/)&&""!=document.cookie.match(/pid=(.*?);/)?sas_uuid=document.cookie.match(/pid=(.*?);/)[1]:(sas_uuid=localStorage.sas_uuid?localStorage.sas_uuid:1e20*Math.random()+(new Date).getTime(),localStorage.sas_uuid=sas_uuid)}catch(e){sas_uuid=""}