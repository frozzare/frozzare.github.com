(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{HS01:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r){1!==e&&(t+="s");return e+" "+t+" "+r};!function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);t.default=e}(r("q1tI"))},LlRK:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,a=!1,o=void 0;try{for(var l,i=e[Symbol.iterator]();!(n=(l=i.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(s){a=!0,o=s}finally{try{!n&&i.return&&i.return()}finally{if(a)throw o}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r("q1tI")),i=u(r("HS01")),s=u(r("zcrH"));function u(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var p=l.Component,f=60,d=60*f,m=24*d,h=7*m,v=30*m,y=365*m,b=function(e){function t(){var e,r,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,o=Array(a),l=0;l<a;l++)o[l]=arguments[l];return r=n=c(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),n.isStillMounted=!1,n.tick=function(e){if(n.isStillMounted&&n.props.live){var t=(0,s.default)(n.props.date).valueOf();if(t){var r=n.props.now(),a=Math.round(Math.abs(r-t)/1e3),o=a<f?1e3:a<d?1e3*f:a<m?1e3*d:0,l=Math.min(Math.max(o,1e3*n.props.minPeriod),1e3*n.props.maxPeriod);l&&(n.timeoutId&&clearTimeout(n.timeoutId),n.timeoutId=setTimeout(n.tick,l)),e||n.forceUpdate()}else console.warn("[react-timeago] Invalid Date provided")}},c(n,r)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){this.isStillMounted=!0,this.props.live&&this.tick(!0)}},{key:"componentDidUpdate",value:function(e){this.props.live===e.live&&this.props.date===e.date||(!this.props.live&&this.timeoutId&&clearTimeout(this.timeoutId),this.tick())}},{key:"componentWillUnmount",value:function(){this.isStillMounted=!1,this.timeoutId&&(clearTimeout(this.timeoutId),this.timeoutId=void 0)}},{key:"render",value:function(){var e=this.props,t=e.date,r=e.formatter,o=e.component,u=(e.live,e.minPeriod,e.maxPeriod,e.title),c=e.now,p=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(e,["date","formatter","component","live","minPeriod","maxPeriod","title","now"]),b=(0,s.default)(t).valueOf();if(!b)return null;var g=c(),w=Math.round(Math.abs(g-b)/1e3),x=b<g?"ago":"from now",N=w<f?[Math.round(w),"second"]:w<d?[Math.round(w/f),"minute"]:w<m?[Math.round(w/d),"hour"]:w<h?[Math.round(w/m),"day"]:w<v?[Math.round(w/h),"week"]:w<y?[Math.round(w/v),"month"]:[Math.round(w/y),"year"],O=a(N,2),j=O[0],P=O[1],_="undefined"===typeof u?"string"===typeof t?t:(0,s.default)(t).toISOString().substr(0,16).replace("T"," "):u,M="time"===o?Object.assign({},p,{dateTime:(0,s.default)(t).toISOString()}):p,S=i.default.bind(null,j,P,x);return l.createElement(o,n({},M,{title:_}),r(j,P,x,b,S,c))}}]),t}(p);b.displayName="TimeAgo",b.defaultProps={live:!0,component:"time",minPeriod:0,maxPeriod:1/0,formatter:i.default,now:function(){return Date.now()}},t.default=b},RXBc:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),a=r.n(n),o=r("LlRK"),l=r.n(o),i=r("/m4c"),s=a.a.createElement,u=function(){var e=Object(n.useState)([]),t=e[0],r=e[1],o=Object(n.useState)([]),u=o[0],c=o[1];Object(n.useEffect)((function(){fetch("https://gh-latest-repos.frozzare.now.sh/").then((function(e){return e.json()})).then(r),fetch("https://api.github.com/users/frozzare/events/public").then((function(e){return e.json()})).then((function(e){c(e.filter((function(e){return"PushEvent"===e.type})))}))}),[]);var p=t.map((function(e){return s("div",{className:"w-full lg:w-1/2"},s("div",{className:"p-2 pl-0"},s("h4",{className:"text-xl"},s("a",{href:e.url,className:"underline",rel:"noopener noreferrer"},e.name),s("span",{className:"text-xs rounded py-1 px-2 ml-2",style:{backgroundColor:e.primaryLanguage.color}},e.primaryLanguage.name)),s("p",null,e.description)))})),f=u.slice(0,1).map((function(e){var t=e.payload.commits.pop()||{},r=e.repo||{};return s(a.a.Fragment,null,s("p",null,s("a",{href:(t.url||"").replace("api.","").replace("repos/",""),rel:"noopener noreferrer"},t.message)," in ",s("a",{href:(r.url||"").replace("api.","").replace("repos/",""),rel:"noopener noreferrer"},e.repo.name)),s("p",{className:"text-xs text-gray-500 pt-1"},s(l.a,{date:e.created_at})))}));return s("div",{id:"projects",className:"flex content-center bg-gray-100 p-10 min-h-screen"},s("div",{className:"m-auto"},s("div",null,s("h3",{className:"text-3xl pb-5"},"Selected projects"),s("div",{className:"flex flex-wrap pb-5"},s("div",{className:"w-full lg:w-1/2"},s("div",{className:"p-2 pl-0"},s("h4",{className:"text-xl"},s("a",{href:"https://github.com/ylletjs/yllet/",className:"underline",rel:"noopener noreferrer"},"Yllet"),s("span",{className:"text-xs rounded py-1 px-2 ml-2",style:{backgroundColor:"rgb(241, 224, 90)"}},"JavaScript")),s("p",null,"Yllet is a set of packages for the WordPress API for both React and non-React projects."))),s("div",{className:"w-full lg:w-1/2"},s("div",{className:"p-2 pl-0"},s("h4",{className:"text-xl"},s("a",{href:"https://swedishtechevents.com/",className:"underline",rel:"noopener noreferrer"},"Swedish Tech Events"),s("span",{className:"text-xs rounded py-1 px-2 ml-2",style:{backgroundColor:"rgb(241, 224, 90)"}},"JavaScript")),s("p",null,"Events for developers, technologists, and other geeks in Sweden.")))),s("h3",{className:"text-3xl pb-5"},"Latest repos"),s("div",{className:"flex flex-wrap pb-5"},t.length?p:s("p",null,"Loading..")),s("h3",{className:"text-3xl pb-5"},"Latest commit"),u.length?f:s("p",null,"Loading..."),s("p",{className:"mt-5"},s(i.a,{to:"https://github.com/frozzare",title:"Visit my GitHub profile"})))))},c=a.a.createElement;t.default=function(){return c("div",null,c("div",{className:"flex flex-wrap content-center lg:p-10 min-h-screen"},c("div",{className:"w-full flex justify-center"},c("img",{src:"https://frozzare.com/static/frozzare.jpg",className:"rounded h-48 w-48 lg:pin-l lg:pin-t mt-10 lg:mt-0 lg:-mt-32 mb-0 lg:mb-12"})),c("div",{className:"w-full p-10 lg:p-0 lg:w-3/4 m-auto"},c("h1",{className:"text-6xl pb-5"},"Hello! \ud83d\udc4b"),c("p",{className:"text-2xl"},"I'm Fredrik Forsmo, full-stack developer, tech maker and open source ninja and focusing on JavaScript, PHP and Go. I'm ",c(i.a,{to:"https://twitter.com/frozzare",title:"@frozzare"})," on Twitter."))),c(u,null))}},vlRD:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r("RXBc")}])},zcrH:function(e,t,r){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=new Date(e);if(!Number.isNaN(t.valueOf()))return t;var r=String(e).match(/\d+/g);if(null==r||r.length<=2)return t;var a=r.map((function(e){return parseInt(e)})),o=(c=a,Array.isArray(c)?c:Array.from(c)),l=o[0],i=o[1],s=o.slice(2),u=[l,i-1].concat(n(s));return new Date(Date.UTC.apply(Date,n(u)));var c}}},[["vlRD",0,1]]]);