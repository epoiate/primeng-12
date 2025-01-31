!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,s(o.key),o)}}function n(t,n,s){return n&&e(t.prototype,n),s&&e(t,s),Object.defineProperty(t,"prototype",{writable:!1}),t}function s(t){var e=function(t,e){if("object"!=typeof t||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var s=n.call(t,e||"default");if("object"!=typeof s)return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:e+""}(self.webpackChunkprimeng=self.webpackChunkprimeng||[]).push([[4623],{94623:function(e,s,o){"use strict";o.r(s),o.d(s,{ToastDemoModule:function(){return k}});var i=o(61116),a=o(42066),r=o(78230),u=o(87368),Z=o(12774),l=o(22320),c=o(74136),g=o(59766),p=o(10748),d=o(47299),m=o(90628);function T(t,e){if(1&t){var n=u.EpF();u.TgZ(0,"div",34),u.TgZ(1,"div",35),u._UZ(2,"i",36),u.TgZ(3,"h4"),u._uU(4),u.qZA(),u.TgZ(5,"p"),u._uU(6),u.qZA(),u.qZA(),u.TgZ(7,"div",37),u.TgZ(8,"div",38),u.TgZ(9,"button",39),u.NdJ("click",function(){return u.CHM(n),u.oxw().onConfirm()}),u.qZA(),u.qZA(),u.TgZ(10,"div",38),u.TgZ(11,"button",40),u.NdJ("click",function(){return u.CHM(n),u.oxw().onReject()}),u.qZA(),u.qZA(),u.qZA(),u.qZA()}if(2&t){var s=e.$implicit;u.xp6(4),u.Oqu(s.summary),u.xp6(2),u.Oqu(s.detail)}}function A(t,e){1&t&&u._UZ(0,"iframe",41)}var h,q=function(){return["/theming"]},y=function(){var e=function(){return n(function e(n){t(this,e),this.messageService=n},[{key:"showSuccess",value:function(){this.messageService.add({severity:"success",summary:"Success",detail:"Message Content"})}},{key:"showInfo",value:function(){this.messageService.add({severity:"info",summary:"Info",detail:"Message Content"})}},{key:"showWarn",value:function(){this.messageService.add({severity:"warn",summary:"Warn",detail:"Message Content"})}},{key:"showError",value:function(){this.messageService.add({severity:"error",summary:"Error",detail:"Message Content"})}},{key:"showCustom",value:function(){this.messageService.add({severity:"custom",summary:"Custom",detail:"Message Content",icon:"pi-file"})}},{key:"showTopLeft",value:function(){this.messageService.add({key:"tl",severity:"info",summary:"Info",detail:"Message Content"})}},{key:"showTopCenter",value:function(){this.messageService.add({key:"tc",severity:"warn",summary:"Warn",detail:"Message Content"})}},{key:"showBottomCenter",value:function(){this.messageService.add({key:"bc",severity:"success",summary:"Success",detail:"Message Content"})}},{key:"showConfirm",value:function(){this.messageService.clear(),this.messageService.add({key:"c",sticky:!0,severity:"warn",summary:"Are you sure?",detail:"Confirm to proceed"})}},{key:"showMultiple",value:function(){this.messageService.addAll([{severity:"success",summary:"Message 1",detail:"Message Content"},{severity:"info",summary:"Message 2",detail:"Message Content"},{severity:"warn",summary:"Message 3",detail:"Message Content"}])}},{key:"showSticky",value:function(){this.messageService.add({severity:"info",summary:"Sticky",detail:"Message Content",sticky:!0})}},{key:"onConfirm",value:function(){this.messageService.clear("c")}},{key:"onReject",value:function(){this.messageService.clear("c")}},{key:"clear",value:function(){this.messageService.clear()}}])}();return e.\u0275fac=function(t){return new(t||e)(u.Y36(r.ez))},e.\u0275cmp=u.Xpm({type:e,selectors:[["ng-component"]],features:[u._Bn([r.ez])],decls:489,vars:3,consts:[[1,"content-section","introduction"],["github","toast","stackblitz","toast-demo"],[1,"content-section","implementation"],["position","top-left","key","tl"],["position","top-center","key","tc"],["position","bottom-center","key","bc"],["position","bottom-center","key","c",3,"baseZIndex","onClose"],["pTemplate","message"],[1,"card"],["type","button","pButton","","pRipple","","label","Success",1,"p-button-success","p-mb-2",3,"click"],["type","button","pButton","","pRipple","","label","Info",1,"p-button-info","p-mb-2",3,"click"],["type","button","pButton","","pRipple","","label","Warn",1,"p-button-warning","p-mb-2",3,"click"],["type","button","pButton","","pRipple","","label","Error",1,"p-button-danger","p-mb-2",3,"click"],["type","button","pButton","","pRipple","","label","Custom",1,"p-button-help","p-mb-2",3,"click"],["type","button","pButton","","pRipple","","label","Top Left",3,"click"],["type","button","pButton","","pRipple","","label","Top Center",1,"p-button-warning",3,"click"],["type","button","pButton","","pRipple","","label","Bottom Center",1,"p-button-success",3,"click"],["type","button","pButton","","pRipple","","label","Multiple",1,"p-button-warning",3,"click"],["type","button","pButton","","pRipple","","label","Sticky",3,"click"],["type","button","pButton","","pRipple","","icon","pi pi-times","label","Clear",3,"click"],["type","button","pButton","","pRipple","","label","Confirm",1,"ui-button-warning",3,"click"],[1,"content-section","documentation"],["header","Documentation"],["lang","typescript"],[1,"doc-tablewrapper"],[1,"doc-table"],["lang","markup"],["href","#",3,"routerLink"],["header","Source"],["href","https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/toast","target","_blank",1,"btn-viewsource"],["href","https://stackblitz.com/edit/primeng-toast-demo","target","_blank",1,"btn-viewsource",2,"margin-left",".5em"],["lang","css"],["header","StackBlitz"],["pTemplate","content"],[1,"p-flex","p-flex-column",2,"flex","1"],[1,"p-text-center"],[1,"pi","pi-exclamation-triangle",2,"font-size","3rem"],[1,"p-grid","p-fluid"],[1,"p-col-6"],["type","button","pButton","","label","Yes",1,"p-button-success",3,"click"],["type","button","pButton","","label","No",1,"p-button-secondary",3,"click"],["src","https://stackblitz.com/edit/primeng-toast-demo?embed=1",2,"width","100%","height","768px","border","none"]],template:function(t,e){if(1&t){u.TgZ(0,"div",0),u.TgZ(1,"div"),u.TgZ(2,"h1"),u._uU(3,"Toast"),u.qZA(),u.TgZ(4,"p"),u._uU(5,"Toast is used to display messages in an overlay."),u.qZA(),u.qZA(),u._UZ(6,"app-demoActions",1),u.qZA(),u.TgZ(7,"div",2),u._UZ(8,"p-toast"),u._UZ(9,"p-toast",3),u._UZ(10,"p-toast",4),u._UZ(11,"p-toast",5),u.TgZ(12,"p-toast",6),u.NdJ("onClose",function(){return e.onReject()}),u.YNc(13,T,12,2,"ng-template",7),u.qZA(),u.TgZ(14,"div",8),u.TgZ(15,"h5"),u._uU(16,"Severities"),u.qZA(),u.TgZ(17,"button",9),u.NdJ("click",function(){return e.showSuccess()}),u.qZA(),u.TgZ(18,"button",10),u.NdJ("click",function(){return e.showInfo()}),u.qZA(),u.TgZ(19,"button",11),u.NdJ("click",function(){return e.showWarn()}),u.qZA(),u.TgZ(20,"button",12),u.NdJ("click",function(){return e.showError()}),u.qZA(),u.TgZ(21,"button",13),u.NdJ("click",function(){return e.showCustom()}),u.qZA(),u.TgZ(22,"h5"),u._uU(23,"Positions"),u.qZA(),u.TgZ(24,"button",14),u.NdJ("click",function(){return e.showTopLeft()}),u.qZA(),u.TgZ(25,"button",15),u.NdJ("click",function(){return e.showTopCenter()}),u.qZA(),u.TgZ(26,"button",16),u.NdJ("click",function(){return e.showBottomCenter()}),u.qZA(),u.TgZ(27,"h5"),u._uU(28,"Multiple"),u.qZA(),u.TgZ(29,"button",17),u.NdJ("click",function(){return e.showMultiple()}),u.qZA(),u.TgZ(30,"button",18),u.NdJ("click",function(){return e.showSticky()}),u.qZA(),u.TgZ(31,"h5"),u._uU(32,"Clear"),u.qZA(),u.TgZ(33,"button",19),u.NdJ("click",function(){return e.clear()}),u.qZA(),u.TgZ(34,"h5"),u._uU(35,"Template"),u.qZA(),u.TgZ(36,"button",20),u.NdJ("click",function(){return e.showConfirm()}),u.qZA(),u.qZA(),u.qZA(),u.TgZ(37,"div",21),u.TgZ(38,"p-tabView"),u.TgZ(39,"p-tabPanel",22),u.TgZ(40,"h5"),u._uU(41,"Import"),u.qZA(),u.TgZ(42,"app-code",23),u.IAx(),u._uU(43,"\nimport {ToastModule} from 'primeng/toast';\n"),u.fQ9(),u.qZA(),u.TgZ(44,"h5"),u._uU(45,"Getting Started"),u.qZA(),u.TgZ(46,"p"),u._uU(47,"A single message is specified by the Message interface having the following properties."),u.qZA(),u.TgZ(48,"div",24),u.TgZ(49,"table",25),u.TgZ(50,"thead"),u.TgZ(51,"tr"),u.TgZ(52,"th"),u._uU(53,"Name"),u.qZA(),u.TgZ(54,"th"),u._uU(55,"Type"),u.qZA(),u.TgZ(56,"th"),u._uU(57,"Default"),u.qZA(),u.TgZ(58,"th"),u._uU(59,"Description"),u.qZA(),u.qZA(),u.qZA(),u.TgZ(60,"tbody"),u.TgZ(61,"tr"),u.TgZ(62,"td"),u._uU(63,"severity"),u.qZA(),u.TgZ(64,"td"),u._uU(65,"string"),u.qZA(),u.TgZ(66,"td"),u._uU(67,"null"),u.qZA(),u.TgZ(68,"td"),u._uU(69,'Severity level of the message, valid values are "success", "info", "warn" and "error".'),u.qZA(),u.qZA(),u.TgZ(70,"tr"),u.TgZ(71,"td"),u._uU(72,"summary"),u.qZA(),u.TgZ(73,"td"),u._uU(74,"string"),u.qZA(),u.TgZ(75,"td"),u._uU(76,"null"),u.qZA(),u.TgZ(77,"td"),u._uU(78,"Summary text of the message."),u.qZA(),u.qZA(),u.TgZ(79,"tr"),u.TgZ(80,"td"),u._uU(81,"detail"),u.qZA(),u.TgZ(82,"td"),u._uU(83,"string"),u.qZA(),u.TgZ(84,"td"),u._uU(85,"null"),u.qZA(),u.TgZ(86,"td"),u._uU(87,"Detail text of the message."),u.qZA(),u.qZA(),u.TgZ(88,"tr"),u.TgZ(89,"td"),u._uU(90,"id"),u.qZA(),u.TgZ(91,"td"),u._uU(92,"any"),u.qZA(),u.TgZ(93,"td"),u._uU(94,"null"),u.qZA(),u.TgZ(95,"td"),u._uU(96,"Identifier of the message."),u.qZA(),u.qZA(),u.TgZ(97,"tr"),u.TgZ(98,"td"),u._uU(99,"key"),u.qZA(),u.TgZ(100,"td"),u._uU(101,"string"),u.qZA(),u.TgZ(102,"td"),u._uU(103,"null"),u.qZA(),u.TgZ(104,"td"),u._uU(105,"Key of the message in case message is targeted to a specific toast component."),u.qZA(),u.qZA(),u.TgZ(106,"tr"),u.TgZ(107,"td"),u._uU(108,"life"),u.qZA(),u.TgZ(109,"td"),u._uU(110,"number"),u.qZA(),u.TgZ(111,"td"),u._uU(112,"3000"),u.qZA(),u.TgZ(113,"td"),u._uU(114,"Number of time in milliseconds to wait before closing the message."),u.qZA(),u.qZA(),u.TgZ(115,"tr"),u.TgZ(116,"td"),u._uU(117,"sticky"),u.qZA(),u.TgZ(118,"td"),u._uU(119,"boolean"),u.qZA(),u.TgZ(120,"td"),u._uU(121,"false"),u.qZA(),u.TgZ(122,"td"),u._uU(123,"Whether the message should be automatically closed based on life property or kept visible."),u.qZA(),u.qZA(),u.TgZ(124,"tr"),u.TgZ(125,"td"),u._uU(126,"closable"),u.qZA(),u.TgZ(127,"td"),u._uU(128,"boolean"),u.qZA(),u.TgZ(129,"td"),u._uU(130,"true"),u.qZA(),u.TgZ(131,"td"),u._uU(132,"When enabled, displays a close icon to hide a message manually."),u.qZA(),u.qZA(),u.TgZ(133,"tr"),u.TgZ(134,"td"),u._uU(135,"data"),u.qZA(),u.TgZ(136,"td"),u._uU(137,"any"),u.qZA(),u.TgZ(138,"td"),u._uU(139,"null"),u.qZA(),u.TgZ(140,"td"),u._uU(141,"Arbitrary object to associate with the message."),u.qZA(),u.qZA(),u.TgZ(142,"tr"),u.TgZ(143,"td"),u._uU(144,"styleClass"),u.qZA(),u.TgZ(145,"td"),u._uU(146,"string"),u.qZA(),u.TgZ(147,"td"),u._uU(148,"null"),u.qZA(),u.TgZ(149,"td"),u._uU(150,"Style class of the message."),u.qZA(),u.qZA(),u.TgZ(151,"tr"),u.TgZ(152,"td"),u._uU(153,"contentStyleClass"),u.qZA(),u.TgZ(154,"td"),u._uU(155,"string"),u.qZA(),u.TgZ(156,"td"),u._uU(157,"null"),u.qZA(),u.TgZ(158,"td"),u._uU(159,"Style class of the content."),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.TgZ(160,"p"),u._uU(161,"A message is displayed using a MessageService, make sure your component has an injectable "),u.TgZ(162,"i"),u._uU(163,"MessageService"),u.qZA(),u._uU(164," defined as a provider otherwise Toast cannot be utilized."),u.qZA(),u.TgZ(165,"app-code",26),u.IAx(),u._uU(166,"\n<p-toast></p-toast>\n"),u.fQ9(),u.qZA(),u.TgZ(167,"app-code",23),u.IAx(),u._uU(168,"\nimport {Component} from '@angular/core';\nimport {MessageService} from 'primeng/api';\n\n@Component({\n    templateUrl: './my.component.html'\n})\nexport class MyComponent {\n\n    constructor(private messageService: MessageService) {}\n\n    addSingle() {\n        this.messageService.add({severity:'success', summary:'Service Message', detail:'Via MessageService'});\n    }\n\n    addMultiple() {\n        this.messageService.addAll([{severity:'success', summary:'Service Message', detail:'Via MessageService'},\n                                    {severity:'info', summary:'Info Message', detail:'Via MessageService'}]);\n    }\n\n    clear() {\n        this.messageService.clear();\n    }\n}\n"),u.fQ9(),u.qZA(),u.TgZ(169,"h5"),u._uU(170,"Positions"),u.qZA(),u.TgZ(171,"p"),u._uU(172,'Toast supports various positions where default is "top-right".'),u.qZA(),u.TgZ(173,"app-code",26),u.IAx(),u._uU(174,'\n<p-toast position="top-left"></p-toast>\n'),u.fQ9(),u.qZA(),u.TgZ(175,"p"),u._uU(176,"Valid values of the position property would be;"),u.qZA(),u.TgZ(177,"ul"),u.TgZ(178,"li"),u._uU(179,"top-right"),u.qZA(),u.TgZ(180,"li"),u._uU(181,"top-left"),u.qZA(),u.TgZ(182,"li"),u._uU(183,"bottom-right"),u.qZA(),u.TgZ(184,"li"),u._uU(185,"bottom-left"),u.qZA(),u.TgZ(186,"li"),u._uU(187,"top-center"),u.qZA(),u.TgZ(188,"li"),u._uU(189,"bottom-center"),u.qZA(),u.TgZ(190,"li"),u._uU(191,"center"),u.qZA(),u.qZA(),u.TgZ(192,"h5"),u._uU(193,"Targeting Messages"),u.qZA(),u.TgZ(194,"p"),u._uU(195,"A page may have multiple toast components, in case you'd like to target a specific message to a particular toast, use the "),u.TgZ(196,"i"),u._uU(197,"key"),u.qZA(),u._uU(198," property so that toast and the message can match."),u.qZA(),u.TgZ(199,"app-code",26),u.IAx(),u._uU(200,'\n<p-toast key="myKey1"></p-toast>\n<p-toast key="myKey2"></p-toast>\n'),u.fQ9(),u.qZA(),u.TgZ(201,"app-code",23),u.IAx(),u._uU(202,"\nthis.messageService.add({key: 'myKey1', severity:'success', summary: 'Summary Text', detail: 'Detail Text'});\nthis.messageService.add({key: 'myKey2', severity:'success', summary: 'Summary Text', detail: 'Detail Text'});\n"),u.fQ9(),u.qZA(),u.TgZ(203,"h5"),u._uU(204,"Clearing Messages"),u.qZA(),u.TgZ(205,"p"),u._uU(206,"Clicking the close icon on the message, removes it manually. Same can also be achieved programmatically using the clear function of the message service. Calling it without any arguments, removes all displayed messages whereas calling it with a key, removes the messages displayed on a toast having the same key. "),u.qZA(),u.TgZ(207,"app-code",26),u.IAx(),u._uU(208,'\n<p-toast key="myKey1"></p-toast>\n<p-toast key="myKey2"></p-toast>\n'),u.fQ9(),u.qZA(),u.TgZ(209,"app-code",23),u.IAx(),u._uU(210,"\nthis.messageService.clear();            //clears messages of both toast components\nthis.messageService.clear('myKey1');    //clears messages of the first toast only\n"),u.fQ9(),u.qZA(),u.TgZ(211,"h5"),u._uU(212,"Templating"),u.qZA(),u.TgZ(213,"p"),u._uU(214,"Templating allows customizing the content where the message instance is available as the implicit variable."),u.qZA(),u.TgZ(215,"app-code",26),u.IAx(),u._uU(216,'\n<p-toast position="center" key="c" (onClose)="onReject()" [baseZIndex]="5000">\n    <ng-template let-message pTemplate="message">\n        <div class="p-flex p-flex-column" style="flex: 1">\n            <div class="p-text-center">\n                <i class="pi pi-exclamation-triangle" style="font-size: 3rem"></i>\n                <h4>{{message.summary}}</h4>\n                <p>{{message.detail}}</p>\n            </div>\n            <div class="p-grid p-fluid">\n                <div class="p-col-6">\n                    <button type="button" pButton (click)="onConfirm()" label="Yes" class="p-button-success"></button>\n                </div>\n                <div class="p-col-6">\n                    <button type="button" pButton (click)="onReject()" label="No" class="p-button-secondary"></button>\n                </div>\n            </div>\n        </div>\n    </ng-template>\n</p-toast>\n'),u.fQ9(),u.qZA(),u.TgZ(217,"h5"),u._uU(218,"Responsive"),u.qZA(),u.TgZ(219,"p"),u._uU(220,"Toast styling can be adjusted per screen size with the "),u.TgZ(221,"i"),u._uU(222,"breakpoints"),u.qZA(),u._uU(223," option. The value of "),u.TgZ(224,"i"),u._uU(225,"breakpoints"),u.qZA(),u._uU(226," should be an object literal whose keys are the maximum screen sizes and values are the styles per screen. In example below, width of the toast messages cover the whole page on screens whose widths is smaller than 921px."),u.qZA(),u.TgZ(227,"app-code",26),u.IAx(),u._uU(228,"\n<p-toast [breakpoints]=\"{'920px': {width: '100%', right: '0', left: '0'}}\"></p-toast>\n"),u.fQ9(),u.qZA(),u.TgZ(229,"h5"),u._uU(230,"Animation Configuration"),u.qZA(),u.TgZ(231,"p"),u._uU(232,"Transition of the animations can be customized using the "),u.TgZ(233,"i"),u._uU(234,"showTransitionOptions"),u.qZA(),u._uU(235,", "),u.TgZ(236,"i"),u._uU(237,"hideTransitionOptions"),u.qZA(),u._uU(238,", "),u.TgZ(239,"i"),u._uU(240,"showTransformOptions"),u.qZA(),u._uU(241," and "),u.TgZ(242,"i"),u._uU(243,"hideTransformOptions"),u.qZA(),u._uU(244," properties, example below disables the animations altogether."),u.qZA(),u.TgZ(245,"app-code",26),u.IAx(),u._uU(246,"\n<p-toast [showTransitionOptions]=\"'0ms'\" [hideTransitionOptions]=\"'0ms'\"></p-toast>\n"),u.fQ9(),u.qZA(),u.TgZ(247,"p"),u._uU(248,"Another example is customizing the animation to appear from left to right."),u.qZA(),u.TgZ(249,"app-code",26),u.IAx(),u._uU(250,"\n<p-toast [showTransformOptions]=\"'translateX(100%)'\"></p-toast>\n"),u.fQ9(),u.qZA(),u.TgZ(251,"h5"),u._uU(252,"Properties"),u.qZA(),u.TgZ(253,"div",24),u.TgZ(254,"table",25),u.TgZ(255,"thead"),u.TgZ(256,"tr"),u.TgZ(257,"th"),u._uU(258,"Name"),u.qZA(),u.TgZ(259,"th"),u._uU(260,"Type"),u.qZA(),u.TgZ(261,"th"),u._uU(262,"Default"),u.qZA(),u.TgZ(263,"th"),u._uU(264,"Description"),u.qZA(),u.qZA(),u.qZA(),u.TgZ(265,"tbody"),u.TgZ(266,"tr"),u.TgZ(267,"td"),u._uU(268,"key"),u.qZA(),u.TgZ(269,"td"),u._uU(270,"string"),u.qZA(),u.TgZ(271,"td"),u._uU(272,"null"),u.qZA(),u.TgZ(273,"td"),u._uU(274,"Key to match the key of a message to display."),u.qZA(),u.qZA(),u.TgZ(275,"tr"),u.TgZ(276,"td"),u._uU(277,"style"),u.qZA(),u.TgZ(278,"td"),u._uU(279,"string"),u.qZA(),u.TgZ(280,"td"),u._uU(281,"null"),u.qZA(),u.TgZ(282,"td"),u._uU(283,"Inline style of the component."),u.qZA(),u.qZA(),u.TgZ(284,"tr"),u.TgZ(285,"td"),u._uU(286,"styleClass"),u.qZA(),u.TgZ(287,"td"),u._uU(288,"string"),u.qZA(),u.TgZ(289,"td"),u._uU(290,"null"),u.qZA(),u.TgZ(291,"td"),u._uU(292,"Style class of the component."),u.qZA(),u.qZA(),u.TgZ(293,"tr"),u.TgZ(294,"td"),u._uU(295,"position"),u.qZA(),u.TgZ(296,"td"),u._uU(297,"string"),u.qZA(),u.TgZ(298,"td"),u._uU(299,"top-right"),u.qZA(),u.TgZ(300,"td"),u._uU(301,'Position of the component, valid values are "top-right", "top-left", "bottom-left", "bottom-right", "top-center, "bottom-center" and "center".'),u.qZA(),u.qZA(),u.TgZ(302,"tr"),u.TgZ(303,"td"),u._uU(304,"baseZIndex"),u.qZA(),u.TgZ(305,"td"),u._uU(306,"number"),u.qZA(),u.TgZ(307,"td"),u._uU(308,"0"),u.qZA(),u.TgZ(309,"td"),u._uU(310,"Base zIndex value to use in layering."),u.qZA(),u.qZA(),u.TgZ(311,"tr"),u.TgZ(312,"td"),u._uU(313,"autoZIndex"),u.qZA(),u.TgZ(314,"td"),u._uU(315,"boolean"),u.qZA(),u.TgZ(316,"td"),u._uU(317,"true"),u.qZA(),u.TgZ(318,"td"),u._uU(319,"Whether to automatically manage layering."),u.qZA(),u.qZA(),u.TgZ(320,"tr"),u.TgZ(321,"td"),u._uU(322,"showTransitionOptions"),u.qZA(),u.TgZ(323,"td"),u._uU(324,"string"),u.qZA(),u.TgZ(325,"td"),u._uU(326,"300ms ease-out"),u.qZA(),u.TgZ(327,"td"),u._uU(328,"Transition options of the show animation."),u.qZA(),u.qZA(),u.TgZ(329,"tr"),u.TgZ(330,"td"),u._uU(331,"hideTransitionOptions"),u.qZA(),u.TgZ(332,"td"),u._uU(333,"string"),u.qZA(),u.TgZ(334,"td"),u._uU(335,"250ms ease-in"),u.qZA(),u.TgZ(336,"td"),u._uU(337,"Transition options of the hide animation."),u.qZA(),u.qZA(),u.TgZ(338,"tr"),u.TgZ(339,"td"),u._uU(340,"showTransformOptions"),u.qZA(),u.TgZ(341,"td"),u._uU(342,"string"),u.qZA(),u.TgZ(343,"td"),u._uU(344,"translateY(100%)"),u.qZA(),u.TgZ(345,"td"),u._uU(346,"Transform options of the show animation."),u.qZA(),u.qZA(),u.TgZ(347,"tr"),u.TgZ(348,"td"),u._uU(349,"hideTransformOptions"),u.qZA(),u.TgZ(350,"td"),u._uU(351,"string"),u.qZA(),u.TgZ(352,"td"),u._uU(353,"translateY(-100%)"),u.qZA(),u.TgZ(354,"td"),u._uU(355,"Transform options of the hide animation."),u.qZA(),u.qZA(),u.TgZ(356,"tr"),u.TgZ(357,"td"),u._uU(358,"preventOpenDuplicates"),u.qZA(),u.TgZ(359,"td"),u._uU(360,"boolean"),u.qZA(),u.TgZ(361,"td"),u._uU(362,"false"),u.qZA(),u.TgZ(363,"td"),u._uU(364,"It does not add the new message if there is already a toast displayed with the same content"),u.qZA(),u.qZA(),u.TgZ(365,"tr"),u.TgZ(366,"td"),u._uU(367,"breakpoints"),u.qZA(),u.TgZ(368,"td"),u._uU(369,"object"),u.qZA(),u.TgZ(370,"td"),u._uU(371,"null"),u.qZA(),u.TgZ(372,"td"),u._uU(373,"Object literal to define styles per screen size."),u.qZA(),u.qZA(),u.TgZ(374,"tr"),u.TgZ(375,"td"),u._uU(376,"preventDuplicates"),u.qZA(),u.TgZ(377,"td"),u._uU(378,"boolean"),u.qZA(),u.TgZ(379,"td"),u._uU(380,"false"),u.qZA(),u.TgZ(381,"td"),u._uU(382,"Displays only once a message with the same content."),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.TgZ(383,"h5"),u._uU(384,"Events"),u.qZA(),u.TgZ(385,"div",24),u.TgZ(386,"table",25),u.TgZ(387,"thead"),u.TgZ(388,"tr"),u.TgZ(389,"th"),u._uU(390,"Name"),u.qZA(),u.TgZ(391,"th"),u._uU(392,"Parameters"),u.qZA(),u.TgZ(393,"th"),u._uU(394,"Description"),u.qZA(),u.qZA(),u.qZA(),u.TgZ(395,"tbody"),u.TgZ(396,"tr"),u.TgZ(397,"td"),u._uU(398,"onClose"),u.qZA(),u.TgZ(399,"td"),u._uU(400,"event.message: Removed message"),u.qZA(),u.TgZ(401,"td"),u._uU(402,"Callback to invoke when a message is closed."),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.TgZ(403,"h5"),u._uU(404,"Templates"),u.qZA(),u.TgZ(405,"div",24),u.TgZ(406,"table",25),u.TgZ(407,"thead"),u.TgZ(408,"tr"),u.TgZ(409,"th"),u._uU(410,"Name"),u.qZA(),u.TgZ(411,"th"),u._uU(412,"Parameters"),u.qZA(),u.qZA(),u.qZA(),u.TgZ(413,"tbody"),u.TgZ(414,"tr"),u.TgZ(415,"td"),u._uU(416,"message"),u.qZA(),u.TgZ(417,"td"),u._uU(418,"-"),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.TgZ(419,"h5"),u._uU(420,"Styling"),u.qZA(),u.TgZ(421,"p"),u._uU(422,"Following is the list of structural style classes, for theming classes visit "),u.TgZ(423,"a",27),u._uU(424,"theming page"),u.qZA(),u._uU(425,"."),u.qZA(),u.TgZ(426,"div",24),u.TgZ(427,"table",25),u.TgZ(428,"thead"),u.TgZ(429,"tr"),u.TgZ(430,"th"),u._uU(431,"Name"),u.qZA(),u.TgZ(432,"th"),u._uU(433,"Element"),u.qZA(),u.qZA(),u.qZA(),u.TgZ(434,"tbody"),u.TgZ(435,"tr"),u.TgZ(436,"td"),u._uU(437,"p-toast"),u.qZA(),u.TgZ(438,"td"),u._uU(439,"Main container element."),u.qZA(),u.qZA(),u.TgZ(440,"tr"),u.TgZ(441,"td"),u._uU(442,"p-toast-message"),u.qZA(),u.TgZ(443,"td"),u._uU(444,"Container of a message item."),u.qZA(),u.qZA(),u.TgZ(445,"tr"),u.TgZ(446,"td"),u._uU(447,"p-toast-icon-close"),u.qZA(),u.TgZ(448,"td"),u._uU(449,"Close icon of a message."),u.qZA(),u.qZA(),u.TgZ(450,"tr"),u.TgZ(451,"td"),u._uU(452,"p-toast-icon"),u.qZA(),u.TgZ(453,"td"),u._uU(454,"Severity icon."),u.qZA(),u.qZA(),u.TgZ(455,"tr"),u.TgZ(456,"td"),u._uU(457,"p-toast-message-content"),u.qZA(),u.TgZ(458,"td"),u._uU(459,"Container of message texts."),u.qZA(),u.qZA(),u.TgZ(460,"tr"),u.TgZ(461,"td"),u._uU(462,"p-toast-title"),u.qZA(),u.TgZ(463,"td"),u._uU(464,"Summary of the message."),u.qZA(),u.qZA(),u.TgZ(465,"tr"),u.TgZ(466,"td"),u._uU(467,"p-toast-title"),u.qZA(),u.TgZ(468,"td"),u._uU(469,"Detail of the message."),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.TgZ(470,"h5"),u._uU(471,"Dependencies"),u.qZA(),u.TgZ(472,"p"),u._uU(473,"None."),u.qZA(),u.qZA(),u.TgZ(474,"p-tabPanel",28),u.TgZ(475,"a",29),u.TgZ(476,"span"),u._uU(477,"View on GitHub"),u.qZA(),u.qZA(),u.TgZ(478,"a",30),u.TgZ(479,"span"),u._uU(480,"Edit in StackBlitz"),u.qZA(),u.qZA(),u.TgZ(481,"app-code",26),u.IAx(),u._uU(482,'\n<p-toast></p-toast>\n<p-toast position="top-left" key="tl"></p-toast>\n<p-toast position="top-center" key="tc"></p-toast>\n<p-toast position="bottom-center" key="bc"></p-toast>\n\n<p-toast position="bottom-center" key="c" (onClose)="onReject()" [baseZIndex]="5000">\n    <ng-template let-message pTemplate="message">\n        <div class="p-flex p-flex-column" style="flex: 1">\n            <div class="p-text-center">\n                <i class="pi pi-exclamation-triangle" style="font-size: 3rem"></i>\n                <h4>{{message.summary}}</h4>\n                <p>{{message.detail}}</p>\n            </div>\n            <div class="p-grid p-fluid">\n                <div class="p-col-6">\n                    <button type="button" pButton (click)="onConfirm()" label="Yes" class="p-button-success"></button>\n                </div>\n                <div class="p-col-6">\n                    <button type="button" pButton (click)="onReject()" label="No" class="p-button-secondary"></button>\n                </div>\n            </div>\n        </div>\n    </ng-template>\n</p-toast>\n\n<div class="card">\n    <h5>Severities</h5>\n    <button type="button" pButton pRipple (click)="showSuccess()" label="Success" class="p-button-success p-mb-2"></button>\n    <button type="button" pButton pRipple (click)="showInfo()" label="Info" class="p-button-info p-mb-2"></button>\n    <button type="button" pButton pRipple (click)="showWarn()" label="Warn" class="p-button-warning p-mb-2"></button>\n    <button type="button" pButton pRipple (click)="showError()" label="Error" class="p-button-danger p-mb-2"></button>\n\n    <h5>Positions</h5>\n    <button type="button" pButton pRipple (click)="showTopLeft()" label="Top Left"></button>\n    <button type="button" pButton pRipple (click)="showTopCenter()" label="Top Center" class="p-button-warning"></button>\n    <button type="button" pButton pRipple (click)="showBottomCenter()" label="Bottom Center" class="p-button-success"></button>\n\n    <h5>Multiple</h5>\n    <button type="button" pButton pRipple (click)="showMultiple()" label="Multiple" class="p-button-warning"></button>\n    <button type="button" pButton pRipple (click)="showSticky()" label="Sticky"></button>\n\n    <h5>Clear</h5>\n    <button type="button" pButton pRipple (click)="clear()" icon="pi pi-times" label="Clear"></button>\n\n    <h5>Template</h5>\n    <button type="button" pButton pRipple (click)="showConfirm()" label="Confirm" class="ui-button-warning"></button>\n</div>\n'),u.fQ9(),u.qZA(),u.TgZ(483,"app-code",23),u.IAx(),u._uU(484,"\nimport {Component} from '@angular/core';\nimport {MessageService} from 'primeng/api';\n\n@Component({\n    templateUrl: './toastdemo.html',\n    styleUrls: ['./toastdemo.scss'],\n    providers: [MessageService]\n\n})\nexport class ToastDemo {\n\n    constructor(private messageService: MessageService) {}\n\n    showSuccess() {\n        this.messageService.add({severity:'success', summary: 'Success', detail: 'Message Content'});\n    }\n\n    showInfo() {\n        this.messageService.add({severity:'info', summary: 'Info', detail: 'Message Content'});\n    }\n\n    showWarn() {\n        this.messageService.add({severity:'warn', summary: 'Warn', detail: 'Message Content'});\n    }\n\n    showError() {\n        this.messageService.add({severity:'error', summary: 'Error', detail: 'Message Content'});\n    }\n\n    showCustom() {\n        this.messageService.add({severity:'custom', summary: 'Custom', detail: 'Message Content', icon: 'pi-file'});\n    }\n\n    showTopLeft() {\n        this.messageService.add({key: 'tl', severity:'info', summary: 'Info', detail: 'Message Content'});\n    }\n\n    showTopCenter() {\n        this.messageService.add({key: 'tc', severity:'warn', summary: 'Warn', detail: 'Message Content'});\n    }\n\n    showBottomCenter() {\n        this.messageService.add({key: 'bc', severity:'success', summary: 'Success', detail: 'Message Content'});\n    }\n\n    showConfirm() {\n        this.messageService.clear();\n        this.messageService.add({key: 'c', sticky: true, severity:'warn', summary:'Are you sure?', detail:'Confirm to proceed'});\n    }\n\n    showMultiple() {\n        this.messageService.addAll([\n            {severity:'success', summary:'Message 1', detail:'Message Content'},\n            {severity:'info', summary:'Message 2', detail:'Message Content'},\n            {severity:'warn', summary:'Message 3', detail:'Message Content'}\n        ]);\n    }\n\n    showSticky() {\n        this.messageService.add({severity:'info', summary: 'Sticky', detail: 'Message Content', sticky: true});\n    }\n\n    onConfirm() {\n        this.messageService.clear('c');\n    }\n\n    onReject() {\n        this.messageService.clear('c');\n    }\n\n    clear() {\n        this.messageService.clear();\n    }\n}\n"),u.fQ9(),u.qZA(),u.TgZ(485,"app-code",31);u.IAx(),u._uU(486,"\nbutton {\n    min-width: 10rem;\n    margin-right: .5rem;\n}\n\n@media screen and (max-width: 960px) {\n    button {\n        width: 100%;\n        margin-bottom: .5rem;\n    }\n}\n\n:host ::ng-deep {\n    .p-toast-message-custom {\n        background-color: #E1CFE7;\n        border: solid #8A427A;\n        border-width: 0 0 0 6px;\n        color: #2c1e30;\n        .p-toast-icon-close {\n            color: #2c1e30;\n        }\n    }\n}\n"),u.fQ9(),u.qZA(),u.qZA(),u.TgZ(487,"p-tabPanel",32),u.YNc(488,A,1,0,"ng-template",33),u.qZA(),u.qZA(),u.qZA()}2&t&&(u.xp6(12),u.Q6J("baseZIndex",5e3),u.xp6(411),u.Q6J("routerLink",u.DdM(2,q)))},directives:[Z.P,l.FN,c.jx,g.Hq,p.H,d.xf,d.x4,m.h,a.yS],styles:["button[_ngcontent-%COMP%]{min-width:10rem;margin-right:.5rem}@media screen and (max-width:960px){button[_ngcontent-%COMP%]{width:100%;margin-bottom:.5rem}}[_nghost-%COMP%]     .p-toast-message-custom{background-color:#e1cfe7;border:solid #8a427a;border-width:0 0 0 6px;color:#2c1e30}[_nghost-%COMP%]     .p-toast-message-custom .p-toast-icon-close{color:#2c1e30}"]}),e}(),b=function(){var e=n(function e(){t(this,e)});return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=u.oAB({type:e}),e.\u0275inj=u.cJS({imports:[[a.Bz.forChild([{path:"",component:y}])],a.Bz]}),e}(),f=o(35167),_=o(56463),U=o(59202),v=o(37329),k=((h=n(function e(){t(this,e)})).\u0275fac=function(t){return new(t||h)},h.\u0275mod=u.oAB({type:h}),h.\u0275inj=u.cJS({imports:[[i.ez,b,f.EV,_.hJ,U.LU,v.T,Z.L,m.a]]}),h)}}])}();