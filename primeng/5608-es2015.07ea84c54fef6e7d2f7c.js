(self.webpackChunkprimeng=self.webpackChunkprimeng||[]).push([[5608],{45608:function(e,t,n){"use strict";n.d(t,{JH:function(){return i.JH}});var i=n(76552)},76552:function(e,t,n){"use strict";n.d(t,{iR:function(){return S},JH:function(){return E}});var i=n(87368),a=n(61116),s=n(24269),l=n(11462);const h=["sliderHandle"],o=["sliderHandleStart"],r=["sliderHandleEnd"],d=function(e,t){return{left:e,width:t}};function u(e,t){if(1&e&&i._UZ(0,"span",4),2&e){const e=i.oxw();i.Q6J("ngStyle",i.WLB(1,d,e.handleValues[0]+"%",e.handleValues[1]-e.handleValues[0]+"%"))}}const c=function(e,t){return{bottom:e,height:t}};function g(e,t){if(1&e&&i._UZ(0,"span",4),2&e){const e=i.oxw();i.Q6J("ngStyle",i.WLB(1,c,e.handleValues[0]+"%",e.handleValues[1]-e.handleValues[0]+"%"))}}const p=function(e){return{height:e}};function m(e,t){if(1&e&&i._UZ(0,"span",4),2&e){const e=i.oxw();i.Q6J("ngStyle",i.VKq(1,p,e.handleValue+"%"))}}const v=function(e){return{width:e}};function f(e,t){if(1&e&&i._UZ(0,"span",4),2&e){const e=i.oxw();i.Q6J("ngStyle",i.VKq(1,v,e.handleValue+"%"))}}const x=function(e,t){return{left:e,bottom:t}};function V(e,t){if(1&e){const e=i.EpF();i.TgZ(0,"span",5,6),i.NdJ("keydown",function(t){return i.CHM(e),i.oxw().onHandleKeydown(t)})("mousedown",function(t){return i.CHM(e),i.oxw().onMouseDown(t)})("touchstart",function(t){return i.CHM(e),i.oxw().onTouchStart(t)})("touchmove",function(t){return i.CHM(e),i.oxw().onTouchMove(t)})("touchend",function(t){return i.CHM(e),i.oxw().onTouchEnd(t)}),i.qZA()}if(2&e){const e=i.oxw();i.Udp("transition",e.dragging?"none":null),i.Q6J("ngStyle",i.WLB(8,x,"horizontal"==e.orientation?e.handleValue+"%":null,"vertical"==e.orientation?e.handleValue+"%":null)),i.uIk("tabindex",e.disabled?null:e.tabindex)("aria-valuemin",e.min)("aria-valuenow",e.value)("aria-valuemax",e.max)("aria-labelledby",e.ariaLabelledBy)}}const w=function(e){return{"p-slider-handle-active":e}};function H(e,t){if(1&e){const e=i.EpF();i.TgZ(0,"span",7,8),i.NdJ("keydown",function(t){return i.CHM(e),i.oxw().onHandleKeydown(t,0)})("mousedown",function(t){return i.CHM(e),i.oxw().onMouseDown(t,0)})("touchstart",function(t){return i.CHM(e),i.oxw().onTouchStart(t,0)})("touchmove",function(t){return i.CHM(e),i.oxw().onTouchMove(t,0)})("touchend",function(t){return i.CHM(e),i.oxw().onTouchEnd(t)}),i.qZA()}if(2&e){const e=i.oxw();i.Udp("transition",e.dragging?"none":null),i.Q6J("ngStyle",i.WLB(9,x,e.rangeStartLeft,e.rangeStartBottom))("ngClass",i.VKq(12,w,0==e.handleIndex)),i.uIk("tabindex",e.disabled?null:e.tabindex)("aria-valuemin",e.min)("aria-valuenow",e.value?e.value[0]:null)("aria-valuemax",e.max)("aria-labelledby",e.ariaLabelledBy)}}function C(e,t){if(1&e){const e=i.EpF();i.TgZ(0,"span",7,9),i.NdJ("keydown",function(t){return i.CHM(e),i.oxw().onHandleKeydown(t,1)})("mousedown",function(t){return i.CHM(e),i.oxw().onMouseDown(t,1)})("touchstart",function(t){return i.CHM(e),i.oxw().onTouchStart(t,1)})("touchmove",function(t){return i.CHM(e),i.oxw().onTouchMove(t,1)})("touchend",function(t){return i.CHM(e),i.oxw().onTouchEnd(t)}),i.qZA()}if(2&e){const e=i.oxw();i.Udp("transition",e.dragging?"none":null),i.Q6J("ngStyle",i.WLB(9,x,e.rangeEndLeft,e.rangeEndBottom))("ngClass",i.VKq(12,w,1==e.handleIndex)),i.uIk("tabindex",e.disabled?null:e.tabindex)("aria-valuemin",e.min)("aria-valuenow",e.value?e.value[1]:null)("aria-valuemax",e.max)("aria-labelledby",e.ariaLabelledBy)}}const b=function(e,t,n,i){return{"p-slider p-component":!0,"p-disabled":e,"p-slider-horizontal":t,"p-slider-vertical":n,"p-slider-animate":i}},y={provide:l.JU,useExisting:(0,i.Gpc)(()=>S),multi:!0};let S=(()=>{class e{constructor(e,t,n,a){this.el=e,this.renderer=t,this.ngZone=n,this.cd=a,this.min=0,this.max=100,this.orientation="horizontal",this.tabindex=0,this.onChange=new i.vpe,this.onSlideEnd=new i.vpe,this.handleValues=[],this.onModelChange=()=>{},this.onModelTouched=()=>{},this.handleIndex=0}onMouseDown(e,t){this.disabled||(this.dragging=!0,this.updateDomData(),this.sliderHandleClick=!0,this.handleIndex=this.range&&this.handleValues&&this.handleValues[0]===this.max?0:t,this.bindDragListeners(),e.target.focus(),e.preventDefault(),this.animate&&s.p.removeClass(this.el.nativeElement.children[0],"p-slider-animate"))}onTouchStart(e,t){if(!this.disabled){var n=e.changedTouches[0];this.startHandleValue=this.range?this.handleValues[t]:this.handleValue,this.dragging=!0,this.handleIndex=this.range&&this.handleValues&&this.handleValues[0]===this.max?0:t,"horizontal"===this.orientation?(this.startx=parseInt(n.clientX,10),this.barWidth=this.el.nativeElement.children[0].offsetWidth):(this.starty=parseInt(n.clientY,10),this.barHeight=this.el.nativeElement.children[0].offsetHeight),this.animate&&s.p.removeClass(this.el.nativeElement.children[0],"p-slider-animate"),e.preventDefault()}}onTouchMove(e,t){if(!this.disabled){var n,i=e.changedTouches[0];n="horizontal"===this.orientation?Math.floor(100*(parseInt(i.clientX,10)-this.startx)/this.barWidth)+this.startHandleValue:Math.floor(100*(this.starty-parseInt(i.clientY,10))/this.barHeight)+this.startHandleValue,this.setValueFromHandle(e,n),e.preventDefault()}}onTouchEnd(e,t){this.disabled||(this.dragging=!1,this.onSlideEnd.emit(this.range?{originalEvent:e,values:this.values}:{originalEvent:e,value:this.value}),this.animate&&s.p.addClass(this.el.nativeElement.children[0],"p-slider-animate"),e.preventDefault())}onBarClick(e){this.disabled||(this.sliderHandleClick||(this.updateDomData(),this.handleChange(e)),this.sliderHandleClick=!1)}onHandleKeydown(e,t){this.disabled||(38==e.which||39==e.which?this.spin(e,1,t):37!=e.which&&40!=e.which||this.spin(e,-1,t))}spin(e,t,n){let i=(this.step||1)*t;this.range?(this.handleIndex=n,this.updateValue(this.values[this.handleIndex]+i),this.updateHandleValue()):(this.updateValue(this.value+i),this.updateHandleValue()),e.preventDefault()}handleChange(e){let t=this.calculateHandleValue(e);this.setValueFromHandle(e,t)}bindDragListeners(){this.ngZone.runOutsideAngular(()=>{const e=this.el?this.el.nativeElement.ownerDocument:"document";this.dragListener||(this.dragListener=this.renderer.listen(e,"mousemove",e=>{this.dragging&&this.ngZone.run(()=>{this.handleChange(e)})})),this.mouseupListener||(this.mouseupListener=this.renderer.listen(e,"mouseup",e=>{this.dragging&&(this.dragging=!1,this.ngZone.run(()=>{this.onSlideEnd.emit(this.range?{originalEvent:e,values:this.values}:{originalEvent:e,value:this.value}),this.animate&&s.p.addClass(this.el.nativeElement.children[0],"p-slider-animate")}))}))})}unbindDragListeners(){this.dragListener&&this.dragListener(),this.mouseupListener&&this.mouseupListener()}setValueFromHandle(e,t){this.sliderHandleClick=!1;let n=this.getValueFromHandle(t);this.range?this.step?this.handleStepChange(n,this.values[this.handleIndex]):(this.handleValues[this.handleIndex]=t,this.updateValue(n,e)):this.step?this.handleStepChange(n,this.value):(this.handleValue=t,this.updateValue(n,e)),this.cd.markForCheck()}handleStepChange(e,t){let n=e-t,i=t;n<0?i=t+Math.ceil(e/this.step-t/this.step)*this.step:n>0&&(i=t+Math.floor(e/this.step-t/this.step)*this.step),this.updateValue(i),this.updateHandleValue()}writeValue(e){this.range?this.values=e||[0,0]:this.value=e||0,this.updateHandleValue(),this.cd.markForCheck()}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.disabled=e,this.cd.markForCheck()}get rangeStartLeft(){return this.isVertical()?"auto":this.handleValues[0]+"%"}get rangeStartBottom(){return this.isVertical()?this.handleValues[0]+"%":"auto"}get rangeEndLeft(){return this.isVertical()?"auto":this.handleValues[1]+"%"}get rangeEndBottom(){return this.isVertical()?this.handleValues[1]+"%":"auto"}isVertical(){return"vertical"===this.orientation}updateDomData(){let e=this.el.nativeElement.children[0].getBoundingClientRect();this.initX=e.left+s.p.getWindowScrollLeft(),this.initY=e.top+s.p.getWindowScrollTop(),this.barWidth=this.el.nativeElement.children[0].offsetWidth,this.barHeight=this.el.nativeElement.children[0].offsetHeight}calculateHandleValue(e){return"horizontal"===this.orientation?100*(e.pageX-this.initX)/this.barWidth:100*(this.initY+this.barHeight-e.pageY)/this.barHeight}updateHandleValue(){this.range?(this.handleValues[0]=100*(this.values[0]<this.min?0:this.values[0]-this.min)/(this.max-this.min),this.handleValues[1]=100*(this.values[1]>this.max?100:this.values[1]-this.min)/(this.max-this.min)):this.handleValue=this.value<this.min?0:this.value>this.max?100:100*(this.value-this.min)/(this.max-this.min)}updateValue(e,t){if(this.range){let n=e;0==this.handleIndex?(n<this.min?(n=this.min,this.handleValues[0]=0):n>this.values[1]&&(n=this.values[1],this.handleValues[0]=this.handleValues[1]),this.sliderHandleStart.nativeElement.focus()):(n>this.max?(n=this.max,this.handleValues[1]=100):n<this.values[0]&&(n=this.values[0],this.handleValues[1]=this.handleValues[0]),this.sliderHandleEnd.nativeElement.focus()),this.values[this.handleIndex]=this.getNormalizedValue(n),this.values=this.values.slice(),this.onModelChange(this.values),this.onChange.emit({event:t,values:this.values})}else e<this.min?(e=this.min,this.handleValue=0):e>this.max&&(e=this.max,this.handleValue=100),this.value=this.getNormalizedValue(e),this.onModelChange(this.value),this.onChange.emit({event:t,value:this.value}),this.sliderHandle.nativeElement.focus()}getValueFromHandle(e){return e/100*(this.max-this.min)+this.min}getDecimalsCount(e){return e&&Math.floor(e)!==e&&e.toString().split(".")[1].length||0}getNormalizedValue(e){let t=this.getDecimalsCount(this.step);return t>0?+e.toFixed(t):Math.floor(e)}ngOnDestroy(){this.unbindDragListeners()}}return e.\u0275fac=function(t){return new(t||e)(i.Y36(i.SBq),i.Y36(i.Qsj),i.Y36(i.R0b),i.Y36(i.sBO))},e.\u0275cmp=i.Xpm({type:e,selectors:[["p-slider"]],viewQuery:function(e,t){if(1&e&&(i.Gf(h,5),i.Gf(o,5),i.Gf(r,5)),2&e){let e;i.iGM(e=i.CRH())&&(t.sliderHandle=e.first),i.iGM(e=i.CRH())&&(t.sliderHandleStart=e.first),i.iGM(e=i.CRH())&&(t.sliderHandleEnd=e.first)}},hostAttrs:[1,"p-element"],inputs:{animate:"animate",disabled:"disabled",min:"min",max:"max",orientation:"orientation",step:"step",range:"range",style:"style",styleClass:"styleClass",ariaLabelledBy:"ariaLabelledBy",tabindex:"tabindex"},outputs:{onChange:"onChange",onSlideEnd:"onSlideEnd"},features:[i._Bn([y])],decls:8,vars:16,consts:[[3,"ngStyle","ngClass","click"],["class","p-slider-range",3,"ngStyle",4,"ngIf"],["class","p-slider-handle",3,"transition","ngStyle","keydown","mousedown","touchstart","touchmove","touchend",4,"ngIf"],["class","p-slider-handle",3,"transition","ngStyle","ngClass","keydown","mousedown","touchstart","touchmove","touchend",4,"ngIf"],[1,"p-slider-range",3,"ngStyle"],[1,"p-slider-handle",3,"ngStyle","keydown","mousedown","touchstart","touchmove","touchend"],["sliderHandle",""],[1,"p-slider-handle",3,"ngStyle","ngClass","keydown","mousedown","touchstart","touchmove","touchend"],["sliderHandleStart",""],["sliderHandleEnd",""]],template:function(e,t){1&e&&(i.TgZ(0,"div",0),i.NdJ("click",function(e){return t.onBarClick(e)}),i.YNc(1,u,1,4,"span",1),i.YNc(2,g,1,4,"span",1),i.YNc(3,m,1,3,"span",1),i.YNc(4,f,1,3,"span",1),i.YNc(5,V,2,11,"span",2),i.YNc(6,H,2,14,"span",3),i.YNc(7,C,2,14,"span",3),i.qZA()),2&e&&(i.Tol(t.styleClass),i.Q6J("ngStyle",t.style)("ngClass",i.l5B(11,b,t.disabled,"horizontal"==t.orientation,"vertical"==t.orientation,t.animate)),i.xp6(1),i.Q6J("ngIf",t.range&&"horizontal"==t.orientation),i.xp6(1),i.Q6J("ngIf",t.range&&"vertical"==t.orientation),i.xp6(1),i.Q6J("ngIf",!t.range&&"vertical"==t.orientation),i.xp6(1),i.Q6J("ngIf",!t.range&&"horizontal"==t.orientation),i.xp6(1),i.Q6J("ngIf",!t.range),i.xp6(1),i.Q6J("ngIf",t.range),i.xp6(1),i.Q6J("ngIf",t.range))},directives:[a.PC,a.mk,a.O5],styles:[".p-slider{position:relative}.p-slider .p-slider-handle{cursor:grab;touch-action:none}.p-slider .p-slider-handle,.p-slider-range{position:absolute;display:block}.p-slider-horizontal .p-slider-range{top:0;left:0;height:100%}.p-slider-horizontal .p-slider-handle{top:50%}.p-slider-vertical{height:100px}.p-slider-vertical .p-slider-handle{left:50%}.p-slider-vertical .p-slider-range{bottom:0;left:0;width:100%}"],encapsulation:2,changeDetection:0}),e})(),E=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[[a.ez]]}),e})()}}]);