(self.webpackChunkprimeng=self.webpackChunkprimeng||[]).push([[1328],{53272:function(t,e,n){"use strict";n.d(e,{Rn:function(){return b},L$:function(){return x}});var i=n(87368),s=n(61116),u=n(52654),r=n(56463),a=n(11462),o=n(59766);const l=["input"],p=function(){return{"p-inputnumber-button p-inputnumber-button-up":!0}},c=function(){return{"p-inputnumber-button p-inputnumber-button-down":!0}};function h(t,e){if(1&t){const t=i.EpF();i.TgZ(0,"span",5),i.TgZ(1,"button",6),i.NdJ("mousedown",function(e){return i.CHM(t),i.oxw().onUpButtonMouseDown(e)})("mouseup",function(){return i.CHM(t),i.oxw().onUpButtonMouseUp()})("mouseleave",function(){return i.CHM(t),i.oxw().onUpButtonMouseLeave()})("keydown",function(e){return i.CHM(t),i.oxw().onUpButtonKeyDown(e)})("keyup",function(){return i.CHM(t),i.oxw().onUpButtonKeyUp()}),i.qZA(),i.TgZ(2,"button",6),i.NdJ("mousedown",function(e){return i.CHM(t),i.oxw().onDownButtonMouseDown(e)})("mouseup",function(){return i.CHM(t),i.oxw().onDownButtonMouseUp()})("mouseleave",function(){return i.CHM(t),i.oxw().onDownButtonMouseLeave()})("keydown",function(e){return i.CHM(t),i.oxw().onDownButtonKeyDown(e)})("keyup",function(){return i.CHM(t),i.oxw().onDownButtonKeyUp()}),i.qZA(),i.qZA()}if(2&t){const t=i.oxw();i.xp6(1),i.Tol(t.incrementButtonClass),i.Q6J("ngClass",i.DdM(10,p))("icon",t.incrementButtonIcon)("disabled",t.disabled),i.xp6(1),i.Tol(t.decrementButtonClass),i.Q6J("ngClass",i.DdM(11,c))("icon",t.decrementButtonIcon)("disabled",t.disabled)}}function m(t,e){if(1&t){const t=i.EpF();i.TgZ(0,"button",6),i.NdJ("mousedown",function(e){return i.CHM(t),i.oxw().onUpButtonMouseDown(e)})("mouseup",function(){return i.CHM(t),i.oxw().onUpButtonMouseUp()})("mouseleave",function(){return i.CHM(t),i.oxw().onUpButtonMouseLeave()})("keydown",function(e){return i.CHM(t),i.oxw().onUpButtonKeyDown(e)})("keyup",function(){return i.CHM(t),i.oxw().onUpButtonKeyUp()}),i.qZA()}if(2&t){const t=i.oxw();i.Tol(t.incrementButtonClass),i.Q6J("ngClass",i.DdM(5,p))("icon",t.incrementButtonIcon)("disabled",t.disabled)}}function d(t,e){if(1&t){const t=i.EpF();i.TgZ(0,"button",6),i.NdJ("mousedown",function(e){return i.CHM(t),i.oxw().onDownButtonMouseDown(e)})("mouseup",function(){return i.CHM(t),i.oxw().onDownButtonMouseUp()})("mouseleave",function(){return i.CHM(t),i.oxw().onDownButtonMouseLeave()})("keydown",function(e){return i.CHM(t),i.oxw().onDownButtonKeyDown(e)})("keyup",function(){return i.CHM(t),i.oxw().onDownButtonKeyUp()}),i.qZA()}if(2&t){const t=i.oxw();i.Tol(t.decrementButtonClass),i.Q6J("ngClass",i.DdM(5,c))("icon",t.decrementButtonIcon)("disabled",t.disabled)}}const g=function(t,e,n){return{"p-inputnumber p-component":!0,"p-inputnumber-buttons-stacked":t,"p-inputnumber-buttons-horizontal":e,"p-inputnumber-buttons-vertical":n}},f={provide:a.JU,useExisting:(0,i.Gpc)(()=>b),multi:!0};let b=(()=>{class t{constructor(t,e){this.el=t,this.cd=e,this.showButtons=!1,this.format=!0,this.buttonLayout="stacked",this.incrementButtonIcon="pi pi-angle-up",this.decrementButtonIcon="pi pi-angle-down",this.readonly=!1,this.step=1,this.allowEmpty=!0,this.mode="decimal",this.useGrouping=!0,this.onInput=new i.vpe,this.onFocus=new i.vpe,this.onBlur=new i.vpe,this.onKeyDown=new i.vpe,this.onModelChange=()=>{},this.onModelTouched=()=>{},this.groupChar="",this.prefixChar="",this.suffixChar=""}get disabled(){return this._disabled}set disabled(t){t&&(this.focused=!1),this._disabled=t,this.timer&&this.clearTimer()}ngOnChanges(t){["locale","localeMatcher","mode","currency","currencyDisplay","useGrouping","minFractionDigits","maxFractionDigits","prefix","suffix"].some(e=>!!t[e])&&this.updateConstructParser()}ngOnInit(){this.constructParser(),this.initialized=!0}getOptions(){return{localeMatcher:this.localeMatcher,style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:this.useGrouping,minimumFractionDigits:this.minFractionDigits,maximumFractionDigits:this.maxFractionDigits}}constructParser(){this.numberFormat=new Intl.NumberFormat(this.locale,this.getOptions());const t=[...new Intl.NumberFormat(this.locale,{useGrouping:!1}).format(9876543210)].reverse(),e=new Map(t.map((t,e)=>[t,e]));this._numeral=new RegExp(`[${t.join("")}]`,"g"),this._group=this.getGroupingExpression(),this._minusSign=this.getMinusSignExpression(),this._currency=this.getCurrencyExpression(),this._decimal=this.getDecimalExpression(),this._suffix=this.getSuffixExpression(),this._prefix=this.getPrefixExpression(),this._index=t=>e.get(t)}updateConstructParser(){this.initialized&&this.constructParser()}escapeRegExp(t){return t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")}getDecimalExpression(){const t=new Intl.NumberFormat(this.locale,Object.assign(Object.assign({},this.getOptions()),{useGrouping:!1}));return new RegExp(`[${t.format(1.1).replace(this._currency,"").trim().replace(this._numeral,"")}]`,"g")}getGroupingExpression(){const t=new Intl.NumberFormat(this.locale,{useGrouping:!0});return this.groupChar=t.format(1e6).trim().replace(this._numeral,"").charAt(0),new RegExp(`[${this.groupChar}]`,"g")}getMinusSignExpression(){const t=new Intl.NumberFormat(this.locale,{useGrouping:!1});return new RegExp(`[${t.format(-1).trim().replace(this._numeral,"")}]`,"g")}getCurrencyExpression(){if(this.currency){const t=new Intl.NumberFormat(this.locale,{style:"currency",currency:this.currency,currencyDisplay:this.currencyDisplay,minimumFractionDigits:0,maximumFractionDigits:0});return new RegExp(`[${t.format(1).replace(/\s/g,"").replace(this._numeral,"").replace(this._group,"")}]`,"g")}return new RegExp("[]","g")}getPrefixExpression(){if(this.prefix)this.prefixChar=this.prefix;else{const t=new Intl.NumberFormat(this.locale,{style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay});this.prefixChar=t.format(1).split("1")[0]}return new RegExp(`${this.escapeRegExp(this.prefixChar||"")}`,"g")}getSuffixExpression(){if(this.suffix)this.suffixChar=this.suffix;else{const t=new Intl.NumberFormat(this.locale,{style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay,minimumFractionDigits:0,maximumFractionDigits:0});this.suffixChar=t.format(1).split("1")[1]}return new RegExp(`${this.escapeRegExp(this.suffixChar||"")}`,"g")}formatValue(t){if(null!=t){if("-"===t)return t;if(this.format){let e=new Intl.NumberFormat(this.locale,this.getOptions()).format(t);return this.prefix&&(e=this.prefix+e),this.suffix&&(e+=this.suffix),e}return t.toString()}return""}parseValue(t){let e=t.replace(this._suffix,"").replace(this._prefix,"").trim().replace(/\s/g,"").replace(this._currency,"").replace(this._group,"").replace(this._minusSign,"-").replace(this._decimal,".").replace(this._numeral,this._index);if(e){if("-"===e)return e;let t=+e;return isNaN(t)?null:t}return null}repeat(t,e,n){if(this.readonly)return;let i=e||500;this.clearTimer(),this.timer=setTimeout(()=>{this.repeat(t,40,n)},i),this.spin(t,n)}spin(t,e){let n=this.step*e,i=this.parseValue(this.input.nativeElement.value)||0,s=this.validateValue(i+n);this.maxlength&&this.maxlength<this.formatValue(s).length||(this.updateInput(s,null,"spin",null),this.updateModel(t,s),this.handleOnInput(t,i,s))}onUpButtonMouseDown(t){this.input.nativeElement.focus(),this.repeat(t,null,1),t.preventDefault()}onUpButtonMouseUp(){this.clearTimer()}onUpButtonMouseLeave(){this.clearTimer()}onUpButtonKeyDown(t){32!==t.keyCode&&13!==t.keyCode||this.repeat(t,null,1)}onUpButtonKeyUp(){this.clearTimer()}onDownButtonMouseDown(t){this.input.nativeElement.focus(),this.repeat(t,null,-1),t.preventDefault()}onDownButtonMouseUp(){this.clearTimer()}onDownButtonMouseLeave(){this.clearTimer()}onDownButtonKeyUp(){this.clearTimer()}onDownButtonKeyDown(t){32!==t.keyCode&&13!==t.keyCode||this.repeat(t,null,-1)}onUserInput(t){this.isSpecialChar&&(t.target.value=this.lastValue),this.isSpecialChar=!1}onInputKeyDown(t){if(this.lastValue=t.target.value,t.shiftKey||t.altKey)return void(this.isSpecialChar=!0);let e=t.target.selectionStart,n=t.target.selectionEnd,i=t.target.value,s=null;switch(t.altKey&&t.preventDefault(),t.which){case 38:this.spin(t,1),t.preventDefault();break;case 40:this.spin(t,-1),t.preventDefault();break;case 37:this.isNumeralChar(i.charAt(e-1))||t.preventDefault();break;case 39:this.isNumeralChar(i.charAt(e))||t.preventDefault();break;case 13:s=this.validateValue(this.parseValue(this.input.nativeElement.value)),this.input.nativeElement.value=this.formatValue(s),this.input.nativeElement.setAttribute("aria-valuenow",s),this.updateModel(t,s);break;case 8:if(t.preventDefault(),e===n){const n=i.charAt(e-1),{decimalCharIndex:u,decimalCharIndexWithoutPrefix:r}=this.getDecimalCharIndexes(i);if(this.isNumeralChar(n)){const t=this.getDecimalLength(i);if(this._group.test(n))this._group.lastIndex=0,s=i.slice(0,e-2)+i.slice(e-1);else if(this._decimal.test(n))this._decimal.lastIndex=0,t?this.input.nativeElement.setSelectionRange(e-1,e-1):s=i.slice(0,e-1)+i.slice(e);else if(u>0&&e>u){const n=this.isDecimalMode()&&(this.minFractionDigits||0)<t?"":"0";s=i.slice(0,e-1)+n+i.slice(e)}else 1===r?(s=i.slice(0,e-1)+"0"+i.slice(e),s=this.parseValue(s)>0?s:""):s=i.slice(0,e-1)+i.slice(e)}this.updateValue(t,s,null,"delete-single")}else s=this.deleteRange(i,e,n),this.updateValue(t,s,null,"delete-range");break;case 46:if(t.preventDefault(),e===n){const n=i.charAt(e),{decimalCharIndex:u,decimalCharIndexWithoutPrefix:r}=this.getDecimalCharIndexes(i);if(this.isNumeralChar(n)){const t=this.getDecimalLength(i);if(this._group.test(n))this._group.lastIndex=0,s=i.slice(0,e)+i.slice(e+2);else if(this._decimal.test(n))this._decimal.lastIndex=0,t?this.input.nativeElement.setSelectionRange(e+1,e+1):s=i.slice(0,e)+i.slice(e+1);else if(u>0&&e>u){const n=this.isDecimalMode()&&(this.minFractionDigits||0)<t?"":"0";s=i.slice(0,e)+n+i.slice(e+1)}else 1===r?(s=i.slice(0,e)+"0"+i.slice(e+1),s=this.parseValue(s)>0?s:""):s=i.slice(0,e)+i.slice(e+1)}this.updateValue(t,s,null,"delete-back-single")}else s=this.deleteRange(i,e,n),this.updateValue(t,s,null,"delete-range")}this.onKeyDown.emit(t)}onInputKeyPress(t){t.preventDefault();let e=t.which||t.keyCode,n=String.fromCharCode(e);const i=this.isDecimalSign(n),s=this.isMinusSign(n);(48<=e&&e<=57||s||i)&&this.insert(t,n,{isDecimalSign:i,isMinusSign:s})}onPaste(t){if(!this.disabled){t.preventDefault();let e=(t.clipboardData||window.clipboardData).getData("Text");if(e){let n=this.parseValue(e);null!=n&&this.insert(t,n.toString())}}}allowMinusSign(){return null==this.min||this.min<0}isMinusSign(t){return!(!this._minusSign.test(t)&&"-"!==t||(this._minusSign.lastIndex=0,0))}isDecimalSign(t){return!!this._decimal.test(t)&&(this._decimal.lastIndex=0,!0)}isDecimalMode(){return"decimal"===this.mode}getDecimalCharIndexes(t){let e=t.search(this._decimal);this._decimal.lastIndex=0;const n=t.replace(this._prefix,"").trim().replace(/\s/g,"").replace(this._currency,"").search(this._decimal);return this._decimal.lastIndex=0,{decimalCharIndex:e,decimalCharIndexWithoutPrefix:n}}getCharIndexes(t){const e=t.search(this._decimal);this._decimal.lastIndex=0;const n=t.search(this._minusSign);this._minusSign.lastIndex=0;const i=t.search(this._suffix);this._suffix.lastIndex=0;const s=t.search(this._currency);return this._currency.lastIndex=0,{decimalCharIndex:e,minusCharIndex:n,suffixCharIndex:i,currencyCharIndex:s}}insert(t,e,n={isDecimalSign:!1,isMinusSign:!1}){const i=e.search(this._minusSign);if(this._minusSign.lastIndex=0,!this.allowMinusSign()&&-1!==i)return;let s=this.input.nativeElement.selectionStart,u=this.input.nativeElement.selectionEnd,r=this.input.nativeElement.value.trim();const{decimalCharIndex:a,minusCharIndex:o,suffixCharIndex:l,currencyCharIndex:p}=this.getCharIndexes(r);let c;if(n.isMinusSign)0===s&&(c=r,-1!==o&&0===u||(c=this.insertText(r,e,0,u)),this.updateValue(t,c,e,"insert"));else if(n.isDecimalSign)a>0&&s===a?this.updateValue(t,r,e,"insert"):(a>s&&a<u||-1===a&&this.maxFractionDigits)&&(c=this.insertText(r,e,s,u),this.updateValue(t,c,e,"insert"));else{const n=this.numberFormat.resolvedOptions().maximumFractionDigits,i=s!==u?"range-insert":"insert";if(a>0&&s>a){if(s+e.length-(a+1)<=n){const n=p>=s?p-1:l>=s?l:r.length;c=r.slice(0,s)+e+r.slice(s+e.length,n)+r.slice(n),this.updateValue(t,c,e,i)}}else c=this.insertText(r,e,s,u),this.updateValue(t,c,e,i)}}insertText(t,e,n,i){if(2===("."===e?e:e.split(".")).length){const s=t.slice(n,i).search(this._decimal);return this._decimal.lastIndex=0,s>0?t.slice(0,n)+this.formatValue(e)+t.slice(i):t||this.formatValue(e)}return i-n===t.length?this.formatValue(e):0===n?e+t.slice(i):i===t.length?t.slice(0,n)+e:t.slice(0,n)+e+t.slice(i)}deleteRange(t,e,n){let i;return i=n-e===t.length?"":0===e?t.slice(n):n===t.length?t.slice(0,e):t.slice(0,e)+t.slice(n),i}initCursor(){let t=this.input.nativeElement.selectionStart,e=this.input.nativeElement.value,n=e.length,i=null,s=(this.prefixChar||"").length;e=e.replace(this._prefix,""),t-=s;let u=e.charAt(t);if(this.isNumeralChar(u))return t+s;let r=t-1;for(;r>=0;){if(u=e.charAt(r),this.isNumeralChar(u)){i=r+s;break}r--}if(null!==i)this.input.nativeElement.setSelectionRange(i+1,i+1);else{for(r=t;r<n;){if(u=e.charAt(r),this.isNumeralChar(u)){i=r+s;break}r++}null!==i&&this.input.nativeElement.setSelectionRange(i,i)}return i||0}onInputClick(){this.initCursor()}isNumeralChar(t){return!(1!==t.length||!(this._numeral.test(t)||this._decimal.test(t)||this._group.test(t)||this._minusSign.test(t))||(this.resetRegex(),0))}resetRegex(){this._numeral.lastIndex=0,this._decimal.lastIndex=0,this._group.lastIndex=0,this._minusSign.lastIndex=0}updateValue(t,e,n,i){let s=this.input.nativeElement.value,u=null;null!=e&&(u=this.parseValue(e),u=u||this.allowEmpty?u:0,this.updateInput(u,n,i,e),this.handleOnInput(t,s,u))}handleOnInput(t,e,n){this.isValueChanged(e,n)&&this.onInput.emit({originalEvent:t,value:n})}isValueChanged(t,e){return null===e&&null!==t||null!=e&&e!==("string"==typeof t?this.parseValue(t):t)}validateValue(t){return"-"===t||null==t?null:null!=this.min&&t<this.min?this.min:null!=this.max&&t>this.max?this.max:t}updateInput(t,e,n,i){e=e||"";let s=this.input.nativeElement.value,u=this.formatValue(t),r=s.length;if(u!==i&&(u=this.concatValues(u,i)),0===r){this.input.nativeElement.value=u,this.input.nativeElement.setSelectionRange(0,0);const t=this.initCursor()+e.length;this.input.nativeElement.setSelectionRange(t,t)}else{let t=this.input.nativeElement.selectionStart,i=this.input.nativeElement.selectionEnd;if(this.maxlength&&this.maxlength<u.length)return;this.input.nativeElement.value=u;let a=u.length;if("range-insert"===n){const n=this.parseValue((s||"").slice(0,t)),r=(null!==n?n.toString():"").split("").join(`(${this.groupChar})?`),a=new RegExp(r,"g");a.test(u);const o=e.split("").join(`(${this.groupChar})?`),l=new RegExp(o,"g");l.test(u.slice(a.lastIndex)),i=a.lastIndex+l.lastIndex,this.input.nativeElement.setSelectionRange(i,i)}else if(a===r)"insert"===n||"delete-back-single"===n?this.input.nativeElement.setSelectionRange(i+1,i+1):"delete-single"===n?this.input.nativeElement.setSelectionRange(i-1,i-1):"delete-range"!==n&&"spin"!==n||this.input.nativeElement.setSelectionRange(i,i);else if("delete-back-single"===n){let t=s.charAt(i-1),e=s.charAt(i),n=r-a,u=this._group.test(e);u&&1===n?i+=1:!u&&this.isNumeralChar(t)&&(i+=-1*n+1),this._group.lastIndex=0,this.input.nativeElement.setSelectionRange(i,i)}else if("-"===s&&"insert"===n){this.input.nativeElement.setSelectionRange(0,0);const t=this.initCursor()+e.length+1;this.input.nativeElement.setSelectionRange(t,t)}else i+=a-r,this.input.nativeElement.setSelectionRange(i,i)}this.input.nativeElement.setAttribute("aria-valuenow",t)}concatValues(t,e){if(t&&e){let n=e.search(this._decimal);return this._decimal.lastIndex=0,-1!==n?t.split(this._decimal)[0]+e.slice(n):t}return t}getDecimalLength(t){if(t){const e=t.split(this._decimal);if(2===e.length)return e[1].replace(this._suffix,"").trim().replace(/\s/g,"").replace(this._currency,"").length}return 0}onInputFocus(t){this.focused=!0,this.onFocus.emit(t)}onInputBlur(t){this.focused=!1;let e=this.validateValue(this.parseValue(this.input.nativeElement.value));this.input.nativeElement.value=this.formatValue(e),this.input.nativeElement.setAttribute("aria-valuenow",e),this.updateModel(t,e),this.onBlur.emit(t)}formattedValue(){return this.formatValue(this.value||this.allowEmpty?this.value:0)}updateModel(t,e){this.value!==e&&(this.value=e,this.onModelChange(e)),this.onModelTouched()}writeValue(t){this.value=t,this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.disabled=t,this.cd.markForCheck()}get filled(){return null!=this.value&&this.value.toString().length>0}clearTimer(){this.timer&&clearInterval(this.timer)}getFormatter(){return this.numberFormat}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(i.SBq),i.Y36(i.sBO))},t.\u0275cmp=i.Xpm({type:t,selectors:[["p-inputNumber"]],viewQuery:function(t,e){if(1&t&&i.Gf(l,5),2&t){let t;i.iGM(t=i.CRH())&&(e.input=t.first)}},hostAttrs:[1,"p-element","p-inputwrapper"],hostVars:4,hostBindings:function(t,e){2&t&&i.ekj("p-inputwrapper-filled",e.filled)("p-inputwrapper-focus",e.focused)},inputs:{showButtons:"showButtons",format:"format",buttonLayout:"buttonLayout",inputId:"inputId",styleClass:"styleClass",style:"style",placeholder:"placeholder",size:"size",maxlength:"maxlength",tabindex:"tabindex",title:"title",ariaLabel:"ariaLabel",ariaRequired:"ariaRequired",name:"name",required:"required",autocomplete:"autocomplete",min:"min",max:"max",incrementButtonClass:"incrementButtonClass",decrementButtonClass:"decrementButtonClass",incrementButtonIcon:"incrementButtonIcon",decrementButtonIcon:"decrementButtonIcon",readonly:"readonly",step:"step",allowEmpty:"allowEmpty",locale:"locale",localeMatcher:"localeMatcher",mode:"mode",currency:"currency",currencyDisplay:"currencyDisplay",useGrouping:"useGrouping",minFractionDigits:"minFractionDigits",maxFractionDigits:"maxFractionDigits",prefix:"prefix",suffix:"suffix",inputStyle:"inputStyle",inputStyleClass:"inputStyleClass",disabled:"disabled"},outputs:{onInput:"onInput",onFocus:"onFocus",onBlur:"onBlur",onKeyDown:"onKeyDown"},features:[i._Bn([f]),i.TTD],decls:6,vars:31,consts:[[3,"ngClass","ngStyle"],["pInputText","","inputmode","decimal",3,"ngClass","ngStyle","value","disabled","readonly","input","keydown","keypress","paste","click","focus","blur"],["input",""],["class","p-inputnumber-button-group",4,"ngIf"],["type","button","pButton","",3,"ngClass","class","icon","disabled","mousedown","mouseup","mouseleave","keydown","keyup",4,"ngIf"],[1,"p-inputnumber-button-group"],["type","button","pButton","",3,"ngClass","icon","disabled","mousedown","mouseup","mouseleave","keydown","keyup"]],template:function(t,e){1&t&&(i.TgZ(0,"span",0),i.TgZ(1,"input",1,2),i.NdJ("input",function(t){return e.onUserInput(t)})("keydown",function(t){return e.onInputKeyDown(t)})("keypress",function(t){return e.onInputKeyPress(t)})("paste",function(t){return e.onPaste(t)})("click",function(){return e.onInputClick()})("focus",function(t){return e.onInputFocus(t)})("blur",function(t){return e.onInputBlur(t)}),i.qZA(),i.YNc(3,h,3,12,"span",3),i.YNc(4,m,1,6,"button",4),i.YNc(5,d,1,6,"button",4),i.qZA()),2&t&&(i.Tol(e.styleClass),i.Q6J("ngClass",i.kEZ(27,g,e.showButtons&&"stacked"===e.buttonLayout,e.showButtons&&"horizontal"===e.buttonLayout,e.showButtons&&"vertical"===e.buttonLayout))("ngStyle",e.style),i.xp6(1),i.Tol(e.inputStyleClass),i.Q6J("ngClass","p-inputnumber-input")("ngStyle",e.inputStyle)("value",e.formattedValue())("disabled",e.disabled)("readonly",e.readonly),i.uIk("placeholder",e.placeholder)("title",e.title)("id",e.inputId)("size",e.size)("name",e.name)("autocomplete",e.autocomplete)("maxlength",e.maxlength)("tabindex",e.tabindex)("aria-label",e.ariaLabel)("aria-required",e.ariaRequired)("required",e.required)("aria-valuemin",e.min)("aria-valuemax",e.max),i.xp6(2),i.Q6J("ngIf",e.showButtons&&"stacked"===e.buttonLayout),i.xp6(1),i.Q6J("ngIf",e.showButtons&&"stacked"!==e.buttonLayout),i.xp6(1),i.Q6J("ngIf",e.showButtons&&"stacked"!==e.buttonLayout))},directives:[s.mk,s.PC,u.o,s.O5,o.Hq],styles:[".p-inputnumber,p-inputnumber{display:inline-flex}.p-inputnumber-button{display:flex;align-items:center;justify-content:center;flex:0 0 auto}.p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button .p-button-label,.p-inputnumber-buttons-stacked .p-button.p-inputnumber-button .p-button-label{display:none}.p-inputnumber-buttons-stacked .p-button.p-inputnumber-button-up{border-top-left-radius:0;border-bottom-left-radius:0;border-bottom-right-radius:0;padding:0}.p-inputnumber-buttons-stacked .p-inputnumber-input{border-top-right-radius:0;border-bottom-right-radius:0}.p-inputnumber-buttons-stacked .p-button.p-inputnumber-button-down{border-top-left-radius:0;border-top-right-radius:0;border-bottom-left-radius:0;padding:0}.p-inputnumber-buttons-stacked .p-inputnumber-button-group{display:flex;flex-direction:column}.p-inputnumber-buttons-stacked .p-inputnumber-button-group .p-button.p-inputnumber-button{flex:1 1 auto}.p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button-up{order:3;border-top-left-radius:0;border-bottom-left-radius:0}.p-inputnumber-buttons-horizontal .p-inputnumber-input{order:2;border-radius:0}.p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button-down{order:1;border-top-right-radius:0;border-bottom-right-radius:0}.p-inputnumber-buttons-vertical{flex-direction:column}.p-inputnumber-buttons-vertical .p-button.p-inputnumber-button-up{order:1;border-bottom-left-radius:0;border-bottom-right-radius:0;width:100%}.p-inputnumber-buttons-vertical .p-inputnumber-input{order:2;border-radius:0;text-align:center}.p-inputnumber-buttons-vertical .p-button.p-inputnumber-button-down{order:3;border-top-left-radius:0;border-top-right-radius:0;width:100%}.p-inputnumber-input{flex:1 1 auto}.p-fluid .p-inputnumber,.p-fluid p-inputnumber{width:100%}.p-fluid .p-inputnumber .p-inputnumber-input{width:1%}.p-fluid .p-inputnumber-buttons-vertical .p-inputnumber-input{width:100%}"],encapsulation:2,changeDetection:0}),t})(),x=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[s.ez,u.j,r.hJ]]}),t})()},51328:function(t,e,n){"use strict";n.d(e,{L$:function(){return i.L$}});var i=n(53272)}}]);