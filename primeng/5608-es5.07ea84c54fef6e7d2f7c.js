!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,i(a.key),a)}}function n(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),Object.defineProperty(e,"prototype",{writable:!1}),e}function i(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(self.webpackChunkprimeng=self.webpackChunkprimeng||[]).push([[5608],{45608:function(e,t,n){"use strict";n.d(t,{JH:function(){return i.JH}});var i=n(76552)},76552:function(t,i,a){"use strict";a.d(i,{iR:function(){return E},JH:function(){return M}});var l=a(87368),s=a(61116),r=a(24269),o=a(11462),u=["sliderHandle"],h=["sliderHandleStart"],d=["sliderHandleEnd"],c=function(e,t){return{left:e,width:t}};function g(e,t){if(1&e&&l._UZ(0,"span",4),2&e){var n=l.oxw();l.Q6J("ngStyle",l.WLB(1,c,n.handleValues[0]+"%",n.handleValues[1]-n.handleValues[0]+"%"))}}var v=function(e,t){return{bottom:e,height:t}};function f(e,t){if(1&e&&l._UZ(0,"span",4),2&e){var n=l.oxw();l.Q6J("ngStyle",l.WLB(1,v,n.handleValues[0]+"%",n.handleValues[1]-n.handleValues[0]+"%"))}}var p=function(e){return{height:e}};function m(e,t){if(1&e&&l._UZ(0,"span",4),2&e){var n=l.oxw();l.Q6J("ngStyle",l.VKq(1,p,n.handleValue+"%"))}}var y=function(e){return{width:e}};function x(e,t){if(1&e&&l._UZ(0,"span",4),2&e){var n=l.oxw();l.Q6J("ngStyle",l.VKq(1,y,n.handleValue+"%"))}}var w=function(e,t){return{left:e,bottom:t}};function b(e,t){if(1&e){var n=l.EpF();l.TgZ(0,"span",5,6),l.NdJ("keydown",function(e){return l.CHM(n),l.oxw().onHandleKeydown(e)})("mousedown",function(e){return l.CHM(n),l.oxw().onMouseDown(e)})("touchstart",function(e){return l.CHM(n),l.oxw().onTouchStart(e)})("touchmove",function(e){return l.CHM(n),l.oxw().onTouchMove(e)})("touchend",function(e){return l.CHM(n),l.oxw().onTouchEnd(e)}),l.qZA()}if(2&e){var i=l.oxw();l.Udp("transition",i.dragging?"none":null),l.Q6J("ngStyle",l.WLB(8,w,"horizontal"==i.orientation?i.handleValue+"%":null,"vertical"==i.orientation?i.handleValue+"%":null)),l.uIk("tabindex",i.disabled?null:i.tabindex)("aria-valuemin",i.min)("aria-valuenow",i.value)("aria-valuemax",i.max)("aria-labelledby",i.ariaLabelledBy)}}var V=function(e){return{"p-slider-handle-active":e}};function C(e,t){if(1&e){var n=l.EpF();l.TgZ(0,"span",7,8),l.NdJ("keydown",function(e){return l.CHM(n),l.oxw().onHandleKeydown(e,0)})("mousedown",function(e){return l.CHM(n),l.oxw().onMouseDown(e,0)})("touchstart",function(e){return l.CHM(n),l.oxw().onTouchStart(e,0)})("touchmove",function(e){return l.CHM(n),l.oxw().onTouchMove(e,0)})("touchend",function(e){return l.CHM(n),l.oxw().onTouchEnd(e)}),l.qZA()}if(2&e){var i=l.oxw();l.Udp("transition",i.dragging?"none":null),l.Q6J("ngStyle",l.WLB(9,w,i.rangeStartLeft,i.rangeStartBottom))("ngClass",l.VKq(12,V,0==i.handleIndex)),l.uIk("tabindex",i.disabled?null:i.tabindex)("aria-valuemin",i.min)("aria-valuenow",i.value?i.value[0]:null)("aria-valuemax",i.max)("aria-labelledby",i.ariaLabelledBy)}}function H(e,t){if(1&e){var n=l.EpF();l.TgZ(0,"span",7,9),l.NdJ("keydown",function(e){return l.CHM(n),l.oxw().onHandleKeydown(e,1)})("mousedown",function(e){return l.CHM(n),l.oxw().onMouseDown(e,1)})("touchstart",function(e){return l.CHM(n),l.oxw().onTouchStart(e,1)})("touchmove",function(e){return l.CHM(n),l.oxw().onTouchMove(e,1)})("touchend",function(e){return l.CHM(n),l.oxw().onTouchEnd(e)}),l.qZA()}if(2&e){var i=l.oxw();l.Udp("transition",i.dragging?"none":null),l.Q6J("ngStyle",l.WLB(9,w,i.rangeEndLeft,i.rangeEndBottom))("ngClass",l.VKq(12,V,1==i.handleIndex)),l.uIk("tabindex",i.disabled?null:i.tabindex)("aria-valuemin",i.min)("aria-valuenow",i.value?i.value[1]:null)("aria-valuemax",i.max)("aria-labelledby",i.ariaLabelledBy)}}var k=function(e,t,n,i){return{"p-slider p-component":!0,"p-disabled":e,"p-slider-horizontal":t,"p-slider-vertical":n,"p-slider-animate":i}},S={provide:o.JU,useExisting:(0,l.Gpc)(function(){return E}),multi:!0},E=function(){var t=function(){return n(function t(n,i,a,s){e(this,t),this.el=n,this.renderer=i,this.ngZone=a,this.cd=s,this.min=0,this.max=100,this.orientation="horizontal",this.tabindex=0,this.onChange=new l.vpe,this.onSlideEnd=new l.vpe,this.handleValues=[],this.onModelChange=function(){},this.onModelTouched=function(){},this.handleIndex=0},[{key:"onMouseDown",value:function(e,t){this.disabled||(this.dragging=!0,this.updateDomData(),this.sliderHandleClick=!0,this.handleIndex=this.range&&this.handleValues&&this.handleValues[0]===this.max?0:t,this.bindDragListeners(),e.target.focus(),e.preventDefault(),this.animate&&r.p.removeClass(this.el.nativeElement.children[0],"p-slider-animate"))}},{key:"onTouchStart",value:function(e,t){if(!this.disabled){var n=e.changedTouches[0];this.startHandleValue=this.range?this.handleValues[t]:this.handleValue,this.dragging=!0,this.handleIndex=this.range&&this.handleValues&&this.handleValues[0]===this.max?0:t,"horizontal"===this.orientation?(this.startx=parseInt(n.clientX,10),this.barWidth=this.el.nativeElement.children[0].offsetWidth):(this.starty=parseInt(n.clientY,10),this.barHeight=this.el.nativeElement.children[0].offsetHeight),this.animate&&r.p.removeClass(this.el.nativeElement.children[0],"p-slider-animate"),e.preventDefault()}}},{key:"onTouchMove",value:function(e,t){if(!this.disabled){var n,i=e.changedTouches[0];n="horizontal"===this.orientation?Math.floor(100*(parseInt(i.clientX,10)-this.startx)/this.barWidth)+this.startHandleValue:Math.floor(100*(this.starty-parseInt(i.clientY,10))/this.barHeight)+this.startHandleValue,this.setValueFromHandle(e,n),e.preventDefault()}}},{key:"onTouchEnd",value:function(e,t){this.disabled||(this.dragging=!1,this.onSlideEnd.emit(this.range?{originalEvent:e,values:this.values}:{originalEvent:e,value:this.value}),this.animate&&r.p.addClass(this.el.nativeElement.children[0],"p-slider-animate"),e.preventDefault())}},{key:"onBarClick",value:function(e){this.disabled||(this.sliderHandleClick||(this.updateDomData(),this.handleChange(e)),this.sliderHandleClick=!1)}},{key:"onHandleKeydown",value:function(e,t){this.disabled||(38==e.which||39==e.which?this.spin(e,1,t):37!=e.which&&40!=e.which||this.spin(e,-1,t))}},{key:"spin",value:function(e,t,n){var i=(this.step||1)*t;this.range?(this.handleIndex=n,this.updateValue(this.values[this.handleIndex]+i),this.updateHandleValue()):(this.updateValue(this.value+i),this.updateHandleValue()),e.preventDefault()}},{key:"handleChange",value:function(e){var t=this.calculateHandleValue(e);this.setValueFromHandle(e,t)}},{key:"bindDragListeners",value:function(){var e=this;this.ngZone.runOutsideAngular(function(){var t=e.el?e.el.nativeElement.ownerDocument:"document";e.dragListener||(e.dragListener=e.renderer.listen(t,"mousemove",function(t){e.dragging&&e.ngZone.run(function(){e.handleChange(t)})})),e.mouseupListener||(e.mouseupListener=e.renderer.listen(t,"mouseup",function(t){e.dragging&&(e.dragging=!1,e.ngZone.run(function(){e.onSlideEnd.emit(e.range?{originalEvent:t,values:e.values}:{originalEvent:t,value:e.value}),e.animate&&r.p.addClass(e.el.nativeElement.children[0],"p-slider-animate")}))}))})}},{key:"unbindDragListeners",value:function(){this.dragListener&&this.dragListener(),this.mouseupListener&&this.mouseupListener()}},{key:"setValueFromHandle",value:function(e,t){this.sliderHandleClick=!1;var n=this.getValueFromHandle(t);this.range?this.step?this.handleStepChange(n,this.values[this.handleIndex]):(this.handleValues[this.handleIndex]=t,this.updateValue(n,e)):this.step?this.handleStepChange(n,this.value):(this.handleValue=t,this.updateValue(n,e)),this.cd.markForCheck()}},{key:"handleStepChange",value:function(e,t){var n=e-t,i=t;n<0?i=t+Math.ceil(e/this.step-t/this.step)*this.step:n>0&&(i=t+Math.floor(e/this.step-t/this.step)*this.step),this.updateValue(i),this.updateHandleValue()}},{key:"writeValue",value:function(e){this.range?this.values=e||[0,0]:this.value=e||0,this.updateHandleValue(),this.cd.markForCheck()}},{key:"registerOnChange",value:function(e){this.onModelChange=e}},{key:"registerOnTouched",value:function(e){this.onModelTouched=e}},{key:"setDisabledState",value:function(e){this.disabled=e,this.cd.markForCheck()}},{key:"rangeStartLeft",get:function(){return this.isVertical()?"auto":this.handleValues[0]+"%"}},{key:"rangeStartBottom",get:function(){return this.isVertical()?this.handleValues[0]+"%":"auto"}},{key:"rangeEndLeft",get:function(){return this.isVertical()?"auto":this.handleValues[1]+"%"}},{key:"rangeEndBottom",get:function(){return this.isVertical()?this.handleValues[1]+"%":"auto"}},{key:"isVertical",value:function(){return"vertical"===this.orientation}},{key:"updateDomData",value:function(){var e=this.el.nativeElement.children[0].getBoundingClientRect();this.initX=e.left+r.p.getWindowScrollLeft(),this.initY=e.top+r.p.getWindowScrollTop(),this.barWidth=this.el.nativeElement.children[0].offsetWidth,this.barHeight=this.el.nativeElement.children[0].offsetHeight}},{key:"calculateHandleValue",value:function(e){return"horizontal"===this.orientation?100*(e.pageX-this.initX)/this.barWidth:100*(this.initY+this.barHeight-e.pageY)/this.barHeight}},{key:"updateHandleValue",value:function(){this.range?(this.handleValues[0]=100*(this.values[0]<this.min?0:this.values[0]-this.min)/(this.max-this.min),this.handleValues[1]=100*(this.values[1]>this.max?100:this.values[1]-this.min)/(this.max-this.min)):this.handleValue=this.value<this.min?0:this.value>this.max?100:100*(this.value-this.min)/(this.max-this.min)}},{key:"updateValue",value:function(e,t){if(this.range){var n=e;0==this.handleIndex?(n<this.min?(n=this.min,this.handleValues[0]=0):n>this.values[1]&&(n=this.values[1],this.handleValues[0]=this.handleValues[1]),this.sliderHandleStart.nativeElement.focus()):(n>this.max?(n=this.max,this.handleValues[1]=100):n<this.values[0]&&(n=this.values[0],this.handleValues[1]=this.handleValues[0]),this.sliderHandleEnd.nativeElement.focus()),this.values[this.handleIndex]=this.getNormalizedValue(n),this.values=this.values.slice(),this.onModelChange(this.values),this.onChange.emit({event:t,values:this.values})}else e<this.min?(e=this.min,this.handleValue=0):e>this.max&&(e=this.max,this.handleValue=100),this.value=this.getNormalizedValue(e),this.onModelChange(this.value),this.onChange.emit({event:t,value:this.value}),this.sliderHandle.nativeElement.focus()}},{key:"getValueFromHandle",value:function(e){return e/100*(this.max-this.min)+this.min}},{key:"getDecimalsCount",value:function(e){return e&&Math.floor(e)!==e&&e.toString().split(".")[1].length||0}},{key:"getNormalizedValue",value:function(e){var t=this.getDecimalsCount(this.step);return t>0?+e.toFixed(t):Math.floor(e)}},{key:"ngOnDestroy",value:function(){this.unbindDragListeners()}}])}();return t.\u0275fac=function(e){return new(e||t)(l.Y36(l.SBq),l.Y36(l.Qsj),l.Y36(l.R0b),l.Y36(l.sBO))},t.\u0275cmp=l.Xpm({type:t,selectors:[["p-slider"]],viewQuery:function(e,t){var n;(1&e&&(l.Gf(u,5),l.Gf(h,5),l.Gf(d,5)),2&e)&&(l.iGM(n=l.CRH())&&(t.sliderHandle=n.first),l.iGM(n=l.CRH())&&(t.sliderHandleStart=n.first),l.iGM(n=l.CRH())&&(t.sliderHandleEnd=n.first))},hostAttrs:[1,"p-element"],inputs:{animate:"animate",disabled:"disabled",min:"min",max:"max",orientation:"orientation",step:"step",range:"range",style:"style",styleClass:"styleClass",ariaLabelledBy:"ariaLabelledBy",tabindex:"tabindex"},outputs:{onChange:"onChange",onSlideEnd:"onSlideEnd"},features:[l._Bn([S])],decls:8,vars:16,consts:[[3,"ngStyle","ngClass","click"],["class","p-slider-range",3,"ngStyle",4,"ngIf"],["class","p-slider-handle",3,"transition","ngStyle","keydown","mousedown","touchstart","touchmove","touchend",4,"ngIf"],["class","p-slider-handle",3,"transition","ngStyle","ngClass","keydown","mousedown","touchstart","touchmove","touchend",4,"ngIf"],[1,"p-slider-range",3,"ngStyle"],[1,"p-slider-handle",3,"ngStyle","keydown","mousedown","touchstart","touchmove","touchend"],["sliderHandle",""],[1,"p-slider-handle",3,"ngStyle","ngClass","keydown","mousedown","touchstart","touchmove","touchend"],["sliderHandleStart",""],["sliderHandleEnd",""]],template:function(e,t){1&e&&(l.TgZ(0,"div",0),l.NdJ("click",function(e){return t.onBarClick(e)}),l.YNc(1,g,1,4,"span",1),l.YNc(2,f,1,4,"span",1),l.YNc(3,m,1,3,"span",1),l.YNc(4,x,1,3,"span",1),l.YNc(5,b,2,11,"span",2),l.YNc(6,C,2,14,"span",3),l.YNc(7,H,2,14,"span",3),l.qZA()),2&e&&(l.Tol(t.styleClass),l.Q6J("ngStyle",t.style)("ngClass",l.l5B(11,k,t.disabled,"horizontal"==t.orientation,"vertical"==t.orientation,t.animate)),l.xp6(1),l.Q6J("ngIf",t.range&&"horizontal"==t.orientation),l.xp6(1),l.Q6J("ngIf",t.range&&"vertical"==t.orientation),l.xp6(1),l.Q6J("ngIf",!t.range&&"vertical"==t.orientation),l.xp6(1),l.Q6J("ngIf",!t.range&&"horizontal"==t.orientation),l.xp6(1),l.Q6J("ngIf",!t.range),l.xp6(1),l.Q6J("ngIf",t.range),l.xp6(1),l.Q6J("ngIf",t.range))},directives:[s.PC,s.mk,s.O5],styles:[".p-slider{position:relative}.p-slider .p-slider-handle{cursor:grab;touch-action:none}.p-slider .p-slider-handle,.p-slider-range{position:absolute;display:block}.p-slider-horizontal .p-slider-range{top:0;left:0;height:100%}.p-slider-horizontal .p-slider-handle{top:50%}.p-slider-vertical{height:100px}.p-slider-vertical .p-slider-handle{left:50%}.p-slider-vertical .p-slider-range{bottom:0;left:0;width:100%}"],encapsulation:2,changeDetection:0}),t}(),M=function(){var t=n(function t(){e(this,t)});return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=l.oAB({type:t}),t.\u0275inj=l.cJS({imports:[[s.ez]]}),t}()}}])}();