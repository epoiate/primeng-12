(self.webpackChunkprimeng=self.webpackChunkprimeng||[]).push([[2334],{90628:function(e,t,n){"use strict";n.d(t,{h:function(){return p},a:function(){return r}});var i=n(61116),l=n(87368);const a=["code"],o=["*"];let p=(()=>{class e{constructor(e){this.el=e,this.lang="markup"}ngAfterViewInit(){window.Prism&&window.Prism.highlightElement(this.codeViewChild.nativeElement)}}return e.\u0275fac=function(t){return new(t||e)(l.Y36(l.SBq))},e.\u0275cmp=l.Xpm({type:e,selectors:[["app-code"]],viewQuery:function(e,t){if(1&e&&l.Gf(a,5),2&e){let e;l.iGM(e=l.CRH())&&(t.codeViewChild=e.first)}},inputs:{lang:"lang"},ngContentSelectors:o,decls:5,vars:1,consts:[[3,"ngClass"],["code",""]],template:function(e,t){1&e&&(l.F$t(),l.TgZ(0,"pre",0),l.TgZ(1,"code",null,1),l.Hsn(3),l._uU(4,"\n"),l.qZA(),l.qZA()),2&e&&l.Q6J("ngClass","language-"+t.lang)},directives:[i.mk],encapsulation:2}),e})(),r=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l.oAB({type:e}),e.\u0275inj=l.cJS({imports:[[i.ez]]}),e})()},72334:function(e,t,n){"use strict";n.r(t),n.d(t,{TimelineDemoModule:function(){return H}});var i=n(61116),l=n(42066),a=n(78230),o=n(87368),p=n(12774);function r(e,t){1&e&&o.GkF(0)}function m(e,t){1&e&&o.GkF(0)}const s=function(e){return{$implicit:e}};function c(e,t){if(1&e&&(o.ynx(0),o.YNc(1,m,1,0,"ng-container",4),o.BQk()),2&e){const e=o.oxw().$implicit,t=o.oxw();o.xp6(1),o.Q6J("ngTemplateOutlet",t.markerTemplate)("ngTemplateOutletContext",o.VKq(2,s,e))}}function g(e,t){1&e&&o._UZ(0,"div",10)}function u(e,t){1&e&&o._UZ(0,"div",11)}function Z(e,t){1&e&&o.GkF(0)}function d(e,t){if(1&e&&(o.TgZ(0,"div",2),o.TgZ(1,"div",3),o.YNc(2,r,1,0,"ng-container",4),o.qZA(),o.TgZ(3,"div",5),o.YNc(4,c,2,4,"ng-container",6),o.YNc(5,g,1,0,"ng-template",null,7,o.W1O),o.YNc(7,u,1,0,"div",8),o.qZA(),o.TgZ(8,"div",9),o.YNc(9,Z,1,0,"ng-container",4),o.qZA(),o.qZA()),2&e){const e=t.$implicit,n=t.last,i=o.MAs(6),l=o.oxw();o.xp6(2),o.Q6J("ngTemplateOutlet",l.oppositeTemplate)("ngTemplateOutletContext",o.VKq(7,s,e)),o.xp6(2),o.Q6J("ngIf",l.markerTemplate)("ngIfElse",i),o.xp6(3),o.Q6J("ngIf",!n),o.xp6(2),o.Q6J("ngTemplateOutlet",l.contentTemplate)("ngTemplateOutletContext",o.VKq(9,s,e))}}const v=function(e,t,n,i,l,a,o){return{"p-timeline p-component":!0,"p-timeline-left":e,"p-timeline-right":t,"p-timeline-top":n,"p-timeline-bottom":i,"p-timeline-alternate":l,"p-timeline-vertical":a,"p-timeline-horizontal":o}};let h=(()=>{class e{constructor(e){this.el=e,this.align="left",this.layout="vertical"}getBlockableElement(){return this.el.nativeElement.children[0]}ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"content":this.contentTemplate=e.template;break;case"opposite":this.oppositeTemplate=e.template;break;case"marker":this.markerTemplate=e.template}})}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(o.SBq))},e.\u0275cmp=o.Xpm({type:e,selectors:[["p-timeline"]],contentQueries:function(e,t,n){if(1&e&&o.Suo(n,a.jx,4),2&e){let e;o.iGM(e=o.CRH())&&(t.templates=e)}},hostAttrs:[1,"p-element"],inputs:{value:"value",style:"style",styleClass:"styleClass",align:"align",layout:"layout"},decls:2,vars:13,consts:[[3,"ngStyle","ngClass"],["class","p-timeline-event",4,"ngFor","ngForOf"],[1,"p-timeline-event"],[1,"p-timeline-event-opposite"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"p-timeline-event-separator"],[4,"ngIf","ngIfElse"],["marker",""],["class","p-timeline-event-connector",4,"ngIf"],[1,"p-timeline-event-content"],[1,"p-timeline-event-marker"],[1,"p-timeline-event-connector"]],template:function(e,t){1&e&&(o.TgZ(0,"div",0),o.YNc(1,d,10,11,"div",1),o.qZA()),2&e&&(o.Tol(t.styleClass),o.Q6J("ngStyle",t.style)("ngClass",o.Hh0(5,v,"left"===t.align,"right"===t.align,"top"===t.align,"bottom"===t.align,"alternate"===t.align,"vertical"===t.layout,"horizontal"===t.layout)),o.xp6(1),o.Q6J("ngForOf",t.value))},directives:[i.PC,i.mk,i.sg,i.tP,i.O5],styles:[".p-timeline{display:flex;flex-grow:1;flex-direction:column}.p-timeline-left .p-timeline-event-opposite{text-align:right}.p-timeline-left .p-timeline-event-content{text-align:left}.p-timeline-right .p-timeline-event{flex-direction:row-reverse}.p-timeline-right .p-timeline-event-opposite{text-align:left}.p-timeline-right .p-timeline-event-content{text-align:right}.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(2n){flex-direction:row-reverse}.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-opposite{text-align:right}.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(2n) .p-timeline-event-opposite,.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-content{text-align:left}.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(2n) .p-timeline-event-content{text-align:right}.p-timeline-event{display:flex;position:relative;min-height:70px}.p-timeline-event:last-child{min-height:0}.p-timeline-event-content,.p-timeline-event-opposite{flex:1;padding:0 1rem}.p-timeline-event-separator{flex:0;display:flex;align-items:center;flex-direction:column}.p-timeline-event-marker{display:flex;align-self:baseline}.p-timeline-event-connector{flex-grow:1}.p-timeline-horizontal{flex-direction:row}.p-timeline-horizontal .p-timeline-event{flex-direction:column;flex:1}.p-timeline-horizontal .p-timeline-event:last-child{flex:0}.p-timeline-horizontal .p-timeline-event-separator{flex-direction:row}.p-timeline-horizontal .p-timeline-event-connector{width:100%}.p-timeline-bottom .p-timeline-event,.p-timeline-horizontal.p-timeline-alternate .p-timeline-event:nth-child(2n){flex-direction:column-reverse}"],encapsulation:2,changeDetection:0}),e})(),T=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[i.ez],a.m8]}),e})();var A=n(74136),q=n(47299),f=n(90628),_=n(70994),U=n(59766);function x(e,t){1&e&&o._uU(0),2&e&&o.hij(" ",t.$implicit.status," ")}function y(e,t){1&e&&o._uU(0),2&e&&o.hij(" ",t.$implicit.status," ")}function b(e,t){1&e&&o._uU(0),2&e&&o.hij(" ",t.$implicit.status," ")}function w(e,t){if(1&e&&(o.TgZ(0,"small",27),o._uU(1),o.qZA()),2&e){const e=t.$implicit;o.xp6(1),o.Oqu(e.date)}}function C(e,t){1&e&&o._uU(0),2&e&&o.hij(" ",t.$implicit.status," ")}function k(e,t){if(1&e&&(o.TgZ(0,"span",28),o._UZ(1,"i",29),o.qZA()),2&e){const e=t.$implicit;o.Udp("background-color",e.color),o.xp6(1),o.Q6J("ngClass",e.icon)}}function I(e,t){if(1&e&&o._UZ(0,"img",33),2&e){const e=o.oxw().$implicit;o.Q6J("src","assets/showcase/images/demo/product/"+e.image,o.LSH)("alt",e.name)}}function z(e,t){if(1&e&&(o.TgZ(0,"p-card",30),o.YNc(1,I,1,2,"img",31),o.TgZ(2,"p"),o._uU(3,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!"),o.qZA(),o._UZ(4,"button",32),o.qZA()),2&e){const e=t.$implicit;o.Q6J("header",e.status)("subheader",e.date),o.xp6(1),o.Q6J("ngIf",e.image)}}function O(e,t){1&e&&o._uU(0),2&e&&o.hij(" ",t.$implicit," ")}function Q(e,t){1&e&&o._uU(0),2&e&&o.hij(" ",t.$implicit," ")}function P(e,t){1&e&&o._uU(0),2&e&&o.hij(" ",t.$implicit," ")}function N(e,t){1&e&&o._uU(0," \xa0 ")}function B(e,t){1&e&&o._UZ(0,"iframe",34)}const J=function(){return["/theming"]};let S=(()=>{class e{ngOnInit(){this.events1=[{status:"Ordered",date:"15/10/2020 10:30",icon:a.dv.SHOPPING_CART,color:"#9C27B0",image:"game-controller.jpg"},{status:"Processing",date:"15/10/2020 14:00",icon:a.dv.COG,color:"#673AB7"},{status:"Shipped",date:"15/10/2020 16:15",icon:a.dv.ENVELOPE,color:"#FF9800"},{status:"Delivered",date:"16/10/2020 10:00",icon:a.dv.CHECK,color:"#607D8B"}],this.events2=["2020","2021","2022","2023"]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Xpm({type:e,selectors:[["ng-component"]],decls:302,vars:10,consts:[[1,"content-section","introduction"],[1,"feature-intro"],["github","timeline","stackblitz","timeline-demo"],[1,"content-section","implementation"],[1,"card"],[3,"value"],["pTemplate","content"],["align","right",3,"value"],["align","alternate",3,"value"],["pTemplate","opposite"],["align","alternate","styleClass","customized-timeline",3,"value"],["pTemplate","marker"],["layout","horizontal","align","top",3,"value"],["layout","horizontal","align","bottom",3,"value"],["layout","horizontal","align","alternate",3,"value"],[1,"content-section","documentation"],["header","Documentation"],["lang","typescript"],["lang","markup"],[1,"doc-tablewrapper"],[1,"doc-table"],["href","#",3,"routerLink"],["header","Source"],["href","https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/timeline","target","_blank",1,"btn-viewsource"],["href","https://stackblitz.com/edit/primeng-timeline-demo","target","_blank",1,"btn-viewsource",2,"margin-left",".5em"],["lang","css"],["header","StackBlitz"],[1,"p-text-secondary"],[1,"custom-marker","p-shadow-2"],[3,"ngClass"],[3,"header","subheader"],["width","200","class","p-shadow-2",3,"src","alt",4,"ngIf"],["pButton","","label","Read more",1,"p-button-text"],["width","200",1,"p-shadow-2",3,"src","alt"],["src","https://stackblitz.com/edit/primeng-timeline-demo?embed=1",2,"width","100%","height","768px","border","none"]],template:function(e,t){1&e&&(o.TgZ(0,"div",0),o.TgZ(1,"div",1),o.TgZ(2,"h1"),o._uU(3,"Timeline"),o.qZA(),o.TgZ(4,"p"),o._uU(5,"Timeline visualizes a series of chained events."),o.qZA(),o.qZA(),o._UZ(6,"app-demoActions",2),o.qZA(),o.TgZ(7,"div",3),o.TgZ(8,"div",4),o.TgZ(9,"h5"),o._uU(10,"Left Align"),o.qZA(),o.TgZ(11,"p-timeline",5),o.YNc(12,x,1,1,"ng-template",6),o.qZA(),o.qZA(),o.TgZ(13,"div",4),o.TgZ(14,"h5"),o._uU(15,"Right Align"),o.qZA(),o.TgZ(16,"p-timeline",7),o.YNc(17,y,1,1,"ng-template",6),o.qZA(),o.qZA(),o.TgZ(18,"div",4),o.TgZ(19,"h5"),o._uU(20,"Alternate Align"),o.qZA(),o.TgZ(21,"p-timeline",8),o.YNc(22,b,1,1,"ng-template",6),o.qZA(),o.qZA(),o.TgZ(23,"div",4),o.TgZ(24,"h5"),o._uU(25,"Opposite Content"),o.qZA(),o.TgZ(26,"p-timeline",5),o.YNc(27,w,2,1,"ng-template",6),o.YNc(28,C,1,1,"ng-template",9),o.qZA(),o.qZA(),o.TgZ(29,"div",4),o.TgZ(30,"h5"),o._uU(31,"Customized"),o.qZA(),o.TgZ(32,"p-timeline",10),o.YNc(33,k,2,3,"ng-template",11),o.YNc(34,z,5,3,"ng-template",6),o.qZA(),o.qZA(),o.TgZ(35,"div",4),o.TgZ(36,"h5"),o._uU(37,"Horizontal"),o.qZA(),o.TgZ(38,"h6"),o._uU(39,"Top Align"),o.qZA(),o.TgZ(40,"p-timeline",12),o.YNc(41,O,1,1,"ng-template",6),o.qZA(),o.TgZ(42,"h6"),o._uU(43,"Bottom Align"),o.qZA(),o.TgZ(44,"p-timeline",13),o.YNc(45,Q,1,1,"ng-template",6),o.qZA(),o.TgZ(46,"h6"),o._uU(47,"Alternate Align"),o.qZA(),o.TgZ(48,"p-timeline",14),o.YNc(49,P,1,1,"ng-template",6),o.YNc(50,N,1,0,"ng-template",9),o.qZA(),o.qZA(),o.qZA(),o.TgZ(51,"div",15),o.TgZ(52,"p-tabView"),o.TgZ(53,"p-tabPanel",16),o.TgZ(54,"h5"),o._uU(55,"Import"),o.qZA(),o.TgZ(56,"app-code",17),o.IAx(),o._uU(57,"\nimport {TimelineModule} from 'primeng/timeline';\n"),o.fQ9(),o.qZA(),o.TgZ(58,"h5"),o._uU(59,"Getting Started"),o.qZA(),o.TgZ(60,"p"),o._uU(61,"Timeline receives the events with the "),o.TgZ(62,"i"),o._uU(63,"value"),o.qZA(),o._uU(64," property as a collection of arbitrary objects. In addition, "),o.TgZ(65,"i"),o._uU(66,"content"),o.qZA(),o._uU(67," template is required to display the representation of an event. Example below is a sample events array that is used throughout the documentation."),o.qZA(),o.TgZ(68,"app-code",17),o.IAx(),o._uU(69,"\nimport {Component,OnInit} from '@angular/core';\nimport {PrimeIcons} from 'primeng/api';\n\n@Component({\n    templateUrl: './timelinedemo.html'\n})\nexport class TimelineDemo implements OnInit {\n\n    events: any[];\n    \n    ngOnInit() {\n        this.events = [\n            {status: 'Ordered', date: '15/10/2020 10:30', icon: PrimeIcons.SHOPPING_CART, color: '#9C27B0', image: 'game-controller.jpg'},\n            {status: 'Processing', date: '15/10/2020 14:00', icon: PrimeIcons.COG, color: '#673AB7'},\n            {status: 'Shipped', date: '15/10/2020 16:15', icon: PrimeIcons.ENVELOPE, color: '#FF9800'},\n            {status: 'Delivered', date: '16/10/2020 10:00', icon: PrimeIcons.CHECK, color: '#607D8B'}\n        ];\n    }\n}\n"),o.fQ9(),o.qZA(),o.TgZ(70,"app-code",18),o.IAx(),o._uU(71,'\n<p-timeline [value]="events">\n    <ng-template pTemplate="content" let-event>\n        {{event.status}}\n    </ng-template>\n</p-timeline>\n'),o.fQ9(),o.qZA(),o.TgZ(72,"h5"),o._uU(73,"Layout"),o.qZA(),o.TgZ(74,"p"),o._uU(75,"Default layout of the timeline is vertical, setting "),o.TgZ(76,"i"),o._uU(77,"layout"),o.qZA(),o._uU(78,' to "horizontal" displays the items horizontally.'),o.qZA(),o.TgZ(79,"app-code",18),o.IAx(),o._uU(80,'\n<p-timeline [value]="events" layout="horizontal">\n    <ng-template pTemplate="content" let-event>\n        {{event.status}}\n    </ng-template>\n</p-timeline>\n'),o.fQ9(),o.qZA(),o.TgZ(81,"h5"),o._uU(82,"Alignment"),o.qZA(),o.TgZ(83,"p"),o._uU(84,"Location of the timeline bar is defined using the "),o.TgZ(85,"i"),o._uU(86,"align"),o.qZA(),o._uU(87," property."),o.qZA(),o.TgZ(88,"app-code",18),o.IAx(),o._uU(89,'\n<p-timeline [value]="events" align="right">\n    <ng-template pTemplate="content" let-event>\n        {{event.status}}\n    </ng-template>\n</p-timeline>\n'),o.fQ9(),o.qZA(),o.TgZ(90,"p"),o._uU(91,'In addition, the "alternate" alignment option make the contents take turns around the timeline bar.'),o.qZA(),o.TgZ(92,"app-code",18),o.IAx(),o._uU(93,'\n<p-timeline [value]="events" align="alternate">\n    <ng-template pTemplate="content" let-event>\n        {{event.status}}\n    </ng-template>\n</p-timeline>\n'),o.fQ9(),o.qZA(),o.TgZ(94,"h5"),o._uU(95,"Opposite"),o.qZA(),o.TgZ(96,"p"),o._uU(97,"Content to be placed at the other side of the bar is defined with the "),o.TgZ(98,"i"),o._uU(99,"opposite"),o.qZA(),o._uU(100," template."),o.qZA(),o.TgZ(101,"app-code",18),o.IAx(),o._uU(102,'\n<p-timeline [value]="events">\n    <ng-template pTemplate="content" let-event>\n        <small class="p-text-secondary">{{event.date}}</small>\n    </ng-template>\n    <ng-template pTemplate="opposite" let-event>\n        {{event.status}}\n    </ng-template>\n</p-timeline>\n'),o.fQ9(),o.qZA(),o.TgZ(103,"h5"),o._uU(104,"Custom Markers"),o.qZA(),o.TgZ(105,"p"),o.TgZ(106,"i"),o._uU(107,"marker"),o.qZA(),o._uU(108," template allows placing a custom event marker instead of the default one. Below is an example with custom markers and content."),o.qZA(),o.TgZ(109,"app-code",18),o.IAx(),o._uU(110,'\n<p-timeline [value]="events1" align="alternate">\n    <ng-template pTemplate="marker" let-event>\n        <span class="custom-marker p-shadow-2" [style.backgroundColor]="event.color">\n            <i [ngClass]="event.icon"></i>\n        </span>\n    </ng-template>\n    <ng-template pTemplate="content" let-event>\n        <p-card [header]="event.status" [subheader]="event.date">\n            <img *ngIf="event.image" [src]="\'assets/showcase/images/demo/product/\' + event.image" [alt]="event.name" width="200" class="p-shadow-2" />\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt\n                quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>\n            <button pButton label="Read more" class="p-button-text"></button>\n        </p-card>\n    </ng-template>\n</p-timeline>\n'),o.fQ9(),o.qZA(),o.TgZ(111,"h5"),o._uU(112,"Properties"),o.qZA(),o.TgZ(113,"div",19),o.TgZ(114,"table",20),o.TgZ(115,"thead"),o.TgZ(116,"tr"),o.TgZ(117,"th"),o._uU(118,"Name"),o.qZA(),o.TgZ(119,"th"),o._uU(120,"Type"),o.qZA(),o.TgZ(121,"th"),o._uU(122,"Default"),o.qZA(),o.TgZ(123,"th"),o._uU(124,"Description"),o.qZA(),o.qZA(),o.qZA(),o.TgZ(125,"tbody"),o.TgZ(126,"tr"),o.TgZ(127,"td"),o._uU(128,"value"),o.qZA(),o.TgZ(129,"td"),o._uU(130,"array"),o.qZA(),o.TgZ(131,"td"),o._uU(132,"null"),o.qZA(),o.TgZ(133,"td"),o._uU(134,"An array of events to display."),o.qZA(),o.qZA(),o.TgZ(135,"tr"),o.TgZ(136,"td"),o._uU(137,"align"),o.qZA(),o.TgZ(138,"td"),o._uU(139,"string"),o.qZA(),o.TgZ(140,"td"),o._uU(141,"left"),o.qZA(),o.TgZ(142,"td"),o._uU(143,'Position of the timeline bar relative to the content. Valid values are "left", "right for vertical layout and "top", "bottom" for horizontal layout.'),o.qZA(),o.qZA(),o.TgZ(144,"tr"),o.TgZ(145,"td"),o._uU(146,"layout"),o.qZA(),o.TgZ(147,"td"),o._uU(148,"string"),o.qZA(),o.TgZ(149,"td"),o._uU(150,"vertical"),o.qZA(),o.TgZ(151,"td"),o._uU(152,'Orientation of the timeline, valid values are "vertical" and "horizontal".'),o.qZA(),o.qZA(),o.TgZ(153,"tr"),o.TgZ(154,"td"),o._uU(155,"style"),o.qZA(),o.TgZ(156,"td"),o._uU(157,"string"),o.qZA(),o.TgZ(158,"td"),o._uU(159,"null"),o.qZA(),o.TgZ(160,"td"),o._uU(161,"Inline style of the component."),o.qZA(),o.qZA(),o.TgZ(162,"tr"),o.TgZ(163,"td"),o._uU(164,"styleClass"),o.qZA(),o.TgZ(165,"td"),o._uU(166,"string"),o.qZA(),o.TgZ(167,"td"),o._uU(168,"null"),o.qZA(),o.TgZ(169,"td"),o._uU(170,"Style class of the component."),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.TgZ(171,"h5"),o._uU(172,"Templates"),o.qZA(),o.TgZ(173,"div",19),o.TgZ(174,"table",20),o.TgZ(175,"thead"),o.TgZ(176,"tr"),o.TgZ(177,"th"),o._uU(178,"Name"),o.qZA(),o.TgZ(179,"th"),o._uU(180,"Parameters"),o.qZA(),o.qZA(),o.qZA(),o.TgZ(181,"tbody"),o.TgZ(182,"tr"),o.TgZ(183,"td"),o._uU(184,"opposite"),o.qZA(),o.TgZ(185,"td"),o._uU(186,"$implicit: Data of the timeline event"),o.qZA(),o.qZA(),o.TgZ(187,"tr"),o.TgZ(188,"td"),o._uU(189,"marker"),o.qZA(),o.TgZ(190,"td"),o._uU(191,"$implicit: Data of the timeline event"),o.qZA(),o.qZA(),o.TgZ(192,"tr"),o.TgZ(193,"td"),o._uU(194,"content"),o.qZA(),o.TgZ(195,"td"),o._uU(196,"$implicit: Data of the timeline event"),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.TgZ(197,"h5"),o._uU(198,"Styling"),o.qZA(),o.TgZ(199,"p"),o._uU(200,"Following is the list of structural style classes, for theming classes visit "),o.TgZ(201,"a",21),o._uU(202,"theming page"),o.qZA(),o._uU(203,"."),o.qZA(),o.TgZ(204,"div",19),o.TgZ(205,"table",20),o.TgZ(206,"thead"),o.TgZ(207,"tr"),o.TgZ(208,"th"),o._uU(209,"Name"),o.qZA(),o.TgZ(210,"th"),o._uU(211,"Element"),o.qZA(),o.qZA(),o.qZA(),o.TgZ(212,"tbody"),o.TgZ(213,"tr"),o.TgZ(214,"td"),o._uU(215,"p-timeline"),o.qZA(),o.TgZ(216,"td"),o._uU(217,"Container element."),o.qZA(),o.qZA(),o.TgZ(218,"tr"),o.TgZ(219,"td"),o._uU(220,"p-timeline-left"),o.qZA(),o.TgZ(221,"td"),o._uU(222,"Container element when alignment is left."),o.qZA(),o.qZA(),o.TgZ(223,"tr"),o.TgZ(224,"td"),o._uU(225,"p-timeline-right"),o.qZA(),o.TgZ(226,"td"),o._uU(227,"Container element when alignment is right."),o.qZA(),o.qZA(),o.TgZ(228,"tr"),o.TgZ(229,"td"),o._uU(230,"p-timeline-top"),o.qZA(),o.TgZ(231,"td"),o._uU(232,"Container element when alignment is top."),o.qZA(),o.qZA(),o.TgZ(233,"tr"),o.TgZ(234,"td"),o._uU(235,"p-timeline-bottom"),o.qZA(),o.TgZ(236,"td"),o._uU(237,"Container element when alignment is bottom."),o.qZA(),o.qZA(),o.TgZ(238,"tr"),o.TgZ(239,"td"),o._uU(240,"p-timeline-alternate"),o.qZA(),o.TgZ(241,"td"),o._uU(242,"Container element when alignment is alternating."),o.qZA(),o.qZA(),o.TgZ(243,"tr"),o.TgZ(244,"td"),o._uU(245,"p-timeline-vertical"),o.qZA(),o.TgZ(246,"td"),o._uU(247,"Container element of a vertical timeline."),o.qZA(),o.qZA(),o.TgZ(248,"tr"),o.TgZ(249,"td"),o._uU(250,"p-timeline-horizontal"),o.qZA(),o.TgZ(251,"td"),o._uU(252,"Container element of a horizontal timeline."),o.qZA(),o.qZA(),o.TgZ(253,"tr"),o.TgZ(254,"td"),o._uU(255,"p-timeline-event"),o.qZA(),o.TgZ(256,"td"),o._uU(257,"Event element."),o.qZA(),o.qZA(),o.TgZ(258,"tr"),o.TgZ(259,"td"),o._uU(260,"p-timeline-event-opposite"),o.qZA(),o.TgZ(261,"td"),o._uU(262,"Opposite of an event content."),o.qZA(),o.qZA(),o.TgZ(263,"tr"),o.TgZ(264,"td"),o._uU(265,"p-timeline-event-content"),o.qZA(),o.TgZ(266,"td"),o._uU(267,"Event content."),o.qZA(),o.qZA(),o.TgZ(268,"tr"),o.TgZ(269,"td"),o._uU(270,"p-timeline-event-separator"),o.qZA(),o.TgZ(271,"td"),o._uU(272,"Separator element of an event."),o.qZA(),o.qZA(),o.TgZ(273,"tr"),o.TgZ(274,"td"),o._uU(275,"p-timeline-event-marker"),o.qZA(),o.TgZ(276,"td"),o._uU(277,"Marker element of an event."),o.qZA(),o.qZA(),o.TgZ(278,"tr"),o.TgZ(279,"td"),o._uU(280,"p-timeline-event-connector"),o.qZA(),o.TgZ(281,"td"),o._uU(282,"Connector element of an event."),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.TgZ(283,"h5"),o._uU(284,"Dependencies"),o.qZA(),o.TgZ(285,"p"),o._uU(286,"None."),o.qZA(),o.qZA(),o.TgZ(287,"p-tabPanel",22),o.TgZ(288,"a",23),o.TgZ(289,"span"),o._uU(290,"View on GitHub"),o.qZA(),o.qZA(),o.TgZ(291,"a",24),o.TgZ(292,"span"),o._uU(293,"Edit in StackBlitz"),o.qZA(),o.qZA(),o.TgZ(294,"app-code",18),o.IAx(),o._uU(295,'\n<div class="card">\n    <h5>Left Align</h5>\n    <p-timeline [value]="events1">\n        <ng-template pTemplate="content" let-event>\n            {{event.status}}\n        </ng-template>\n    </p-timeline>\n</div>\n\n<div class="card">\n    <h5>Right Align</h5>\n    <p-timeline [value]="events1" align="right">\n        <ng-template pTemplate="content" let-event>\n            {{event.status}}\n        </ng-template>\n    </p-timeline>\n</div>\n\n<div class="card">\n    <h5>Alternate Align</h5>\n    <p-timeline [value]="events1" align="alternate">\n        <ng-template pTemplate="content" let-event>\n            {{event.status}}\n        </ng-template>\n    </p-timeline>\n</div>\n\n<div class="card">\n    <h5>Opposite Content</h5>\n    <p-timeline [value]="events1">\n        <ng-template pTemplate="content" let-event>\n            <small class="p-text-secondary">{{event.date}}</small>\n        </ng-template>\n        <ng-template pTemplate="opposite" let-event>\n            {{event.status}}\n        </ng-template>\n    </p-timeline>\n</div>\n\n<div class="card">\n    <h5>Customized</h5>\n    <p-timeline [value]="events1" align="alternate" styleClass="customized-timeline">\n        <ng-template pTemplate="marker" let-event>\n            <span class="custom-marker p-shadow-2" [style.backgroundColor]="event.color">\n                <i [ngClass]="event.icon"></i>\n            </span>\n        </ng-template>\n        <ng-template pTemplate="content" let-event>\n            <p-card [header]="event.status" [subheader]="event.date">\n                <img *ngIf="event.image" [src]="\'assets/showcase/images/demo/product/\' + event.image" [alt]="event.name" width="200" class="p-shadow-2" />\n                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt\n                    quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>\n                <button pButton label="Read more" class="p-button-text"></button>\n            </p-card>\n        </ng-template>\n    </p-timeline>\n</div>\n\n<div class="card">\n    <h5>Horizontal</h5>\n    <h6>Top Align</h6>\n    <p-timeline [value]="events2" layout="horizontal" align="top">\n        <ng-template pTemplate="content" let-event>\n            {{event}}\n        </ng-template>\n    </p-timeline>\n\n    <h6>Bottom Align</h6>\n    <p-timeline [value]="events2" layout="horizontal" align="bottom">\n        <ng-template pTemplate="content" let-event>\n            {{event}}\n        </ng-template>\n    </p-timeline>\n\n    <h6>Alternate Align</h6>\n    <p-timeline [value]="events2" layout="horizontal" align="alternate">\n        <ng-template pTemplate="content" let-event>\n            {{event}}\n        </ng-template>\n        <ng-template pTemplate="opposite" let-event>\n            \xa0\n        </ng-template>\n    </p-timeline>\n</div>\n'),o.fQ9(),o.qZA(),o.TgZ(296,"app-code",17),o.IAx(),o._uU(297,"\nimport {Component,OnInit} from '@angular/core';\nimport {PrimeIcons} from 'primeng/api';\n\n@Component({\n    templateUrl: './timelinedemo.html',\n    styleUrls: ['./timelinedemo.scss']\n})\nexport class TimelineDemo implements OnInit {\n\n    events1: any[];\n    \n    events2: any[];\n    \n    ngOnInit() {\n        this.events1 = [\n            {status: 'Ordered', date: '15/10/2020 10:30', icon: PrimeIcons.SHOPPING_CART, color: '#9C27B0', image: 'game-controller.jpg'},\n            {status: 'Processing', date: '15/10/2020 14:00', icon: PrimeIcons.COG, color: '#673AB7'},\n            {status: 'Shipped', date: '15/10/2020 16:15', icon: PrimeIcons.ENVELOPE, color: '#FF9800'},\n            {status: 'Delivered', date: '16/10/2020 10:00', icon: PrimeIcons.CHECK, color: '#607D8B'}\n        ];\n\n        this.events2 = [\n            \"2020\", \"2021\", \"2022\", \"2023\"\n        ];\n    }\n}\n"),o.fQ9(),o.qZA(),o.TgZ(298,"app-code",25),o.IAx(),o._uU(299,"\n.custom-marker {\n    display: flex;\n    width: 2rem;\n    height: 2rem;\n    align-items: center;\n    justify-content: center;\n    color: #ffffff;\n    border-radius: 50%;\n    z-index: 1;\n}\n\n::ng-deep {\n    .p-timeline-event-content,\n    .p-timeline-event-opposite {\n        line-height: 1;\n    }\n}\n\n@media screen and (max-width: 960px) {\n    ::ng-deep {\n        .customized-timeline {\n            .p-timeline-event:nth-child(even) {\n                flex-direction: row !important;\n                \n                .p-timeline-event-content {\n                    text-align: left !important;\n                }\n            }\n\n            .p-timeline-event-opposite {\n                flex: 0;\n            }\n\n            .p-card {\n                margin-top: 1rem;\n            }\n        }\n    }\n}\n"),o.fQ9(),o.qZA(),o.qZA(),o.TgZ(300,"p-tabPanel",26),o.YNc(301,B,1,0,"ng-template",6),o.qZA(),o.qZA(),o.qZA()),2&e&&(o.xp6(11),o.Q6J("value",t.events1),o.xp6(5),o.Q6J("value",t.events1),o.xp6(5),o.Q6J("value",t.events1),o.xp6(5),o.Q6J("value",t.events1),o.xp6(6),o.Q6J("value",t.events1),o.xp6(8),o.Q6J("value",t.events2),o.xp6(4),o.Q6J("value",t.events2),o.xp6(4),o.Q6J("value",t.events2),o.xp6(153),o.Q6J("routerLink",o.DdM(9,J)))},directives:[p.P,h,A.jx,q.xf,q.x4,f.h,l.yS,i.mk,_.Z,i.O5,U.Hq],styles:[".custom-marker[_ngcontent-%COMP%]{display:flex;width:2rem;height:2rem;align-items:center;justify-content:center;color:#fff;border-radius:50%;z-index:1}  .p-timeline-event-content,   .p-timeline-event-opposite{line-height:1}@media screen and (max-width:960px){  .customized-timeline .p-timeline-event:nth-child(2n){flex-direction:row!important}  .customized-timeline .p-timeline-event:nth-child(2n) .p-timeline-event-content{text-align:left!important}  .customized-timeline .p-timeline-event-opposite{flex:0}  .customized-timeline .p-card{margin-top:1rem}}"]}),e})(),E=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[l.Bz.forChild([{path:"",component:S}])],l.Bz]}),e})();var Y=n(23717),j=n(56463),D=n(84510),$=n(59202);let H=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[i.ez,E,T,Y.d,j.hJ,D.l,$.LU,f.a,p.L]]}),e})()}}]);