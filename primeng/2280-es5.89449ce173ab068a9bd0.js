!function(){function t(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||e(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){if(t){if("string"==typeof t)return n(t,e);var o={}.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?n(t,e):void 0}}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=Array(e);n<e;n++)o[n]=t[n];return o}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,a(o.key),o)}}function l(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function a(t){var e=function(t,e){if("object"!=typeof t||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,e||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:e+""}(self.webpackChunkprimeng=self.webpackChunkprimeng||[]).push([[2280],{35439:function(t,e,n){"use strict";n.d(e,{Qy:function(){return o.Qy}});var o=n(20232)},20232:function(n,i,a){"use strict";a.d(i,{UN:function(){return T},Qy:function(){return y}});var u=a(87368),s=a(61116),r=a(65939),c=a(37329),p=a(11462),d=a(10748);function g(t,e){if(1&t&&u._UZ(0,"span",8),2&t){var n=u.oxw(2).$implicit;u.Tol(n.icon),u.Q6J("ngClass","p-button-icon p-button-icon-left")}}function Z(t,e){if(1&t&&(u.ynx(0),u.YNc(1,g,1,3,"span",6),u.TgZ(2,"span",7),u._uU(3),u.qZA(),u.BQk()),2&t){var n=u.oxw().$implicit,o=u.oxw();u.xp6(1),u.Q6J("ngIf",n.icon),u.xp6(2),u.Oqu(o.getOptionLabel(n))}}function f(t,e){1&t&&u.GkF(0)}var m=function(t,e){return{$implicit:t,index:e}};function b(t,e){if(1&t&&u.YNc(0,f,1,0,"ng-container",9),2&t){var n=u.oxw(),o=n.$implicit,i=n.index,l=u.oxw();u.Q6J("ngTemplateOutlet",l.itemTemplate)("ngTemplateOutletContext",u.WLB(2,m,o,i))}}var h=function(t,e,n){return{"p-highlight":t,"p-disabled":e,"p-button-icon-only":n}};function v(t,e){if(1&t){var n=u.EpF();u.TgZ(0,"div",2,3),u.NdJ("click",function(t){var e=u.CHM(n),o=e.$implicit,i=e.index;return u.oxw().onItemClick(t,o,i)})("keydown.enter",function(t){var e=u.CHM(n),o=e.$implicit,i=e.index;return u.oxw().onItemClick(t,o,i)})("blur",function(){return u.CHM(n),u.oxw().onBlur()}),u.YNc(2,Z,4,2,"ng-container",4),u.YNc(3,b,1,5,"ng-template",null,5,u.W1O),u.qZA()}if(2&t){var o=e.$implicit,i=u.MAs(4),l=u.oxw();u.Tol(o.styleClass),u.Q6J("ngClass",u.kEZ(10,h,l.isSelected(o),l.disabled||l.isOptionDisabled(o),o.icon&&!l.getOptionLabel(o))),u.uIk("aria-pressed",l.isSelected(o))("title",o.title)("aria-label",o.label)("tabindex",l.disabled?null:l.tabindex)("aria-labelledby",l.getOptionLabel(o)),u.xp6(2),u.Q6J("ngIf",!l.itemTemplate)("ngIfElse",i)}}var A={provide:p.JU,useExisting:(0,u.Gpc)(function(){return T}),multi:!0},T=function(){var n=function(){return l(function t(e){o(this,t),this.cd=e,this.tabindex=0,this.onOptionClick=new u.vpe,this.onChange=new u.vpe,this.onModelChange=function(){},this.onModelTouched=function(){}},[{key:"getOptionLabel",value:function(t){return this.optionLabel?r.gb.resolveFieldData(t,this.optionLabel):null!=t.label?t.label:t}},{key:"getOptionValue",value:function(t){return this.optionValue?r.gb.resolveFieldData(t,this.optionValue):this.optionLabel||void 0===t.value?t:t.value}},{key:"isOptionDisabled",value:function(t){return this.optionDisabled?r.gb.resolveFieldData(t,this.optionDisabled):void 0!==t.disabled&&t.disabled}},{key:"writeValue",value:function(t){this.value=t,this.cd.markForCheck()}},{key:"registerOnChange",value:function(t){this.onModelChange=t}},{key:"registerOnTouched",value:function(t){this.onModelTouched=t}},{key:"setDisabledState",value:function(t){this.disabled=t,this.cd.markForCheck()}},{key:"onItemClick",value:function(e,n,o){this.disabled||this.isOptionDisabled(n)||(this.multiple?this.isSelected(n)?this.removeOption(n):this.value=[].concat(t(this.value||[]),[this.getOptionValue(n)]):this.value=this.getOptionValue(n),this.onOptionClick.emit({originalEvent:e,option:n,index:o}),this.onModelChange(this.value),this.onChange.emit({originalEvent:e,value:this.value}))}},{key:"onBlur",value:function(){this.onModelTouched()}},{key:"removeOption",value:function(t){var e=this;this.value=this.value.filter(function(n){return!r.gb.equals(n,e.getOptionValue(t),e.dataKey)})}},{key:"isSelected",value:function(t){var n=!1,o=this.getOptionValue(t);if(this.multiple){if(this.value){var i,l=function(t,n){var o="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!o){if(Array.isArray(t)||(o=e(t))||n&&t&&"number"==typeof t.length){o&&(t=o);var i=0,l=function(){};return{s:l,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:l}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,s=!1;return{s:function(){o=o.call(t)},n:function(){var t=o.next();return u=t.done,t},e:function(t){s=!0,a=t},f:function(){try{u||null==o.return||o.return()}finally{if(s)throw a}}}}(this.value);try{for(l.s();!(i=l.n()).done;){var a=i.value;if(r.gb.equals(a,o,this.dataKey)){n=!0;break}}}catch(u){l.e(u)}finally{l.f()}}}else n=r.gb.equals(this.getOptionValue(t),this.value,this.dataKey);return n}}])}();return n.\u0275fac=function(t){return new(t||n)(u.Y36(u.sBO))},n.\u0275cmp=u.Xpm({type:n,selectors:[["p-selectButton"]],contentQueries:function(t,e,n){var o;(1&t&&u.Suo(n,u.Rgc,5),2&t)&&(u.iGM(o=u.CRH())&&(e.itemTemplate=o.first))},hostAttrs:[1,"p-element"],inputs:{options:"options",optionLabel:"optionLabel",optionValue:"optionValue",optionDisabled:"optionDisabled",tabindex:"tabindex",multiple:"multiple",style:"style",styleClass:"styleClass",ariaLabelledBy:"ariaLabelledBy",disabled:"disabled",dataKey:"dataKey"},outputs:{onOptionClick:"onOptionClick",onChange:"onChange"},features:[u._Bn([A])],decls:2,vars:5,consts:[["role","group",3,"ngClass","ngStyle"],["class","p-button p-component","role","button","pRipple","",3,"class","ngClass","click","keydown.enter","blur",4,"ngFor","ngForOf"],["role","button","pRipple","",1,"p-button","p-component",3,"ngClass","click","keydown.enter","blur"],["btn",""],[4,"ngIf","ngIfElse"],["customcontent",""],[3,"ngClass","class",4,"ngIf"],[1,"p-button-label"],[3,"ngClass"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(t,e){1&t&&(u.TgZ(0,"div",0),u.YNc(1,v,5,14,"div",1),u.qZA()),2&t&&(u.Tol(e.styleClass),u.Q6J("ngClass","p-selectbutton p-buttonset p-component")("ngStyle",e.style),u.xp6(1),u.Q6J("ngForOf",e.options))},directives:[s.mk,s.PC,s.sg,d.H,s.O5,s.tP],styles:[".p-button{margin:0;display:inline-flex;cursor:pointer;-webkit-user-select:none;-ms-user-select:none;user-select:none;align-items:center;vertical-align:bottom;text-align:center;overflow:hidden;position:relative}.p-button-label{flex:1 1 auto}.p-button-icon-right{order:1}.p-button:disabled{cursor:default}.p-button-icon-only{justify-content:center}.p-button-icon-only .p-button-label{visibility:hidden;width:0;flex:0 0 auto}.p-button-vertical{flex-direction:column}.p-button-icon-bottom{order:2}.p-buttonset .p-button{margin:0}.p-buttonset .p-button:not(:last-child){border-right:0}.p-buttonset .p-button:not(:first-of-type):not(:last-of-type){border-radius:0}.p-buttonset .p-button:first-of-type{border-top-right-radius:0;border-bottom-right-radius:0}.p-buttonset .p-button:last-of-type{border-top-left-radius:0;border-bottom-left-radius:0}.p-buttonset .p-button:focus{position:relative;z-index:1}.p-button-label{transition:all .2s}"],encapsulation:2,changeDetection:0}),n}(),y=function(){var t=l(function t(){o(this,t)});return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=u.oAB({type:t}),t.\u0275inj=u.cJS({imports:[[s.ez,c.T]]}),t}()},90628:function(t,e,n){"use strict";n.d(e,{h:function(){return r},a:function(){return c}});var i=n(61116),a=n(87368),u=["code"],s=["*"],r=function(){var t=function(){return l(function t(e){o(this,t),this.el=e,this.lang="markup"},[{key:"ngAfterViewInit",value:function(){window.Prism&&window.Prism.highlightElement(this.codeViewChild.nativeElement)}}])}();return t.\u0275fac=function(e){return new(e||t)(a.Y36(a.SBq))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-code"]],viewQuery:function(t,e){var n;(1&t&&a.Gf(u,5),2&t)&&(a.iGM(n=a.CRH())&&(e.codeViewChild=n.first))},inputs:{lang:"lang"},ngContentSelectors:s,decls:5,vars:1,consts:[[3,"ngClass"],["code",""]],template:function(t,e){1&t&&(a.F$t(),a.TgZ(0,"pre",0),a.TgZ(1,"code",null,1),a.Hsn(3),a._uU(4,"\n"),a.qZA(),a.qZA()),2&t&&a.Q6J("ngClass","language-"+e.lang)},directives:[i.mk],encapsulation:2}),t}(),c=function(){var t=l(function t(){o(this,t)});return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[i.ez]]}),t}()},72280:function(t,e,n){"use strict";n.r(e),n.d(e,{SelectButtonDemoModule:function(){return y}});var i=n(61116),a=n(11462),u=n(42066),s=n(87368),r=n(12774),c=n(20232),p=n(47299),d=n(90628),g=n(74136);function Z(t,e){1&t&&s._UZ(0,"i"),2&t&&s.Tol(e.$implicit.icon)}function f(t,e){1&t&&s._UZ(0,"iframe",19)}var m,b=function(){var t=l(function t(){o(this,t),this.value1="off",this.stateOptions=[{label:"Off",value:"off"},{label:"On",value:"on"}],this.paymentOptions=[{name:"Option 1",value:1},{name:"Option 2",value:2},{name:"Option 3",value:3}],this.justifyOptions=[{icon:"pi pi-align-left",justify:"Left"},{icon:"pi pi-align-right",justify:"Right"},{icon:"pi pi-align-center",justify:"Center"},{icon:"pi pi-align-justify",justify:"Justify"}]});return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Xpm({type:t,selectors:[["ng-component"]],decls:245,vars:6,consts:[[1,"content-section","introduction"],[1,"feature-intro"],["github","selectbutton","stackblitz","selectbutton-demo"],[1,"content-section","implementation"],[1,"card"],["optionLabel","label","optionValue","value",3,"options","ngModel","ngModelChange"],["multiple","multiple","optionLabel","name","optionValue","value",3,"options","ngModel","ngModelChange"],["optionLabel","icon",3,"options","ngModel","ngModelChange"],[1,"content-section","documentation"],["header","Documentation"],["lang","typescript"],["lang","markup"],[1,"doc-tablewrapper"],[1,"doc-table"],["header","Source"],["href","https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/selectbutton","target","_blank",1,"btn-viewsource"],["href","https://stackblitz.com/edit/primeng-selectbutton-demo","target","_blank",1,"btn-viewsource",2,"margin-left",".5em"],["header","StackBlitz"],["pTemplate","content"],["src","https://stackblitz.com/edit/primeng-selectbutton-demo?embed=1",2,"width","100%","height","768px","border","none"]],template:function(t,e){1&t&&(s.TgZ(0,"div",0),s.TgZ(1,"div",1),s.TgZ(2,"h1"),s._uU(3,"SelectButton"),s.qZA(),s.TgZ(4,"p"),s._uU(5,"SelectButton is a form component to choose a value from a list of options using button elements."),s.qZA(),s.qZA(),s._UZ(6,"app-demoActions",2),s.qZA(),s.TgZ(7,"div",3),s.TgZ(8,"div",4),s.TgZ(9,"h5"),s._uU(10,"Single Selection"),s.qZA(),s.TgZ(11,"p-selectButton",5),s.NdJ("ngModelChange",function(t){return e.value1=t}),s.qZA(),s.TgZ(12,"h5"),s._uU(13,"Multiple Selection"),s.qZA(),s.TgZ(14,"p-selectButton",6),s.NdJ("ngModelChange",function(t){return e.value2=t}),s.qZA(),s.TgZ(15,"h5"),s._uU(16,"Custom Template"),s.qZA(),s.TgZ(17,"p-selectButton",7),s.NdJ("ngModelChange",function(t){return e.value3=t}),s.YNc(18,Z,1,2,"ng-template"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(19,"div",8),s.TgZ(20,"p-tabView"),s.TgZ(21,"p-tabPanel",9),s.TgZ(22,"h5"),s._uU(23,"Import"),s.qZA(),s.TgZ(24,"app-code",10),s.IAx(),s._uU(25,"\nimport {SelectButtonModule} from 'primeng/selectbutton';\n"),s.fQ9(),s.qZA(),s.TgZ(26,"h5"),s._uU(27,"Getting Started"),s.qZA(),s.TgZ(28,"p"),s._uU(29,"SelectButton requires a value to bind and a collection of options."),s.qZA(),s.TgZ(30,"app-code",11),s.IAx(),s._uU(31,'\n<p-selectButton [options]="cities" [(ngModel)]="selectedCity" optionLabel="name"></p-selectButton>\n'),s.fQ9(),s.qZA(),s.TgZ(32,"app-code",10),s.IAx(),s._uU(33,"\ninterface City {\n    name: string,\n    code: string\n}\n\nexport class SelectButtonDemo {\n\n    cities: City[];\n\n    selectedCity: City;\n\n    constructor() {\n        this.cities = [\n            {name: 'New York', code: 'NY'},\n            {name: 'Rome', code: 'RM'},\n            {name: 'London', code: 'LDN'},\n            {name: 'Istanbul', code: 'IST'},\n            {name: 'Paris', code: 'PRS'}\n        ];\n    }\n\n}\n"),s.fQ9(),s.qZA(),s.TgZ(34,"h5"),s._uU(35,"Value Binding"),s.qZA(),s.TgZ(36,"p"),s._uU(37,"The option itself is bound to the model by default, use "),s.TgZ(38,"i"),s._uU(39,"optionValue"),s.qZA(),s._uU(40," to customize the property to pass as the value."),s.qZA(),s.TgZ(41,"app-code",11),s.IAx(),s._uU(42,'\n<p-selectButton [options]="cities" [(ngModel)]="selectedCityCode" optionLabel="name" optionValue="code"></p-selectButton>\n'),s.fQ9(),s.qZA(),s.TgZ(43,"app-code",10),s.IAx(),s._uU(44,"\nexport class SelectButtonDemo {\n\n    cities: City[];\n\n    selectedCityCode: string;\n\n    constructor() {\n        this.cities = [\n            {name: 'New York', code: 'NY'},\n            {name: 'Rome', code: 'RM'},\n            {name: 'London', code: 'LDN'},\n            {name: 'Istanbul', code: 'IST'},\n            {name: 'Paris', code: 'PRS'}\n        ];\n    }\n\n}\n"),s.fQ9(),s.qZA(),s.TgZ(45,"h5"),s._uU(46,"Selection"),s.qZA(),s.TgZ(47,"p"),s._uU(48,"SelectButtons allows selection of either single or multiple items, this behavior is defined with the "),s.TgZ(49,"i"),s._uU(50,"multiple"),s.qZA(),s._uU(51," property. In single case, model should be a single object reference whereas in multiple case should be an array."),s.qZA(),s.TgZ(52,"app-code",11),s.IAx(),s._uU(53,'\n<p-selectButton [options]="cities" [(ngModel)]="selectedCities" optionLabel="name" [multiple]="true"></p-selectButton>\n'),s.fQ9(),s.qZA(),s.TgZ(54,"app-code",10),s.IAx(),s._uU(55,"\nexport class SelectButtonDemo {\n\n    cities: City[];\n\n    selectedCities: City[];\n\n    constructor() {\n        this.cities = [\n            {name: 'New York', code: 'NY'},\n            {name: 'Rome', code: 'RM'},\n            {name: 'London', code: 'LDN'},\n            {name: 'Istanbul', code: 'IST'},\n            {name: 'Paris', code: 'PRS'}\n        ];\n    }\n\n}\n"),s.fQ9(),s.qZA(),s.TgZ(56,"h5"),s._uU(57,"Disabled Options"),s.qZA(),s.TgZ(58,"p"),s._uU(59,"Particular options can be prevented from selection using the "),s.TgZ(60,"i"),s._uU(61,"optionDisabled"),s.qZA(),s._uU(62," property."),s.qZA(),s.TgZ(63,"app-code",11),s.IAx(),s._uU(64,'\n<p-selectButton [options]="cities" [(ngModel)]="selectedCity" optionLabel="name" optionDisabled="inactive"></p-selectButton>\n'),s.fQ9(),s.qZA(),s.TgZ(65,"app-code",10),s.IAx(),s._uU(66,"\nexport class SelectButtonDemo {\n\n    cities: City[];\n\n    selectedCity: City;\n\n    constructor() {\n        this.cities = [\n            {name: 'New York', code: 'NY', inactive: false},\n            {name: 'Rome', code: 'RM', inactive: true},\n            {name: 'London', code: 'LDN', inactive: false},\n            {name: 'Istanbul', code: 'IST', inactive: true},\n            {name: 'Paris', code: 'PRS', inactive: false}\n        ];\n    }\n\n}\n"),s.fQ9(),s.qZA(),s.TgZ(67,"h5"),s._uU(68,"Model Driven Forms"),s.qZA(),s.TgZ(69,"p"),s._uU(70,"SelectButton can be used in a model driven form as well."),s.qZA(),s.TgZ(71,"app-code",11),s.IAx(),s._uU(72,'\n<p-selectButton [options]="cities" formControlName="selectedCity"></p-selectButton>\n'),s.fQ9(),s.qZA(),s.TgZ(73,"h5"),s._uU(74,"Custom Content"),s.qZA(),s.TgZ(75,"p"),s._uU(76,"For custom content support define a ng-template where the local ng-template variable refers to an option in the options collection."),s.qZA(),s.TgZ(77,"app-code",11),s.IAx(),s._uU(78,'\n<p-selectButton [options]="justifyOptions" [(ngModel)]="value" optionLabel="icon">\n    <ng-template let-item>\n        <i [class]="item.icon"></i>\n    </ng-template>\n</p-selectButton>\n'),s.fQ9(),s.qZA(),s.TgZ(79,"app-code",10),s.IAx(),s._uU(80,"\nexport class SelectButtonDemo {\n\n    justifyOptions: any[];\n\n    value: any;\n\n    constructor() {    \n        this.justifyOptions = [\n            {icon: 'pi pi-align-left', justify: 'Left'},\n            {icon: 'pi pi-align-right', justify: 'Right'},\n            {icon: 'pi pi-align-center', justify: 'Center'},\n            {icon: 'pi pi-align-justify', justify: 'Justify'}\n        ];\n    }\n}\n"),s.fQ9(),s.qZA(),s.TgZ(81,"h5"),s._uU(82,"Properties"),s.qZA(),s.TgZ(83,"div",12),s.TgZ(84,"table",13),s.TgZ(85,"thead"),s.TgZ(86,"tr"),s.TgZ(87,"th"),s._uU(88,"Name"),s.qZA(),s.TgZ(89,"th"),s._uU(90,"Type"),s.qZA(),s.TgZ(91,"th"),s._uU(92,"Default"),s.qZA(),s.TgZ(93,"th"),s._uU(94,"Description"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(95,"tbody"),s.TgZ(96,"tr"),s.TgZ(97,"td"),s._uU(98,"options"),s.qZA(),s.TgZ(99,"td"),s._uU(100,"array"),s.qZA(),s.TgZ(101,"td"),s._uU(102,"null"),s.qZA(),s.TgZ(103,"td"),s._uU(104,"An array of selectitems to display as the available options."),s.qZA(),s.qZA(),s.TgZ(105,"tr"),s.TgZ(106,"td"),s._uU(107,"optionLabel"),s.qZA(),s.TgZ(108,"td"),s._uU(109,"string"),s.qZA(),s.TgZ(110,"td"),s._uU(111,"label"),s.qZA(),s.TgZ(112,"td"),s._uU(113,"Name of the label field of an option."),s.qZA(),s.qZA(),s.TgZ(114,"tr"),s.TgZ(115,"td"),s._uU(116,"optionValue"),s.qZA(),s.TgZ(117,"td"),s._uU(118,"string"),s.qZA(),s.TgZ(119,"td"),s._uU(120,"value"),s.qZA(),s.TgZ(121,"td"),s._uU(122,"Name of the value field of an option."),s.qZA(),s.qZA(),s.TgZ(123,"tr"),s.TgZ(124,"td"),s._uU(125,"optionDisabled"),s.qZA(),s.TgZ(126,"td"),s._uU(127,"string"),s.qZA(),s.TgZ(128,"td"),s._uU(129,"disabled"),s.qZA(),s.TgZ(130,"td"),s._uU(131,"Name of the disabled field of an option."),s.qZA(),s.qZA(),s.TgZ(132,"tr"),s.TgZ(133,"td"),s._uU(134,"multiple"),s.qZA(),s.TgZ(135,"td"),s._uU(136,"boolean"),s.qZA(),s.TgZ(137,"td"),s._uU(138,"false"),s.qZA(),s.TgZ(139,"td"),s._uU(140,"When specified, allows selecting multiple values."),s.qZA(),s.qZA(),s.TgZ(141,"tr"),s.TgZ(142,"td"),s._uU(143,"tabindex"),s.qZA(),s.TgZ(144,"td"),s._uU(145,"number"),s.qZA(),s.TgZ(146,"td"),s._uU(147,"0"),s.qZA(),s.TgZ(148,"td"),s._uU(149,"Index of the element in tabbing order."),s.qZA(),s.qZA(),s.TgZ(150,"tr"),s.TgZ(151,"td"),s._uU(152,"style"),s.qZA(),s.TgZ(153,"td"),s._uU(154,"string"),s.qZA(),s.TgZ(155,"td"),s._uU(156,"null"),s.qZA(),s.TgZ(157,"td"),s._uU(158,"Inline style of the component."),s.qZA(),s.qZA(),s.TgZ(159,"tr"),s.TgZ(160,"td"),s._uU(161,"styleClass"),s.qZA(),s.TgZ(162,"td"),s._uU(163,"string"),s.qZA(),s.TgZ(164,"td"),s._uU(165,"null"),s.qZA(),s.TgZ(166,"td"),s._uU(167,"Style class of the component."),s.qZA(),s.qZA(),s.TgZ(168,"tr"),s.TgZ(169,"td"),s._uU(170,"ariaLabelledBy"),s.qZA(),s.TgZ(171,"td"),s._uU(172,"string"),s.qZA(),s.TgZ(173,"td"),s._uU(174,"null"),s.qZA(),s.TgZ(175,"td"),s._uU(176,"Establishes relationships between the component and label(s) where its value should be one or more element IDs."),s.qZA(),s.qZA(),s.TgZ(177,"tr"),s.TgZ(178,"td"),s._uU(179,"disabled"),s.qZA(),s.TgZ(180,"td"),s._uU(181,"boolean"),s.qZA(),s.TgZ(182,"td"),s._uU(183,"false"),s.qZA(),s.TgZ(184,"td"),s._uU(185,"When present, it specifies that the element should be disabled."),s.qZA(),s.qZA(),s.TgZ(186,"tr"),s.TgZ(187,"td"),s._uU(188,"dataKey"),s.qZA(),s.TgZ(189,"td"),s._uU(190,"string"),s.qZA(),s.TgZ(191,"td"),s._uU(192,"null"),s.qZA(),s.TgZ(193,"td"),s._uU(194,"A property to uniquely identify a value in options."),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(195,"h5"),s._uU(196,"Events"),s.qZA(),s.TgZ(197,"div",12),s.TgZ(198,"table",13),s.TgZ(199,"thead"),s.TgZ(200,"tr"),s.TgZ(201,"th"),s._uU(202,"Name"),s.qZA(),s.TgZ(203,"th"),s._uU(204,"Parameters"),s.qZA(),s.TgZ(205,"th"),s._uU(206,"Description"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(207,"tbody"),s.TgZ(208,"tr"),s.TgZ(209,"td"),s._uU(210,"onChange"),s.qZA(),s.TgZ(211,"td"),s._uU(212,"event.originalEvent: browser event"),s._UZ(213,"br"),s._uU(214," event.value: single value or an array of values that are selected "),s.qZA(),s.TgZ(215,"td"),s._uU(216,"Callback to invoke when value changes."),s.qZA(),s.qZA(),s.TgZ(217,"tr"),s.TgZ(218,"td"),s._uU(219,"onOptionClick"),s.qZA(),s.TgZ(220,"td"),s._uU(221,"event.originalEvent: browser event"),s._UZ(222,"br"),s._uU(223," event.option: SelectItem instance of the clicked button"),s._UZ(224,"br"),s._uU(225," event.index: Index of the clicked button "),s.qZA(),s.TgZ(226,"td"),s._uU(227,"Callback to invoke when a button is clicked."),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(228,"h5"),s._uU(229,"Dependencies"),s.qZA(),s.TgZ(230,"p"),s._uU(231,"None."),s.qZA(),s.qZA(),s.TgZ(232,"p-tabPanel",14),s.TgZ(233,"a",15),s.TgZ(234,"span"),s._uU(235,"View on GitHub"),s.qZA(),s.qZA(),s.TgZ(236,"a",16),s.TgZ(237,"span"),s._uU(238,"Edit in StackBlitz"),s.qZA(),s.qZA(),s.TgZ(239,"app-code",11),s.IAx(),s._uU(240,'\n<h5>Single Selection</h5>\n<p-selectButton [options]="stateOptions" [(ngModel)]="value1" optionLabel="label" optionValue="value"></p-selectButton>\n\n<h5>Multiple Selection</h5>\n<p-selectButton [options]="paymentOptions" [(ngModel)]="value2" multiple="multiple" optionLabel="name" optionValue="value"></p-selectButton>\n\n<h5>Custom Template</h5>\n<p-selectButton [options]="justifyOptions" [(ngModel)]="value3" optionLabel="icon">\n    <ng-template let-item>\n        <i [class]="item.icon"></i>\n    </ng-template>\n</p-selectButton>\n'),s.fQ9(),s.qZA(),s.TgZ(241,"app-code",10),s.IAx(),s._uU(242,"\nimport {Component} from '@angular/core';\n\n@Component({\n    templateUrl: './selectbuttondemo.html'\n})\nexport class SelectButtonDemo {\n\n    stateOptions: any[];\n\n    paymentOptions: any[];\n\n    justifyOptions: any[];\n\n    value1: string = \"off\";\n\n    value2: number;\n\n    value3: any;\n\n    constructor() {\n        this.stateOptions = [{label: 'Off', value: 'off'}, {label: 'On', value: 'on'}];\n\n        this.paymentOptions = [\n            {name: 'Option 1', value: 1},\n            {name: 'Option 2', value: 2},\n            {name: 'Option 3', value: 3}\n        ];\n\n        this.justifyOptions = [\n            {icon: 'pi pi-align-left', justify: 'Left'},\n            {icon: 'pi pi-align-right', justify: 'Right'},\n            {icon: 'pi pi-align-center', justify: 'Center'},\n            {icon: 'pi pi-align-justify', justify: 'Justify'}\n        ];\n    }\n}\n"),s.fQ9(),s.qZA(),s.qZA(),s.TgZ(243,"p-tabPanel",17),s.YNc(244,f,1,0,"ng-template",18),s.qZA(),s.qZA(),s.qZA()),2&t&&(s.xp6(11),s.Q6J("options",e.stateOptions)("ngModel",e.value1),s.xp6(3),s.Q6J("options",e.paymentOptions)("ngModel",e.value2),s.xp6(3),s.Q6J("options",e.justifyOptions)("ngModel",e.value3))},directives:[r.P,c.UN,a.JJ,a.On,p.xf,p.x4,d.h,g.jx],encapsulation:2}),t}(),h=function(){var t=l(function t(){o(this,t)});return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[u.Bz.forChild([{path:"",component:b}])],u.Bz]}),t}(),v=n(35439),A=n(56463),T=n(59202),y=((m=l(function t(){o(this,t)})).\u0275fac=function(t){return new(t||m)},m.\u0275mod=s.oAB({type:m}),m.\u0275inj=s.cJS({imports:[[i.ez,h,a.u5,v.Qy,A.hJ,T.LU,d.a,r.L]]}),m)}}])}();