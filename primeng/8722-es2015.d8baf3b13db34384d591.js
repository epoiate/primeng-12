(self.webpackChunkprimeng=self.webpackChunkprimeng||[]).push([[8722],{90628:function(e,t,n){"use strict";n.d(t,{h:function(){return u},a:function(){return d}});var o=n(61116),a=n(87368);const i=["code"],Z=["*"];let u=(()=>{class e{constructor(e){this.el=e,this.lang="markup"}ngAfterViewInit(){window.Prism&&window.Prism.highlightElement(this.codeViewChild.nativeElement)}}return e.\u0275fac=function(t){return new(t||e)(a.Y36(a.SBq))},e.\u0275cmp=a.Xpm({type:e,selectors:[["app-code"]],viewQuery:function(e,t){if(1&e&&a.Gf(i,5),2&e){let e;a.iGM(e=a.CRH())&&(t.codeViewChild=e.first)}},inputs:{lang:"lang"},ngContentSelectors:Z,decls:5,vars:1,consts:[[3,"ngClass"],["code",""]],template:function(e,t){1&e&&(a.F$t(),a.TgZ(0,"pre",0),a.TgZ(1,"code",null,1),a.Hsn(3),a._uU(4,"\n"),a.qZA(),a.qZA()),2&e&&a.Q6J("ngClass","language-"+t.lang)},directives:[o.mk],encapsulation:2}),e})(),d=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[o.ez]]}),e})()},68722:function(e,t,n){"use strict";n.r(t),n.d(t,{RadioButtonDemoModule:function(){return U}});var o=n(61116),a=n(11462),i=n(42066),Z=n(87368),u=n(12774),d=n(34790),l=n(47299),g=n(90628),r=n(74136);function c(e,t){if(1&e){const e=Z.EpF();Z.TgZ(0,"div",27),Z.TgZ(1,"p-radioButton",28),Z.NdJ("ngModelChange",function(t){return Z.CHM(e),Z.oxw().selectedCategory=t}),Z.qZA(),Z.TgZ(2,"label",29),Z._uU(3),Z.qZA(),Z.qZA()}if(2&e){const e=t.$implicit,n=Z.oxw();Z.xp6(1),Z.Q6J("inputId",e.key)("value",e)("ngModel",n.selectedCategory)("disabled","R"===e.key),Z.xp6(1),Z.Q6J("for",e.key),Z.xp6(1),Z.Oqu(e.name)}}function s(e,t){1&e&&Z._UZ(0,"iframe",30)}const A=function(){return["/theming"]};let T=(()=>{class e{constructor(){this.selectedCategory=null,this.categories=[{name:"Accounting",key:"A"},{name:"Marketing",key:"M"},{name:"Production",key:"P"},{name:"Research",key:"R"}]}ngOnInit(){this.selectedCategory=this.categories[1]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=Z.Xpm({type:e,selectors:[["ng-component"]],decls:303,vars:7,consts:[[1,"content-section","introduction"],[1,"feature-intro"],["github","radiobutton","stackblitz","radiobutton-demo"],[1,"content-section","implementation"],[1,"card"],[1,"p-field-radiobutton"],["name","city","value","Chicago","inputId","city1",3,"ngModel","ngModelChange"],["for","city1"],["name","city","value","Los Angeles","inputId","city2",3,"ngModel","ngModelChange"],["for","city2"],["name","city","value","New York","inputId","city3",3,"ngModel","ngModelChange"],["for","city3"],["name","city","value","San Francisco","inputId","city4",3,"ngModel","ngModelChange"],["for","city4"],["class","p-field-checkbox",4,"ngFor","ngForOf"],[1,"content-section","documentation"],["header","Documentation"],["lang","typescript"],["lang","markup"],[1,"doc-tablewrapper"],[1,"doc-table"],["href","#",3,"routerLink"],["header","Source"],["href","https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/radiobutton","target","_blank",1,"btn-viewsource"],["href","https://stackblitz.com/edit/primeng-radiobutton-demo","target","_blank",1,"btn-viewsource",2,"margin-left",".5em"],["header","StackBlitz"],["pTemplate","content"],[1,"p-field-checkbox"],["name","category",3,"inputId","value","ngModel","disabled","ngModelChange"],[3,"for"],["src","https://stackblitz.com/edit/primeng-radiobutton-demo?embed=1",2,"width","100%","height","768px","border","none"]],template:function(e,t){1&e&&(Z.TgZ(0,"div",0),Z.TgZ(1,"div",1),Z.TgZ(2,"h1"),Z._uU(3,"RadioButton"),Z.qZA(),Z.TgZ(4,"p"),Z._uU(5,"RadioButton is an extension to standard radio button element with theming."),Z.qZA(),Z.qZA(),Z._UZ(6,"app-demoActions",2),Z.qZA(),Z.TgZ(7,"div",3),Z.TgZ(8,"div",4),Z.TgZ(9,"h5"),Z._uU(10,"Basic"),Z.qZA(),Z.TgZ(11,"div",5),Z.TgZ(12,"p-radioButton",6),Z.NdJ("ngModelChange",function(e){return t.city=e}),Z.qZA(),Z.TgZ(13,"label",7),Z._uU(14,"Chicago"),Z.qZA(),Z.qZA(),Z.TgZ(15,"div",5),Z.TgZ(16,"p-radioButton",8),Z.NdJ("ngModelChange",function(e){return t.city=e}),Z.qZA(),Z.TgZ(17,"label",9),Z._uU(18,"Los Angeles"),Z.qZA(),Z.qZA(),Z.TgZ(19,"div",5),Z.TgZ(20,"p-radioButton",10),Z.NdJ("ngModelChange",function(e){return t.city=e}),Z.qZA(),Z.TgZ(21,"label",11),Z._uU(22,"New York"),Z.qZA(),Z.qZA(),Z.TgZ(23,"div",5),Z.TgZ(24,"p-radioButton",12),Z.NdJ("ngModelChange",function(e){return t.city=e}),Z.qZA(),Z.TgZ(25,"label",13),Z._uU(26,"San Francisco"),Z.qZA(),Z.qZA(),Z.TgZ(27,"h5"),Z._uU(28,"Dynamic Values, Preselection, Value Binding and Disabled Option"),Z.qZA(),Z.YNc(29,c,4,6,"div",14),Z.qZA(),Z.qZA(),Z.TgZ(30,"div",15),Z.TgZ(31,"p-tabView"),Z.TgZ(32,"p-tabPanel",16),Z.TgZ(33,"h5"),Z._uU(34,"Import"),Z.qZA(),Z.TgZ(35,"app-code",17),Z.IAx(),Z._uU(36,"\nimport {RadioButtonModule} from 'primeng/radiobutton';\n"),Z.fQ9(),Z.qZA(),Z.TgZ(37,"h5"),Z._uU(38,"Getting Started"),Z.qZA(),Z.TgZ(39,"p"),Z._uU(40,"Two-way value binding is defined using the standard "),Z.TgZ(41,"i"),Z._uU(42,"ngModel"),Z.qZA(),Z._uU(43," directive."),Z.qZA(),Z.TgZ(44,"app-code",18),Z.IAx(),Z._uU(45,'\n<p-radioButton name="groupname" value="val1" [(ngModel)]="selectedValue"></p-radioButton>\n<p-radioButton name="groupname" value="val2" [(ngModel)]="selectedValue"></p-radioButton>\n'),Z.fQ9(),Z.qZA(),Z.TgZ(46,"app-code",17),Z.IAx(),Z._uU(47,"\nexport class ModelComponent {\n\n    selectedValue: string;\n\n}\n"),Z.fQ9(),Z.qZA(),Z.TgZ(48,"p"),Z._uU(49,"As model is two-way binding enabled, giving a default value to the model is enough to display a radio button as checked by default."),Z.qZA(),Z.TgZ(50,"app-code",17),Z.IAx(),Z._uU(51,"\nexport class ModelComponent {\n\n    selectedValue: string = 'val1';\n\n}\n"),Z.fQ9(),Z.qZA(),Z.TgZ(52,"h5"),Z._uU(53,"Model Driven Forms"),Z.qZA(),Z.TgZ(54,"p"),Z._uU(55,"RadioButton can be used in a model driven form as well."),Z.qZA(),Z.TgZ(56,"app-code",18),Z.IAx(),Z._uU(57,'\n<p-radioButton name="groupname" value="ps4" formControlName="console"></p-radioButton>\n'),Z.fQ9(),Z.qZA(),Z.TgZ(58,"h4"),Z._uU(59,"Label"),Z.qZA(),Z.TgZ(60,"p"),Z._uU(61,"The "),Z.TgZ(62,"i"),Z._uU(63,"label"),Z.qZA(),Z._uU(64," attribute provides a label text for the radio button. This label is also clickable and selects value."),Z.qZA(),Z.TgZ(65,"app-code",18),Z.IAx(),Z._uU(66,'\n<p-radioButton name="groupname" value="val1" label="Option 2" [(ngModel)]="selectedValue"></p-radioButton>\n'),Z.fQ9(),Z.qZA(),Z.TgZ(67,"h5"),Z._uU(68,"Properties"),Z.qZA(),Z.TgZ(69,"div",19),Z.TgZ(70,"table",20),Z.TgZ(71,"thead"),Z.TgZ(72,"tr"),Z.TgZ(73,"th"),Z._uU(74,"Name"),Z.qZA(),Z.TgZ(75,"th"),Z._uU(76,"Type"),Z.qZA(),Z.TgZ(77,"th"),Z._uU(78,"Default"),Z.qZA(),Z.TgZ(79,"th"),Z._uU(80,"Description"),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(81,"tbody"),Z.TgZ(82,"tr"),Z.TgZ(83,"td"),Z._uU(84,"name"),Z.qZA(),Z.TgZ(85,"td"),Z._uU(86,"string"),Z.qZA(),Z.TgZ(87,"td"),Z._uU(88,"null"),Z.qZA(),Z.TgZ(89,"td"),Z._uU(90,"Name of the radiobutton group."),Z.qZA(),Z.qZA(),Z.TgZ(91,"tr"),Z.TgZ(92,"td"),Z._uU(93,"value"),Z.qZA(),Z.TgZ(94,"td"),Z._uU(95,"any"),Z.qZA(),Z.TgZ(96,"td"),Z._uU(97,"null"),Z.qZA(),Z.TgZ(98,"td"),Z._uU(99,"Value of the radiobutton."),Z.qZA(),Z.qZA(),Z.TgZ(100,"tr"),Z.TgZ(101,"td"),Z._uU(102,"label"),Z.qZA(),Z.TgZ(103,"td"),Z._uU(104,"string"),Z.qZA(),Z.TgZ(105,"td"),Z._uU(106,"null"),Z.qZA(),Z.TgZ(107,"td"),Z._uU(108,"Label of the radiobutton."),Z.qZA(),Z.qZA(),Z.TgZ(109,"tr"),Z.TgZ(110,"td"),Z._uU(111,"disabled"),Z.qZA(),Z.TgZ(112,"td"),Z._uU(113,"boolean"),Z.qZA(),Z.TgZ(114,"td"),Z._uU(115,"false"),Z.qZA(),Z.TgZ(116,"td"),Z._uU(117,"When present, it specifies that the element should be disabled."),Z.qZA(),Z.qZA(),Z.TgZ(118,"tr"),Z.TgZ(119,"td"),Z._uU(120,"tabindex"),Z.qZA(),Z.TgZ(121,"td"),Z._uU(122,"number"),Z.qZA(),Z.TgZ(123,"td"),Z._uU(124,"null"),Z.qZA(),Z.TgZ(125,"td"),Z._uU(126,"Index of the element in tabbing order."),Z.qZA(),Z.qZA(),Z.TgZ(127,"tr"),Z.TgZ(128,"td"),Z._uU(129,"inputId"),Z.qZA(),Z.TgZ(130,"td"),Z._uU(131,"string"),Z.qZA(),Z.TgZ(132,"td"),Z._uU(133,"null"),Z.qZA(),Z.TgZ(134,"td"),Z._uU(135,"Identifier of the focus input to match a label defined for the component."),Z.qZA(),Z.qZA(),Z.TgZ(136,"tr"),Z.TgZ(137,"td"),Z._uU(138,"ariaLabelledBy"),Z.qZA(),Z.TgZ(139,"td"),Z._uU(140,"string"),Z.qZA(),Z.TgZ(141,"td"),Z._uU(142,"null"),Z.qZA(),Z.TgZ(143,"td"),Z._uU(144,"Establishes relationships between the component and label(s) where its value should be one or more element IDs."),Z.qZA(),Z.qZA(),Z.TgZ(145,"tr"),Z.TgZ(146,"td"),Z._uU(147,"ariaLabel"),Z.qZA(),Z.TgZ(148,"td"),Z._uU(149,"string"),Z.qZA(),Z.TgZ(150,"td"),Z._uU(151,"null"),Z.qZA(),Z.TgZ(152,"td"),Z._uU(153,"Used to define a string that labels the input element."),Z.qZA(),Z.qZA(),Z.TgZ(154,"tr"),Z.TgZ(155,"td"),Z._uU(156,"style"),Z.qZA(),Z.TgZ(157,"td"),Z._uU(158,"object"),Z.qZA(),Z.TgZ(159,"td"),Z._uU(160,"null"),Z.qZA(),Z.TgZ(161,"td"),Z._uU(162,"Inline style of the component."),Z.qZA(),Z.qZA(),Z.TgZ(163,"tr"),Z.TgZ(164,"td"),Z._uU(165,"styleClass"),Z.qZA(),Z.TgZ(166,"td"),Z._uU(167,"string"),Z.qZA(),Z.TgZ(168,"td"),Z._uU(169,"null"),Z.qZA(),Z.TgZ(170,"td"),Z._uU(171,"Style class of the component."),Z.qZA(),Z.qZA(),Z.TgZ(172,"tr"),Z.TgZ(173,"td"),Z._uU(174,"labelStyleClass"),Z.qZA(),Z.TgZ(175,"td"),Z._uU(176,"string"),Z.qZA(),Z.TgZ(177,"td"),Z._uU(178,"null"),Z.qZA(),Z.TgZ(179,"td"),Z._uU(180,"Style class of the label."),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(181,"h5"),Z._uU(182,"Events"),Z.qZA(),Z.TgZ(183,"div",19),Z.TgZ(184,"table",20),Z.TgZ(185,"thead"),Z.TgZ(186,"tr"),Z.TgZ(187,"th"),Z._uU(188,"Name"),Z.qZA(),Z.TgZ(189,"th"),Z._uU(190,"Parameters"),Z.qZA(),Z.TgZ(191,"th"),Z._uU(192,"Description"),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(193,"tbody"),Z.TgZ(194,"tr"),Z.TgZ(195,"td"),Z._uU(196,"onClick"),Z.qZA(),Z.TgZ(197,"td"),Z._uU(198,"event: Click event"),Z.qZA(),Z.TgZ(199,"td"),Z._uU(200,"Callback to invoke on radio button click."),Z.qZA(),Z.qZA(),Z.TgZ(201,"tr"),Z.TgZ(202,"td"),Z._uU(203,"onFocus"),Z.qZA(),Z.TgZ(204,"td"),Z._uU(205,"event: Focus event"),Z.qZA(),Z.TgZ(206,"td"),Z._uU(207,"Callback to invoke when the radio button receives focus."),Z.qZA(),Z.qZA(),Z.TgZ(208,"tr"),Z.TgZ(209,"td"),Z._uU(210,"onBlur"),Z.qZA(),Z.TgZ(211,"td"),Z._uU(212,"event: Blur event"),Z.qZA(),Z.TgZ(213,"td"),Z._uU(214,"Callback to invoke when the radio button loses focus."),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(215,"h5"),Z._uU(216,"Methods"),Z.qZA(),Z.TgZ(217,"div",19),Z.TgZ(218,"table",20),Z.TgZ(219,"thead"),Z.TgZ(220,"tr"),Z.TgZ(221,"th"),Z._uU(222,"Name"),Z.qZA(),Z.TgZ(223,"th"),Z._uU(224,"Parameters"),Z.qZA(),Z.TgZ(225,"th"),Z._uU(226,"Description"),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(227,"tbody"),Z.TgZ(228,"tr"),Z.TgZ(229,"td"),Z._uU(230,"focus"),Z.qZA(),Z.TgZ(231,"td"),Z._uU(232,"-"),Z.qZA(),Z.TgZ(233,"td"),Z._uU(234,"Applies focus."),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(235,"h5"),Z._uU(236,"Styling"),Z.qZA(),Z.TgZ(237,"p"),Z._uU(238,"Following is the list of structural style classes, for theming classes visit "),Z.TgZ(239,"a",21),Z._uU(240,"theming page"),Z.qZA(),Z._uU(241,"."),Z.qZA(),Z.TgZ(242,"div",19),Z.TgZ(243,"table",20),Z.TgZ(244,"thead"),Z.TgZ(245,"tr"),Z.TgZ(246,"th"),Z._uU(247,"Name"),Z.qZA(),Z.TgZ(248,"th"),Z._uU(249,"Element"),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(250,"tbody"),Z.TgZ(251,"tr"),Z.TgZ(252,"td"),Z._uU(253,"p-radiobutton"),Z.qZA(),Z.TgZ(254,"td"),Z._uU(255,"Container element"),Z.qZA(),Z.qZA(),Z.TgZ(256,"tr"),Z.TgZ(257,"td"),Z._uU(258,"p-radiobutton-box"),Z.qZA(),Z.TgZ(259,"td"),Z._uU(260,"Container of icon."),Z.qZA(),Z.qZA(),Z.TgZ(261,"tr"),Z.TgZ(262,"td"),Z._uU(263,"p-radiobutton-icon"),Z.qZA(),Z.TgZ(264,"td"),Z._uU(265,"Icon element."),Z.qZA(),Z.qZA(),Z.TgZ(266,"tr"),Z.TgZ(267,"td"),Z._uU(268,"p-chkbox-label"),Z.qZA(),Z.TgZ(269,"td"),Z._uU(270,"Label element."),Z.qZA(),Z.qZA(),Z.TgZ(271,"tr"),Z.TgZ(272,"td"),Z._uU(273,"p-label-active"),Z.qZA(),Z.TgZ(274,"td"),Z._uU(275,"Label element of a checked state."),Z.qZA(),Z.qZA(),Z.TgZ(276,"tr"),Z.TgZ(277,"td"),Z._uU(278,"p-label-focus"),Z.qZA(),Z.TgZ(279,"td"),Z._uU(280,"Label element of a focused state."),Z.qZA(),Z.qZA(),Z.TgZ(281,"tr"),Z.TgZ(282,"td"),Z._uU(283,"p-label-disabled"),Z.qZA(),Z.TgZ(284,"td"),Z._uU(285,"Label element of a disabled state."),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(286,"h5"),Z._uU(287,"Dependencies"),Z.qZA(),Z.TgZ(288,"p"),Z._uU(289,"None."),Z.qZA(),Z.qZA(),Z.TgZ(290,"p-tabPanel",22),Z.TgZ(291,"a",23),Z.TgZ(292,"span"),Z._uU(293,"View on GitHub"),Z.qZA(),Z.qZA(),Z.TgZ(294,"a",24),Z.TgZ(295,"span"),Z._uU(296,"Edit in StackBlitz"),Z.qZA(),Z.qZA(),Z.TgZ(297,"app-code",18),Z.IAx(),Z._uU(298,'\n<h5>Basic</h5>\n<div class="p-field-radiobutton">\n    <p-radioButton name="city" value="Chicago" [(ngModel)]="city" inputId="city1"></p-radioButton>\n    <label for="city1">Chicago</label>\n</div>\n<div class="p-field-radiobutton">\n    <p-radioButton name="city" value="Los Angeles" [(ngModel)]="city" inputId="city2"></p-radioButton>\n    <label for="city2">Los Angeles</label>\n</div>\n<div class="p-field-radiobutton">\n    <p-radioButton name="city" value="New York" [(ngModel)]="city" inputId="city3"></p-radioButton>\n    <label for="city3">New York</label>\n</div>\n<div class="p-field-radiobutton">\n    <p-radioButton name="city" value="San Francisco" [(ngModel)]="city" inputId="city4"></p-radioButton>\n    <label for="city4">San Francisco</label>\n</div>\n\n<h5>Dynamic Values, Preselection, Value Binding and Disabled Option</h5>\n<div *ngFor="let category of categories" class="p-field-checkbox">\n    <p-radioButton [inputId]="category.key" name="category" [value]="category" [(ngModel)]="selectedCategory" [disabled]="category.key === \'R\'"></p-radioButton>\n    <label [for]="category.key">{{category.name}}</label>\n</div>\n'),Z.fQ9(),Z.qZA(),Z.TgZ(299,"app-code",17),Z.IAx(),Z._uU(300,"\nexport class RadioButtonDemo {\n    city: string;\n\n    selectedCategory: any = null;\n\n    categories: any[] = [{name: 'Accounting', key: 'A'}, {name: 'Marketing', key: 'M'}, {name: 'Production', key: 'P'}, {name: 'Research', key: 'R'}];\n\n    ngOnInit() {\n        this.selectedCategory = this.categories[1];\n    }\n}\n"),Z.fQ9(),Z.qZA(),Z.qZA(),Z.TgZ(301,"p-tabPanel",25),Z.YNc(302,s,1,0,"ng-template",26),Z.qZA(),Z.qZA(),Z.qZA()),2&e&&(Z.xp6(12),Z.Q6J("ngModel",t.city),Z.xp6(4),Z.Q6J("ngModel",t.city),Z.xp6(4),Z.Q6J("ngModel",t.city),Z.xp6(4),Z.Q6J("ngModel",t.city),Z.xp6(5),Z.Q6J("ngForOf",t.categories),Z.xp6(210),Z.Q6J("routerLink",Z.DdM(6,A)))},directives:[u.P,d.EU,a.JJ,a.On,o.sg,l.xf,l.x4,g.h,i.yS,r.jx],encapsulation:2}),e})(),q=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=Z.oAB({type:e}),e.\u0275inj=Z.cJS({imports:[[i.Bz.forChild([{path:"",component:T}])],i.Bz]}),e})();var p=n(48065),h=n(59202);let U=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=Z.oAB({type:e}),e.\u0275inj=Z.cJS({imports:[[o.ez,a.u5,q,p.cc,h.LU,g.a,u.L]]}),e})()}}]);