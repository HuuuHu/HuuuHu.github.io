System.register("chunks:///_virtual/CameraControl.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, input, Input, KeyCode, v3, Quat, Vec3, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      input = module.input;
      Input = module.Input;
      KeyCode = module.KeyCode;
      v3 = module.v3;
      Quat = module.Quat;
      Vec3 = module.Vec3;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _temp;

      cclegacy._RF.push({}, "ea86aSvDqNMv5UNM6hqhSe0", "CameraControl", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      /**
       * Predefined variables
       * Name = Caner_a
       * DateTime = Mon May 09 2022 02:47:47 GMT+0800 (中国标准时间)
       * Author = MrHu
       * FileBasename = Caner a.ts
       * FileBasenameNoExtension = Caner a
       * URL = db://assets/script/Caner a.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
       *
       */

      var CameraControl = exports('CameraControl', (_dec = ccclass('CameraControl'), _dec2 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CameraControl, _Component);

        function CameraControl() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "rotateTarget", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "speed", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = CameraControl.prototype;

        _proto.onLoad = function onLoad() {
          input.on(Input.EventType.KEY_PRESSING, this.onKeyPressing, this);
        };

        _proto.onDestroy = function onDestroy() {
          input.off(Input.EventType.KEY_PRESSING, this.onKeyPressing, this);
        } // start () {
        // [3]
        // }
        // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        _proto.onKeyPressing = function onKeyPressing(event) {
          switch (event.keyCode) {
            case KeyCode.KEY_A:
              // console.log('Press a key');
              this.leftRotate();
              break;

            case KeyCode.KEY_D:
              // console.log('Press d key');
              this.rightRotate();
              break;
            // case KeyCode.KEY_W:
            //     console.log('Press w key');
            //     this.upRotate();
            //     break;
            // case KeyCode.KEY_D:
            //     console.log('Press d key');
            //     this.downRotate();
            //     break;
          }
        };

        _proto.aroundTarget = function aroundTarget(event) {
          var delta = event.getDelta();
          var speed = 0.002;
          var horizontal = delta.x * speed;
          var vertical = delta.y * speed; // 计算水平方向的偏移量

          this.rotateAround(this.node, this.rotateTarget.worldPosition, v3(0, 1, 0), horizontal); // 计算垂直方向的偏移量

          this.rotateAround(this.node, this.rotateTarget.worldPosition, v3(-1, 0, 0), vertical); // console.log("rotate");
        };

        _proto.rotateAround = function rotateAround(node, point, axis, angle) {
          // 根据旋转轴和旋转角度构建四元数
          var quat = new Quat();
          Quat.fromAxisAngle(quat, axis, angle); // 计算旋转后的位置

          var position = v3();
          Vec3.subtract(position, node.worldPosition, point);
          Vec3.transformQuat(position, position, quat);
          Vec3.add(position, point, position); // 根据旋转后的位置计算四元数

          var dir = v3();
          Vec3.subtract(dir, position, this.rotateTarget.worldPosition);
          var rotation = new Quat();
          Quat.fromViewUp(rotation, dir.normalize(), Vec3.UP); // 根据四元数计算欧拉角 判断是否在需要的范围内
          // let euler = v3();
          // rotation.getEulerAngles(euler);
          // if (euler.x < -40 || euler.x > -10) {
          //     return;
          // }
          // 设置位置及旋转

          node.setWorldPosition(position);
          node.setWorldRotation(rotation);
        };

        _proto.leftRotate = function leftRotate() {
          console.log("leftRotate");
          this.rotateAround(this.node, this.rotateTarget.worldPosition, v3(0, 1, 0), -this.speed);
        };

        _proto.rightRotate = function rightRotate() {
          console.log("rightRotate");
          this.rotateAround(this.node, this.rotateTarget.worldPosition, v3(0, 1, 0), this.speed);
        } // upRotate(){
        //     console.log("upRotate");
        //     this.rotateAround(this.node, this.rotateTarget.worldPosition, v3(-1, 0, 0), -this.speed);
        // }
        // downRotate(){
        //     console.log("downRotate");
        //     this.rotateAround(this.node, this.rotateTarget.worldPosition, v3(-1, 0, 0), this.speed);
        // }
        ;

        return CameraControl;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "rotateTarget", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "speed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1.0;
        }
      })), _class2)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/zh/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/zh/scripting/decorator.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/zh/scripting/life-cycle-callbacks.html
       */

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./CameraControl.ts'], function () {
  'use strict';

  return {
    setters: [null],
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