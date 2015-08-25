jQuery(document).ready(function(t){t(".knob").knob({change:function(){},release:function(t){console.log("release : "+t)},cancel:function(){console.log("cancel : ",this)},draw:function(){if("tron"==this.$.data("skin")){var t,i=this.angle(this.cv),e=this.startAngle,n=this.startAngle,s=n+i,a=1;return this.g.lineWidth=this.lineWidth,this.o.cursor&&(n=s-.3)&&(s+=.3),this.o.displayPrevious&&(t=this.startAngle+this.angle(this.v),this.o.cursor&&(e=t-.3)&&(t+=.3),this.g.beginPath(),this.g.strokeStyle=this.pColor,this.g.arc(this.xy,this.xy,this.radius-this.lineWidth,e,t,!1),this.g.stroke()),this.g.beginPath(),this.g.strokeStyle=a?this.o.fgColor:this.fgColor,this.g.arc(this.xy,this.xy,this.radius-this.lineWidth,n,s,!1),this.g.stroke(),this.g.lineWidth=2,this.g.beginPath(),this.g.strokeStyle=this.o.fgColor,this.g.arc(this.xy,this.xy,this.radius-this.lineWidth+1+2*this.lineWidth/3,0,2*Math.PI,!1),this.g.stroke(),!1}}}),t(".knob").waypoint(function(){var i=t(this),e=i.attr("data-text");i.knob(),t({value:0}).animate({value:e},{duration:4e3,easing:"easeInOutExpo",step:function(){i.val(Math.ceil(this.value)).trigger("change")}})},{triggerOnce:!0,offset:"bottom-in-view"})}),function(t){"object"==typeof exports?module.exports=t(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(t){"use strict";var i={},e=Math.max,n=Math.min;i.c={},i.c.d=t(document),i.c.t=function(t){return t.originalEvent.touches.length-1},i.o=function(){var e=this;this.o=null,this.$=null,this.i=null,this.g=null,this.v=null,this.cv=null,this.x=0,this.y=0,this.w=0,this.h=0,this.$c=null,this.c=null,this.t=0,this.isInit=!1,this.fgColor=null,this.pColor=null,this.dH=null,this.cH=null,this.eH=null,this.rH=null,this.scale=1,this.relative=!1,this.relativeWidth=!1,this.relativeHeight=!1,this.$div=null,this.run=function(){var i=function(t,i){var n;for(n in i)e.o[n]=i[n];e._carve().init(),e._configure()._draw()};if(!this.$.data("kontroled")){if(this.$.data("kontroled",!0),this.extend(),this.o=t.extend({min:void 0!==this.$.data("min")?this.$.data("min"):0,max:void 0!==this.$.data("max")?this.$.data("max"):100,stopper:!0,readOnly:this.$.data("readonly")||"readonly"===this.$.attr("readonly"),cursor:this.$.data("cursor")===!0&&30||this.$.data("cursor")||0,thickness:this.$.data("thickness")&&Math.max(Math.min(this.$.data("thickness"),1),.01)||.35,lineCap:this.$.data("linecap")||"butt",width:this.$.data("width")||200,height:this.$.data("height")||200,displayInput:null==this.$.data("displayinput")||this.$.data("displayinput"),displayPrevious:this.$.data("displayprevious"),fgColor:this.$.data("fgcolor")||"#87CEEB",inputColor:this.$.data("inputcolor"),font:this.$.data("font")||"Arial",fontWeight:this.$.data("font-weight")||"300",inline:!1,step:this.$.data("step")||1,rotation:this.$.data("rotation"),draw:null,change:null,cancel:null,release:null,format:function(t){return t},parse:function(t){return parseFloat(t)}},this.o),this.o.flip="anticlockwise"===this.o.rotation||"acw"===this.o.rotation,this.o.inputColor||(this.o.inputColor=this.o.fgColor),this.$.is("fieldset")?(this.v={},this.i=this.$.find("input"),this.i.each(function(i){var n=t(this);e.i[i]=n,e.v[i]=e.o.parse(n.val()),n.bind("change blur",function(){var t={};t[i]=n.val(),e.val(e._validate(t))})}),this.$.find("legend").remove()):(this.i=this.$,this.v=this.o.parse(this.$.val()),""===this.v&&(this.v=this.o.min),this.$.bind("change blur",function(){e.val(e._validate(e.o.parse(e.$.val())))})),!this.o.displayInput&&this.$.hide(),this.$c=t(document.createElement("canvas")).attr({width:this.o.width,height:this.o.height}),this.$div=t('<div style="'+(this.o.inline?"display:inline;":"")+"width:"+this.o.width+"px;height:"+this.o.height+'px;"></div>'),this.$.wrap(this.$div).before(this.$c),this.$div=this.$.parent(),"undefined"!=typeof G_vmlCanvasManager&&G_vmlCanvasManager.initElement(this.$c[0]),this.c=this.$c[0].getContext?this.$c[0].getContext("2d"):null,!this.c)throw{name:"CanvasNotSupportedException",message:"Canvas not supported. Please use excanvas on IE8.0.",toString:function(){return this.name+": "+this.message}};return this.scale=(window.devicePixelRatio||1)/(this.c.webkitBackingStorePixelRatio||this.c.mozBackingStorePixelRatio||this.c.msBackingStorePixelRatio||this.c.oBackingStorePixelRatio||this.c.backingStorePixelRatio||1),this.relativeWidth=this.o.width%1!==0&&this.o.width.indexOf("%"),this.relativeHeight=this.o.height%1!==0&&this.o.height.indexOf("%"),this.relative=this.relativeWidth||this.relativeHeight,this._carve(),this.v instanceof Object?(this.cv={},this.copy(this.v,this.cv)):this.cv=this.v,this.$.bind("configure",i).parent().bind("configure",i),this._listen()._configure()._xy().init(),this.isInit=!0,this.$.val(this.o.format(this.v)),this._draw(),this}},this._carve=function(){if(this.relative){var t=this.relativeWidth?this.$div.parent().width()*parseInt(this.o.width)/100:this.$div.parent().width(),i=this.relativeHeight?this.$div.parent().height()*parseInt(this.o.height)/100:this.$div.parent().height();this.w=this.h=Math.min(t,i)}else this.w=this.o.width,this.h=this.o.height;return this.$div.css({width:this.w+"px",height:this.h+"px"}),this.$c.attr({width:this.w,height:this.h}),1!==this.scale&&(this.$c[0].width=this.$c[0].width*this.scale,this.$c[0].height=this.$c[0].height*this.scale,this.$c.width(this.w),this.$c.height(this.h)),this},this._draw=function(){var t=!0;e.g=e.c,e.clear(),e.dH&&(t=e.dH()),t!==!1&&e.draw()},this._touch=function(t){var n=function(t){var i=e.xy2val(t.originalEvent.touches[e.t].pageX,t.originalEvent.touches[e.t].pageY);i!=e.cv&&(e.cH&&e.cH(i)===!1||(e.change(e._validate(i)),e._draw()))};return this.t=i.c.t(t),n(t),i.c.d.bind("touchmove.k",n).bind("touchend.k",function(){i.c.d.unbind("touchmove.k touchend.k"),e.val(e.cv)}),this},this._mouse=function(t){var n=function(t){var i=e.xy2val(t.pageX,t.pageY);i!=e.cv&&(e.cH&&e.cH(i)===!1||(e.change(e._validate(i)),e._draw()))};return n(t),i.c.d.bind("mousemove.k",n).bind("keyup.k",function(t){if(27===t.keyCode){if(i.c.d.unbind("mouseup.k mousemove.k keyup.k"),e.eH&&e.eH()===!1)return;e.cancel()}}).bind("mouseup.k",function(){i.c.d.unbind("mousemove.k mouseup.k keyup.k"),e.val(e.cv)}),this},this._xy=function(){var t=this.$c.offset();return this.x=t.left,this.y=t.top,this},this._listen=function(){return this.o.readOnly?this.$.attr("readonly","readonly"):(this.$c.bind("mousedown",function(t){t.preventDefault(),e._xy()._mouse(t)}).bind("touchstart",function(t){t.preventDefault(),e._xy()._touch(t)}),this.listen()),this.relative&&t(window).resize(function(){e._carve().init(),e._draw()}),this},this._configure=function(){return this.o.draw&&(this.dH=this.o.draw),this.o.change&&(this.cH=this.o.change),this.o.cancel&&(this.eH=this.o.cancel),this.o.release&&(this.rH=this.o.release),this.o.displayPrevious?(this.pColor=this.h2rgba(this.o.fgColor,"0.4"),this.fgColor=this.h2rgba(this.o.fgColor,"0.6")):this.fgColor=this.o.fgColor,this},this._clear=function(){this.$c[0].width=this.$c[0].width},this._validate=function(t){var i=~~((0>t?-.5:.5)+t/this.o.step)*this.o.step;return Math.round(100*i)/100},this.listen=function(){},this.extend=function(){},this.init=function(){},this.change=function(){},this.val=function(){},this.xy2val=function(){},this.draw=function(){},this.clear=function(){this._clear()},this.h2rgba=function(t,i){var e;return t=t.substring(1,7),e=[parseInt(t.substring(0,2),16),parseInt(t.substring(2,4),16),parseInt(t.substring(4,6),16)],"rgba("+e[0]+","+e[1]+","+e[2]+","+i+")"},this.copy=function(t,i){for(var e in t)i[e]=t[e]}},i.Dial=function(){i.o.call(this),this.startAngle=null,this.xy=null,this.radius=null,this.lineWidth=null,this.cursorExt=null,this.w2=null,this.PI2=2*Math.PI,this.extend=function(){this.o=t.extend({bgColor:this.$.data("bgcolor")||"#EEEEEE",angleOffset:this.$.data("angleoffset")||0,angleArc:this.$.data("anglearc")||360,inline:!0},this.o)},this.val=function(t,i){return null==t?this.v:(t=this.o.parse(t),void(i!==!1&&t!=this.v&&this.rH&&this.rH(t)===!1||(this.cv=this.o.stopper?e(n(t,this.o.max),this.o.min):t,this.v=this.cv,this.$.val(this.o.format(this.v)),this._draw())))},this.xy2val=function(t,i){var s,a;return s=Math.atan2(t-(this.x+this.w2),-(i-this.y-this.w2))-this.angleOffset,this.o.flip&&(s=this.angleArc-s-this.PI2),this.angleArc!=this.PI2&&0>s&&s>-.5?s=0:0>s&&(s+=this.PI2),a=s*(this.o.max-this.o.min)/this.angleArc+this.o.min,this.o.stopper&&(a=e(n(a,this.o.max),this.o.min)),a},this.listen=function(){var i,s,a,o,h=this,r=function(t){t.preventDefault();var a=t.originalEvent,o=a.detail||a.wheelDeltaX,r=a.detail||a.wheelDeltaY,l=h._validate(h.o.parse(h.$.val()))+(o>0||r>0?h.o.step:0>o||0>r?-h.o.step:0);l=e(n(l,h.o.max),h.o.min),h.val(l,!1),h.rH&&(clearTimeout(i),i=setTimeout(function(){h.rH(l),i=null},100),s||(s=setTimeout(function(){i&&h.rH(l),s=null},200)))},l=1,u={37:-h.o.step,38:h.o.step,39:h.o.step,40:-h.o.step};this.$.bind("keydown",function(i){var s=i.keyCode;if(s>=96&&105>=s&&(s=i.keyCode=s-48),a=parseInt(String.fromCharCode(s)),isNaN(a)&&(13!==s&&8!==s&&9!==s&&189!==s&&(190!==s||h.$.val().match(/\./))&&i.preventDefault(),t.inArray(s,[37,38,39,40])>-1)){i.preventDefault();var r=h.o.parse(h.$.val())+u[s]*l;h.o.stopper&&(r=e(n(r,h.o.max),h.o.min)),h.change(h._validate(r)),h._draw(),o=window.setTimeout(function(){l*=2},30)}}).bind("keyup",function(){isNaN(a)?o&&(window.clearTimeout(o),o=null,l=1,h.val(h.$.val())):h.$.val()>h.o.max&&h.$.val(h.o.max)||h.$.val()<h.o.min&&h.$.val(h.o.min)}),this.$c.bind("mousewheel DOMMouseScroll",r),this.$.bind("mousewheel DOMMouseScroll",r)},this.init=function(){(this.v<this.o.min||this.v>this.o.max)&&(this.v=this.o.min),this.$.val(this.v),this.w2=this.w/2,this.cursorExt=this.o.cursor/100,this.xy=this.w2*this.scale,this.lineWidth=this.xy*this.o.thickness,this.lineCap=this.o.lineCap,this.radius=this.xy-this.lineWidth/2,this.o.angleOffset&&(this.o.angleOffset=isNaN(this.o.angleOffset)?0:this.o.angleOffset),this.o.angleArc&&(this.o.angleArc=isNaN(this.o.angleArc)?this.PI2:this.o.angleArc),this.angleOffset=this.o.angleOffset*Math.PI/180,this.angleArc=this.o.angleArc*Math.PI/180,this.startAngle=1.5*Math.PI+this.angleOffset,this.endAngle=1.5*Math.PI+this.angleOffset+this.angleArc;var t=e(String(Math.abs(this.o.max)).length,String(Math.abs(this.o.min)).length,2)+2;this.o.displayInput&&this.i.css({width:(this.w/2+4>>0)+"px",height:(this.w/3>>0)+"px",position:"absolute","vertical-align":"middle","margin-top":(this.w/3>>0)+"px","margin-left":"-"+(3*this.w/4+2>>0)+"px",border:0,background:"none",font:this.o.fontWeight+" "+(this.w/t>>0)+"px "+this.o.font,"text-align":"center",color:this.o.inputColor||this.o.fgColor,padding:"0px","-webkit-appearance":"none"})||this.i.css({width:"0px",visibility:"hidden"})},this.change=function(t){this.cv=t,this.$.val(this.o.format(t))},this.angle=function(t){return(t-this.o.min)*this.angleArc/(this.o.max-this.o.min)},this.arc=function(t){var i,e;return t=this.angle(t),this.o.flip?(i=this.endAngle+1e-5,e=i-t-1e-5):(i=this.startAngle-1e-5,e=i+t+1e-5),this.o.cursor&&(i=e-this.cursorExt)&&(e+=this.cursorExt),{s:i,e:e,d:this.o.flip&&!this.o.cursor}},this.draw=function(){var t,i=this.g,e=this.arc(this.cv),n=1;i.lineWidth=this.lineWidth,i.lineCap=this.lineCap,"none"!==this.o.bgColor&&(i.beginPath(),i.strokeStyle=this.o.bgColor,i.arc(this.xy,this.xy,this.radius,this.endAngle-1e-5,this.startAngle+1e-5,!0),i.stroke()),this.o.displayPrevious&&(t=this.arc(this.v),i.beginPath(),i.strokeStyle=this.pColor,i.arc(this.xy,this.xy,this.radius,t.s,t.e,t.d),i.stroke(),n=this.cv==this.v),i.beginPath(),i.strokeStyle=n?this.o.fgColor:this.fgColor,i.arc(this.xy,this.xy,this.radius,e.s,e.e,e.d),i.stroke()},this.cancel=function(){this.val(this.v)}},t.fn.dial=t.fn.knob=function(e){return this.each(function(){var n=new i.Dial;n.o=e,n.$=t(this),n.run()}).parent()}}),function(t){t.easing.jswing=t.easing.swing,t.extend(t.easing,{def:"easeOutQuad",swing:function(i,e,n,s,a){return t.easing[t.easing.def](i,e,n,s,a)},easeInQuad:function(t,i,e,n,s){return n*(i/=s)*i+e},easeOutQuad:function(t,i,e,n,s){return-n*(i/=s)*(i-2)+e},easeInOutQuad:function(t,i,e,n,s){return(i/=s/2)<1?n/2*i*i+e:-n/2*(--i*(i-2)-1)+e},easeInCubic:function(t,i,e,n,s){return n*(i/=s)*i*i+e},easeOutCubic:function(t,i,e,n,s){return n*((i=i/s-1)*i*i+1)+e},easeInOutCubic:function(t,i,e,n,s){return(i/=s/2)<1?n/2*i*i*i+e:n/2*((i-=2)*i*i+2)+e},easeInQuart:function(t,i,e,n,s){return n*(i/=s)*i*i*i+e},easeOutQuart:function(t,i,e,n,s){return-n*((i=i/s-1)*i*i*i-1)+e},easeInOutQuart:function(t,i,e,n,s){return(i/=s/2)<1?n/2*i*i*i*i+e:-n/2*((i-=2)*i*i*i-2)+e},easeInQuint:function(t,i,e,n,s){return n*(i/=s)*i*i*i*i+e},easeOutQuint:function(t,i,e,n,s){return n*((i=i/s-1)*i*i*i*i+1)+e},easeInOutQuint:function(t,i,e,n,s){return(i/=s/2)<1?n/2*i*i*i*i*i+e:n/2*((i-=2)*i*i*i*i+2)+e},easeInSine:function(t,i,e,n,s){return-n*Math.cos(i/s*(Math.PI/2))+n+e},easeOutSine:function(t,i,e,n,s){return n*Math.sin(i/s*(Math.PI/2))+e},easeInOutSine:function(t,i,e,n,s){return-n/2*(Math.cos(Math.PI*i/s)-1)+e},easeInExpo:function(t,i,e,n,s){return 0==i?e:n*Math.pow(2,10*(i/s-1))+e},easeOutExpo:function(t,i,e,n,s){return i==s?e+n:n*(-Math.pow(2,-10*i/s)+1)+e},easeInOutExpo:function(t,i,e,n,s){return 0==i?e:i==s?e+n:(i/=s/2)<1?n/2*Math.pow(2,10*(i-1))+e:n/2*(-Math.pow(2,-10*--i)+2)+e},easeInCirc:function(t,i,e,n,s){return-n*(Math.sqrt(1-(i/=s)*i)-1)+e},easeOutCirc:function(t,i,e,n,s){return n*Math.sqrt(1-(i=i/s-1)*i)+e},easeInOutCirc:function(t,i,e,n,s){return(i/=s/2)<1?-n/2*(Math.sqrt(1-i*i)-1)+e:n/2*(Math.sqrt(1-(i-=2)*i)+1)+e},easeInElastic:function(t,i,e,n,s){var a=1.70158,o=0,h=n;if(0==i)return e;if(1==(i/=s))return e+n;if(o||(o=.3*s),h<Math.abs(n)){h=n;var a=o/4}else var a=o/(2*Math.PI)*Math.asin(n/h);return-(h*Math.pow(2,10*(i-=1))*Math.sin(2*(i*s-a)*Math.PI/o))+e},easeOutElastic:function(t,i,e,n,s){var a=1.70158,o=0,h=n;if(0==i)return e;if(1==(i/=s))return e+n;if(o||(o=.3*s),h<Math.abs(n)){h=n;var a=o/4}else var a=o/(2*Math.PI)*Math.asin(n/h);return h*Math.pow(2,-10*i)*Math.sin(2*(i*s-a)*Math.PI/o)+n+e},easeInOutElastic:function(t,i,e,n,s){var a=1.70158,o=0,h=n;if(0==i)return e;if(2==(i/=s/2))return e+n;if(o||(o=.3*s*1.5),h<Math.abs(n)){h=n;var a=o/4}else var a=o/(2*Math.PI)*Math.asin(n/h);return 1>i?-.5*h*Math.pow(2,10*(i-=1))*Math.sin(2*(i*s-a)*Math.PI/o)+e:h*Math.pow(2,-10*(i-=1))*Math.sin(2*(i*s-a)*Math.PI/o)*.5+n+e},easeInBack:function(t,i,e,n,s,a){return void 0==a&&(a=1.70158),n*(i/=s)*i*((a+1)*i-a)+e},easeOutBack:function(t,i,e,n,s,a){return void 0==a&&(a=1.70158),n*((i=i/s-1)*i*((a+1)*i+a)+1)+e},easeInOutBack:function(t,i,e,n,s,a){return void 0==a&&(a=1.70158),(i/=s/2)<1?n/2*i*i*(((a*=1.525)+1)*i-a)+e:n/2*((i-=2)*i*(((a*=1.525)+1)*i+a)+2)+e},easeInBounce:function(i,e,n,s,a){return s-t.easing.easeOutBounce(i,a-e,0,s,a)+n},easeOutBounce:function(t,i,e,n,s){return(i/=s)<1/2.75?7.5625*n*i*i+e:2/2.75>i?n*(7.5625*(i-=1.5/2.75)*i+.75)+e:2.5/2.75>i?n*(7.5625*(i-=2.25/2.75)*i+.9375)+e:n*(7.5625*(i-=2.625/2.75)*i+.984375)+e},easeInOutBounce:function(i,e,n,s,a){return a/2>e?.5*t.easing.easeInBounce(i,2*e,0,s,a)+n:.5*t.easing.easeOutBounce(i,2*e-a,0,s,a)+.5*s+n}})}(jQuery),function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof exports?module.exports=t:t(jQuery)}(function(t){function i(i){var o=i||window.event,h=r.call(arguments,1),l=0,c=0,d=0,f=0,v=0,g=0;if(i=t.event.fix(o),i.type="mousewheel","detail"in o&&(d=-1*o.detail),"wheelDelta"in o&&(d=o.wheelDelta),"wheelDeltaY"in o&&(d=o.wheelDeltaY),"wheelDeltaX"in o&&(c=-1*o.wheelDeltaX),"axis"in o&&o.axis===o.HORIZONTAL_AXIS&&(c=-1*d,d=0),l=0===d?c:d,"deltaY"in o&&(d=-1*o.deltaY,l=d),"deltaX"in o&&(c=o.deltaX,0===d&&(l=-1*c)),0!==d||0!==c){if(1===o.deltaMode){var p=t.data(this,"mousewheel-line-height");l*=p,d*=p,c*=p}else if(2===o.deltaMode){var m=t.data(this,"mousewheel-page-height");l*=m,d*=m,c*=m}if(f=Math.max(Math.abs(d),Math.abs(c)),(!a||a>f)&&(a=f,n(o,f)&&(a/=40)),n(o,f)&&(l/=40,c/=40,d/=40),l=Math[l>=1?"floor":"ceil"](l/a),c=Math[c>=1?"floor":"ceil"](c/a),d=Math[d>=1?"floor":"ceil"](d/a),u.settings.normalizeOffset&&this.getBoundingClientRect){var w=this.getBoundingClientRect();v=i.clientX-w.left,g=i.clientY-w.top}return i.deltaX=c,i.deltaY=d,i.deltaFactor=a,i.offsetX=v,i.offsetY=g,i.deltaMode=0,h.unshift(i,l,c,d),s&&clearTimeout(s),s=setTimeout(e,200),(t.event.dispatch||t.event.handle).apply(this,h)}}function e(){a=null}function n(t,i){return u.settings.adjustOldDeltas&&"mousewheel"===t.type&&i%120===0}var s,a,o=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],r=Array.prototype.slice;if(t.event.fixHooks)for(var l=o.length;l;)t.event.fixHooks[o[--l]]=t.event.mouseHooks;var u=t.event.special.mousewheel={version:"3.1.11",setup:function(){if(this.addEventListener)for(var e=h.length;e;)this.addEventListener(h[--e],i,!1);else this.onmousewheel=i;t.data(this,"mousewheel-line-height",u.getLineHeight(this)),t.data(this,"mousewheel-page-height",u.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var e=h.length;e;)this.removeEventListener(h[--e],i,!1);else this.onmousewheel=null;t.removeData(this,"mousewheel-line-height"),t.removeData(this,"mousewheel-page-height")},getLineHeight:function(i){var e=t(i)["offsetParent"in t.fn?"offsetParent":"parent"]();return e.length||(e=t("body")),parseInt(e.css("fontSize"),10)},getPageHeight:function(i){return t(i).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};t.fn.extend({mousewheel:function(t){return t?this.bind("mousewheel",t):this.trigger("mousewheel")},unmousewheel:function(t){return this.unbind("mousewheel",t)}})}),function(t){function i(){function t(){var t=document.createElement("INPUT");return t.type="file","files"in t}function i(){var t=new XMLHttpRequest;return!!(t&&"upload"in t&&"onprogress"in t.upload)}function e(){return!!window.FormData}return t()&&i()&&e()}if(t.support.ajaxupload=i(),t.support.ajaxupload&&t.event.props.push("dataTransfer"),t.fn.uploadOnDrag=function(i){return t.support.ajaxupload?this.each(function(){var e=t(this),n=t.extend({action:"",single:!1,method:"POST",params:{},loadstart:function(){},load:function(){},loadend:function(){},progress:function(){},complete:function(){},allcomplete:function(){},readystatechange:function(){}},i);e.on("drop",function(i){function e(i,e){for(var n,s=new FormData,a=new XMLHttpRequest,o=0;n=i[o];o++)s.append("files[]",n);for(var h in e.params)s.append(h,e.params[h]);a.upload.addEventListener("progress",function(t){var i=t.loaded/t.total*100;e.progress(i,t)},!1),a.addEventListener("loadstart",function(t){e.loadstart(t)},!1),a.addEventListener("load",function(t){e.load(t)},!1),a.addEventListener("loadend",function(t){e.loadend(t)},!1),a.addEventListener("error",function(t){e.error(t)},!1),a.addEventListener("abort",function(t){e.abort(t)},!1),a.open(e.method,e.action,!0),a.onreadystatechange=function(){if(e.readystatechange(a),4==a.readyState){var i=a.responseText;if("json"==e.type)try{i=t.parseJSON(i)}catch(n){i=!1}e.complete(i,a)}},a.send(s)}i.stopPropagation(),i.preventDefault();var s=i.dataTransfer.files;if(n.single){var a=i.dataTransfer.files.length,o=0,h=n.complete;n.complete=function(t,i){o+=1,h(t,i),a>o?e([s[o]],n):n.allcomplete()},e([s[0]],n)}else e(s,n)}).on("dragover",function(t){t.stopPropagation(),t.preventDefault()})}):this},t.fn.ajaxform=function(i){return t.support.ajaxupload?this.each(function(){var e=t(this),n=t.extend({action:e.attr("action"),method:e.attr("method"),loadstart:function(){},load:function(){},loadend:function(){},progress:function(){},complete:function(){},readystatechange:function(){}},i);e.on("submit",function(i){i.preventDefault();var e=new FormData(this),s=new XMLHttpRequest;e.append("formdata","1"),s.upload.addEventListener("progress",function(t){var i=t.loaded/t.total*100;n.progress(i,t)},!1),s.addEventListener("loadstart",function(t){n.loadstart(t)},!1),s.addEventListener("load",function(t){n.load(t)},!1),s.addEventListener("loadend",function(t){n.loadend(t)},!1),s.addEventListener("error",function(t){n.error(t)},!1),s.addEventListener("abort",function(t){n.abort(t)},!1),s.open(n.method,n.action,!0),s.onreadystatechange=function(){if(n.readystatechange(s),4==s.readyState){var i=s.responseText;if("json"==n.type)try{i=t.parseJSON(i)}catch(e){i=!1}n.complete(i,s)}},s.send(e)})}):this},!t.event.special.debouncedresize){var e,n,s=t.event;e=s.special.debouncedresize={setup:function(){t(this).on("resize",e.handler)},teardown:function(){t(this).off("resize",e.handler)},handler:function(t,i){var a=this,o=arguments,h=function(){t.type="debouncedresize",s.dispatch.apply(a,o)};n&&clearTimeout(n),i?h():n=setTimeout(h,e.threshold)},threshold:150}}}(jQuery);
(function(){var t=[].indexf||function(t){for(var e=0,n=this.length;e<n;e++){if(e in this&&this[e]===t)return e}return-1},e=[].slice;(function(t,e){if(typeof define==="function"&&define.amd){return define("waypoints",["jquery"],function(n){return e(n,t)})}else{return e(t.jQuery,t)}})(this,function(n,r){var i,o,l,s,f,u,a,c,h,d,p,y,v,w,g,m;i=n(r);c=t.call(r,"ontouchstart")>=0;s={horizontal:{},vertical:{}};f=1;a={};u="waypoints-context-id";p="resize.waypoints";y="scroll.waypoints";v=1;w="waypoints-waypoint-ids";g="waypoint";m="waypoints";o=function(){function t(t){var e=this;this.$element=t;this.element=t[0];this.didResize=false;this.didScroll=false;this.id="context"+f++;this.oldScroll={x:t.scrollLeft(),y:t.scrollTop()};this.waypoints={horizontal:{},vertical:{}};t.data(u,this.id);a[this.id]=this;t.bind(y,function(){var t;if(!(e.didScroll||c)){e.didScroll=true;t=function(){e.doScroll();return e.didScroll=false};return r.setTimeout(t,n[m].settings.scrollThrottle)}});t.bind(p,function(){var t;if(!e.didResize){e.didResize=true;t=function(){n[m]("refresh");return e.didResize=false};return r.setTimeout(t,n[m].settings.resizeThrottle)}})}t.prototype.doScroll=function(){var t,e=this;t={horizontal:{newScroll:this.$element.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.$element.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};if(c&&(!t.vertical.oldScroll||!t.vertical.newScroll)){n[m]("refresh")}n.each(t,function(t,r){var i,o,l;l=[];o=r.newScroll>r.oldScroll;i=o?r.forward:r.backward;n.each(e.waypoints[t],function(t,e){var n,i;if(r.oldScroll<(n=e.offset)&&n<=r.newScroll){return l.push(e)}else if(r.newScroll<(i=e.offset)&&i<=r.oldScroll){return l.push(e)}});l.sort(function(t,e){return t.offset-e.offset});if(!o){l.reverse()}return n.each(l,function(t,e){if(e.options.continuous||t===l.length-1){return e.trigger([i])}})});return this.oldScroll={x:t.horizontal.newScroll,y:t.vertical.newScroll}};t.prototype.refresh=function(){var t,e,r,i=this;r=n.isWindow(this.element);e=this.$element.offset();this.doScroll();t={horizontal:{contextOffset:r?0:e.left,contextScroll:r?0:this.oldScroll.x,contextDimension:this.$element.width(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:r?0:e.top,contextScroll:r?0:this.oldScroll.y,contextDimension:r?n[m]("viewportHeight"):this.$element.height(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};return n.each(t,function(t,e){return n.each(i.waypoints[t],function(t,r){var i,o,l,s,f;i=r.options.offset;l=r.offset;o=n.isWindow(r.element)?0:r.$element.offset()[e.offsetProp];if(n.isFunction(i)){i=i.apply(r.element)}else if(typeof i==="string"){i=parseFloat(i);if(r.options.offset.indexOf("%")>-1){i=Math.ceil(e.contextDimension*i/100)}}r.offset=o-e.contextOffset+e.contextScroll-i;if(r.options.onlyOnScroll&&l!=null||!r.enabled){return}if(l!==null&&l<(s=e.oldScroll)&&s<=r.offset){return r.trigger([e.backward])}else if(l!==null&&l>(f=e.oldScroll)&&f>=r.offset){return r.trigger([e.forward])}else if(l===null&&e.oldScroll>=r.offset){return r.trigger([e.forward])}})})};t.prototype.checkEmpty=function(){if(n.isEmptyObject(this.waypoints.horizontal)&&n.isEmptyObject(this.waypoints.vertical)){this.$element.unbind([p,y].join(" "));return delete a[this.id]}};return t}();l=function(){function t(t,e,r){var i,o;r=n.extend({},n.fn[g].defaults,r);if(r.offset==="bottom-in-view"){r.offset=function(){var t;t=n[m]("viewportHeight");if(!n.isWindow(e.element)){t=e.$element.height()}return t-n(this).outerHeight()}}this.$element=t;this.element=t[0];this.axis=r.horizontal?"horizontal":"vertical";this.callback=r.handler;this.context=e;this.enabled=r.enabled;this.id="waypoints"+v++;this.offset=null;this.options=r;e.waypoints[this.axis][this.id]=this;s[this.axis][this.id]=this;i=(o=t.data(w))!=null?o:[];i.push(this.id);t.data(w,i)}t.prototype.trigger=function(t){if(!this.enabled){return}if(this.callback!=null){this.callback.apply(this.element,t)}if(this.options.triggerOnce){return this.destroy()}};t.prototype.disable=function(){return this.enabled=false};t.prototype.enable=function(){this.context.refresh();return this.enabled=true};t.prototype.destroy=function(){delete s[this.axis][this.id];delete this.context.waypoints[this.axis][this.id];return this.context.checkEmpty()};t.getWaypointsByElement=function(t){var e,r;r=n(t).data(w);if(!r){return[]}e=n.extend({},s.horizontal,s.vertical);return n.map(r,function(t){return e[t]})};return t}();d={init:function(t,e){var r;if(e==null){e={}}if((r=e.handler)==null){e.handler=t}this.each(function(){var t,r,i,s;t=n(this);i=(s=e.context)!=null?s:n.fn[g].defaults.context;if(!n.isWindow(i)){i=t.closest(i)}i=n(i);r=a[i.data(u)];if(!r){r=new o(i)}return new l(t,r,e)});n[m]("refresh");return this},disable:function(){return d._invoke(this,"disable")},enable:function(){return d._invoke(this,"enable")},destroy:function(){return d._invoke(this,"destroy")},prev:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e>0){return t.push(n[e-1])}})},next:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e<n.length-1){return t.push(n[e+1])}})},_traverse:function(t,e,i){var o,l;if(t==null){t="vertical"}if(e==null){e=r}l=h.aggregate(e);o=[];this.each(function(){var e;e=n.inArray(this,l[t]);return i(o,e,l[t])});return this.pushStack(o)},_invoke:function(t,e){t.each(function(){var t;t=l.getWaypointsByElement(this);return n.each(t,function(t,n){n[e]();return true})});return this}};n.fn[g]=function(){var t,r;r=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(d[r]){return d[r].apply(this,t)}else if(n.isFunction(r)){return d.init.apply(this,arguments)}else if(n.isPlainObject(r)){return d.init.apply(this,[null,r])}else if(!r){return n.error("jQuery Waypoints needs a callback function or handler option.")}else{return n.error("The "+r+" method does not exist in jQuery Waypoints.")}};n.fn[g].defaults={context:r,continuous:true,enabled:true,horizontal:false,offset:0,triggerOnce:false};h={refresh:function(){return n.each(a,function(t,e){return e.refresh()})},viewportHeight:function(){var t;return(t=r.innerHeight)!=null?t:i.height()},aggregate:function(t){var e,r,i;e=s;if(t){e=(i=a[n(t).data(u)])!=null?i.waypoints:void 0}if(!e){return[]}r={horizontal:[],vertical:[]};n.each(r,function(t,i){n.each(e[t],function(t,e){return i.push(e)});i.sort(function(t,e){return t.offset-e.offset});r[t]=n.map(i,function(t){return t.element});return r[t]=n.unique(r[t])});return r},above:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset<=t.oldScroll.y})},below:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset>t.oldScroll.y})},left:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset<=t.oldScroll.x})},right:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset>t.oldScroll.x})},enable:function(){return h._invoke("enable")},disable:function(){return h._invoke("disable")},destroy:function(){return h._invoke("destroy")},extendFn:function(t,e){return d[t]=e},_invoke:function(t){var e;e=n.extend({},s.vertical,s.horizontal);return n.each(e,function(e,n){n[t]();return true})},_filter:function(t,e,r){var i,o;i=a[n(t).data(u)];if(!i){return[]}o=[];n.each(i.waypoints[e],function(t,e){if(r(i,e)){return o.push(e)}});o.sort(function(t,e){return t.offset-e.offset});return n.map(o,function(t){return t.element})}};n[m]=function(){var t,n;n=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(h[n]){return h[n].apply(null,t)}else{return h.aggregate.call(null,n)}};n[m].settings={resizeThrottle:100,scrollThrottle:30};return i.load(function(){return n[m]("refresh")})})}).call(this);
