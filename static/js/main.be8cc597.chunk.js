(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,a,t){},18:function(e,a,t){},20:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),o=t(6),c=t.n(o),r=(t(16),t(4));function s(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement(r.b,{className:"navbar-brand",to:"/"},e.title),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(r.b,{className:"nav-link active","aria-current":"page",to:"/"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(r.b,{className:"nav-link",to:"/about"},"About"))),l.a.createElement("form",{className:"d-flex",role:"search"},l.a.createElement("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),l.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Search"))))))}var i=t(3);function m(e){var a=Object(n.useState)(""),t=Object(i.a)(a,2),o=t[0],c=t[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,e.Heading),l.a.createElement("div",{className:"mb-3"},l.a.createElement("textarea",{className:"form-control",id:"mybox",rows:"8",placeholder:"Enter text here",value:o,onChange:function(e){console.log("text changed"),c(e.target.value)}})),l.a.createElement("button",{className:"btn btn-primary",onClick:function(){var e=o.toUpperCase();c(e)}},"Convert to Uppercase"),l.a.createElement("button",{className:"btn btn-primary mx-2",onClick:function(e){var a=o.toLowerCase();c(a)}},"Convert to Lowercase"),l.a.createElement("button",{className:"btn btn-primary my-3",onClick:function(e){c("")}},"Clear"),l.a.createElement("button",{className:"btn btn-primary mx-2",onClick:function(){c(o.split("").reverse().join(""))}},"Reverse"),l.a.createElement("button",{className:"btn btn-primary my-3",onClick:function(){var e=document.getElementById("mybox");e.select(),e.setSelectionRange(0,9999),navigator.clipboard.writeText(e.value)}},"Copy"),l.a.createElement("button",{className:"btn btn-primary mx-2",onClick:function(){var e=o.split(/[ ]+/);c(e.join(" "))}},"Remove Extra Spaces")),l.a.createElement("div",{className:"container my-2"},l.a.createElement("h2",null,"Your Text Summary"),l.a.createElement("p",null,o.split(" ").length-1," words and ",o.length," characters"),l.a.createElement("p",null,.008*o.split(" ").length," minutes to read"),l.a.createElement("h2",null,"Preview"),l.a.createElement("p",null,o)))}t(18);function d(){var e=Object(n.useState)({color:"black",backgroundColor:"white"}),a=Object(i.a)(e,2),t=a[0],o=a[1],c=Object(n.useState)("Enable Dark Mode"),r=Object(i.a)(c,2),s=r[0],m=r[1];return l.a.createElement("div",{className:"container",style:t},l.a.createElement("h1",null,"About Us"),l.a.createElement("div",{className:"accordion",id:"accordionExample"},l.a.createElement("div",{className:"accordion-item"},l.a.createElement("h2",{className:"accordion-header",id:"headingOne"},l.a.createElement("button",{className:"accordion-button",style:t,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"},"Accordion Item #1")),l.a.createElement("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample"},l.a.createElement("div",{className:"accordion-body",style:t},l.a.createElement("strong",null,"This is the first item's accordion body.")," It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",l.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))),l.a.createElement("div",{className:"accordion-item"},l.a.createElement("h2",{className:"accordion-header",id:"headingTwo"},l.a.createElement("button",{className:"accordion-button collapsed",style:t,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo"},"Accordion Item #2")),l.a.createElement("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample"},l.a.createElement("div",{className:"accordion-body",style:t},l.a.createElement("strong",null,"This is the second item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",l.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))),l.a.createElement("div",{className:"accordion-item"},l.a.createElement("h2",{className:"accordion-header",id:"headingThree"},l.a.createElement("button",{className:"accordion-button collapsed",style:t,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree"},"Accordion Item #3")),l.a.createElement("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample"},l.a.createElement("div",{className:"accordion-body",style:t},l.a.createElement("strong",null,"This is the third item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",l.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow.")))),l.a.createElement("button",{onClick:function(){"black"===t.color?(o({color:"white",backgroundColor:"black",border:"1px solid white"}),m("Enable Light Mode")):(o({color:"black",backgroundColor:"white"}),m("Enable Dark Mode"))},type:"Enable Dark Mode",className:"btn btn-primary my-3"},s))}var u=t(0);var b=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(r.a,null,l.a.createElement(s,{title:"BilixUtils"}),l.a.createElement("div",{className:"container my-3"},l.a.createElement(u.c,null,l.a.createElement(u.a,{exact:!0,path:"/about",element:l.a.createElement(d,null)}),l.a.createElement(u.a,{exact:!0,path:"/",element:l.a.createElement(m,{Heading:"Enter the Text to Analyze"})})))))},h=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,21)).then(function(a){var t=a.getCLS,n=a.getFID,l=a.getFCP,o=a.getLCP,c=a.getTTFB;t(e),n(e),l(e),o(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(b,null))),h()},7:function(e,a,t){e.exports=t(20)}},[[7,3,2]]]);
//# sourceMappingURL=main.be8cc597.chunk.js.map