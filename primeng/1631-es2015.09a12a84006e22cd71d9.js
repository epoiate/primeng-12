(self.webpackChunkprimeng=self.webpackChunkprimeng||[]).push([[1631],{86020:function(e,s,t){"use strict";t.d(s,{V:function(){return U},$:function(){return _}});var n=t(87368),i=t(61116),a=t(99713),r=t(78230),g=t(37329),o=t(10748);function l(e,s){if(1&e&&n._UZ(0,"span",11),2&e){const e=n.oxw(2).$implicit;n.Q6J("innerHTML",e.summary,n.oJD)}}function u(e,s){if(1&e&&n._UZ(0,"span",12),2&e){const e=n.oxw(2).$implicit;n.Q6J("innerHTML",e.detail,n.oJD)}}function c(e,s){if(1&e&&(n.ynx(0),n.YNc(1,l,1,1,"span",9),n.YNc(2,u,1,1,"span",10),n.BQk()),2&e){const e=n.oxw().$implicit;n.xp6(1),n.Q6J("ngIf",e.summary),n.xp6(1),n.Q6J("ngIf",e.detail)}}function p(e,s){if(1&e&&(n.TgZ(0,"span",15),n._uU(1),n.qZA()),2&e){const e=n.oxw(2).$implicit;n.xp6(1),n.Oqu(e.summary)}}function m(e,s){if(1&e&&(n.TgZ(0,"span",16),n._uU(1),n.qZA()),2&e){const e=n.oxw(2).$implicit;n.xp6(1),n.Oqu(e.detail)}}function Z(e,s){if(1&e&&(n.YNc(0,p,2,1,"span",13),n.YNc(1,m,2,1,"span",14)),2&e){const e=n.oxw().$implicit;n.Q6J("ngIf",e.summary),n.xp6(1),n.Q6J("ngIf",e.detail)}}function d(e,s){if(1&e){const e=n.EpF();n.TgZ(0,"button",17),n.NdJ("click",function(){n.CHM(e);const s=n.oxw().index;return n.oxw(2).removeMessage(s)}),n._UZ(1,"i",18),n.qZA()}}const T=function(e,s){return{showTransitionParams:e,hideTransitionParams:s}},h=function(e){return{value:"visible",params:e}},A=function(e,s,t,n){return{"pi-info-circle":e,"pi-check":s,"pi-exclamation-triangle":t,"pi-times-circle":n}};function q(e,s){if(1&e&&(n.TgZ(0,"div",4),n.TgZ(1,"div",5),n._UZ(2,"span",6),n.YNc(3,c,3,2,"ng-container",1),n.YNc(4,Z,2,2,"ng-template",null,7,n.W1O),n.YNc(6,d,2,0,"button",8),n.qZA(),n.qZA()),2&e){const e=s.$implicit,t=n.MAs(5),i=n.oxw(2);n.Q6J("ngClass","p-message p-message-"+e.severity)("@messageAnimation",n.VKq(11,h,n.WLB(8,T,i.showTransitionOptions,i.hideTransitionOptions))),n.xp6(2),n.Tol("p-message-icon pi"+(e.icon?" "+e.icon:"")),n.Q6J("ngClass",n.l5B(13,A,"info"===e.severity,"success"===e.severity,"warn"===e.severity,"error"===e.severity)),n.xp6(1),n.Q6J("ngIf",!i.escape)("ngIfElse",t),n.xp6(3),n.Q6J("ngIf",i.closable)}}function v(e,s){if(1&e&&(n.ynx(0),n.YNc(1,q,7,18,"div",3),n.BQk()),2&e){const e=n.oxw();n.xp6(1),n.Q6J("ngForOf",e.value)}}function y(e,s){1&e&&n.GkF(0)}function f(e,s){if(1&e&&(n.TgZ(0,"div",4),n.TgZ(1,"div",5),n.YNc(2,y,1,0,"ng-container",19),n.qZA(),n.qZA()),2&e){const e=n.oxw();n.Q6J("ngClass","p-message p-message-"+e.severity),n.xp6(2),n.Q6J("ngTemplateOutlet",e.contentTemplate)}}let U=(()=>{class e{constructor(e,s,t){this.messageService=e,this.el=s,this.cd=t,this.closable=!0,this.enableService=!0,this.escape=!0,this.showTransitionOptions="300ms ease-out",this.hideTransitionOptions="200ms cubic-bezier(0.86, 0, 0.07, 1)",this.valueChange=new n.vpe}ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"content":default:this.contentTemplate=e.template}}),this.messageService&&this.enableService&&!this.contentTemplate&&(this.messageSubscription=this.messageService.messageObserver.subscribe(e=>{if(e){if(e instanceof Array){let s=e.filter(e=>this.key===e.key);this.value=this.value?[...this.value,...s]:[...s]}else this.key===e.key&&(this.value=this.value?[...this.value,e]:[e]);this.cd.markForCheck()}}),this.clearSubscription=this.messageService.clearObserver.subscribe(e=>{e?this.key===e&&(this.value=null):this.value=null,this.cd.markForCheck()}))}hasMessages(){let e=this.el.nativeElement.parentElement;return!(!e||!e.offsetParent)&&(null!=this.contentTemplate||this.value&&this.value.length>0)}clear(){this.value=[],this.valueChange.emit(this.value)}removeMessage(e){this.value=this.value.filter((s,t)=>t!==e),this.valueChange.emit(this.value)}get icon(){const e=this.severity||(this.hasMessages()?this.value[0].severity:null);if(this.hasMessages())switch(e){case"success":return"pi-check";case"info":return"pi-info-circle";case"error":return"pi-times";case"warn":return"pi-exclamation-triangle";default:return"pi-info-circle"}return null}ngOnDestroy(){this.messageSubscription&&this.messageSubscription.unsubscribe(),this.clearSubscription&&this.clearSubscription.unsubscribe()}}return e.\u0275fac=function(s){return new(s||e)(n.Y36(r.ez,8),n.Y36(n.SBq),n.Y36(n.sBO))},e.\u0275cmp=n.Xpm({type:e,selectors:[["p-messages"]],contentQueries:function(e,s,t){if(1&e&&n.Suo(t,r.jx,4),2&e){let e;n.iGM(e=n.CRH())&&(s.templates=e)}},hostAttrs:[1,"p-element"],inputs:{value:"value",closable:"closable",style:"style",styleClass:"styleClass",enableService:"enableService",key:"key",escape:"escape",severity:"severity",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions"},outputs:{valueChange:"valueChange"},decls:4,vars:5,consts:[["role","alert",1,"p-messages","p-component",3,"ngStyle"],[4,"ngIf","ngIfElse"],["staticMessage",""],["role","alert",3,"ngClass",4,"ngFor","ngForOf"],["role","alert",3,"ngClass"],[1,"p-message-wrapper"],[3,"ngClass"],["escapeOut",""],["class","p-message-close p-link","type","button","pRipple","",3,"click",4,"ngIf"],["class","p-message-summary",3,"innerHTML",4,"ngIf"],["class","p-message-detail",3,"innerHTML",4,"ngIf"],[1,"p-message-summary",3,"innerHTML"],[1,"p-message-detail",3,"innerHTML"],["class","p-message-summary",4,"ngIf"],["class","p-message-detail",4,"ngIf"],[1,"p-message-summary"],[1,"p-message-detail"],["type","button","pRipple","",1,"p-message-close","p-link",3,"click"],[1,"p-message-close-icon","pi","pi-times"],[4,"ngTemplateOutlet"]],template:function(e,s){if(1&e&&(n.TgZ(0,"div",0),n.YNc(1,v,2,1,"ng-container",1),n.YNc(2,f,3,2,"ng-template",null,2,n.W1O),n.qZA()),2&e){const e=n.MAs(3);n.Tol(s.styleClass),n.Q6J("ngStyle",s.style),n.xp6(1),n.Q6J("ngIf",!s.contentTemplate)("ngIfElse",e)}},directives:[i.PC,i.O5,i.sg,i.mk,o.H,i.tP],styles:[".p-message-close,.p-message-wrapper{display:flex;align-items:center}.p-message-close{justify-content:center}.p-message-close.p-link{margin-left:auto;overflow:hidden;position:relative}"],encapsulation:2,data:{animation:[(0,a.X$)("messageAnimation",[(0,a.eR)(":enter",[(0,a.oB)({opacity:0,transform:"translateY(-25%)"}),(0,a.jt)("{{showTransitionParams}}")]),(0,a.eR)(":leave",[(0,a.jt)("{{hideTransitionParams}}",(0,a.oB)({height:0,marginTop:0,marginBottom:0,marginLeft:0,marginRight:0,overflow:"hidden",opacity:0}))])])]},changeDetection:0}),e})(),_=(()=>{class e{}return e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[i.ez,g.T]]}),e})()},5205:function(e,s,t){"use strict";t.d(s,{$:function(){return n.$}});var n=t(86020)},90628:function(e,s,t){"use strict";t.d(s,{h:function(){return g},a:function(){return o}});var n=t(61116),i=t(87368);const a=["code"],r=["*"];let g=(()=>{class e{constructor(e){this.el=e,this.lang="markup"}ngAfterViewInit(){window.Prism&&window.Prism.highlightElement(this.codeViewChild.nativeElement)}}return e.\u0275fac=function(s){return new(s||e)(i.Y36(i.SBq))},e.\u0275cmp=i.Xpm({type:e,selectors:[["app-code"]],viewQuery:function(e,s){if(1&e&&i.Gf(a,5),2&e){let e;i.iGM(e=i.CRH())&&(s.codeViewChild=e.first)}},inputs:{lang:"lang"},ngContentSelectors:r,decls:5,vars:1,consts:[[3,"ngClass"],["code",""]],template:function(e,s){1&e&&(i.F$t(),i.TgZ(0,"pre",0),i.TgZ(1,"code",null,1),i.Hsn(3),i._uU(4,"\n"),i.qZA(),i.qZA()),2&e&&i.Q6J("ngClass","language-"+s.lang)},directives:[n.mk],encapsulation:2}),e})(),o=(()=>{class e{}return e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[[n.ez]]}),e})()},81631:function(e,s,t){"use strict";t.r(s),t.d(s,{MessagesDemoModule:function(){return b}});var n=t(61116),i=t(42066),a=t(78230),r=t(87368),g=t(12774),o=t(86020),l=t(59766),u=t(10748),c=t(74136),p=t(17005),m=t(52654),Z=t(47299),d=t(90628);function T(e,s){1&e&&(r._UZ(0,"img",37),r.TgZ(1,"div",38),r._uU(2,"Always bet on Prime."),r.qZA())}function h(e,s){1&e&&r._UZ(0,"iframe",39)}const A=function(){return["/theming"]};let q=(()=>{class e{constructor(e){this.messageService=e}ngOnInit(){this.msgs1=[{severity:"success",summary:"Success",detail:"Message Content"},{severity:"info",summary:"Info",detail:"Message Content"},{severity:"warn",summary:"Warning",detail:"Message Content"},{severity:"error",summary:"Error",detail:"Message Content"},{severity:"custom",summary:"Custom",detail:"Message Content",icon:"pi-file"}]}addMessages(){this.msgs2=[{severity:"success",summary:"Success",detail:"Message Content"},{severity:"info",summary:"Info",detail:"Message Content"},{severity:"warn",summary:"Warning",detail:"Message Content"},{severity:"error",summary:"Error",detail:"Message Content"}]}clearMessages(){this.msgs2=[]}showViaService(){this.messageService.add({severity:"success",summary:"Service Message",detail:"Via MessageService"})}}return e.\u0275fac=function(s){return new(s||e)(r.Y36(a.ez))},e.\u0275cmp=r.Xpm({type:e,selectors:[["ng-component"]],features:[r._Bn([a.ez])],decls:439,vars:8,consts:[[1,"content-section","introduction"],[1,"feature-intro"],["github","messages","stackblitz","messages-demo"],[1,"content-section","implementation"],[1,"card"],[3,"value","enableService","valueChange"],["type","button","pButton","","pRipple","","label","Show",1,"p-mr-2",3,"click"],["type","button","pButton","","pRipple","","icon","pi pi-times","label","Clear",1,"p-button-secondary",3,"click"],["type","button","pButton","","label","Via Service",3,"click"],["severity","info"],["pTemplate",""],["severity","info","text","Message Content","styleClass","p-mr-2"],["severity","success","text","Message Content","styleClass","p-mr-2"],["severity","warn","text","Message Content","styleClass","p-mr-2"],["severity","error","text","Message Content"],[1,"p-mt-4"],["type","text","pInputText","","placeholder","Username",1,"ng-dirty","ng-invalid","p-mr-2"],["severity","error","text","Field is required"],["type","text","pInputText","","placeholder","Email",1,"ng-dirty","ng-invalid","p-mr-2"],["severity","error"],[1,"p-field","p-fluid"],["for","username"],["id","username","type","username","aria-describedby","username-help","pInputText","",1,"ng-invalid","ng-dirty"],["id","username-help",1,"p-error"],[1,"content-section","documentation"],["header","Documentation"],["lang","typescript"],["lang","markup"],[1,"doc-tablewrapper"],[1,"doc-table"],["href","#",3,"routerLink"],["header","Source"],["href","https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/messages","target","_blank",1,"btn-viewsource"],["href","https://stackblitz.com/edit/primeng-messages-demo","target","_blank",1,"btn-viewsource",2,"margin-left",".5em"],["lang","css"],["header","StackBlitz"],["pTemplate","content"],["src","assets/showcase/images/primeng.svg","width","32"],[1,"p-ml-2"],["src","https://stackblitz.com/edit/primeng-messages-demo?embed=1",2,"width","100%","height","768px","border","none"]],template:function(e,s){1&e&&(r.TgZ(0,"div",0),r.TgZ(1,"div",1),r.TgZ(2,"h1"),r._uU(3,"Messages"),r.qZA(),r.TgZ(4,"p"),r._uU(5,"Messages is used to display alerts inline."),r.qZA(),r.qZA(),r._UZ(6,"app-demoActions",2),r.qZA(),r.TgZ(7,"div",3),r.TgZ(8,"div",4),r.TgZ(9,"h5"),r._uU(10,"Severities"),r.qZA(),r.TgZ(11,"p-messages",5),r.NdJ("valueChange",function(e){return s.msgs1=e}),r.qZA(),r.TgZ(12,"h5"),r._uU(13,"Dynamic"),r.qZA(),r.TgZ(14,"button",6),r.NdJ("click",function(){return s.addMessages()}),r.qZA(),r.TgZ(15,"button",7),r.NdJ("click",function(){return s.clearMessages()}),r.qZA(),r.TgZ(16,"p-messages",5),r.NdJ("valueChange",function(e){return s.msgs2=e}),r.qZA(),r.TgZ(17,"h5"),r._uU(18,"Message Service"),r.qZA(),r.TgZ(19,"button",8),r.NdJ("click",function(){return s.showViaService()}),r.qZA(),r._UZ(20,"p-messages"),r.TgZ(21,"h5"),r._uU(22,"Static Content"),r.qZA(),r.TgZ(23,"p-messages",9),r.YNc(24,T,3,0,"ng-template",10),r.qZA(),r.TgZ(25,"h5"),r._uU(26,"Inline Message"),r.qZA(),r.TgZ(27,"p"),r._uU(28,"p-message component is used to display inline messages mostly within forms."),r.qZA(),r._UZ(29,"p-message",11),r._UZ(30,"p-message",12),r._UZ(31,"p-message",13),r._UZ(32,"p-message",14),r.TgZ(33,"div",15),r._UZ(34,"input",16),r._UZ(35,"p-message",17),r.qZA(),r.TgZ(36,"div",15),r._UZ(37,"input",18),r._UZ(38,"p-message",19),r.qZA(),r.TgZ(39,"h5"),r._uU(40,"Form Layout"),r.qZA(),r.TgZ(41,"div",20),r.TgZ(42,"label",21),r._uU(43,"Username"),r.qZA(),r._UZ(44,"input",22),r.TgZ(45,"small",23),r._uU(46,"Username is not available."),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.TgZ(47,"div",24),r.TgZ(48,"p-tabView"),r.TgZ(49,"p-tabPanel",25),r.TgZ(50,"h5"),r._uU(51,"Import"),r.qZA(),r.TgZ(52,"app-code",26),r.IAx(),r._uU(53,"\nimport {MessagesModule} from 'primeng/messages';\nimport {MessageModule} from 'primeng/message';\n"),r.fQ9(),r.qZA(),r.TgZ(54,"h5"),r._uU(55,"Getting Started"),r.qZA(),r.TgZ(56,"p"),r._uU(57,"A single message is specified by Message interface in PrimeNG that defines the id, severity, summary and detail as the properties. Messages to display can either be defined using the value property which should an array of Message instances or using a MessageService are defined using the value property which should an array of Message instances."),r.qZA(),r.TgZ(58,"app-code",27),r.IAx(),r._uU(59,'\n<p-messages [(value)]="msgs"></p-messages>\n'),r.fQ9(),r.qZA(),r.TgZ(60,"h5"),r._uU(61,"Message Array"),r.qZA(),r.TgZ(62,"p"),r._uU(63,"A binding to the value property is required to provide messages to the component."),r.qZA(),r.TgZ(64,"app-code",27),r.IAx(),r._uU(65,'\n<p-messages [(value)]="msgs"></p-messages>\n\n<button type="button" (click)="show()">Show</button>\n<button type="button" (click)="clear()">Hide</button>\n'),r.fQ9(),r.qZA(),r.TgZ(66,"app-code",26),r.IAx(),r._uU(67,"\nshow() {\n    this.msgs.push({severity:'info', summary:'Info Message', detail:'PrimeNG rocks'});\n}\n\nhide() {\n    this.msgs = [];\n}\n"),r.fQ9(),r.qZA(),r.TgZ(68,"h5"),r._uU(69,"Message Service"),r.qZA(),r.TgZ(70,"p"),r._uU(71,"MessageService alternative does not require a value binding to an array. In order to use this service, import the class and define it as a provider in a component higher up in the component tree such as application instance itself so that descandant components can have it injected. If there are multiple message components having the same message service, you may use key property of the component to match the key of the message to implement scoping."),r.qZA(),r.TgZ(72,"app-code",26),r.IAx(),r._uU(73,"\nimport {MessageService} from 'primeng/api';\n"),r.fQ9(),r.qZA(),r.TgZ(74,"app-code",26),r.IAx(),r._uU(75,"\nimport {Component} from '@angular/core';\nimport {Message} from 'primeng//api';\nimport {MessageService} from 'primeng/api';\n\n@Component({\n    templateUrl: './messagesdemo.html'\n    })\n    export class MessageServiceDemo {\n\n        constructor(private messageService: MessageService) {}\n\n        addSingle() {\n            this.messageService.add({severity:'success', summary:'Service Message', detail:'Via MessageService'});\n        }\n\n        addMultiple() {\n            this.messageService.addAll([{severity:'success', summary:'Service Message', detail:'Via MessageService'},\n                            {severity:'info', summary:'Info Message', detail:'Via MessageService'}]);\n        }\n        \n        clear() {\n            this.messageService.clear();\n        }\n}\n"),r.fQ9(),r.qZA(),r.TgZ(76,"h5"),r._uU(77,"Closable"),r.qZA(),r.TgZ(78,"p"),r._uU(79,"Messages are closable by default resulting in a close icon being displayed on top right corner."),r.qZA(),r.TgZ(80,"app-code",27),r.IAx(),r._uU(81,'\n<p-messages [(value)]="msgs"></p-messages>\n'),r.fQ9(),r.qZA(),r.TgZ(82,"p"),r._uU(83,"In order to disable closable messages, set "),r.TgZ(84,"i"),r._uU(85,"closable"),r.qZA(),r._uU(86," to false. Note that in this case two-way binding is not necessary as the component does not need to update its value."),r.qZA(),r.TgZ(87,"app-code",27),r.IAx(),r._uU(88,'\n<p-messages severity="info">\n    <ng-template pTemplate>\n        <img src="assets/showcase/images/demo/organization/walter.jpg" width="32" />\n        <span class="custom-message">I am the one who knocks.</span>\n    </ng-template>\n</p-messages>\n'),r.fQ9(),r.qZA(),r.TgZ(89,"h5"),r._uU(90,"Severities"),r.qZA(),r.TgZ(91,"p"),r._uU(92,"Here are the possible values for the severity of a message."),r.qZA(),r.TgZ(93,"ul"),r.TgZ(94,"li"),r._uU(95,"success"),r.qZA(),r.TgZ(96,"li"),r._uU(97,"info"),r.qZA(),r.TgZ(98,"li"),r._uU(99,"warn"),r.qZA(),r.TgZ(100,"li"),r._uU(101,"error"),r.qZA(),r.qZA(),r.TgZ(102,"h5"),r._uU(103,"Static Content"),r.qZA(),r.TgZ(104,"p"),r._uU(105,"Alternative way to provide the content for the messages is templating. In this case value property and message service is ignored and only static is displayed. "),r.qZA(),r.TgZ(106,"app-code",27),r.IAx(),r._uU(107,'\n<p-messages severity="info">\n    <ng-template pTemplate>\n        <img src="assets/showcase/images/primeng.svg" width="32" />\n        <div class="p-ml-2">Always bet on Prime.</div>\n    </ng-template>\n</p-messages>\n'),r.fQ9(),r.qZA(),r.TgZ(108,"h5"),r._uU(109,"Message Component"),r.qZA(),r.TgZ(110,"p"),r._uU(111,"Message component is useful in cases where messages need to be displayed related to an element such as forms. It has two property, severity and text of the message."),r.qZA(),r.TgZ(112,"app-code",27),r.IAx(),r._uU(113,'\n<p-message severity="info" text="Message Content"></p-message>\n<p-message severity="success" text="Message Content"></p-message>  \n<p-message severity="warn" text="Message Content"></p-message>  \n<p-message severity="error" text="Message Content"></p-message>\n'),r.fQ9(),r.qZA(),r.TgZ(114,"h5"),r._uU(115,"Animation Configuration"),r.qZA(),r.TgZ(116,"p"),r._uU(117,"Transition of the open and hide animations can be customized using the "),r.TgZ(118,"i"),r._uU(119,"showTransitionOptions"),r.qZA(),r._uU(120," and "),r.TgZ(121,"i"),r._uU(122,"hideTransitionOptions"),r.qZA(),r._uU(123," properties, example below disables the animations altogether."),r.qZA(),r.TgZ(124,"app-code",27),r.IAx(),r._uU(125,'\n<p-message [showTransitionOptions]="\'0ms\'" [hideTransitionOptions]="\'0ms\'" severity="info" text="PrimeNG Rocks"></p-message>\n'),r.fQ9(),r.qZA(),r.TgZ(126,"h5"),r._uU(127,"Properties of Messages Component"),r.qZA(),r.TgZ(128,"div",28),r.TgZ(129,"table",29),r.TgZ(130,"thead"),r.TgZ(131,"tr"),r.TgZ(132,"th"),r._uU(133,"Name"),r.qZA(),r.TgZ(134,"th"),r._uU(135,"Type"),r.qZA(),r.TgZ(136,"th"),r._uU(137,"Default"),r.qZA(),r.TgZ(138,"th"),r._uU(139,"Description"),r.qZA(),r.qZA(),r.qZA(),r.TgZ(140,"tbody"),r.TgZ(141,"tr"),r.TgZ(142,"td"),r._uU(143,"value"),r.qZA(),r.TgZ(144,"td"),r._uU(145,"array"),r.qZA(),r.TgZ(146,"td"),r._uU(147,"null"),r.qZA(),r.TgZ(148,"td"),r._uU(149,"An array of messages to display."),r.qZA(),r.qZA(),r.TgZ(150,"tr"),r.TgZ(151,"td"),r._uU(152,"closable"),r.qZA(),r.TgZ(153,"td"),r._uU(154,"boolean"),r.qZA(),r.TgZ(155,"td"),r._uU(156,"true"),r.qZA(),r.TgZ(157,"td"),r._uU(158,"Defines if message box can be closed by the click icon."),r.qZA(),r.qZA(),r.TgZ(159,"tr"),r.TgZ(160,"td"),r._uU(161,"style"),r.qZA(),r.TgZ(162,"td"),r._uU(163,"string"),r.qZA(),r.TgZ(164,"td"),r._uU(165,"null"),r.qZA(),r.TgZ(166,"td"),r._uU(167,"Inline style of the component."),r.qZA(),r.qZA(),r.TgZ(168,"tr"),r.TgZ(169,"td"),r._uU(170,"styleClass"),r.qZA(),r.TgZ(171,"td"),r._uU(172,"string"),r.qZA(),r.TgZ(173,"td"),r._uU(174,"null"),r.qZA(),r.TgZ(175,"td"),r._uU(176,"Style class of the component."),r.qZA(),r.qZA(),r.TgZ(177,"tr"),r.TgZ(178,"td"),r._uU(179,"enableService"),r.qZA(),r.TgZ(180,"td"),r._uU(181,"boolean"),r.qZA(),r.TgZ(182,"td"),r._uU(183,"true"),r.qZA(),r.TgZ(184,"td"),r._uU(185,"Whether displaying services messages are enabled."),r.qZA(),r.qZA(),r.TgZ(186,"tr"),r.TgZ(187,"td"),r._uU(188,"escape"),r.qZA(),r.TgZ(189,"td"),r._uU(190,"boolean"),r.qZA(),r.TgZ(191,"td"),r._uU(192,"true"),r.qZA(),r.TgZ(193,"td"),r._uU(194,"Whether displaying messages would be escaped or not."),r.qZA(),r.qZA(),r.TgZ(195,"tr"),r.TgZ(196,"td"),r._uU(197,"key"),r.qZA(),r.TgZ(198,"td"),r._uU(199,"string"),r.qZA(),r.TgZ(200,"td"),r._uU(201,"null"),r.qZA(),r.TgZ(202,"td"),r._uU(203,"Id to match the key of the message to enable scoping in service based messaging."),r.qZA(),r.qZA(),r.TgZ(204,"tr"),r.TgZ(205,"td"),r._uU(206,"showTransitionOptions"),r.qZA(),r.TgZ(207,"td"),r._uU(208,"string"),r.qZA(),r.TgZ(209,"td"),r._uU(210,"300ms ease-out"),r.qZA(),r.TgZ(211,"td"),r._uU(212,"Transition options of the show animation."),r.qZA(),r.qZA(),r.TgZ(213,"tr"),r.TgZ(214,"td"),r._uU(215,"hideTransitionOptions"),r.qZA(),r.TgZ(216,"td"),r._uU(217,"string"),r.qZA(),r.TgZ(218,"td"),r._uU(219,"200ms cubic-bezier(0.86, 0, 0.07, 1)"),r.qZA(),r.TgZ(220,"td"),r._uU(221,"Transition options of the hide animation."),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.TgZ(222,"h5"),r._uU(223,"Templates"),r.qZA(),r.TgZ(224,"div",28),r.TgZ(225,"table",29),r.TgZ(226,"thead"),r.TgZ(227,"tr"),r.TgZ(228,"th"),r._uU(229,"Name"),r.qZA(),r.TgZ(230,"th"),r._uU(231,"Parameters"),r.qZA(),r.qZA(),r.qZA(),r.TgZ(232,"tbody"),r.TgZ(233,"tr"),r.TgZ(234,"td"),r._uU(235,"content"),r.qZA(),r.TgZ(236,"td"),r._uU(237,"-"),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.TgZ(238,"h5"),r._uU(239,"Properties of Message Component"),r.qZA(),r.TgZ(240,"div",28),r.TgZ(241,"table",29),r.TgZ(242,"thead"),r.TgZ(243,"tr"),r.TgZ(244,"th"),r._uU(245,"Name"),r.qZA(),r.TgZ(246,"th"),r._uU(247,"Type"),r.qZA(),r.TgZ(248,"th"),r._uU(249,"Default"),r.qZA(),r.TgZ(250,"th"),r._uU(251,"Description"),r.qZA(),r.qZA(),r.qZA(),r.TgZ(252,"tbody"),r.TgZ(253,"tr"),r.TgZ(254,"td"),r._uU(255,"severity"),r.qZA(),r.TgZ(256,"td"),r._uU(257,"string"),r.qZA(),r.TgZ(258,"td"),r._uU(259,"null"),r.qZA(),r.TgZ(260,"td"),r._uU(261,"Severity level of the message."),r.qZA(),r.qZA(),r.TgZ(262,"tr"),r.TgZ(263,"td"),r._uU(264,"text"),r.qZA(),r.TgZ(265,"td"),r._uU(266,"string"),r.qZA(),r.TgZ(267,"td"),r._uU(268,"null"),r.qZA(),r.TgZ(269,"td"),r._uU(270,"Text content."),r.qZA(),r.qZA(),r.TgZ(271,"tr"),r.TgZ(272,"td"),r._uU(273,"escape"),r.qZA(),r.TgZ(274,"td"),r._uU(275,"boolean"),r.qZA(),r.TgZ(276,"td"),r._uU(277,"true"),r.qZA(),r.TgZ(278,"td"),r._uU(279,"Whether displaying messages would be escaped or not."),r.qZA(),r.qZA(),r.TgZ(280,"tr"),r.TgZ(281,"td"),r._uU(282,"style"),r.qZA(),r.TgZ(283,"td"),r._uU(284,"string"),r.qZA(),r.TgZ(285,"td"),r._uU(286,"null"),r.qZA(),r.TgZ(287,"td"),r._uU(288,"Inline style of the component."),r.qZA(),r.qZA(),r.TgZ(289,"tr"),r.TgZ(290,"td"),r._uU(291,"styleClass"),r.qZA(),r.TgZ(292,"td"),r._uU(293,"string"),r.qZA(),r.TgZ(294,"td"),r._uU(295,"null"),r.qZA(),r.TgZ(296,"td"),r._uU(297,"Style class of the component."),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.TgZ(298,"h5"),r._uU(299,"Styling for Messages Component"),r.qZA(),r.TgZ(300,"p"),r._uU(301,"Following is the list of structural style classes, for theming classes visit "),r.TgZ(302,"a",30),r._uU(303,"theming page"),r.qZA(),r._uU(304,"."),r.qZA(),r.TgZ(305,"div",28),r.TgZ(306,"table",29),r.TgZ(307,"thead"),r.TgZ(308,"tr"),r.TgZ(309,"th"),r._uU(310,"Name"),r.qZA(),r.TgZ(311,"th"),r._uU(312,"Element"),r.qZA(),r.qZA(),r.qZA(),r.TgZ(313,"tbody"),r.TgZ(314,"tr"),r.TgZ(315,"td"),r._uU(316,"p-messages"),r.qZA(),r.TgZ(317,"td"),r._uU(318,"Container element."),r.qZA(),r.qZA(),r.TgZ(319,"tr"),r.TgZ(320,"td"),r._uU(321,"p-message"),r.qZA(),r.TgZ(322,"td"),r._uU(323,"Message element."),r.qZA(),r.qZA(),r.TgZ(324,"tr"),r.TgZ(325,"td"),r._uU(326,"p-message-info"),r.qZA(),r.TgZ(327,"td"),r._uU(328,"Message element when displaying info messages."),r.qZA(),r.qZA(),r.TgZ(329,"tr"),r.TgZ(330,"td"),r._uU(331,"p-message-warn"),r.qZA(),r.TgZ(332,"td"),r._uU(333,"Message element when displaying warning messages."),r.qZA(),r.qZA(),r.TgZ(334,"tr"),r.TgZ(335,"td"),r._uU(336,"p-message-error"),r.qZA(),r.TgZ(337,"td"),r._uU(338,"Message element when displaying error messages."),r.qZA(),r.qZA(),r.TgZ(339,"tr"),r.TgZ(340,"td"),r._uU(341,"p-message-success"),r.qZA(),r.TgZ(342,"td"),r._uU(343,"Message element when displaying success messages."),r.qZA(),r.qZA(),r.TgZ(344,"tr"),r.TgZ(345,"td"),r._uU(346,"p-message-close"),r.qZA(),r.TgZ(347,"td"),r._uU(348,"Close button."),r.qZA(),r.qZA(),r.TgZ(349,"tr"),r.TgZ(350,"td"),r._uU(351,"p-message-close-icon"),r.qZA(),r.TgZ(352,"td"),r._uU(353,"Close icon."),r.qZA(),r.qZA(),r.TgZ(354,"tr"),r.TgZ(355,"td"),r._uU(356,"p-message-icon"),r.qZA(),r.TgZ(357,"td"),r._uU(358,"Severity icon."),r.qZA(),r.qZA(),r.TgZ(359,"tr"),r.TgZ(360,"td"),r._uU(361,"p-message-summary"),r.qZA(),r.TgZ(362,"td"),r._uU(363,"Summary of a message."),r.qZA(),r.qZA(),r.TgZ(364,"tr"),r.TgZ(365,"td"),r._uU(366,"p-message-detail"),r.qZA(),r.TgZ(367,"td"),r._uU(368,"Detail of a message."),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.TgZ(369,"h5"),r._uU(370,"Styling for Message Component"),r.qZA(),r.TgZ(371,"p"),r._uU(372,"Following is the list of structural style classes, for theming classes visit "),r.TgZ(373,"a",30),r._uU(374,"theming page"),r.qZA(),r._uU(375,"."),r.qZA(),r.TgZ(376,"div",28),r.TgZ(377,"table",29),r.TgZ(378,"thead"),r.TgZ(379,"tr"),r.TgZ(380,"th"),r._uU(381,"Name"),r.qZA(),r.TgZ(382,"th"),r._uU(383,"Element"),r.qZA(),r.qZA(),r.qZA(),r.TgZ(384,"tbody"),r.TgZ(385,"tr"),r.TgZ(386,"td"),r._uU(387,"p-inline-message"),r.qZA(),r.TgZ(388,"td"),r._uU(389,"Message element."),r.qZA(),r.qZA(),r.TgZ(390,"tr"),r.TgZ(391,"td"),r._uU(392,"p-inline-message-info"),r.qZA(),r.TgZ(393,"td"),r._uU(394,"Message element when displaying info messages."),r.qZA(),r.qZA(),r.TgZ(395,"tr"),r.TgZ(396,"td"),r._uU(397,"p-inline-message-warn"),r.qZA(),r.TgZ(398,"td"),r._uU(399,"Message element when displaying warning messages."),r.qZA(),r.qZA(),r.TgZ(400,"tr"),r.TgZ(401,"td"),r._uU(402,"p-inline-message-error"),r.qZA(),r.TgZ(403,"td"),r._uU(404,"Message element when displaying error messages."),r.qZA(),r.qZA(),r.TgZ(405,"tr"),r.TgZ(406,"td"),r._uU(407,"p-inline-message-success"),r.qZA(),r.TgZ(408,"td"),r._uU(409,"Message element when displaying success messages."),r.qZA(),r.qZA(),r.TgZ(410,"tr"),r.TgZ(411,"td"),r._uU(412,"p-inline-message-icon"),r.qZA(),r.TgZ(413,"td"),r._uU(414,"Severity icon."),r.qZA(),r.qZA(),r.TgZ(415,"tr"),r.TgZ(416,"td"),r._uU(417,"p-inline-message-text"),r.qZA(),r.TgZ(418,"td"),r._uU(419,"Text of a message."),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.TgZ(420,"h5"),r._uU(421,"Dependencies"),r.qZA(),r.TgZ(422,"p"),r._uU(423,"None."),r.qZA(),r.qZA(),r.TgZ(424,"p-tabPanel",31),r.TgZ(425,"a",32),r.TgZ(426,"span"),r._uU(427,"View on GitHub"),r.qZA(),r.qZA(),r.TgZ(428,"a",33),r.TgZ(429,"span"),r._uU(430,"Edit in StackBlitz"),r.qZA(),r.qZA(),r.TgZ(431,"app-code",27),r.IAx(),r._uU(432,'\n<h5>Severities</h5>\n<p-messages [(value)]="msgs1" [enableService]="false"></p-messages>\n\n<h5>Dynamic</h5>\n<button type="button" pButton pRipple (click)="addMessages()" label="Show" class="p-mr-2"></button>\n<button type="button" pButton pRipple (click)="clearMessages()" icon="pi pi-times" label="Clear" class="p-button-secondary"></button>\n\n<p-messages [(value)]="msgs2" [enableService]="false"></p-messages>\n\n<h5>Message Service</h5>\n<button type="button" pButton (click)="showViaService()" label="Via Service"></button>\n<p-messages></p-messages>\n\n<h5>Static Content</h5>\n<p-messages severity="info">\n    <ng-template pTemplate>\n        <img src="assets/showcase/images/primeng.svg" width="32" />\n        <div class="p-ml-2">Always bet on Prime.</div>\n    </ng-template>\n</p-messages>\n\n<h5>Inline Message</h5>\n<p>p-message component is used to display inline messages mostly within forms.</p>\n<p-message severity="info" text="Message Content" styleClass="p-mr-2"></p-message>\n<p-message severity="success" text="Message Content" styleClass="p-mr-2"></p-message>  \n<p-message severity="warn" text="Message Content" styleClass="p-mr-2"></p-message>  \n<p-message severity="error" text="Message Content"></p-message>\n\n<div class="p-mt-4">\n    <input type="text" pInputText placeholder="Username" class="ng-dirty ng-invalid p-mr-2">\n    <p-message severity="error" text="Field is required"></p-message>\n</div>\n\n<div class="p-mt-4">\n    <input type="text" pInputText placeholder="Email" class="ng-dirty ng-invalid p-mr-2">\n    <p-message severity="error"></p-message>\n</div>\n\n<h5>Form Layout</h5>\n<div class="p-field p-fluid">\n    <label for="username">Username</label>\n    <input id="username" type="username" aria-describedby="username-help" class="ng-invalid ng-dirty" pInputText />\n    <small id="username-help" class="p-error">Username is not available.</small>\n</div>\n'),r.fQ9(),r.qZA(),r.TgZ(433,"app-code",26),r.IAx(),r._uU(434,"\n    import {Component, OnInit} from '@angular/core';\n    import {Message,MessageService} from 'primeng/api';\n    \n    @Component({\n        templateUrl: './messagesdemo.html',\n        providers: [MessageService]\n    })\n    export class MessagesDemo implements OnInit {\n    \n        msgs1: Message[];\n\n        msgs2: Message[];\n        \n        constructor(private messageService: MessageService) {}\n\n        ngOnInit() {\n            this.msgs1 = [\n                {severity:'success', summary:'Success', detail:'Message Content'},\n                {severity:'info', summary:'Info', detail:'Message Content'},\n                {severity:'warn', summary:'Warning', detail:'Message Content'},\n                {severity:'error', summary:'Error', detail:'Message Content'},\n                {severity:'custom', summary:'Custom', detail:'Message Content', icon: 'pi-file'}\n            ];\n        }\n        \n        addMessages() {\n            this.msgs2 = [\n                {severity:'success', summary:'Success', detail:'Message Content'},\n                {severity:'info', summary:'Info', detail:'Message Content'},\n                {severity:'warn', summary:'Warning', detail:'Message Content'},\n                {severity:'error', summary:'Error', detail:'Message Content'}\n            ];\n        }\n\n        clearMessages() {\n            this.msgs2 = [];\n        }\n\n        showViaService() {\n            this.messageService.add({severity:'success', summary:'Service Message', detail:'Via MessageService'});\n        }\n    }\n"),r.fQ9(),r.qZA(),r.TgZ(435,"app-code",34),r.IAx(),r._uU(436,"\n:host ::ng-deep .p-message-custom {\n    background-color: #E1CFE7;\n    border: solid #8A427A;\n    border-width: 0 0 0 6px;\n    color: #2c1e30;\n}\n\n:host ::ng-deep .p-message-close-icon {\n    color: #2c1e30;\n}\n"),r.fQ9(),r.qZA(),r.qZA(),r.TgZ(437,"p-tabPanel",35),r.YNc(438,h,1,0,"ng-template",36),r.qZA(),r.qZA(),r.qZA()),2&e&&(r.xp6(11),r.Q6J("value",s.msgs1)("enableService",!1),r.xp6(5),r.Q6J("value",s.msgs2)("enableService",!1),r.xp6(286),r.Q6J("routerLink",r.DdM(6,A)),r.xp6(71),r.Q6J("routerLink",r.DdM(7,A)))},directives:[g.P,o.V,l.Hq,u.H,c.jx,p.q,m.o,Z.xf,Z.x4,d.h,i.yS],styles:["[_nghost-%COMP%]     .p-message-custom{background-color:#e1cfe7;border:solid #8a427a;border-width:0 0 0 6px;color:#2c1e30}[_nghost-%COMP%]     .p-message-close-icon{color:#2c1e30}"]}),e})(),v=(()=>{class e{}return e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({imports:[[i.Bz.forChild([{path:"",component:q}])],i.Bz]}),e})();var y=t(5205),f=t(56463),U=t(59202),_=t(37329);let b=(()=>{class e{}return e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({imports:[[n.ez,v,y.$,p.O,f.hJ,m.j,U.LU,_.T,g.L,d.a]]}),e})()}}]);