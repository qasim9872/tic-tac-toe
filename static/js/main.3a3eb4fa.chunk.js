(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{27:function(e){e.exports=JSON.parse('{"name":"tic-tac-toe","homepage":"https://qasim9872.github.io/tic-tac-toe","version":"0.1.0","private":true,"scripts":{"start":"react-scripts start","build":"react-scripts build","test":"react-scripts test","eject":"react-scripts eject"},"dependencies":{"@tailwindcss/typography":"^0.4.1","postcss":"^8.3.6","react":"^17.0.1","react-dom":"^17.0.1","react-icons":"^4.2.0","react-scripts":"^4.0.2","styled-components":"5.2.1"},"devDependencies":{"tailwindcss":"^2.0.3","twin.macro":"^2.3.0"},"eslintConfig":{"extends":["react-app","react-app/jest"]},"browserslist":[">0.2%","not dead","not ie <= 11","not op_mini all"],"babelMacros":{"twin":{"preset":"styled-components"}}}')},28:function(e,t,n){"use strict";n.r(t);var o,i,r,a,c=n(2),m=n.n(c),l=n(13),s=n.n(l),d=n(9),p=n(3),g=n(1),h=Object(p.a)(o||(o=Object(d.a)(['*, *::before, *::after {\nbox-sizing: border-box;\n        }\nhtml {\nline-height: 1.5;\n-webkit-text-size-adjust: 100%;\n-moz-tab-size: 4;\ntab-size: 4;\nfont-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n        }\nbody {\nmargin: 0;\nfont-family: inherit;\nline-height: inherit;\n        }\nhr {\nheight: 0;\ncolor: inherit;\nborder-top-width: 1px;\n        }\nabbr[title] {\ntext-decoration: underline dotted;\n        }\nb, strong {\nfont-weight: bolder;\n        }\ncode, kbd, samp, pre {\nfont-family: ui-monospace, SFMono-Regular, Consolas, \'Liberation Mono\', Menlo, monospace;\nfont-size: 1em;\n        }\nsmall {\nfont-size: 80%;\n        }\nsub, sup {\nfont-size: 75%;\nline-height: 0;\nposition: relative;\nvertical-align: baseline;\n        }\nsub {\nbottom: -0.25em;\n        }\nsup {\ntop: -0.5em;\n        }\ntable {\ntext-indent: 0;\nborder-color: inherit;\nborder-collapse: collapse;\n        }\nbutton, input, optgroup, select, textarea {\nfont-family: inherit;\nfont-size: 100%;\nline-height: inherit;\nmargin: 0;\npadding: 0;\ncolor: inherit;\n        }\nbutton, select {\ntext-transform: none;\n        }\nbutton, [type=\'button\'], [type=\'reset\'], [type=\'submit\'] {\n-webkit-appearance: button;\n        }\n::-moz-focus-inner {\nborder-style: none;\npadding: 0;\n        }\n:-moz-focusring {\noutline: 1px dotted ButtonText;\n        }\n:-moz-ui-invalid {\nbox-shadow: none;\n        }\nlegend {\npadding: 0;\n        }\nprogress {\nvertical-align: baseline;\n        }\n::-webkit-inner-spin-button, ::-webkit-outer-spin-button {\nheight: auto;\n        }\n[type=\'search\'] {\n-webkit-appearance: textfield;\noutline-offset: -2px;\n        }\n::-webkit-search-decoration {\n-webkit-appearance: none;\n        }\n::-webkit-file-upload-button {\n-webkit-appearance: button;\nfont: inherit;\n        }\nsummary {\ndisplay: list-item;\n        }\nblockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre {\nmargin: 0;\n        }\nbutton {\nbackground-color: transparent;\nbackground-image: none;\n        }\nbutton:focus:not(/**/) {\noutline: 1px dotted;\n        }\nbutton:focus {\noutline: 5px auto -webkit-focus-ring-color;\n        }\nfieldset {\nmargin: 0;\npadding: 0;\n        }\nol, ul {\nlist-style: none;\nmargin: 0;\npadding: 0;\n        }\n*, ::before, ::after {\nbox-sizing: border-box;\nborder-width: 0;\nborder-style: solid;\nborder-color: #e5e7eb;\n        }\nimg {\nborder-style: solid;\n        }\ntextarea {\nresize: vertical;\n        }\ninput::placeholder, textarea::placeholder {\ncolor: #9ca3af;\n        }\nbutton, [role="button"] {\ncursor: pointer;\n        }\nh1, h2, h3, h4, h5, h6 {\nfont-size: inherit;\nfont-weight: inherit;\n        }\na {\ncolor: inherit;\ntext-decoration: inherit;\n        }\npre, code, kbd, samp {\nfont-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n        }\nimg, svg, video, canvas, audio, iframe, embed, object {\ndisplay: block;\nvertical-align: middle;\n        }\nimg, video {\nmax-width: 100%;\nheight: auto;\n        }\n@keyframes spin {\nto {\ntransform: rotate(360deg);\n        }\n        }\n@keyframes ping {\n75%, 100% {\ntransform: scale(2);\nopacity: 0;\n        }\n        }\n@keyframes pulse {\n50% {\nopacity: .5;\n        }\n        }\n@keyframes bounce {\n0%, 100% {\ntransform: translateY(-25%);\nanimation-timing-function: cubic-bezier(0.8,0,1,1);\n        }\n50% {\ntransform: none;\nanimation-timing-function: cubic-bezier(0,0,0.2,1);\n        }\n        }\n@keyframes move-down {\n0% {\ntransform: translateY(-5rem);\n        }\n100% {\ntransform: translateY(0rem);\n        }\n        }\n* {\n--tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);\n--tw-ring-offset-width: 0px;\n--tw-ring-offset-color: #fff;\n--tw-ring-color: rgba(59, 130, 246, 0.5);\n--tw-ring-offset-shadow: 0 0 #0000;\n--tw-ring-shadow: 0 0 #0000;\n--tw-shadow: 0 0 #0000;\n        }']))),b=Object(p.a)(i||(i=Object(d.a)(["\n  body {\n    -webkit-tap-highlight-color: ",";\n    ","\n    ","\n  }\n"])),"#8b5cf6",{fontFamily:'Poppins, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'},{WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale"}),f=function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(h,{}),Object(g.jsx)(b,{})]})},u=function(e){var t=c.createContext([e,function(){}]);return{Provider:function(n){var o=n.children,i=Object(c.useState)(e);return Object(g.jsx)(t.Provider,{value:i,children:o})},useHook:function(){return Object(c.useContext)(t)}}}({app:{icon:"tick",href:n(27).homepage,name:"Tic Tac Toe",tagline:"Lets play a game of Tic Tac Toe!"},author:{name:"Muhammad Qasim",href:"https://github.com/qasim9872"},socials:[{icon:"email",href:"mailto:qasim9872@gmail.com"},{icon:"github",href:"https://github.com/qasim9872"},{icon:"linkedin",href:"https://www.linkedin.com/in/qasim9872/"}]}),y=u.Provider,x=u.useHook,j=n(19),w=n(4),v=n(7),C=n(11),O=n(17),_={email:Object(p.b)(v.a).withConfig({displayName:"icons__email",componentId:"sc-8g0vlg-0"})({width:"1.25rem",height:"1.25rem","--tw-text-opacity":"1",color:"rgba(107, 114, 128, var(--tw-text-opacity))"}),linkedin:Object(p.b)(v.c).withConfig({displayName:"icons__linkedin",componentId:"sc-8g0vlg-1"})({width:"1.25rem",height:"1.25rem","--tw-text-opacity":"1",color:"rgba(107, 114, 128, var(--tw-text-opacity))"}),github:Object(p.b)(v.b).withConfig({displayName:"icons__github",componentId:"sc-8g0vlg-2"})({width:"1.25rem",height:"1.25rem","--tw-text-opacity":"1",color:"rgba(107, 114, 128, var(--tw-text-opacity))"}),tick:Object(p.b)(C.b).withConfig({displayName:"icons__tick",componentId:"sc-8g0vlg-3"})({width:"2rem",height:"2rem"}),gameTick:Object(p.b)(C.a).withConfig({displayName:"icons__gameTick",componentId:"sc-8g0vlg-4"})({}),gameCross:Object(p.b)(O.a).withConfig({displayName:"icons__gameCross",componentId:"sc-8g0vlg-5"})({})},k=function(e){var t=e.icon,n=e.href,o=_[t];return Object(g.jsx)("a",{href:n,children:Object(g.jsx)(o,{})})},S=p.b.span.withConfig({displayName:"socialcomponent__SocialLinkContainer",componentId:"sc-4fbae-0"})({display:"inline-flex","> :not([hidden]) ~ :not([hidden])":{"--tw-space-x-reverse":0,marginRight:"calc(0.75rem * var(--tw-space-x-reverse))",marginLeft:"calc(0.75rem * calc(1 - var(--tw-space-x-reverse)))"},marginTop:"1rem",justifyContent:"center","@media (min-width: 640px)":{marginLeft:"auto",marginTop:"0px",justifyContent:"flex-start"}}),I=function(){var e=x(),t=Object(w.a)(e,1)[0].socials;return Object(g.jsx)(S,{children:t.map((function(e){return Object(g.jsx)(k,Object(j.a)({},e),e.href)}))})},T=p.b.a.withConfig({displayName:"titlecomponent__AppTitleContainer",componentId:"sc-1we3xt2-0"})({display:"flex",fontFamily:'Rubik, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',fontWeight:"500",alignItems:"center",justifyContent:"center","--tw-text-opacity":"1",color:"rgba(17, 24, 39, var(--tw-text-opacity))","@media (min-width: 768px)":{justifyContent:"flex-start"}}),B=p.b.span.withConfig({displayName:"titlecomponent__AppTitleText",componentId:"sc-1we3xt2-1"})({marginLeft:"0.75rem",fontSize:"1.25rem",lineHeight:"1.75rem"}),N=function(){var e=x(),t=Object(w.a)(e,1)[0].app,n=_[t.icon];return Object(g.jsxs)(T,{href:t.href,children:[Object(g.jsx)(n,{}),Object(g.jsx)(B,{children:t.name})]})},z=p.b.p.withConfig({displayName:"copyrightcomponent__CopyrightContainer",componentId:"sc-8l0gzo-0"})({fontSize:"0.875rem",lineHeight:"1.25rem","--tw-text-opacity":"1",color:"rgba(107, 114, 128, var(--tw-text-opacity))",marginTop:"1rem","@media (min-width: 640px)":{marginLeft:"1rem",paddingLeft:"1rem",borderLeftWidth:"2px","--tw-border-opacity":"1",borderColor:"rgba(229, 231, 235, var(--tw-border-opacity))",paddingTop:"0.5rem",paddingBottom:"0.5rem",marginTop:"0px"}}),W=p.b.a.withConfig({displayName:"copyrightcomponent__CopyrightLink",componentId:"sc-8l0gzo-1"})({"--tw-text-opacity":"1",color:"rgba(75, 85, 99, var(--tw-text-opacity))",marginLeft:"0.25rem"}),L=function(){var e=x(),t=Object(w.a)(e,1)[0].author;return Object(g.jsxs)(z,{children:["\xa9 ",(new Date).getFullYear()," ",Object(g.jsxs)(W,{href:t.href,rel:"noopener noreferrer",target:"_blank",children:["- ",t.name]})]})},R=p.b.footer.withConfig({displayName:"footercomponent__FooterContainer",componentId:"sc-1eis8sl-0"})({"--tw-text-opacity":"1",color:"rgba(75, 85, 99, var(--tw-text-opacity))",fontFamily:'Poppins, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',alignItems:"center"}),H=p.b.div.withConfig({displayName:"footercomponent__FooterContent",componentId:"sc-1eis8sl-1"})({width:"100%",paddingLeft:"1.25rem",paddingRight:"1.25rem",marginLeft:"auto",marginRight:"auto","@media (min-width: 640px)":{maxWidth:"640px",flexDirection:"row"},"@media (min-width: 768px)":{maxWidth:"768px"},"@media (min-width: 1024px)":{maxWidth:"1024px"},"@media (min-width: 1280px)":{maxWidth:"1280px"},"@media (min-width: 1536px)":{maxWidth:"1536px"},paddingTop:"2rem",paddingBottom:"2rem",display:"flex",alignItems:"center",flexDirection:"column"}),A=function(){return Object(g.jsx)(R,{children:Object(g.jsxs)(H,{children:[Object(g.jsx)(N,{}),Object(g.jsx)(L,{}),Object(g.jsx)(I,{})]})})},E=p.b.div.withConfig({displayName:"apptemplate__AppContainer",componentId:"sc-eizmg0-0"})({display:"flex",minHeight:"100vh",minWidth:"100%","--tw-bg-opacity":"1",backgroundColor:"rgba(219, 234, 254, var(--tw-bg-opacity))",justifyContent:"center"}),F=p.b.div.withConfig({displayName:"apptemplate__AppTemplateWrapper",componentId:"sc-eizmg0-1"})({width:"100%","@media (min-width: 640px)":{maxWidth:"640px"},"@media (min-width: 768px)":{maxWidth:"768px"},"@media (min-width: 1024px)":{maxWidth:"1024px"},"@media (min-width: 1280px)":{maxWidth:"1280px"},"@media (min-width: 1536px)":{maxWidth:"1536px"},display:"flex",flexDirection:"column"}),M=p.b.div.withConfig({displayName:"apptemplate__AppContent",componentId:"sc-eizmg0-2"})({display:"flex",flexGrow:"1","> :not([hidden]) ~ :not([hidden])":{"--tw-space-y-reverse":0,marginTop:"calc(1.5rem * calc(1 - var(--tw-space-y-reverse)))",marginBottom:"calc(1.5rem * var(--tw-space-y-reverse))"}}),q=function(e){var t=e.children;return Object(g.jsx)(E,{children:Object(g.jsxs)(F,{children:[Object(g.jsx)(M,{children:t}),Object(g.jsx)(A,{})]})})},D=function(e){var t=e.children,n=e.override;return Object(g.jsx)(U,{$_css:[{display:"flex",flexGrow:"1",justifyContent:"center",alignItems:"center"},n],children:t})},U=Object(p.b)("div").withConfig({displayName:"containercomponent___StyledDiv",componentId:"sc-14dd5qs-0"})(["",""],(function(e){return e.$_css})),G=function(e){var t=e.children,n=e.isLoading,o=e.onClick,i=e.override;return Object(g.jsx)(P,{children:Object(g.jsx)($,{onClick:o,disabled:n,$_css:[n?{"--tw-bg-opacity":"1",backgroundColor:"rgba(156, 163, 175, var(--tw-bg-opacity))"}:{"--tw-bg-opacity":"1",backgroundColor:"rgba(99, 102, 241, var(--tw-bg-opacity))",":hover":{"--tw-bg-opacity":"1",backgroundColor:"rgba(79, 70, 229, var(--tw-bg-opacity))"}},i,{display:"flex",marginLeft:"auto",marginRight:"auto","--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))",borderWidth:"0px",paddingTop:"0.25rem",paddingBottom:"0.25rem",paddingLeft:"2rem",paddingRight:"2rem",":focus":{outline:"2px solid transparent",outlineOffset:"2px"},borderRadius:"0.25rem",fontSize:"1.125rem",lineHeight:"1.75rem"}],children:t})})},P=Object(p.b)("div").withConfig({displayName:"buttoncomponent___StyledDiv",componentId:"sc-151bw09-0"})({paddingLeft:"0.5rem",paddingRight:"0.5rem",display:"flex",flexGrow:"1",alignItems:"flex-end",justifyContent:"center"}),$=Object(p.b)("button").withConfig({displayName:"buttoncomponent___StyledButton",componentId:"sc-151bw09-1"})(["",""],(function(e){return e.$_css})),Y=p.b.div.withConfig({displayName:"bannercomponent__BannerContainer",componentId:"sc-1irj9el-0"})({display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",padding:"2rem"}),J=p.b.h1.withConfig({displayName:"bannercomponent__BannerText",componentId:"sc-1irj9el-1"})({fontSize:"2.25rem",lineHeight:"2.5rem",color:"#374151",maxWidth:"65ch",p:{marginTop:"1.25em",marginBottom:"1.25em"},a:{color:"#111827",textDecoration:"underline",fontWeight:"500"},li:{marginTop:"0.5em",marginBottom:"0.5em"},ul:{marginTop:"1.25em",marginBottom:"1.25em"},ol:{marginTop:"1.25em",marginBottom:"1.25em"},h4:{color:"#111827",fontWeight:"600",marginTop:"1.5em",marginBottom:"0.5em",lineHeight:"1.5"},h3:{color:"#111827",fontWeight:"600",fontSize:"1.25em",marginTop:"1.6em",marginBottom:"0.6em",lineHeight:"1.6"},h2:{color:"#111827",fontWeight:"700",fontSize:"1.5em",marginTop:"2em",marginBottom:"1em",lineHeight:"1.3333333"},h1:{color:"#111827",fontWeight:"800",fontSize:"2.25em",marginTop:"0",marginBottom:"0.8888889em",lineHeight:"1.1111111"},hr:{borderColor:"#e5e7eb",borderTopWidth:"1px",marginTop:"3em",marginBottom:"3em"},img:{marginTop:"2em",marginBottom:"2em"},pre:{color:"#e5e7eb",backgroundColor:"#1f2937",overflowX:"auto",fontSize:"0.875em",lineHeight:"1.7142857",marginTop:"1.7142857em",marginBottom:"1.7142857em",borderRadius:"0.375rem",paddingTop:"0.8571429em",paddingRight:"1.1428571em",paddingBottom:"0.8571429em",paddingLeft:"1.1428571em"},code:{color:"#111827",fontWeight:"600",fontSize:"0.875em"},video:{marginTop:"2em",marginBottom:"2em"},thead:{color:"#111827",fontWeight:"600",borderBottomWidth:"1px",borderBottomColor:"#d1d5db"},table:{width:"100%",tableLayout:"auto",textAlign:"left",marginTop:"2em",marginBottom:"2em",fontSize:"0.875em",lineHeight:"1.7142857"},"h4 + *":{marginTop:"0"},"h3 + *":{marginTop:"0"},"h2 + *":{marginTop:"0"},"hr + *":{marginTop:"0"},figure:{marginTop:"2em",marginBottom:"2em"},"a code":{color:"#111827"},strong:{color:"#111827",fontWeight:"600"},"h3 code":{fontSize:"0.9em"},"h2 code":{fontSize:"0.875em"},"ul > li":{position:"relative",paddingLeft:"1.75em"},"ol > li":{position:"relative",paddingLeft:"1.75em"},"tbody td":{verticalAlign:"top",paddingTop:"0.5714286em",paddingRight:"0.5714286em",paddingBottom:"0.5714286em",paddingLeft:"0.5714286em"},"tbody tr":{borderBottomWidth:"1px",borderBottomColor:"#e5e7eb"},"thead th":{verticalAlign:"bottom",paddingRight:"0.5714286em",paddingBottom:"0.5714286em",paddingLeft:"0.5714286em"},"pre code":{backgroundColor:"transparent",borderWidth:"0",borderRadius:"0",padding:"0",fontWeight:"400",color:"inherit",fontSize:"inherit",fontFamily:"inherit",lineHeight:"inherit"},"figure > *":{marginTop:"0",marginBottom:"0"},blockquote:{fontWeight:"500",fontStyle:"italic",color:"#111827",borderLeftWidth:"0.25rem",borderLeftColor:"#e5e7eb",quotes:'"\\201C""\\201D""\\2018""\\2019"',marginTop:"1.6em",marginBottom:"1.6em",paddingLeft:"1em"},"> ul > li p":{marginTop:"0.75em",marginBottom:"0.75em"},"code::after":{content:'"`"'},"code::before":{content:'"`"'},'ol[type="1"]':{"--list-counter-style":"decimal"},'ol[type="i"]':{"--list-counter-style":"lower-roman"},'ol[type="I"]':{"--list-counter-style":"upper-roman"},'ol[type="a"]':{"--list-counter-style":"lower-alpha"},'ol[type="A"]':{"--list-counter-style":"upper-alpha"},"> :last-child":{marginBottom:"0"},"> :first-child":{marginTop:"0"},'ol[type="i" s]':{"--list-counter-style":"lower-roman"},'ol[type="I" s]':{"--list-counter-style":"upper-roman"},'ol[type="a" s]':{"--list-counter-style":"lower-alpha"},'ol[type="A" s]':{"--list-counter-style":"upper-alpha"},"pre code::after":{content:"none"},"ul > li::before":{content:'""',position:"absolute",backgroundColor:"#d1d5db",borderRadius:"50%",width:"0.375em",height:"0.375em",top:"calc(0.875em - 0.1875em)",left:"0.25em"},"ol > li::before":{content:'counter(list-item, var(--list-counter-style, decimal)) "."',position:"absolute",fontWeight:"400",color:"#6b7280",left:"0"},'[class~="lead"]':{color:"#4b5563",fontSize:"1.25em",lineHeight:"1.6",marginTop:"1.2em",marginBottom:"1.2em"},"pre code::before":{content:"none"},"figure figcaption":{color:"#6b7280",fontSize:"0.875em",lineHeight:"1.4285714",marginTop:"0.8571429em"},"tbody td:last-child":{paddingRight:"0"},"thead th:last-child":{paddingRight:"0"},"tbody tr:last-child":{borderBottomWidth:"0"},"tbody td:first-child":{paddingLeft:"0"},"thead th:first-child":{paddingLeft:"0"},"> ol > li > *:last-child":{marginBottom:"1.25em"},"> ul > li > *:last-child":{marginBottom:"1.25em"},"> ol > li > *:first-child":{marginTop:"1.25em"},"> ul > li > *:first-child":{marginTop:"1.25em"},"blockquote p:last-of-type::after":{content:"close-quote"},"blockquote p:first-of-type::before":{content:"open-quote"},"ul ul":{marginTop:"0.75em",marginBottom:"0.75em"},"ul ol":{marginTop:"0.75em",marginBottom:"0.75em"},"ol ul":{marginTop:"0.75em",marginBottom:"0.75em"},"ol ol":{marginTop:"0.75em",marginBottom:"0.75em"},fontWeight:"700",fontFamily:'Rubik, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'}),Q=function(){var e=x(),t=Object(w.a)(e,1)[0].app.tagline;return Object(g.jsx)(Y,{children:Object(g.jsx)(J,{children:t})})},X=p.b.div.withConfig({displayName:"squarecomponent__SquareContainer",componentId:"sc-1tllokd-0"})({display:"flex",width:"9rem",height:"9rem",alignItems:"center",justifyContent:"center",borderWidth:"2px","--tw-border-opacity":"1",borderColor:"rgba(0, 0, 0, var(--tw-border-opacity))",cursor:"pointer",":hover":{"--tw-bg-opacity":"1",backgroundColor:"rgba(156, 163, 175, var(--tw-bg-opacity))"}}),K=function(e){var t=e.content,n=void 0===t?"Square":t,o=e.value,i=e.onClick;return Object(g.jsx)(X,{onClick:function(){return i(o)},children:n})},V=p.b.div.withConfig({displayName:"gridcomponent__GridContainer",componentId:"sc-1wvhst3-0"})({display:"flex",flexDirection:"column",borderWidth:"2px","--tw-border-opacity":"1",borderColor:"rgba(0, 0, 0, var(--tw-border-opacity))"}),Z=p.b.div.withConfig({displayName:"gridcomponent__GridRowContainer",componentId:"sc-1wvhst3-1"})({display:"flex",flexDirection:"row",borderWidth:"2px","--tw-border-opacity":"1",borderColor:"rgba(0, 0, 0, var(--tw-border-opacity))"}),ee=function(e){var t=e.y,n=e.onClick,o=e.row,i=e.Shape,r=void 0===i?K:i;return Object(g.jsx)(Z,{children:o.map((function(e,o){return Object(g.jsx)(r,{content:e,onClick:n,value:{x:o,y:t}},"x-".concat(o,"-").concat(e))}))})},te=function(e){var t=e.grid,n=e.onClick,o=e.Shape,i=void 0===o?K:o;return Object(g.jsx)(V,{children:t.map((function(e,t){return Object(g.jsx)(ee,{y:t,row:e,Shape:i,onClick:n},"y-".concat(t))}))})},ne=function(){var e=Object(c.useState)([]),t=Object(w.a)(e,2),n=t[0],o=t[1],i=function(){o(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3;return Array(e).fill(!0).map((function(t){return Array(e).fill(0)}))}(3))};return Object(c.useEffect)((function(){i()}),[]),{grid:n,reset:function(){return i()},mark:function(e,t,n){o((function(o){return o.map((function(o,i){return o.map((function(o,r){return r===e&&i===t?n:o}))}))}))},getMark:function(e,t){return n[t][e]},isFilled:function(e,t){return!!n[t][e]}}},oe=function(){var e=ne(),t=e.reset,n=e.grid,o=e.mark,i=e.getMark,r=function(){var e=Object(c.useState)(),t=Object(w.a)(e,2),n=t[0],o=t[1],i=Object(c.useState)(),r=Object(w.a)(i,2),a=r[0],m=r[1];return Object(c.useEffect)((function(){o(0)}),[]),Object(c.useEffect)((function(){return m(n%2+1)}),[n]),{turn:n,next:function(){return o((function(e){return e+1}))},player:a,reset:function(){return o(0)}}}(),a=r.reset,m=r.next,l=r.player,s={1:Object(g.jsx)(ie,{}),2:Object(g.jsx)(re,{})},d={1:Object(g.jsx)(ae,{}),2:Object(g.jsx)(ce,{})};return Object(g.jsx)(q,{children:Object(g.jsxs)(D,{override:{flexDirection:"column"},children:[Object(g.jsx)(Q,{}),Object(g.jsx)(te,{grid:n,onClick:function(e){var t=e.x,n=e.y,r=i(t,n);console.log("pressed (".concat(t,",").concat(n,"). "),{current:r}),r?alert("invalid move. The box is already filled"):(o(t,n,s[l]),m())}}),Object(g.jsxs)(me,{children:[[1,2].map((function(e){return Object(g.jsxs)(le,{$_css:[{display:"flex",alignItems:"center",fontSize:"1.25rem",lineHeight:"1.75rem"},l===e&&{"--tw-text-opacity":"1",color:"rgba(16, 185, 129, var(--tw-text-opacity))"}],children:["Player ",e," ","=>"," ",d[e]]})})),Object(g.jsx)(G,{onClick:function(){t(),a()},children:"Reset"})]})]})})},ie=Object(p.b)(_.gameTick).withConfig({displayName:"homepage___StyledIconsGameTick",componentId:"sc-41r8vv-0"})({width:"3rem",height:"3rem"}),re=Object(p.b)(_.gameCross).withConfig({displayName:"homepage___StyledIconsGameCross",componentId:"sc-41r8vv-1"})({width:"3rem",height:"3rem"}),ae=Object(p.b)(_.gameTick).withConfig({displayName:"homepage___StyledIconsGameTick2",componentId:"sc-41r8vv-2"})({width:"2rem",height:"2rem"}),ce=Object(p.b)(_.gameCross).withConfig({displayName:"homepage___StyledIconsGameCross2",componentId:"sc-41r8vv-3"})({width:"2rem",height:"2rem"}),me=Object(p.b)("div").withConfig({displayName:"homepage___StyledDiv",componentId:"sc-41r8vv-4"})({display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",fontSize:"1.25rem",lineHeight:"1.75rem",paddingTop:"2rem"}),le=Object(p.b)("div").withConfig({displayName:"homepage___StyledDiv2",componentId:"sc-41r8vv-5"})(["",""],(function(e){return e.$_css})),se=n(18),de=(r=function(){return Object(g.jsx)(oe,{})},a=[y],function(){var e,t=Object(g.jsx)(r,{}),n=Object(se.a)(a);try{for(n.s();!(e=n.n()).done;){var o=e.value;t=Object(g.jsx)(o,{children:t})}}catch(i){n.e(i)}finally{n.f()}return t});s.a.render(Object(g.jsxs)(m.a.StrictMode,{children:[Object(g.jsx)(f,{}),Object(g.jsx)(de,{})]}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.3a3eb4fa.chunk.js.map