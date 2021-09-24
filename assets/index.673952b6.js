var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,f=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r,s=(e,t)=>{for(var a in t||(t={}))o.call(t,a)&&f(e,a,t[a]);if(r)for(var a of r(t))n.call(t,a)&&f(e,a,t[a]);return e},d=(e,r)=>t(e,a(r));"undefined"!=typeof require&&require;import"https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const a of e)if("childList"===a.type)for(const e of a.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const l=e=>{switch(e){case"transparent":return"#00000000";case"current":return"currentColor";case"black":return"#000";case"white":return"#FFF";default:return t=>({slate:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a"},gray:{50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827"},zinc:{50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b"},neutral:{50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717"},stone:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d"},orange:{50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c",700:"#c2410c",800:"#9a3412",900:"#7c2d12"},amber:{50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f"},yellow:{50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04",700:"#a16207",800:"#854d0e",900:"#713f12"},lime:{50:"#f7fee7",100:"#ecfccb",200:"#d9f99d",300:"#bef264",400:"#a3e635",500:"#84cc16",600:"#65a30d",700:"#4d7c0f",800:"#3f6212",900:"#365314"},green:{50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a",700:"#15803d",800:"#166534",900:"#14532d"},emerald:{50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b"},teal:{50:"#f0fdfa",100:"#ccfbf1",200:"#99f6e4",300:"#5eead4",400:"#2dd4bf",500:"#14b8a6",600:"#0d9488",700:"#0f766e",800:"#115e59",900:"#134e4a"},cyan:{50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63"},sky:{50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e"},blue:{50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a"},indigo:{50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81"},violet:{50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95"},purple:{50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87"},fuchsia:{50:"#fdf4ff",100:"#fae8ff",200:"#f5d0fe",300:"#f0abfc",400:"#e879f9",500:"#d946ef",600:"#c026d3",700:"#a21caf",800:"#86198f",900:"#701a75"},pink:{50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843"},rose:{50:"#fff1f2",100:"#ffe4e6",200:"#fecdd3",300:"#fda4af",400:"#fb7185",500:"#f43f5e",600:"#e11d48",700:"#be123c",800:"#9f1239",900:"#881337"}}[e][t])}};let c=["contain","cover","auto"];const i=e=>{const t={size:e=>({backgroundSize:`${e}`}),opacity:(e,t,a)=>({backgroundColor:`${e}-${t}-{opacity}`}),default:t=>({backgroundColor:l(e)(t)})};switch(!0){case c.includes(e):return{backgroundSize:e};default:return t[e]||t.default}};function p(e){switch(!0){case" "===e:return"whitespace";case""===e:return"empty";case"["===e:return"openSqrtBracket";case"]"===e:return"closeSqrtBracket";case"("===e:return"openCirBracket";case")"===e:return"closeCirBracket";case"-"===e:return"dash";case 0===e.search(/[0-9]/g):return"num";default:return"char"}}const g=(e,t)=>{const a=e=>({x:e.x||0,y:e.y||0,blur:e.blur||0,spread:e.spread||0,color:e.color||"#FFF"});let r=function(e){let t=e.length,a=0;return{next:function(){let r,o=e[a];return a<t-1?(r=d(s({},o),{isEnd:!1}),a+=1,r):d(s({},o),{isEnd:!0})}}}(t);const o={x:o=>{let n=0;for(;;){let f=r.next();if(0!==f[e]){t=[...t,a({x:o})];break}if(t[n][e]=o,n++,f.isEnd)break}return t},y:o=>{for(;;){if(0===r.next()[e]){t[0][e]=o;break}t=[...t,a({y:o})];break}return t},blur:o=>{for(;;){if(0===r.next()[e]){t[0][e]=o;break}t=[...t,a({blur:o})];break}return t},spread:o=>{for(;;){if(0===r.next()[e]){t[0][e]=o;break}t=[...t,a({spread:o})];break}return t},cirBr:e=>0===t.length?{boxShadow:e}:{boxShadow:e+` ${t}`},default:o=>{for(;;){if("#FFF"===r.next().color){t[0].color=l(e)(o);break}t=[...t,a({color:l(e)(o)})];break}return t}};return o[e]||o.default},u=e=>({bounce:{transform:["translate3d(0px,0px,0px)","translate3d(0px,0px,0px)","translate3d(0,-30px,0)","translate3d(0,-30px,0)","translate3d(0px,0px,0px)","translate3d(0,-15px,0)","translate3d(0px,0px,0px)","translate3d(0,-15px,0)","translate3d(0px,0px,0px)"],offset:["0","0.2","0.4","0.43","0.53","0.7","0.8","0.9","1"],easing:["cubic-bezier(0.215, 0.610, 0.355, 1.000)"]},bounceIn:{transform:["scale3d(.3, .3, .3)","scale3d(1.1, 1.1, 1.1)","scale3d(.9, .9, .9)","scale3d(1.03, 1.03, 1.03)","scale3d(.97, .97, .97)","scale3d(1, 1, 1)"],opacity:["0","1","1"],offset:["0","0.2","0.4","0.6","0.8","1"],easing:["cubic-bezier(0.215, 0.610, 0.355, 1.000)"]},bounceOut:{transform:["none","scale3d(.9, .9, .9)","scale3d(1.1, 1.1, 1.1)","scale3d(1.1, 1.1, 1.1)","scale3d(.3, .3, .3)"],opacity:["1","1","1","1","0"],offset:["0","0.2","0.5","0.55","1"]},bounceInDown:{transform:["translate3d(0, -3000px, 0)","translate3d(0, 25px, 0)","translate3d(0, -100px, 0)","translate3d(0, 5px, 0)","none"],opacity:["0","1","1"],offset:["0","0.6","0.75","0.9","1"],easing:["cubic-bezier(0.215, 0.610, 0.355, 1.000)"]},bounceOutDown:{transform:["none","translate3d(0, 50px, 0)","translate3d(0, -20px, 0)","translate3d(0, -20px, 0)","translate3d(0, 2000px, 0)"],opacity:["1","1","1","1","0"],offset:["0","0.2","0.4","0.45","1"]},bounceInUp:{transform:["translate3d(0, 3000px, 0)","translate3d(0, -25px, 0)","translate3d(0, 100px, 0)","translate3d(0, -5px, 0)","translate3d(0, 0, 0)"],opacity:["0","1","1"],offset:["0","0.6","0.75","0.9","1"],easing:["cubic-bezier(0.215, 0.610, 0.355, 1.000)"]},bounceOutUp:{transform:["none","translate3d(0, 50px, 0)","translate3d(0, 20px, 0)","translate3d(0, 20px, 0)","translate3d(0, -2000px, 0)"],opacity:["1","1","1","1","0"],offset:["0","0.2","0.4","0.45","1"]},bounceInLeft:{transform:["translate3d(-3000px, 0, 0)","translate3d(25px, 0, 0)","translate3d(-100px, 0, 0)","translate3d(5px, 0, 0)","none"],opacity:["0","1","1"],offset:["0","0.6","0.75","0.9","1"],easing:["cubic-bezier(0.215, 0.610, 0.355, 1.000)"]},bounceOutLeft:{transform:["none","translate3d(100px, 0, 0)","translate3d(-20px, 0, 0)","translate3d(-20px, 0, 0)","translate3d(-2000px, 0, 0)"],opacity:["1","1","1","1","0"],offset:["0","0.2","0.4","0.45","1"]},bounceInRight:{transform:["translate3d(3000px, 0, 0)","translate3d(-25px, 0, 0)","translate3d(100px, 0, 0)","translate3d(-5px, 0, 0)","none"],opacity:["0","1","1"],offset:["0","0.6","0.75","0.9","1"],easing:["cubic-bezier(0.215, 0.610, 0.355, 1.000)"]},bounceOutRight:{transform:["none","translate3d(100px, 0, 0)","translate3d(-20px, 0, 0)","translate3d(-20px, 0, 0)","translate3d(2000px, 0, 0)"],opacity:["1","1","1","1","0"],offset:["0","0.2","0.4","0.45","1"]},flip:{transform:["perspective(400px) rotate3d(0, 1, 0, -360deg)","perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)","perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg)","perspective(400px) scale3d(.95, .95, .95)","perspective(400px)"],offset:["0","0.4","0.5","0.8","1"],easing:["ease-in"]},flipInX:{transform:["perspective(400px) rotate3d(1, 0, 0, 90deg)","perspective(400px) rotate3d(1, 0, 0, -20deg)","perspective(400px) rotate3d(1, 0, 0, 10deg)","perspective(400px) rotate3d(1, 0, 0, -5deg)","perspective(400px)"],opacity:["0","1","1","1"],offset:["0","0.4","0.6","0.8","1"],easing:["ease-in"]},flipOutX:{transform:["perspective(400px)","perspective(400px) rotate3d(1, 0, 0, -20deg)","perspective(400px) rotate3d(1, 0, 0, 90deg)"],opacity:["1","1","0"],offset:["0","0.3","1"]},flipInY:{transform:["perspective(400px) rotate3d(0, 1, 0, 90deg)","perspective(400px) rotate3d(0, 1, 0, -20deg)","perspective(400px) rotate3d(0, 1, 0, 10deg)","perspective(400px) rotate3d(0, 1, 0, -5deg)","perspective(400px)"],opacity:["0","1","1","1"],offset:["0","0.4","0.6","0.8","1"],easing:["ease-in"]},flipOutY:{transform:["perspective(400px)","perspective(400px) rotate3d(0, 1, 0, -20deg)","perspective(400px) rotate3d(0, 1, 0, 90deg)"],opacity:["1","1","0"],offset:["0","0.3","1"]},flash:{opacity:["1","0","1","0","1"],offset:["0","0.25","0.5","0.75","1"]},pulse:{transform:["scale3d(1, 1, 1)","scale3d(1.05, 1.05, 1.05)","scale3d(1, 1, 1)"],offset:["0","0.5","1"]},rubberBand:{transform:["scale3d(1, 1, 1)","scale3d(1.25, 0.75, 1)","scale3d(0.75, 1.25, 1)","scale3d(1.15, 0.85, 1)","scale3d(.95, 1.05, 1)","scale3d(1.05, .95, 1)","scale3d(1, 1, 1)"],offset:["0","0.3","0.4","0.5","0.65","0.75","1"]},lightSpeedInRight:{transform:["translate3d(100%, 0, 0) skewX(-30deg)","skewX(20deg)","skewX(-5deg)","none"],opacity:["0","1","1","1 "],offset:["0","0.6","0.8","1"]},lightSpeedOutRight:{transform:["none","translate3d(100%, 0, 0) skewX(30deg)"],opacity:["1 ","0"],offset:["0","1"]},lightSpeedInLeft:{transform:["translate3d(-100%, 0, 0) skewX(-30deg)","skewX(20deg)","skewX(-5deg)","none"],opacity:["0","1","1","1 "],offset:["0","0.6","0.8","1"]},lightSpeedOutLeft:{transform:["none","translate3d(-100%, 0, 0) skewX(30deg)"],opacity:["1 ","0"],offset:["0","1"]},shake:{transform:["translate3d(0, 0, 0)","translate3d(-10px, 0, 0)","translate3d(10px, 0, 0)","translate3d(-10px, 0, 0)","translate3d(10px, 0, 0)","translate3d(-10px, 0, 0)","translate3d(10px, 0, 0)","translate3d(-10px, 0, 0)","translate3d(10px, 0, 0)","translate3d(-10px, 0, 0)","translate3d(0, 0, 0)"],offset:["0","0.1","0.2","0.3","0.4","0.5","0.6","0.7","0.8","0.9","1"]},swing:{transform:["translate(0%)","rotate3d(0, 0, 1, 15deg)","rotate3d(0, 0, 1, -10deg)","rotate3d(0, 0, 1, 5deg)","rotate3d(0, 0, 1, -5deg)","rotate3d(0, 0, 1, 0deg)"],offset:["0","0.2","0.4","0.6","0.8","1"]},tada:{transform:["scale3d(1, 1, 1)","scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg)","scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg)","scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)","scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)","scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)","scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)","scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)","scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)","scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)","scale3d(1, 1, 1)"],offset:["0","0.1","0.2","0.3","0.4","0.5","0.6","0.7","0.8","0.9","1"]},wobble:{transform:["translate(0%)","translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)","translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)","translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)","translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)","translateX(0%)"],offset:["0","0.15","0.45","0.6","0.75","1"]},fadeIn:{opacity:["0","1"],offset:["0","1"]},fadeOut:{opacity:["1","0"],offset:["0","1"]},fadeInDown:{opacity:["0","1"],transform:["translate3d(0, -100%, 0)","none"],offset:["0","1"]},fadeOutDown:{opacity:["1","0"],transform:["none","translate3d(0, 100%, 0)"],offset:["0","1"]},fadeOutUp:{opacity:["1","0"],transform:["none","translate3d(0, -100%, 0)"],offset:["0","1"]},fadeOutUpBig:{opacity:["1","0"],transform:["none","translate3d(0, -2000px, 0)"],offset:["0","1"]},fadeInUp:{opacity:["0","1"],transform:["translate3d(0, 100%, 0)","none"],offset:["0","1"]},fadeInDownBig:{opacity:["0","1"],transform:["translate3d(0, -2000px, 0)","none"],offset:["0","1"]},fadeOutDownBig:{opacity:["1","0"],transform:["none","translate3d(0, 2000px, 0)"],offset:["0","1"]},fadeInUpBig:{opacity:["0","1"],transform:["translate3d(0, 2000px, 0)","none"],offset:["0","1"]},fadeInRightBig:{opacity:["0","1"],transform:["translate3d(2000px, 0, 0)","none"],offset:["0","1"]},fadeOutLeftBig:{opacity:["1","0"],transform:["none","translate3d(-2000px, 0, 0)"],offset:["0","1"]},fadeInLeft:{opacity:["0","1"],transform:["translate3d(-100%, 0, 0)","none"],offset:["0","1"]},fadeInLeftBig:{opacity:["0","1"],transform:["translate3d(-2000px, 0, 0)","none"],offset:["0","1"]},fadeInRight:{opacity:["0","1"],transform:["translate3d(100%, 0, 0)","none"],offset:["0","1"]},fadeOutLeft:{opacity:["1","0"],transform:["none","translate3d(-100%, 0, 0)"],offset:["0","1"]},fadeOutRight:{opacity:["1","0"],transform:["none","translate3d(100%, 0, 0)"],offset:["0","1"]},fadeOutRightBig:{opacity:["1","0"],transform:["none","translate3d(2000px, 0, 0)"],offset:["0","1"]},rollIn:{transform:["translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)","none"],opacity:["0","1"],offset:["0","1"]},rollOut:{transform:["none","translate3d(100%, 0, 0) rotate3d(0, 0, 1, -120deg)"],opacity:["1","0"],offset:["0","1"]},zoomIn:{transform:["scale3d(.3, .3, .3)  ","none"],opacity:["0","1"],offset:["0","1"]},zoomOutDown:{transform:["none","scale3d(.475, .475, .475) translate3d(0, -60px, 0)","scale3d(.1, .1, .1) translate3d(0, 2000px, 0)"],opacity:["1","1","0"],transformOrigin:["center bottom","center bottom","center bottom"],offset:["0","0.4","1"],easing:["cubic-bezier(0.550, 0.055, 0.675, 0.190)"]},zoomOutUp:{transform:["none","scale3d(.475, .475, .475) translate3d(0, 60px, 0)","scale3d(.1, .1, .1) translate3d(0, -2000px, 0)"],opacity:["1","1","0"],transformOrigin:["center bottom","center bottom","center bottom"],offset:["0","0.4","1"],easing:["cubic-bezier(0.550, 0.055, 0.675, 0.190)"]},zoomOutRight:{transform:["none","scale3d(.475, .475, .475) translate3d(-42px, 0, 0)","scale(.1) translate3d(2000px, 0, 0)"],opacity:["1","1","0"],transformOrigin:["right center","right center","right center"],offset:["0","0.4","1"],easing:["cubic-bezier(0.550, 0.055, 0.675, 0.190)"]},zoomOutLeft:{transform:["none","scale3d(.475, .475, .475) translate3d(42px, 0, 0)","scale(.1) translate3d(-2000px, 0, 0)"],opacity:["1","1","0"],transformOrigin:["left center","left center","left center"],offset:["0","0.4","1"],easing:["cubic-bezier(0.550, 0.055, 0.675, 0.190)"]},zoomInDown:{transform:["scale3d(.1, .1, .1) translate3d(0, -1000px, 0)","scale3d(.475, .475, .475) translate3d(0, 60px, 0)","none"],opacity:["0","1","1"],offset:["0","0.6","1"],easing:["cubic-bezier(0.550, 0.055, 0.675, 0.190)"]},zoomInLeft:{transform:["scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)","scale3d(.475, .475, .475) translate3d(10px, 0, 0)","none"],opacity:["0","1","1"],offset:["0","0.6","1"]},zoomInRight:{transform:["scale3d(.1, .1, .1) translate3d(1000px, 0, 0)","scale3d(.475, .475, .475) translate3d(-10px, 0, 0)","none"],opacity:["0","1","1"],offset:["0","0.6","1"],easing:["cubic-bezier(0.550, 0.055, 0.675, 0.190)"]},zoomInUp:{transform:["scale3d(.1, .1, .1) translate3d(0, 1000px, 0)","scale3d(.475, .475, .475) translate3d(0, -60px, 0)","none"],opacity:["0","1","1"],offset:["0","0.6","1"],easing:["cubic-bezier(0.550, 0.055, 0.675, 0.190)"]},zoomOut:{transform:["none","scale3d(.3, .3, .3)  "],opacity:["1","0"],offset:["0","1"]},rotateIn:{transform:["rotate3d(0, 0, 1, -200deg)","none"],opacity:["0","1"],transformOrigin:["center","center"],offset:["0","1"]},rotateInDownLeft:{transform:["rotate3d(0, 0, 1, -45deg)","none"],opacity:["0","1"],transformOrigin:["left bottom","left bottom"],offset:["0","1"]},rotateInDownRight:{transform:["rotate3d(0, 0, 1, 45deg)","none"],opacity:["0","1"],transformOrigin:["right bottom","right bottom"],offset:["0","1"]},rotateInUpLeft:{transform:["rotate3d(0, 0, 1, 45deg)","none"],opacity:["0","1"],transformOrigin:["left bottom","left bottom"],offset:["0","1"]},rotateInUpRight:{transform:["rotate3d(0, 0, 1, -45deg)","none"],opacity:["0","1"],transformOrigin:["right bottom","right bottom"],offset:["0","1"]},rotateOutDownLeft:{transform:["none","rotate3d(0, 0, 1, 45deg)"],opacity:["1","0"],transformOrigin:["left bottom","left bottom"],offset:["0","1"]},rotateOutDownRight:{transform:["none","rotate3d(0, 0, 1, -45deg)"],opacity:["1","0"],transformOrigin:["right bottom","right bottom"],offset:["0","1"]},rotateOutUpLeft:{transform:["none","rotate3d(0, 0, 1, -45deg)"],opacity:["1","0"],transformOrigin:["left bottom","left bottom"],offset:["0","1"]},rotateOutUpRight:{transform:["none","rotate3d(0, 0, 1, 45deg)"],opacity:["1","0"],transformOrigin:["right bottom","right bottom"],offset:["0","1"]},rotateOut:{transform:["none","rotate3d(0, 0, 1, 200deg)"],opacity:["1","0"],transformOrigin:["center","center"],offset:["0","1"]}}[e]);const b=e=>({animate:u}[e]),m=e=>{const t={bg:i,shadow:g,rotate:(e,t)=>((e,t)=>{const a={default:{transform:`rotateZ(${e}deg) ${t}`},x:e=>({transform:`rotateX(${e}deg) ${t}`}),y:e=>({transform:`rotateY(${e}deg) ${t}`}),z:e=>({transform:`rotateZ(${e}deg) ${t}`})};return a[e]||a.default})(e,t),scale:(e,t)=>((e,t)=>{const a={default:{transform:`scaleX(${e/100}) scaleY(${e/100}) ${t}`},x:e=>({transform:`scaleX(${e/100}) ${t}`}),y:e=>({transform:`scaleY(${e/100}) ${t}`}),z:e=>({transform:`scaleZ(${e/100}) ${t}`})};return a[e]||a.default})(e,t),skew:(e,t)=>((e,t)=>{const a={default:{transform:`skewX(${e}deg) ${t}`},x:e=>({transform:`skewX(${e}deg) ${t}`}),y:e=>({transform:`skewY(${e}deg) ${t}`})};return a[e]||a.default})(e,t),translate:(e,t)=>((e,t)=>{const a={default:{transform:`translateX(${e}) translateY(${e}) ${t}`},x:e=>({transform:`translateX(${e}px) ${t}`}),y:e=>({transform:`translateY(${e}px) ${t}`}),z:e=>({transform:`translateZ(${e}px) ${t}`})};return a[e]||a.default})(e,t),perspective:(e,t)=>((e,t)=>{const a={default:{transform:`perspective(${e}cm) ${t}`}};return a[e]||a.default})(e,t),origin:(e,t)=>((e,t)=>{const a={default:{transformOrigin:`${e} ${t}`}};return a[e]||a.default})(e,t),default:e=>e};return t[e]||t.default};let x=function(e){let t=e.length,a=0,r=[],o="";return{next:function(n){let f,s,d,l=[...r];s=p(e[a]),d=p(void 0===e[a+1]?"":e[a+1]);let c={self:e[a],type:s},i={self:void 0===e[a+1]?"":e[a+1],type:d};return"dash"!==s||"whitespace"!==s?o="":o+=c,r.push(c),a<t-1?(f={value:c,nextValue:i,previous:l,prevWord:o,isEnd:!1},a+=1,f):{value:c,nextValue:i,previous:l,prevWord:o,isEnd:!0}}}}(" opacity-100 ");for(;;){let e=x.next();if(console.log(e),e.isEnd)break}function y(e,t){return e.split(new RegExp(`\\${t}(?![^[]*\\])`,"g"))}function h(e){let t=y(e," "),a=[];t.forEach((e=>{let t=y(e,"-");a=m(t[0])(t[1],a)(t[2])}));let r={boxShadow:""};return a.forEach((e=>{r.boxShadow=r.boxShadow+` ${e.x}px ${e.y}px ${e.blur/20}px ${e.spread/20}px ${e.color}`})),r}console.log("\n"),console.log("COLORS VALUES"),console.log(m("bg")("blue")("100")),console.log(m("bg")("size")("contain")),console.log("\n"),console.log("Transform Values"),console.log(m("scale")("12","rotateX(12)")),console.log(m("translate")("x","rotateX(12)")("10")),console.log(m("origin")("center","")),console.log("\n"),console.log("Shadow Values"),console.log(m("shadow")("x",m("shadow")("y",[])("2"))("2")),console.log(m("shadow")("y",[])("2")),console.log(m("shadow")("blur",[])("2")),console.log(m("shadow")("spread",[])("2")),console.log("Animation Values"),console.log(b("animate")("bounce")),console.log(b("animate")("flip")),console.log(b("animate")("pulse")),console.log(b("animate")("flash")),console.log(b("animate")("rubberBand"));let w=document.querySelectorAll(".div");for(let v=0;v<w.length;v++)w[v].animate([s({},h("shadow-blur-200 shadow-spread-200 shadow-x-2 shadow-y-2 shadow-red-400")),s({},h("shadow-blur-1000 shadow-spread-100 shadow-x-0 shadow-y-0 shadow-yellow-400"))],{duration:1e7,fill:"both",timeline:new ScrollTimeline({scrollOffsets:[{target:w[v],edge:"end",rootMargin:"-10%",clamp:!0},{target:w[v],edge:"end",threshold:1,rootMargin:"-10%",clamp:!0}],fill:"both"})});let O=document.querySelectorAll(".V2"),I=document.querySelectorAll(".box"),$=["bounce","bounceIn","bounceInDown","bounceInUp","bounceInLeft","flip","flipInX","flipInY","flash","pulse","rubberBand","lightSpeedInLeft","shake","swing","tada","wobble","fadeIn","fadeInDown","fadeInUp","fadeInDownBig","fadeInUpBig","fadeInLeft","fadeInLeftBig","rollIn","zoomIn","zoomInDown","zoomInLeft","zoomInUp","rotateIn","rotateInDownLeft","rotateInUpLeft"];const k=["lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","slate","gray","zinc","neutral","stone","red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","rose"];for(let v=0;v<O.length;v++)O[v].animate({backgroundColor:[l(k[v])("100")]},{duration:100,fill:"both",timeline:new ScrollTimeline({scrollOffsets:[{target:O[v],edge:"end",rootMargin:"10%",clamp:!0},{target:O[v],edge:"end",threshold:1,rootMargin:"10%",clamp:!0}],fill:"both"})});for(let v=0;v<I.length;v++)I[v].animate(d(s({},b("animate")($[v])),{backgroundColor:[l(k[v])("400")]}),{duration:100,fill:"both",timeline:new ScrollTimeline({scrollOffsets:[{target:I[v],edge:"end",rootMargin:"-10%",clamp:!0},{target:I[v],edge:"end",threshold:1,rootMargin:"-10%",clamp:!0}],fill:"both"})});
