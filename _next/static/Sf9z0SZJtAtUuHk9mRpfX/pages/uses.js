(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"/0+H":function(e,t,o){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=a(o("q1tI")),n=o("lwAK");function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,o=void 0!==t&&t,a=e.hybrid,i=void 0!==a&&a,n=e.hasQuery;return o||i&&(void 0!==n&&n)}t.isInAmpMode=r,t.useAmp=function(){return r(i.default.useContext(n.AmpStateContext))}},"/m4c":function(e,t,o){"use strict";var a=o("q1tI"),i=o.n(a).a.createElement;t.a=function(e){var t=e.children,o=e.to;return i("a",{className:"underline text-blue-500",href:o,target:"_blank",rel:"noopener noreferrer"},t)}},"7W2i":function(e,t,o){var a=o("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}},"8Kt/":function(e,t,o){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=a(o("q1tI")),n=a(o("Xuae")),r=o("lwAK"),l=o("FYa8"),s=o("/0+H");function c(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function u(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=c;var m=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var o=i.default.Children.toArray(t.props.children);return e.concat(o)}),[]).reduce(u,[]).reverse().concat(c(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,o=new Set,a={};return function(i){var n=!0;if(i.key&&"number"!==typeof i.key&&i.key.indexOf("$")>0){var r=i.key.slice(i.key.indexOf("$")+1);e.has(r)?n=!1:e.add(r)}switch(i.type){case"title":case"base":t.has(i.type)?n=!1:t.add(i.type);break;case"meta":for(var l=0,s=m.length;l<s;l++){var c=m[l];if(i.props.hasOwnProperty(c))if("charSet"===c)o.has(c)?n=!1:o.add(c);else{var u=i.props[c],p=a[c]||new Set;p.has(u)?n=!1:(p.add(u),a[c]=p)}}}return n}}()).reverse().map((function(e,t){var o=e.key||t;return i.default.cloneElement(e,{key:o})}))}var d=n.default();function f(e){var t=e.children;return i.default.createElement(r.AmpStateContext.Consumer,null,(function(e){return i.default.createElement(l.HeadManagerContext.Consumer,null,(function(o){return i.default.createElement(d,{reduceComponentsToState:p,handleStateChange:o,inAmpMode:s.isInAmpMode(e)},t)}))}))}f.rewind=d.rewind,t.default=f},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},EbDI:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},FYa8:function(e,t,o){"use strict";var a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var i=a(o("q1tI"));t.HeadManagerContext=i.createContext(null)},IAli:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/uses",function(){return o("TMYN")}])},Ijbi:function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,o=new Array(e.length);t<e.length;t++)o[t]=e[t];return o}}},Nsbk:function(e,t){function o(t){return e.exports=o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},o(t)}e.exports=o},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},Qetd:function(e,t,o){"use strict";var a=Object.assign.bind(Object);e.exports=a,e.exports.default=e.exports},RIqP:function(e,t,o){var a=o("Ijbi"),i=o("EbDI"),n=o("Bnag");e.exports=function(e){return a(e)||i(e)||n()}},SksO:function(e,t){function o(t,a){return e.exports=o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},o(t,a)}e.exports=o},TMYN:function(e,t,o){"use strict";o.r(t);var a=o("q1tI"),i=o.n(a),n=o("/m4c"),r=o("8Kt/"),l=o.n(r),s=i.a.createElement;t.default=function(){return s(i.a.Fragment,null,s(l.a,null,s("title",null,"Uses - Fredrik Forsmo"),s("meta",{name:"description",content:"The tools Fredrik Forsmo uses"}),s("meta",{property:"og:title",content:"Uses - Fredrik Forsmo"}),s("meta",{property:"og:description",content:"The tools Fredrik Forsmo uses"}),s("meta",{property:"og:image",content:"https://frozzare.com/frozzare.jpg"}),s("meta",{name:"twitter:title",content:"Uses - Fredrik Forsmo"}),s("meta",{name:"twitter:description",content:"The tools Fredrik Forsmo uses"}),s("meta",{name:"twitter:image",content:"https://frozzare.com/frozzare.jpg"}),s("meta",{name:"twitter:card",content:"summary"})),s("div",{className:"container mx-auto"},s("div",{className:"pt-32"},s("div",{className:"flex flex-wrap content-center min-h-screen"},s("div",{className:"w-11/12 lg:w-2/4 m-auto"},s("h1",{className:"text-6xl pb-5 text-center"},"Uses \ud83e\udd16"),s("div",{className:"text-lg mb-5"},s("h3",{className:"text-2xl"},"Website"),s("p",{className:"mt-2"},"This website is built with ",s(n.a,{to:"https://nextjs.org"},"Next.js")," and ",s(n.a,{to:"https://tailwindcss.com/"},"Tailwind CSS")," and hosted on ",s(n.a,{to:"https://pages.github.com/"},"GitHub Pages"),".")),s("div",{className:"text-lg mb-5"},s("h3",{className:"text-2xl"},"Editor"),s("ul",{className:"list-disc mt-2 ml-5"},s("li",null,s(n.a,{to:"https://code.visualstudio.com/"},"Visual Studio Code")),s("li",null,s(n.a,{to:"https://marketplace.visualstudio.com/items?itemName=ms-vscode.Theme-TomorrowKit"},"Tomorrow Night theme")),s("li",null,"Menlo font, 11px"))),s("div",{className:"text-lg mb-5"},s("h3",{className:"text-2xl"},"Terminal"),s("ul",{className:"list-disc mt-2 ml-5"},s("li",null,s(n.a,{to:"https://iterm2.com/"},"iTerm 2")),s("li",null,s(n.a,{to:"https://github.com/oskarkrawczyk/honukai-iterm-zsh"},"Honukai theme")),s("li",null,s(n.a,{to:"https://github.com/frozzare/dotfiles"},"My dotfiles")),s("li",null,"Menlo font, 11px"))),s("div",{className:"text-lg mb-5"},s("h3",{className:"text-2xl"},"Visual Studio Code Extensions"),s("ul",{className:"list-disc mt-2 ml-5"},s("li",null,s(n.a,{to:"https://marketplace.visualstudio.com/items?itemName=TwentyChung.jsx"},"TwentyChung.jsx")),s("li",null,s(n.a,{to:"https://marketplace.visualstudio.com/items?itemName=be5invis.toml"},"be5invis.toml")),s("li",null,s(n.a,{to:"https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets"},"burkeholland.simple-react-snippets")),s("li",null,s(n.a,{to:"https://marketplace.visualstudio.com/items?itemName=darkriszty.markdown-table-prettify"},"darkriszty.markdown-table-prettify")),s("li",null,s(n.a,{to:"https://marketplace.visualstudio.com/items?itemName=Dart-Code.dart-code"},"Dart-Code.dart-code")),s("li",null,s(n.a,{to:"https://marketplace.visualstudio.com/items?itemName=Dart-Code.flutter"},"Dart-Code.flutter")),s("li",null,s(n.a,{to:"https://marketplace.visualstudio.com/items?itemName=DigitalBrainstem.javascript-ejs-support"},"DigitalBrainstem.javascript-ejs-support")),s("li",null,s(n.a,{to:"https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens"},"eamodio.gitlens")),s("li",null,s(n.a,{to:"https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig"},"EditorConfig.EditorConfig")),s("li",null,s(n.a,{to:"https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode"},"esbenp.prettier-vscode")),s("li",null,s(n.a,{to:"https://marketplace.visualstudio.com/items?itemName=FallenMax.mithril-emmet"},"FallenMax.mithril-emmet")),s("li",null,s(n.a,{to:"https://marketplace.visualstudio.com/items?itemName=felixfbecker.php-debug"},"felixfbecker.php-debug")),s("li",null,s(n.a,{to:"https://marketplace.visualstudio.com/items?itemName=jcbuisson.vue"},"jcbuisson.vue")),s("li",null,s(n.a,{to:"https://marketplace.visualstudio.com/items?itemName=kumar-harsh.graphql-for-vscode"},"kumar-harsh.graphql-for-vscode")),s("li",null,s(n.a,{to:"https://marketplace.visualstudio.com/items?itemName=mohsen1.prettify-json"},"mohsen1.prettify-json")),s("li",null,s(n.a,{to:"https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker"},"ms-azuretools.vscode-docker")),s("li",null,s(n.a,{to:"https://marketplace.visualstudio.com/items?itemName=ms-python.python"},"ms-python.python")),s("li",null,s(n.a,{to:"https://marketplace.visualstudio.com/items?itemName=ms-vscode.azure-account"},"ms-vscode.azure-account")),s("li",null,s(n.a,{to:"https://marketplace.visualstudio.com/items?itemName=ms-vscode.Go"},"ms-vscode.Go")),s("li",null,s(n.a,{to:"https://marketplace.visualstudio.com/items?itemName=ms-vscode.node-debug2"},"ms-vscode.node-debug2")),s("li",null,s(n.a,{to:"https://marketplace.visualstudio.com/items?itemName=ms-vscode.Theme-TomorrowKit"},"ms-vscode.Theme-TomorrowKit")),s("li",null,s(n.a,{to:"https://marketplace.visualstudio.com/items?itemName=msjsdiag.vscode-react-native"},"msjsdiag.vscode-react-native")),s("li",null,s(n.a,{to:"https://marketplace.visualstudio.com/items?itemName=neilbrayfield.php-docblocker"},"neilbrayfield.php-docblocker")),s("li",null,s(n.a,{to:"https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml"},"redhat.vscode-yaml")),s("li",null,s(n.a,{to:"https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons"},"vscode-icons-team.vscode-icons")),s("li",null,s(n.a,{to:"https://marketplace.visualstudio.com/items?itemName=whatwedo.twig"},"whatwedo.twig")),s("li",null,s(n.a,{to:"https://marketplace.visualstudio.com/items?itemName=wholroyd.HCL"},"wholroyd.HCL")),s("li",null,s(n.a,{to:"https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost"},"wix.vscode-import-cost")),s("li",null,s(n.a,{to:"https://marketplace.visualstudio.com/items?itemName=yuichinukiyama.TabSpacer"},"yuichinukiyama.TabSpacer")),s("li",null,s(n.a,{to:"https://marketplace.visualstudio.com/items?itemName=zxh404.vscode-proto3"},"zxh404.vscode-proto3")),"              ")),s("div",{className:"text-lg mb-5"},s("h3",{className:"text-2xl"},"Chrome Extensions"),s("ul",{className:"list-disc mt-2 ml-5"},s("li",null,s(n.a,{to:"https://chrome.google.com/webstore/detail/1password-extension-deskt/aomjjhallfgjeglblehebfpbcfeobpgk"},"1Password")),s("li",null,s(n.a,{to:"https://chrome.google.com/webstore/detail/accessibility-insights-fo/pbjjkligggfmakdaogkfomddhfmpjeni"},"Accessibility Insights for Web")),s("li",null,s(n.a,{to:"https://chrome.google.com/webstore/detail/checkbot-seo-web-speed-se/dagohlmlhagincbfilmkadjgmdnkjinl"},"Checkbot: SEO, Web Speed & Security Tester")),s("li",null,s(n.a,{to:"https://chrome.google.com/webstore/detail/colorzilla/bhlhnicpbhignbdhedgjhgdocnmhomnp"},"ColorZilla")),s("li",null,s(n.a,{to:"https://chrome.google.com/webstore/detail/full-page-screen-capture/fdpohaocaechififmbbbbbknoalclacl"},"Full Page Screen Capture")),s("li",null,s(n.a,{to:"https://chrome.google.com/webstore/detail/glyf/kklidjoiedcocpkddfnknenpkpcdalnp"},"Glyf")),s("li",null,s(n.a,{to:"https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc"},"JSONView")),s("li",null,s(n.a,{to:"https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi"},"React Developer Tools")),s("li",null,s(n.a,{to:"https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm"},"uBlock Origin")),s("li",null,s(n.a,{to:"https://chrome.google.com/webstore/detail/xv-%E2%80%94-xml-viewer/eeocglpgjdpaefaedpblffpeebgmgddk"},"XV \u2014 XML Viewer")))))))))}},W8MJ:function(e,t){function o(e,t){for(var o=0;o<t.length;o++){var a=t[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}e.exports=function(e,t,a){return t&&o(e.prototype,t),a&&o(e,a),e}},Xuae:function(e,t,o){"use strict";var a=o("lwsE"),i=o("a1gu"),n=o("Nsbk"),r=o("PJYZ"),l=o("W8MJ"),s=o("7W2i"),c=o("RIqP");Object.defineProperty(t,"__esModule",{value:!0});var u=o("q1tI"),m=!1;t.default=function(){var e,t=new Set;function o(o){e=o.props.reduceComponentsToState(c(t),o.props),o.props.handleStateChange&&o.props.handleStateChange(e)}return function(c){function u(e){var l;return a(this,u),l=i(this,n(u).call(this,e)),m&&(t.add(r(l)),o(r(l))),l}return s(u,c),l(u,null,[{key:"rewind",value:function(){var o=e;return e=void 0,t.clear(),o}}]),l(u,[{key:"componentDidMount",value:function(){t.add(this),o(this)}},{key:"componentDidUpdate",value:function(){o(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),o(this)}},{key:"render",value:function(){return null}}]),u}(u.Component)}},a1gu:function(e,t,o){var a=o("cDf5"),i=o("PJYZ");e.exports=function(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?i(e):t}},cDf5:function(e,t){function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(t){return"function"===typeof Symbol&&"symbol"===o(Symbol.iterator)?e.exports=a=function(e){return o(e)}:e.exports=a=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":o(e)},a(t)}e.exports=a},lwAK:function(e,t,o){"use strict";var a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var i=a(o("q1tI"));t.AmpStateContext=i.createContext({})},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}}},[["IAli",0,1]]]);