!function(){function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var e=0;e<n.length;e++){var a=n[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,r(a.key),a)}}function e(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function r(t){var n=function(t,n){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,n||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"==typeof n?n:n+""}(self.webpackChunkprimeng=self.webpackChunkprimeng||[]).push([[8789],{90628:function(n,r,a){"use strict";a.d(r,{h:function(){return s},a:function(){return g}});var Z=a(61116),o=a(87368),u=["code"],i=["*"],s=function(){var n=function(){return e(function n(e){t(this,n),this.el=e,this.lang="markup"},[{key:"ngAfterViewInit",value:function(){window.Prism&&window.Prism.highlightElement(this.codeViewChild.nativeElement)}}])}();return n.\u0275fac=function(t){return new(t||n)(o.Y36(o.SBq))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-code"]],viewQuery:function(t,n){var e;(1&t&&o.Gf(u,5),2&t)&&(o.iGM(e=o.CRH())&&(n.codeViewChild=e.first))},inputs:{lang:"lang"},ngContentSelectors:i,decls:5,vars:1,consts:[[3,"ngClass"],["code",""]],template:function(t,n){1&t&&(o.F$t(),o.TgZ(0,"pre",0),o.TgZ(1,"code",null,1),o.Hsn(3),o._uU(4,"\n"),o.qZA(),o.qZA()),2&t&&o.Q6J("ngClass","language-"+n.lang)},directives:[Z.mk],encapsulation:2}),n}(),g=function(){var n=e(function n(){t(this,n)});return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[[Z.ez]]}),n}()},18789:function(n,r,a){"use strict";a.r(r),a.d(r,{I18NModule:function(){return A}});var Z,o=a(61116),u=a(42066),i=a(87368),s=a(90628),g=function(){var n=e(function n(){t(this,n)});return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=i.Xpm({type:n,selectors:[["ng-component"]],decls:260,vars:0,consts:[[1,"content-section","documentation"],["lang","typescript"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(t,n){1&t&&(i.TgZ(0,"div",0),i.TgZ(1,"h1"),i._uU(2,"I18N"),i.qZA(),i.TgZ(3,"p"),i._uU(4,"The i18n API allows setting translations globally for the components and integration with translation libraries."),i.qZA(),i.TgZ(5,"h5"),i._uU(6,"PrimeNGConfig"),i.qZA(),i.TgZ(7,"p"),i._uU(8,"A translation is applied using the PrimeNGConfig instance so begin with injecting it. A common location is the application root to initalize the default language used by the components. English is the default language and "),i.TgZ(9,"i"),i._uU(10,"setTranslation"),i.qZA(),i._uU(11," function is used to change the values by passing a "),i.TgZ(12,"i"),i._uU(13,"Translation"),i.qZA(),i._uU(14," object."),i.qZA(),i.TgZ(15,"app-code",1),i.IAx(),i._uU(16,"\nimport { Component, OnInit, OnDestroy } from '@angular/core';\nimport { PrimeNGConfig } from 'primeng/api';\n\n@Component({\n    selector: 'app-root',\n    templateUrl: './app.component.html'\n})\nexport class AppComponent implements OnInit, OnDestroy {\n\n    constructor(private config: PrimeNGConfig) {}\n\n    ngOnInit() {\n        this.config.setTranslation({\n            accept: 'Accept',\n            reject: 'Cancel',\n            //translations\n        });\n    }\n}\n"),i.fQ9(),i.qZA(),i.TgZ(17,"h5"),i._uU(18,"ngx-translate"),i.qZA(),i.TgZ(19,"p"),i._uU(20,"i18n API can easily be integrated with 3rd party libraries such as ngx-translate that even allows dynamically changing the language in the application."),i.qZA(),i.TgZ(21,"h5"),i._uU(22,"en.json"),i.qZA(),i.TgZ(23,"app-code",1),i.IAx(),i._uU(24,'\n{\n    "primeng": {\n        "startsWith": "Starts with",\n        "contains": "Contains",\n        "notContains": "Not contains",\n        "endsWith": "Ends with",\n        "equals": "Equals",\n        "notEquals": "Not equals",\n        "noFilter": "No Filter",\n        "lt": "Less than",\n        "lte": "Less than or equal to",\n        "gt": "Greater than",\n        "gte": "Greater than or equal to",\n        "is": "Is",\n        "isNot": "Is not",\n        "before": "Before",\n        "after": "After",\n        "dateIs": "Date is",\n        "dateIsNot": "Date is not",\n        "dateBefore": "Date is before",\n        "dateAfter": "Date is after",\n        "clear": "Clear",\n        "apply": "Apply",\n        "matchAll": "Match All",\n        "matchAny": "Match Any",\n        "addRule": "Add Rule",\n        "removeRule": "Remove Rule",\n        "accept": "Yes",\n        "reject": "No",\n        "choose": "Choose",\n        "upload": "Upload",\n        "cancel": "Cancel",\n        "dayNames": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],\n        "dayNamesShort": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],\n        "dayNamesMin": ["Su","Mo","Tu","We","Th","Fr","Sa"],\n        "monthNames": ["January","February","March","April","May","June","July","August","September","October","November","December"],\n        "monthNamesShort": ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],\n        "dateFormat": "mm/dd/yy",\n        "today": "Today",\n        "weekHeader": "Wk",\n        "weak": \'Weak\',\n        "medium": \'Medium\',\n        "strong": \'Strong\',\n        "passwordPrompt": \'Enter a password\',\n        "emptyMessage": \'No results found\',\n        "emptyFilterMessage": \'No results found\'\n    }\n}\n'),i.fQ9(),i.qZA(),i.TgZ(25,"app-code",1),i.IAx(),i._uU(26,"\nimport { Component, OnInit, OnDestroy } from '@angular/core';\nimport { PrimeNGConfig } from 'primeng/api';\nimport { TranslateService } from '@ngx-translate/core';\n\n@Component({\n    selector: 'app-root',\n    templateUrl: './app.component.html'\n})\nexport class AppComponent implements OnInit, OnDestroy {\n\n    constructor(private config: PrimeNGConfig, private translateService: TranslateService) {}\n\n    ngOnInit() {\n        this.translateService.setDefaultLang('en');\n    }\n\n    translate(lang: string) {\n        this.translateService.use(lang);\n        this.translateService.get('primeng').subscribe(res => this.config.setTranslation(res));\n    }\n}\n"),i.fQ9(),i.qZA(),i.TgZ(27,"h5"),i._uU(28,"Translation"),i.qZA(),i.TgZ(29,"p"),i._uU(30,"Translation API consists of various values used throughout the component library."),i.qZA(),i.TgZ(31,"div",2),i.TgZ(32,"table",3),i.TgZ(33,"thead"),i.TgZ(34,"tr"),i.TgZ(35,"th"),i._uU(36,"Key"),i.qZA(),i.TgZ(37,"th"),i._uU(38,"Value"),i.qZA(),i.qZA(),i.qZA(),i.TgZ(39,"tbody"),i.TgZ(40,"tr"),i.TgZ(41,"td"),i._uU(42,"startsWith"),i.qZA(),i.TgZ(43,"td"),i._uU(44,"Starts with"),i.qZA(),i.qZA(),i.TgZ(45,"tr"),i.TgZ(46,"td"),i._uU(47,"contains"),i.qZA(),i.TgZ(48,"td"),i._uU(49,"Contains"),i.qZA(),i.qZA(),i.TgZ(50,"tr"),i.TgZ(51,"td"),i._uU(52,"notContains"),i.qZA(),i.TgZ(53,"td"),i._uU(54,"Not contains"),i.qZA(),i.qZA(),i.TgZ(55,"tr"),i.TgZ(56,"td"),i._uU(57,"endsWith"),i.qZA(),i.TgZ(58,"td"),i._uU(59,"Ends with"),i.qZA(),i.qZA(),i.TgZ(60,"tr"),i.TgZ(61,"td"),i._uU(62,"equals"),i.qZA(),i.TgZ(63,"td"),i._uU(64,"Equals"),i.qZA(),i.qZA(),i.TgZ(65,"tr"),i.TgZ(66,"td"),i._uU(67,"notEquals"),i.qZA(),i.TgZ(68,"td"),i._uU(69,"Not equals"),i.qZA(),i.qZA(),i.TgZ(70,"tr"),i.TgZ(71,"td"),i._uU(72,"noFilter"),i.qZA(),i.TgZ(73,"td"),i._uU(74,"No Filter"),i.qZA(),i.qZA(),i.TgZ(75,"tr"),i.TgZ(76,"td"),i._uU(77,"lt"),i.qZA(),i.TgZ(78,"td"),i._uU(79,"Less than"),i.qZA(),i.qZA(),i.TgZ(80,"tr"),i.TgZ(81,"td"),i._uU(82,"lte"),i.qZA(),i.TgZ(83,"td"),i._uU(84,"Less than or equal to"),i.qZA(),i.qZA(),i.TgZ(85,"tr"),i.TgZ(86,"td"),i._uU(87,"gt"),i.qZA(),i.TgZ(88,"td"),i._uU(89,"Greater than"),i.qZA(),i.qZA(),i.TgZ(90,"tr"),i.TgZ(91,"td"),i._uU(92,"gte"),i.qZA(),i.TgZ(93,"td"),i._uU(94,"Greater than or equal to"),i.qZA(),i.qZA(),i.TgZ(95,"tr"),i.TgZ(96,"td"),i._uU(97,"is"),i.qZA(),i.TgZ(98,"td"),i._uU(99,"Is"),i.qZA(),i.qZA(),i.TgZ(100,"tr"),i.TgZ(101,"td"),i._uU(102,"isNot"),i.qZA(),i.TgZ(103,"td"),i._uU(104,"Is not"),i.qZA(),i.qZA(),i.TgZ(105,"tr"),i.TgZ(106,"td"),i._uU(107,"before"),i.qZA(),i.TgZ(108,"td"),i._uU(109,"Before"),i.qZA(),i.qZA(),i.TgZ(110,"tr"),i.TgZ(111,"td"),i._uU(112,"after"),i.qZA(),i.TgZ(113,"td"),i._uU(114,"After"),i.qZA(),i.qZA(),i.TgZ(115,"tr"),i.TgZ(116,"td"),i._uU(117,"dateIs"),i.qZA(),i.TgZ(118,"td"),i._uU(119,"Date is"),i.qZA(),i.qZA(),i.TgZ(120,"tr"),i.TgZ(121,"td"),i._uU(122,"dateIsNot"),i.qZA(),i.TgZ(123,"td"),i._uU(124,"Date is not"),i.qZA(),i.qZA(),i.TgZ(125,"tr"),i.TgZ(126,"td"),i._uU(127,"dateBefore"),i.qZA(),i.TgZ(128,"td"),i._uU(129,"Date is before"),i.qZA(),i.qZA(),i.TgZ(130,"tr"),i.TgZ(131,"td"),i._uU(132,"dateAfter"),i.qZA(),i.TgZ(133,"td"),i._uU(134,"Date is after"),i.qZA(),i.qZA(),i.TgZ(135,"tr"),i.TgZ(136,"td"),i._uU(137,"clear"),i.qZA(),i.TgZ(138,"td"),i._uU(139,"Clear"),i.qZA(),i.qZA(),i.TgZ(140,"tr"),i.TgZ(141,"td"),i._uU(142,"apply"),i.qZA(),i.TgZ(143,"td"),i._uU(144,"Apply"),i.qZA(),i.qZA(),i.TgZ(145,"tr"),i.TgZ(146,"td"),i._uU(147,"matchAll"),i.qZA(),i.TgZ(148,"td"),i._uU(149,"Match All"),i.qZA(),i.qZA(),i.TgZ(150,"tr"),i.TgZ(151,"td"),i._uU(152,"matchAny"),i.qZA(),i.TgZ(153,"td"),i._uU(154,"Match Any"),i.qZA(),i.qZA(),i.TgZ(155,"tr"),i.TgZ(156,"td"),i._uU(157,"addRule"),i.qZA(),i.TgZ(158,"td"),i._uU(159,"Add Rule"),i.qZA(),i.qZA(),i.TgZ(160,"tr"),i.TgZ(161,"td"),i._uU(162,"removeRule"),i.qZA(),i.TgZ(163,"td"),i._uU(164,"Remove Rule"),i.qZA(),i.qZA(),i.TgZ(165,"tr"),i.TgZ(166,"td"),i._uU(167,"accept"),i.qZA(),i.TgZ(168,"td"),i._uU(169,"Yes"),i.qZA(),i.qZA(),i.TgZ(170,"tr"),i.TgZ(171,"td"),i._uU(172,"reject"),i.qZA(),i.TgZ(173,"td"),i._uU(174,"No"),i.qZA(),i.qZA(),i.TgZ(175,"tr"),i.TgZ(176,"td"),i._uU(177,"choose"),i.qZA(),i.TgZ(178,"td"),i._uU(179,"Choose"),i.qZA(),i.qZA(),i.TgZ(180,"tr"),i.TgZ(181,"td"),i._uU(182,"upload"),i.qZA(),i.TgZ(183,"td"),i._uU(184,"Upload"),i.qZA(),i.qZA(),i.TgZ(185,"tr"),i.TgZ(186,"td"),i._uU(187,"cancel"),i.qZA(),i.TgZ(188,"td"),i._uU(189,"Cancel"),i.qZA(),i.qZA(),i.TgZ(190,"tr"),i.TgZ(191,"td"),i._uU(192,"dayNames"),i.qZA(),i.TgZ(193,"td"),i._uU(194,'["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]'),i.qZA(),i.qZA(),i.TgZ(195,"tr"),i.TgZ(196,"td"),i._uU(197,"dayNamesShort"),i.qZA(),i.TgZ(198,"td"),i._uU(199,'["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]'),i.qZA(),i.qZA(),i.TgZ(200,"tr"),i.TgZ(201,"td"),i._uU(202,"dayNamesMin"),i.qZA(),i.TgZ(203,"td"),i._uU(204,'["Su","Mo","Tu","We","Th","Fr","Sa"]'),i.qZA(),i.qZA(),i.TgZ(205,"tr"),i.TgZ(206,"td"),i._uU(207,"monthNames"),i.qZA(),i.TgZ(208,"td"),i._uU(209,'["January","February","March","April","May","June","July","August","September","October","November","December"]'),i.qZA(),i.qZA(),i.TgZ(210,"tr"),i.TgZ(211,"td"),i._uU(212,"monthNamesShort"),i.qZA(),i.TgZ(213,"td"),i._uU(214,'["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]'),i.qZA(),i.qZA(),i.TgZ(215,"tr"),i.TgZ(216,"td"),i._uU(217,"dateFormat"),i.qZA(),i.TgZ(218,"td"),i._uU(219,"mm/dd/yy"),i.qZA(),i.qZA(),i.TgZ(220,"tr"),i.TgZ(221,"td"),i._uU(222,"today"),i.qZA(),i.TgZ(223,"td"),i._uU(224,"Today"),i.qZA(),i.qZA(),i.TgZ(225,"tr"),i.TgZ(226,"td"),i._uU(227,"weekHeader"),i.qZA(),i.TgZ(228,"td"),i._uU(229,"Wk"),i.qZA(),i.qZA(),i.TgZ(230,"tr"),i.TgZ(231,"td"),i._uU(232,"weak"),i.qZA(),i.TgZ(233,"td"),i._uU(234,"Weak"),i.qZA(),i.qZA(),i.TgZ(235,"tr"),i.TgZ(236,"td"),i._uU(237,"medium"),i.qZA(),i.TgZ(238,"td"),i._uU(239,"Medium"),i.qZA(),i.qZA(),i.TgZ(240,"tr"),i.TgZ(241,"td"),i._uU(242,"strong"),i.qZA(),i.TgZ(243,"td"),i._uU(244,"Strong"),i.qZA(),i.qZA(),i.TgZ(245,"tr"),i.TgZ(246,"td"),i._uU(247,"passwordPrompt"),i.qZA(),i.TgZ(248,"td"),i._uU(249,"Enter a password"),i.qZA(),i.qZA(),i.TgZ(250,"tr"),i.TgZ(251,"td"),i._uU(252,"emptyMessage"),i.qZA(),i.TgZ(253,"td"),i._uU(254,"No results found"),i.qZA(),i.qZA(),i.TgZ(255,"tr"),i.TgZ(256,"td"),i._uU(257,"emptyFilterMessage"),i.qZA(),i.TgZ(258,"td"),i._uU(259,"No results found"),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA())},directives:[s.h],encapsulation:2}),n}(),d=function(){var n=e(function n(){t(this,n)});return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=i.oAB({type:n}),n.\u0275inj=i.cJS({imports:[[u.Bz.forChild([{path:"",component:g}])],u.Bz]}),n}(),A=((Z=e(function n(){t(this,n)})).\u0275fac=function(t){return new(t||Z)},Z.\u0275mod=i.oAB({type:Z}),Z.\u0275inj=i.cJS({imports:[[o.ez,s.a,d]]}),Z)}}])}();