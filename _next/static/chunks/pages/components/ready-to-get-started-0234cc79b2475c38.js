(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[125],{133:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/ready-to-get-started",function(){return c(6133)}])},1210:function(b,a){"use strict";function c(a,b,c,d){return!1}Object.defineProperty(a,"__esModule",{value:!0}),a.getDomainLocale=c,("function"==typeof a.default||"object"==typeof a.default&&null!==a.default)&& void 0===a.default.__esModule&&(Object.defineProperty(a.default,"__esModule",{value:!0}),Object.assign(a.default,a),b.exports=a.default)},8418:function(e,a,b){"use strict";var c,g=b(4941).Z;b(5753).default,Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var d=(c=b(7294),c&&c.__esModule?c:{default:c}),h=b(6273),i=b(2725),j=b(3462),k=b(1018),l=b(7190),m=b(1210),n=b(8684),o=void 0!==d.default.useTransition,p={};function q(a,c,d,b){if(a&&h.isLocalURL(c)){a.prefetch(c,d,b).catch(function(a){});var e=b&& void 0!==b.locale?b.locale:a&&a.locale;p[c+"%"+d+(e?"%"+e:"")]=!0}}var f=d.default.forwardRef(function(a,A){var c,e,B=a.href,C=a.as,D=a.children,E=a.prefetch,F=a.passHref,P=a.replace,Q=a.shallow,R=a.scroll,s=a.locale,S=a.onClick,T=a.onMouseEnter,w=a.legacyBehavior,f=void 0===w?!0!==Boolean(!1):w,G=function(b,f){if(null==b)return{};var c,a,d={},e=Object.keys(b);for(a=0;a<e.length;a++)f.indexOf(c=e[a])>=0||(d[c]=b[c]);return d}(a,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","legacyBehavior"]);c=D,f&&("string"==typeof c||"number"==typeof c)&&(c=d.default.createElement("a",null,c));var H=!1!==E,I=g(o?d.default.useTransition():[],2),U=I[1],b=d.default.useContext(j.RouterContext),x=d.default.useContext(k.AppRouterContext);x&&(b=x);var y=d.default.useMemo(function(){var a=g(h.resolveHref(b,B,!0),2),c=a[0],d=a[1];return{href:c,as:C?h.resolveHref(b,C):d||c}},[b,B,C]),t=y.href,r=y.as,V=d.default.useRef(t),W=d.default.useRef(r);f&&(e=d.default.Children.only(c));var J=f?e&&"object"==typeof e&&e.ref:A,u=g(l.useIntersection({rootMargin:"200px"}),3),K=u[0],L=u[1],M=u[2],N=d.default.useCallback(function(a){(W.current!==r||V.current!==t)&&(M(),W.current=r,V.current=t),K(a),J&&("function"==typeof J?J(a):"object"==typeof J&&(J.current=a))},[r,J,t,M,K]);d.default.useEffect(function(){var c=L&&H&&h.isLocalURL(t),a=void 0!==s?s:b&&b.locale,d=p[t+"%"+r+(a?"%"+a:"")];c&&!d&&q(b,t,r,{locale:a})},[r,t,L,s,H,b]);var v={ref:N,onClick:function(a){f||"function"!=typeof S||S(a),f&&e.props&&"function"==typeof e.props.onClick&&e.props.onClick(a),a.defaultPrevented||function(a,e,d,f,g,i,j,k,b){if("A"!==a.currentTarget.nodeName.toUpperCase()||(!(m=(l=a).currentTarget.target)||"_self"===m)&&!l.metaKey&&!l.ctrlKey&&!l.shiftKey&&!l.altKey&&(!l.nativeEvent||2!==l.nativeEvent.which)&&h.isLocalURL(d)){a.preventDefault();var l,m,c=function(){e[g?"replace":"push"](d,f,{shallow:i,locale:k,scroll:j})};b?b(c):c()}}(a,b,t,r,P,Q,R,s,x?U:void 0)},onMouseEnter:function(a){f||"function"!=typeof T||T(a),f&&e.props&&"function"==typeof e.props.onMouseEnter&&e.props.onMouseEnter(a),h.isLocalURL(t)&&q(b,t,r,{priority:!0})}};if(!f||F||"a"===e.type&&!("href"in e.props)){var z=void 0!==s?s:b&&b.locale,O=b&&b.isLocaleDomain&&m.getDomainLocale(r,z,b.locales,b.domainLocales);v.href=O||n.addBasePath(i.addLocale(r,z,b&&b.defaultLocale))}return f?d.default.cloneElement(e,v):d.default.createElement("a",Object.assign({},G,v),c)});a.default=f,("function"==typeof a.default||"object"==typeof a.default&&null!==a.default)&& void 0===a.default.__esModule&&(Object.defineProperty(a.default,"__esModule",{value:!0}),Object.assign(a.default,a),e.exports=a.default)},7190:function(c,a,b){"use strict";var d=b(4941).Z;Object.defineProperty(a,"__esModule",{value:!0}),a.useIntersection=function(a){var j=a.rootRef,k=a.rootMargin,l=a.disabled||!g,p=e.useRef(),b=d(e.useState(!1),2),c=b[0],q=b[1],i=d(e.useState(null),2),m=i[0],n=i[1];e.useEffect(function(){if(g){if(p.current&&(p.current(),p.current=void 0),!l&&!c)return m&&m.tagName&&(p.current=h(m,function(a){return a&&q(a)},{root:null==j?void 0:j.current,rootMargin:k})),function(){null==p.current||p.current(),p.current=void 0}}else if(!c){var a=f.requestIdleCallback(function(){return q(!0)});return function(){return f.cancelIdleCallback(a)}}},[m,l,k,j,c]);var o=e.useCallback(function(){q(!1)},[]);return[n,c,o]};var e=b(7294),f=b(9311),g="function"==typeof IntersectionObserver;function h(b,c,d){var a=k(d),g=a.id,e=a.observer,f=a.elements;return f.set(b,c),e.observe(b),function(){if(f.delete(b),e.unobserve(b),0===f.size){e.disconnect(),i.delete(g);var a=j.findIndex(function(a){return a.root===g.root&&a.margin===g.margin});a> -1&&j.splice(a,1)}}}var i=new Map,j=[];function k(b){var a,c={root:b.root||null,margin:b.rootMargin||""},d=j.find(function(a){return a.root===c.root&&a.margin===c.margin});if(d&&(a=i.get(d)))return a;var e=new Map,f=new IntersectionObserver(function(a){a.forEach(function(a){var b=e.get(a.target),c=a.isIntersecting||a.intersectionRatio>0;b&&c&&b(c)})},b);return a={id:c,observer:f,elements:e},j.push(c),i.set(c,a),a}("function"==typeof a.default||"object"==typeof a.default&&null!==a.default)&& void 0===a.default.__esModule&&(Object.defineProperty(a.default,"__esModule",{value:!0}),Object.assign(a.default,a),c.exports=a.default)},1018:function(h,a,d){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.FullAppTreeContext=a.AppTreeContext=a.AppRouterContext=void 0;var b,c=(b=d(7294),b&&b.__esModule?b:{default:b}),e=c.default.createContext(null);a.AppRouterContext=e;var f=c.default.createContext(null);a.AppTreeContext=f;var g=c.default.createContext(null);a.FullAppTreeContext=g},6133:function(d,b,a){"use strict";a.r(b);var e=a(5893),c=a(1664),f=a.n(c);b.default=function(){return(0,e.jsxs)("div",{className:"grid place-items-center text-white mt-16 mb-40 md:mb-64 px-12 md:px-0",children:[(0,e.jsx)("h1",{className:"text-4xl mb-10",children:"Ready to get started?"}),(0,e.jsxs)("span",{className:"max-w-md mb-10 text-justify md:text-start",children:["Explore Bitswipe Payments, or create an account instantly and start accepting crypto payments. You can also contact us to design a custom package for your business or ask any questions if needed.\xa0",(0,e.jsx)("br",{}),(0,e.jsx)("span",{"data-text":"We're ..,",className:"text-lg md:text-xl relative overflow-hidden before:content-[attr(data-text)attr(data-text)] before:underline before:text-[1.35rem] md:before:text-2xl before:underline-offset-2 whitespace-nowrap before:decoration-wavy before:decoration-dark before:absolute before:text-transparent",children:"We're here for you!"})]}),(0,e.jsxs)("div",{className:"flex flex-row items-center space-x-5",children:[(0,e.jsx)("button",{className:"bg-white text-black px-6 py-1 rounded-full font-semibold hover:scale-105 transition-transform duration-300 ease-in-out group",children:(0,e.jsx)("span",{className:"group-hover:drop-shadow-[0_0_0.5px_rgba(0,0,0,0.5)] text-sm",children:"Start now \uD83E\uDC2A"})}),(0,e.jsx)(f(),{href:"/",children:(0,e.jsx)("a",{className:"border-b-2 border-b-transparent hover:border-b-light transition-colors duration-300 ease-in-out",children:"Contact us"})})]})]})}},1664:function(a,c,b){a.exports=b(8418)}},function(a){a.O(0,[774,888,179],function(){var b;return a(a.s=133)}),_N_E=a.O()}])