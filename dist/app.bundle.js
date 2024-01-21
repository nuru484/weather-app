(()=>{"use strict";var n={809:(n,t,e)=>{e.d(t,{Z:()=>s});var r=e(537),a=e.n(r),o=e(645),i=e.n(o)()(a());i.push([n.id,"/* Reset some default styles */\nbody,\nh1,\nh2,\nh3,\np,\nul,\nli {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: 'Montserrat', sans-serif;\n  line-height: 1.6;\n  background-color: #f4f4f4;\n}\n\n.main-contaier {\n  max-width: 1300px;\n  margin: 0 auto;\n}\n\n.header-contaier {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem;\n  background-color: #333;\n  color: #fff;\n  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);\n}\n\n.logo-container {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.logo-container img {\n  width: 2rem;\n}\n\n.logo-container > h1 {\n  font-size: 1.8rem;\n  color: #ffffff;\n}\n\n.location-data {\n  text-align: center;\n  padding: 0.5rem;\n  border-bottom: 2px solid #ddd;\n}\n\n.location-data p {\n  color: #184f77;\n  font-size: 1rem;\n}\n\n.location-data h1 {\n  font-size: 1.8rem;\n}\n\n.search-container {\n  display: flex;\n  align-items: center;\n  border: 1px solid white;\n  border-radius: 5px;\n  background-color: white;\n  padding: 0 0.5rem;\n}\n\n.search-container input {\n  padding: 10px;\n  border: none;\n  outline: none;\n  border-radius: 5px;\n  font-size: 14px;\n}\n\n.search-container img {\n  margin-left: 10px;\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n  filter: invert();\n}\n\n.change-units-container {\n  display: flex;\n  gap: 0.5rem;\n}\n\n.button {\n  padding: 10px 20px;\n  margin-right: 10px;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  font-size: 14px;\n  transition: background-color 0.3s ease;\n}\n\n.button-1 {\n  background-color: #4caf50;\n  color: #fff;\n}\n\n.button-2 {\n  background-color: #2196f3;\n  color: #fff;\n}\n\n.button:hover {\n  background-color: #555;\n}\n\n.main-content-container {\n  background: linear-gradient(15deg, #43abf6, #74d7f6);\n  padding: 20px;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);\n}\n\n.daily-weather-data-container {\n  width: 70%;\n  display: grid;\n  gap: 2rem;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  justify-content: center;\n  align-content: center;\n  margin: 0 auto;\n  padding: 2rem 6rem 0 0;\n}\n\n.weather-card-1 {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1rem;\n}\n\n.main-weather {\n  width: 40%;\n  margin: 0 auto;\n}\n\n.weather-info {\n  background-color: #f9f9f9;\n  border: 1px solid #ddd;\n  border-radius: 5px;\n  padding: 10px;\n  margin-bottom: 10px;\n  width: 48%;\n}\n\n/* Responsive styles */\n@media screen and (max-width: 768px) {\n  .header-contaier {\n    flex-direction: column;\n    text-align: center;\n  }\n\n  .search-container {\n    margin-top: 10px;\n  }\n\n  .button {\n    margin-top: 10px;\n    margin-right: 0;\n  }\n\n  .weekly-weather-info {\n    overflow-x: auto;\n  }\n}\n","",{version:3,sources:["webpack://./src/styles-files/style2.css"],names:[],mappings:"AAAA,8BAA8B;AAC9B;;;;;;;EAOE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,qCAAqC;EACrC,gBAAgB;EAChB,yBAAyB;AAC3B;;AAEA;EACE,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,eAAe;EACf,sBAAsB;EACtB,WAAW;EACX,0CAA0C;AAC5C;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,6BAA6B;AAC/B;;AAEA;EACE,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,kBAAkB;EAClB,uBAAuB;EACvB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,WAAW;EACX,YAAY;EACZ,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,eAAe;EACf,sCAAsC;AACxC;;AAEA;EACE,yBAAyB;EACzB,WAAW;AACb;;AAEA;EACE,yBAAyB;EACzB,WAAW;AACb;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,oDAAoD;EACpD,aAAa;EACb,2CAA2C;AAC7C;;AAEA;EACE,UAAU;EACV,aAAa;EACb,SAAS;EACT,2DAA2D;EAC3D,uBAAuB;EACvB,qBAAqB;EACrB,cAAc;EACd,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,SAAS;AACX;;AAEA;EACE,UAAU;EACV,cAAc;AAChB;;AAEA;EACE,yBAAyB;EACzB,sBAAsB;EACtB,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,UAAU;AACZ;;AAEA,sBAAsB;AACtB;EACE;IACE,sBAAsB;IACtB,kBAAkB;EACpB;;EAEA;IACE,gBAAgB;EAClB;;EAEA;IACE,gBAAgB;IAChB,eAAe;EACjB;;EAEA;IACE,gBAAgB;EAClB;AACF",sourcesContent:["/* Reset some default styles */\nbody,\nh1,\nh2,\nh3,\np,\nul,\nli {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: 'Montserrat', sans-serif;\n  line-height: 1.6;\n  background-color: #f4f4f4;\n}\n\n.main-contaier {\n  max-width: 1300px;\n  margin: 0 auto;\n}\n\n.header-contaier {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem;\n  background-color: #333;\n  color: #fff;\n  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);\n}\n\n.logo-container {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.logo-container img {\n  width: 2rem;\n}\n\n.logo-container > h1 {\n  font-size: 1.8rem;\n  color: #ffffff;\n}\n\n.location-data {\n  text-align: center;\n  padding: 0.5rem;\n  border-bottom: 2px solid #ddd;\n}\n\n.location-data p {\n  color: #184f77;\n  font-size: 1rem;\n}\n\n.location-data h1 {\n  font-size: 1.8rem;\n}\n\n.search-container {\n  display: flex;\n  align-items: center;\n  border: 1px solid white;\n  border-radius: 5px;\n  background-color: white;\n  padding: 0 0.5rem;\n}\n\n.search-container input {\n  padding: 10px;\n  border: none;\n  outline: none;\n  border-radius: 5px;\n  font-size: 14px;\n}\n\n.search-container img {\n  margin-left: 10px;\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n  filter: invert();\n}\n\n.change-units-container {\n  display: flex;\n  gap: 0.5rem;\n}\n\n.button {\n  padding: 10px 20px;\n  margin-right: 10px;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  font-size: 14px;\n  transition: background-color 0.3s ease;\n}\n\n.button-1 {\n  background-color: #4caf50;\n  color: #fff;\n}\n\n.button-2 {\n  background-color: #2196f3;\n  color: #fff;\n}\n\n.button:hover {\n  background-color: #555;\n}\n\n.main-content-container {\n  background: linear-gradient(15deg, #43abf6, #74d7f6);\n  padding: 20px;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);\n}\n\n.daily-weather-data-container {\n  width: 70%;\n  display: grid;\n  gap: 2rem;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  justify-content: center;\n  align-content: center;\n  margin: 0 auto;\n  padding: 2rem 6rem 0 0;\n}\n\n.weather-card-1 {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1rem;\n}\n\n.main-weather {\n  width: 40%;\n  margin: 0 auto;\n}\n\n.weather-info {\n  background-color: #f9f9f9;\n  border: 1px solid #ddd;\n  border-radius: 5px;\n  padding: 10px;\n  margin-bottom: 10px;\n  width: 48%;\n}\n\n/* Responsive styles */\n@media screen and (max-width: 768px) {\n  .header-contaier {\n    flex-direction: column;\n    text-align: center;\n  }\n\n  .search-container {\n    margin-top: 10px;\n  }\n\n  .button {\n    margin-top: 10px;\n    margin-right: 0;\n  }\n\n  .weekly-weather-info {\n    overflow-x: auto;\n  }\n}\n"],sourceRoot:""}]);const s=i},645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",r=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),r&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),r&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,r,a,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var u=0;u<n.length;u++){var d=[].concat(n[u]);r&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),t.push(d))}},t}},537:n=>{n.exports=function(n){var t=n[1],e=n[3];if(!e)return t;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),o="/*# ".concat(a," */");return[t].concat([o]).join("\n")}return[t].join("\n")}},379:n=>{var t=[];function e(n){for(var e=-1,r=0;r<t.length;r++)if(t[r].identifier===n){e=r;break}return e}function r(n,r){for(var o={},i=[],s=0;s<n.length;s++){var c=n[s],u=r.base?c[0]+r.base:c[0],d=o[u]||0,l="".concat(u," ").concat(d);o[u]=d+1;var f=e(l),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)t[f].references++,t[f].updater(h);else{var m=a(h,r);r.byIndex=s,t.splice(s,0,{identifier:l,updater:m,references:1})}i.push(l)}return i}function a(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,a){var o=r(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var s=e(o[i]);t[s].references--}for(var c=r(n,a),u=0;u<o.length;u++){var d=e(o[u]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}o=c}}},569:n=>{var t={};n.exports=function(n,e){var r=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},216:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},565:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var a=void 0!==e.layer;a&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,a&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var o=e.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}},t={};function e(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return n[r](o,o.exports,e),o.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),e.nc=void 0,(()=>{var n=e(379),t=e.n(n),r=e(795),a=e.n(r),o=e(569),i=e.n(o),s=e(565),c=e.n(s),u=e(216),d=e.n(u),l=e(589),f=e.n(l),h=e(809),m={};m.styleTagTransform=f(),m.setAttributes=c(),m.insert=i().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=d(),t()(h.Z,m),h.Z&&h.Z.locals&&h.Z.locals;const A={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function g(n){return(t={})=>{const e=t.width?String(t.width):n.defaultWidth;return n.formats[e]||n.formats[n.defaultWidth]}}const p={date:g({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:g({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:g({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},b={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function w(n){return(t,e)=>{let r;if("formatting"===(e?.context?String(e.context):"standalone")&&n.formattingValues){const t=n.defaultFormattingWidth||n.defaultWidth,a=e?.width?String(e.width):t;r=n.formattingValues[a]||n.formattingValues[t]}else{const t=n.defaultWidth,a=e?.width?String(e.width):n.defaultWidth;r=n.values[a]||n.values[t]}return r[n.argumentCallback?n.argumentCallback(t):t]}}const y={ordinalNumber:(n,t)=>{const e=Number(n),r=e%100;if(r>20||r<10)switch(r%10){case 1:return e+"st";case 2:return e+"nd";case 3:return e+"rd"}return e+"th"},era:w({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:w({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:n=>n-1}),month:w({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:w({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:w({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function E(n){return(t,e={})=>{const r=e.width,a=r&&n.matchPatterns[r]||n.matchPatterns[n.defaultMatchWidth],o=t.match(a);if(!o)return null;const i=o[0],s=r&&n.parsePatterns[r]||n.parsePatterns[n.defaultParseWidth],c=Array.isArray(s)?function(n,t){for(let t=0;t<n.length;t++)if(n[t].test(i))return t}(s):function(n,t){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t)&&n[t].test(i))return t}(s);let u;return u=n.valueCallback?n.valueCallback(c):c,u=e.valueCallback?e.valueCallback(u):u,{value:u,rest:t.slice(i.length)}}}const C={ordinalNumber:(x={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:n=>parseInt(n,10)},(n,t={})=>{const e=n.match(x.matchPattern);if(!e)return null;const r=e[0],a=n.match(x.parsePattern);if(!a)return null;let o=x.valueCallback?x.valueCallback(a[0]):a[0];return o=t.valueCallback?t.valueCallback(o):o,{value:o,rest:n.slice(r.length)}}),era:E({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:E({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:n=>n+1}),month:E({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:E({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:E({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};var x;const v={code:"en-US",formatDistance:(n,t,e)=>{let r;const a=A[n];return r="string"==typeof a?a:1===t?a.one:a.other.replace("{{count}}",t.toString()),e?.addSuffix?e.comparison&&e.comparison>0?"in "+r:r+" ago":r},formatLong:p,formatRelative:(n,t,e,r)=>b[n],localize:y,match:C,options:{weekStartsOn:0,firstWeekContainsDate:1}};let B={};function k(){return B}Math.pow(10,8);const M=6048e5,S=864e5;function W(n){const t=Object.prototype.toString.call(n);return n instanceof Date||"object"==typeof n&&"[object Date]"===t?new n.constructor(+n):"number"==typeof n||"[object Number]"===t||"string"==typeof n||"[object String]"===t?new Date(n):new Date(NaN)}function P(n){const t=W(n);return t.setHours(0,0,0,0),t}function T(n){const t=new Date(Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()));return t.setUTCFullYear(n.getFullYear()),n.getTime()-t.getTime()}function D(n,t){return n instanceof Date?new n.constructor(t):new Date(t)}function j(n){const t=W(n);return function(n,t){const e=P(n),r=P(t),a=+e-T(e),o=+r-T(r);return Math.trunc((a-o)/S)}(t,function(n){const t=W(n),e=D(n,0);return e.setFullYear(t.getFullYear(),0,1),e.setHours(0,0,0,0),e}(t))+1}function Y(n,t){const e=k(),r=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??e.weekStartsOn??e.locale?.options?.weekStartsOn??0,a=W(n),o=a.getDay(),i=(o<r?7:0)+o-r;return a.setDate(a.getDate()-i),a.setHours(0,0,0,0),a}function q(n){return Y(n,{weekStartsOn:1})}function O(n){const t=W(n),e=t.getFullYear(),r=D(n,0);r.setFullYear(e+1,0,4),r.setHours(0,0,0,0);const a=q(r),o=D(n,0);o.setFullYear(e,0,4),o.setHours(0,0,0,0);const i=q(o);return t.getTime()>=a.getTime()?e+1:t.getTime()>=i.getTime()?e:e-1}function N(n){const t=W(n),e=+q(t)-+function(n){const t=O(n),e=D(n,0);return e.setFullYear(t,0,4),e.setHours(0,0,0,0),q(e)}(t);return Math.trunc(e/M)+1}function z(n,t){const e=W(n),r=e.getFullYear(),a=k(),o=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??a.firstWeekContainsDate??a.locale?.options?.firstWeekContainsDate??1,i=D(n,0);i.setFullYear(r+1,0,o),i.setHours(0,0,0,0);const s=Y(i,t),c=D(n,0);c.setFullYear(r,0,o),c.setHours(0,0,0,0);const u=Y(c,t);return e.getTime()>=s.getTime()?r+1:e.getTime()>=u.getTime()?r:r-1}function H(n,t){const e=W(n),r=+Y(e,t)-+function(n,t){const e=k(),r=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??e.firstWeekContainsDate??e.locale?.options?.firstWeekContainsDate??1,a=z(n,t),o=D(n,0);return o.setFullYear(a,0,r),o.setHours(0,0,0,0),Y(o,t)}(e,t);return Math.trunc(r/M)+1}function F(n,t){return(n<0?"-":"")+Math.abs(n).toString().padStart(t,"0")}const L={y(n,t){const e=n.getFullYear(),r=e>0?e:1-e;return F("yy"===t?r%100:r,t.length)},M(n,t){const e=n.getMonth();return"M"===t?String(e+1):F(e+1,2)},d:(n,t)=>F(n.getDate(),t.length),a(n,t){const e=n.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return e.toUpperCase();case"aaa":return e;case"aaaaa":return e[0];default:return"am"===e?"a.m.":"p.m."}},h:(n,t)=>F(n.getHours()%12||12,t.length),H:(n,t)=>F(n.getHours(),t.length),m:(n,t)=>F(n.getMinutes(),t.length),s:(n,t)=>F(n.getSeconds(),t.length),S(n,t){const e=t.length,r=n.getMilliseconds();return F(Math.trunc(r*Math.pow(10,e-3)),t.length)}},X={G:function(n,t,e){const r=n.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return e.era(r,{width:"abbreviated"});case"GGGGG":return e.era(r,{width:"narrow"});default:return e.era(r,{width:"wide"})}},y:function(n,t,e){if("yo"===t){const t=n.getFullYear(),r=t>0?t:1-t;return e.ordinalNumber(r,{unit:"year"})}return L.y(n,t)},Y:function(n,t,e,r){const a=z(n,r),o=a>0?a:1-a;return"YY"===t?F(o%100,2):"Yo"===t?e.ordinalNumber(o,{unit:"year"}):F(o,t.length)},R:function(n,t){return F(O(n),t.length)},u:function(n,t){return F(n.getFullYear(),t.length)},Q:function(n,t,e){const r=Math.ceil((n.getMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return F(r,2);case"Qo":return e.ordinalNumber(r,{unit:"quarter"});case"QQQ":return e.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return e.quarter(r,{width:"narrow",context:"formatting"});default:return e.quarter(r,{width:"wide",context:"formatting"})}},q:function(n,t,e){const r=Math.ceil((n.getMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return F(r,2);case"qo":return e.ordinalNumber(r,{unit:"quarter"});case"qqq":return e.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return e.quarter(r,{width:"narrow",context:"standalone"});default:return e.quarter(r,{width:"wide",context:"standalone"})}},M:function(n,t,e){const r=n.getMonth();switch(t){case"M":case"MM":return L.M(n,t);case"Mo":return e.ordinalNumber(r+1,{unit:"month"});case"MMM":return e.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return e.month(r,{width:"narrow",context:"formatting"});default:return e.month(r,{width:"wide",context:"formatting"})}},L:function(n,t,e){const r=n.getMonth();switch(t){case"L":return String(r+1);case"LL":return F(r+1,2);case"Lo":return e.ordinalNumber(r+1,{unit:"month"});case"LLL":return e.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return e.month(r,{width:"narrow",context:"standalone"});default:return e.month(r,{width:"wide",context:"standalone"})}},w:function(n,t,e,r){const a=H(n,r);return"wo"===t?e.ordinalNumber(a,{unit:"week"}):F(a,t.length)},I:function(n,t,e){const r=N(n);return"Io"===t?e.ordinalNumber(r,{unit:"week"}):F(r,t.length)},d:function(n,t,e){return"do"===t?e.ordinalNumber(n.getDate(),{unit:"date"}):L.d(n,t)},D:function(n,t,e){const r=j(n);return"Do"===t?e.ordinalNumber(r,{unit:"dayOfYear"}):F(r,t.length)},E:function(n,t,e){const r=n.getDay();switch(t){case"E":case"EE":case"EEE":return e.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return e.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return e.day(r,{width:"short",context:"formatting"});default:return e.day(r,{width:"wide",context:"formatting"})}},e:function(n,t,e,r){const a=n.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(o);case"ee":return F(o,2);case"eo":return e.ordinalNumber(o,{unit:"day"});case"eee":return e.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return e.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return e.day(a,{width:"short",context:"formatting"});default:return e.day(a,{width:"wide",context:"formatting"})}},c:function(n,t,e,r){const a=n.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(o);case"cc":return F(o,t.length);case"co":return e.ordinalNumber(o,{unit:"day"});case"ccc":return e.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return e.day(a,{width:"narrow",context:"standalone"});case"cccccc":return e.day(a,{width:"short",context:"standalone"});default:return e.day(a,{width:"wide",context:"standalone"})}},i:function(n,t,e){const r=n.getDay(),a=0===r?7:r;switch(t){case"i":return String(a);case"ii":return F(a,t.length);case"io":return e.ordinalNumber(a,{unit:"day"});case"iii":return e.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return e.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return e.day(r,{width:"short",context:"formatting"});default:return e.day(r,{width:"wide",context:"formatting"})}},a:function(n,t,e){const r=n.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return e.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return e.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return e.dayPeriod(r,{width:"narrow",context:"formatting"});default:return e.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(n,t,e){const r=n.getHours();let a;switch(a=12===r?"noon":0===r?"midnight":r/12>=1?"pm":"am",t){case"b":case"bb":return e.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return e.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return e.dayPeriod(a,{width:"narrow",context:"formatting"});default:return e.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(n,t,e){const r=n.getHours();let a;switch(a=r>=17?"evening":r>=12?"afternoon":r>=4?"morning":"night",t){case"B":case"BB":case"BBB":return e.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return e.dayPeriod(a,{width:"narrow",context:"formatting"});default:return e.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(n,t,e){if("ho"===t){let t=n.getHours()%12;return 0===t&&(t=12),e.ordinalNumber(t,{unit:"hour"})}return L.h(n,t)},H:function(n,t,e){return"Ho"===t?e.ordinalNumber(n.getHours(),{unit:"hour"}):L.H(n,t)},K:function(n,t,e){const r=n.getHours()%12;return"Ko"===t?e.ordinalNumber(r,{unit:"hour"}):F(r,t.length)},k:function(n,t,e){let r=n.getHours();return 0===r&&(r=24),"ko"===t?e.ordinalNumber(r,{unit:"hour"}):F(r,t.length)},m:function(n,t,e){return"mo"===t?e.ordinalNumber(n.getMinutes(),{unit:"minute"}):L.m(n,t)},s:function(n,t,e){return"so"===t?e.ordinalNumber(n.getSeconds(),{unit:"second"}):L.s(n,t)},S:function(n,t){return L.S(n,t)},X:function(n,t,e){const r=n.getTimezoneOffset();if(0===r)return"Z";switch(t){case"X":return Q(r);case"XXXX":case"XX":return $(r);default:return $(r,":")}},x:function(n,t,e){const r=n.getTimezoneOffset();switch(t){case"x":return Q(r);case"xxxx":case"xx":return $(r);default:return $(r,":")}},O:function(n,t,e){const r=n.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+I(r,":");default:return"GMT"+$(r,":")}},z:function(n,t,e){const r=n.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+I(r,":");default:return"GMT"+$(r,":")}},t:function(n,t,e){return F(Math.trunc(n.getTime()/1e3),t.length)},T:function(n,t,e){return F(n.getTime(),t.length)}};function I(n,t=""){const e=n>0?"-":"+",r=Math.abs(n),a=Math.trunc(r/60),o=r%60;return 0===o?e+String(a):e+String(a)+t+F(o,2)}function Q(n,t){return n%60==0?(n>0?"-":"+")+F(Math.abs(n)/60,2):$(n,t)}function $(n,t=""){const e=n>0?"-":"+",r=Math.abs(n);return e+F(Math.trunc(r/60),2)+t+F(r%60,2)}const U=(n,t)=>{switch(n){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});default:return t.date({width:"full"})}},G=(n,t)=>{switch(n){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});default:return t.time({width:"full"})}},R={p:G,P:(n,t)=>{const e=n.match(/(P+)(p+)?/)||[],r=e[1],a=e[2];if(!a)return U(n,t);let o;switch(r){case"P":o=t.dateTime({width:"short"});break;case"PP":o=t.dateTime({width:"medium"});break;case"PPP":o=t.dateTime({width:"long"});break;default:o=t.dateTime({width:"full"})}return o.replace("{{date}}",U(r,t)).replace("{{time}}",G(a,t))}},Z=/^D+$/,J=/^Y+$/,V=["D","DD","YY","YYYY"];function K(n){if(!(t=n,t instanceof Date||"object"==typeof t&&"[object Date]"===Object.prototype.toString.call(t)||"number"==typeof n))return!1;var t;const e=W(n);return!isNaN(Number(e))}const _=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,nn=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,tn=/^'([^]*?)'?$/,en=/''/g,rn=/[a-zA-Z]/;function an(n){const t=n.match(tn);return t?t[1].replace(en,"'"):n}let on="";const sn="5d36a92a373b4ee08e1150316241901",cn="http://api.weatherapi.com/v1/current.json",un=async n=>{const t=await(async n=>{try{const t=await(async n=>{try{const t=await fetch(n,{mode:"cors"});return await t.json()}catch(n){throw console.error("Error fetching data:",n),n}})(n);return console.log(t),t}catch(n){console.error("Error:",n)}return!0})(n),e=document.querySelectorAll(".weather-info1"),r=e.item(0);r.textContent=`${t.location.name}, ${t.location.country}`,e.item(1).textContent=`${function(n,t,e){const r=k(),a=e?.locale??r.locale??v,o=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,i=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,s=W(n);if(!K(s))throw new RangeError("Invalid time value");let c=t.match(nn).map((n=>{const t=n[0];return"p"===t||"P"===t?(0,R[t])(n,a.formatLong):n})).join("").match(_).map((n=>{if("''"===n)return{isToken:!1,value:"'"};const t=n[0];if("'"===t)return{isToken:!1,value:an(n)};if(X[t])return{isToken:!0,value:n};if(t.match(rn))throw new RangeError("Format string contains an unescaped latin alphabet character `"+t+"`");return{isToken:!1,value:n}}));a.localize.preprocessor&&(c=a.localize.preprocessor(s,c));const u={firstWeekContainsDate:o,weekStartsOn:i,locale:a};return c.map((r=>{if(!r.isToken)return r.value;const o=r.value;return(!e?.useAdditionalWeekYearTokens&&function(n){return J.test(n)}(o)||!e?.useAdditionalDayOfYearTokens&&function(n){return Z.test(n)}(o))&&function(n,t,e){const r=function(n,t,e){const r="Y"===n[0]?"years":"days of the month";return`Use \`${n.toLowerCase()}\` instead of \`${n}\` (in \`${t}\`) for formatting ${r} to the input \`${e}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}(n,t,e);if(console.warn(r),V.includes(n))throw new RangeError(r)}(o,t,String(n)),(0,X[o[0]])(s,o,a.localize,u)})).join("")}(t.current.last_updated,"EEEE d MMMM yyyy | HH:mm")}`,console.log(r.textContent)};un(`${cn}?key=${sn}&q=Tamale`),(()=>{const n=document.querySelector("input");n.addEventListener("keyup",(t=>{"Enter"===t.key&&(on=`${cn}?key=${sn}&q=${n.value}`,un(on))}))})()})()})();
//# sourceMappingURL=app.bundle.js.map