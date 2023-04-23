System.register("chunks:///_virtual/AnimationPlay.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(n){"use strict";var t,o,a,e,i,r,l;return{setters:[function(n){t=n.inheritsLoose},function(n){o=n.cclegacy,a=n._decorator,e=n.Animation,i=n.AnimationClip,r=n.dragonBones,l=n.Component}],execute:function(){var c;o._RF.push({},"08bb1FoI65DOLwaTdIwvj/L","AnimationPlay",void 0);var p=a.ccclass;a.property,n("AnimationPlay",p("AnimationPlay")(c=function(n){function o(){return n.apply(this,arguments)||this}t(o,n);var a=o.prototype;return a.AnimationPlay=function(n,t,o,a,r,l){if(n){var c=n.getComponent(e);c.unscheduleAllCallbacks(),c.play(t);var p=c.getState(t);"loop"===o?(p.wrapMode=i.WrapMode.Loop,p.repeatCount=0===l?1/0:l):"normal"===o&&(p.wrapMode=i.WrapMode.Normal),p.time=a;var u=r-a;c.scheduleOnce((function(){c.stop()}),u)}},a.SkeletalAnimationPlay=function(n,t,o,a){if(n){var e=n.getComponent(r.ArmatureDisplay);if(e){e.armature();0===o?e.playAnimation(t,a):e.scheduleOnce((function(n){e.playAnimation(t,a)}),o)}}},o}(l))||c);o._RF.pop()}}}));

System.register("chunks:///_virtual/AudioMgr.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(o){"use strict";var i,u,e,t,n,c,r;return{setters:[function(o){i=o.createClass},function(o){u=o.cclegacy,e=o.AudioClip,t=o.resources,n=o.Node,c=o.director,r=o.AudioSource}],execute:function(){u._RF.push({},"b21a0UgtwJEwqIaJjAnO4CI","AudioMgr",void 0),o("AudioMgr",function(){function o(){this._audioSource=void 0;var o=new n;o.name="__audioMgr__",c.getScene().addChild(o),c.addPersistRootNode(o),this._audioSource=o.addComponent(r)}var u=o.prototype;return u.playOneShot=function(o,i){var u=this;void 0===i&&(i=1),o instanceof e?this._audioSource.playOneShot(o,i):t.load(o,(function(o,e){o?console.log(o):u._audioSource.playOneShot(e,i)}))},u.play=function(o,i,u){var n=this;void 0===i&&(i=1),void 0===u&&(u=!1),o instanceof e?(this._audioSource.clip=o,this._audioSource.play(),this.audioSource.volume=i,this.audioSource.loop=u):t.load(o,(function(o,e){o?console.log(o):(n._audioSource.clip=e,n._audioSource.play(),n.audioSource.volume=i,n.audioSource.loop=u)}))},u.stop=function(){this._audioSource.stop()},u.pause=function(){this._audioSource.pause()},u.resume=function(){this._audioSource.play()},i(o,[{key:"audioSource",get:function(){return this._audioSource}}],[{key:"inst",get:function(){return null==this._inst&&(this._inst=new o),this._inst}}]),o}())._inst=void 0,u._RF.pop()}}}));

System.register("chunks:///_virtual/AutoSkAnimationPlay.ts",["./rollupPluginModLoBabelHelpers.js","cc","./AnimationPlay.ts"],(function(t){"use strict";var i,a,e,n,r,o,l,s,m,u,p,y;return{setters:[function(t){i=t.applyDecoratedDescriptor,a=t.initializerDefineProperty,e=t.inheritsLoose,n=t.assertThisInitialized},function(t){r=t.cclegacy,o=t._decorator,l=t.CCString,s=t.CCFloat,m=t.CCBoolean,u=t.dragonBones,p=t.Component},function(t){y=t.AnimationPlay}],execute:function(){var c,h,f,d,b,P,v,N,E,g,k,A,_,C,O,D;r._RF.push({},"59cacDc6lhFnpQTwFqWCZZn","AutoSkAnimationPlay",void 0);var L=o.ccclass,T=o.property,S=t("SkAnimation",(c=L("SkAnimation"),h=T({type:l,displayName:"动画名称"}),f=T({type:s,displayName:"播放次数(0=无限循环 >0=次数)"}),c((P=i((b=function(){a(this,"animationName",P,this),a(this,"playTimes",v,this)}).prototype,"animationName",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),v=i(b.prototype,"playTimes",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1}}),d=b))||d));t("AutoSkAnimationPlay",(N=L("AutoSkAnimationPlay"),E=T({type:[S],displayName:"骨骼动画名称列表"}),g=T({type:s,displayName:"延迟时间"}),k=T({type:m,displayName:"是否批量播放"}),N((C=i((_=function(t){function i(){for(var i,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return i=t.call.apply(t,[this].concat(r))||this,a(i,"skName",C,n(i)),a(i,"delay",O,n(i)),a(i,"isPatchPlay",D,n(i)),i._armatureDisplay=null,i}e(i,t);var r=i.prototype;return r.onLoad=function(){this._armatureDisplay=this.getComponent(u.ArmatureDisplay),this._armatureDisplay.addEventListener(u.EventObject.COMPLETE,this._animationEventHandler,this),this._armatureDisplay.addEventListener(u.EventObject.LOOP_COMPLETE,this._animationEventHandler,this);var t=new y,i=this.skName[0];t.SkeletalAnimationPlay(this,i.animationName,this.delay,i.playTimes),console.log(i.animationName)},r._animationEventHandler=function(t){if(t.type===u.EventObject.COMPLETE){var i=this._armatureDisplay.animationName;if(!this.isPatchPlay)return;for(var a=0;a<this.skName.length;a++){if(this.skName[a].animationName===i&&a<this.skName.length-1){var e=this.skName[a+1],n=e.animationName,r=e.playTimes;console.log(n),this._armatureDisplay.playAnimation(n,r);break}}}else t.type,u.EventObject.LOOP_COMPLETE},i}(p)).prototype,"skName",[E],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),O=i(_.prototype,"delay",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),D=i(_.prototype,"isPatchPlay",[k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),A=_))||A));r._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./AnimationPlay.ts","./AudioMgr.ts","./AutoSkAnimationPlay.ts","./PlayBackMusic.ts","./SkTouchPlay.ts","./SwitchScene.ts","./TouchPlay.ts"],(function(){"use strict";return{setters:[null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/PlayBackMusic.ts",["./rollupPluginModLoBabelHelpers.js","cc","./AudioMgr.ts"],(function(i){"use strict";var t,e,r,o,a,c,n,s,u,l;return{setters:[function(i){t=i.applyDecoratedDescriptor,e=i.inheritsLoose,r=i.initializerDefineProperty,o=i.assertThisInitialized},function(i){a=i.cclegacy,c=i._decorator,n=i.AudioClip,s=i.CCBoolean,u=i.Component},function(i){l=i.AudioMgr}],execute:function(){var p,y,f,b,d,k,M;a._RF.push({},"192d8yDGkxFqI3UNiNwktEY","PlayBackMusic",void 0);var h=c.ccclass,g=c.property;i("PlayBackMusic",(p=h("PlayBackMusic"),y=g({type:n,displayName:"背景音"}),f=g({type:s,displayName:"是否循环播放"}),p((k=t((d=function(i){function t(){for(var t,e=arguments.length,a=new Array(e),c=0;c<e;c++)a[c]=arguments[c];return t=i.call.apply(i,[this].concat(a))||this,r(t,"backMusic",k,o(t)),r(t,"isLoop",M,o(t)),t}return e(t,i),t.prototype.start=function(){this.backMusic&&l.inst.play(this.backMusic,1,this.isLoop)},t}(u)).prototype,"backMusic",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),M=t(d.prototype,"isLoop",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),b=d))||b));a._RF.pop()}}}));

System.register("chunks:///_virtual/SkTouchPlay.ts",["./rollupPluginModLoBabelHelpers.js","cc","./AnimationPlay.ts","./AutoSkAnimationPlay.ts","./AudioMgr.ts"],(function(i){"use strict";var t,e,n,a,o,r,l,s,u,c,y,p,m,d,h;return{setters:[function(i){t=i.applyDecoratedDescriptor,e=i.initializerDefineProperty,n=i.inheritsLoose,a=i.assertThisInitialized},function(i){o=i.cclegacy,r=i._decorator,l=i.Node,s=i.CCBoolean,u=i.CCFloat,c=i.AudioClip,y=i.Component,p=i.dragonBones},function(i){m=i.AnimationPlay},function(i){d=i.SkAnimation},function(i){h=i.AudioMgr}],execute:function(){var f,b,P,g,k,v,N,A,T,S,C,E,_,w,z,L,O,M;o._RF.push({},"99d851Ae6tOboCyk+gkNOSo","SkTouchPlay",void 0);var D=r.ccclass,j=r.property,B=(f=D("SkAnimationNode"),b=j({type:l,displayName:"骨骼节点"}),P=j({type:[d],displayName:"骨骼动画名称列表"}),g=j({type:s,displayName:"是否批量播放"}),k=j({type:u,displayName:"延迟时间"}),f((A=t((N=function(){e(this,"node",A,this),e(this,"skNames",T,this),e(this,"isPatchPlay",S,this),e(this,"delay",C,this)}).prototype,"node",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=t(N.prototype,"skNames",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),S=t(N.prototype,"isPatchPlay",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),C=t(N.prototype,"delay",[k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),v=N))||v);i("SkTouchPlay",(E=D("SkTouchPlay"),_=j({type:[B],displayName:"骨骼动画列表"}),w=j({type:c,displayName:"音频"}),E((O=t((L=function(i){function t(){for(var t,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return t=i.call.apply(i,[this].concat(o))||this,e(t,"nodes",O,a(t)),e(t,"audio",M,a(t)),t._animationPlay=null,t}n(t,i);var o=t.prototype;return o.onLoad=function(){this._animationPlay=new m,this.node.on(l.EventType.TOUCH_START,this.onTouchStart,this)},o.onTouchStart=function(i){var t=this;if(this.audio&&(h.inst.stop(),h.inst.play(this.audio)),0!=this.nodes.length)for(var e=function(){var i=t.nodes[n],e=i.node,a=i.skNames,o=i.isPatchPlay,r=i.delay,l=e.getComponent(p.ArmatureDisplay),s=a[0];if(!o)return t._animationPlay.SkeletalAnimationPlay(e,s.animationName,r,s.playTimes),"break";l.removeEventListener(p.EventObject.COMPLETE,null,e),t._animationPlay.SkeletalAnimationPlay(e,s.animationName,r,s.playTimes),l.addEventListener(p.EventObject.COMPLETE,(function(i){for(var t=i.armature.animation.lastAnimationName,e=0;e<a.length;e++){if(a[e].animationName===t&&e<a.length-1){var n=a[e+1];i.armature.animation.play(n.animationName,n.playTimes);break}}}),t)},n=0;n<this.nodes.length;n++){if("break"===e())break}},t}(y)).prototype,"nodes",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),M=t(L.prototype,"audio",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),z=L))||z));o._RF.pop()}}}));

System.register("chunks:///_virtual/SwitchScene.ts",["./rollupPluginModLoBabelHelpers.js","cc","./AudioMgr.ts"],(function(e){"use strict";var t,i,n,c,o,r,s,u,a,l,h;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,n=e.initializerDefineProperty,c=e.assertThisInitialized},function(e){o=e.cclegacy,r=e._decorator,s=e.CCFloat,u=e.Node,a=e.director,l=e.Component},function(e){h=e.AudioMgr}],execute:function(){var p,d,f,y,S,T,g;o._RF.push({},"87cc1KGFwBPtZIBysdiPHJd","SwitchScene",void 0);var v=r.ccclass,_=r.property;e("SwitchScene",(p=v("SwitchScene"),d=_({type:String,displayName:"场景名称"}),f=_({type:s,displayName:"延迟时间"}),p((T=t((S=function(e){function t(){for(var t,i=arguments.length,o=new Array(i),r=0;r<i;r++)o[r]=arguments[r];return t=e.call.apply(e,[this].concat(o))||this,n(t,"scene",T,c(t)),n(t,"delay",g,c(t)),t._isTouch=!0,t}i(t,e);var o=t.prototype;return o.onLoad=function(){this.node.on(u.EventType.TOUCH_START,this.onTouchStart,this)},o.onTouchStart=function(e){this.turnScene()},o.turnScene=function(){if(this.scene&&this._isTouch){this._isTouch=!1;var e=this;this.scheduleOnce((function(){h.inst.stop(),h.inst.audioSource.clip=null,a.loadScene(this.scene,(function(){e._isTouch=!0}))}),this.delay)}},t}(l)).prototype,"scene",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),g=t(S.prototype,"delay",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),y=S))||y));o._RF.pop()}}}));

System.register("chunks:///_virtual/TouchPlay.ts",["./rollupPluginModLoBabelHelpers.js","cc","./AnimationPlay.ts","./AudioMgr.ts"],(function(i){"use strict";var t,e,n,o,a,r,l,u,s,c,p,y,d;return{setters:[function(i){t=i.applyDecoratedDescriptor,e=i.initializerDefineProperty,n=i.inheritsLoose,o=i.assertThisInitialized},function(i){a=i.cclegacy,r=i._decorator,l=i.Node,u=i.CCString,s=i.CCFloat,c=i.AudioClip,p=i.Component},function(i){y=i.AnimationPlay},function(i){d=i.AudioMgr}],execute:function(){var h,m,f,b,T,g,P,v,A,w,z,N,_,C,S,D,F,L,M,R;a._RF.push({},"d1cc5U9Qv1ASoDqcZkyUK1c","TouchPlay",void 0);var U=r.ccclass,k=r.property,H=(h=U("AnimationNode"),m=k({type:l,displayName:"普通节点"}),f=k({type:u,displayName:"动画名称"}),b=k({type:u,displayName:"动画模式"}),T=k({type:s,displayName:"开始时间"}),g=k({type:s,displayName:"结束时间"}),h((A=t((v=function(){e(this,"node",A,this),e(this,"name",w,this),e(this,"mode",z,this),e(this,"startTime",N,this),e(this,"endTime",_,this)}).prototype,"node",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),w=t(v.prototype,"name",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),z=t(v.prototype,"mode",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),N=t(v.prototype,"startTime",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),_=t(v.prototype,"endTime",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),P=v))||P);i("TouchPlay",(C=U("TouchPlay"),S=k({type:[H],displayName:"普通动画列表"}),D=k({type:c,displayName:"音频"}),C((M=t((L=function(i){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return t=i.call.apply(i,[this].concat(a))||this,e(t,"nodes",M,o(t)),e(t,"audio",R,o(t)),t._animationPlay=null,t}n(t,i);var a=t.prototype;return a.onLoad=function(){this._animationPlay=new y,this.node.on(l.EventType.TOUCH_START,this.onTouchStart,this)},a.onTouchStart=function(i){if(this.audio&&(d.inst.stop(),d.inst.playOneShot(this.audio)),0!=this.nodes.length)for(var t=0;t<this.nodes.length;t++){var e=this.nodes[t];this._animationPlay.AnimationPlay(e.node,e.name,e.mode,e.startTime,e.endTime,1)}},t}(p)).prototype,"nodes",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),R=t(L.prototype,"audio",[D],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),F=L))||F));a._RF.pop()}}}));
