(self.webpackChunkprimeng=self.webpackChunkprimeng||[]).push([[1217],{11722:function(e,t,n){"use strict";n.d(t,{GY:function(){return o.GY}});var o=n(4827)},4827:function(e,t,n){"use strict";n.d(t,{Iq:function(){return r},GY:function(){return d}});var o=n(87368),i=n(61116),a=n(11462);const c=function(e,t,n){return{"p-checkbox-label-active":e,"p-disabled":t,"p-checkbox-label-focus":n}};function l(e,t){if(1&e){const e=o.EpF();o.TgZ(0,"label",7),o.NdJ("click",function(t){o.CHM(e);const n=o.oxw(),i=o.MAs(3);return n.onClick(t,i)}),o._uU(1),o.qZA()}if(2&e){const e=o.oxw();o.Q6J("ngClass",o.kEZ(3,c,null!=e.value,e.disabled,e.focused)),o.uIk("for",e.inputId),o.xp6(1),o.Oqu(e.label)}}const u=function(e,t){return{"p-checkbox p-component":!0,"p-checkbox-disabled":e,"p-checkbox-focused":t}},s=function(e,t,n){return{"p-highlight":e,"p-disabled":t,"p-focus":n}},Z={provide:a.JU,useExisting:(0,o.Gpc)(()=>r),multi:!0};let r=(()=>{class e{constructor(e){this.cd=e,this.checkboxTrueIcon="pi pi-check",this.checkboxFalseIcon="pi pi-times",this.onChange=new o.vpe,this.onModelChange=()=>{},this.onModelTouched=()=>{}}onClick(e,t){this.disabled||this.readonly||(this.toggle(e),this.focused=!0,t.focus())}onKeydown(e){32==e.keyCode&&e.preventDefault()}onKeyup(e){32!=e.keyCode||this.readonly||(this.toggle(e),e.preventDefault())}toggle(e){null==this.value||null==this.value?this.value=!0:1==this.value?this.value=!1:0==this.value&&(this.value=null),this.onModelChange(this.value),this.onChange.emit({originalEvent:e,value:this.value})}onFocus(){this.focused=!0}onBlur(){this.focused=!1,this.onModelTouched()}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}writeValue(e){this.value=e,this.cd.markForCheck()}setDisabledState(e){this.disabled=e,this.cd.markForCheck()}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(o.sBO))},e.\u0275cmp=o.Xpm({type:e,selectors:[["p-triStateCheckbox"]],hostAttrs:[1,"p-element"],inputs:{disabled:"disabled",name:"name",ariaLabelledBy:"ariaLabelledBy",tabindex:"tabindex",inputId:"inputId",style:"style",styleClass:"styleClass",label:"label",readonly:"readonly",checkboxTrueIcon:"checkboxTrueIcon",checkboxFalseIcon:"checkboxFalseIcon"},outputs:{onChange:"onChange"},features:[o._Bn([Z])],decls:7,vars:21,consts:[[3,"ngStyle","ngClass"],[1,"p-hidden-accessible"],["type","text","inputmode","none",3,"name","readonly","disabled","keyup","keydown","focus","blur"],["input",""],["role","checkbox",1,"p-checkbox-box",3,"ngClass","click"],[1,"p-checkbox-icon",3,"ngClass"],["class","p-checkbox-label",3,"ngClass","click",4,"ngIf"],[1,"p-checkbox-label",3,"ngClass","click"]],template:function(e,t){if(1&e){const e=o.EpF();o.TgZ(0,"div",0),o.TgZ(1,"div",1),o.TgZ(2,"input",2,3),o.NdJ("keyup",function(e){return t.onKeyup(e)})("keydown",function(e){return t.onKeydown(e)})("focus",function(){return t.onFocus()})("blur",function(){return t.onBlur()}),o.qZA(),o.qZA(),o.TgZ(4,"div",4),o.NdJ("click",function(n){o.CHM(e);const i=o.MAs(3);return t.onClick(n,i)}),o._UZ(5,"span",5),o.qZA(),o.qZA(),o.YNc(6,l,2,7,"label",6)}2&e&&(o.Tol(t.styleClass),o.Q6J("ngStyle",t.style)("ngClass",o.WLB(14,u,t.disabled,t.focused)),o.xp6(2),o.Q6J("name",t.name)("readonly",t.readonly)("disabled",t.disabled),o.uIk("id",t.inputId)("tabindex",t.tabindex)("aria-labelledby",t.ariaLabelledBy),o.xp6(2),o.Q6J("ngClass",o.kEZ(17,s,null!=t.value,t.disabled,t.focused)),o.uIk("aria-checked",!0===t.value),o.xp6(1),o.Q6J("ngClass",!0===t.value?t.checkboxTrueIcon:!1===t.value?t.checkboxFalseIcon:""),o.xp6(1),o.Q6J("ngIf",t.label))},directives:[i.PC,i.mk,i.O5],encapsulation:2,changeDetection:0}),e})(),d=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[i.ez]]}),e})()},90628:function(e,t,n){"use strict";n.d(t,{h:function(){return l},a:function(){return u}});var o=n(61116),i=n(87368);const a=["code"],c=["*"];let l=(()=>{class e{constructor(e){this.el=e,this.lang="markup"}ngAfterViewInit(){window.Prism&&window.Prism.highlightElement(this.codeViewChild.nativeElement)}}return e.\u0275fac=function(t){return new(t||e)(i.Y36(i.SBq))},e.\u0275cmp=i.Xpm({type:e,selectors:[["app-code"]],viewQuery:function(e,t){if(1&e&&i.Gf(a,5),2&e){let e;i.iGM(e=i.CRH())&&(t.codeViewChild=e.first)}},inputs:{lang:"lang"},ngContentSelectors:c,decls:5,vars:1,consts:[[3,"ngClass"],["code",""]],template:function(e,t){1&e&&(i.F$t(),i.TgZ(0,"pre",0),i.TgZ(1,"code",null,1),i.Hsn(3),i._uU(4,"\n"),i.qZA(),i.qZA()),2&e&&i.Q6J("ngClass","language-"+t.lang)},directives:[o.mk],encapsulation:2}),e})(),u=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[[o.ez]]}),e})()},31217:function(e,t,n){"use strict";n.r(t),n.d(t,{TriStateCheckboxDemoModule:function(){return b}});var o=n(61116),i=n(11462),a=n(42066),c=n(87368),l=n(12774),u=n(4827),s=n(47299),Z=n(90628),r=n(74136);function d(e,t){1&e&&c._UZ(0,"iframe",19)}const g=function(){return["/theming"]};let h=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Xpm({type:e,selectors:[["ng-component"]],decls:223,vars:4,consts:[[1,"content-section","introduction"],[1,"feature-intro"],["github","tristatecheckbox","stackblitz","tristatecheckbox-demo"],[1,"content-section","implementation"],[1,"card"],[1,"p-field-checkbox","p-m-0"],[3,"ngModel","ngModelChange"],[1,"content-section","documentation"],["header","Documentation"],["lang","typescript"],["lang","markup"],[1,"doc-tablewrapper"],[1,"doc-table"],["href","#",3,"routerLink"],["header","Source"],["href","https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/tristatecheckbox","target","_blank",1,"btn-viewsource"],["href","https://stackblitz.com/edit/primeng-tristatecheckbox-demo","target","_blank",1,"btn-viewsource",2,"margin-left",".5em"],["header","StackBlitz"],["pTemplate","content"],["src","https://stackblitz.com/edit/primeng-tristatecheckbox-demo?embed=1",2,"width","100%","height","768px","border","none"]],template:function(e,t){1&e&&(c.TgZ(0,"div",0),c.TgZ(1,"div",1),c.TgZ(2,"h1"),c._uU(3,"TriStateCheckbox"),c.qZA(),c.TgZ(4,"p"),c._uU(5,'TriStateCheckbox is used to select either "true", "false" or "null" as the value.'),c.qZA(),c.qZA(),c._UZ(6,"app-demoActions",2),c.qZA(),c.TgZ(7,"div",3),c.TgZ(8,"div",4),c.TgZ(9,"div",5),c.TgZ(10,"p-triStateCheckbox",6),c.NdJ("ngModelChange",function(e){return t.value=e}),c.qZA(),c.TgZ(11,"label"),c._uU(12),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(13,"div",7),c.TgZ(14,"p-tabView"),c.TgZ(15,"p-tabPanel",8),c.TgZ(16,"h5"),c._uU(17,"Import"),c.qZA(),c.TgZ(18,"app-code",9),c.IAx(),c._uU(19,"\nimport {TriStateCheckboxModule} from 'primeng/tristatecheckbox';\n"),c.fQ9(),c.qZA(),c.TgZ(20,"h5"),c._uU(21,"Getting Started"),c.qZA(),c.TgZ(22,"p"),c._uU(23,"TriStateCheckbox is defined using p-triStateCheckbox element and requires a value binding via ngModel."),c.qZA(),c.TgZ(24,"app-code",10),c.IAx(),c._uU(25,'\n<p-triStateCheckbox [(ngModel)]="value" label="Item Label"></p-triStateCheckbox>\n'),c.fQ9(),c.qZA(),c.TgZ(26,"app-code",9),c.IAx(),c._uU(27,"\nexport class ModelComponent {\n\n    value: any;\n\n}\n"),c.fQ9(),c.qZA(),c.TgZ(28,"h5"),c._uU(29,"Model Driven Forms"),c.qZA(),c.TgZ(30,"p"),c._uU(31,"TriStateCheckbox can be used in a model driven form as well."),c.qZA(),c.TgZ(32,"app-code",10),c.IAx(),c._uU(33,'\n<p-triStateCheckbox formControlName="property"></p-triStateCheckbox>\n'),c.fQ9(),c.qZA(),c.TgZ(34,"h5"),c._uU(35,"Properties"),c.qZA(),c.TgZ(36,"div",11),c.TgZ(37,"table",12),c.TgZ(38,"thead"),c.TgZ(39,"tr"),c.TgZ(40,"th"),c._uU(41,"Name"),c.qZA(),c.TgZ(42,"th"),c._uU(43,"Type"),c.qZA(),c.TgZ(44,"th"),c._uU(45,"Default"),c.qZA(),c.TgZ(46,"th"),c._uU(47,"Description"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(48,"tbody"),c.TgZ(49,"tr"),c.TgZ(50,"td"),c._uU(51,"name"),c.qZA(),c.TgZ(52,"td"),c._uU(53,"string"),c.qZA(),c.TgZ(54,"td"),c._uU(55,"null"),c.qZA(),c.TgZ(56,"td"),c._uU(57,"Name of the component."),c.qZA(),c.qZA(),c.TgZ(58,"tr"),c.TgZ(59,"td"),c._uU(60,"label"),c.qZA(),c.TgZ(61,"td"),c._uU(62,"string"),c.qZA(),c.TgZ(63,"td"),c._uU(64,"null"),c.qZA(),c.TgZ(65,"td"),c._uU(66,"Label of the checkbox."),c.qZA(),c.qZA(),c.TgZ(67,"tr"),c.TgZ(68,"td"),c._uU(69,"disabled"),c.qZA(),c.TgZ(70,"td"),c._uU(71,"boolean"),c.qZA(),c.TgZ(72,"td"),c._uU(73,"false"),c.qZA(),c.TgZ(74,"td"),c._uU(75,"When present, it specifies that the element should be disabled."),c.qZA(),c.qZA(),c.TgZ(76,"tr"),c.TgZ(77,"td"),c._uU(78,"tabindex"),c.qZA(),c.TgZ(79,"td"),c._uU(80,"number"),c.qZA(),c.TgZ(81,"td"),c._uU(82,"null"),c.qZA(),c.TgZ(83,"td"),c._uU(84,"Index of the element in tabbing order."),c.qZA(),c.qZA(),c.TgZ(85,"tr"),c.TgZ(86,"td"),c._uU(87,"inputId"),c.qZA(),c.TgZ(88,"td"),c._uU(89,"string"),c.qZA(),c.TgZ(90,"td"),c._uU(91,"null"),c.qZA(),c.TgZ(92,"td"),c._uU(93,"Identifier of the focus input to match a label defined for the component."),c.qZA(),c.qZA(),c.TgZ(94,"tr"),c.TgZ(95,"td"),c._uU(96,"ariaLabelledBy"),c.qZA(),c.TgZ(97,"td"),c._uU(98,"string"),c.qZA(),c.TgZ(99,"td"),c._uU(100,"null"),c.qZA(),c.TgZ(101,"td"),c._uU(102,"Establishes relationships between the component and label(s) where its value should be one or more element IDs."),c.qZA(),c.qZA(),c.TgZ(103,"tr"),c.TgZ(104,"td"),c._uU(105,"style"),c.qZA(),c.TgZ(106,"td"),c._uU(107,"object"),c.qZA(),c.TgZ(108,"td"),c._uU(109,"null"),c.qZA(),c.TgZ(110,"td"),c._uU(111,"Inline style of the component."),c.qZA(),c.qZA(),c.TgZ(112,"tr"),c.TgZ(113,"td"),c._uU(114,"styleClass"),c.qZA(),c.TgZ(115,"td"),c._uU(116,"string"),c.qZA(),c.TgZ(117,"td"),c._uU(118,"null"),c.qZA(),c.TgZ(119,"td"),c._uU(120,"Style class of the component."),c.qZA(),c.qZA(),c.TgZ(121,"tr"),c.TgZ(122,"td"),c._uU(123,"readonly"),c.qZA(),c.TgZ(124,"td"),c._uU(125,"boolean"),c.qZA(),c.TgZ(126,"td"),c._uU(127,"false"),c.qZA(),c.TgZ(128,"td"),c._uU(129,"When present, it specifies that the component cannot be edited."),c.qZA(),c.qZA(),c.TgZ(130,"tr"),c.TgZ(131,"td"),c._uU(132,"checkboxTrueIcon"),c.qZA(),c.TgZ(133,"td"),c._uU(134,"string"),c.qZA(),c.TgZ(135,"td"),c._uU(136,"pi pi-check"),c.qZA(),c.TgZ(137,"td"),c._uU(138,"Specifies the icon for checkbox true value."),c.qZA(),c.qZA(),c.TgZ(139,"tr"),c.TgZ(140,"td"),c._uU(141,"checkboxFalseIcon"),c.qZA(),c.TgZ(142,"td"),c._uU(143,"string"),c.qZA(),c.TgZ(144,"td"),c._uU(145,"pi pi-times"),c.qZA(),c.TgZ(146,"td"),c._uU(147,"Specifies the icon for checkbox false value."),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(148,"h5"),c._uU(149,"Events"),c.qZA(),c.TgZ(150,"div",11),c.TgZ(151,"table",12),c.TgZ(152,"thead"),c.TgZ(153,"tr"),c.TgZ(154,"th"),c._uU(155,"Name"),c.qZA(),c.TgZ(156,"th"),c._uU(157,"Parameters"),c.qZA(),c.TgZ(158,"th"),c._uU(159,"Description"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(160,"tbody"),c.TgZ(161,"tr"),c.TgZ(162,"td"),c._uU(163,"onChange"),c.qZA(),c.TgZ(164,"td"),c._uU(165,"event.originalEvent: Original browser event "),c._UZ(166,"br"),c._uU(167," event.value: Current value."),c.qZA(),c.TgZ(168,"td"),c._uU(169,"Callback to invoke on value change."),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(170,"h5"),c._uU(171,"Styling"),c.qZA(),c.TgZ(172,"p"),c._uU(173,"Following is the list of structural style classes, for theming classes visit "),c.TgZ(174,"a",13),c._uU(175,"theming page"),c.qZA(),c._uU(176,"."),c.qZA(),c.TgZ(177,"div",11),c.TgZ(178,"table",12),c.TgZ(179,"thead"),c.TgZ(180,"tr"),c.TgZ(181,"th"),c._uU(182,"Name"),c.qZA(),c.TgZ(183,"th"),c._uU(184,"Element"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(185,"tbody"),c.TgZ(186,"tr"),c.TgZ(187,"td"),c._uU(188,"p-chkbox"),c.qZA(),c.TgZ(189,"td"),c._uU(190,"Container element"),c.qZA(),c.qZA(),c.TgZ(191,"tr"),c.TgZ(192,"td"),c._uU(193,"p-tristatechkbox"),c.qZA(),c.TgZ(194,"td"),c._uU(195,"Container element"),c.qZA(),c.qZA(),c.TgZ(196,"tr"),c.TgZ(197,"td"),c._uU(198,"p-chkbox-box"),c.qZA(),c.TgZ(199,"td"),c._uU(200,"Container of icon."),c.qZA(),c.qZA(),c.TgZ(201,"tr"),c.TgZ(202,"td"),c._uU(203,"p-chkbox-icon"),c.qZA(),c.TgZ(204,"td"),c._uU(205,"Icon element."),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(206,"h5"),c._uU(207,"Dependencies"),c.qZA(),c.TgZ(208,"p"),c._uU(209,"None."),c.qZA(),c.qZA(),c.TgZ(210,"p-tabPanel",14),c.TgZ(211,"a",15),c.TgZ(212,"span"),c._uU(213,"View on GitHub"),c.qZA(),c.qZA(),c.TgZ(214,"a",16),c.TgZ(215,"span"),c._uU(216,"Edit in StackBlitz"),c.qZA(),c.qZA(),c.TgZ(217,"app-code",10),c.IAx(),c._uU(218,'\n<p-triStateCheckbox [(ngModel)]="value"></p-triStateCheckbox>\n'),c.fQ9(),c.qZA(),c.TgZ(219,"app-code",9),c.IAx(),c._uU(220,"\nexport class TriStateCheckboxDemo {\n\n    value: any;\n\n}\n"),c.fQ9(),c.qZA(),c.qZA(),c.TgZ(221,"p-tabPanel",17),c.YNc(222,d,1,0,"ng-template",18),c.qZA(),c.qZA(),c.qZA()),2&e&&(c.xp6(10),c.Q6J("ngModel",t.value),c.xp6(2),c.Oqu(null==t.value?"null":t.value),c.xp6(162),c.Q6J("routerLink",c.DdM(3,g)))},directives:[l.P,u.Iq,i.JJ,i.On,s.xf,s.x4,Z.h,a.yS,r.jx],encapsulation:2}),e})(),p=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[a.Bz.forChild([{path:"",component:h}])],a.Bz]}),e})();var T=n(11722),A=n(59202),q=n(5794);let b=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[o.ez,i.u5,p,T.GY,A.LU,q.S,Z.a,l.L]]}),e})()}}]);