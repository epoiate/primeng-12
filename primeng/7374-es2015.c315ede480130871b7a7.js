(self.webpackChunkprimeng=self.webpackChunkprimeng||[]).push([[7374],{36639:function(e,t,n){"use strict";n.d(t,{s:function(){return w},Q:function(){return M}});var i=n(87368),o=n(61116),a=n(78230),s=n(37329),l=n(99713),r=n(10748);function u(e,t){if(1&e&&(i.TgZ(0,"span",10),i._uU(1),i.qZA()),2&e){const e=i.oxw(2);i.uIk("id",e.id+"_header"),i.xp6(1),i.Oqu(e.header)}}function d(e,t){1&e&&i.GkF(0)}function h(e,t){}function g(e,t){1&e&&i.YNc(0,h,0,0,"ng-template")}function p(e,t){if(1&e){const e=i.EpF();i.TgZ(0,"button",11),i.NdJ("click",function(t){return i.CHM(e),i.oxw(2).onIconClick(t)})("keydown.enter",function(t){return i.CHM(e),i.oxw(2).onIconClick(t)}),i._UZ(1,"span"),i.qZA()}if(2&e){const e=i.oxw(2);i.uIk("id",e.id+"-label")("aria-controls",e.id+"-content")("aria-expanded",!e.collapsed),i.xp6(1),i.Tol(e.collapsed?e.expandIcon:e.collapseIcon)}}function c(e,t){if(1&e){const e=i.EpF();i.TgZ(0,"div",6),i.NdJ("click",function(t){return i.CHM(e),i.oxw().onHeaderClick(t)}),i.YNc(1,u,2,2,"span",7),i.Hsn(2,1),i.YNc(3,d,1,0,"ng-container",4),i.TgZ(4,"div",8),i.YNc(5,g,1,0,void 0,4),i.YNc(6,p,2,5,"button",9),i.qZA(),i.qZA()}if(2&e){const e=i.oxw();i.uIk("id",e.id+"-titlebar"),i.xp6(1),i.Q6J("ngIf",e.header),i.xp6(2),i.Q6J("ngTemplateOutlet",e.headerTemplate),i.xp6(2),i.Q6J("ngTemplateOutlet",e.iconTemplate),i.xp6(1),i.Q6J("ngIf",e.toggleable)}}function Z(e,t){1&e&&i.GkF(0)}function m(e,t){1&e&&i.GkF(0)}function T(e,t){if(1&e&&(i.TgZ(0,"div",12),i.Hsn(1,2),i.YNc(2,m,1,0,"ng-container",4),i.qZA()),2&e){const e=i.oxw();i.xp6(2),i.Q6J("ngTemplateOutlet",e.footerTemplate)}}const v=["*",[["p-header"]],[["p-footer"]]],A=function(e){return{"p-panel p-component":!0,"p-panel-toggleable":e}},f=function(e){return{transitionParams:e,height:"0",opacity:"0"}},q=function(e){return{value:"hidden",params:e}},b=function(e){return{transitionParams:e,height:"*",opacity:"1"}},U=function(e){return{value:"visible",params:e}},_=["*","p-header","p-footer"];let k=0,w=(()=>{class e{constructor(e){this.el=e,this.collapsed=!1,this.expandIcon="pi pi-plus",this.collapseIcon="pi pi-minus",this.showHeader=!0,this.toggler="icon",this.collapsedChange=new i.vpe,this.onBeforeToggle=new i.vpe,this.onAfterToggle=new i.vpe,this.transitionOptions="400ms cubic-bezier(0.86, 0, 0.07, 1)",this.id="p-panel-"+k++}ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"header":this.headerTemplate=e.template;break;case"content":this.contentTemplate=e.template;break;case"footer":this.footerTemplate=e.template;break;case"icons":this.iconTemplate=e.template;break;default:this.contentTemplate=e.template}})}onHeaderClick(e){"header"===this.toggler&&this.toggle(e)}onIconClick(e){"icon"===this.toggler&&this.toggle(e)}toggle(e){if(this.animating)return!1;this.animating=!0,this.onBeforeToggle.emit({originalEvent:e,collapsed:this.collapsed}),this.toggleable&&(this.collapsed?this.expand(e):this.collapse(e)),e.preventDefault()}expand(e){this.collapsed=!1,this.collapsedChange.emit(this.collapsed)}collapse(e){this.collapsed=!0,this.collapsedChange.emit(this.collapsed)}getBlockableElement(){return this.el.nativeElement.children[0]}onToggleDone(e){this.animating=!1,this.onAfterToggle.emit({originalEvent:e,collapsed:this.collapsed})}}return e.\u0275fac=function(t){return new(t||e)(i.Y36(i.SBq))},e.\u0275cmp=i.Xpm({type:e,selectors:[["p-panel"]],contentQueries:function(e,t,n){if(1&e&&(i.Suo(n,a.$_,5),i.Suo(n,a.jx,4)),2&e){let e;i.iGM(e=i.CRH())&&(t.footerFacet=e.first),i.iGM(e=i.CRH())&&(t.templates=e)}},hostAttrs:[1,"p-element"],inputs:{toggleable:"toggleable",header:"header",collapsed:"collapsed",style:"style",styleClass:"styleClass",expandIcon:"expandIcon",collapseIcon:"collapseIcon",showHeader:"showHeader",toggler:"toggler",transitionOptions:"transitionOptions"},outputs:{collapsedChange:"collapsedChange",onBeforeToggle:"onBeforeToggle",onAfterToggle:"onAfterToggle"},ngContentSelectors:_,decls:7,vars:22,consts:[[3,"ngClass","ngStyle"],["class","p-panel-header",3,"click",4,"ngIf"],["role","region",1,"p-toggleable-content"],[1,"p-panel-content"],[4,"ngTemplateOutlet"],["class","p-panel-footer",4,"ngIf"],[1,"p-panel-header",3,"click"],["class","p-panel-title",4,"ngIf"],[1,"p-panel-icons"],["type","button","class","p-panel-header-icon p-panel-toggler p-link","pRipple","","role","tab",3,"click","keydown.enter",4,"ngIf"],[1,"p-panel-title"],["type","button","pRipple","","role","tab",1,"p-panel-header-icon","p-panel-toggler","p-link",3,"click","keydown.enter"],[1,"p-panel-footer"]],template:function(e,t){1&e&&(i.F$t(v),i.TgZ(0,"div",0),i.YNc(1,c,7,5,"div",1),i.TgZ(2,"div",2),i.NdJ("@panelContent.done",function(e){return t.onToggleDone(e)}),i.TgZ(3,"div",3),i.Hsn(4),i.YNc(5,Z,1,0,"ng-container",4),i.qZA(),i.YNc(6,T,3,1,"div",5),i.qZA(),i.qZA()),2&e&&(i.Tol(t.styleClass),i.Q6J("ngClass",i.VKq(12,A,t.toggleable))("ngStyle",t.style),i.uIk("id",t.id),i.xp6(1),i.Q6J("ngIf",t.showHeader),i.xp6(1),i.Q6J("@panelContent",t.collapsed?i.VKq(16,q,i.VKq(14,f,t.animating?t.transitionOptions:"0ms")):i.VKq(20,U,i.VKq(18,b,t.animating?t.transitionOptions:"0ms"))),i.uIk("id",t.id+"-content")("aria-hidden",t.collapsed)("aria-labelledby",t.id+"-titlebar"),i.xp6(3),i.Q6J("ngTemplateOutlet",t.contentTemplate),i.xp6(1),i.Q6J("ngIf",t.footerFacet||t.footerTemplate))},directives:[o.mk,o.PC,o.O5,o.tP,r.H],styles:[".p-panel-header{display:flex;justify-content:space-between;align-items:center}.p-panel-title{line-height:1}.p-panel-header-icon{display:inline-flex;justify-content:center;align-items:center;cursor:pointer;text-decoration:none;overflow:hidden;position:relative}"],encapsulation:2,data:{animation:[(0,l.X$)("panelContent",[(0,l.SB)("hidden",(0,l.oB)({height:"0",overflow:"hidden"})),(0,l.SB)("void",(0,l.oB)({height:"{{height}}"}),{params:{height:"0"}}),(0,l.SB)("visible",(0,l.oB)({height:"*"})),(0,l.eR)("visible <=> hidden",[(0,l.oB)({overflow:"hidden"}),(0,l.jt)("{{transitionParams}}")]),(0,l.eR)("void => hidden",(0,l.jt)("{{transitionParams}}")),(0,l.eR)("void => visible",(0,l.jt)("{{transitionParams}}"))])]},changeDetection:0}),e})(),M=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[[o.ez,a.m8,s.T],a.m8]}),e})()},89191:function(e,t,n){"use strict";n.d(t,{Q:function(){return i.Q}});var i=n(36639)},90628:function(e,t,n){"use strict";n.d(t,{h:function(){return l},a:function(){return r}});var i=n(61116),o=n(87368);const a=["code"],s=["*"];let l=(()=>{class e{constructor(e){this.el=e,this.lang="markup"}ngAfterViewInit(){window.Prism&&window.Prism.highlightElement(this.codeViewChild.nativeElement)}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(o.SBq))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-code"]],viewQuery:function(e,t){if(1&e&&o.Gf(a,5),2&e){let e;o.iGM(e=o.CRH())&&(t.codeViewChild=e.first)}},inputs:{lang:"lang"},ngContentSelectors:s,decls:5,vars:1,consts:[[3,"ngClass"],["code",""]],template:function(e,t){1&e&&(o.F$t(),o.TgZ(0,"pre",0),o.TgZ(1,"code",null,1),o.Hsn(3),o._uU(4,"\n"),o.qZA(),o.qZA()),2&e&&o.Q6J("ngClass","language-"+t.lang)},directives:[i.mk],encapsulation:2}),e})(),r=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[i.ez]]}),e})()},57374:function(e,t,n){"use strict";n.r(t),n.d(t,{KnobDemoModule:function(){return b}});var i=n(61116),o=n(11462),a=n(56463),s=n(89191),l=n(59202),r=n(87368);function u(e,t){if(1&e&&(r.O4$(),r.TgZ(0,"text",5),r._uU(1),r.qZA()),2&e){const e=r.oxw();r.uIk("x",50)("y",57)("fill",e.textColor)("name",e.name),r.xp6(1),r.Oqu(e.valueToDisplay())}}const d={provide:o.JU,useExisting:(0,r.Gpc)(()=>h),multi:!0};let h=(()=>{class e{constructor(e,t){this.cd=e,this.el=t,this.valueColor="var(--primary-color, Black)",this.rangeColor="var(--surface-d, LightGray)",this.textColor="var(--text-color-secondary, Black)",this.valueTemplate="{value}",this.size=100,this.step=1,this.min=0,this.max=100,this.strokeWidth=14,this.showValue=!0,this.readonly=!1,this.onChange=new r.vpe,this.radius=40,this.midX=50,this.midY=50,this.minRadians=4*Math.PI/3,this.maxRadians=-Math.PI/3,this.value=null,this.onModelChange=()=>{},this.onModelTouched=()=>{}}mapRange(e,t,n,i,o){return(e-t)*(o-i)/(n-t)+i}onClick(e){this.disabled||this.readonly||this.updateValue(e.offsetX,e.offsetY)}updateValue(e,t){let n=Math.atan2(this.size/2-t,e-this.size/2),i=-Math.PI/2-Math.PI/6;this.updateModel(n,i)}updateModel(e,t){let n;if(e>this.maxRadians)n=this.mapRange(e,this.minRadians,this.maxRadians,this.min,this.max);else{if(!(e<t))return;n=this.mapRange(e+2*Math.PI,this.minRadians,this.maxRadians,this.min,this.max)}let i=Math.round((n-this.min)/this.step)*this.step+this.min;this.value=i,this.onModelChange(this.value),this.onChange.emit(this.value)}onMouseDown(e){this.disabled||this.readonly||(this.windowMouseMoveListener=this.onMouseMove.bind(this),this.windowMouseUpListener=this.onMouseUp.bind(this),window.addEventListener("mousemove",this.windowMouseMoveListener),window.addEventListener("mouseup",this.windowMouseUpListener),e.preventDefault())}onMouseUp(e){this.disabled||this.readonly||(window.removeEventListener("mousemove",this.windowMouseMoveListener),window.removeEventListener("mouseup",this.windowMouseUpListener),this.windowMouseUpListener=null,this.windowMouseMoveListener=null,e.preventDefault())}onTouchStart(e){this.disabled||this.readonly||(this.windowTouchMoveListener=this.onTouchMove.bind(this),this.windowTouchEndListener=this.onTouchEnd.bind(this),window.addEventListener("touchmove",this.windowTouchMoveListener),window.addEventListener("touchend",this.windowTouchEndListener),e.preventDefault())}onTouchEnd(e){this.disabled||this.readonly||(window.removeEventListener("touchmove",this.windowTouchMoveListener),window.removeEventListener("touchend",this.windowTouchEndListener),this.windowTouchMoveListener=null,this.windowTouchEndListener=null,e.preventDefault())}onMouseMove(e){this.disabled||this.readonly||(this.updateValue(e.offsetX,e.offsetY),e.preventDefault())}onTouchMove(e){if(!this.disabled&&!this.readonly&&1==e.touches.length){const t=this.el.nativeElement.children[0].getBoundingClientRect(),n=e.targetTouches.item(0);this.updateValue(n.clientX-t.left,n.clientY-t.top)}}writeValue(e){this.value=e,this.cd.markForCheck()}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.disabled=e,this.cd.markForCheck()}containerClass(){return{"p-knob p-component":!0,"p-disabled":this.disabled}}rangePath(){return`M ${this.minX()} ${this.minY()} A ${this.radius} ${this.radius} 0 1 1 ${this.maxX()} ${this.maxY()}`}valuePath(){return`M ${this.zeroX()} ${this.zeroY()} A ${this.radius} ${this.radius} 0 ${this.largeArc()} ${this.sweep()} ${this.valueX()} ${this.valueY()}`}zeroRadians(){return this.mapRange(this.min>0&&this.max>0?this.min:0,this.min,this.max,this.minRadians,this.maxRadians)}valueRadians(){return this.mapRange(this._value,this.min,this.max,this.minRadians,this.maxRadians)}minX(){return this.midX+Math.cos(this.minRadians)*this.radius}minY(){return this.midY-Math.sin(this.minRadians)*this.radius}maxX(){return this.midX+Math.cos(this.maxRadians)*this.radius}maxY(){return this.midY-Math.sin(this.maxRadians)*this.radius}zeroX(){return this.midX+Math.cos(this.zeroRadians())*this.radius}zeroY(){return this.midY-Math.sin(this.zeroRadians())*this.radius}valueX(){return this.midX+Math.cos(this.valueRadians())*this.radius}valueY(){return this.midY-Math.sin(this.valueRadians())*this.radius}largeArc(){return Math.abs(this.zeroRadians()-this.valueRadians())<Math.PI?0:1}sweep(){return this.valueRadians()>this.zeroRadians()?0:1}valueToDisplay(){return this.valueTemplate.replace("{value}",this._value.toString())}get _value(){return null!=this.value?this.value:this.min}}return e.\u0275fac=function(t){return new(t||e)(r.Y36(r.sBO),r.Y36(r.SBq))},e.\u0275cmp=r.Xpm({type:e,selectors:[["p-knob"]],hostAttrs:[1,"p-element"],inputs:{styleClass:"styleClass",style:"style",severity:"severity",valueColor:"valueColor",rangeColor:"rangeColor",textColor:"textColor",valueTemplate:"valueTemplate",name:"name",size:"size",step:"step",min:"min",max:"max",strokeWidth:"strokeWidth",disabled:"disabled",showValue:"showValue",readonly:"readonly"},outputs:{onChange:"onChange"},features:[r._Bn([d])],decls:5,vars:15,consts:[[3,"ngClass","ngStyle"],["viewBox","0 0 100 100",3,"click","mousedown","mouseup","touchstart","touchend"],[1,"p-knob-range"],[1,"p-knob-value"],["text-anchor","middle","class","p-knob-text",4,"ngIf"],["text-anchor","middle",1,"p-knob-text"]],template:function(e,t){1&e&&(r.TgZ(0,"div",0),r.O4$(),r.TgZ(1,"svg",1),r.NdJ("click",function(e){return t.onClick(e)})("mousedown",function(e){return t.onMouseDown(e)})("mouseup",function(e){return t.onMouseUp(e)})("touchstart",function(e){return t.onTouchStart(e)})("touchend",function(e){return t.onTouchEnd(e)}),r._UZ(2,"path",2),r._UZ(3,"path",3),r.YNc(4,u,2,5,"text",4),r.qZA(),r.qZA()),2&e&&(r.Tol(t.styleClass),r.Q6J("ngClass",t.containerClass())("ngStyle",t.style),r.xp6(1),r.Udp("width",t.size+"px")("height",t.size+"px"),r.xp6(1),r.uIk("d",t.rangePath())("stroke-width",t.strokeWidth)("stroke",t.rangeColor),r.xp6(1),r.uIk("d",t.valuePath())("stroke-width",t.strokeWidth)("stroke",t.valueColor),r.xp6(1),r.Q6J("ngIf",t.showValue))},directives:[i.mk,i.PC,i.O5],styles:["@keyframes dash-frame{to{stroke-dashoffset:0}}.p-knob-range{fill:none;transition:stroke .1s ease-in}.p-knob-value{animation-name:dash-frame;animation-fill-mode:forwards;fill:none}.p-knob-text{font-size:1.3rem;text-align:center}"],encapsulation:2,changeDetection:0}),e})(),g=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({imports:[[i.ez]]}),e})();var p=n(42066),c=n(12774),Z=n(47299),m=n(90628),T=n(74136);function v(e,t){1&e&&r._UZ(0,"iframe",29)}const A=function(){return["/theming"]};let f=(()=>{class e{constructor(){this.value1=0,this.value2=50,this.value3=75,this.value4=10,this.value5=40,this.value6=60,this.value7=40,this.value8=60,this.value9=50}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Xpm({type:e,selectors:[["ng-component"]],decls:308,vars:18,consts:[[1,"content-section","introduction"],[1,"feature-intro"],["github","knob","stackblitz","knob-demo"],[1,"content-section","implementation"],[1,"card"],[1,"p-grid","p-formgrid","p-text-center"],[1,"p-field","p-col-12","p-md-4"],[3,"ngModel","ngModelChange"],[3,"ngModel","readonly","ngModelChange"],[3,"ngModel","disabled","ngModelChange"],[1,"p-mt-3"],[3,"ngModel","min","max","ngModelChange"],[3,"ngModel","step","ngModelChange"],["valueTemplate","{value}%",3,"ngModel","ngModelChange"],[3,"ngModel","strokeWidth","ngModelChange"],[3,"ngModel","size","ngModelChange"],["valueColor","SlateGray","rangeColor","MediumTurquoise",3,"ngModel","ngModelChange"],[1,"content-section","documentation"],["header","Documentation"],["lang","typescript"],["lang","markup"],[1,"doc-tablewrapper"],[1,"doc-table"],["href","#",3,"routerLink"],["header","Source"],["href","https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/knob","target","_blank",1,"btn-viewsource"],["href","https://stackblitz.com/edit/primeng-knob-demo","target","_blank",1,"btn-viewsource",2,"margin-left",".5em"],["header","StackBlitz"],["pTemplate","content"],["src","https://stackblitz.com/edit/primeng-knob-demo?embed=1",2,"width","100%","height","768px","border","none"]],template:function(e,t){1&e&&(r.TgZ(0,"div",0),r.TgZ(1,"div",1),r.TgZ(2,"h1"),r._uU(3,"Knob"),r.qZA(),r.TgZ(4,"p"),r._uU(5,"Knob is a form component to define number inputs with a dial."),r.qZA(),r.qZA(),r._UZ(6,"app-demoActions",2),r.qZA(),r.TgZ(7,"div",3),r.TgZ(8,"div",4),r.TgZ(9,"div",5),r.TgZ(10,"div",6),r.TgZ(11,"h5"),r._uU(12,"Basic"),r.qZA(),r.TgZ(13,"p-knob",7),r.NdJ("ngModelChange",function(e){return t.value1=e}),r.qZA(),r.qZA(),r.TgZ(14,"div",6),r.TgZ(15,"h5"),r._uU(16,"Readonly"),r.qZA(),r.TgZ(17,"p-knob",8),r.NdJ("ngModelChange",function(e){return t.value2=e}),r.qZA(),r.qZA(),r.TgZ(18,"div",6),r.TgZ(19,"h5"),r._uU(20,"Disabled"),r.qZA(),r.TgZ(21,"p-knob",9),r.NdJ("ngModelChange",function(e){return t.value3=e}),r.qZA(),r.qZA(),r.TgZ(22,"div",6),r.TgZ(23,"h5",10),r._uU(24,"Min/Max"),r.qZA(),r.TgZ(25,"p-knob",11),r.NdJ("ngModelChange",function(e){return t.value4=e}),r.qZA(),r.qZA(),r.TgZ(26,"div",6),r.TgZ(27,"h5",10),r._uU(28,"Step"),r.qZA(),r.TgZ(29,"p-knob",12),r.NdJ("ngModelChange",function(e){return t.value5=e}),r.qZA(),r.qZA(),r.TgZ(30,"div",6),r.TgZ(31,"h5",10),r._uU(32,"Template"),r.qZA(),r.TgZ(33,"p-knob",13),r.NdJ("ngModelChange",function(e){return t.value6=e}),r.qZA(),r.qZA(),r.TgZ(34,"div",6),r.TgZ(35,"h5",10),r._uU(36,"Stroke"),r.qZA(),r.TgZ(37,"p-knob",14),r.NdJ("ngModelChange",function(e){return t.value7=e}),r.qZA(),r.qZA(),r.TgZ(38,"div",6),r.TgZ(39,"h5",10),r._uU(40,"Size"),r.qZA(),r.TgZ(41,"p-knob",15),r.NdJ("ngModelChange",function(e){return t.value8=e}),r.qZA(),r.qZA(),r.TgZ(42,"div",6),r.TgZ(43,"h5",10),r._uU(44,"Color"),r.qZA(),r.TgZ(45,"p-knob",16),r.NdJ("ngModelChange",function(e){return t.value9=e}),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.TgZ(46,"div",17),r.TgZ(47,"p-tabView"),r.TgZ(48,"p-tabPanel",18),r.TgZ(49,"h5"),r._uU(50,"Import"),r.qZA(),r.TgZ(51,"app-code",19),r.IAx(),r._uU(52,"\nimport {KnobModule} from 'primeng/knob';\n"),r.fQ9(),r.qZA(),r.TgZ(53,"h5"),r._uU(54,"Getting Started"),r.qZA(),r.TgZ(55,"p"),r._uU(56,"Knob is an input component and used with the standard "),r.TgZ(57,"i"),r._uU(58,"ngModel"),r.qZA(),r._uU(59," directive."),r.qZA(),r.TgZ(60,"app-code",20),r.IAx(),r._uU(61,'\n<p-knob [(ngModel)]="value"></p-knob>\n'),r.fQ9(),r.qZA(),r.TgZ(62,"app-code",19),r.IAx(),r._uU(63,"\nvalue: number = 0;\n"),r.fQ9(),r.qZA(),r.TgZ(64,"h5"),r._uU(65,"Minimum and Maximum"),r.qZA(),r.TgZ(66,"p"),r._uU(67,"Boundaries are configured with the "),r.TgZ(68,"i"),r._uU(69,"min"),r.qZA(),r._uU(70," and "),r.TgZ(71,"i"),r._uU(72,"max"),r.qZA(),r._uU(73," values whose defaults are 0 and 100 respectively."),r.qZA(),r.TgZ(74,"app-code",20),r.IAx(),r._uU(75,'\n<p-knob [(ngModel)]="value" [min]="-50" [max]="50"></p-knob>\n'),r.fQ9(),r.qZA(),r.TgZ(76,"h5"),r._uU(77,"Step"),r.qZA(),r.TgZ(78,"p"),r._uU(79,"Step factor is 1 by default and can be customized with "),r.TgZ(80,"i"),r._uU(81,"step"),r.qZA(),r._uU(82," option."),r.qZA(),r.TgZ(83,"app-code",20),r.IAx(),r._uU(84,'\n<p-knob [(ngModel)]="value" valueColor="SlateGray" rangeColor="MediumTurquoise"></p-knob>\n'),r.fQ9(),r.qZA(),r.TgZ(85,"h5"),r._uU(86,"Size"),r.qZA(),r.TgZ(87,"p"),r._uU(88,"Default size of the Knob is 100 pixels for width and height, use the "),r.TgZ(89,"i"),r._uU(90,"size"),r.qZA(),r._uU(91," property to customize it per your requirements."),r.qZA(),r.TgZ(92,"app-code",20),r.IAx(),r._uU(93,'\n<p-knob [(ngModel)]="value" [size]="200"></p-knob>\n'),r.fQ9(),r.qZA(),r.TgZ(94,"h5"),r._uU(95,"Properties"),r.qZA(),r.TgZ(96,"div",21),r.TgZ(97,"table",22),r.TgZ(98,"thead"),r.TgZ(99,"tr"),r.TgZ(100,"th"),r._uU(101,"Name"),r.qZA(),r.TgZ(102,"th"),r._uU(103,"Type"),r.qZA(),r.TgZ(104,"th"),r._uU(105,"Default"),r.qZA(),r.TgZ(106,"th"),r._uU(107,"Description"),r.qZA(),r.qZA(),r.qZA(),r.TgZ(108,"tbody"),r.TgZ(109,"tr"),r.TgZ(110,"td"),r._uU(111,"size"),r.qZA(),r.TgZ(112,"td"),r._uU(113,"number"),r.qZA(),r.TgZ(114,"td"),r._uU(115,"100"),r.qZA(),r.TgZ(116,"td"),r._uU(117,"Size of the component in pixels."),r.qZA(),r.qZA(),r.TgZ(118,"tr"),r.TgZ(119,"td"),r._uU(120,"disabled"),r.qZA(),r.TgZ(121,"td"),r._uU(122,"boolean"),r.qZA(),r.TgZ(123,"td"),r._uU(124,"false"),r.qZA(),r.TgZ(125,"td"),r._uU(126,"When present, it specifies that the component should be disabled."),r.qZA(),r.qZA(),r.TgZ(127,"tr"),r.TgZ(128,"td"),r._uU(129,"readonly"),r.qZA(),r.TgZ(130,"td"),r._uU(131,"boolean"),r.qZA(),r.TgZ(132,"td"),r._uU(133,"false"),r.qZA(),r.TgZ(134,"td"),r._uU(135,"When present, it specifies that the component value cannot be edited."),r.qZA(),r.qZA(),r.TgZ(136,"tr"),r.TgZ(137,"td"),r._uU(138,"step"),r.qZA(),r.TgZ(139,"td"),r._uU(140,"number"),r.qZA(),r.TgZ(141,"td"),r._uU(142,"null"),r.qZA(),r.TgZ(143,"td"),r._uU(144,"Step factor to increment/decrement the value."),r.qZA(),r.qZA(),r.TgZ(145,"tr"),r.TgZ(146,"td"),r._uU(147,"min"),r.qZA(),r.TgZ(148,"td"),r._uU(149,"number"),r.qZA(),r.TgZ(150,"td"),r._uU(151,"0"),r.qZA(),r.TgZ(152,"td"),r._uU(153,"Mininum boundary value."),r.qZA(),r.qZA(),r.TgZ(154,"tr"),r.TgZ(155,"td"),r._uU(156,"max"),r.qZA(),r.TgZ(157,"td"),r._uU(158,"number"),r.qZA(),r.TgZ(159,"td"),r._uU(160,"100"),r.qZA(),r.TgZ(161,"td"),r._uU(162,"Maximum boundary value."),r.qZA(),r.qZA(),r.TgZ(163,"tr"),r.TgZ(164,"td"),r._uU(165,"valueColor"),r.qZA(),r.TgZ(166,"td"),r._uU(167,"string"),r.qZA(),r.TgZ(168,"td"),r._uU(169,"null"),r.qZA(),r.TgZ(170,"td"),r._uU(171,"Background of the value."),r.qZA(),r.qZA(),r.TgZ(172,"tr"),r.TgZ(173,"td"),r._uU(174,"rangeColor"),r.qZA(),r.TgZ(175,"td"),r._uU(176,"number"),r.qZA(),r.TgZ(177,"td"),r._uU(178,"null"),r.qZA(),r.TgZ(179,"td"),r._uU(180,"Background color of the range."),r.qZA(),r.qZA(),r.TgZ(181,"tr"),r.TgZ(182,"td"),r._uU(183,"textColor"),r.qZA(),r.TgZ(184,"td"),r._uU(185,"number"),r.qZA(),r.TgZ(186,"td"),r._uU(187,"null"),r.qZA(),r.TgZ(188,"td"),r._uU(189,"Color of the value text."),r.qZA(),r.qZA(),r.TgZ(190,"tr"),r.TgZ(191,"td"),r._uU(192,"strokeWidth"),r.qZA(),r.TgZ(193,"td"),r._uU(194,"number"),r.qZA(),r.TgZ(195,"td"),r._uU(196,"14"),r.qZA(),r.TgZ(197,"td"),r._uU(198,"Width of the knob stroke."),r.qZA(),r.qZA(),r.TgZ(199,"tr"),r.TgZ(200,"td"),r._uU(201,"showValue"),r.qZA(),r.TgZ(202,"td"),r._uU(203,"boolean"),r.qZA(),r.TgZ(204,"td"),r._uU(205,"true"),r.qZA(),r.TgZ(206,"td"),r._uU(207,"Whether the show the value inside the knob."),r.qZA(),r.qZA(),r.TgZ(208,"tr"),r.TgZ(209,"td"),r._uU(210,"valueTemplate"),r.qZA(),r.TgZ(211,"td"),r._uU(212,"string"),r.qZA(),r.TgZ(213,"td"),r._uU(214,"{value}"),r.qZA(),r.TgZ(215,"td"),r._uU(216,"Template string of the value."),r.qZA(),r.qZA(),r.TgZ(217,"tr"),r.TgZ(218,"td"),r._uU(219,"style"),r.qZA(),r.TgZ(220,"td"),r._uU(221,"object"),r.qZA(),r.TgZ(222,"td"),r._uU(223,"null"),r.qZA(),r.TgZ(224,"td"),r._uU(225,"Inline style of the component."),r.qZA(),r.qZA(),r.TgZ(226,"tr"),r.TgZ(227,"td"),r._uU(228,"styleClass"),r.qZA(),r.TgZ(229,"td"),r._uU(230,"string"),r.qZA(),r.TgZ(231,"td"),r._uU(232,"null"),r.qZA(),r.TgZ(233,"td"),r._uU(234,"Style class of the component."),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.TgZ(235,"h5"),r._uU(236,"Events"),r.qZA(),r.TgZ(237,"div",21),r.TgZ(238,"table",22),r.TgZ(239,"thead"),r.TgZ(240,"tr"),r.TgZ(241,"th"),r._uU(242,"Name"),r.qZA(),r.TgZ(243,"th"),r._uU(244,"Parameters"),r.qZA(),r.TgZ(245,"th"),r._uU(246,"Description"),r.qZA(),r.qZA(),r.qZA(),r.TgZ(247,"tbody"),r.TgZ(248,"tr"),r.TgZ(249,"td"),r._uU(250,"onChange"),r.qZA(),r.TgZ(251,"td"),r._uU(252,"value: New value "),r.qZA(),r.TgZ(253,"td"),r._uU(254,"Callback to invoke when the value changes."),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.TgZ(255,"h5"),r._uU(256,"Styling"),r.qZA(),r.TgZ(257,"p"),r._uU(258,"Following is the list of structural style classes, for theming classes visit "),r.TgZ(259,"a",23),r._uU(260,"theming"),r.qZA(),r._uU(261," page."),r.qZA(),r.TgZ(262,"div",21),r.TgZ(263,"table",22),r.TgZ(264,"thead"),r.TgZ(265,"tr"),r.TgZ(266,"th"),r._uU(267,"Name"),r.qZA(),r.TgZ(268,"th"),r._uU(269,"Element"),r.qZA(),r.qZA(),r.qZA(),r.TgZ(270,"tbody"),r.TgZ(271,"tr"),r.TgZ(272,"td"),r._uU(273,"p-knob"),r.qZA(),r.TgZ(274,"td"),r._uU(275,"Container element."),r.qZA(),r.qZA(),r.TgZ(276,"tr"),r.TgZ(277,"td"),r._uU(278,"p-knob-text"),r.qZA(),r.TgZ(279,"td"),r._uU(280,"Text element."),r.qZA(),r.qZA(),r.TgZ(281,"tr"),r.TgZ(282,"td"),r._uU(283,"p-knob-value"),r.qZA(),r.TgZ(284,"td"),r._uU(285,"Value element."),r.qZA(),r.qZA(),r.TgZ(286,"tr"),r.TgZ(287,"td"),r._uU(288,"p-knob-text"),r.qZA(),r.TgZ(289,"td"),r._uU(290,"Text element."),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.TgZ(291,"h5"),r._uU(292,"Dependencies"),r.qZA(),r.TgZ(293,"p"),r._uU(294,"None."),r.qZA(),r.qZA(),r.TgZ(295,"p-tabPanel",24),r.TgZ(296,"a",25),r.TgZ(297,"span"),r._uU(298,"View on GitHub"),r.qZA(),r.qZA(),r.TgZ(299,"a",26),r.TgZ(300,"span"),r._uU(301,"Edit in StackBlitz"),r.qZA(),r.qZA(),r.TgZ(302,"app-code",20),r.IAx(),r._uU(303,'\n<div class="p-grid p-formgrid p-text-center">\n    <div class="p-field p-col-12 p-md-4">\n        <h5>Basic</h5>\n        <p-knob [(ngModel)]="value1"></p-knob>\n    </div>\n    <div class="p-field p-col-12 p-md-4">\n        <h5>Readonly</h5>\n        <p-knob [(ngModel)]="value2" [readonly]="true"></p-knob>\n    </div>\n    <div class="p-field p-col-12 p-md-4">\n        <h5>Disabled</h5>\n        <p-knob [(ngModel)]="value3" [disabled]="true"></p-knob>\n    </div>\n    <div class="p-field p-col-12 p-md-4">\n        <h5 class="p-mt-3">Min/Max</h5>\n        <p-knob [(ngModel)]="value4" [min]="-50" [max]="50"></p-knob>\n    </div>\n    <div class="p-field p-col-12 p-md-4">\n        <h5 class="p-mt-3">Step</h5>\n        <p-knob [(ngModel)]="value5" [step]="10"></p-knob>\n    </div>\n    <div class="p-field p-col-12 p-md-4">\n        <h5 class="p-mt-3">Template</h5>\n        <p-knob [(ngModel)]="value6" valueTemplate="{value}%"></p-knob>\n    </div>\n    <div class="p-field p-col-12 p-md-4">\n        <h5 class="p-mt-3">Stroke</h5>\n        <p-knob [(ngModel)]="value7" [strokeWidth]="5"></p-knob>\n    </div>\n    <div class="p-field p-col-12 p-md-4">\n        <h5 class="p-mt-3">Size</h5>\n        <p-knob [(ngModel)]="value8" [size]="200"></p-knob>\n    </div>\n    <div class="p-field p-col-12 p-md-4">\n        <h5 class="p-mt-3">Color</h5>\n        <p-knob [(ngModel)]="value9" valueColor="SlateGray" rangeColor="MediumTurquoise"></p-knob>\n    </div>\n</div>\n'),r.fQ9(),r.qZA(),r.TgZ(304,"app-code",19),r.IAx(),r._uU(305,"\nexport class KnobDemo {\n\n    value1: number = 0;\n\n    value2: number = 50;\n\n    value3: number = 75;\n\n    value4: number = 10;\n\n    value5: number = 40;\n\n    value6: number = 60;\n\n    value7: number = 40;\n\n    value8: number = 60;\n\n    value9: number = 50;\n    \n}\n"),r.fQ9(),r.qZA(),r.qZA(),r.TgZ(306,"p-tabPanel",27),r.YNc(307,v,1,0,"ng-template",28),r.qZA(),r.qZA(),r.qZA()),2&e&&(r.xp6(13),r.Q6J("ngModel",t.value1),r.xp6(4),r.Q6J("ngModel",t.value2)("readonly",!0),r.xp6(4),r.Q6J("ngModel",t.value3)("disabled",!0),r.xp6(4),r.Q6J("ngModel",t.value4)("min",-50)("max",50),r.xp6(4),r.Q6J("ngModel",t.value5)("step",10),r.xp6(4),r.Q6J("ngModel",t.value6),r.xp6(4),r.Q6J("ngModel",t.value7)("strokeWidth",5),r.xp6(4),r.Q6J("ngModel",t.value8)("size",200),r.xp6(4),r.Q6J("ngModel",t.value9),r.xp6(214),r.Q6J("routerLink",r.DdM(17,A)))},directives:[c.P,h,o.JJ,o.On,Z.xf,Z.x4,m.h,p.yS,T.jx],encapsulation:2}),e})(),q=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({imports:[[p.Bz.forChild([{path:"",component:f}])],p.Bz]}),e})(),b=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({imports:[[i.ez,q,a.hJ,s.Q,l.LU,o.u5,g,c.L,m.a]]}),e})()}}]);