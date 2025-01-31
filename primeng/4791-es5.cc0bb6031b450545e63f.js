!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var Z=t[n];Z.enumerable=Z.enumerable||!1,Z.configurable=!0,"value"in Z&&(Z.writable=!0),Object.defineProperty(e,o(Z.key),Z)}}function n(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),Object.defineProperty(e,"prototype",{writable:!1}),e}function o(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(self.webpackChunkprimeng=self.webpackChunkprimeng||[]).push([[4791],{90628:function(t,o,Z){"use strict";Z.d(o,{h:function(){return a},a:function(){return c}});var g=Z(61116),i=Z(87368),u=["code"],r=["*"],a=function(){var t=function(){return n(function t(n){e(this,t),this.el=n,this.lang="markup"},[{key:"ngAfterViewInit",value:function(){window.Prism&&window.Prism.highlightElement(this.codeViewChild.nativeElement)}}])}();return t.\u0275fac=function(e){return new(e||t)(i.Y36(i.SBq))},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-code"]],viewQuery:function(e,t){var n;(1&e&&i.Gf(u,5),2&e)&&(i.iGM(n=i.CRH())&&(t.codeViewChild=n.first))},inputs:{lang:"lang"},ngContentSelectors:r,decls:5,vars:1,consts:[[3,"ngClass"],["code",""]],template:function(e,t){1&e&&(i.F$t(),i.TgZ(0,"pre",0),i.TgZ(1,"code",null,1),i.Hsn(3),i._uU(4,"\n"),i.qZA(),i.qZA()),2&e&&i.Q6J("ngClass","language-"+t.lang)},directives:[g.mk],encapsulation:2}),t}(),c=function(){var t=n(function t(){e(this,t)});return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[g.ez]]}),t}()},94791:function(t,o,Z){"use strict";Z.r(o),Z.d(o,{ToggleButtonDemoModule:function(){return m}});var g=Z(61116),i=Z(11462),u=Z(42066),r=Z(87368),a=Z(12774),c=Z(7658),l=Z(47299),d=Z(90628),s=Z(74136);function p(e,t){1&e&&r._UZ(0,"iframe",19)}var A,T=function(){return{width:"10em"}},q=function(){return["/theming"]},f=function(){var t=n(function t(){e(this,t),this.checked1=!1,this.checked2=!0});return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Xpm({type:t,selectors:[["ng-component"]],decls:257,vars:7,consts:[[1,"content-section","introduction"],[1,"feature-intro"],["github","togglebutton","stackblitz","togglebutton-demo"],[1,"content-section","implementation"],[1,"card"],["onIcon","pi pi-check","offIcon","pi pi-times",3,"ngModel","ngModelChange"],["onLabel","I confirm","offLabel","I reject","onIcon","pi pi-check","offIcon","pi pi-times",3,"ngModel","ngModelChange"],[1,"content-section","documentation"],["header","Documentation"],["lang","typescript"],["lang","markup"],[1,"doc-tablewrapper"],[1,"doc-table"],["href","#",3,"routerLink"],["header","Source"],["href","https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/togglebutton","target","_blank",1,"btn-viewsource"],["href","https://stackblitz.com/edit/primeng-togglebutton-demo","target","_blank",1,"btn-viewsource",2,"margin-left",".5em"],["header","StackBlitz"],["pTemplate","content"],["src","https://stackblitz.com/edit/primeng-togglebutton-demo?embed=1",2,"width","100%","height","768px","border","none"]],template:function(e,t){1&e&&(r.TgZ(0,"div",0),r.TgZ(1,"div",1),r.TgZ(2,"h1"),r._uU(3,"ToggleButton"),r.qZA(),r.TgZ(4,"p"),r._uU(5,"ToggleButton is used to select a boolean value using a button."),r.qZA(),r.qZA(),r._UZ(6,"app-demoActions",2),r.qZA(),r.TgZ(7,"div",3),r.TgZ(8,"div",4),r.TgZ(9,"h5"),r._uU(10,"Basic"),r.qZA(),r.TgZ(11,"p-toggleButton",5),r.NdJ("ngModelChange",function(e){return t.checked1=e}),r.qZA(),r.TgZ(12,"h5"),r._uU(13,"Customized"),r.qZA(),r.TgZ(14,"p-toggleButton",6),r.NdJ("ngModelChange",function(e){return t.checked2=e}),r.qZA(),r.qZA(),r.qZA(),r.TgZ(15,"div",7),r.TgZ(16,"p-tabView"),r.TgZ(17,"p-tabPanel",8),r.TgZ(18,"h5"),r._uU(19,"Import"),r.qZA(),r.TgZ(20,"app-code",9),r.IAx(),r._uU(21,"\nimport {ToggleButtonModule} from 'primeng/togglebutton';\n"),r.fQ9(),r.qZA(),r.TgZ(22,"h5"),r._uU(23,"Getting Started"),r.qZA(),r.TgZ(24,"p"),r._uU(25,"Two-way binding to a boolean property is defined using the standard ngModel directive."),r.qZA(),r.TgZ(26,"app-code",10),r.IAx(),r._uU(27,'\n<p-toggleButton [(ngModel)]="checked"></p-toggleButton>\n'),r.fQ9(),r.qZA(),r.TgZ(28,"app-code",9),r.IAx(),r._uU(29,"\nexport class ModelComponent {\n\n    checked: boolean;\n\n}\n"),r.fQ9(),r.qZA(),r.TgZ(30,"p"),r._uU(31,"As model is two-way binding enabled, setting the bound value as true displays the state as checked."),r.qZA(),r.TgZ(32,"app-code",9),r.IAx(),r._uU(33,"\nexport class ModelComponent {\n\n   checked: boolean = true;\n\n}\n"),r.fQ9(),r.qZA(),r.TgZ(34,"h5"),r._uU(35,"Model Driven Forms"),r.qZA(),r.TgZ(36,"p"),r._uU(37,"ToggleButton can be used in a model driven form as well."),r.qZA(),r.TgZ(38,"app-code",10),r.IAx(),r._uU(39,'\n<p-toggleButton formControlName="agreed"></p-toggleButton>\n'),r.fQ9(),r.qZA(),r.TgZ(40,"h5"),r._uU(41,"Labels"),r.qZA(),r.TgZ(42,"p"),r._uU(43,"Labels are customized using onLabel and "),r.TgZ(44,"i"),r._uU(45,"offLabel"),r.qZA(),r._uU(46," properties."),r.qZA(),r.TgZ(47,"app-code",10),r.IAx(),r._uU(48,'\n<p-toggleButton onLabel="I confirm" offLabel="I reject"\n            onIcon="pi pi-check" offIcon="pi pi-times" [(ngModel)]="val"></p-toggleButton>\n'),r.fQ9(),r.qZA(),r.TgZ(49,"h5"),r._uU(50,"Icons"),r.qZA(),r.TgZ(51,"p"),r._uU(52,"Icon on a ToggleButton is specified with the "),r.TgZ(53,"i"),r._uU(54,"onIcon"),r.qZA(),r._uU(55," and "),r.TgZ(56,"i"),r._uU(57,"offIcon"),r.qZA(),r._uU(58," properties and position is customized using the "),r.TgZ(59,"i"),r._uU(60,"iconPos"),r.qZA(),r._uU(61," property."),r.qZA(),r.TgZ(62,"app-code",10),r.IAx(),r._uU(63,'\n<p-toggleButton onLabel="I confirm" offLabel="I reject" \n            onIcon="pi pi-check" offIcon="pi pi-times" iconPos="right" [(ngModel)]="val"></p-toggleButton>\n'),r.fQ9(),r.qZA(),r.TgZ(64,"h5"),r._uU(65,"Properties"),r.qZA(),r.TgZ(66,"div",11),r.TgZ(67,"table",12),r.TgZ(68,"thead"),r.TgZ(69,"tr"),r.TgZ(70,"th"),r._uU(71,"Name"),r.qZA(),r.TgZ(72,"th"),r._uU(73,"Type"),r.qZA(),r.TgZ(74,"th"),r._uU(75,"Default"),r.qZA(),r.TgZ(76,"th"),r._uU(77,"Description"),r.qZA(),r.qZA(),r.qZA(),r.TgZ(78,"tbody"),r.TgZ(79,"tr"),r.TgZ(80,"td"),r._uU(81,"onLabel"),r.qZA(),r.TgZ(82,"td"),r._uU(83,"string"),r.qZA(),r.TgZ(84,"td"),r._uU(85,"null"),r.qZA(),r.TgZ(86,"td"),r._uU(87,"Label for the on state."),r.qZA(),r.qZA(),r.TgZ(88,"tr"),r.TgZ(89,"td"),r._uU(90,"offLabel"),r.qZA(),r.TgZ(91,"td"),r._uU(92,"string"),r.qZA(),r.TgZ(93,"td"),r._uU(94,"null"),r.qZA(),r.TgZ(95,"td"),r._uU(96,"Label for the off state."),r.qZA(),r.qZA(),r.TgZ(97,"tr"),r.TgZ(98,"td"),r._uU(99,"onIcon"),r.qZA(),r.TgZ(100,"td"),r._uU(101,"string"),r.qZA(),r.TgZ(102,"td"),r._uU(103,"null"),r.qZA(),r.TgZ(104,"td"),r._uU(105,"Icon for the on state."),r.qZA(),r.qZA(),r.TgZ(106,"tr"),r.TgZ(107,"td"),r._uU(108,"offIcon"),r.qZA(),r.TgZ(109,"td"),r._uU(110,"string"),r.qZA(),r.TgZ(111,"td"),r._uU(112,"null"),r.qZA(),r.TgZ(113,"td"),r._uU(114,"Icon for the off state."),r.qZA(),r.qZA(),r.TgZ(115,"tr"),r.TgZ(116,"td"),r._uU(117,"iconPos"),r.qZA(),r.TgZ(118,"td"),r._uU(119,"string"),r.qZA(),r.TgZ(120,"td"),r._uU(121,"left"),r.qZA(),r.TgZ(122,"td"),r._uU(123,'Position of the icon, valid values are "left" and "right".'),r.qZA(),r.qZA(),r.TgZ(124,"tr"),r.TgZ(125,"td"),r._uU(126,"style"),r.qZA(),r.TgZ(127,"td"),r._uU(128,"string"),r.qZA(),r.TgZ(129,"td"),r._uU(130,"null"),r.qZA(),r.TgZ(131,"td"),r._uU(132,"Inline style of the element."),r.qZA(),r.qZA(),r.TgZ(133,"tr"),r.TgZ(134,"td"),r._uU(135,"styleClass"),r.qZA(),r.TgZ(136,"td"),r._uU(137,"string"),r.qZA(),r.TgZ(138,"td"),r._uU(139,"null"),r.qZA(),r.TgZ(140,"td"),r._uU(141,"Style class of the element."),r.qZA(),r.qZA(),r.TgZ(142,"tr"),r.TgZ(143,"td"),r._uU(144,"disabled"),r.qZA(),r.TgZ(145,"td"),r._uU(146,"boolean"),r.qZA(),r.TgZ(147,"td"),r._uU(148,"false"),r.qZA(),r.TgZ(149,"td"),r._uU(150,"When present, it specifies that the element should be disabled."),r.qZA(),r.qZA(),r.TgZ(151,"tr"),r.TgZ(152,"td"),r._uU(153,"tabindex"),r.qZA(),r.TgZ(154,"td"),r._uU(155,"number"),r.qZA(),r.TgZ(156,"td"),r._uU(157,"null"),r.qZA(),r.TgZ(158,"td"),r._uU(159,"Index of the element in tabbing order."),r.qZA(),r.qZA(),r.TgZ(160,"tr"),r.TgZ(161,"td"),r._uU(162,"inputId"),r.qZA(),r.TgZ(163,"td"),r._uU(164,"string"),r.qZA(),r.TgZ(165,"td"),r._uU(166,"null"),r.qZA(),r.TgZ(167,"td"),r._uU(168,"Identifier of the focus input to match a label defined for the component."),r.qZA(),r.qZA(),r.TgZ(169,"tr"),r.TgZ(170,"td"),r._uU(171,"ariaLabelledBy"),r.qZA(),r.TgZ(172,"td"),r._uU(173,"string"),r.qZA(),r.TgZ(174,"td"),r._uU(175,"null"),r.qZA(),r.TgZ(176,"td"),r._uU(177,"Establishes relationships between the component and label(s) where its value should be one or more element IDs."),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.TgZ(178,"h5"),r._uU(179,"Events"),r.qZA(),r.TgZ(180,"div",11),r.TgZ(181,"table",12),r.TgZ(182,"thead"),r.TgZ(183,"tr"),r.TgZ(184,"th"),r._uU(185,"Name"),r.qZA(),r.TgZ(186,"th"),r._uU(187,"Parameters"),r.qZA(),r.TgZ(188,"th"),r._uU(189,"Description"),r.qZA(),r.qZA(),r.qZA(),r.TgZ(190,"tbody"),r.TgZ(191,"tr"),r.TgZ(192,"td"),r._uU(193,"onChange"),r.qZA(),r.TgZ(194,"td"),r._uU(195,"event.originalEvent: browser event "),r._UZ(196,"br"),r._uU(197," event.checked: boolean value to represent checked state."),r.qZA(),r.TgZ(198,"td"),r._uU(199,"Callback to invoke on state change."),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.TgZ(200,"app-code",10),r.IAx(),r._uU(201,'\n<p-toggleButton (onChange)="handleChange($event)" [(ngModel)]="val">\n'),r.fQ9(),r.qZA(),r.TgZ(202,"app-code",9),r.IAx(),r._uU(203,"\nexport class ModelComponent {\n\n    handleChange(e) {\n        var isChecked = e.checked;\n    }\n}\n"),r.fQ9(),r.qZA(),r.TgZ(204,"h5"),r._uU(205,"Styling"),r.qZA(),r.TgZ(206,"p"),r._uU(207,"Following is the list of structural style classes, for theming classes visit "),r.TgZ(208,"a",13),r._uU(209,"theming page"),r.qZA(),r._uU(210,"."),r.qZA(),r.TgZ(211,"div",11),r.TgZ(212,"table",12),r.TgZ(213,"thead"),r.TgZ(214,"tr"),r.TgZ(215,"th"),r._uU(216,"Name"),r.qZA(),r.TgZ(217,"th"),r._uU(218,"Element"),r.qZA(),r.qZA(),r.qZA(),r.TgZ(219,"tbody"),r.TgZ(220,"tr"),r.TgZ(221,"td"),r._uU(222,"p-togglebutton"),r.qZA(),r.TgZ(223,"td"),r._uU(224,"Container element"),r.qZA(),r.qZA(),r.TgZ(225,"tr"),r.TgZ(226,"td"),r._uU(227,"p-button-icon-left"),r.qZA(),r.TgZ(228,"td"),r._uU(229,"Icon element."),r.qZA(),r.qZA(),r.TgZ(230,"tr"),r.TgZ(231,"td"),r._uU(232,"p-button-icon-right"),r.qZA(),r.TgZ(233,"td"),r._uU(234,"Icon element."),r.qZA(),r.qZA(),r.TgZ(235,"tr"),r.TgZ(236,"td"),r._uU(237,"p-button-text"),r.qZA(),r.TgZ(238,"td"),r._uU(239,"Label element."),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.TgZ(240,"h5"),r._uU(241,"Dependencies"),r.qZA(),r.TgZ(242,"p"),r._uU(243,"None."),r.qZA(),r.qZA(),r.TgZ(244,"p-tabPanel",14),r.TgZ(245,"a",15),r.TgZ(246,"span"),r._uU(247,"View on GitHub"),r.qZA(),r.qZA(),r.TgZ(248,"a",16),r.TgZ(249,"span"),r._uU(250,"Edit in StackBlitz"),r.qZA(),r.qZA(),r.TgZ(251,"app-code",10),r.IAx(),r._uU(252,'\n<h5>Basic</h5>\n<p-toggleButton [(ngModel)]="checked1" onIcon="pi pi-check" offIcon="pi pi-times"></p-toggleButton>\n\n<h5>Customized</h5>\n<p-toggleButton [(ngModel)]="checked2" onLabel="I confirm" offLabel="I reject" onIcon="pi pi-check" offIcon="pi pi-times" [style]="{\'width\': \'10em\'}"></p-toggleButton>\n'),r.fQ9(),r.qZA(),r.TgZ(253,"app-code",9),r.IAx(),r._uU(254,"\nexport class ToggleButtonDemo {\n\n    checked1: boolean = false;\n\n    checked2: boolean = true;\n}\n"),r.fQ9(),r.qZA(),r.qZA(),r.TgZ(255,"p-tabPanel",17),r.YNc(256,p,1,0,"ng-template",18),r.qZA(),r.qZA(),r.qZA()),2&e&&(r.xp6(11),r.Q6J("ngModel",t.checked1),r.xp6(3),r.Akn(r.DdM(5,T)),r.Q6J("ngModel",t.checked2),r.xp6(194),r.Q6J("routerLink",r.DdM(6,q)))},directives:[a.P,c.CO,i.JJ,i.On,l.xf,l.x4,d.h,u.yS,s.jx],encapsulation:2}),t}(),h=function(){var t=n(function t(){e(this,t)});return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[u.Bz.forChild([{path:"",component:f}])],u.Bz]}),t}(),_=Z(5048),U=Z(59202),m=((A=n(function t(){e(this,t)})).\u0275fac=function(e){return new(e||A)},A.\u0275mod=r.oAB({type:A}),A.\u0275inj=r.cJS({imports:[[g.ez,i.u5,h,_.KZ,U.LU,a.L,d.a]]}),A)}}])}();