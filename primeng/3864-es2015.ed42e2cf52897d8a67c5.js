(self.webpackChunkprimeng=self.webpackChunkprimeng||[]).push([[3864],{36639:function(e,t,n){"use strict";n.d(t,{s:function(){return y},Q:function(){return x}});var i=n(87368),s=n(61116),l=n(78230),a=n(37329),r=n(99713),p=n(10748);function o(e,t){if(1&e&&(i.TgZ(0,"span",10),i._uU(1),i.qZA()),2&e){const e=i.oxw(2);i.uIk("id",e.id+"_header"),i.xp6(1),i.Oqu(e.header)}}function g(e,t){1&e&&i.GkF(0)}function u(e,t){}function c(e,t){1&e&&i.YNc(0,u,0,0,"ng-template")}function h(e,t){if(1&e){const e=i.EpF();i.TgZ(0,"button",11),i.NdJ("click",function(t){return i.CHM(e),i.oxw(2).onIconClick(t)})("keydown.enter",function(t){return i.CHM(e),i.oxw(2).onIconClick(t)}),i._UZ(1,"span"),i.qZA()}if(2&e){const e=i.oxw(2);i.uIk("id",e.id+"-label")("aria-controls",e.id+"-content")("aria-expanded",!e.collapsed),i.xp6(1),i.Tol(e.collapsed?e.expandIcon:e.collapseIcon)}}function d(e,t){if(1&e){const e=i.EpF();i.TgZ(0,"div",6),i.NdJ("click",function(t){return i.CHM(e),i.oxw().onHeaderClick(t)}),i.YNc(1,o,2,2,"span",7),i.Hsn(2,1),i.YNc(3,g,1,0,"ng-container",4),i.TgZ(4,"div",8),i.YNc(5,c,1,0,void 0,4),i.YNc(6,h,2,5,"button",9),i.qZA(),i.qZA()}if(2&e){const e=i.oxw();i.uIk("id",e.id+"-titlebar"),i.xp6(1),i.Q6J("ngIf",e.header),i.xp6(2),i.Q6J("ngTemplateOutlet",e.headerTemplate),i.xp6(2),i.Q6J("ngTemplateOutlet",e.iconTemplate),i.xp6(1),i.Q6J("ngIf",e.toggleable)}}function Z(e,t){1&e&&i.GkF(0)}function m(e,t){1&e&&i.GkF(0)}function T(e,t){if(1&e&&(i.TgZ(0,"div",12),i.Hsn(1,2),i.YNc(2,m,1,0,"ng-container",4),i.qZA()),2&e){const e=i.oxw();i.xp6(2),i.Q6J("ngTemplateOutlet",e.footerTemplate)}}const f=["*",[["p-header"]],[["p-footer"]]],A=function(e){return{"p-panel p-component":!0,"p-panel-toggleable":e}},v=function(e){return{transitionParams:e,height:"0",opacity:"0"}},q=function(e){return{value:"hidden",params:e}},z=function(e){return{transitionParams:e,height:"*",opacity:"1"}},S=function(e){return{value:"visible",params:e}},_=["*","p-header","p-footer"];let U=0,y=(()=>{class e{constructor(e){this.el=e,this.collapsed=!1,this.expandIcon="pi pi-plus",this.collapseIcon="pi pi-minus",this.showHeader=!0,this.toggler="icon",this.collapsedChange=new i.vpe,this.onBeforeToggle=new i.vpe,this.onAfterToggle=new i.vpe,this.transitionOptions="400ms cubic-bezier(0.86, 0, 0.07, 1)",this.id="p-panel-"+U++}ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"header":this.headerTemplate=e.template;break;case"content":this.contentTemplate=e.template;break;case"footer":this.footerTemplate=e.template;break;case"icons":this.iconTemplate=e.template;break;default:this.contentTemplate=e.template}})}onHeaderClick(e){"header"===this.toggler&&this.toggle(e)}onIconClick(e){"icon"===this.toggler&&this.toggle(e)}toggle(e){if(this.animating)return!1;this.animating=!0,this.onBeforeToggle.emit({originalEvent:e,collapsed:this.collapsed}),this.toggleable&&(this.collapsed?this.expand(e):this.collapse(e)),e.preventDefault()}expand(e){this.collapsed=!1,this.collapsedChange.emit(this.collapsed)}collapse(e){this.collapsed=!0,this.collapsedChange.emit(this.collapsed)}getBlockableElement(){return this.el.nativeElement.children[0]}onToggleDone(e){this.animating=!1,this.onAfterToggle.emit({originalEvent:e,collapsed:this.collapsed})}}return e.\u0275fac=function(t){return new(t||e)(i.Y36(i.SBq))},e.\u0275cmp=i.Xpm({type:e,selectors:[["p-panel"]],contentQueries:function(e,t,n){if(1&e&&(i.Suo(n,l.$_,5),i.Suo(n,l.jx,4)),2&e){let e;i.iGM(e=i.CRH())&&(t.footerFacet=e.first),i.iGM(e=i.CRH())&&(t.templates=e)}},hostAttrs:[1,"p-element"],inputs:{toggleable:"toggleable",header:"header",collapsed:"collapsed",style:"style",styleClass:"styleClass",expandIcon:"expandIcon",collapseIcon:"collapseIcon",showHeader:"showHeader",toggler:"toggler",transitionOptions:"transitionOptions"},outputs:{collapsedChange:"collapsedChange",onBeforeToggle:"onBeforeToggle",onAfterToggle:"onAfterToggle"},ngContentSelectors:_,decls:7,vars:22,consts:[[3,"ngClass","ngStyle"],["class","p-panel-header",3,"click",4,"ngIf"],["role","region",1,"p-toggleable-content"],[1,"p-panel-content"],[4,"ngTemplateOutlet"],["class","p-panel-footer",4,"ngIf"],[1,"p-panel-header",3,"click"],["class","p-panel-title",4,"ngIf"],[1,"p-panel-icons"],["type","button","class","p-panel-header-icon p-panel-toggler p-link","pRipple","","role","tab",3,"click","keydown.enter",4,"ngIf"],[1,"p-panel-title"],["type","button","pRipple","","role","tab",1,"p-panel-header-icon","p-panel-toggler","p-link",3,"click","keydown.enter"],[1,"p-panel-footer"]],template:function(e,t){1&e&&(i.F$t(f),i.TgZ(0,"div",0),i.YNc(1,d,7,5,"div",1),i.TgZ(2,"div",2),i.NdJ("@panelContent.done",function(e){return t.onToggleDone(e)}),i.TgZ(3,"div",3),i.Hsn(4),i.YNc(5,Z,1,0,"ng-container",4),i.qZA(),i.YNc(6,T,3,1,"div",5),i.qZA(),i.qZA()),2&e&&(i.Tol(t.styleClass),i.Q6J("ngClass",i.VKq(12,A,t.toggleable))("ngStyle",t.style),i.uIk("id",t.id),i.xp6(1),i.Q6J("ngIf",t.showHeader),i.xp6(1),i.Q6J("@panelContent",t.collapsed?i.VKq(16,q,i.VKq(14,v,t.animating?t.transitionOptions:"0ms")):i.VKq(20,S,i.VKq(18,z,t.animating?t.transitionOptions:"0ms"))),i.uIk("id",t.id+"-content")("aria-hidden",t.collapsed)("aria-labelledby",t.id+"-titlebar"),i.xp6(3),i.Q6J("ngTemplateOutlet",t.contentTemplate),i.xp6(1),i.Q6J("ngIf",t.footerFacet||t.footerTemplate))},directives:[s.mk,s.PC,s.O5,s.tP,p.H],styles:[".p-panel-header{display:flex;justify-content:space-between;align-items:center}.p-panel-title{line-height:1}.p-panel-header-icon{display:inline-flex;justify-content:center;align-items:center;cursor:pointer;text-decoration:none;overflow:hidden;position:relative}"],encapsulation:2,data:{animation:[(0,r.X$)("panelContent",[(0,r.SB)("hidden",(0,r.oB)({height:"0",overflow:"hidden"})),(0,r.SB)("void",(0,r.oB)({height:"{{height}}"}),{params:{height:"0"}}),(0,r.SB)("visible",(0,r.oB)({height:"*"})),(0,r.eR)("visible <=> hidden",[(0,r.oB)({overflow:"hidden"}),(0,r.jt)("{{transitionParams}}")]),(0,r.eR)("void => hidden",(0,r.jt)("{{transitionParams}}")),(0,r.eR)("void => visible",(0,r.jt)("{{transitionParams}}"))])]},changeDetection:0}),e})(),x=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[[s.ez,l.m8,a.T],l.m8]}),e})()},89191:function(e,t,n){"use strict";n.d(t,{Q:function(){return i.Q}});var i=n(36639)},90628:function(e,t,n){"use strict";n.d(t,{h:function(){return r},a:function(){return p}});var i=n(61116),s=n(87368);const l=["code"],a=["*"];let r=(()=>{class e{constructor(e){this.el=e,this.lang="markup"}ngAfterViewInit(){window.Prism&&window.Prism.highlightElement(this.codeViewChild.nativeElement)}}return e.\u0275fac=function(t){return new(t||e)(s.Y36(s.SBq))},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-code"]],viewQuery:function(e,t){if(1&e&&s.Gf(l,5),2&e){let e;s.iGM(e=s.CRH())&&(t.codeViewChild=e.first)}},inputs:{lang:"lang"},ngContentSelectors:a,decls:5,vars:1,consts:[[3,"ngClass"],["code",""]],template:function(e,t){1&e&&(s.F$t(),s.TgZ(0,"pre",0),s.TgZ(1,"code",null,1),s.Hsn(3),s._uU(4,"\n"),s.qZA(),s.qZA()),2&e&&s.Q6J("ngClass","language-"+t.lang)},directives:[i.mk],encapsulation:2}),e})(),p=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[i.ez]]}),e})()},23864:function(e,t,n){"use strict";n.r(t),n.d(t,{SplitterDemoModule:function(){return J}});var i=n(61116),s=n(42066),l=n(87368),a=n(12774),r=n(24269),p=n(78230);const o=["container"];function g(e,t){1&e&&l.GkF(0)}function u(e,t){if(1&e){const e=l.EpF();l.TgZ(0,"div",5),l.NdJ("mousedown",function(t){l.CHM(e);const n=l.oxw().index;return l.oxw().onGutterMouseDown(t,n)})("touchstart",function(t){l.CHM(e);const n=l.oxw().index;return l.oxw().onGutterTouchStart(t,n)}),l._UZ(1,"div",6),l.qZA()}if(2&e){const e=l.oxw(2);l.Q6J("ngStyle",e.gutterStyle())}}function c(e,t){if(1&e&&(l.TgZ(0,"div",0),l.YNc(1,g,1,0,"ng-container",3),l.qZA(),l.YNc(2,u,2,1,"div",4)),2&e){const e=t.$implicit,n=t.index,i=l.oxw();l.Tol(i.panelStyleClass),l.Q6J("ngClass",i.panelContainerClass())("ngStyle",i.panelStyle),l.xp6(1),l.Q6J("ngTemplateOutlet",e),l.xp6(1),l.Q6J("ngIf",n!==i.panels.length-1)}}let h=(()=>{class e{constructor(e,t){this.cd=e,this.el=t,this.stateStorage="session",this.stateKey=null,this.layout="horizontal",this.gutterSize=4,this.panelSizes=[],this.minSizes=[],this.onResizeEnd=new l.vpe,this.onResizeStart=new l.vpe,this.nested=!1,this.panels=[],this.dragging=!1,this.mouseMoveListener=null,this.mouseUpListener=null,this.touchMoveListener=null,this.touchEndListener=null,this.size=null,this.gutterElement=null,this.startPos=null,this.prevPanelElement=null,this.nextPanelElement=null,this.nextPanelSize=null,this.prevPanelSize=null,this._panelSizes=null,this.prevPanelIndex=null}ngOnInit(){this.nested=this.isNested()}ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"panel":default:this.panels.push(e.template)}})}ngAfterViewInit(){if(this.panels&&this.panels.length){let e=!1;if(this.isStateful()&&(e=this.restoreState()),!e){let e=[...this.el.nativeElement.children[0].children].filter(e=>r.p.hasClass(e,"p-splitter-panel")),t=[];this.panels.map((n,i)=>{let s=(this.panelSizes.length-1>=i?this.panelSizes[i]:null)||100/this.panels.length;t[i]=s,e[i].style.flexBasis="calc("+s+"% - "+(this.panels.length-1)*this.gutterSize+"px)"}),this._panelSizes=t}}}resizeStart(e,t){this.gutterElement=e.currentTarget,this.size=this.horizontal()?r.p.getWidth(this.containerViewChild.nativeElement):r.p.getHeight(this.containerViewChild.nativeElement),this.dragging=!0,this.startPos=this.horizontal()?e.pageX||e.changedTouches[0].pageX:e.pageY||e.changedTouches[0].pageY,this.prevPanelElement=this.gutterElement.previousElementSibling,this.nextPanelElement=this.gutterElement.nextElementSibling,this.prevPanelSize=100*(this.horizontal()?r.p.getOuterWidth(this.prevPanelElement,!0):r.p.getOuterHeight(this.prevPanelElement,!0))/this.size,this.nextPanelSize=100*(this.horizontal()?r.p.getOuterWidth(this.nextPanelElement,!0):r.p.getOuterHeight(this.nextPanelElement,!0))/this.size,this.prevPanelIndex=t,r.p.addClass(this.gutterElement,"p-splitter-gutter-resizing"),r.p.addClass(this.containerViewChild.nativeElement,"p-splitter-resizing"),this.onResizeStart.emit({originalEvent:e,sizes:this._panelSizes})}onResize(e){let t;t=this.horizontal()?100*e.pageX/this.size-100*this.startPos/this.size:100*e.pageY/this.size-100*this.startPos/this.size;let n=this.prevPanelSize+t,i=this.nextPanelSize-t;this.validateResize(n,i)&&(this.prevPanelElement.style.flexBasis="calc("+n+"% - "+(this.panels.length-1)*this.gutterSize+"px)",this.nextPanelElement.style.flexBasis="calc("+i+"% - "+(this.panels.length-1)*this.gutterSize+"px)",this._panelSizes[this.prevPanelIndex]=n,this._panelSizes[this.prevPanelIndex+1]=i)}resizeEnd(e){this.isStateful()&&this.saveState(),this.onResizeEnd.emit({originalEvent:e,sizes:this._panelSizes}),r.p.removeClass(this.gutterElement,"p-splitter-gutter-resizing"),r.p.removeClass(this.containerViewChild.nativeElement,"p-splitter-resizing"),this.clear()}onGutterMouseDown(e,t){this.resizeStart(e,t),this.bindMouseListeners()}onGutterTouchStart(e,t){e.cancelable&&(this.resizeStart(e,t),this.bindTouchListeners(),e.preventDefault())}onGutterTouchEnd(e){this.resizeEnd(e),this.unbindTouchListeners(),e.cancelable&&e.preventDefault()}validateResize(e,t){return!(this.minSizes.length>=1&&this.minSizes[0]&&this.minSizes[0]>e||this.minSizes.length>1&&this.minSizes[1]&&this.minSizes[1]>t)}bindMouseListeners(){this.mouseMoveListener||(this.mouseMoveListener=e=>this.onResize(e),document.addEventListener("mousemove",this.mouseMoveListener)),this.mouseUpListener||(this.mouseUpListener=e=>{this.resizeEnd(e),this.unbindMouseListeners()},document.addEventListener("mouseup",this.mouseUpListener))}bindTouchListeners(){this.touchMoveListener||(this.touchMoveListener=e=>this.onResize(e.changedTouches[0]),document.addEventListener("touchmove",this.touchMoveListener)),this.touchEndListener||(this.touchEndListener=e=>{this.resizeEnd(e),this.unbindTouchListeners()},document.addEventListener("touchend",this.touchEndListener))}unbindMouseListeners(){this.mouseMoveListener&&(document.removeEventListener("mousemove",this.mouseMoveListener),this.mouseMoveListener=null),this.mouseUpListener&&(document.removeEventListener("mouseup",this.mouseUpListener),this.mouseUpListener=null)}unbindTouchListeners(){this.touchMoveListener&&(document.removeEventListener("touchmove",this.touchMoveListener),this.touchMoveListener=null),this.touchEndListener&&(document.removeEventListener("touchend",this.touchEndListener),this.touchEndListener=null)}clear(){this.dragging=!1,this.size=null,this.startPos=null,this.prevPanelElement=null,this.nextPanelElement=null,this.prevPanelSize=null,this.nextPanelSize=null,this.gutterElement=null,this.prevPanelIndex=null}isNested(){if(this.el.nativeElement){let e=this.el.nativeElement.parentElement;for(;e&&!r.p.hasClass(e,"p-splitter");)e=e.parentElement;return null!==e}return!1}isStateful(){return null!=this.stateKey}getStorage(){switch(this.stateStorage){case"local":return window.localStorage;case"session":return window.sessionStorage;default:throw new Error(this.stateStorage+' is not a valid value for the state storage, supported values are "local" and "session".')}}saveState(){this.getStorage().setItem(this.stateKey,JSON.stringify(this._panelSizes))}restoreState(){const e=this.getStorage().getItem(this.stateKey);return!!e&&(this._panelSizes=JSON.parse(e),[...this.containerViewChild.nativeElement.children].filter(e=>r.p.hasClass(e,"p-splitter-panel")).forEach((e,t)=>{e.style.flexBasis="calc("+this._panelSizes[t]+"% - "+(this.panels.length-1)*this.gutterSize+"px)"}),!0)}containerClass(){return{"p-splitter p-component":!0,"p-splitter-horizontal":"horizontal"===this.layout,"p-splitter-vertical":"vertical"===this.layout}}panelContainerClass(){return{"p-splitter-panel":!0,"p-splitter-panel-nested":!0}}gutterStyle(){return this.horizontal()?{width:this.gutterSize+"px"}:{height:this.gutterSize+"px"}}horizontal(){return"horizontal"===this.layout}}return e.\u0275fac=function(t){return new(t||e)(l.Y36(l.sBO),l.Y36(l.SBq))},e.\u0275cmp=l.Xpm({type:e,selectors:[["p-splitter"]],contentQueries:function(e,t,n){if(1&e&&l.Suo(n,p.jx,4),2&e){let e;l.iGM(e=l.CRH())&&(t.templates=e)}},viewQuery:function(e,t){if(1&e&&l.Gf(o,5),2&e){let e;l.iGM(e=l.CRH())&&(t.containerViewChild=e.first)}},hostAttrs:[1,"p-element"],hostVars:2,hostBindings:function(e,t){2&e&&l.ekj("p-splitter-panel-nested",t.nested)},inputs:{styleClass:"styleClass",panelStyleClass:"panelStyleClass",style:"style",panelStyle:"panelStyle",stateStorage:"stateStorage",stateKey:"stateKey",layout:"layout",gutterSize:"gutterSize",panelSizes:"panelSizes",minSizes:"minSizes"},outputs:{onResizeEnd:"onResizeEnd",onResizeStart:"onResizeStart"},decls:3,vars:5,consts:[[3,"ngClass","ngStyle"],["container",""],["ngFor","",3,"ngForOf"],[4,"ngTemplateOutlet"],["class","p-splitter-gutter",3,"ngStyle","mousedown","touchstart",4,"ngIf"],[1,"p-splitter-gutter",3,"ngStyle","mousedown","touchstart"],[1,"p-splitter-gutter-handle"]],template:function(e,t){1&e&&(l.TgZ(0,"div",0,1),l.YNc(2,c,3,6,"ng-template",2),l.qZA()),2&e&&(l.Tol(t.styleClass),l.Q6J("ngClass",t.containerClass())("ngStyle",t.style),l.xp6(2),l.Q6J("ngForOf",t.panels))},directives:[i.mk,i.PC,i.sg,i.tP,i.O5],styles:[".p-splitter{display:flex;flex-wrap:nowrap}.p-splitter-vertical{flex-direction:column}.p-splitter-panel{flex-grow:1}.p-splitter-panel-nested{display:flex}.p-splitter-panel p-splitter{flex-grow:1}.p-splitter-panel .p-splitter{flex-grow:1;border:0}.p-splitter-gutter{flex-grow:0;flex-shrink:0;display:flex;align-items:center;justify-content:center;cursor:col-resize}.p-splitter-horizontal.p-splitter-resizing{cursor:col-resize;-webkit-user-select:none;-ms-user-select:none;user-select:none}.p-splitter-horizontal>.p-splitter-gutter>.p-splitter-gutter-handle{height:24px;width:100%}.p-splitter-horizontal>.p-splitter-gutter{cursor:col-resize}.p-splitter-vertical.p-splitter-resizing{cursor:row-resize;-webkit-user-select:none;-ms-user-select:none;user-select:none}.p-splitter-vertical>.p-splitter-gutter{cursor:row-resize}.p-splitter-vertical>.p-splitter-gutter>.p-splitter-gutter-handle{width:24px;height:100%}"],encapsulation:2,changeDetection:0}),e})(),d=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l.oAB({type:e}),e.\u0275inj=l.cJS({imports:[[i.ez],p.m8]}),e})();var Z=n(74136),m=n(47299),T=n(90628);function f(e,t){1&e&&(l.TgZ(0,"div",21),l._uU(1," Panel 1 "),l.qZA())}function A(e,t){1&e&&(l.TgZ(0,"div",21),l._uU(1," Panel 2 "),l.qZA())}function v(e,t){1&e&&(l.TgZ(0,"div",21),l._uU(1," Panel 1 "),l.qZA())}function q(e,t){1&e&&(l.TgZ(0,"div",21),l._uU(1," Panel 2 "),l.qZA())}function z(e,t){1&e&&(l.TgZ(0,"div",21),l._uU(1," Panel 1 "),l.qZA())}function S(e,t){1&e&&(l.TgZ(0,"div",21),l._uU(1," Panel 2 "),l.qZA())}function _(e,t){1&e&&(l.TgZ(0,"div",21),l._uU(1," Panel 3 "),l.qZA())}function U(e,t){1&e&&(l.TgZ(0,"div",21),l._uU(1," Panel 4 "),l.qZA())}const y=function(){return[20,80]};function x(e,t){1&e&&(l.TgZ(0,"p-splitter",23),l.YNc(1,_,2,0,"ng-template",6),l.YNc(2,U,2,0,"ng-template",6),l.qZA()),2&e&&l.Q6J("panelSizes",l.DdM(1,y))}const w=function(){return[15,85]};function b(e,t){1&e&&(l.TgZ(0,"p-splitter",22),l.YNc(1,S,2,0,"ng-template",6),l.YNc(2,x,3,2,"ng-template",6),l.qZA()),2&e&&l.Q6J("panelSizes",l.DdM(1,w))}function C(e,t){1&e&&l._UZ(0,"iframe",24)}const P=function(){return{height:"300px"}},E=function(){return[10,0]},k=function(){return["/theming"]};let I=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.Xpm({type:e,selectors:[["ng-component"]],decls:304,vars:15,consts:[[1,"content-section","introduction"],[1,"feature-intro"],["github","splitter","stackblitz","splitter-demo"],[1,"content-section","implementation"],[1,"card"],["styleClass","p-mb-5"],["pTemplate",""],["styleClass","p-mb-5","layout","vertical"],["styleClass","p-mb-5",3,"panelSizes","minSizes"],[1,"content-section","documentation"],["header","Documentation"],["lang","typescript"],["lang","markup"],[1,"doc-tablewrapper"],[1,"doc-table"],["href","#",3,"routerLink"],["header","Source"],["href","https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/splitter","target","_blank",1,"btn-viewsource"],["href","https://stackblitz.com/edit/primeng-splitter-demo","target","_blank",1,"btn-viewsource",2,"margin-left",".5em"],["header","StackBlitz"],["pTemplate","content"],[1,"p-col","p-d-flex","p-ai-center","p-jc-center"],["layout","vertical",3,"panelSizes"],[3,"panelSizes"],["src","https://stackblitz.com/edit/primeng-splitter-demo?embed=1",2,"width","100%","height","768px","border","none"]],template:function(e,t){1&e&&(l.TgZ(0,"div",0),l.TgZ(1,"div",1),l.TgZ(2,"h1"),l._uU(3,"Splitter"),l.qZA(),l.TgZ(4,"p"),l._uU(5,"Splitter is utilized to separate and resize panels."),l.qZA(),l.qZA(),l._UZ(6,"app-demoActions",2),l.qZA(),l.TgZ(7,"div",3),l.TgZ(8,"div",4),l.TgZ(9,"h5"),l._uU(10,"Horizontal"),l.qZA(),l.TgZ(11,"p-splitter",5),l.YNc(12,f,2,0,"ng-template",6),l.YNc(13,A,2,0,"ng-template",6),l.qZA(),l.qZA(),l.TgZ(14,"div",4),l.TgZ(15,"h5"),l._uU(16,"Vertical"),l.qZA(),l.TgZ(17,"p-splitter",7),l.YNc(18,v,2,0,"ng-template",6),l.YNc(19,q,2,0,"ng-template",6),l.qZA(),l.qZA(),l.TgZ(20,"div",4),l.TgZ(21,"h5"),l._uU(22,"Nested"),l.qZA(),l.TgZ(23,"p-splitter",8),l.YNc(24,z,2,0,"ng-template",6),l.YNc(25,b,3,2,"ng-template",6),l.qZA(),l.qZA(),l.qZA(),l.TgZ(26,"div",9),l.TgZ(27,"p-tabView"),l.TgZ(28,"p-tabPanel",10),l.TgZ(29,"h5"),l._uU(30,"Import"),l.qZA(),l.TgZ(31,"app-code",11),l.IAx(),l._uU(32,"\nimport {SplitterModule} from 'primeng/splitter';\n"),l.fQ9(),l.qZA(),l.TgZ(33,"h5"),l._uU(34,"Getting Started"),l.qZA(),l.TgZ(35,"p"),l._uU(36,"Splitter requires two ng-template with "),l.TgZ(37,"i"),l._uU(38,"pTemplate"),l.qZA(),l._uU(39," structural directives to wrap."),l.qZA(),l.TgZ(40,"app-code",12),l.IAx(),l._uU(41,"\n<p-splitter [style]=\"{'height': '300px'}\">\n    <ng-template pTemplate>\n        Panel 1\n    </ng-template>\n    <ng-template pTemplate>\n        Panel 2\n    </ng-template>\n</p-splitter>\n"),l.fQ9(),l.qZA(),l.TgZ(42,"h5"),l._uU(43,"Layout"),l.qZA(),l.TgZ(44,"p"),l._uU(45,"Default orientation is configured with the "),l.TgZ(46,"i"),l._uU(47,"layout"),l.qZA(),l._uU(48,' property and default is the "horizontal" whereas other alternative is the "vertical".'),l.qZA(),l.TgZ(49,"app-code",12),l.IAx(),l._uU(50,"\n<p-splitter [style]=\"{'height': '300px'}\" layout=\"vertical\">\n    <ng-template pTemplate>\n        Panel 1\n    </ng-template>\n    <ng-template pTemplate>\n        Panel 2\n    </ng-template>\n</p-splitter>\n"),l.fQ9(),l.qZA(),l.TgZ(51,"h5"),l._uU(52,"Initial Sizes"),l.qZA(),l.TgZ(53,"p"),l._uU(54,"When no panelSizes are defined, panels are split 50/50, use the "),l.TgZ(55,"i"),l._uU(56,"panelSizes"),l.qZA(),l._uU(57," property to give relative widths e.g. [20,80]."),l.qZA(),l.TgZ(58,"app-code",12),l.IAx(),l._uU(59,'\n<p-splitter [style]="{\'height\': \'300px\'}" [panelSizes]="[20,80]" layout="vertical">\n    <ng-template pTemplate>\n        Panel 1\n    </ng-template>\n    <ng-template pTemplate>\n        Panel 2\n    </ng-template>\n</p-splitter>\n'),l.fQ9(),l.qZA(),l.TgZ(60,"h5"),l._uU(61,"Minimum Sizes"),l.qZA(),l.TgZ(62,"p"),l._uU(63,"Minimum sizes defines the lowest boundary for the size of a panels."),l.qZA(),l.TgZ(64,"app-code",12),l.IAx(),l._uU(65,'\n<p-splitter [style]="{\'height\': \'300px\'}" [minSizes]="[10,20]" layout="vertical">\n    <ng-template pTemplate>\n        Panel 1\n    </ng-template>\n    <ng-template pTemplate>\n        Panel 2\n    </ng-template>\n</p-splitter>\n'),l.fQ9(),l.qZA(),l.TgZ(66,"h5"),l._uU(67,"Nested Panels"),l.qZA(),l.TgZ(68,"p"),l._uU(69,"Splitters can be combined to create advanced layouts."),l.qZA(),l.TgZ(70,"app-code",12),l.IAx(),l._uU(71,'\n<p-splitter [style]="{\'height\': \'300px\'}" [panelSizes]="[20,80]" [minSizes]="[10,0]" styleClass="p-mb-5">\n    <ng-template pTemplate>\n        <div class="p-col p-d-flex p-ai-center p-jc-center">\n            Panel 1\n        </div>\n    </ng-template>\n    <ng-template pTemplate>\n        <p-splitter layout="vertical" [panelSizes]="[15,85]">\n            <ng-template pTemplate>\n                <div class="p-col p-d-flex p-ai-center p-jc-center">\n                    Panel 2\n                </div>\n            </ng-template>\n            <ng-template pTemplate>\n                <p-splitter [panelSizes]="[20,80]">\n                    <ng-template pTemplate>\n                        <div class="p-col p-d-flex p-ai-center p-jc-center">\n                            Panel 3\n                        </div>\n                    </ng-template>\n                    <ng-template pTemplate>\n                        <div class="p-col p-d-flex p-ai-center p-jc-center">\n                            Panel 4\n                        </div>\n                    </ng-template>\n                </p-splitter>\n            </ng-template>\n        </p-splitter>\n    </ng-template>\n</p-splitter>\n'),l.fQ9(),l.qZA(),l.TgZ(72,"h5"),l._uU(73,"Stateful"),l.qZA(),l.TgZ(74,"p"),l._uU(75,"Splitters can be configured as stateful so that when the user visits the page again, the adjusts sizes can be restored. Define a "),l.TgZ(76,"i"),l._uU(77,"stateKey"),l.qZA(),l._uU(78," to enable this feature. Default location of the state is session storage and other option is the local storage which can be configured using the "),l.TgZ(79,"i"),l._uU(80,"stateStorage"),l.qZA(),l._uU(81," property."),l.qZA(),l.TgZ(82,"app-code",12),l.IAx(),l._uU(83,'\n<p-splitter stateKey="mykey" stateStorage="local">\n    <ng-template pTemplate>\n        Panel 1\n    </ng-template>\n    <ng-template pTemplate>\n        Panel 2\n    </ng-template>\n</p-splitter>\n'),l.fQ9(),l.qZA(),l.TgZ(84,"h5"),l._uU(85,"Properties"),l.qZA(),l.TgZ(86,"p"),l._uU(87,"Any property as style and class are passed to the main container element. Following are the additional properties to configure the component."),l.qZA(),l.TgZ(88,"div",13),l.TgZ(89,"table",14),l.TgZ(90,"thead"),l.TgZ(91,"tr"),l.TgZ(92,"th"),l._uU(93,"Name"),l.qZA(),l.TgZ(94,"th"),l._uU(95,"Type"),l.qZA(),l.TgZ(96,"th"),l._uU(97,"Default"),l.qZA(),l.TgZ(98,"th"),l._uU(99,"Description"),l.qZA(),l.qZA(),l.qZA(),l.TgZ(100,"tbody"),l.TgZ(101,"tr"),l.TgZ(102,"td"),l._uU(103,"panelSizes"),l.qZA(),l.TgZ(104,"td"),l._uU(105,"number"),l.qZA(),l.TgZ(106,"td"),l._uU(107,"null"),l.qZA(),l.TgZ(108,"td"),l._uU(109,"Size of the elements relative to 100%."),l.qZA(),l.qZA(),l.TgZ(110,"tr"),l.TgZ(111,"td"),l._uU(112,"minSizes"),l.qZA(),l.TgZ(113,"td"),l._uU(114,"number"),l.qZA(),l.TgZ(115,"td"),l._uU(116,"null"),l.qZA(),l.TgZ(117,"td"),l._uU(118,"Minimum size of the elements relative to 100%."),l.qZA(),l.qZA(),l.TgZ(119,"tr"),l.TgZ(120,"td"),l._uU(121,"layout"),l.qZA(),l.TgZ(122,"td"),l._uU(123,"string"),l.qZA(),l.TgZ(124,"td"),l._uU(125,"horizontal"),l.qZA(),l.TgZ(126,"td"),l._uU(127,'Orientation of the panels, valid values are "horizontal" and "vertical".'),l.qZA(),l.qZA(),l.TgZ(128,"tr"),l.TgZ(129,"td"),l._uU(130,"gutterSize"),l.qZA(),l.TgZ(131,"td"),l._uU(132,"number"),l.qZA(),l.TgZ(133,"td"),l._uU(134,"4"),l.qZA(),l.TgZ(135,"td"),l._uU(136,"Size of the divider in pixels."),l.qZA(),l.qZA(),l.TgZ(137,"tr"),l.TgZ(138,"td"),l._uU(139,"stateKey"),l.qZA(),l.TgZ(140,"td"),l._uU(141,"string"),l.qZA(),l.TgZ(142,"td"),l._uU(143,"null"),l.qZA(),l.TgZ(144,"td"),l._uU(145,"Storage identifier of a stateful Splitter."),l.qZA(),l.qZA(),l.TgZ(146,"tr"),l.TgZ(147,"td"),l._uU(148,"stateStorage"),l.qZA(),l.TgZ(149,"td"),l._uU(150,"string"),l.qZA(),l.TgZ(151,"td"),l._uU(152,"session"),l.qZA(),l.TgZ(153,"td"),l._uU(154,'Defines where a stateful splitter keeps its state, valid values are "session" for sessionStorage and "local" for localStorage.'),l.qZA(),l.qZA(),l.TgZ(155,"tr"),l.TgZ(156,"td"),l._uU(157,"style"),l.qZA(),l.TgZ(158,"td"),l._uU(159,"object"),l.qZA(),l.TgZ(160,"td"),l._uU(161,"null"),l.qZA(),l.TgZ(162,"td"),l._uU(163,"Inline style of the component."),l.qZA(),l.qZA(),l.TgZ(164,"tr"),l.TgZ(165,"td"),l._uU(166,"styleClass"),l.qZA(),l.TgZ(167,"td"),l._uU(168,"string"),l.qZA(),l.TgZ(169,"td"),l._uU(170,"null"),l.qZA(),l.TgZ(171,"td"),l._uU(172,"Style class of the component."),l.qZA(),l.qZA(),l.TgZ(173,"tr"),l.TgZ(174,"td"),l._uU(175,"panelStyleClass"),l.qZA(),l.TgZ(176,"td"),l._uU(177,"string"),l.qZA(),l.TgZ(178,"td"),l._uU(179,"null"),l.qZA(),l.TgZ(180,"td"),l._uU(181,"Style class of the panel."),l.qZA(),l.qZA(),l.TgZ(182,"tr"),l.TgZ(183,"td"),l._uU(184,"panelStyle"),l.qZA(),l.TgZ(185,"td"),l._uU(186,"object"),l.qZA(),l.TgZ(187,"td"),l._uU(188,"null"),l.qZA(),l.TgZ(189,"td"),l._uU(190,"Inline style of the pnanel."),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(191,"h5"),l._uU(192,"Events"),l.qZA(),l.TgZ(193,"div",13),l.TgZ(194,"table",14),l.TgZ(195,"thead"),l.TgZ(196,"tr"),l.TgZ(197,"th"),l._uU(198,"Name"),l.qZA(),l.TgZ(199,"th"),l._uU(200,"Parameters"),l.qZA(),l.TgZ(201,"th"),l._uU(202,"Description"),l.qZA(),l.qZA(),l.qZA(),l.TgZ(203,"tbody"),l.TgZ(204,"tr"),l.TgZ(205,"td"),l._uU(206,"onResizeStart"),l.qZA(),l.TgZ(207,"td"),l._uU(208,"event.originalEvent: Original event "),l._UZ(209,"br"),l._uU(210," event.sizes: Sizes of the panels as an array "),l.qZA(),l.TgZ(211,"td"),l._uU(212,"Callback to invoke when resize starts."),l.qZA(),l.qZA(),l.TgZ(213,"tr"),l.TgZ(214,"td"),l._uU(215,"onResizeEnd"),l.qZA(),l.TgZ(216,"td"),l._uU(217,"event.originalEvent: Original event "),l._UZ(218,"br"),l._uU(219," event.sizes: Sizes of the panels as an array "),l.qZA(),l.TgZ(220,"td"),l._uU(221,"Callback to invoke when resize ends."),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(222,"h5"),l._uU(223,"Templates"),l.qZA(),l.TgZ(224,"div",13),l.TgZ(225,"table",14),l.TgZ(226,"thead"),l.TgZ(227,"tr"),l.TgZ(228,"th"),l._uU(229,"Name"),l.qZA(),l.TgZ(230,"th"),l._uU(231,"Parameters"),l.qZA(),l.qZA(),l.qZA(),l.TgZ(232,"tbody"),l.TgZ(233,"tr"),l.TgZ(234,"td"),l._uU(235,"panel"),l.qZA(),l.TgZ(236,"td"),l._uU(237,"-"),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(238,"h5"),l._uU(239,"Styling"),l.qZA(),l.TgZ(240,"p"),l._uU(241,"Following is the list of structural style classes, for theming classes visit "),l.TgZ(242,"a",15),l._uU(243,"theming"),l.qZA(),l._uU(244," page."),l.qZA(),l.TgZ(245,"div",13),l.TgZ(246,"table",14),l.TgZ(247,"thead"),l.TgZ(248,"tr"),l.TgZ(249,"th"),l._uU(250,"Name"),l.qZA(),l.TgZ(251,"th"),l._uU(252,"Element"),l.qZA(),l.qZA(),l.qZA(),l.TgZ(253,"tbody"),l.TgZ(254,"tr"),l.TgZ(255,"td"),l._uU(256,"p-splitter"),l.qZA(),l.TgZ(257,"td"),l._uU(258,"Container element."),l.qZA(),l.qZA(),l.TgZ(259,"tr"),l.TgZ(260,"td"),l._uU(261,"p-splitter"),l.qZA(),l.TgZ(262,"td"),l._uU(263,"Container element during resize."),l.qZA(),l.qZA(),l.TgZ(264,"tr"),l.TgZ(265,"td"),l._uU(266,"p-splitter-horizontal"),l.qZA(),l.TgZ(267,"td"),l._uU(268,"Container element with horizontal layout."),l.qZA(),l.qZA(),l.TgZ(269,"tr"),l.TgZ(270,"td"),l._uU(271,"p-splitter-vertical"),l.qZA(),l.TgZ(272,"td"),l._uU(273,"Container element with vertical layout."),l.qZA(),l.qZA(),l.TgZ(274,"tr"),l.TgZ(275,"td"),l._uU(276,"p-splitter-panel"),l.qZA(),l.TgZ(277,"td"),l._uU(278,"Splitter panel element."),l.qZA(),l.qZA(),l.TgZ(279,"tr"),l.TgZ(280,"td"),l._uU(281,"p-splitter-gutter"),l.qZA(),l.TgZ(282,"td"),l._uU(283,"Gutter element to use when resizing the panels."),l.qZA(),l.qZA(),l.TgZ(284,"tr"),l.TgZ(285,"td"),l._uU(286,"p-splitter-gutter-handle"),l.qZA(),l.TgZ(287,"td"),l._uU(288,"Handl element of the gutter."),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(289,"h5"),l._uU(290,"Dependencies"),l.qZA(),l.TgZ(291,"p"),l._uU(292,"None."),l.qZA(),l.qZA(),l.TgZ(293,"p-tabPanel",16),l.TgZ(294,"a",17),l.TgZ(295,"span"),l._uU(296,"View on GitHub"),l.qZA(),l.qZA(),l.TgZ(297,"a",18),l.TgZ(298,"span"),l._uU(299,"Edit in StackBlitz"),l.qZA(),l.qZA(),l.TgZ(300,"app-code",12),l.IAx(),l._uU(301,'\n<div class="card">\n    <h5>Horizontal</h5>\n    <p-splitter [style]="{\'height\': \'300px\'}" styleClass="p-mb-5">\n        <ng-template pTemplate>\n            <div class="p-col p-d-flex p-ai-center p-jc-center">\n                Panel 1\n            </div>\n        </ng-template>\n        <ng-template pTemplate>\n            <div class="p-col p-d-flex p-ai-center p-jc-center">\n                Panel 2\n            </div>\n        </ng-template>\n    </p-splitter>\n</div>\n\n<div class="card">\n    <h5>Vertical</h5>\n    <p-splitter [style]="{\'height\': \'300px\'}" styleClass="p-mb-5" layout="vertical">\n        <ng-template pTemplate>\n            <div class="p-col p-d-flex p-ai-center p-jc-center">\n                Panel 1\n            </div>\n        </ng-template>\n        <ng-template pTemplate>\n            <div class="p-col p-d-flex p-ai-center p-jc-center">\n                Panel 2\n            </div>\n        </ng-template>\n    </p-splitter>\n</div>\n\n<div class="card">\n    <h5>Nested</h5>\n    <p-splitter [style]="{\'height\': \'300px\'}" [panelSizes]="[20,80]" [minSizes]="[10,0]" styleClass="p-mb-5">\n        <ng-template pTemplate>\n            <div class="p-col p-d-flex p-ai-center p-jc-center">\n                Panel 1\n            </div>\n        </ng-template>\n        <ng-template pTemplate>\n            <p-splitter layout="vertical" [panelSizes]="[15,85]">\n                <ng-template pTemplate>\n                    <div style="flex-grow: 1;" class="p-d-flex p-ai-center p-jc-center">\n                        Panel 2\n                    </div>\n                </ng-template>\n                <ng-template pTemplate>\n                    <p-splitter [panelSizes]="[20,80]">\n                        <ng-template pTemplate>\n                            <div class="p-col p-d-flex p-ai-center p-jc-center">\n                                Panel 3\n                            </div>\n                        </ng-template>\n                        <ng-template pTemplate>\n                            <div class="p-col p-d-flex p-ai-center p-jc-center">\n                                Panel 4\n                            </div>\n                        </ng-template>\n                    </p-splitter>\n                </ng-template>\n            </p-splitter>\n        </ng-template>\n    </p-splitter>\n</div>\n'),l.fQ9(),l.qZA(),l.qZA(),l.TgZ(302,"p-tabPanel",19),l.YNc(303,C,1,0,"ng-template",20),l.qZA(),l.qZA(),l.qZA()),2&e&&(l.xp6(11),l.Akn(l.DdM(9,P)),l.xp6(6),l.Akn(l.DdM(10,P)),l.xp6(6),l.Akn(l.DdM(11,P)),l.Q6J("panelSizes",l.DdM(12,y))("minSizes",l.DdM(13,E)),l.xp6(219),l.Q6J("routerLink",l.DdM(14,k)))},directives:[a.P,h,Z.jx,m.xf,m.x4,T.h,s.yS],encapsulation:2}),e})(),L=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l.oAB({type:e}),e.\u0275inj=l.cJS({imports:[[s.Bz.forChild([{path:"",component:I}])],s.Bz]}),e})();var M=n(56463),N=n(89191),Q=n(59202);let J=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l.oAB({type:e}),e.\u0275inj=l.cJS({imports:[[i.ez,L,M.hJ,N.Q,Q.LU,d,T.a,a.L]]}),e})()}}]);