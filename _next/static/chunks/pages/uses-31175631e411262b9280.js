_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"/0+H":function(e,t,o){"use strict";t.__esModule=!0,t.isInAmpMode=r,t.useAmp=function(){return r(i.default.useContext(n.AmpStateContext))};var a,i=(a=o("q1tI"))&&a.__esModule?a:{default:a},n=o("lwAK");function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,o=void 0!==t&&t,a=e.hybrid,i=void 0!==a&&a,n=e.hasQuery,r=void 0!==n&&n;return o||i&&r}},"/m4c":function(e,t,o){"use strict";var a=o("q1tI"),i=o.n(a).a.createElement;t.a=function(e){var t=e.children,o=e.to;return i("a",{className:"underline text-f-pink",href:o,target:"_blank",rel:"noopener noreferrer"},t)}},"7W2i":function(e,t,o){var a=o("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}},"8Kt/":function(e,t,o){"use strict";o("lSNA");t.__esModule=!0,t.defaultHead=u,t.default=void 0;var a,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var o={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var n=a?Object.getOwnPropertyDescriptor(e,i):null;n&&(n.get||n.set)?Object.defineProperty(o,i,n):o[i]=e[i]}o.default=e,t&&t.set(e,o);return o}(o("q1tI")),n=(a=o("Xuae"))&&a.__esModule?a:{default:a},r=o("lwAK"),s=o("FYa8"),l=o("/0+H");function c(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function m(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var o=i.default.Children.toArray(t.props.children);return e.concat(o)}),[]).reduce(m,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,o=new Set,a={};return function(i){var n=!0;if(i.key&&"number"!==typeof i.key&&i.key.indexOf("$")>0){var r=i.key.slice(i.key.indexOf("$")+1);e.has(r)?n=!1:e.add(r)}switch(i.type){case"title":case"base":t.has(i.type)?n=!1:t.add(i.type);break;case"meta":for(var s=0,l=p.length;s<l;s++){var c=p[s];if(i.props.hasOwnProperty(c))if("charSet"===c)o.has(c)?n=!1:o.add(c);else{var u=i.props[c],m=a[c]||new Set;m.has(u)?n=!1:(m.add(u),a[c]=m)}}}return n}}()).reverse().map((function(e,t){var o=e.key||t;return i.default.cloneElement(e,{key:o})}))}function f(e){var t=e.children,o=(0,i.useContext)(r.AmpStateContext),a=(0,i.useContext)(s.HeadManagerContext);return i.default.createElement(n.default,{reduceComponentsToState:d,headManager:a,inAmpMode:(0,l.isInAmpMode)(o)},t)}f.rewind=function(){};var h=f;t.default=h},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,o){"use strict";var a;t.__esModule=!0,t.HeadManagerContext=void 0;var i=((a=o("q1tI"))&&a.__esModule?a:{default:a}).default.createContext({});t.HeadManagerContext=i},IAli:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/uses",function(){return o("TMYN")}])},Ijbi:function(e,t,o){var a=o("WkPL");e.exports=function(e){if(Array.isArray(e))return a(e)}},Nsbk:function(e,t){function o(t){return e.exports=o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},o(t)}e.exports=o},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},Qetd:function(e,t,o){"use strict";var a=Object.assign.bind(Object);e.exports=a,e.exports.default=e.exports},RIqP:function(e,t,o){var a=o("Ijbi"),i=o("EbDI"),n=o("ZhPi"),r=o("Bnag");e.exports=function(e){return a(e)||i(e)||n(e)||r()}},SksO:function(e,t){function o(t,a){return e.exports=o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},o(t,a)}e.exports=o},TMYN:function(e,t,o){"use strict";o.r(t);var a=o("q1tI"),i=o.n(a),n=o("/m4c"),r=o("8Kt/"),s=o.n(r),l=i.a.createElement;t.default=function(){return l(i.a.Fragment,null,l(s.a,null,l("title",null,"Uses - Fredrik Forsmo"),l("meta",{name:"description",content:"The tools Fredrik Forsmo uses"}),l("meta",{property:"og:title",content:"Uses - Fredrik Forsmo"}),l("meta",{property:"og:description",content:"The tools Fredrik Forsmo uses"}),l("meta",{property:"og:image",content:"https://frozzare.com/frozzare.jpg"}),l("meta",{name:"twitter:title",content:"Uses - Fredrik Forsmo"}),l("meta",{name:"twitter:description",content:"The tools Fredrik Forsmo uses"}),l("meta",{name:"twitter:image",content:"https://frozzare.com/frozzare.jpg"}),l("meta",{name:"twitter:card",content:"summary"})),l("div",{className:"container mx-auto"},l("div",{className:"pt-32"},l("div",{className:"flex flex-wrap content-center min-h-screen"},l("div",{className:"w-11/12 lg:w-2/4 m-auto"},l("h1",{className:"text-6xl pb-5 text-center"},"Uses \ud83e\udd16"),l("div",{className:"text-lg mb-5"},l("h3",{className:"text-2xl"},"Website"),l("p",{className:"mt-2"},"This website is built with ",l(n.a,{to:"https://nextjs.org"},"Next.js")," and ",l(n.a,{to:"https://tailwindcss.com/"},"Tailwind CSS")," and hosted on ",l(n.a,{to:"https://pages.github.com/"},"GitHub Pages"),".")),l("div",{className:"text-lg mb-5"},l("h3",{className:"text-2xl"},"Editor"),l("ul",{className:"list-disc mt-2 ml-5"},l("li",null,l(n.a,{to:"https://code.visualstudio.com/"},"Visual Studio Code")),l("li",null,l(n.a,{to:"https://marketplace.visualstudio.com/items?itemName=ms-vscode.Theme-TomorrowKit"},"Tomorrow Night theme")),l("li",null,"Menlo font, 11px"))),l("div",{className:"text-lg mb-5"},l("h3",{className:"text-2xl"},"Terminal"),l("ul",{className:"list-disc mt-2 ml-5"},l("li",null,l(n.a,{to:"https://iterm2.com/"},"iTerm 2")),l("li",null,l(n.a,{to:"https://github.com/oskarkrawczyk/honukai-iterm-zsh"},"Honukai theme")),l("li",null,l(n.a,{to:"https://github.com/frozzare/dotfiles"},"My dotfiles")),l("li",null,"Menlo font, 11px"))),l("div",{className:"text-lg mb-5"},l("h3",{className:"text-2xl"},"Visual Studio Code Extensions"),l("ul",{className:"list-disc mt-2 ml-5"},l("li",null,l(n.a,{to:"https://marketplace.visualstudio.com/items?itemName=TwentyChung.jsx"},"TwentyChung.jsx")),l("li",null,l(n.a,{to:"https://marketplace.visualstudio.com/items?itemName=be5invis.toml"},"be5invis.toml")),l("li",null,l(n.a,{to:"https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets"},"burkeholland.simple-react-snippets")),l("li",null,l(n.a,{to:"https://marketplace.visualstudio.com/items?itemName=darkriszty.markdown-table-prettify"},"darkriszty.markdown-table-prettify")),l("li",null,l(n.a,{to:"https://marketplace.visualstudio.com/items?itemName=Dart-Code.dart-code"},"Dart-Code.dart-code")),l("li",null,l(n.a,{to:"https://marketplace.visualstudio.com/items?itemName=Dart-Code.flutter"},"Dart-Code.flutter")),l("li",null,l(n.a,{to:"https://marketplace.visualstudio.com/items?itemName=DigitalBrainstem.javascript-ejs-support"},"DigitalBrainstem.javascript-ejs-support")),l("li",null,l(n.a,{to:"https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens"},"eamodio.gitlens")),l("li",null,l(n.a,{to:"https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig"},"EditorConfig.EditorConfig")),l("li",null,l(n.a,{to:"https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode"},"esbenp.prettier-vscode")),l("li",null,l(n.a,{to:"https://marketplace.visualstudio.com/items?itemName=FallenMax.mithril-emmet"},"FallenMax.mithril-emmet")),l("li",null,l(n.a,{to:"https://marketplace.visualstudio.com/items?itemName=felixfbecker.php-debug"},"felixfbecker.php-debug")),l("li",null,l(n.a,{to:"https://marketplace.visualstudio.com/items?itemName=jcbuisson.vue"},"jcbuisson.vue")),l("li",null,l(n.a,{to:"https://marketplace.visualstudio.com/items?itemName=kumar-harsh.graphql-for-vscode"},"kumar-harsh.graphql-for-vscode")),l("li",null,l(n.a,{to:"https://marketplace.visualstudio.com/items?itemName=mohsen1.prettify-json"},"mohsen1.prettify-json")),l("li",null,l(n.a,{to:"https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker"},"ms-azuretools.vscode-docker")),l("li",null,l(n.a,{to:"https://marketplace.visualstudio.com/items?itemName=ms-python.python"},"ms-python.python")),l("li",null,l(n.a,{to:"https://marketplace.visualstudio.com/items?itemName=ms-vscode.azure-account"},"ms-vscode.azure-account")),l("li",null,l(n.a,{to:"https://marketplace.visualstudio.com/items?itemName=ms-vscode.Go"},"ms-vscode.Go")),l("li",null,l(n.a,{to:"https://marketplace.visualstudio.com/items?itemName=ms-vscode.node-debug2"},"ms-vscode.node-debug2")),l("li",null,l(n.a,{to:"https://marketplace.visualstudio.com/items?itemName=ms-vscode.Theme-TomorrowKit"},"ms-vscode.Theme-TomorrowKit")),l("li",null,l(n.a,{to:"https://marketplace.visualstudio.com/items?itemName=msjsdiag.vscode-react-native"},"msjsdiag.vscode-react-native")),l("li",null,l(n.a,{to:"https://marketplace.visualstudio.com/items?itemName=neilbrayfield.php-docblocker"},"neilbrayfield.php-docblocker")),l("li",null,l(n.a,{to:"https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml"},"redhat.vscode-yaml")),l("li",null,l(n.a,{to:"https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons"},"vscode-icons-team.vscode-icons")),l("li",null,l(n.a,{to:"https://marketplace.visualstudio.com/items?itemName=whatwedo.twig"},"whatwedo.twig")),l("li",null,l(n.a,{to:"https://marketplace.visualstudio.com/items?itemName=wholroyd.HCL"},"wholroyd.HCL")),l("li",null,l(n.a,{to:"https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost"},"wix.vscode-import-cost")),l("li",null,l(n.a,{to:"https://marketplace.visualstudio.com/items?itemName=yuichinukiyama.TabSpacer"},"yuichinukiyama.TabSpacer")),l("li",null,l(n.a,{to:"https://marketplace.visualstudio.com/items?itemName=zxh404.vscode-proto3"},"zxh404.vscode-proto3")),"              ")),l("div",{className:"text-lg mb-5"},l("h3",{className:"text-2xl"},"Chrome Extensions"),l("ul",{className:"list-disc mt-2 ml-5"},l("li",null,l(n.a,{to:"https://chrome.google.com/webstore/detail/1password-extension-deskt/aomjjhallfgjeglblehebfpbcfeobpgk"},"1Password")),l("li",null,l(n.a,{to:"https://chrome.google.com/webstore/detail/accessibility-insights-fo/pbjjkligggfmakdaogkfomddhfmpjeni"},"Accessibility Insights for Web")),l("li",null,l(n.a,{to:"https://chrome.google.com/webstore/detail/checkbot-seo-web-speed-se/dagohlmlhagincbfilmkadjgmdnkjinl"},"Checkbot: SEO, Web Speed & Security Tester")),l("li",null,l(n.a,{to:"https://chrome.google.com/webstore/detail/colorzilla/bhlhnicpbhignbdhedgjhgdocnmhomnp"},"ColorZilla")),l("li",null,l(n.a,{to:"https://chrome.google.com/webstore/detail/full-page-screen-capture/fdpohaocaechififmbbbbbknoalclacl"},"Full Page Screen Capture")),l("li",null,l(n.a,{to:"https://chrome.google.com/webstore/detail/glyf/kklidjoiedcocpkddfnknenpkpcdalnp"},"Glyf")),l("li",null,l(n.a,{to:"https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc"},"JSONView")),l("li",null,l(n.a,{to:"https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi"},"React Developer Tools")),l("li",null,l(n.a,{to:"https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm"},"uBlock Origin")),l("li",null,l(n.a,{to:"https://chrome.google.com/webstore/detail/xv-%E2%80%94-xml-viewer/eeocglpgjdpaefaedpblffpeebgmgddk"},"XV \u2014 XML Viewer")))))))))}},W8MJ:function(e,t){function o(e,t){for(var o=0;o<t.length;o++){var a=t[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}e.exports=function(e,t,a){return t&&o(e.prototype,t),a&&o(e,a),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,a=new Array(t);o<t;o++)a[o]=e[o];return a}},Xuae:function(e,t,o){"use strict";var a=o("RIqP"),i=o("lwsE"),n=o("W8MJ"),r=(o("PJYZ"),o("7W2i")),s=o("a1gu"),l=o("Nsbk");function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,a=l(e);if(t){var i=l(this).constructor;o=Reflect.construct(a,arguments,i)}else o=a.apply(this,arguments);return s(this,o)}}t.__esModule=!0,t.default=void 0;var u=o("q1tI"),m=function(e){r(o,e);var t=c(o);function o(e){var n;return i(this,o),(n=t.call(this,e))._hasHeadManager=void 0,n.emitChange=function(){n._hasHeadManager&&n.props.headManager.updateHead(n.props.reduceComponentsToState(a(n.props.headManager.mountedInstances),n.props))},n._hasHeadManager=n.props.headManager&&n.props.headManager.mountedInstances,n}return n(o,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),o}(u.Component);t.default=m},ZhPi:function(e,t,o){var a=o("WkPL");e.exports=function(e,t){if(e){if("string"===typeof e)return a(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?a(e,t):void 0}}},a1gu:function(e,t,o){var a=o("cDf5"),i=o("PJYZ");e.exports=function(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?i(e):t}},cDf5:function(e,t){function o(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=o=function(e){return typeof e}:e.exports=o=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(t)}e.exports=o},lSNA:function(e,t){e.exports=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}},lwAK:function(e,t,o){"use strict";var a;t.__esModule=!0,t.AmpStateContext=void 0;var i=((a=o("q1tI"))&&a.__esModule?a:{default:a}).default.createContext({});t.AmpStateContext=i},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}}},[["IAli",0,1]]]);