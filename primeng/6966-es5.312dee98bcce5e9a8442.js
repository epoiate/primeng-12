!function(){function n(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function e(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,a(o.key),o)}}function t(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),Object.defineProperty(n,"prototype",{writable:!1}),n}function a(n){var e=function(n,e){if("object"!=typeof n||!n)return n;var t=n[Symbol.toPrimitive];if(void 0!==t){var a=t.call(n,e||"default");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(n)}(n,"string");return"symbol"==typeof e?e:e+""}(self.webpackChunkprimeng=self.webpackChunkprimeng||[]).push([[6966],{76966:function(e,a,o){"use strict";o.r(a),o.d(a,{FloatLabelDemoModule:function(){return P}});var l=o(61116),i=o(11462),p=o(42066),c=o(87368),s=o(33192),d=o(12774),u=o(52654),r=o(702),g=o(92947),m=o(29316),f=o(79940),Z=o(53272),v=o(20661),b=o(98233),A=o(17782),h=o(39987),T=o(29559),M=o(47299),q=o(90628),C=o(74136);function S(n,e){1&n&&c._UZ(0,"iframe",51)}var y,x=function(){return["states","cities"]},I=function(){var e=function(){return t(function e(t){n(this,e),this.countryService=t,this.cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}]},[{key:"ngOnInit",value:function(){var n=this;this.countryService.getCountries().then(function(e){n.countries=e}),this.cascadeSelectCountries=[{name:"Australia",code:"AU",states:[{name:"New South Wales",cities:[{cname:"Sydney",code:"A-SY"},{cname:"Newcastle",code:"A-NE"},{cname:"Wollongong",code:"A-WO"}]},{name:"Queensland",cities:[{cname:"Brisbane",code:"A-BR"},{cname:"Townsville",code:"A-TO"}]}]},{name:"Canada",code:"CA",states:[{name:"Quebec",cities:[{cname:"Montreal",code:"C-MO"},{cname:"Quebec City",code:"C-QU"}]},{name:"Ontario",cities:[{cname:"Ottawa",code:"C-OT"},{cname:"Toronto",code:"C-TO"}]}]},{name:"United States",code:"US",states:[{name:"California",cities:[{cname:"Los Angeles",code:"US-LA"},{cname:"San Diego",code:"US-SD"},{cname:"San Francisco",code:"US-SF"}]},{name:"Florida",cities:[{cname:"Jacksonville",code:"US-JA"},{cname:"Miami",code:"US-MI"},{cname:"Tampa",code:"US-TA"},{cname:"Orlando",code:"US-OR"}]},{name:"Texas",cities:[{cname:"Austin",code:"US-AU"},{cname:"Dallas",code:"US-DA"},{cname:"Houston",code:"US-HO"}]}]}]}},{key:"searchCountry",value:function(n){for(var e=[],t=n.query,a=0;a<this.countries.length;a++){var o=this.countries[a];0==o.name.toLowerCase().indexOf(t.toLowerCase())&&e.push(o)}this.filteredCountries=e}}])}();return e.\u0275fac=function(n){return new(n||e)(c.Y36(s.T))},e.\u0275cmp=c.Xpm({type:e,selectors:[["ng-component"]],decls:100,vars:21,consts:[[1,"content-section","introduction"],[1,"feature-intro"],["github","floatlabel","stackblitz","floatlabel-demo"],[1,"content-section","implementation"],[1,"card"],[1,"p-fluid","p-grid"],[1,"p-field","p-col-12","p-md-4"],[1,"p-float-label"],["type","text","id","inputtext","pInputText","",3,"ngModel","ngModelChange"],["for","inputtext"],[1,"p-float-label","p-input-icon-left"],[1,"pi","pi-search"],["type","text","id","inputtext-left","pInputText","",3,"ngModel","ngModelChange"],["for","inputtext-left"],[1,"p-float-label","p-input-icon-right"],[1,"pi","pi-spin","pi-spinner"],["type","text","id","inputtext-right","pInputText","",3,"ngModel","ngModelChange"],["for","inputtext-right"],["inputId","autocomplete","field","name",3,"ngModel","suggestions","ngModelChange","completeMethod"],["for","autocomplete"],["inputId","calendar",3,"ngModel","ngModelChange"],["for","calendar"],["inputId","chips",3,"ngModel","ngModelChange"],["for","chips"],["inputId","inputmask","mask","99/99/9999",3,"ngModel","ngModelChange"],["for","inputmask"],["inputId","inputnumber",3,"ngModel","ngModelChange"],["for","inputnumber"],[1,"p-inputgroup"],[1,"p-inputgroup-addon"],[1,"pi","pi-user"],["type","text","id","inputgroup","pInputText","",3,"ngModel","ngModelChange"],["for","inputgroup"],["inputId","cascadeSelect","optionLabel","cname","optionGroupLabel","name",3,"options","optionGroupChildren"],["for","cascadeSelect"],["inputId","dropdown","optionLabel","name",3,"autoDisplayFirst","options","ngModel","ngModelChange"],["for","dropdown"],["inputId","multiselect","optionLabel","name",3,"options","ngModel","filter","ngModelChange"],["for","multiselect"],["inputId","textarea","rows","3","cols","30","pInputTextarea","",2,"resize","none",3,"ngModel","ngModelChange"],["for","textarea"],["inputId","password",3,"ngModel","ngModelChange"],["for","password"],[1,"content-section","documentation"],["header","Source"],["href","https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/floatlabel","target","_blank",1,"btn-viewsource"],["href","https://stackblitz.com/edit/primeng-floatlabel-demo","target","_blank",1,"btn-viewsource",2,"margin-left",".5em"],["lang","markup"],["lang","typescript"],["header","StackBlitz"],["pTemplate","content"],["src","https://stackblitz.com/edit/primeng-floatlabel-demo?embed=1",2,"width","100%","height","768px","border","none"]],template:function(n,e){1&n&&(c.TgZ(0,"div",0),c.TgZ(1,"div",1),c.TgZ(2,"h1"),c._uU(3,"Float Label"),c.qZA(),c.TgZ(4,"p"),c._uU(5,"All input text components support floating labels."),c.qZA(),c.qZA(),c._UZ(6,"app-demoActions",2),c.qZA(),c.TgZ(7,"div",3),c.TgZ(8,"div",4),c.TgZ(9,"div",5),c.TgZ(10,"div",6),c.TgZ(11,"span",7),c.TgZ(12,"input",8),c.NdJ("ngModelChange",function(n){return e.value1=n}),c.qZA(),c.TgZ(13,"label",9),c._uU(14,"InputText"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(15,"div",6),c.TgZ(16,"span",10),c._UZ(17,"i",11),c.TgZ(18,"input",12),c.NdJ("ngModelChange",function(n){return e.valueIconLeft=n}),c.qZA(),c.TgZ(19,"label",13),c._uU(20,"Left Icon"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(21,"div",6),c.TgZ(22,"span",14),c._UZ(23,"i",15),c.TgZ(24,"input",16),c.NdJ("ngModelChange",function(n){return e.valueIconRight=n}),c.qZA(),c.TgZ(25,"label",17),c._uU(26,"Right Icon"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(27,"div",6),c.TgZ(28,"span",7),c.TgZ(29,"p-autoComplete",18),c.NdJ("ngModelChange",function(n){return e.value2=n})("completeMethod",function(n){return e.searchCountry(n)}),c.qZA(),c.TgZ(30,"label",19),c._uU(31,"AutoComplete"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(32,"div",6),c.TgZ(33,"span",7),c.TgZ(34,"p-calendar",20),c.NdJ("ngModelChange",function(n){return e.value3=n}),c.qZA(),c.TgZ(35,"label",21),c._uU(36,"Calendar"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(37,"div",6),c.TgZ(38,"span",7),c.TgZ(39,"p-chips",22),c.NdJ("ngModelChange",function(n){return e.value4=n}),c.qZA(),c.TgZ(40,"label",23),c._uU(41,"Chips"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(42,"div",6),c.TgZ(43,"span",7),c.TgZ(44,"p-inputMask",24),c.NdJ("ngModelChange",function(n){return e.value5=n}),c.qZA(),c.TgZ(45,"label",25),c._uU(46,"InputMask"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(47,"div",6),c.TgZ(48,"span",7),c.TgZ(49,"p-inputNumber",26),c.NdJ("ngModelChange",function(n){return e.value6=n}),c.qZA(),c.TgZ(50,"label",27),c._uU(51,"InputNumber"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(52,"div",6),c.TgZ(53,"div",28),c.TgZ(54,"span",29),c._UZ(55,"i",30),c.qZA(),c.TgZ(56,"span",7),c.TgZ(57,"input",31),c.NdJ("ngModelChange",function(n){return e.value7=n}),c.qZA(),c.TgZ(58,"label",32),c._uU(59,"InputGroup"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(60,"div",6),c.TgZ(61,"span",7),c._UZ(62,"p-cascadeSelect",33),c.TgZ(63,"label",34),c._uU(64,"CascadeSelect"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(65,"div",6),c.TgZ(66,"span",7),c.TgZ(67,"p-dropdown",35),c.NdJ("ngModelChange",function(n){return e.value8=n}),c.qZA(),c.TgZ(68,"label",36),c._uU(69,"Dropdown"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(70,"div",6),c.TgZ(71,"span",7),c.TgZ(72,"p-multiSelect",37),c.NdJ("ngModelChange",function(n){return e.value9=n}),c.qZA(),c.TgZ(73,"label",38),c._uU(74,"MultiSelect"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(75,"div",6),c.TgZ(76,"span",7),c.TgZ(77,"textarea",39),c.NdJ("ngModelChange",function(n){return e.value10=n}),c.qZA(),c.TgZ(78,"label",40),c._uU(79,"Textarea"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(80,"div",6),c.TgZ(81,"span",7),c.TgZ(82,"p-password",41),c.NdJ("ngModelChange",function(n){return e.value11=n}),c.qZA(),c.TgZ(83,"label",42),c._uU(84,"Password"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(85,"div",43),c.TgZ(86,"p-tabView"),c.TgZ(87,"p-tabPanel",44),c.TgZ(88,"a",45),c.TgZ(89,"span"),c._uU(90,"View on GitHub"),c.qZA(),c.qZA(),c.TgZ(91,"a",46),c.TgZ(92,"span"),c._uU(93,"Edit in StackBlitz"),c.qZA(),c.qZA(),c.TgZ(94,"app-code",47),c.IAx(),c._uU(95,'\n<div class="p-fluid p-grid">\n    <div class="p-field p-col-12 p-md-4">\n        <span class="p-float-label">\n            <input type="text" id="inputtext" pInputText [(ngModel)]="value1"> \n            <label for="inputtext">InputText</label>\n        </span>\n    </div>\n    <div class="p-field p-col-12 p-md-4">\n        <span class="p-float-label p-input-icon-left">\n            <i class="pi pi-search"></i>\n            <input type="text" id="inputtext-left" pInputText [(ngModel)]="valueIconLeft"> \n            <label for="inputtext-left">Left Icon</label>\n        </span>\n    </div>\n    <div class="p-field p-col-12 p-md-4">\n        <span class="p-float-label p-input-icon-right">\n            <i class="pi pi-spin pi-spinner"></i>\n            <input type="text" id="inputtext-right" pInputText [(ngModel)]="valueIconRight"> \n            <label for="inputtext-right">Right Icon</label>\n        </span>\n    </div>\n    <div class="p-field p-col-12 p-md-4">\n        <span class="p-float-label">\n            <p-autoComplete inputId="autocomplete" [(ngModel)]="value2" [suggestions]="filteredCountries" (completeMethod)="searchCountry($event)" field="name"></p-autoComplete>\n            <label for="autocomplete">AutoComplete</label>\n        </span>\n    </div>\n    <div class="p-field p-col-12 p-md-4">\n        <span class="p-float-label">\n            <p-calendar inputId="calendar" [(ngModel)]="value3"></p-calendar>\n            <label for="calendar">Calendar</label>\n        </span>\n    </div>\n    <div class="p-field p-col-12 p-md-4">\n        <span class="p-float-label">\n            <p-chips inputId="chips" [(ngModel)]="value4"></p-chips>\n            <label for="chips">Chips</label>\n        </span>\n    </div>\n    <div class="p-field p-col-12 p-md-4">\n        <span class="p-float-label">\n            <p-inputMask inputId="inputmask" mask="99/99/9999" [(ngModel)]="value5"></p-inputMask>\n            <label for="inputmask">InputMask</label>\n        </span>\n    </div>\n    <div class="p-field p-col-12 p-md-4">\n        <span class="p-float-label">\n            <p-inputNumber inputId="inputnumber" [(ngModel)]="value6"></p-inputNumber>\n            <label for="inputnumber">InputNumber</label>\n        </span>\n    </div>\n    <div class="p-field p-col-12 p-md-4">\n        <div class="p-inputgroup">\n            <span class="p-inputgroup-addon">\n                <i class="pi pi-user"></i>\n            </span>\n            <span class="p-float-label">\n                <input type="text" id="inputgroup" pInputText [(ngModel)]="value7"> \n                <label for="inputgroup">InputGroup</label>\n            </span>\n        </div>\n    </div>\n    <div class="p-field p-col-12 p-md-4">\n        <span class="p-float-label">\n            <p-cascadeSelect inputId="cascadeSelect" [options]="cascadeSelectCountries" optionLabel="cname" optionGroupLabel="name" \n                [optionGroupChildren]="[\'states\', \'cities\']"></p-cascadeSelect>\n            <label for="cascadeSelect">CascadeSelect</label>\n        </span>\n    </div>\n    <div class="p-field p-col-12 p-md-4">\n        <span class="p-float-label">\n            <p-dropdown inputId="dropdown" [autoDisplayFirst]="false" [options]="cities" [(ngModel)]="value8" optionLabel="name"></p-dropdown>\n            <label for="dropdown">Dropdown</label>\n        </span>\n    </div>\n    <div class="p-field p-col-12 p-md-4">\n        <span class="p-float-label">\n            <p-multiSelect inputId="multiselect" [options]="cities" [(ngModel)]="value9" optionLabel="name" [filter]="false"></p-multiSelect>\n            <label for="multiselect">MultiSelect</label>\n        </span>\n    </div>\n    <div class="p-field p-col-12 p-md-4">\n        <span class="p-float-label">\n            <textarea inputId="textarea" rows="3" style="resize: none;" cols="30" [(ngModel)]="value10" pInputTextarea></textarea>\n            <label for="textarea">Textarea</label>\n        </span>\n    </div>\n    <div class="p-field p-col-12 p-md-4">\n        <span class="p-float-label">\n            <p-password inputId="password" [(ngModel)]="value11"></p-password>\n            <label for="password">Password</label>\n        </span>\n    </div>\n</div>\n'),c.fQ9(),c.qZA(),c.TgZ(96,"app-code",48),c.IAx(),c._uU(97,"\nexport class FloatLabelDemo {\n\n    countries: any[];\n\n    cascadeSelectCountries: any[];\n\n    cities: any[];\n\n    filteredCountries: any[];\n\n    value1: any;\n\n    value2: any;\n\n    value3: any;\n\n    value4: any;\n\n    value5: any;\n\n    value6: any;\n\n    value7: any;\n\n    value8: any;\n    \n    value9: any;\n\n    value10: any;\n\n    value11: any;\n\n    valueIconLeft: any;\n\n    valueIconRight: any;\n\n    constructor(private countryService: CountryService) {\n        this.cities = [\n            {name: 'New York', code: 'NY'},\n            {name: 'Rome', code: 'RM'},\n            {name: 'London', code: 'LDN'},\n            {name: 'Istanbul', code: 'IST'},\n            {name: 'Paris', code: 'PRS'}\n        ];\n    }\n\n    ngOnInit() {\n        this.countryService.getCountries().then(countries => {\n            this.countries = countries;\n        });\n\n        this.cascadeSelectCountries = [\n            {\n                name: 'Australia',\n                code: 'AU',\n                states: [\n                    {\n                        name: 'New South Wales',\n                        cities: [\n                            {cname: 'Sydney', code: 'A-SY'},\n                            {cname: 'Newcastle', code: 'A-NE'},\n                            {cname: 'Wollongong', code: 'A-WO'}\n                        ]\n                    },\n                    {\n                        name: 'Queensland',\n                        cities: [\n                            {cname: 'Brisbane', code: 'A-BR'},\n                            {cname: 'Townsville', code: 'A-TO'}\n                        ]\n                    },\n                    \n                ]\n            },\n            {\n                name: 'Canada', \n                code: 'CA',\n                states: [\n                    {\n                        name: 'Quebec',\n                        cities: [\n                            {cname: 'Montreal', code: 'C-MO'},\n                            {cname: 'Quebec City', code: 'C-QU'}\n                        ]\n                    },\n                    {\n                        name: 'Ontario',\n                        cities: [\n                            {cname: 'Ottawa', code: 'C-OT'},\n                            {cname: 'Toronto', code: 'C-TO'}\n                        ]\n                    },\n                    \n                ]\n            },\n            {\n                name: 'United States',\n                code: 'US',\n                states: [\n                    {\n                        name: 'California',\n                        cities: [\n                            {cname: 'Los Angeles', code: 'US-LA'},\n                            {cname: 'San Diego', code: 'US-SD'},\n                            {cname: 'San Francisco', code: 'US-SF'}\n                        ]\n                    },\n                    {\n                        name: 'Florida',\n                        cities: [\n                            {cname: 'Jacksonville', code: 'US-JA'},\n                            {cname: 'Miami', code: 'US-MI'},\n                            {cname: 'Tampa', code: 'US-TA'},\n                            {cname: 'Orlando', code: 'US-OR'}\n                        ]\n                    },\n                    {\n                        name: 'Texas',\n                        cities: [\n                            {cname: 'Austin', code: 'US-AU'},\n                            {cname: 'Dallas', code: 'US-DA'},\n                            {cname: 'Houston', code: 'US-HO'}\n                        ]\n                    }\n                ]\n            }\n        ];\n    }\n\n    searchCountry(event) {\n        //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side\n        let filtered : any[] = [];\n        let query = event.query;\n        for(let i = 0; i < this.countries.length; i++) {\n            let country = this.countries[i];\n            if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {\n                filtered.push(country);\n            }\n        }\n        \n        this.filteredCountries = filtered;\n    }\n}\n"),c.fQ9(),c.qZA(),c.qZA(),c.TgZ(98,"p-tabPanel",49),c.YNc(99,S,1,0,"ng-template",50),c.qZA(),c.qZA(),c.qZA()),2&n&&(c.xp6(12),c.Q6J("ngModel",e.value1),c.xp6(6),c.Q6J("ngModel",e.valueIconLeft),c.xp6(6),c.Q6J("ngModel",e.valueIconRight),c.xp6(5),c.Q6J("ngModel",e.value2)("suggestions",e.filteredCountries),c.xp6(5),c.Q6J("ngModel",e.value3),c.xp6(5),c.Q6J("ngModel",e.value4),c.xp6(5),c.Q6J("ngModel",e.value5),c.xp6(5),c.Q6J("ngModel",e.value6),c.xp6(8),c.Q6J("ngModel",e.value7),c.xp6(5),c.Q6J("options",e.cascadeSelectCountries)("optionGroupChildren",c.DdM(20,x)),c.xp6(5),c.Q6J("autoDisplayFirst",!1)("options",e.cities)("ngModel",e.value8),c.xp6(5),c.Q6J("options",e.cities)("ngModel",e.value9)("filter",!1),c.xp6(5),c.Q6J("ngModel",e.value10),c.xp6(5),c.Q6J("ngModel",e.value11))},directives:[d.P,i.Fj,u.o,i.JJ,i.On,r.Qc,g.f,m.cL,f.vy,Z.Rn,v.ZK,b.Lt,A.NU,h.g,T.ro,M.xf,M.x4,q.h,C.jx],encapsulation:2}),e}(),U=function(){var e=t(function e(){n(this,e)});return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[p.Bz.forChild([{path:"",component:I}])],p.Bz]}),e}(),w=o(56463),J=o(89191),L=o(59202),N=o(58177),k=o(36673),_=o(17559),O=o(6172),Q=o(51328),D=o(45694),R=o(38752),z=o(94492),F=o(67907),P=((y=t(function e(){n(this,e)})).\u0275fac=function(n){return new(n||y)},y.\u0275mod=c.oAB({type:y}),y.\u0275inj=c.cJS({imports:[[l.ez,U,w.hJ,J.Q,L.LU,u.j,N.WN,k._8,z.XH,_.Gg,O.zz,Q.L$,D.kW,R.q4,h.A,i.u5,d.L,q.a,F.gz]]}),y)}}])}();