(self.webpackChunkprimeng=self.webpackChunkprimeng||[]).push([[4810],{90628:function(t,e,o){"use strict";o.d(e,{h:function(){return s},a:function(){return a}});var n=o(61116),r=o(87368);const i=["code"],c=["*"];let s=(()=>{class t{constructor(t){this.el=t,this.lang="markup"}ngAfterViewInit(){window.Prism&&window.Prism.highlightElement(this.codeViewChild.nativeElement)}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(r.SBq))},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-code"]],viewQuery:function(t,e){if(1&t&&r.Gf(i,5),2&t){let t;r.iGM(t=r.CRH())&&(e.codeViewChild=t.first)}},inputs:{lang:"lang"},ngContentSelectors:c,decls:5,vars:1,consts:[[3,"ngClass"],["code",""]],template:function(t,e){1&t&&(r.F$t(),r.TgZ(0,"pre",0),r.TgZ(1,"code",null,1),r.Hsn(3),r._uU(4,"\n"),r.qZA(),r.qZA()),2&t&&r.Q6J("ngClass","language-"+e.lang)},directives:[n.mk],encapsulation:2}),t})(),a=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[n.ez]]}),t})()},34810:function(t,e,o){"use strict";o.r(e),o.d(e,{ColorsDemoModule:function(){return f}});var n=o(61116),r=o(42066),i=o(87368),c=o(48517),s=o(90628);const a=function(t,e){return{backgroundColor:t,color:e}};function l(t,e){if(1&t&&(i.TgZ(0,"div",11),i._uU(1),i.qZA()),2&t){const t=i.oxw().$implicit,e=i.oxw().$implicit;i.Q6J("ngStyle",i.WLB(3,a,"var(--"+e+"-"+t,t>500?"#fff":"#000")),i.xp6(1),i.AsE(" ",e,"-",t," ")}}function g(t,e){if(1&t&&(i.TgZ(0,"div"),i.YNc(1,l,2,6,"div",10),i.qZA()),2&t){const t=e.$implicit;i.xp6(1),i.Q6J("ngIf",0!==t)}}function u(t,e){if(1&t&&(i.TgZ(0,"div",9),i.YNc(1,g,2,1,"div",8),i.qZA()),2&t){const t=i.oxw();i.xp6(1),i.Q6J("ngForOf",t.shades)}}function Z(t,e){if(1&t&&(i.TgZ(0,"div"),i.TgZ(1,"div",11),i._uU(2),i.qZA(),i.qZA()),2&t){const t=e.$implicit,o=i.oxw();i.xp6(1),i.Q6J("ngStyle",i.WLB(2,a,"var(--surface-"+t,o.config.dark?t>400?"#000":"#fff":t>500?"#fff":"#000")),i.xp6(1),i.hij(" surface-",t," ")}}let d=(()=>{class t{constructor(t){this.configService=t,this.colors=["blue","green","yellow","cyan","pink","indigo","teal","orange","bluegray","purple","gray"],this.shades=[0,50,100,200,300,400,500,600,700,800,900]}ngOnInit(){this.config=this.configService.config,this.subscription=this.configService.configUpdate$.subscribe(t=>this.config=t)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(c._))},t.\u0275cmp=i.Xpm({type:t,selectors:[["ng-component"]],decls:76,vars:2,consts:[[1,"content-section","documentation","implementation"],["lang","markup"],[1,"doc-tablewrapper"],[1,"doc-table"],[1,"card"],[1,"p-d-flex","p-flex-wrap"],["class","color-stack p-mr-6 p-mb-6",4,"ngFor","ngForOf"],[1,"color-stack"],[4,"ngFor","ngForOf"],[1,"color-stack","p-mr-6","p-mb-6"],["class","color-box",3,"ngStyle",4,"ngIf"],[1,"color-box",3,"ngStyle"]],template:function(t,e){1&t&&(i.TgZ(0,"div",0),i.TgZ(1,"h1"),i._uU(2,"Colors"),i.qZA(),i.TgZ(3,"p"),i._uU(4,"Each PrimeNG theme exports its own color palette."),i.qZA(),i.TgZ(5,"h5"),i._uU(6,"Getting Started"),i.qZA(),i.TgZ(7,"p"),i._uU(8,"Colors are exported as CSS variables and used with the standard "),i.TgZ(9,"i"),i._uU(10,"var"),i.qZA(),i._uU(11," syntax such as "),i.TgZ(12,"i"),i._uU(13,"var(--text-color)"),i.qZA(),i._uU(14,"."),i.qZA(),i.TgZ(15,"app-code",1),i.IAx(),i._uU(16,"\n<span [ngStyle]=\"{color:'var(--text-color)'}\"></span>\n"),i.fQ9(),i.qZA(),i.TgZ(17,"h5"),i._uU(18,"General Colors"),i.qZA(),i.TgZ(19,"p"),i._uU(20,"These are common variables used throughout the theme."),i.qZA(),i.TgZ(21,"div",2),i.TgZ(22,"table",3),i.TgZ(23,"thead"),i.TgZ(24,"tr"),i.TgZ(25,"th"),i._uU(26,"Variable"),i.qZA(),i.TgZ(27,"th"),i._uU(28,"Description"),i.qZA(),i.qZA(),i.qZA(),i.TgZ(29,"tbody"),i.TgZ(30,"tr"),i.TgZ(31,"td"),i.TgZ(32,"i"),i._uU(33,"--text-color"),i.qZA(),i.qZA(),i.TgZ(34,"td"),i._uU(35,"Font text color."),i.qZA(),i.qZA(),i.TgZ(36,"tr"),i.TgZ(37,"td"),i.TgZ(38,"i"),i._uU(39,"--text-secondary-color"),i.qZA(),i.qZA(),i.TgZ(40,"td"),i._uU(41,"Muted font text color with a secondary level."),i.qZA(),i.qZA(),i.TgZ(42,"tr"),i.TgZ(43,"td"),i.TgZ(44,"i"),i._uU(45,"--primary-color"),i.qZA(),i.qZA(),i.TgZ(46,"td"),i._uU(47,"Primary color of the theme."),i.qZA(),i.qZA(),i.TgZ(48,"tr"),i.TgZ(49,"td"),i.TgZ(50,"i"),i._uU(51,"--primary-color-text"),i.qZA(),i.qZA(),i.TgZ(52,"td"),i._uU(53,"Text color when background is primary color."),i.qZA(),i.qZA(),i.TgZ(54,"tr"),i.TgZ(55,"td"),i.TgZ(56,"i"),i._uU(57,"--font-family"),i.qZA(),i.qZA(),i.TgZ(58,"td"),i._uU(59,"Font family of the theme."),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.TgZ(60,"h5"),i._uU(61,"Color Palette"),i.qZA(),i.TgZ(62,"p"),i._uU(63,"A palette consists of 9 colors where each color provides tints/shades from 50 to 900."),i.qZA(),i.TgZ(64,"app-code",1),i.IAx(),i._uU(65,"\n<div [ngStyle]=\"{backgroundColor:'var(--blue-500)'}\"></div>\n"),i.fQ9(),i.qZA(),i.TgZ(66,"div",4),i.TgZ(67,"div",5),i.YNc(68,u,2,1,"div",6),i.qZA(),i.qZA(),i.TgZ(69,"h5"),i._uU(70,"Surfaces"),i.qZA(),i.TgZ(71,"p"),i._uU(72,"In addition, a theme brings a special palette called surfaces that can be used as the base when designing the surface layers and separators."),i.qZA(),i.TgZ(73,"div",4),i.TgZ(74,"div",7),i.YNc(75,Z,3,5,"div",8),i.qZA(),i.qZA(),i.qZA()),2&t&&(i.xp6(68),i.Q6J("ngForOf",e.colors),i.xp6(7),i.Q6J("ngForOf",e.shades))},directives:[s.h,n.sg,n.O5,n.PC],styles:[".color-stack[_ngcontent-%COMP%]{display:flex;flex-direction:column}.color-box[_ngcontent-%COMP%]{width:2.5rem;display:flex;align-items:center;padding:1rem;width:250px;font-weight:700}.sample-layout[_ngcontent-%COMP%]{width:375px}"]}),t})(),p=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[r.Bz.forChild([{path:"",component:d}])],r.Bz]}),t})(),f=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[n.ez,s.a,p]]}),t})()}}]);