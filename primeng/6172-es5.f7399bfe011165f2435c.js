!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,n(s.key),s)}}function i(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function n(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var n=i.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(self.webpackChunkprimeng=self.webpackChunkprimeng||[]).push([[6172],{79940:function(t,n,s){"use strict";s.d(n,{vy:function(){return f},zz:function(){return d}});var a=s(87368),u=s(61116),l=s(24269),h=s(52654),r=s(11462),o=["input"],c={provide:r.JU,useExisting:(0,a.Gpc)(function(){return f}),multi:!0},f=function(){var t=function(){return i(function t(i,n){e(this,t),this.el=i,this.cd=n,this.type="text",this.slotChar="_",this.autoClear=!0,this.characterPattern="[A-Za-z]",this.onComplete=new a.vpe,this.onFocus=new a.vpe,this.onBlur=new a.vpe,this.onInput=new a.vpe,this.onKeydown=new a.vpe,this.onModelChange=function(){},this.onModelTouched=function(){}},[{key:"ngOnInit",value:function(){var e=l.p.getUserAgent();this.androidChrome=/chrome/i.test(e)&&/android/i.test(e),this.initMask()}},{key:"mask",get:function(){return this._mask},set:function(e){this._mask=e,this.initMask(),this.writeValue(""),this.onModelChange(this.value)}},{key:"initMask",value:function(){this.tests=[],this.partialPosition=this.mask.length,this.len=this.mask.length,this.firstNonMaskPos=null,this.defs={9:"[0-9]",a:this.characterPattern,"*":"".concat(this.characterPattern,"|[0-9]")};for(var e=this.mask.split(""),t=0;t<e.length;t++){var i=e[t];"?"==i?(this.len--,this.partialPosition=t):this.defs[i]?(this.tests.push(new RegExp(this.defs[i])),null===this.firstNonMaskPos&&(this.firstNonMaskPos=this.tests.length-1),t<this.partialPosition&&(this.lastRequiredNonMaskPos=this.tests.length-1)):this.tests.push(null)}this.buffer=[];for(var n=0;n<e.length;n++){var s=e[n];"?"!=s&&this.buffer.push(this.defs[s]?this.getPlaceholder(n):s)}this.defaultBuffer=this.buffer.join("")}},{key:"writeValue",value:function(e){this.value=e,this.inputViewChild&&this.inputViewChild.nativeElement&&(this.inputViewChild.nativeElement.value=null==this.value||null==this.value?"":this.value,this.checkVal(),this.focusText=this.inputViewChild.nativeElement.value,this.updateFilledState())}},{key:"registerOnChange",value:function(e){this.onModelChange=e}},{key:"registerOnTouched",value:function(e){this.onModelTouched=e}},{key:"setDisabledState",value:function(e){this.disabled=e,this.cd.markForCheck()}},{key:"caret",value:function(e,t){var i,n,s;if(this.inputViewChild.nativeElement.offsetParent&&this.inputViewChild.nativeElement===this.inputViewChild.nativeElement.ownerDocument.activeElement)return"number"!=typeof e?(this.inputViewChild.nativeElement.setSelectionRange?(n=this.inputViewChild.nativeElement.selectionStart,s=this.inputViewChild.nativeElement.selectionEnd):document.selection&&document.selection.createRange&&(s=(n=0-(i=document.selection.createRange()).duplicate().moveStart("character",-1e5))+i.text.length),{begin:n,end:s}):(n=e,s="number"==typeof t?t:n,void(this.inputViewChild.nativeElement.setSelectionRange?this.inputViewChild.nativeElement.setSelectionRange(n,s):this.inputViewChild.nativeElement.createTextRange&&(i=this.inputViewChild.nativeElement.createTextRange(),i.collapse(!0),i.moveEnd("character",s),i.moveStart("character",n),i.select())))}},{key:"isCompleted",value:function(){for(var e=this.firstNonMaskPos;e<=this.lastRequiredNonMaskPos;e++)if(this.tests[e]&&this.buffer[e]===this.getPlaceholder(e))return!1;return!0}},{key:"getPlaceholder",value:function(e){return this.slotChar.charAt(e<this.slotChar.length?e:0)}},{key:"seekNext",value:function(e){for(;++e<this.len&&!this.tests[e];);return e}},{key:"seekPrev",value:function(e){for(;--e>=0&&!this.tests[e];);return e}},{key:"shiftL",value:function(e,t){var i,n;if(!(e<0)){for(i=e,n=this.seekNext(t);i<this.len;i++)if(this.tests[i]){if(!(n<this.len&&this.tests[i].test(this.buffer[n])))break;this.buffer[i]=this.buffer[n],this.buffer[n]=this.getPlaceholder(n),n=this.seekNext(n)}this.writeBuffer(),this.caret(Math.max(this.firstNonMaskPos,e))}}},{key:"shiftR",value:function(e){var t,i,n,s;for(t=e,i=this.getPlaceholder(e);t<this.len;t++)if(this.tests[t]){if(n=this.seekNext(t),s=this.buffer[t],this.buffer[t]=i,!(n<this.len&&this.tests[n].test(s)))break;i=s}}},{key:"handleAndroidInput",value:function(e){var t=this,i=this.inputViewChild.nativeElement.value,n=this.caret();if(this.oldVal&&this.oldVal.length&&this.oldVal.length>i.length){for(this.checkVal(!0);n.begin>0&&!this.tests[n.begin-1];)n.begin--;if(0===n.begin)for(;n.begin<this.firstNonMaskPos&&!this.tests[n.begin];)n.begin++;setTimeout(function(){t.caret(n.begin,n.begin),t.updateModel(e),t.isCompleted()&&t.onComplete.emit()},0)}else{for(this.checkVal(!0);n.begin<this.len&&!this.tests[n.begin];)n.begin++;setTimeout(function(){t.caret(n.begin,n.begin),t.updateModel(e),t.isCompleted()&&t.onComplete.emit()},0)}}},{key:"onInputBlur",value:function(e){if(this.focused=!1,this.onModelTouched(),this.checkVal(),this.updateFilledState(),this.onBlur.emit(e),this.inputViewChild.nativeElement.value!=this.focusText||this.inputViewChild.nativeElement.value!=this.value){this.updateModel(e);var t=document.createEvent("HTMLEvents");t.initEvent("change",!0,!1),this.inputViewChild.nativeElement.dispatchEvent(t)}}},{key:"onInputKeydown",value:function(e){if(!this.readonly){var t,i,n,s=e.which||e.keyCode,a=/iphone/i.test(l.p.getUserAgent());this.oldVal=this.inputViewChild.nativeElement.value,this.onKeydown.emit(e),8===s||46===s||a&&127===s?(i=(t=this.caret()).begin,(n=t.end)-i==0&&(i=46!==s?this.seekPrev(i):n=this.seekNext(i-1),n=46===s?this.seekNext(n):n),this.clearBuffer(i,n),this.shiftL(i,n-1),this.updateModel(e),this.onInput.emit(e),e.preventDefault()):13===s?(this.onInputBlur(e),this.updateModel(e)):27===s&&(this.inputViewChild.nativeElement.value=this.focusText,this.caret(0,this.checkVal()),this.updateModel(e),e.preventDefault())}}},{key:"onKeyPress",value:function(e){var t=this;if(!this.readonly){var i,n,s,a,u=e.which||e.keyCode,h=this.caret();e.ctrlKey||e.altKey||e.metaKey||u<32||u>34&&u<41||(u&&13!==u&&(h.end-h.begin!=0&&(this.clearBuffer(h.begin,h.end),this.shiftL(h.begin,h.end-1)),(i=this.seekNext(h.begin-1))<this.len&&(n=String.fromCharCode(u),this.tests[i].test(n))&&(this.shiftR(i),this.buffer[i]=n,this.writeBuffer(),s=this.seekNext(i),/android/i.test(l.p.getUserAgent())?setTimeout(function(){t.caret(s)},0):this.caret(s),h.begin<=this.lastRequiredNonMaskPos&&(a=this.isCompleted()),this.onInput.emit(e)),e.preventDefault()),this.updateModel(e),this.updateFilledState(),a&&this.onComplete.emit())}}},{key:"clearBuffer",value:function(e,t){var i;for(i=e;i<t&&i<this.len;i++)this.tests[i]&&(this.buffer[i]=this.getPlaceholder(i))}},{key:"writeBuffer",value:function(){this.inputViewChild.nativeElement.value=this.buffer.join("")}},{key:"checkVal",value:function(e){var t,i,n,s=this.inputViewChild.nativeElement.value,a=-1;for(t=0,n=0;t<this.len;t++)if(this.tests[t]){for(this.buffer[t]=this.getPlaceholder(t);n++<s.length;)if(i=s.charAt(n-1),this.tests[t].test(i)){this.buffer[t]=i,a=t;break}if(n>s.length){this.clearBuffer(t+1,this.len);break}}else this.buffer[t]===s.charAt(n)&&n++,t<this.partialPosition&&(a=t);return e?this.writeBuffer():a+1<this.partialPosition?this.autoClear||this.buffer.join("")===this.defaultBuffer?(this.inputViewChild.nativeElement.value&&(this.inputViewChild.nativeElement.value=""),this.clearBuffer(0,this.len)):this.writeBuffer():(this.writeBuffer(),this.inputViewChild.nativeElement.value=this.inputViewChild.nativeElement.value.substring(0,a+1)),this.partialPosition?t:this.firstNonMaskPos}},{key:"onInputFocus",value:function(e){var t,i=this;this.readonly||(this.focused=!0,clearTimeout(this.caretTimeoutId),this.focusText=this.inputViewChild.nativeElement.value,t=this.checkVal(),this.caretTimeoutId=setTimeout(function(){i.inputViewChild.nativeElement===i.inputViewChild.nativeElement.ownerDocument.activeElement&&(i.writeBuffer(),t==i.mask.replace("?","").length?i.caret(0,t):i.caret(t))},10),this.onFocus.emit(e))}},{key:"onInputChange",value:function(e){this.androidChrome?this.handleAndroidInput(e):this.handleInputChange(e),this.onInput.emit(e)}},{key:"handleInputChange",value:function(e){var t=this;this.readonly||setTimeout(function(){var i=t.checkVal(!0);t.caret(i),t.updateModel(e),t.isCompleted()&&t.onComplete.emit()},0)}},{key:"getUnmaskedValue",value:function(){for(var e=[],t=0;t<this.buffer.length;t++){var i=this.buffer[t];this.tests[t]&&i!=this.getPlaceholder(t)&&e.push(i)}return e.join("")}},{key:"updateModel",value:function(e){var t=this.unmask?this.getUnmaskedValue():e.target.value;null===t&&void 0===t||(this.value=t,this.onModelChange(this.value))}},{key:"updateFilledState",value:function(){this.filled=this.inputViewChild.nativeElement&&""!=this.inputViewChild.nativeElement.value}},{key:"focus",value:function(){this.inputViewChild.nativeElement.focus()}},{key:"ngOnDestroy",value:function(){}}])}();return t.\u0275fac=function(e){return new(e||t)(a.Y36(a.SBq),a.Y36(a.sBO))},t.\u0275cmp=a.Xpm({type:t,selectors:[["p-inputMask"]],viewQuery:function(e,t){var i;(1&e&&a.Gf(o,7),2&e)&&(a.iGM(i=a.CRH())&&(t.inputViewChild=i.first))},hostAttrs:[1,"p-element"],hostVars:4,hostBindings:function(e,t){2&e&&a.ekj("p-inputwrapper-filled",t.filled)("p-inputwrapper-focus",t.focused)},inputs:{type:"type",slotChar:"slotChar",autoClear:"autoClear",style:"style",inputId:"inputId",styleClass:"styleClass",placeholder:"placeholder",size:"size",maxlength:"maxlength",tabindex:"tabindex",title:"title",ariaLabel:"ariaLabel",ariaRequired:"ariaRequired",disabled:"disabled",readonly:"readonly",unmask:"unmask",name:"name",required:"required",characterPattern:"characterPattern",autoFocus:"autoFocus",autocomplete:"autocomplete",mask:"mask"},outputs:{onComplete:"onComplete",onFocus:"onFocus",onBlur:"onBlur",onInput:"onInput",onKeydown:"onKeydown"},features:[a._Bn([c])],decls:2,vars:17,consts:[["pInputText","",1,"p-inputmask",3,"ngStyle","ngClass","disabled","readonly","focus","blur","keydown","keypress","input","paste"],["input",""]],template:function(e,t){1&e&&(a.TgZ(0,"input",0,1),a.NdJ("focus",function(e){return t.onInputFocus(e)})("blur",function(e){return t.onInputBlur(e)})("keydown",function(e){return t.onInputKeydown(e)})("keypress",function(e){return t.onKeyPress(e)})("input",function(e){return t.onInputChange(e)})("paste",function(e){return t.handleInputChange(e)}),a.qZA()),2&e&&(a.Q6J("ngStyle",t.style)("ngClass",t.styleClass)("disabled",t.disabled)("readonly",t.readonly),a.uIk("id",t.inputId)("type",t.type)("name",t.name)("placeholder",t.placeholder)("title",t.title)("size",t.size)("autocomplete",t.autocomplete)("maxlength",t.maxlength)("tabindex",t.tabindex)("aria-label",t.ariaLabel)("aria-required",t.ariaRequired)("required",t.required)("autofocus",t.autoFocus))},directives:[h.o,u.PC,u.mk],encapsulation:2,changeDetection:0}),t}(),d=function(){var t=i(function t(){e(this,t)});return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[u.ez,h.j]]}),t}()},6172:function(e,t,i){"use strict";i.d(t,{zz:function(){return n.zz}});var n=i(79940)}}])}();