(self.webpackChunkprimeng=self.webpackChunkprimeng||[]).push([[544],{90628:function(e,t,n){"use strict";n.d(t,{h:function(){return o},a:function(){return r}});var Z=n(61116),a=n(87368);const g=["code"],i=["*"];let o=(()=>{class e{constructor(e){this.el=e,this.lang="markup"}ngAfterViewInit(){window.Prism&&window.Prism.highlightElement(this.codeViewChild.nativeElement)}}return e.\u0275fac=function(t){return new(t||e)(a.Y36(a.SBq))},e.\u0275cmp=a.Xpm({type:e,selectors:[["app-code"]],viewQuery:function(e,t){if(1&e&&a.Gf(g,5),2&e){let e;a.iGM(e=a.CRH())&&(t.codeViewChild=e.first)}},inputs:{lang:"lang"},ngContentSelectors:i,decls:5,vars:1,consts:[[3,"ngClass"],["code",""]],template:function(e,t){1&e&&(a.F$t(),a.TgZ(0,"pre",0),a.TgZ(1,"code",null,1),a.Hsn(3),a._uU(4,"\n"),a.qZA(),a.qZA()),2&e&&a.Q6J("ngClass","language-"+t.lang)},directives:[Z.mk],encapsulation:2}),e})(),r=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[Z.ez]]}),e})()},40544:function(e,t,n){"use strict";n.r(t),n.d(t,{RatingDemoModule:function(){return _}});var Z=n(61116),a=n(11462),g=n(42066),i=n(87368),o=n(12774),r=n(12234),l=n(47299),u=n(90628),d=n(74136);function s(e,t){1&e&&i._UZ(0,"iframe",21)}const c=function(){return["/theming"]};let A=(()=>{class e{constructor(){this.val2=3,this.val3=5,this.val4=5}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Xpm({type:e,selectors:[["ng-component"]],decls:236,vars:8,consts:[[1,"content-section","introduction"],[1,"feature-intro"],["github","rating","stackblitz","rating-demo"],[1,"content-section","implementation"],[1,"card"],[3,"ngModel","ngModelChange"],[3,"ngModel","cancel","ngModelChange"],["readonly","true","stars","10",3,"ngModel","cancel","ngModelChange"],["disabled","true","stars","10",3,"ngModel","ngModelChange"],[1,"content-section","documentation"],["header","Documentation"],["lang","typescript"],["lang","markup"],[1,"doc-tablewrapper"],[1,"doc-table"],["href","#",3,"routerLink"],["header","Source"],["href","https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/rating","target","_blank",1,"btn-viewsource"],["href","https://stackblitz.com/edit/primeng-rating-demo","target","_blank",1,"btn-viewsource",2,"margin-left",".5em"],["header","StackBlitz"],["pTemplate","content"],["src","https://stackblitz.com/edit/primeng-rating-demo?embed=1",2,"width","100%","height","768px","border","none"]],template:function(e,t){1&e&&(i.TgZ(0,"div",0),i.TgZ(1,"div",1),i.TgZ(2,"h1"),i._uU(3,"Rating"),i.qZA(),i.TgZ(4,"p"),i._uU(5,"Rating component is a star based selection input."),i.qZA(),i.qZA(),i._UZ(6,"app-demoActions",2),i.qZA(),i.TgZ(7,"div",3),i.TgZ(8,"div",4),i.TgZ(9,"h5"),i._uU(10,"Basic"),i.qZA(),i.TgZ(11,"p-rating",5),i.NdJ("ngModelChange",function(e){return t.val1=e}),i.qZA(),i.TgZ(12,"h5"),i._uU(13,"No Cancel"),i.qZA(),i.TgZ(14,"p-rating",6),i.NdJ("ngModelChange",function(e){return t.val2=e}),i.qZA(),i.TgZ(15,"h5"),i._uU(16,"ReadOnly"),i.qZA(),i.TgZ(17,"p-rating",7),i.NdJ("ngModelChange",function(e){return t.val3=e}),i.qZA(),i.TgZ(18,"h5"),i._uU(19,"Disabled"),i.qZA(),i.TgZ(20,"p-rating",8),i.NdJ("ngModelChange",function(e){return t.val4=e}),i.qZA(),i.qZA(),i.qZA(),i.TgZ(21,"div",9),i.TgZ(22,"p-tabView"),i.TgZ(23,"p-tabPanel",10),i.TgZ(24,"h5"),i._uU(25,"Import"),i.qZA(),i.TgZ(26,"app-code",11),i.IAx(),i._uU(27,"\nimport {RatingModule} from 'primeng/rating';\n"),i.fQ9(),i.qZA(),i.TgZ(28,"h5"),i._uU(29,"Getting Started"),i.qZA(),i.TgZ(30,"p"),i._uU(31,"Two-way value binding is defined using "),i.TgZ(32,"i"),i._uU(33,"ngModel"),i.qZA(),i._uU(34,"."),i.qZA(),i.TgZ(35,"app-code",12),i.IAx(),i._uU(36,'\n<p-rating [(ngModel)]="val"></p-rating>\n'),i.fQ9(),i.qZA(),i.TgZ(37,"app-code",11),i.IAx(),i._uU(38,"\nexport class ModelComponent {\n\n    val: number;\n\n}\n"),i.fQ9(),i.qZA(),i.TgZ(39,"p"),i._uU(40,"Defining a default value would be enough to display the initial number of selected stars."),i.qZA(),i.TgZ(41,"app-code",11),i.IAx(),i._uU(42,"\nexport class ModelComponent {\n\n    val: number = 3;\n\n}\n"),i.fQ9(),i.qZA(),i.TgZ(43,"h5"),i._uU(44,"Model Driven Forms"),i.qZA(),i.TgZ(45,"p"),i._uU(46,"Rating can be used in a model driven form as well."),i.qZA(),i.TgZ(47,"app-code",12),i.IAx(),i._uU(48,'\n<p-rating formControlName="score"></p-rating>\n'),i.fQ9(),i.qZA(),i.TgZ(49,"h5"),i._uU(50,"Properties"),i.qZA(),i.TgZ(51,"div",13),i.TgZ(52,"table",14),i.TgZ(53,"thead"),i.TgZ(54,"tr"),i.TgZ(55,"th"),i._uU(56,"Name"),i.qZA(),i.TgZ(57,"th"),i._uU(58,"Type"),i.qZA(),i.TgZ(59,"th"),i._uU(60,"Default"),i.qZA(),i.TgZ(61,"th"),i._uU(62,"Description"),i.qZA(),i.qZA(),i.qZA(),i.TgZ(63,"tbody"),i.TgZ(64,"tr"),i.TgZ(65,"td"),i._uU(66,"stars"),i.qZA(),i.TgZ(67,"td"),i._uU(68,"number"),i.qZA(),i.TgZ(69,"td"),i._uU(70,"5"),i.qZA(),i.TgZ(71,"td"),i._uU(72,"Number of stars."),i.qZA(),i.qZA(),i.TgZ(73,"tr"),i.TgZ(74,"td"),i._uU(75,"cancel"),i.qZA(),i.TgZ(76,"td"),i._uU(77,"boolean"),i.qZA(),i.TgZ(78,"td"),i._uU(79,"true"),i.qZA(),i.TgZ(80,"td"),i._uU(81,"When specified a cancel icon is displayed to allow removing the value."),i.qZA(),i.qZA(),i.TgZ(82,"tr"),i.TgZ(83,"td"),i._uU(84,"disabled"),i.qZA(),i.TgZ(85,"td"),i._uU(86,"boolean"),i.qZA(),i.TgZ(87,"td"),i._uU(88,"false"),i.qZA(),i.TgZ(89,"td"),i._uU(90,"When present, it specifies that the element should be disabled."),i.qZA(),i.qZA(),i.TgZ(91,"tr"),i.TgZ(92,"td"),i._uU(93,"readonly"),i.qZA(),i.TgZ(94,"td"),i._uU(95,"boolean"),i.qZA(),i.TgZ(96,"td"),i._uU(97,"false"),i.qZA(),i.TgZ(98,"td"),i._uU(99,"When present, changing the value is not possible."),i.qZA(),i.qZA(),i.TgZ(100,"tr"),i.TgZ(101,"td"),i._uU(102,"iconOnClass"),i.qZA(),i.TgZ(103,"td"),i._uU(104,"string"),i.qZA(),i.TgZ(105,"td"),i._uU(106,"pi pi-star"),i.qZA(),i.TgZ(107,"td"),i._uU(108,"Style class of the on icon."),i.qZA(),i.qZA(),i.TgZ(109,"tr"),i.TgZ(110,"td"),i._uU(111,"iconOffClass"),i.qZA(),i.TgZ(112,"td"),i._uU(113,"string"),i.qZA(),i.TgZ(114,"td"),i._uU(115,"pi pi-star"),i.qZA(),i.TgZ(116,"td"),i._uU(117,"Style class of the off icon."),i.qZA(),i.qZA(),i.TgZ(118,"tr"),i.TgZ(119,"td"),i._uU(120,"iconCancelClass"),i.qZA(),i.TgZ(121,"td"),i._uU(122,"string"),i.qZA(),i.TgZ(123,"td"),i._uU(124,"pi pi-ban"),i.qZA(),i.TgZ(125,"td"),i._uU(126,"Style class of the cancel icon."),i.qZA(),i.qZA(),i.TgZ(127,"tr"),i.TgZ(128,"td"),i._uU(129,"iconOnStyle"),i.qZA(),i.TgZ(130,"td"),i._uU(131,"object"),i.qZA(),i.TgZ(132,"td"),i._uU(133,"null"),i.qZA(),i.TgZ(134,"td"),i._uU(135,"Inline style of the on icon."),i.qZA(),i.qZA(),i.TgZ(136,"tr"),i.TgZ(137,"td"),i._uU(138,"iconOffStyle"),i.qZA(),i.TgZ(139,"td"),i._uU(140,"object"),i.qZA(),i.TgZ(141,"td"),i._uU(142,"null"),i.qZA(),i.TgZ(143,"td"),i._uU(144,"Inline style of the off icon."),i.qZA(),i.qZA(),i.TgZ(145,"tr"),i.TgZ(146,"td"),i._uU(147,"iconCancelStyle"),i.qZA(),i.TgZ(148,"td"),i._uU(149,"object"),i.qZA(),i.TgZ(150,"td"),i._uU(151,"null"),i.qZA(),i.TgZ(152,"td"),i._uU(153,"Inline style of the cancel icon."),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.TgZ(154,"h5"),i._uU(155,"Events"),i.qZA(),i.TgZ(156,"div",13),i.TgZ(157,"table",14),i.TgZ(158,"thead"),i.TgZ(159,"tr"),i.TgZ(160,"th"),i._uU(161,"Name"),i.qZA(),i.TgZ(162,"th"),i._uU(163,"Parameters"),i.qZA(),i.TgZ(164,"th"),i._uU(165,"Description"),i.qZA(),i.qZA(),i.qZA(),i.TgZ(166,"tbody"),i.TgZ(167,"tr"),i.TgZ(168,"td"),i._uU(169,"onRate"),i.qZA(),i.TgZ(170,"td"),i._uU(171,"event.originalEvent: browser event "),i._UZ(172,"br"),i._uU(173," event.value: selected value "),i.qZA(),i.TgZ(174,"td"),i._uU(175,"Callback to invoke on rate change."),i.qZA(),i.qZA(),i.TgZ(176,"tr"),i.TgZ(177,"td"),i._uU(178,"onCancel"),i.qZA(),i.TgZ(179,"td"),i._uU(180,"event: browser event"),i.qZA(),i.TgZ(181,"td"),i._uU(182,"Callback to invoke when value is removed."),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.TgZ(183,"h5"),i._uU(184,"Styling"),i.qZA(),i.TgZ(185,"p"),i._uU(186,"Following is the list of structural style classes, for theming classes visit "),i.TgZ(187,"a",15),i._uU(188,"theming page"),i.qZA(),i._uU(189,"."),i.qZA(),i.TgZ(190,"div",13),i.TgZ(191,"table",14),i.TgZ(192,"thead"),i.TgZ(193,"tr"),i.TgZ(194,"th"),i._uU(195,"Name"),i.qZA(),i.TgZ(196,"th"),i._uU(197,"Element"),i.qZA(),i.qZA(),i.qZA(),i.TgZ(198,"tbody"),i.TgZ(199,"tr"),i.TgZ(200,"td"),i._uU(201,"p-rating"),i.qZA(),i.TgZ(202,"td"),i._uU(203,"Container element"),i.qZA(),i.qZA(),i.TgZ(204,"tr"),i.TgZ(205,"td"),i._uU(206,"p-rating-star"),i.qZA(),i.TgZ(207,"td"),i._uU(208,"Star element"),i.qZA(),i.qZA(),i.TgZ(209,"tr"),i.TgZ(210,"td"),i._uU(211,"p-rating-star-on"),i.qZA(),i.TgZ(212,"td"),i._uU(213,"Selected star element."),i.qZA(),i.qZA(),i.TgZ(214,"tr"),i.TgZ(215,"td"),i._uU(216,"p-rating-cancel"),i.qZA(),i.TgZ(217,"td"),i._uU(218,"Cancel icon."),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.TgZ(219,"h5"),i._uU(220,"Dependencies"),i.qZA(),i.TgZ(221,"p"),i._uU(222,"None."),i.qZA(),i.qZA(),i.TgZ(223,"p-tabPanel",16),i.TgZ(224,"a",17),i.TgZ(225,"span"),i._uU(226,"View on GitHub"),i.qZA(),i.qZA(),i.TgZ(227,"a",18),i.TgZ(228,"span"),i._uU(229,"Edit in StackBlitz"),i.qZA(),i.qZA(),i.TgZ(230,"app-code",12),i.IAx(),i._uU(231,'\n<h5>Basic</h5> \n<p-rating [(ngModel)]="val1"></p-rating>\n\n<h5>No Cancel</h5> \n<p-rating [(ngModel)]="val2" [cancel]="false"></p-rating>\n\n<h5>ReadOnly</h5> \n<p-rating [ngModel]="val3" readonly="true" stars="10" [cancel]="false"></p-rating>\n\n<h5>Disabled</h5> \n<p-rating [ngModel]="val4" disabled="true" stars="10"></p-rating>\n'),i.fQ9(),i.qZA(),i.TgZ(232,"app-code",11),i.IAx(),i._uU(233,"\nexport class RatingDemo {\n\n    val1: number;\n\n    val2: number = 3;\n\n    val3: number = 5;\n\n    val4: number = 5;\n\n    val5: number;\n\n    msg: string;\n}\n"),i.fQ9(),i.qZA(),i.qZA(),i.TgZ(234,"p-tabPanel",19),i.YNc(235,s,1,0,"ng-template",20),i.qZA(),i.qZA(),i.qZA()),2&e&&(i.xp6(11),i.Q6J("ngModel",t.val1),i.xp6(3),i.Q6J("ngModel",t.val2)("cancel",!1),i.xp6(3),i.Q6J("ngModel",t.val3)("cancel",!1),i.xp6(3),i.Q6J("ngModel",t.val4),i.xp6(167),i.Q6J("routerLink",i.DdM(7,c)))},directives:[o.P,r.iG,a.JJ,a.On,l.xf,l.x4,u.h,g.yS,d.jx],encapsulation:2}),e})(),T=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[[g.Bz.forChild([{path:"",component:A}])],g.Bz]}),e})();var q=n(73710),p=n(59202);let _=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[[Z.ez,a.u5,T,q.Xt,p.LU,u.a,o.L]]}),e})()}}]);