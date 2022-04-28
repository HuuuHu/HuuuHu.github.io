System.register("chunks:///_virtual/SpineChange-animCat.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, cclegacy, _decorator, sp, Label, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      sp = module.sp;
      Label = module.Label;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp;

      cclegacy._RF.push({}, "0653d9T0mlCK6dnl7f2n5jw", "SpineChange-animCat", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var SpineSkin = exports('SpineSkin', (_dec = ccclass('SpineChange-animCat'), _dec2 = property({
        type: sp.Skeleton
      }), _dec3 = property({
        type: Label
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SpineSkin, _Component);

        function SpineSkin() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "spine", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "AnimName", _descriptor2, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "animID", 0);

          return _this;
        }

        var _proto = SpineSkin.prototype;

        _proto.start = function start() {// Your initialization goes here.
        };

        _proto.change = function change() {
          var anim = ['a_callout', 'a_idle', 'a_move', 'a_stretch', 'b_callout', 'b_idle', 'b_move', 'b_stretch'];
          this.animID = (this.animID + 1) % anim.length; // const d =this.spine.skeletonData.skeletonJson;
          // console.log(d);
          // console.log(anim.length);
          // console.log(this.animID);
          // // this.spine!.setSkin(anim[this.animId]);

          this.AnimName.string = "Anim：" + anim[this.animID];
          this.spine.setAnimation(0, anim[this.animID], true);
        } // update (deltaTime: number) {
        //     // Your update function goes here.
        // }
        ;

        return SpineSkin;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "spine", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "AnimName", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SpineAttach.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, cclegacy, _decorator, sp, Node, Label, Button, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      sp = module.sp;
      Node = module.Node;
      Label = module.Label;
      Button = module.Button;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class2, _class3, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp;

      cclegacy._RF.push({}, "1f4fb/2fX9O26fHciliNUu8", "SpineAttach", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;

      var _class = exports('default', (_dec = ccclass('SpineAttach'), _dec2 = property({
        type: sp.Skeleton
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Label
      }), _dec5 = property({
        type: Button
      }), _dec(_class2 = (_class3 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(_class3, _Component);

        function _class3() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "skeleton", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "attachNode", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "modeLabel", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "attachBtn", _descriptor4, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "backSockets", null);

          return _this;
        }

        var _proto = _class3.prototype;

        _proto.onLoad = function onLoad() {
          var socket = new sp.SpineSocket("root/hip/tail1/tail2/tail3/tail4/tail5/tail6/tail7/tail8/tail9/tail10", this.attachNode);
          this.skeleton.sockets.push(socket);
          this.skeleton.sockets = this.skeleton.sockets;
        };

        _proto.changeAttach = function changeAttach() {
          if (!this.backSockets) {
            this.backSockets = this.skeleton.sockets;
            this.skeleton.sockets = [];
          } else {
            this.skeleton.sockets = this.backSockets;
            this.backSockets = null;
          }
        };

        _proto.changeMode = function changeMode() {
          var isCached = this.skeleton.isAnimationCached();

          if (isCached) {
            this.skeleton.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.REALTIME);
            this.modeLabel.string = "realtime";
            this.attachBtn.interactable = true;
          } else {
            this.skeleton.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.SHARED_CACHE);
            this.modeLabel.string = "cache";
            this.attachBtn.interactable = false;
          }
        };

        return _class3;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class3.prototype, "skeleton", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class3.prototype, "attachNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class3.prototype, "modeLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class3.prototype, "attachBtn", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class3)) || _class2));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SpineChange-anim.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, cclegacy, _decorator, sp, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      sp = module.sp;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _temp;

      cclegacy._RF.push({}, "3a0c1EnuqRMC7lgaKM8AMXB", "SpineChange-anim", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var SpineSkin = exports('SpineSkin', (_dec = ccclass('SpineChange-anim'), _dec2 = property({
        type: sp.Skeleton
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SpineSkin, _Component);

        function SpineSkin() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "spine", _descriptor, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "animID", 0);

          return _this;
        }

        var _proto = SpineSkin.prototype;

        _proto.start = function start() {// Your initialization goes here.
        };

        _proto.change = function change() {
          var anim = ['a_idle', 'a_lying', 'a_sit', 'a_walk']; // const anim =this.spine.skeletonData.skeletonJson;

          this.animID = (this.animID + 1) % anim.length; // console.log(anim);
          // console.log(anim.length);
          // console.log(this.animID);
          // // this.spine!.setSkin(anim[this.animId]);

          this.spine.setAnimation(0, anim[this.animID], true);
        } // update (deltaTime: number) {
        //     // Your update function goes here.
        // }
        ;

        return SpineSkin;
      }(Component), _temp), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "spine", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SpineSkin.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, cclegacy, _decorator, sp, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      sp = module.sp;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _temp;

      cclegacy._RF.push({}, "3f265FzgzJO6pzW2KvpATcO", "SpineSkin", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var SpineSkin = exports('SpineSkin', (_dec = ccclass('SpineSkin'), _dec2 = property({
        type: sp.Skeleton
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SpineSkin, _Component);

        function SpineSkin() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "spine", _descriptor, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "skinId", 0);

          return _this;
        }

        var _proto = SpineSkin.prototype;

        _proto.start = function start() {// Your initialization goes here.
        };

        _proto.change = function change() {
          var skins = ['girl', 'boy', 'girl-blue-cape', 'girl-spring-dress'].map(function (x) {
            return "full-skins/" + x;
          });
          this.skinId = (this.skinId + 1) % skins.length;
          this.spine.setSkin(skins[this.skinId]);
        } // update (deltaTime: number) {
        //     // Your update function goes here.
        // }
        ;

        return SpineSkin;
      }(Component), _temp), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "spine", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SpineMeshEffect.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, cclegacy, _decorator, sp, Size, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      sp = module.sp;
      Size = module.Size;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class2, _class3, _descriptor, _temp;

      cclegacy._RF.push({}, "57b56AV9fFA5brJJCNWOURt", "SpineMeshEffect", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;

      var _class = exports('default', (_dec = ccclass('SpineMeshEffect'), _dec2 = property({
        type: sp.Skeleton
      }), _dec(_class2 = (_class3 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(_class3, _Component);

        function _class3() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "skeleton", _descriptor, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "_swirlTime", 0);

          _defineProperty(_assertThisInitialized(_this), "_maxEffect", 0);

          _defineProperty(_assertThisInitialized(_this), "_index", 0);

          _defineProperty(_assertThisInitialized(_this), "_bound", void 0);

          _defineProperty(_assertThisInitialized(_this), "_swirlEffect", void 0);

          _defineProperty(_assertThisInitialized(_this), "_jitterEffect", void 0);

          return _this;
        }

        var _proto = _class3.prototype;

        _proto.start = function start() {
          this._swirlTime = 0;
          this._maxEffect = 3;
          this._index = 0;
          var skeletonNodeUIProps = this.skeleton.node._uiProps.uiTransformComp;
          this._bound = new Size(skeletonNodeUIProps.width, skeletonNodeUIProps.height);
          this._swirlEffect = new sp.VertexEffectDelegate();

          this._swirlEffect.initSwirlWithPowOut(0, 2);

          this._jitterEffect = new sp.VertexEffectDelegate();

          this._jitterEffect.initJitter(20, 20);
        };

        _proto.switchEffect = function switchEffect() {
          this._index++;

          if (this._index >= this._maxEffect) {
            this._index = 0;
          }

          switch (this._index) {
            case 0:
              this.skeleton.setVertexEffectDelegate(null);
              break;

            case 1:
              this.skeleton.setVertexEffectDelegate(this._jitterEffect);
              break;

            case 2:
              this.skeleton.setVertexEffectDelegate(this._swirlEffect);
              break;
          }
        };

        _proto.update = function update(dt) {
          if (this._index == 2) {
            this._swirlTime += dt;
            var percent = this._swirlTime % 2;
            if (percent > 1) percent = 1 - (percent - 1);
            var bound = this._bound;

            var swirlEffect = this._swirlEffect.getSwirlVertexEffect();

            swirlEffect.angle = 360 * percent;
            swirlEffect.centerX = bound.width * 0.5;
            swirlEffect.centerY = bound.height * 0.5;
            swirlEffect.radius = percent * Math.sqrt(bound.width * bound.width + bound.height * bound.height);
          }
        };

        return _class3;
      }(Component), _temp), _descriptor = _applyDecoratedDescriptor(_class3.prototype, "skeleton", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class3)) || _class2));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SpineChange.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, cclegacy, _decorator, sp, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      sp = module.sp;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _temp;

      cclegacy._RF.push({}, "58dfeFlA1ZAaLqY4YMdMzeA", "SpineChange", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var SpineSkin = exports('SpineSkin', (_dec = ccclass('SpineChange'), _dec2 = property({
        type: sp.Skeleton
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SpineSkin, _Component);

        function SpineSkin() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "spine", _descriptor, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "hariID", 0);

          return _this;
        }

        var _proto = SpineSkin.prototype;

        _proto.start = function start() {// Your initialization goes here.
          // let skeletonTexture = new sp.SkeletonTexture();
        };

        _proto.changeHair = function changeHair() {
          var hair = ['a_hair_01_02', 'a_hair_01_04'];
          this.hariID = (this.hariID + 1) % hair.length; // let u ="/cases/spine/test/texture/"+hair[this.hariID]+'.png';

          var u = "/cases/spine/test/texture/" + hair[this.hariID] + '.png'; // console.log(assetManager.assets.get(u));
          // this.changeSlot(this.spine, "a_hair_01", Asset.(u));
          // this.changeSlot(this.spine,"a_hair_01",loader.getRes(u));
          // this.changeSlot(this.spine,"a_hair_01",assetManager.loadRemote<Asset>("/cases/spine/test/texture/"+hair[this.hariID])));
        } // update (deltaTime: number) {
        //     // Your update function goes here.
        // }

        /**
         * 用外部图片局部换装
         * @param sk   骨骼动画
         * @param slotName  需要替换的插槽名称
         * @param texture   外部图片
         */
        ;

        _proto.changeSlot = function changeSlot(sk, slotName, texture) {
          //获取插槽
          var slot = sk.findSlot(slotName); //获取挂件

          var att = slot.attachment; //创建region

          var skeletonTexture = new sp.SkeletonTexture(att);
          skeletonTexture.setRealTexture(texture);
          var page = new sp.spine.TextureAtlasPage(); // page.name = texture.name;

          page.uWrap = sp.spine.TextureWrap.ClampToEdge;
          page.vWrap = sp.spine.TextureWrap.ClampToEdge;
          page.texture = skeletonTexture;
          page.texture.setWraps(page.uWrap, page.vWrap); // page.width = texture.width;
          // page.height = texture.height;

          var region = new sp.spine.TextureAtlasRegion();
          region.page = page; // region.width = texture.width;
          // region.height = texture.height;
          // region.originalWidth = texture.width;
          // region.originalHeight = texture.height;

          region.rotate = false;
          region.u = 0;
          region.v = 0;
          region.u2 = 1;
          region.v2 = 1;
          region.texture = skeletonTexture; //替换region

          att.region = region;
          att.setRegion(region);
          att.updateOffset();
        };

        return SpineSkin;
      }(Component), _temp), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "spine", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SpineBoyCtrl.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _inheritsLoose, _defineProperty, _assertThisInitialized, cclegacy, _decorator, Component;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _defineProperty = module.defineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class, _temp;

      cclegacy._RF.push({}, "63fd6NWWQxCt6fDTJtglY8d", "SpineBoyCtrl", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var SpineBoyCtrl = exports('default', (_dec = ccclass('SpineBoyCtrl'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SpineBoyCtrl, _Component);

        function SpineBoyCtrl() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "mixTime", 0.2);

          _defineProperty(_assertThisInitialized(_this), "spine", void 0);

          _defineProperty(_assertThisInitialized(_this), "_hasStop", true);

          return _this;
        }

        var _proto = SpineBoyCtrl.prototype;

        _proto.onLoad = function onLoad() {
          var _this2 = this;

          var spine = this.spine = this.getComponent('sp.Skeleton');

          this._setMix('walk', 'run');

          this._setMix('run', 'jump');

          this._setMix('walk', 'jump');

          spine.setStartListener(function (trackEntry) {
            var animationName = trackEntry.animation ? trackEntry.animation.name : "";
            console.log("[track %s][animation %s] start.", trackEntry.trackIndex, animationName);
          });
          spine.setInterruptListener(function (trackEntry) {
            var animationName = trackEntry.animation ? trackEntry.animation.name : "";
            console.log("[track %s][animation %s] interrupt.", trackEntry.trackIndex, animationName);
          });
          spine.setEndListener(function (trackEntry) {
            var animationName = trackEntry.animation ? trackEntry.animation.name : "";
            console.log("[track %s][animation %s] end.", trackEntry.trackIndex, animationName);
          });
          spine.setDisposeListener(function (trackEntry) {
            var animationName = trackEntry.animation ? trackEntry.animation.name : "";
            console.log("[track %s][animation %s] will be disposed.", trackEntry.trackIndex, animationName);
          });
          spine.setCompleteListener(function (trackEntry) {
            var animationName = trackEntry.animation ? trackEntry.animation.name : "";

            if (animationName === 'shoot') {
              _this2.spine.clearTrack(1);
            }

            var loopCount = Math.floor(trackEntry.trackTime / trackEntry.animationEnd);
            console.log("[track %s][animation %s] complete: %s", trackEntry.trackIndex, animationName, loopCount);
          });
          spine.setEventListener(function (trackEntry, event) {
            var animationName = trackEntry.animation ? trackEntry.animation.name : "";
            console.log("[track %s][animation %s] event: %s, %s, %s, %s", trackEntry.trackIndex, animationName, event.data.name, event.intValue, event.floatValue, event.stringValue);
          });
          this._hasStop = false;
        } // OPTIONS
        ;

        _proto.toggleDebugSlots = function toggleDebugSlots() {
          var _this$spine;

          this.spine.debugSlots = !((_this$spine = this.spine) === null || _this$spine === void 0 ? void 0 : _this$spine.debugSlots);
        };

        _proto.toggleDebugBones = function toggleDebugBones() {
          var _this$spine2;

          this.spine.debugBones = !((_this$spine2 = this.spine) === null || _this$spine2 === void 0 ? void 0 : _this$spine2.debugBones);
        };

        _proto.toggleDebugMesh = function toggleDebugMesh() {
          var _this$spine3;

          this.spine.debugMesh = !((_this$spine3 = this.spine) === null || _this$spine3 === void 0 ? void 0 : _this$spine3.debugMesh);
        };

        _proto.toggleUseTint = function toggleUseTint() {
          var _this$spine4;

          this.spine.useTint = !((_this$spine4 = this.spine) === null || _this$spine4 === void 0 ? void 0 : _this$spine4.useTint);
        };

        _proto.toggleTimeScale = function toggleTimeScale() {
          if (this.spine.timeScale === 1.0) {
            this.spine.timeScale = 0.3;
          } else {
            this.spine.timeScale = 1.0;
          }
        } // ANIMATIONS
        ;

        _proto.stop = function stop() {
          var _this$spine5;

          (_this$spine5 = this.spine) === null || _this$spine5 === void 0 ? void 0 : _this$spine5.clearTrack(0);
          this._hasStop = true;
        };

        _proto.walk = function walk() {
          var _this$spine7;

          if (this._hasStop) {
            var _this$spine6;

            (_this$spine6 = this.spine) === null || _this$spine6 === void 0 ? void 0 : _this$spine6.setToSetupPose();
          }

          (_this$spine7 = this.spine) === null || _this$spine7 === void 0 ? void 0 : _this$spine7.setAnimation(0, 'walk', true);
          this._hasStop = false;
        };

        _proto.run = function run() {
          var _this$spine9;

          if (this._hasStop) {
            var _this$spine8;

            (_this$spine8 = this.spine) === null || _this$spine8 === void 0 ? void 0 : _this$spine8.setToSetupPose();
          }

          (_this$spine9 = this.spine) === null || _this$spine9 === void 0 ? void 0 : _this$spine9.setAnimation(0, 'run', true);
          this._hasStop = false;
        };

        _proto.jump = function jump() {
          var _this$spine11;

          if (this._hasStop) {
            var _this$spine10;

            (_this$spine10 = this.spine) === null || _this$spine10 === void 0 ? void 0 : _this$spine10.setToSetupPose();
          }

          (_this$spine11 = this.spine) === null || _this$spine11 === void 0 ? void 0 : _this$spine11.setAnimation(0, 'jump', true);
          this._hasStop = false;
        };

        _proto.shoot = function shoot() {
          var _this$spine12;

          (_this$spine12 = this.spine) === null || _this$spine12 === void 0 ? void 0 : _this$spine12.setAnimation(1, 'shoot', false);
        };

        _proto.idle = function idle() {
          var _this$spine13, _this$spine14;

          (_this$spine13 = this.spine) === null || _this$spine13 === void 0 ? void 0 : _this$spine13.setToSetupPose();
          (_this$spine14 = this.spine) === null || _this$spine14 === void 0 ? void 0 : _this$spine14.setAnimation(0, 'idle', true);
        };

        _proto.portal = function portal() {
          var _this$spine15, _this$spine16;

          (_this$spine15 = this.spine) === null || _this$spine15 === void 0 ? void 0 : _this$spine15.setToSetupPose();
          (_this$spine16 = this.spine) === null || _this$spine16 === void 0 ? void 0 : _this$spine16.setAnimation(0, 'portal', false);
        } //
        ;

        _proto._setMix = function _setMix(anim1, anim2) {
          var _this$spine17, _this$spine18;

          (_this$spine17 = this.spine) === null || _this$spine17 === void 0 ? void 0 : _this$spine17.setMix(anim1, anim2, this.mixTime);
          (_this$spine18 = this.spine) === null || _this$spine18 === void 0 ? void 0 : _this$spine18.setMix(anim2, anim1, this.mixTime);
        };

        return SpineBoyCtrl;
      }(Component), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SpineSkin-single.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, cclegacy, _decorator, sp, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      sp = module.sp;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _temp;

      cclegacy._RF.push({}, "7e308Jc1K9G350X533SJ0Y1", "SpineSkin-single", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var SpineSkin = exports('SpineSkin', (_dec = ccclass('SpineSkin-single'), _dec2 = property({
        type: sp.Skeleton
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SpineSkin, _Component);

        function SpineSkin() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "spine", _descriptor, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "skinId", 0);

          return _this;
        }

        var _proto = SpineSkin.prototype;

        _proto.start = function start() {// Your initialization goes here.
        };

        _proto.change = function change() {
          // const skins =['girl', 'boy', 'girl-blue-cape', 'girl-spring-dress'].map(x=> `full-skins/${x}`);
          var skins = this.spine.skeletonData.skeletonJson.skins;
          console.log(skins);
          this.skinId = (this.skinId + 1) % skins.length;
          console.log(skins[this.skinId].name);
          this.spine.setSkin(skins[this.skinId].name);
        } // update (deltaTime: number) {
        //     // Your update function goes here.
        // }
        ;

        return SpineSkin;
      }(Component), _temp), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "spine", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SpineSkin-anim.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, cclegacy, _decorator, sp, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      sp = module.sp;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _temp;

      cclegacy._RF.push({}, "84eb3Re2ltJOKveY+6MrNqB", "SpineSkin-anim", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var SpineSkin = exports('SpineSkin', (_dec = ccclass('SpineSkin-anim'), _dec2 = property({
        type: sp.Skeleton
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SpineSkin, _Component);

        function SpineSkin() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "spine", _descriptor, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "animID", 0);

          return _this;
        }

        var _proto = SpineSkin.prototype;

        _proto.start = function start() {// Your initialization goes here.
        };

        _proto.change = function change() {
          var anim = ['aware', 'blink', 'dance', 'dress-up', 'idle', 'walk']; // const anim =this.spine.skeletonData.skeletonJson;

          this.animID = (this.animID + 1) % anim.length; // console.log(anim);
          // console.log(anim.length);
          // console.log(this.animID);
          // // this.spine!.setSkin(anim[this.animId]);

          this.spine.setAnimation(0, anim[this.animID], true);
        } // update (deltaTime: number) {
        //     // Your update function goes here.
        // }
        ;

        return SpineSkin;
      }(Component), _temp), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "spine", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LoadSpine.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, loader, sp, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      loader = module.loader;
      sp = module.sp;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _temp;

      cclegacy._RF.push({}, "c17afOJ5PBHxIigUOVBfvPh", "LoadSpine", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var LoadSpine = exports('LoadSpine', (_dec = ccclass('LoadSpine'), _dec2 = property({
        type: Label
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LoadSpine, _Component);

        function LoadSpine() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "tips", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = LoadSpine.prototype;

        _proto.start = function start() {
          var _this2 = this; // Your initialization goes here.


          loader.loadRes("spine/alien/alien-pro", sp.SkeletonData, function (err, spineAsset) {
            if (err) {
              _this2.tips.string = "Failed to load asset";
              return;
            }

            var comp = _this2.getComponent('sp.Skeleton');

            comp.skeletonData = spineAsset;
            var ani = comp.setAnimation(0, 'run', true);
            _this2.tips.string = 'Load Success';
          });
        } // update (deltaTime: number) {
        //     // Your update function goes here.
        // }
        ;

        return LoadSpine;
      }(Component), _temp), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "tips", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SpineCollider.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _inheritsLoose, _defineProperty, _assertThisInitialized, cclegacy, _decorator, PhysicsSystem2D, Contact2DType, EPhysics2DDrawFlags, Sprite, Color, Component;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _defineProperty = module.defineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      PhysicsSystem2D = module.PhysicsSystem2D;
      Contact2DType = module.Contact2DType;
      EPhysics2DDrawFlags = module.EPhysics2DDrawFlags;
      Sprite = module.Sprite;
      Color = module.Color;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class, _temp;

      cclegacy._RF.push({}, "dc74fi10upIPZ9ydQe0eazG", "SpineCollider", undefined);

      var ccclass = _decorator.ccclass;
      var SpineCollider = exports('SpineCollider', (_dec = ccclass('SpineCollider'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SpineCollider, _Component);

        function SpineCollider() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "touchingCountMap", new Map());

          _defineProperty(_assertThisInitialized(_this), "debugDrawFlags", 0);

          return _this;
        }

        var _proto = SpineCollider.prototype;

        _proto.start = function start() {
          // Your initialization goes here.
          PhysicsSystem2D.instance.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          PhysicsSystem2D.instance.on(Contact2DType.END_CONTACT, this.onEndContact, this);
          this.debugDrawFlags = PhysicsSystem2D.instance.debugDrawFlags;
        };

        _proto.onEnable = function onEnable() {
          PhysicsSystem2D.instance.debugDrawFlags = this.debugDrawFlags | EPhysics2DDrawFlags.Shape;
        };

        _proto.onDisable = function onDisable() {
          PhysicsSystem2D.instance.debugDrawFlags = this.debugDrawFlags;
        };

        _proto.addContact = function addContact(c) {
          var count = this.touchingCountMap.get(c.node) || 0;
          this.touchingCountMap.set(c.node, ++count);
          var sprite = c.getComponent(Sprite);

          if (sprite) {
            sprite.color = Color.RED;
          }
        };

        _proto.removeContact = function removeContact(c) {
          var count = this.touchingCountMap.get(c.node) || 0;
          --count;

          if (count <= 0) {
            this.touchingCountMap["delete"](c.node);
            var sprite = c.getComponent(Sprite);

            if (sprite) {
              sprite.color = Color.WHITE;
            }
          } else {
            this.touchingCountMap.set(c.node, count);
          }
        };

        _proto.onBeginContact = function onBeginContact(a, b) {
          this.addContact(a);
          this.addContact(b);
        };

        _proto.onEndContact = function onEndContact(a, b) {
          this.removeContact(a);
          this.removeContact(b);
        };

        return SpineCollider;
      }(Component), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./SpineChange-animCat.ts', './SpineAttach.ts', './SpineChange-anim.ts', './SpineSkin.ts', './SpineMeshEffect.ts', './SpineChange.ts', './SpineBoyCtrl.ts', './SpineSkin-single.ts', './SpineSkin-anim.ts', './LoadSpine.ts', './SpineCollider.ts'], function () {
  'use strict';

  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});