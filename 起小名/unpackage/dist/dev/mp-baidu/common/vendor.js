(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],{

/***/ "./node_modules/@dcloudio/uni-mp-baidu/dist/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-baidu/dist/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createPage = createPage;exports.createComponent = createComponent;exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/megalo/dist/megalo.mp.esm.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var SYNC_API_RE = /requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$/;

var CONTEXT_API_RE = /^create|Manager$/;

var CALLBACK_API_RE = /^on/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name);
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name);
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name);
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {params[_key - 1] = arguments[_key];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return api.apply(void 0, [options].concat(params));
    }
    return handlePromise(new Promise(function (resolve, reject) {
      api.apply(void 0, [Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
      /* eslint-disable no-extend-native */
      Promise.prototype.finally = function (callback) {
        var promise = this.constructor;
        return this.then(
        function (value) {return promise.resolve(callback()).then(function () {return value;});},
        function (reason) {return promise.resolve(callback()).then(function () {
            throw reason;
          });});

      };
    }));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _swan$getSystemInfoSy =




  swan.getSystemInfoSync(),platform = _swan$getSystemInfoSy.platform,pixelRatio = _swan$getSystemInfoSy.pixelRatio,windowWidth = _swan$getSystemInfoSy.windowWidth; // uni=>swan runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      return 1;
    } else {
      return 0.5;
    }
  }
  return number < 0 ? -result : result;
}

// 不支持的 API 列表
var TODOS = [
'hideKeyboard',
'onGyroscopeChange',
'startGyroscope',
'stopGyroscope',
'openBluetoothAdapter',
'startBluetoothDevicesDiscovery',
'onBluetoothDeviceFound',
'stopBluetoothDevicesDiscovery',
'onBluetoothAdapterStateChange',
'getConnectedBluetoothDevices',
'getBluetoothDevices',
'getBluetoothAdapterState',
'closeBluetoothAdapter',
'writeBLECharacteristicValue',
'readBLECharacteristicValue',
'onBLEConnectionStateChange',
'onBLECharacteristicValueChange',
'notifyBLECharacteristicValueChange',
'getBLEDeviceServices',
'getBLEDeviceCharacteristics',
'createBLEConnection',
'closeBLEConnection',
'onBeaconServiceChange',
'onBeaconUpdate',
'getBeacons',
'startBeaconDiscovery',
'stopBeaconDiscovery',
'hideShareMenu',
'onWindowResize',
'offWindowResize'];


function createTodoMethod(contextName, methodName) {
  return function unsupported() {
    console.error("\u767E\u5EA6\u5C0F\u7A0B\u5E8F ".concat(contextName, "\u6682\u4E0D\u652F\u6301").concat(methodName));
  };
}
// 需要做转换的 API 列表
var protocols = {
  request: {
    args: function args(fromArgs) {
      // TODO
      // data 不支持 ArrayBuffer
      // method 不支持 TRACE, CONNECT
      // dataType 可取值为 string/json
      return {
        method: 'method' };

    } },

  connectSocket: {
    args: {
      method: false } },


  previewImage: {
    args: {
      indicator: false,
      loop: false } },


  getRecorderManager: {
    returnValue: function returnValue(fromRet) {
      fromRet.onFrameRecorded = createTodoMethod('RecorderManager', 'onFrameRecorded');
    } },

  getBackgroundAudioManager: {
    returnValue: function returnValue(fromRet) {
      fromRet.onPrev = createTodoMethod('BackgroundAudioManager', 'onPrev');
      fromRet.onNext = createTodoMethod('BackgroundAudioManager', 'onNext');
    } },

  scanCode: {
    args: {
      onlyFromCamera: false,
      scanType: false } },


  navigateToMiniProgram: {
    name: 'navigateToSmartProgram',
    args: {
      appId: 'appKey',
      envVersion: false } },


  navigateBackMiniProgram: {
    name: 'navigateBackSmartProgram' },

  showShareMenu: {
    name: 'openShare' } };



TODOS.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// 不支持的参数
          console.warn("\u767E\u5EA6\u5C0F\u7A0B\u5E8F ".concat(methodName, "\u6682\u4E0D\u652F\u6301").concat(key));
        } else if (isStr(keyOption)) {// 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// 暂不支持的 api
      return function () {
        console.error("\u767E\u5EA6\u5C0F\u7A0B\u5E8F \u6682\u4E0D\u652F\u6301".concat(methodName));
      };
    }
    return function (arg1, arg2) {// 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var returnValue = swan[options.name || methodName](arg1, arg2);
      if (isSyncApi(methodName)) {// 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS$1 = [
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail:\u6682\u4E0D\u652F\u6301 ").concat(name, " \u65B9\u6CD5") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS$1.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['baidu'],
  share: ['baidu'],
  payment: ['baidu'],
  push: ['baidu'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail:服务[' + service + ']不存在' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  getProvider: getProvider });


function requestPayment(params) {
  var parseError = false;
  if (typeof params.orderInfo === 'string') {
    try {
      params.orderInfo = JSON.parse(params.orderInfo);
    } catch (e) {
      parseError = true;
    }
  }
  if (parseError) {
    params.fail && params.fail({
      errMsg: 'requestPayment:fail: 参数 orderInfo 数据结构不正确，参考：https://uniapp.dcloud.io/api/plugins/payment?id=orderinfo' });

  } else {
    swan.requestPolymerPayment(params);
  }
}

var api = /*#__PURE__*/Object.freeze({
  requestPayment: requestPayment });


var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  var oldTriggerEvent = mpInstance.triggerEvent;
  mpInstance.triggerEvent = function (event) {for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {args[_key2 - 1] = arguments[_key2];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
}

Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var name = 'onLoad';
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {args[_key3] = arguments[_key3];}
      return oldHook.apply(this, args);
    };
  }
  return MPPage(options);
};

var behavior = Behavior({
  created: function created() {
    initTriggerEvent(this);
  } });


Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  (options.behaviors || (options.behaviors = [])).unshift(behavior);
  return MPComponent(options);
};

var mocks = ['nodeId'];

function initPage(pageOptions) {
  initComponent(pageOptions);
}

function initComponent(componentOptions) {
  componentOptions.messages = {
    '__l': handleLink };

}

function triggerLink(mpInstance, vueOptions) {
  mpInstance.dispatch('__l', mpInstance.$vm || vueOptions);
}

function handleLink(event) {
  var target = event.value;
  if (target.$mp) {
    if (!target.$parent) {
      target.$parent = this.$vm;
      target.$parent.$children.push(target);

      target.$root = this.$vm.$root;
    }
  } else {
    if (!target.parent) {
      target.parent = this.$vm;
    }
  }
}

function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function initHooks(mpOptions, hooks) {
  hooks.forEach(function (hook) {
    mpOptions[hook] = function (args) {
      return this.$vm.__call_hook(hook, args);
    };
  });
}

function getData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"VUE_APP_PLATFORM":"mp-baidu","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function getBehaviors(vueOptions) {
  var vueBehaviors = vueOptions['behaviors'];
  var vueExtends = vueOptions['extends'];
  var vueMixins = vueOptions['mixins'];

  var vueProps = vueOptions['props'];

  if (!vueProps) {
    vueOptions['props'] = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "swan".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps['name'] = String;
          vueProps['value'] = null;
        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    Behavior({
      properties: getProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        Behavior({
          properties: getProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  {
    if (
    defaultValue === false &&
    Array.isArray(type) &&
    type.length === 2 &&
    type.indexOf(String) !== -1 &&
    type.indexOf(Boolean) !== -1)
    {// [String,Boolean]=>Boolean
      if (file) {
        console.warn("props.".concat(
        key, ".type should use Boolean instead of [String,Boolean] at ").concat(file));

      }
      return Boolean;
    }
  }
  return type;
}

function getProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var properties = {};
  if (!isBehavior) {
    properties.vueSlots = { // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts['default'];
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type, value, file);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts, null, file);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  {// mp-baidu，checked=>value
    if (
    isPlainObject(event.detail) &&
    hasOwn(event.detail, 'checked') &&
    !hasOwn(event.detail, 'value'))
    {
      event.detail.value = event.detail.checked;
    }
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor = dataPath ? vm.__get_value(dataPath, context) : context;

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                                  *[
                                                  *    ['data.items', 'data.id', item.data.id],
                                                  *    ['metas', 'id', meta.id]
                                                  *],
                                                  *[
                                                  *    ['data.items', 'data.id', item.data.id],
                                                  *    ['metas', 'id', meta.id]
                                                  *],
                                                  *'test'
                                                  */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象
  if (isCustom) {// 自定义事件
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function handleEvent(event) {var _this = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var eventOpts = (event.currentTarget || event.target).dataset.eventOpts;
  if (!eventOpts) {
    return console.warn("\u4E8B\u4EF6\u4FE1\u606F\u4E0D\u5B58\u5728");
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;
  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && eventType === type) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handler = _this.$vm[methodName];
          if (!isFn(handler)) {
            throw new Error(" _vm.".concat(methodName, " is not a function"));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          handler.apply(_this.$vm, processEventArgs(
          _this.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName));

        }
      });
    }
  });
}

function initRefs(vm) {
  var mpInstance = vm.$mp[vm.mpType];
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      var components = mpInstance.selectAllComponents('.vue-ref');
      components.forEach(function (component) {
        var ref = component.dataset.ref;
        $refs[ref] = component.$vm || component;
      });
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || component);
      });
      return $refs;
    } });

}

function baiduComponentDestroy($vm) {
  $vm.$children.forEach(function (childVm) {
    childVm.$mp.component.detached();
  });
  $vm.$mp.component.detached();
}

function baiduPageDestroy($vm) {
  $vm.$destroy();
  $vm.$children.forEach(function (childVm) {
    baiduComponentDestroy(childVm);
  });
}

var hooks = [
'onHide',
'onError',
'onPageNotFound',
'onUniNViewMessage'];


function initVm(vm) {
  if (this.$vm) {// 百度竟然 onShow 在 onLaunch 之前？
    return;
  }

  this.$vm = vm;

  this.$vm.$mp = {
    app: this };

}

function createApp(vm) {
  // 外部初始化时 Vue 还未初始化，放到 createApp 内部初始化 mixin
  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }
      this.mpType = this.$options.mpType;
      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);

      delete this.$options.mpType;
      delete this.$options.mpInstance;

      if (this.mpType !== 'app') {
        {// 头条的 selectComponent 竟然是异步的
          initRefs(this);
        }
        initMocks(this, mocks);
      }
    },
    created: function created() {// 处理 injections
      this.__init_injections(this);
      this.__init_provide(this);
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      initVm.call(this, vm);

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted');

      this.$vm.__call_hook('onLaunch', args);
    },
    onShow: function onShow(args) {
      initVm.call(this, vm);

      this.$vm.__call_hook('onShow', args);
    } };


  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};

  initHooks(appOptions, hooks); // 延迟执行，因为 App 的注册在 main.js 之前，可能导致生命周期内 Vue 原型上开发者注册的属性无法访问

  App(appOptions);

  return vm;
}

var hooks$1 = [
'onShow',
'onHide',
'onPullDownRefresh',
'onReachBottom',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap',
'onBackPress',
'onNavigationBarButtonTap',
'onNavigationBarSearchInputChanged',
'onNavigationBarSearchInputConfirmed',
'onNavigationBarSearchInputClicked'];


function initVm$1(VueComponent) {// 百度的 onLoad 触发在 attached 之前
  if (this.$vm) {
    return;
  }

  this.$vm = new VueComponent({
    mpType: 'page',
    mpInstance: this });


  {
    this.$vm.$baiduComponentInstances = Object.create(null);
  }

  this.$vm.__call_hook('created');
  this.$vm.$mount();
}

function createPage(vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
    vueOptions = VueComponent.extendOptions;
  } else {
    VueComponent = _vue.default.extend(vueOptions);
  }
  var pageOptions = {
    options: {
      multipleSlots: true,
      addGlobalClass: true },

    data: getData(vueOptions, _vue.default.prototype),
    lifetimes: { // 当页面作为组件时
      attached: function attached() {
        initVm$1.call(this, VueComponent);
      },
      ready: function ready() {
        this.$vm.__call_hook('beforeMount');
        this.$vm._isMounted = true;
        this.$vm.__call_hook('mounted');
        this.$vm.__call_hook('onReady');
      },
      detached: function detached() {
        this.$vm.$destroy();
      } },

    methods: { // 作为页面时
      onLoad: function onLoad(args) {
        initVm$1.call(this, VueComponent);
        {// 百度当组件作为页面时 pageinstancce 不是原来组件的 instance
          this.pageinstance.$vm = this.$vm;
        }
        this.$vm.$mp.query = args; // 又要兼容 mpvue
        this.$vm.__call_hook('onLoad', args); // 开发者可能会在 onLoad 时赋值，提前到 mount 之前
      },
      onUnload: function onUnload() {
        this.$vm.__call_hook('onUnload');
        {// 百度组件不会在页面 unload 时触发 detached
          baiduPageDestroy(this.$vm);
        }
      },
      __e: handleEvent,
      __l: handleLink } };



  initHooks(pageOptions.methods, hooks$1);

  initPage(pageOptions);

  return Component(pageOptions);
}

function initVm$2(VueComponent) {
  if (this.$vm) {
    return;
  }

  var options = {
    mpType: 'component',
    mpInstance: this,
    propsData: this.properties };

  // 初始化 vue 实例
  this.$vm = new VueComponent(options);

  // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
  var vueSlots = this.properties.vueSlots;
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    this.$vm.$scopedSlots = this.$vm.$slots = $slots;
  }
  // 性能优先，mount 提前到 attached 中，保证组件首次渲染数据被合并
  // 导致与标准 Vue 的差异，data 和 computed 中不能使用$parent，provide等组件属性
  this.$vm.$mount();
}

function createComponent(vueOptions) {
  vueOptions = vueOptions.default || vueOptions;

  var behaviors = getBehaviors(vueOptions);

  var properties = getProperties(vueOptions.props, false, vueOptions.__file);

  var VueComponent = _vue.default.extend(vueOptions);

  var componentOptions = {
    options: {
      multipleSlots: true,
      addGlobalClass: true },

    data: getData(vueOptions, _vue.default.prototype),
    behaviors: behaviors,
    properties: properties,
    lifetimes: {
      attached: function attached() {
        initVm$2.call(this, VueComponent);
      },
      ready: function ready() {
        initVm$2.call(this, VueComponent); // 目前发现部分情况小程序 attached 不触发
        triggerLink(this); // 处理 parent,children

        // 补充生命周期
        this.$vm.__call_hook('created');
        this.$vm.__call_hook('beforeMount');
        this.$vm._isMounted = true;
        this.$vm.__call_hook('mounted');
        this.$vm.__call_hook('onReady');
      },
      detached: function detached() {
        this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __e: handleEvent,
      __l: handleLink } };



  initComponent(componentOptions);

  return Component(componentOptions);
}

var uni = {};

if (typeof Proxy !== 'undefined') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (name === 'upx2px') {
        return upx2px;
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (!hasOwn(swan, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, swan[name]));
    } });

} else {
  uni.upx2px = upx2px;

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(swan).forEach(function (name) {
    if (hasOwn(swan, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, swan[name]));
    }
  });
}

var uni$1 = uni;var _default =

uni$1;exports.default = _default;

/***/ }),

/***/ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/megalo/dist/megalo.mp.esm.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/megalo/dist/megalo.mp.esm.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, wx) {// fix env
try {
  if (!global) global = {};
  global.process = global.process || {};
  global.process.env = global.process.env || {};
  global.App = global.App || App;
  global.Page = global.Page || Page;
  global.Component = global.Component || Component;
  global.getApp = global.getApp || getApp;
} catch (e) {}

(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

/*  */

var emptyObject = Object.freeze({});

// these helpers produces better vm code in JS engines due to their
// explicitness and function inlining
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value e.g. [object Object]
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : typeof val === 'object'
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if a attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether the object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it... e.g.
 * PhantomJS 1.x. Technically we don't need this anymore since native bind is
 * now more performant in most browsers, but removing it would be breaking for
 * code that was able to run in PhantomJS 1.x, so this must be kept for
 * backwards compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/**
 * Return same value
 */
var identity = function (_) { return _; };

/**
 * Generate a static keys string from compiler modules.
 */


/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured'
];

/*  */

var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "production" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "production" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
})

/*  */

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w.$]/;
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined' && window.navigator;//fixed by xxxxxx 百度2.10.24 window 为 function
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;


if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = (function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;

 // work around flow check

/*  */


var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;
var targetStack = [];

function pushTarget (_target) {
  if (Dep.target) { targetStack.push(Dep.target); }
  Dep.target = _target;
}

function popTarget () {
  Dep.target = targetStack.pop();
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    vnode.children,
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    var augment = hasProto
      ? protoAugment
      : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src, keys) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  if (!getter && arguments.length === 2) {
    val = obj[key];
  }
  var setter = property && property.set;

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;
  var keys = Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  return childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "production" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};



/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else {}
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else {}
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else {}
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);
  var extendsFrom = child.extends;
  if (extendsFrom) {
    parent = mergeOptions(parent, extendsFrom, vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      parent = mergeOptions(parent, child.mixins[i], vm);
    }
  }
  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  return res
}

/*  */

function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

/*  */

function handleError (err, vm, info) {
  if (vm) {
    var cur = vm;
    while ((cur = cur.$parent)) {
      var hooks = cur.$options.errorCaptured;
      if (hooks) {
        for (var i = 0; i < hooks.length; i++) {
          try {
            var capture = hooks[i].call(cur, err, vm, info) === false;
            if (capture) { return }
          } catch (e) {
            globalHandleError(e, cur, 'errorCaptured hook');
          }
        }
      }
    }
  }
  globalHandleError(err, vm, info);
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      logError(e, null, 'config.errorHandler');
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */
/* globals MessageChannel */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using both microtasks and (macro) tasks.
// In < 2.4 we used microtasks everywhere, but there are some scenarios where
// microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690) or even between bubbling of the same
// event (#6566). However, using (macro) tasks everywhere also has subtle problems
// when state is changed right before repaint (e.g. #6813, out-in transitions).
// Here we use microtask by default, but expose a way to force (macro) task when
// needed (e.g. in event handlers attached by v-on).
var microTimerFunc;
var macroTimerFunc;
var useMacroTask = false;

// Determine (macro) task defer implementation.
// Technically setImmediate should be the ideal choice, but it's only available
// in IE. The only polyfill that consistently queues the callback after all DOM
// events triggered in the same loop is by using MessageChannel.
/* istanbul ignore if */
//fixed by xxxxxx
if (typeof MessageChannel !== 'undefined' && (
  isNative(MessageChannel) ||
  // PhantomJS
  MessageChannel.toString() === '[object MessageChannelConstructor]'
)) {
  var channel = new MessageChannel();
  var port = channel.port2;
  channel.port1.onmessage = flushCallbacks;
  macroTimerFunc = function () {
    port.postMessage(1);
  };
} else {
  /* istanbul ignore next */
  macroTimerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

// Determine microtask defer implementation.
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  microTimerFunc = function () {
    p.then(flushCallbacks);
    // in problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else {
  // fallback to macro
  microTimerFunc = macroTimerFunc;
}

/**
 * Wrap a function so that if any code inside triggers state change,
 * the changes are queued using a (macro) task instead of a microtask.
 */


function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    if (useMacroTask) {
      macroTimerFunc();
    } else {
      microTimerFunc();
    }
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        cloned[i].apply(null, arguments$1);
      }
    } else {
      // return handler return value for single handlers
      return fns.apply(null, arguments)
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  vm
) {
  var name, def, cur, old, event;
  for (name in on) {
    def = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    /* istanbul ignore if */
    if (isUndef(cur)) {
      
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur);
      }
      add(event.name, cur, event.once, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor,
  context
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (isDef(factory.contexts)) {
    // already pending
    factory.contexts.push(context);
  } else {
    var contexts = factory.contexts = [context];
    var sync = true;

    var forceRender = function () {
      for (var i = 0, l = contexts.length; i < l; i++) {
        contexts[i].$forceUpdate();
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender();
      }
    });

    var reject = once(function (reason) {
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender();
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (typeof res.then === 'function') {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isDef(res.component) && typeof res.component.then === 'function') {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            setTimeout(function () {
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender();
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          setTimeout(function () {
            if (isUndef(factory.resolved)) {
              reject(
                null
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn, once) {
  if (once) {
    target.$once(event, fn);
  } else {
    target.$on(event, fn);
  }
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var this$1 = this;

    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var this$1 = this;

    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$off(event[i], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    if (fn) {
      // specific handler
      var cb;
      var i$1 = cbs.length;
      while (i$1--) {
        cb = cbs[i$1];
        if (cb === fn || cb.fn === fn) {
          cbs.splice(i$1, 1);
          break
        }
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        try {
          cbs[i].apply(vm, args);
        } catch (e) {
          handleError(e, vm, ("event handler for \"" + event + "\""));
        }
      }
    }
    return vm
  };
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  var slots = {};
  if (!children) {
    return slots
  }
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

function resolveScopedSlots (
  fns, // see flow/vnode
  res
) {
  res = res || {};
  for (var i = 0; i < fns.length; i++) {
    if (Array.isArray(fns[i])) {
      resolveScopedSlots(fns[i], res);
    } else {
      res[fns[i].key] = fns[i].fn;
    }
  }
  return res
}

/*  */

var activeInstance = null;


function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    if (vm._isMounted) {
      callHook(vm, 'beforeUpdate');
    }
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(
        vm.$el, vnode, hydrating, false /* removeOnly */,
        vm.$options._parentElm,
        vm.$options._refElm
      );
      // no need for the ref nodes after initial patch
      // this prevents keeping a detached DOM tree in memory (#5851)
      vm.$options._parentElm = vm.$options._refElm = null;
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    activeInstance = prevActiveInstance;
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, null, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  var hasChildren = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    parentVnode.data.scopedSlots || // has new scoped slots
    vm.$scopedSlots !== emptyObject // has old scoped slots
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (hasChildren) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm);
      } catch (e) {
        handleError(e, vm, (hook + " hook"));
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */




var queue = [];
var activatedChildren = [];
var has = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */

var uid$1 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$1; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression = '';
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = function () {};
      
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    var dep = this$1.deps[i];
    if (!this$1.newDepIds.has(dep.id)) {
      dep.removeSub(this$1);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    this$1.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
    var this$1 = this;

  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].removeSub(this$1);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    {
      defineReactive(props, key, value);
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (props && hasOwn(props, key)) {
      
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else {}
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : userDef;
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : userDef.get
      : noop;
    sharedPropertyDefinition.set = userDef.set
      ? userDef.set
      : noop;
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      {
        defineReactive(vm, key, result[key]);
      }
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject).filter(function (key) {
        /* istanbul ignore next */
        return Object.getOwnPropertyDescriptor(inject, key).enumerable
      })
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else {}
      }
    }
    return result
  }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    keys = Object.keys(val);
    ret = new Array(keys.length);
    for (i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      ret[i] = render(val[key], key, i);
    }
  }
  if (isDef(ret)) {
    (ret)._isVList = true;
  }
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    var slotNodes = this.$slots[name];
    // warn duplicate slot usage
    if (slotNodes) {
      slotNodes._rendered = true;
    }
    nodes = slotNodes || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
      
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        if (!(key in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () { return resolveSlots(children, parent); };

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = data.scopedSlots || emptyObject;
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */




// Register the component hook to weex native render engine.
// The hook will be triggered by native, not javascript.


// Updates the state of the component to weex native render engine.

/*  */

// https://github.com/Hanks10100/weex-native-directive/tree/master/component

// listening on native callback

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (
    vnode,
    hydrating,
    parentElm,
    refElm
  ) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance,
        parentElm,
        refElm
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  // Weex specific: invoke recycle-list optimized @render function for
  // extracting cell-slot template.
  // https://github.com/Hanks10100/weex-native-directive/tree/master/component
  /* istanbul ignore if */
  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent, // activeInstance in lifecycle state
  parentElm,
  refElm
) {
  var options = {
    _isComponent: true,
    parent: parent,
    _parentVnode: vnode,
    _parentElm: parentElm || null,
    _refElm: refElm || null
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    hooks[key] = componentVNodeHooks[key];
  }
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  if (isDef(on[event])) {
    on[event] = [data.model.callback].concat(on[event]);
  } else {
    on[event] = data.model.callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  {
    defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, null, true);
    defineReactive(vm, '$listeners', options._parentListeners || emptyObject, null, true);
  }
}

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    // reset _rendered flag on slots for duplicate slot check
    if (_parentVnode) {
      vm.$scopedSlots = _parentVnode.data.scopedSlots || emptyObject;
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      {
        vnode = vm._vnode;
      }
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    {
      vm._renderProxy = vm;
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;
  opts._parentElm = options._parentElm;
  opts._refElm = options._refElm;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var extended = Ctor.extendOptions;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = dedupe(latest[key], extended[key], sealed[key]);
    }
  }
  return modified
}

function dedupe (latest, extended, sealed) {
  // compare latest and sealed to ensure lifecycle hooks won't be duplicated
  // between merges
  if (Array.isArray(latest)) {
    var res = [];
    sealed = Array.isArray(sealed) ? sealed : [sealed];
    extended = Array.isArray(extended) ? extended : [extended];
    for (var i = 0; i < latest.length; i++) {
      // push original options and not sealed options to exclude duplicated options
      if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
        res.push(latest[i]);
      }
    }
    return res
  } else {
    return latest
  }
}

function Vue (options) {
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */

function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    var this$1 = this;

    for (var key in this$1.cache) {
      pruneCacheEntry(this$1.cache, key, this$1.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
}

var builtInComponents = {
  KeepAlive: KeepAlive
}

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.5.17';//fixed by xxxxxx

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  // let parentNode = vnode
  // let childNode = vnode
  // while (isDef(childNode.componentInstance)) {
  //   childNode = childNode.componentInstance._vnode
  //   if (childNode && childNode.data) {
  // data = mergeClassData(childNode.data, data)
  // }
  // }
  // while (isDef(parentNode = parentNode.parent)) {
  // if (parentNode && parentNode.data) {
  // data = mergeClassData(data, parentNode.data)
  // }
  // }
  // mp: no need to update static class
  return renderClass(data.class)
}

// function mergeClassData (child: VNodeData, parent: VNodeData): {
//   staticClass: string,
//   class: any
// } {
//   return {
//     staticClass: concat(child.staticClass, parent.staticClass),
//     class: isDef(child.class)
//       ? [child.class, parent.class]
//       : parent.class
//   }
// }

function renderClass (
  dynamicClass
) {
  if (isDef(dynamicClass)) {
    return concat(stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/**
 * 频率控制 返回函数连续调用时，func 执行频率限定为 次 / wait
 *
 * @param  {function}   func      传入函数
 * @param  {number}     wait      表示时间窗口的间隔
 * @param  {object}     [options] 如果想忽略开始边界上的调用，传入{leading: false}。
 * @param  {boolean}    [options.leading=true] 如果想忽略开始边界上的调用，传入{leading: false}。
 * @param  {number|boolean}    [options.leadingDelay=false] 开始边界上的调用延时，传入{leadingDelay: 0}。
 * @param  {boolean}    [options.trailing=true] 如果想忽略结尾边界上的调用，传入{trailing: false}
 *
 * @return {Function}
 *
 * @example
 * const throttleCallback = throttle(callback, 100);
 *
 */
function throttle (func, wait, options) {
  if ( options === void 0 ) options = {};

  var context, args, result;
  var timeout = null;
  var leadingDelay = options.leadingDelay === undefined ? false : options.leadingDelay;
  // 上次执行时间点
  var previous = 0;
  // 延迟执行函数
  var later = function () {
    // 若设定了开始边界不执行选项，上次执行时间始终为0
    previous = options.leading === false ? 0 : (+new Date());
    timeout = null;
    // $flow-disable-line
    result = func.apply(context, args);
    if (!timeout) {
      context = args = null;
    }
  };
  return function () {
    var now = (+new Date());
    // 首次执行时，如果设定了开始边界不执行选项，将上次执行时间设定为当前时间。
    if (!previous && options.leading === false) {
      previous = now;
    }
    // 延迟执行时间间隔
    var remaining = wait - (now - previous);
    context = this;
        args = arguments; // eslint-disable-line
    // 延迟时间间隔remaining小于等于0，表示上次执行至此所间隔时间已经超过一个时间窗口
    // remaining大于时间窗口wait，表示客户端系统时间被调整过
    if (remaining <= 0 || remaining > wait) {
      clearTimeout(timeout);
      timeout = null;
      previous = now;
      if (leadingDelay === false) {
        result = func.apply(context, args);
      } else {
        setTimeout(function () {
          result = func.apply(context, args);
        }, leadingDelay);
      }
      if (!timeout) {
        context = args = null;
      }
      // 如果延迟执行不存在，且没有设定结尾边界不执行选项
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result
  }
}

function aop (fn, options) {
  if ( options === void 0 ) options = {};

  var before = options.before;
  var after = options.after;
  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var self = this;

    if (before) {
      before.call.apply(before, [ self, args ].concat( args ));
    }

    var ret = fn.call.apply(fn, [ self ].concat( args ));

    if (after) {
      after.call.apply(after, [ self, ret ].concat( args, [ret] ));
    }

    return ret
  }
}

var Buffer = function Buffer () {
  this.buff = {};
};

Buffer.prototype.push = function push (data) {
  Object.assign(this.buff, data);
};

Buffer.prototype.pop = function pop () {
  var data = Object.assign({}, this.buff);
  this.buff = {};
  return data
};

Buffer.prototype.isEqual = function isEqual (key, value) {
  return this.buff[key] !== undefined && this.buff[key] === value
};
//fixed by xxxxxx 调整识别顺序 alipay,swan,tt,wechat
function getMPPlatform () {
  var platform = '';
  try {
    /* eslint-disable */
    if (!platform && my) {
      platform = 'alipay';
    }
    /* eslint-enable */
  } catch (e) {}
  try {
    /* eslint-disable */
    if (!platform && swan) {
      platform = 'swan';
    }
    /* eslint-enable */
  } catch (e) {}
  try {
    /* eslint-disable */
    if (!platform && tt) {
      platform = 'tt';
    }
    /* eslint-enable */
  } catch (e) {}
  try {
  	/* eslint-disable */
  	if (!platform && wx) {
  		platform = 'wechat';
  	}
  	/* eslint-enable */
  } catch (e) {}
  return platform || 'unknown'
}

var ROOT_DATA_VAR = '$root';
var HOLDER_VAR = 'h';

var VM_ID_VAR = 'c';
var VM_ID_PREFIX = 'cp';

var VM_ID_SEP = 'v';

var SLOT_CONTEXT_ID_VAR = 's';

var LIST_TAIL_SEPS = {
  swan: '_',
  wechat: '-',
  alipay: '-',
  tt:'-'//fixed by xxxxxx
};


var HOLDER_TYPE_VARS = {
  text: 't',
  vtext: 'vt',
  if: '_if',
  for: 'li',
  class: 'cl',
  rootClass: 'rcl',
  style: 'st',
  value: 'value',
  vhtml: 'html',
  vshow: 'vs',
  slot: 'slot'
};

var notEmpty = function (e) { return !!e; };


var isReservedTag = makeMap(
  'template,script,style,element,content,slot,link,meta,svg,view,' +
  'a,div,img,image,text,span,richtext,input,switch,textarea,spinner,select,' +
  'slider,slider-neighbor,indicator,trisition,trisition-group,canvas,' +
  'list,cell,header,loading,loading-indicator,refresh,scrollable,scroller,' +
  'video,web,embed,tabbar,tabheader,datepicker,timepicker,marquee,countdown',
  true
);

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// Elements that you can, intentionally, leave open (and which close themselves)
// more flexable than web
var canBeLeftOpenTag = makeMap(
  'web,spinner,switch,video,textarea,canvas,' +
  'indicator,marquee,countdown',
  true
);

var isUnaryTag = makeMap(
  'embed,img,image,input,link,meta',
  true
);

function mustUseProp () { /* console.log('mustUseProp') */ }
function getTagNamespace () { /* console.log('getTagNamespace') */ }
function isUnknownElement () { /* console.log('isUnknownElement') */ }

var eventTypeMap = {
  tap: ['tap', 'click']
};

function getValue (obj, path) {
  if ( obj === void 0 ) obj = {};
  if ( path === void 0 ) path = '';

  var paths = typeof path === 'string' ? path.split('.') : path;
  return paths.reduce(function (prev, k) {
    /* istanbul ignore if */
    if (prev && isDef(prev)) {
      prev = prev[k];
    }
    return prev
  }, obj)
}

function deepEqual (a, b) {
  var aType = typeof a;
  var bType = typeof b;
  if (aType !== 'object' || bType !== 'object' || aType !== bType) {
    return a === b || (a === '' && b === undefined) || (a === undefined && b === '')
  } else {
    if (Array.isArray(a)) {
      if (a.length !== b.length) {
        return false
      }
    }
    for (var k in a) {
      if (!deepEqual(a[k], b[k])) {
        return false
      }
    }
  }
  return true
}

function getHid (vm, vnode) {
  if ( vnode === void 0 ) vnode = {};

  var sep = LIST_TAIL_SEPS[vm.$mp.platform] || LIST_TAIL_SEPS.wechat;
  var data = vnode.data; if ( data === void 0 ) data = {};
  var _hid = isDef(data._hid) ? data._hid : (data.attrs && data.attrs._hid);
  var _fid = isDef(data._fid) ? data._fid : (data.attrs && data.attrs._fid);
  if (isDef(_fid)) {
    return ("" + _hid + sep + _fid)
  }
  return _hid
}

function getVM (vm, id) {
  if ( vm === void 0 ) vm = {};

  var res;
  if (getVMId(vm) === ("" + id)) {
    return vm
  }
  var $children = vm.$children;
  for (var i = 0; i < $children.length; ++i) {
    res = getVM($children[i], id);
    /* istanbul ignore else */
    if (res) {
      return res
    }
  }
}

function getCid (vm) {
  var $vnode = vm.$vnode;
  var cid = $vnode && $vnode.data && $vnode.data.attrs._cid;
  cid = cid || '0';
  return cid
}

function getFid (vm) {
  var $vnode = vm.$vnode;
  var fid = $vnode && $vnode.data && $vnode.data.attrs._fid;
  return fid
}

function getVMId (vm) {
  var sep = LIST_TAIL_SEPS[vm.$mp.platform] || LIST_TAIL_SEPS.wechat;
  var res = [];
  var cursor = vm;
  var prev;
  while (cursor) {
    if (cursor === vm || !isSlotParent(cursor, prev)) {
      res.unshift(getCid(cursor));
    }
    prev = cursor;
    cursor = cursor.$parent;
  }
  var vmId = res.join(VM_ID_SEP);
  var fid = getFid(vm);
  if (isDef(fid)) {
    return ("" + vmId + sep + fid)
  }
  return vmId
}

function isSlotParent (parent, child) {
  var ref = child || {};
  var $vnode = ref.$vnode; if ( $vnode === void 0 ) $vnode = {};
  var childSlotParentUId = $vnode._mpSlotParentUId;
  return isDef(childSlotParentUId) && childSlotParentUId === parent._uid
}

// export function getVMParentId (vm) {
//   if (vm.$parent) {
//     return getVMId(vm.$parent)
//   }
//   return ''
// }

function isEmptyObj (obj) {
  if ( obj === void 0 ) obj = {};

  return Object.keys(obj).length === 0
}

function initVMToMP (vm) {
  var obj;

  var sep = LIST_TAIL_SEPS[vm.$mp.platform] || LIST_TAIL_SEPS.wechat;

  vm = vm || this;
  // const cid = getVMId(vm)
  var vmId = getVMId(vm);
  // console.log(vmId)
  var i = vmId.indexOf(sep);
  var cid = i > -1 ? vmId.slice(0, i) : vmId;
  var info = {
    cid: vmId,
    cpath: ("" + cid + VM_ID_SEP)
  };

  var prefix = ROOT_DATA_VAR + "." + vmId;

  vm.$mp._update(( obj = {}, obj[(prefix + "." + VM_ID_VAR)] = info.cid, obj[(prefix + "." + VM_ID_PREFIX)] = info.cpath, obj));
}

function updateSlotId (vm, sid) {
  var obj;

  vm = vm || this;
  var vmId = getVMId(vm);
  var dataPaths = [ROOT_DATA_VAR, vmId, SLOT_CONTEXT_ID_VAR];
  var curValue = getValue(vm.$mp.page.data, dataPaths);
  var dataPathStr = dataPaths.join('.');

  /* istanbul ignore else */
  if (isDef(sid) && curValue !== sid) {
    vm.$mp._update(( obj = {}, obj[dataPathStr] = sid, obj));
  }
}

function updateMPData (type, data, vnode) {
  var obj;

  if ( type === void 0 ) type = HOLDER_TYPE_VARS.text;
  var vm = this;
  var vmId = getVMId(vm);
  var hid = getHid(vm, vnode);
  var dataPaths = [
    ROOT_DATA_VAR,
    vmId,
    HOLDER_VAR,
    hid,
    type
  ];
  var dataPathStr = dataPaths.join('.');

  var curValue = getValue(vm.$mp.page.data, dataPaths);
  var isDeepEqual = deepEqual(curValue, data);

  /* istanbul ignore else */
  if (isDef(hid)) {
    if ((vm.$mp.platform === 'swan') && /[^A-Za-z0-9_]/.test(type)) {
      dataPathStr = dataPathStr.replace(/\.[^\.]*$/, ("['" + type + "']"));
    }

    if (!isDeepEqual || !vm.$mp._isEqualToBuffer(dataPathStr, data)) {
      vm.$mp._update(( obj = {}, obj[dataPathStr] = data, obj));
    }
  }
}

function assignData(newData,pageData,path,value){
  var segments = path.split('.');
  var len = segments.length;
  var obj = pageData;
  var depth = len-1;
  for (var i = 0; i < len; i++) {
      var segment = segments[i];
      if(i < depth){
          if(!obj.hasOwnProperty(segment)){
            obj = obj[segment] = {}
            var parentPath = segments.slice(0,i).join('.')
            if(newData[parentPath]){//$root.0.h
              newData[parentPath][segment]={}
            }else if(i > 2){//$root.0.h.0
              parentPath = segments.slice(0,i-1).join('.')
              if(newData[parentPath]){
                newData[parentPath][segments[i-1]][segment]={}
              }else{//$root.0.h.0-0
                newData[segments.slice(0,i+1).join('.')]={}
              }
            }else{//$root.0
              newData[segments.slice(0,i+1).join('.')]={}
            }
          } else {
            obj = obj[segment]
          }
      }
    }
}


function processData(pageData,data){
  var newData = {};  
  for(var key in data){
    assignData(newData,pageData,key,data[key])
  }
  return newData
}

function createUpdateFn (page) {
  var buffer = new Buffer();

  function doUpdate () {
    var data = buffer.pop();

    if (!isEmptyObj(data) && page.setData) {
      if(Vue.prototype._mpPlatform==='tt'){//fixed by xxxxxx 因为头条 path 赋值有 bug，必须填充之前未声明的对象
          var emptyData = processData(page.data,data)
          page.setData(emptyData,function(){//头条的 android 可以一步 setData，iOS 目前必须分两步
            page.setData(data,function(){
            })
          });
      } else {
          page.setData(data);
      }
    }
  }

  var throttleSetData = throttle(function () {
    doUpdate();
  }, 50, { leadingDelay: 0 });

  return {
    update: function update (data) {
      buffer.push(data);
      throttleSetData();
    },
    instantUpdate: function instantUpdate (data) {
      doUpdate();
    },
    isEqualToBuffer: function isEqualToBuffer (key, value) {
      return buffer.isEqual(key, value)
    }
  }
}

function updateVnodeToMP (vnode, key, value) {
  if ( key === void 0 ) key = HOLDER_TYPE_VARS.text;

  var context = vnode.context;
  var slotContext = vnode.slotContext;
  var realContext = slotContext || context;
  realContext && realContext.$updateMPData(key, value, vnode);

  /* istanbul ignore if */
  if (!realContext) {
    console.warn('update text with no context', key, value, vnode);
  }
}

var sep = '';

function assertHid (vnode, hid) {
  var data = vnode.data; if ( data === void 0 ) data = {};
  var attrs = data.attrs; if ( attrs === void 0 ) attrs = {};
  var _hid = attrs._hid;
  var _fid = attrs._fid;
  var curHid = isDef(_fid) ? ("" + _hid + sep + _fid) : _hid;
  return ("" + curHid) === ("" + hid)
}

//TODO 暂时仅处理首个 form fixed by xxxxxx
function getAlipayFormVNode(vnode){
	if(vnode.tag==='form'){
		return vnode
	}else{
		var children = vnode.children
		if(children&&children.length){
			for(var i=0;i<children.length;i++){
				var childVNode = children[i]
				var formVNode= getAlipayFormVNode(childVNode)
				if(formVNode){
					return formVNode
				}
			}
		}
	}
}

//fixed by xxxxxx
function getAlipayResetHandlers(vnode){
	if(!vnode){
		return []
	}
	var formVNode = getAlipayFormVNode(vnode)
	if(formVNode.data&&formVNode.data.on&&formVNode.data.on.reset){
			var handlers = []
			if(typeof formVNode.data.on.reset === 'function'){
				handlers.push(formVNode.data.on.reset)
			}else{
				handlers = formVNode.data.on.reset
			}
			return handlers
	}
	return []
}

function proxyEvent (rootVM, event) {
  if (!sep) {
    sep = LIST_TAIL_SEPS[rootVM.$mp.platform] || LIST_TAIL_SEPS.wechat;
  }
  
  //fixed by xxxxxx
  var isAlipayResetEvent = rootVM.$mp.platform === 'alipay' && typeof event === 'function'
	if(isAlipayResetEvent){//支付宝小程序 form reset 事件 event 对象是一个 function 
      event = {
        type:'reset',
        detail:{},
        currentTarget:{},
        target:{},
        dataset:{}
      }
  }
  
  //fixed by xxxxxx 支付宝部分事件无 target
  if(!event.currentTarget){
    event.currentTarget = {}
  }
  if(!event.target){
    event.target = {}
  }
  
  var type = event.type;
  var detail = event.detail; if ( detail === void 0 ) detail = {};
  var target = event.currentTarget || event.target;
  var dataset = target.dataset; if ( dataset === void 0 ) dataset = {};
  var cid = dataset.cid;
  var hid = dataset.hid;

  //fixed by xxxxxx
  var handlers = [];
	if(isAlipayResetEvent){
		handlers = getAlipayResetHandlers(rootVM._vnode)
	}else{
		var vm = getVM(rootVM, cid);
		handlers = getHandlers(vm, type, hid);
	}
  
  var $event = Object.assign({}, event);
  Object.assign(event.target, {
    value: detail.value
  });
  //fixed by xxxxxx 
  $event.mp = event
  handlers.forEach(function (handler) {
    handler($event);
  });
}

function getVnode (vnode, hid) {
  if ( vnode === void 0 ) vnode = {};

  var componentInstance = vnode.componentInstance;
  var children = vnode.children; if ( children === void 0 ) children = [];
  if (assertHid(vnode, hid)) {
    return vnode
  }

  // if vnode is component
  // find vnode in its slots
  if (componentInstance) {
    var $slots = componentInstance.$slots; if ( $slots === void 0 ) $slots = {};
    children = Object.keys($slots)
      .reduce(function (res, k) {
        var nodes = $slots[k];
        /* istanbul ignore else */
        if (nodes._rendered) {
          res = res.concat(nodes);
        }
        return res
      }, []);
  }

  for (var i = 0, len = children.length; i < len; ++i) {
    var res = getVnode(children[i], hid);
    if (res) { return res }
  }
}

// TODO: unit test for @touchstart and @touchStart
function getHandlers (vm, rawType, hid) {
  var type = rawType.toLowerCase();
  var res = [];

  var eventTypes = eventTypeMap[type] || [type];
  if (type !== rawType) {
    eventTypes.push(rawType);
  }

  /* istanbul ignore if */
  if (!vm) { return res }

  var vnode = getVnode(vm._vnode, hid);

  if (!vnode) { return res }

  var elm = vnode.elm;
  var on = elm.on; if ( on === void 0 ) on = {};

  /* istanbul ignore if */
  if (!assertHid(vnode, hid)) { return res }

  res = eventTypes.reduce(function (buf, event) {
    var handler = on[event];
    /* istanbul ignore if */
    if (typeof handler === 'function') {
      buf.push(handler);
    } else if (Array.isArray(handler)) {
      buf = buf.concat(handler);
    }
    return buf
  }, []);

  return res
}

/*  */

// import { extend, warn, isObject } from 'core/util/index'
/**
 * Runtime helper for rendering <slot>
 */
function afterRenderSlot (
  nodes,
  name,
  fallback,
  props,
  bindObject
) {
  var _fid = props._fid;
  // single tag:
  // <CompA><span slot-scope="props">{{ props.msg }}</span></CompA>
  if (nodes && nodes.tag) {
    nodes = [nodes];
  }
  if (nodes && nodes.length) {
    var firstNode = getFirstNode(nodes);
    var context = firstNode.context;
    if (context !== this) {
      var sid = getVMId(context);
      updateSlotId(this, sid);
    }
    markComponents(nodes, this._uid);
  }

  // scopedSlotFn with v-for
  var scopedSlotFn = this.$scopedSlots[name];
  // update vnode hid in scoped slot with the slot host's actual fid
  if (scopedSlotFn && isDef(_fid)) {
    updateNodesHid(nodes, ("-" + _fid));
  }

  return nodes
}

function updateNodesHid (nodes, tail) {
  if ( nodes === void 0 ) nodes = [];

  nodes.forEach(function (node) {
    /* istanbul ignore else */
    if (node.data && node.data._hid) {
      node.data._hid += tail;
    } else if (node && node.data && node.data.attrs && node.data.attrs._hid) {
      node.data.attrs._hid += tail;
    }
    updateNodesHid(node.children || [], tail);
  });
}

function getFirstNode (nodes) {
  var firstNode = nodes;
  while (firstNode && Array.isArray(firstNode)) {
    firstNode = firstNode[0];
  }
  return firstNode
}

function markComponents (nodes, parentUId) {
  if ( nodes === void 0 ) nodes = [];

  nodes.forEach(function (node) {
    var componentOptions = node.componentOptions;
    if (componentOptions) {
      node._mpSlotParentUId = parentUId;
    }
    markComponents(node.children, parentUId);
  });
}

function renderIf (cond, _hid, _fid) {
  var cloneVnode = {
    context: this,
    data: {
      attrs: { _hid: _hid, _fid: _fid }
    }
  };
  updateVnodeToMP(cloneVnode, HOLDER_TYPE_VARS.if, cond);
  return cond
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function afterRenderList (
  ret,
  val,
  render,
  forId,
  context
) {
  updateListToMP(ret, val, forId, context);
}

// TODO: support for destructuring
// TODO: keys collecting method needs improve for
// <li v-for="i in 3" :key="i"></li>
function updateListToMP (vnodeList, val, forId, context) {
  if ( vnodeList === void 0 ) vnodeList = [];

  var firstItem = vnodeList[0];
  var forKeys;
  var list = [];
  /* istanbul ignore else */
  if (firstItem) {
    // collect v-key
    if (Array.isArray(firstItem)) {
      forKeys = firstItem.map(function (e) {
        var ref = e.data || /* istanbul ignore next */ {};
        var attrs = ref.attrs; if ( attrs === void 0 ) attrs = {};
        var _fk = attrs._fk; if ( _fk === void 0 ) _fk = '';
        return _fk
      });
    } else {
      var ref = firstItem.data || {};
      var attrs = ref.attrs; if ( attrs === void 0 ) attrs = {};
      var _fk = attrs._fk; if ( _fk === void 0 ) _fk = '';
      forKeys = [_fk];
    }

    forKeys = forKeys.filter(function (e) { return e; });

    // generate list array with v-key value
    var valToList = [];
    /* istanbul ignore else */
    if (Array.isArray(val) || typeof val === 'string') {
      valToList = new Array(val.length);
      for (var i = 0, l = val.length; i < l; i++) {
        valToList[i] = val[i];
      }
    } else if (typeof val === 'number') {
      valToList = new Array(val);
      for (var i$1 = 0; i$1 < val; i$1++) {
        valToList[i$1] = i$1;
      }
    } else if (isObject(val)) {
      valToList = Object.keys(val).map(function (e, i) { return i; });
    }

    list = valToList.map(function (e, i) {
      if (forKeys.length === 0) {
        return i
      }
      return forKeys.reduce(function (res, k) {
        res[k.replace(/\./g, '_')] = getValue(val[i], k);
        return res
      }, {})
    });
  }

  var cloneVnode = {
    context: context,
    data: {
      attrs: { _hid: forId }
    }
  };

  // TODO: try not disable key diff in patching process
  // key will reuse existing vnode which won't update the vnode content
  // see unit test: with key
  // list won't update after this.list.reverse() if it's not disable

  // if is a scoped slot list
  if (firstItem && !firstItem.fn) {
    vnodeList.forEach(function (vnode) {
      if (Array.isArray(vnode)) {
        vnode.forEach(function (c) {
          if (c.key) { c.key = undefined; }
        });
      } else if (vnode.key) {
        vnode.key = undefined;
      }
    });
  }

  updateVnodeToMP(cloneVnode, HOLDER_TYPE_VARS.for, list);
}

var app = null;

function initRootVM (mpVM, opt, query) {
  if ( opt === void 0 ) opt = {};
  if ( query === void 0 ) query = {};

  var options = opt.options;
  var Component = opt.Component;
  var platform = opt.platform;
  var mpType = options.mpType;
  var mpVMOptions = query;
  var ref = createUpdateFn(mpVM);
  var update = ref.update;
  var instantUpdate = ref.instantUpdate;
  var isEqualToBuffer = ref.isEqualToBuffer;
  var $mp = {
    platform: platform,
    status: 'load',
    query: mpVMOptions,
    options: mpVMOptions,
    _update: update,
    _instantUpdate: instantUpdate,
    _isEqualToBuffer: isEqualToBuffer
  };

  if (mpType === 'app') {
    app = mpVM;
    Object.assign($mp, { app: app });
  } else {
    Object.assign($mp, {
      page: mpVM,
      app: app
    });
  }

  Object.assign(options, { $mp: $mp });

  var rootVM = new Component(options);

  return rootVM
}

/*  */
function createElement$1 (tagName, vnode) {
  return {
    on: {

    }
  }
}

function createElementNS (namespace, tagName) {
  return {}
}

function createTextNode (text, vnode) {
  updateVnodeToMP(vnode, HOLDER_TYPE_VARS.text, text);
  return {
    text: text
  }
}

function createComment (text) {
  return {
    text: text
  }
}

function insertBefore (parentNode, newNode, referenceNode) {
}

function removeChild (node, child) {
}

function appendChild (node, child) {
}

function parentNode (node) {
  return {}
}

function nextSibling (node) {
  return {}
}

function tagName (node) {
  return '#'
}

function setTextContent (node, text, vnode) {
  updateVnodeToMP(vnode, HOLDER_TYPE_VARS.text, text);
  return {}
}

function setStyleScope (node, scopeId, vnode) {
  return {}
}

function setAttribute (node, scopeId, v, vnode) {
  return {}
}


var nodeOps = Object.freeze({
	createElement: createElement$1,
	createElementNS: createElementNS,
	createTextNode: createTextNode,
	createComment: createComment,
	insertBefore: insertBefore,
	removeChild: removeChild,
	appendChild: appendChild,
	parentNode: parentNode,
	nextSibling: nextSibling,
	tagName: tagName,
	setTextContent: setTextContent,
	setStyleScope: setStyleScope,
	setAttribute: setAttribute
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
}

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!isDef(key)) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *

/*
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

// Some browsers do not support dynamically changing type for <input>
// so they need to be treated as different nodes
function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove () {
      if (--remove.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove.listeners = listeners;
    return remove
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function createElm (vnode, insertedVnodeQueue, parentElm, refElm, nested) {
    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text, vnode);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */, parentElm, refElm);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (ref$$1.parentNode === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(vnode.text, vnode));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    var ancestor = vnode;
    while (ancestor) {
      if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
        nodeOps.setAttribute(vnode.elm, i, '', vnode);
      }
      ancestor = ancestor.parent;
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setAttribute(vnode.elm, i, '', vnode);
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, elmToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : null;
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
          newStartVnode = newCh[++newStartIdx];
        } else {
          elmToMove = oldCh[idxInOld];
          /* istanbul ignore if */
          if (sameVnode(elmToMove, newStartVnode)) {
            patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, elmToMove.elm, oldStartVnode.elm);
            newStartVnode = newCh[++newStartIdx];
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
            newStartVnode = newCh[++newStartIdx];
          }
        }
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
    if (oldVnode === vnode) {
      return
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, '', vnode); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '', vnode);
      }
    } else if (oldVnode.text !== vnode.text || (oldVnode.data && vnode.data && oldVnode.data._hid !== vnode.data._hid)) {
      nodeOps.setTextContent(elm, vnode.text, vnode);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var isRenderedModule = makeMap('attrs,style,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue) {
    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.elm = elm;
      vnode.isAsyncPlaceholder = true;
      return true
    }
    vnode.elm = elm;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          var childrenMatch = true;
          var childNode = elm.firstChild;
          for (var i$1 = 0; i$1 < children.length; i$1++) {
            if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue)) {
              childrenMatch = false;
              break
            }
            childNode = childNode.nextSibling;
          }
          // if childNode is not null, it means the actual childNodes list is
          // longer than the virtual children list.
          if (!childrenMatch || childNode) {
            return false
          }
        }
      }
      if (isDef(data)) {
        for (var key in data) {
          if (!isRenderedModule(key)) {
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else {}
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }
        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm$1 = nodeOps.parentNode(oldElm);
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm$1,
          nodeOps.nextSibling(oldElm)
        );

        if (isDef(vnode.parent)) {
          // component root element replaced.
          // update parent placeholder node element, recursively
          var ancestor = vnode.parent;
          while (ancestor) {
            ancestor.elm = vnode.elm;
            ancestor = ancestor.parent;
          }
          if (isPatchable(vnode)) {
            for (var i = 0; i < cbs.create.length; ++i) {
              cbs.create[i](emptyNode, vnode.parent);
            }
          }
        }

        if (isDef(parentElm$1)) {
          removeVnodes(parentElm$1, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

function createTextVNode$1 (val, _hid, _fid) {
  var vnode = new VNode(undefined, {
    _hid: _hid, _fid: _fid
  }, undefined, String(val), undefined, this);

  return vnode
}

/*  */

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function beforeCreateElement (
  args,
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  var childrenIndex = 3;
  if (Array.isArray(data) || isPrimitive(data)) {
    childrenIndex = 2;
    normalizationType = children;
    children = data;
    data = undefined;
  }

  args[childrenIndex] = normalizeChildren$1(children);
}

function normalizeChildren$1 (children) {
  if ( children === void 0 ) children = [];

  var res = [];
  for (var i = 0, len = children.length; i < len; i++) {
    var child = children[i];
    if (Array.isArray(child)) {
      res = res.concat(normalizeChildren$1(child));
    } else if (child) {
      res.push(child);
    }
  }
  return res
}

/*  */



var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);









var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode$1 = new VNode('', {}, []);

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode$1);
  }
}

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode$1;
  var isDestroy = vnode === emptyNode$1;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
]

/*  */

var ignoreKeys = ['_hid', '_fk', '_cid', '_batrs'];

function isIgnoreKey (key) {
  return ignoreKeys.indexOf(key) > -1 ||
  /^_if_/.test(key)
}

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  var bindingAttrs = (attrs._batrs || '').split(',');
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    if (isIgnoreKey(key)) {
      continue
    }
    cur = attrs[key];
    old = oldAttrs[key];

    // only update daynamic attrs in runtime
    if (old !== cur && (bindingAttrs.indexOf(key) > -1 || key === 'slot')) {
      updateVnodeToMP(vnode, key, cur);
    }
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
}

/*  */

function updateClass (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);
  var rootClass = null;
  var rootVnode = null;

  if (isDef(cls) && isDef(vnode.componentInstance)) {
    var ref = vnode.data;
    var staticClass = ref.staticClass; if ( staticClass === void 0 ) staticClass = '';
    var rootClassList = cls
      .split(/\s+/)
      .concat(staticClass.split(/\s+/));
    rootVnode = vnode.componentInstance._vnode;
    rootClass = rootClassList.join(' ');
    cls = undefined;
  }

  if (isDef(cls)) {
    vnode.elm.class = cls;
    updateVnodeToMP(vnode, HOLDER_TYPE_VARS.class, cls);
  }

  if (isDef(rootClass)) {
    updateVnodeToMP(rootVnode, HOLDER_TYPE_VARS.rootClass, rootClass);
  }
}

var klass = {
  create: updateClass,
  update: updateClass
}

/*  */

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (isUndef(props[key])) {
      elm[key] = '';
    }
  }
  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      /* istanbul ignore else */
      if (key === 'innerHTML') {
        var ref = vnode.context;
        var $htmlParse = ref.$htmlParse;
        if ($htmlParse) {
          var htmlNodes = $htmlParse(cur);
          updateVnodeToMP(vnode, HOLDER_TYPE_VARS.vhtml, htmlNodes);
        } else {
          updateVnodeToMP(vnode, HOLDER_TYPE_VARS.vhtml, cur);
        }
        return
      } else if (key === 'textContent') {
        updateVnodeToMP(vnode, HOLDER_TYPE_VARS.vtext, cur);
        return
      }
    }

    if (key === 'value') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        if (elm.value !== strCur) {
          elm.value = strCur;
          updateVnodeToMP(vnode, key, strCur);
        }
      }
    } else if (elm[key] !== cur) {
      elm[key] = cur;
      updateVnodeToMP(vnode, key, cur);
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isNotInFocusAndDirty(elm, checkVal) ||
    isDirtyWithModifiers(elm, checkVal)
  ))
}

function isNotInFocusAndDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isDirtyWithModifiers (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.lazy) {
      // inputs with lazy should only be updated when not in focus
      return false
    }
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal)
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim()
    }
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  // return data.staticStyle
  //   ? extend(data.staticStyle, style)
  //   : style

  // mp: no need to update staticStyle
  return style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (
        childNode && childNode.data &&
        (styleData = normalizeStyleData(childNode.data))
      ) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
// const setProp = (el, name, val) => {
//   /* istanbul ignore if */
//   if (cssVarRE.test(name)) {
//     el.style.setProperty(name, val)
//   } else if (importantRE.test(val)) {
//     el.style.setProperty(name, val.replace(importantRE, ''), 'important')
//   } else {
//     const normalizedName = normalize(name)
//     if (Array.isArray(val)) {
//       // Support values array created by autoprefixer, e.g.
//       // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
//       // Set them one by one, and the browser will only set those it can recognize
//       for (let i = 0, len = val.length; i < len; i++) {
//         el.style[normalizedName] = val[i]
//       }
//     } else {
//       el.style[normalizedName] = val
//     }
//   }
// }

// const vendorNames = ['Webkit', 'Moz', 'ms']

// let emptyStyle
// const normalize = cached(function (prop) {
//   emptyStyle = emptyStyle || {}
//   prop = camelize(prop)
//   if (prop !== 'filter' && (prop in emptyStyle)) {
//     return prop
//   }
//   const capName = prop.charAt(0).toUpperCase() + prop.slice(1)
//   for (let i = 0; i < vendorNames.length; i++) {
//     const name = vendorNames[i] + capName
//     if (name in emptyStyle) {
//       return name
//     }
//   }
//   return prop
// })

var normalize = cached(function (prop) {
  if ( prop === void 0 ) prop = '';

  return prop.replace(/[A-Z]/g, function (e) { return ("-" + (e.toLowerCase())); })
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  // const el: any = vnode.elm
  // const oldStaticStyle: any = oldData.staticStyle
  // const oldStyleBinding: any = oldData.normalizedStyle || oldData.style || {}

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  // const oldStyle = oldStaticStyle || oldStyleBinding

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  var res = [];
  var cur = Object.keys(newStyle)
    .reduce(function (res, name) {
      var val = newStyle[name];
      var normalizedName = normalize(name);
      if (val === undefined || val === null || val === false) {
        return res
      }
      if (cssVarRE.test(name)) {
        res.push((name + ": " + val));
      } else if (importantRE.test(val)) {
        res.push((normalizedName + ": " + val));
      } else {
        if (Array.isArray(val)) {
          // Support values array created by autoprefixer, e.g.
          // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
          // Set them one by one, and the browser will only set those it can recognize
          for (var i = 0, len = val.length; i < len; i++) {
            res.push((normalizedName + ": " + (val[i])));
          }
        } else {
          res.push((normalizedName + ": " + val));
        }
      }
      return res
    }, res)
    .filter(notEmpty)
    .join('; ');

  updateVnodeToMP(vnode, HOLDER_TYPE_VARS.style, cur);
}

var style = {
  create: updateStyle,
  update: updateStyle
}

/*  */

var target$1;

function createOnceHandler (handler, event, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

function add$1 (
  event,
  handler,
  once$$1,
  capture,
  passive
) {
  // handler = withMacroTask(handler)
  if (once$$1) { handler = createOnceHandler(handler, event, capture); }
  /* istanbul ignore else */
  if (!target$1.on[event]) {
    target$1.on[event] = [];
  }
  target$1.on[event].push(handler);
}

function remove$2 (
  event,
  handler,
  capture,
  _target
) {
  if (!handler) {
    return
  }
  var realTarget = _target || target$1;
  var realHanlder = handler._withTask || handler;
  /* istanbul ignore else */
  if (realTarget.on[event]) {
    var index = realTarget.on[event].indexOf(realHanlder);
    /* istanbul ignore else */
    if (index > -1) {
      realTarget.on[event].splice(index, 1);
    }
  }
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  updateListeners(on, oldOn, add$1, remove$2, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
}

var platformModules = [
  attrs,
  klass,
  domProps,
  style,
  events
]

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

function walkInTree (vm, fn, options) {
  if ( options === void 0 ) options = {};

  var result;
  var bottomToTop = options.bottomToTop; if ( bottomToTop === void 0 ) bottomToTop = false;

  if (!bottomToTop) {
    result = fn(vm);
  }

  /* istanbul ignore else */
  if (vm.$children) {
    for (var i = vm.$children.length - 1; i >= 0; i--) {
      var child = vm.$children[i];
      result = walkInTree(child, fn, options) || result;
    }
  }

  if (bottomToTop) {
    result = fn(vm);
  }

  return result
}

function callHook$2 (vm, hook, options) {
  /* istanbul ignore if */
  if (!vm) {
    return
  }

  var result;

  if (hook === 'onReady') {
    result = walkInTree(vm, function (_vm) {
      var handler = _vm.$options[hook];
      handler && handler.call(_vm, options);
    }, { bottomToTop: true });
  } else {
    result = walkInTree(vm, function (_vm) {
      var handler = _vm.$options[hook];
      return handler && handler.call(_vm, options)
    });
  }

  if (hook === 'onUnload') {
    var rootVM = vm.$root;
    rootVM.$destroy();
  }

  return result
}

var page = {};

page.init = function init (opt) {
  var obj;

  Page({
    // 生命周期函数--监听页面加载
    data: ( obj = {}, obj[ROOT_DATA_VAR] = {}, obj),
    onLoad: function onLoad (options) {
      var rootVM = this.rootVM = initRootVM(this, opt, options);

      callHook$2(rootVM, 'onLoad', options);

      rootVM.$mount();

      rootVM.$mp._instantUpdate();
    },
    // 生命周期函数--监听页面初次渲染完成
    onReady: function onReady (options) {
      var rootVM = this.rootVM;
      var mp = rootVM.$mp;

      mp.status = 'ready';

      callHook$2(rootVM, 'onReady', options);
    },
    // 生命周期函数--监听页面显示
    onShow: function onShow (options) {
      var rootVM = this.rootVM;
      var mp = rootVM.$mp;

      mp.status = 'show';
      callHook$2(rootVM, 'onShow', options);
    },
    // 生命周期函数--监听页面隐藏
    onHide: function onHide (options) {
      var rootVM = this.rootVM;
      var mp = rootVM.$mp;

      mp.status = 'hide';
      callHook$2(rootVM, 'onHide', options);
    },
    // 生命周期函数--监听页面卸载
    onUnload: function onUnload (options) {
      var rootVM = this.rootVM;
      var mp = rootVM.$mp;

      mp.status = 'unload';
      callHook$2(rootVM, 'onUnload', options);
    },
    // 页面相关事件处理函数--监听用户下拉动作
    onPullDownRefresh: function onPullDownRefresh (options) {
      var rootVM = this.rootVM;

      callHook$2(rootVM, 'onPullDownRefresh', options);
    },
    // 页面上拉触底事件的处理函数
    onReachBottom: function onReachBottom (options) {
      var rootVM = this.rootVM;

      callHook$2(rootVM, 'onReachBottom', options);
    },
    // 用户点击右上角转发
    onShareAppMessage: function onShareAppMessage (options) {
      var rootVM = this.rootVM;
      //fixed by xxxxxx
      if(options.currentTarget){
        options.target = options.currentTarget
      }
      return callHook$2(rootVM, 'onShareAppMessage', options)
    },
    // 页面滚动触发事件的处理函数
    onPageScroll: function onPageScroll (options) {
      var rootVM = this.rootVM;

      callHook$2(rootVM, 'onPageScroll', options);
    },
    // 当前是 tab 页时，点击 tab 时触发
    onTabItemTap: function onTabItemTap (options) {
      var rootVM = this.rootVM;

      callHook$2(rootVM, 'onTabItemTap', options);
    },
    // 支付宝小程序: 标题被点击
    onTitleClick: function onTitleClick () {
      var rootVM = this.rootVM;

      callHook$2(rootVM, 'onTitleClick');
    },
    _pe: function _pe (e) {
      this.proxyEvent(e);
    },
    proxyEvent: function proxyEvent$1 (e) {
      var rootVM = this.rootVM;
      proxyEvent(rootVM, e);
    }
  });
};

var app$1 = {};

app$1.init = function (opt) {
  var obj;

  var _App;

  try {
    _App = App;
  } catch (err) {
    // 支付宝小程序中 App() 必须在 app.js 里调用，且不能调用多次。
    _App = my.__megalo.App; // eslint-disable-line
  }

  _App({
    data: ( obj = {}, obj[ROOT_DATA_VAR] = {}, obj),
    //	Function	生命周期函数--监听小程序初始化	当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
    onLaunch: function onLaunch (options) {
      if ( options === void 0 ) options = {};

      var rootVM = this.rootVM = initRootVM(this, opt, options.query);
      var ref = rootVM.$options;
      var globalData = ref.globalData; if ( globalData === void 0 ) globalData = function () {};
      this.globalData = globalData && (typeof globalData === 'function'
        ? globalData.call(rootVM, options)
        : globalData) || {};
      rootVM.globalData = this.globalData;
      rootVM.$mount();
      callHook$2(rootVM, 'onLaunch', options);
    },
    //	Function	生命周期函数--监听小程序显示	当小程序启动，或从后台进入前台显示，会触发 onShow
    onShow: function onShow (options) {
      var rootVM = this.rootVM;
      callHook$2(rootVM, 'onShow', options);
    },
    //	Function	生命周期函数--监听小程序隐藏	当小程序从前台进入后台，会触发 onHide
    onHide: function onHide () {
      var rootVM = this.rootVM;
      callHook$2(rootVM, 'onHide');
    },
    //	Function	错误监听函数	当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
    onError: function onError (msg) {
      var rootVM = this.rootVM;
      callHook$2(rootVM, 'onError', msg);
    },
    //	Function	页面不存在监听函数	当小程序出现要打开的页面不存在的情况，会带上页面信息回调该函数，详见下文
    onPageNotFound: function onPageNotFound (options) {
      var rootVM = this.rootVM;
      callHook$2(rootVM, 'onPageNotFound', options);
    },
    globalData: {}
  });
};

function initMP (vm, options) {
  var mpType = options.mpType; if ( mpType === void 0 ) mpType = 'page';
  var _mpPlatform = vm._mpPlatform;

  /* istanbul ignore else */
  if (mpType === 'app') {
    app$1.init({
      Component: vm.constructor,
      options: options,
      platform: _mpPlatform
    });
  } else if (mpType === 'page') {
    page.init({
      Component: vm.constructor,
      options: options,
      platform: _mpPlatform
    });
  }
}

/*  */

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

// import { isTextInputType } from 'mp/util/element'
// import { looseEqual, looseIndexOf } from 'shared/util'
// import { mergeVNodeHook } from 'core/vdom/helpers/index'
// import { warn } from 'core/util/index'

/* istanbul ignore if */
// if (isIE9) {
//   // http://www.matts411.com/post/internet-explorer-9-oninput/
//   document.addEventListener('selectionchange', () => {
//     const el = document.activeElement
//     if (el && el.vmodel) {
//       trigger(el, 'input')
//     }
//   })
// }

var directive = {
  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    if (oldValue !== value) {
      updateVnodeToMP(vnode, HOLDER_TYPE_VARS.value, value);
    }
  },

  inserted: function inserted (el, binding, vnode, oldVnode) {
    // if (vnode.tag === 'select') {
    //   // #6903
    //   if (oldVnode.elm && !oldVnode.elm._vOptions) {
    //     mergeVNodeHook(vnode, 'postpatch', () => {
    //       directive.componentUpdated(el, binding, vnode)
    //     })
    //   } else {
    //     setSelected(el, binding, vnode.context)
    //   }
    //   el._vOptions = [].map.call(el.options, getValue)
    // } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
    //   el._vModifiers = binding.modifiers
    //   if (!binding.modifiers.lazy) {
    //     el.addEventListener('compositionstart', onCompositionStart)
    //     el.addEventListener('compositionend', onCompositionEnd)
    //     // Safari < 10.2 & UIWebView doesn't fire compositionend when
    //     // switching focus before confirming composition choice
    //     // this also fixes the issue where some browsers e.g. iOS Chrome
    //     // fires "change" instead of "input" on autocomplete.
    //     el.addEventListener('change', onCompositionEnd)
    //     /* istanbul ignore if */
    //     if (isIE9) {
    //       el.vmodel = true
    //     }
    //   }
    // }
  },

  componentUpdated: function componentUpdated (el, binding, vnode) {
    // if (vnode.tag === 'select') {
    //   setSelected(el, binding, vnode.context)
    //   // in case the options rendered by v-for have changed,
    //   // it's possible that the value is out-of-sync with the rendered options.
    //   // detect such cases and filter out values that no longer has a matching
    //   // option in the DOM.
    //   const prevOptions = el._vOptions
    //   const curOptions = el._vOptions = [].map.call(el.options, getValue)
    //   if (curOptions.some((o, i) => !looseEqual(o, prevOptions[i]))) {
    //     // trigger change event if
    //     // no matching option found for at least one value
    //     const needReset = el.multiple
    //       ? binding.value.some(v => hasNoMatchingOption(v, curOptions))
    //       : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions)
    //     if (needReset) {
    //       trigger(el, 'change')
    //     }
    //   }
    // }
  }
};

/*  */

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore else */
    if (value !== oldValue) {
      updateVnodeToMP(vnode, HOLDER_TYPE_VARS.vshow, !value);
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    if (value !== oldValue) {
      updateVnodeToMP(vnode, HOLDER_TYPE_VARS.vshow, !value);
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    // if (!isDestroy) {
    //   el.style.display = el.__vOriginalDisplay
    // }
  }
}

var platformDirectives = {
  model: directive,
  show: show
}

/*  */

// import config from 'core/config'
// install platform specific utils
Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue.options.directives, platformDirectives);

// install platform patch function
Vue.prototype.__patch__ = patch;
Vue.prototype._v = createTextVNode$1;
Vue.prototype._ri = renderIf;
Vue.prototype.$updateMPData = updateMPData;

Vue.prototype._l = aop(Vue.prototype._l, {
  after: afterRenderList
});

var oInit = Vue.prototype._init;
Vue.prototype._init = function (options) {
  if ( options === void 0 ) options = {};

  if (!Vue.prototype._mpPlatform) {
    Vue.prototype._mpPlatform = getMPPlatform();
  }

  var $mp = options.$mp;
  var parent = options.parent; if ( parent === void 0 ) parent = {};
  var mpType = options.mpType; if ( mpType === void 0 ) mpType = '';
  //fixed by xxxxxx
  if(!mpType && this.constructor.extendOptions && this.constructor.extendOptions.mpType){
    options = this.constructor.extendOptions
    mpType = options.mpType
  }
  
  $mp = $mp || parent.$mp;
  if (!$mp && mpType) {
    initMP(this, options);
  } else if ($mp) {
    delete options.$mp;
    this.$mp = $mp;
    oInit.call(this, options);

    this._t = aop(this._t, {
      after: afterRenderSlot
    });

    this._c = aop(this._c, {
      before: beforeCreateElement
    });

    return this
  } else {
    oInit.call(this, options);
    return this
  }
};

// public mount method
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  if (this.$mp) {
    var vm = mountComponent(this, undefined, undefined);
    initVMToMP(vm);
    return vm
  }
};

/*  */

return Vue;

})));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-baidu/dist/index.js */ "./node_modules/@dcloudio/uni-mp-baidu/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Dell\\Documents\\HBuilderProjects\\起小名\\components\\w-loading\\w-loading.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/Dell/Documents/HBuilderProjects/起小名/components/w-loading/w-loading.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default =
{
  name: "load-view",
  data: function data() {
    return {
      loading_time: 1,
      loading: false };

  },
  watch: {
    loading: function loading(val) {var _this = this;
      if (val) {
        // uni.hideTabBar()
        var timer = setInterval(function () {
          if (_this.loading_time < 6) {
            _this.loading_time++;
          } else {
            clearInterval(timer);
          }
        }, 1000);
      }
    } },

  methods: {
    show: function show() {
      this.loading = true;
    },
    close: function close() {
      this.loading_time = 1;
      this.loading = false;
    } } };exports.default = _default;

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Dell\\Documents\\HBuilderProjects\\起小名\\components\\w-youshi\\w-youshi.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/Dell/Documents/HBuilderProjects/起小名/components/w-youshi/w-youshi.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default =
{
  data: function data() {
    return {};


  } };exports.default = _default;

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Dell\\Documents\\HBuilderProjects\\起小名\\components\\w-youshi\\w-youshi.vue?vue&type=style&index=0&lang=less&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-1!./node_modules/css-loader??ref--10-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-oneOf-1-3!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/Dell/Documents/HBuilderProjects/起小名/components/w-youshi/w-youshi.vue?vue&type=style&index=0&lang=less& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Dell\\Documents\\HBuilderProjects\\起小名\\components\\w-loading\\w-loading.vue?vue&type=style&index=0&id=43e49b3c&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/Dell/Documents/HBuilderProjects/起小名/components/w-loading/w-loading.vue?vue&type=style&index=0&id=43e49b3c&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/qs/lib/formats.js":
/*!****************************************!*\
  !*** ./node_modules/qs/lib/formats.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var replace = String.prototype.replace;
var percentTwenties = /%20/g;

module.exports = {
    'default': 'RFC3986',
    formatters: {
        RFC1738: function (value) {
            return replace.call(value, percentTwenties, '+');
        },
        RFC3986: function (value) {
            return value;
        }
    },
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};


/***/ }),

/***/ "./node_modules/qs/lib/index.js":
/*!**************************************!*\
  !*** ./node_modules/qs/lib/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stringify = __webpack_require__(/*! ./stringify */ "./node_modules/qs/lib/stringify.js");
var parse = __webpack_require__(/*! ./parse */ "./node_modules/qs/lib/parse.js");
var formats = __webpack_require__(/*! ./formats */ "./node_modules/qs/lib/formats.js");

module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};


/***/ }),

/***/ "./node_modules/qs/lib/parse.js":
/*!**************************************!*\
  !*** ./node_modules/qs/lib/parse.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/qs/lib/utils.js");

var has = Object.prototype.hasOwnProperty;

var defaults = {
    allowDots: false,
    allowPrototypes: false,
    arrayLimit: 20,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    parameterLimit: 1000,
    plainObjects: false,
    strictNullHandling: false
};

var parseValues = function parseQueryStringValues(str, options) {
    var obj = {};
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);

    for (var i = 0; i < parts.length; ++i) {
        var part = parts[i];

        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder);
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder);
            val = options.decoder(part.slice(pos + 1), defaults.decoder);
        }
        if (has.call(obj, key)) {
            obj[key] = [].concat(obj[key]).concat(val);
        } else {
            obj[key] = val;
        }
    }

    return obj;
};

var parseObject = function (chain, val, options) {
    var leaf = val;

    for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];

        if (root === '[]') {
            obj = [];
            obj = obj.concat(leaf);
        } else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (
                !isNaN(index)
                && root !== cleanRoot
                && String(index) === cleanRoot
                && index >= 0
                && (options.parseArrays && index <= options.arrayLimit)
            ) {
                obj = [];
                obj[index] = leaf;
            } else {
                obj[cleanRoot] = leaf;
            }
        }

        leaf = obj;
    }

    return leaf;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options) {
    if (!givenKey) {
        return;
    }

    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

    // The regex chunks

    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;

    // Get the parent

    var segment = brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;

    // Stash the parent if it exists

    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys
        // that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(parent);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while ((segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options);
};

module.exports = function (str, opts) {
    var options = opts ? utils.assign({}, opts) : {};

    if (options.decoder !== null && options.decoder !== undefined && typeof options.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

    options.ignoreQueryPrefix = options.ignoreQueryPrefix === true;
    options.delimiter = typeof options.delimiter === 'string' || utils.isRegExp(options.delimiter) ? options.delimiter : defaults.delimiter;
    options.depth = typeof options.depth === 'number' ? options.depth : defaults.depth;
    options.arrayLimit = typeof options.arrayLimit === 'number' ? options.arrayLimit : defaults.arrayLimit;
    options.parseArrays = options.parseArrays !== false;
    options.decoder = typeof options.decoder === 'function' ? options.decoder : defaults.decoder;
    options.allowDots = typeof options.allowDots === 'boolean' ? options.allowDots : defaults.allowDots;
    options.plainObjects = typeof options.plainObjects === 'boolean' ? options.plainObjects : defaults.plainObjects;
    options.allowPrototypes = typeof options.allowPrototypes === 'boolean' ? options.allowPrototypes : defaults.allowPrototypes;
    options.parameterLimit = typeof options.parameterLimit === 'number' ? options.parameterLimit : defaults.parameterLimit;
    options.strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;

    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options);
        obj = utils.merge(obj, newObj, options);
    }

    return utils.compact(obj);
};


/***/ }),

/***/ "./node_modules/qs/lib/stringify.js":
/*!******************************************!*\
  !*** ./node_modules/qs/lib/stringify.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/qs/lib/utils.js");
var formats = __webpack_require__(/*! ./formats */ "./node_modules/qs/lib/formats.js");

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) { // eslint-disable-line func-name-matching
        return prefix + '[]';
    },
    indices: function indices(prefix, key) { // eslint-disable-line func-name-matching
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) { // eslint-disable-line func-name-matching
        return prefix;
    }
};

var toISO = Date.prototype.toISOString;

var defaults = {
    delimiter: '&',
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    serializeDate: function serializeDate(date) { // eslint-disable-line func-name-matching
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var stringify = function stringify( // eslint-disable-line func-name-matching
    object,
    prefix,
    generateArrayPrefix,
    strictNullHandling,
    skipNulls,
    encoder,
    filter,
    sort,
    allowDots,
    serializeDate,
    formatter,
    encodeValuesOnly
) {
    var obj = object;
    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder) : prefix;
        }

        obj = '';
    }

    if (typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean' || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder);
            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (Array.isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (skipNulls && obj[key] === null) {
            continue;
        }

        if (Array.isArray(obj)) {
            values = values.concat(stringify(
                obj[key],
                generateArrayPrefix(prefix, key),
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly
            ));
        } else {
            values = values.concat(stringify(
                obj[key],
                prefix + (allowDots ? '.' + key : '[' + key + ']'),
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly
            ));
        }
    }

    return values;
};

module.exports = function (object, opts) {
    var obj = object;
    var options = opts ? utils.assign({}, opts) : {};

    if (options.encoder !== null && options.encoder !== undefined && typeof options.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    var delimiter = typeof options.delimiter === 'undefined' ? defaults.delimiter : options.delimiter;
    var strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;
    var skipNulls = typeof options.skipNulls === 'boolean' ? options.skipNulls : defaults.skipNulls;
    var encode = typeof options.encode === 'boolean' ? options.encode : defaults.encode;
    var encoder = typeof options.encoder === 'function' ? options.encoder : defaults.encoder;
    var sort = typeof options.sort === 'function' ? options.sort : null;
    var allowDots = typeof options.allowDots === 'undefined' ? false : options.allowDots;
    var serializeDate = typeof options.serializeDate === 'function' ? options.serializeDate : defaults.serializeDate;
    var encodeValuesOnly = typeof options.encodeValuesOnly === 'boolean' ? options.encodeValuesOnly : defaults.encodeValuesOnly;
    if (typeof options.format === 'undefined') {
        options.format = formats['default'];
    } else if (!Object.prototype.hasOwnProperty.call(formats.formatters, options.format)) {
        throw new TypeError('Unknown format option provided.');
    }
    var formatter = formats.formatters[options.format];
    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (Array.isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (options.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = options.arrayFormat;
    } else if ('indices' in options) {
        arrayFormat = options.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }

    if (sort) {
        objKeys.sort(sort);
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (skipNulls && obj[key] === null) {
            continue;
        }

        keys = keys.concat(stringify(
            obj[key],
            key,
            generateArrayPrefix,
            strictNullHandling,
            skipNulls,
            encode ? encoder : null,
            filter,
            sort,
            allowDots,
            serializeDate,
            formatter,
            encodeValuesOnly
        ));
    }

    var joined = keys.join(delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';

    return joined.length > 0 ? prefix + joined : '';
};


/***/ }),

/***/ "./node_modules/qs/lib/utils.js":
/*!**************************************!*\
  !*** ./node_modules/qs/lib/utils.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty;

var hexTable = (function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}());

var compactQueue = function compactQueue(queue) {
    var obj;

    while (queue.length) {
        var item = queue.pop();
        obj = item.obj[item.prop];

        if (Array.isArray(obj)) {
            var compacted = [];

            for (var j = 0; j < obj.length; ++j) {
                if (typeof obj[j] !== 'undefined') {
                    compacted.push(obj[j]);
                }
            }

            item.obj[item.prop] = compacted;
        }
    }

    return obj;
};

var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }

    return obj;
};

var merge = function merge(target, source, options) {
    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (Array.isArray(target)) {
            target.push(source);
        } else if (typeof target === 'object') {
            if (options.plainObjects || options.allowPrototypes || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [target, source];
        }

        return target;
    }

    if (typeof target !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (Array.isArray(target) && !Array.isArray(source)) {
        mergeTarget = arrayToObject(target, options);
    }

    if (Array.isArray(target) && Array.isArray(source)) {
        source.forEach(function (item, i) {
            if (has.call(target, i)) {
                if (target[i] && typeof target[i] === 'object') {
                    target[i] = merge(target[i], item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }

    return Object.keys(source).reduce(function (acc, key) {
        var value = source[key];

        if (has.call(acc, key)) {
            acc[key] = merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function (acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};

var decode = function (str) {
    try {
        return decodeURIComponent(str.replace(/\+/g, ' '));
    } catch (e) {
        return str;
    }
};

var encode = function encode(str) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    var string = typeof str === 'string' ? str : String(str);

    var out = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);

        if (
            c === 0x2D // -
            || c === 0x2E // .
            || c === 0x5F // _
            || c === 0x7E // ~
            || (c >= 0x30 && c <= 0x39) // 0-9
            || (c >= 0x41 && c <= 0x5A) // a-z
            || (c >= 0x61 && c <= 0x7A) // A-Z
        ) {
            out += string.charAt(i);
            continue;
        }

        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        i += 1;
        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
        out += hexTable[0xF0 | (c >> 18)]
            + hexTable[0x80 | ((c >> 12) & 0x3F)]
            + hexTable[0x80 | ((c >> 6) & 0x3F)]
            + hexTable[0x80 | (c & 0x3F)];
    }

    return out;
};

var compact = function compact(value) {
    var queue = [{ obj: { o: value }, prop: 'o' }];
    var refs = [];

    for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];

        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({ obj: obj, prop: key });
                refs.push(val);
            }
        }
    }

    return compactQueue(queue);
};

var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

var isBuffer = function isBuffer(obj) {
    if (obj === null || typeof obj === 'undefined') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};

module.exports = {
    arrayToObject: arrayToObject,
    assign: assign,
    compact: compact,
    decode: decode,
    encode: encode,
    isBuffer: isBuffer,
    isRegExp: isRegExp,
    merge: merge
};


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Dell\\Documents\\HBuilderProjects\\起小名\\components\\w-loading\\w-loading.vue?vue&type=template&id=43e49b3c&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/Dell/Documents/HBuilderProjects/起小名/components/w-loading/w-loading.vue?vue&type=template&id=43e49b3c&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "loading ",
      class: { hide: !_vm.loading },
      attrs: { _hid: 0 }
    },
    [
      _c("img", {
        staticClass: "loading_logo",
        attrs: { src: __webpack_require__(/*! ../../static/loading_logo.png */ "C:\\Users\\Dell\\Documents\\HBuilderProjects\\起小名\\static\\loading_logo.png"), _hid: 1 }
      }),
      _c("div", { staticClass: "loading_bagua", attrs: { _hid: 2 } }, [
        _c("img", {
          staticClass: "loading_zi",
          attrs: { src: __webpack_require__(/*! ../../static/zi.png */ "C:\\Users\\Dell\\Documents\\HBuilderProjects\\起小名\\static\\zi.png"), _hid: 3 }
        }),
        _c("img", {
          staticClass: "loading_dian",
          attrs: { src: __webpack_require__(/*! ../../static/dian.png */ "C:\\Users\\Dell\\Documents\\HBuilderProjects\\起小名\\static\\dian.png"), _hid: 4 }
        }),
        _c("img", {
          staticClass: "bagua",
          attrs: { src: __webpack_require__(/*! ../../static/bagua.png */ "C:\\Users\\Dell\\Documents\\HBuilderProjects\\起小名\\static\\bagua.png"), _hid: 5 }
        }),
        _c("div", { staticClass: "space", attrs: { _hid: 6 } }),
        _c(
          "div",
          { class: { hide: _vm.loading_time < 1 }, attrs: { _hid: 7 } },
          []
        ),
        _c(
          "div",
          { class: { hide: _vm.loading_time < 2 }, attrs: { _hid: 9 } },
          []
        ),
        _c(
          "div",
          { class: { hide: _vm.loading_time < 3 }, attrs: { _hid: 11 } },
          []
        ),
        _c(
          "div",
          { class: { hide: _vm.loading_time < 4 }, attrs: { _hid: 13 } },
          []
        ),
        _c(
          "div",
          { class: { hide: _vm.loading_time < 5 }, attrs: { _hid: 15 } },
          []
        ),
        _c(
          "div",
          { class: { hide: _vm.loading_time < 6 }, attrs: { _hid: 17 } },
          []
        )
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Dell\\Documents\\HBuilderProjects\\起小名\\components\\w-youshi\\w-youshi.vue?vue&type=template&id=ac0c66e4&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/Dell/Documents/HBuilderProjects/起小名/components/w-youshi/w-youshi.vue?vue&type=template&id=ac0c66e4& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", { staticClass: "youshi", attrs: { _hid: 0 } }, [
    _c("view", { staticClass: "item1", attrs: { _hid: 1 } }, [
      _c("text", { staticClass: "text1", attrs: { _hid: 2 } }, []),
      _c("text", { staticClass: "text2", attrs: { _hid: 4 } }, []),
      _c(
        "text",
        { staticClass: "text3", attrs: { _hid: 6 } },
        [_c("i", { attrs: { _hid: 7 } })],
        1
      ),
      _c(
        "text",
        { staticClass: "text3", attrs: { _hid: 9 } },
        [_c("i", { attrs: { _hid: 10 } })],
        1
      ),
      _c(
        "text",
        { staticClass: "text3", attrs: { _hid: 12 } },
        [_c("i", { attrs: { _hid: 13 } })],
        1
      )
    ]),
    _c("view", { staticClass: "item2", attrs: { _hid: 15 } }, [
      _c("view", { staticClass: "text1", attrs: { _hid: 16 } }, [
        _c(
          "view",
          { staticClass: "flex", attrs: { _hid: 17 } },
          [
            _c("i", { staticClass: "icon", attrs: { _hid: 18 } }),
            _c("view", { attrs: { _hid: 19 } }, [])
          ],
          1
        ),
        _c(
          "view",
          { staticClass: "flex", attrs: { _hid: 21 } },
          [
            _c("i", { staticClass: "icon", attrs: { _hid: 22 } }),
            _c("view", { attrs: { _hid: 23 } }, [])
          ],
          1
        ),
        _c(
          "view",
          { staticClass: "flex", attrs: { _hid: 25 } },
          [
            _c("i", { staticClass: "icon", attrs: { _hid: 26 } }),
            _c("view", { attrs: { _hid: 27 } }, [])
          ],
          1
        ),
        _c(
          "view",
          { staticClass: "flex", attrs: { _hid: 29 } },
          [
            _c("i", { staticClass: "icon", attrs: { _hid: 30 } }),
            _c("view", { attrs: { _hid: 31 } }, [])
          ],
          1
        )
      ]),
      _c(
        "view",
        { staticClass: "text2", attrs: { _hid: 33 } },
        [
          _c("text", { attrs: { _hid: 35 } }, []),
          _c("br", { attrs: { _hid: 37 } }),
          _c("text", { attrs: { _hid: 39 } }, [])
        ],
        1
      ),
      _vm._m(0),
      _c("view", { staticClass: "text4", attrs: { _hid: 57 } }),
      _c(
        "view",
        { staticClass: "text2", attrs: { _hid: 58 } },
        [
          _c("text", { attrs: { _hid: 60 } }, []),
          _c("br", { attrs: { _hid: 62 } }),
          _c("text", { attrs: { _hid: 64 } }, [])
        ],
        1
      ),
      _vm._m(1),
      _vm._m(2),
      _c("view", { staticClass: "text6", attrs: { _hid: 80 } })
    ]),
    _vm._m(3),
    _vm._m(4),
    _vm._m(5),
    _vm._m(6),
    _vm._m(7),
    _vm._m(8),
    _vm._m(9),
    _vm._m(10),
    _vm._m(11)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "text3", attrs: { _hid: 41 } }, [
      _c("span", { attrs: { _hid: 43 } }, []),
      _c("span", { attrs: { _hid: 46 } }, []),
      _c("span", { staticClass: "co_bd9a55", attrs: { _hid: 49 } }, []),
      _c("span", { attrs: { _hid: 52 } }, []),
      _c("span", { attrs: { _hid: 55 } }, [])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "text3", attrs: { _hid: 66 } }, [
      _c("span", { attrs: { _hid: 68 } }, [])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "text5", attrs: { _hid: 70 } }, [
      _c("view", { attrs: { _hid: 71 } }, [
        _c("text", { attrs: { _hid: 72 } }, [])
      ]),
      _c("view", { attrs: { _hid: 74 } }, [
        _c("text", { attrs: { _hid: 75 } }, [])
      ]),
      _c("view", { attrs: { _hid: 77 } }, [
        _c("text", { attrs: { _hid: 78 } }, [])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "item3", attrs: { _hid: 81 } }, [
      _c("view", { staticClass: "text1", attrs: { _hid: 82 } }, []),
      _c("view", { staticClass: "text2", attrs: { _hid: 84 } }, [
        _c("text", { attrs: { _hid: 85 } }, [
          _c("text", { attrs: { _hid: 86 } }, []),
          _c("text", { attrs: { _hid: 88 } }, [])
        ]),
        _c("text", { attrs: { _hid: 90 } }, [
          _c("text", { attrs: { _hid: 91 } }, []),
          _c("text", { attrs: { _hid: 93 } }, [])
        ]),
        _c("text", { attrs: { _hid: 95 } }, [
          _c("text", { attrs: { _hid: 96 } }, []),
          _c("text", { attrs: { _hid: 98 } }, [])
        ])
      ]),
      _c("view", { staticClass: "text3", attrs: { _hid: 100 } }, [
        _c("text", { attrs: { _hid: 101 } }, [
          _c("text", { attrs: { _hid: 102 } }, []),
          _c("text", { attrs: { _hid: 104 } }, [])
        ]),
        _c("text", { attrs: { _hid: 106 } }, [
          _c("text", { attrs: { _hid: 107 } }, [])
        ]),
        _c("text", { attrs: { _hid: 109 } }, [
          _c("text", { attrs: { _hid: 110 } }, [])
        ])
      ]),
      _c("view", { staticClass: "text4", attrs: { _hid: 112 } }, [
        _c("view", { attrs: { _hid: 113 } }, []),
        _c("view", { attrs: { _hid: 115 } }, [])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "item4", attrs: { _hid: 117 } }, [
      _c("view", { staticClass: "text1", attrs: { _hid: 118 } }, []),
      _c("view", { staticClass: "text2", attrs: { _hid: 120 } }, [
        _c("view", { staticClass: "c1", attrs: { _hid: 121 } }, [
          _c("text", { attrs: { _hid: 123 } }, []),
          _c("text", { attrs: { _hid: 126 } }, []),
          _c("text", { attrs: { _hid: 129 } }, [])
        ]),
        _c("view", { staticClass: "c2", attrs: { _hid: 132 } }, [
          _c("text", { attrs: { _hid: 134 } }, []),
          _c("text", { attrs: { _hid: 137 } }, [])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "item5", attrs: { _hid: 140 } }, [
      _c("view", { staticClass: "text1", attrs: { _hid: 141 } }, []),
      _c("view", { staticClass: "text2", attrs: { _hid: 143 } }, [
        _c("text", { attrs: { _hid: 145 } }, [])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "item6", attrs: { _hid: 148 } }, [
      _c("view", { staticClass: "text1", attrs: { _hid: 149 } }, []),
      _c("view", { staticClass: "text2", attrs: { _hid: 151 } }, []),
      _c("view", { staticClass: "text4 grid", attrs: { _hid: 153 } }, [
        _c("text", { attrs: { _hid: 154 } }, [
          _c("text", { attrs: { _hid: 155 } }, [])
        ]),
        _c("text", { attrs: { _hid: 157 } }, [
          _c("text", { attrs: { _hid: 158 } }, [])
        ]),
        _c("text", { attrs: { _hid: 160 } }, [
          _c("text", { attrs: { _hid: 161 } }, [])
        ])
      ]),
      _c("view", { staticClass: "text5 grid", attrs: { _hid: 163 } }, [
        _c("text", { attrs: { _hid: 164 } }, [
          _c("text", { attrs: { _hid: 165 } }, [])
        ]),
        _c("text", { attrs: { _hid: 167 } }, [
          _c("text", { attrs: { _hid: 168 } }, [])
        ]),
        _c("text", { attrs: { _hid: 170 } }, [
          _c("text", { attrs: { _hid: 171 } }, [])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "item7", attrs: { _hid: 173 } }, [
      _c("view", { staticClass: "text1", attrs: { _hid: 174 } }, []),
      _c("view", { staticClass: "text2", attrs: { _hid: 176 } }, [])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "item8", attrs: { _hid: 178 } }, [
      _c("view", { staticClass: "text1", attrs: { _hid: 179 } }, []),
      _c("view", { staticClass: "text2", attrs: { _hid: 181 } }, []),
      _c("view", { staticClass: "text3", attrs: { _hid: 183 } }, [
        _c("text", { attrs: { _hid: 185 } }, [])
      ]),
      _c("view", { staticClass: "text4 grid", attrs: { _hid: 188 } }, [
        _c("text", { attrs: { _hid: 189 } }, [
          _c("text", { attrs: { _hid: 190 } }, [])
        ]),
        _c("text", { attrs: { _hid: 192 } }, [
          _c("text", { attrs: { _hid: 193 } }, [])
        ]),
        _c("text", { attrs: { _hid: 195 } }, [
          _c("text", { attrs: { _hid: 196 } }, [])
        ]),
        _c("text", { attrs: { _hid: 198 } }, [
          _c("text", { attrs: { _hid: 199 } }, [])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "item9", attrs: { _hid: 201 } }, [
      _c("view", { staticClass: "text2", attrs: { _hid: 202 } }, []),
      _c("view", { staticClass: "text3", attrs: { _hid: 204 } }, [
        _c("text", { attrs: { _hid: 206 } }, [])
      ]),
      _c("view", { staticClass: "text4 grid", attrs: { _hid: 209 } }, [
        _c("text", { attrs: { _hid: 210 } }, [
          _c("text", { attrs: { _hid: 211 } }, [])
        ]),
        _c("text", { attrs: { _hid: 213 } }, [
          _c("text", { attrs: { _hid: 214 } }, [])
        ]),
        _c("text", { attrs: { _hid: 216 } }, [
          _c("text", { attrs: { _hid: 217 } }, [])
        ]),
        _c("text", { attrs: { _hid: 219 } }, [
          _c("text", { attrs: { _hid: 220 } }, [])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "item10", attrs: { _hid: 222 } }, [
      _c("view", { staticClass: "text2", attrs: { _hid: 223 } }, []),
      _c("view", { staticClass: "text3", attrs: { _hid: 225 } }, [
        _c("text", { attrs: { _hid: 227 } }, []),
        _c("text", { attrs: { _hid: 230 } }, [])
      ]),
      _c("view", { staticClass: "text4 grid", attrs: { _hid: 232 } }, [
        _c("text", { attrs: { _hid: 233 } }, [
          _c("text", { attrs: { _hid: 234 } }, [])
        ]),
        _c("text", { attrs: { _hid: 236 } }, [
          _c("text", { attrs: { _hid: 237 } }, [])
        ]),
        _c("text", { attrs: { _hid: 239 } }, [
          _c("text", { attrs: { _hid: 240 } }, [])
        ]),
        _c("text", { attrs: { _hid: 242 } }, [
          _c("text", { attrs: { _hid: 243 } }, [])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "item11", attrs: { _hid: 245 } }, [
      _c("view", { staticClass: "text1", attrs: { _hid: 246 } }, []),
      _c("view", { staticClass: "text2", attrs: { _hid: 248 } }, [
        _c("text", { attrs: { _hid: 249 } }),
        _c("text", { attrs: { _hid: 250 } }, [
          _c("text", { attrs: { _hid: 252 } }, [])
        ])
      ]),
      _c("view", { staticClass: "text3", attrs: { _hid: 254 } }, [
        _c("text", { attrs: { _hid: 255 } }, [
          _c("text", { attrs: { _hid: 257 } }, [])
        ]),
        _c("text", { attrs: { _hid: 259 } })
      ]),
      _c("view", { staticClass: "text4", attrs: { _hid: 260 } }, [
        _c("text", { attrs: { _hid: 261 } }),
        _c("text", { attrs: { _hid: 262 } }, [
          _c("text", { attrs: { _hid: 264 } }, [])
        ])
      ]),
      _c("view", { staticClass: "text5", attrs: { _hid: 266 } }, [
        _c("text", { attrs: { _hid: 267 } }, [
          _c("text", { attrs: { _hid: 269 } }, [])
        ]),
        _c("text", { attrs: { _hid: 271 } })
      ]),
      _c("view", { staticClass: "text6", attrs: { _hid: 272 } }, [
        _c("text", { attrs: { _hid: 273 } }),
        _c("text", { attrs: { _hid: 274 } }, [
          _c("text", { attrs: { _hid: 276 } }, [])
        ])
      ]),
      _c("view", { staticClass: "text1", attrs: { _hid: 278 } }, []),
      _c("view", { staticClass: "text7", attrs: { _hid: 280 } }),
      _c("view", { staticClass: "text8", attrs: { _hid: 281 } }, [
        _c("view", { staticClass: "t1", attrs: { _hid: 282 } }, []),
        _c("view", { staticClass: "t1", attrs: { _hid: 284 } }, []),
        _c("view", { staticClass: "t2", attrs: { _hid: 286 } }, [
          _c("text", { attrs: { _hid: 287 } }, [])
        ]),
        _c("view", { staticClass: "t2", attrs: { _hid: 290 } }, [
          _c("text", { attrs: { _hid: 291 } }, [])
        ]),
        _c("view", { staticClass: "t2", attrs: { _hid: 294 } }, [
          _c("text", { attrs: { _hid: 295 } }, [])
        ]),
        _c("view", { staticClass: "t2", attrs: { _hid: 298 } }, [
          _c("text", { attrs: { _hid: 299 } }, [])
        ]),
        _c("view", { staticClass: "t2", attrs: { _hid: 302 } }, [
          _c("text", { attrs: { _hid: 303 } }, [])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vuex/dist/vuex.esm.js":
/*!********************************************!*\
  !*** ./node_modules/vuex/dist/vuex.esm.js ***!
  \********************************************/
/*! exports provided: Store, install, mapState, mapMutations, mapGetters, mapActions, createNamespacedHelpers, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapState", function() { return mapState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapMutations", function() { return mapMutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapGetters", function() { return mapGetters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapActions", function() { return mapActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNamespacedHelpers", function() { return createNamespacedHelpers; });
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var applyMixin = function (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
};

var devtoolHook =
  typeof window !== 'undefined' &&
  window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */


/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  this._children = Object.create(null);
  this._rawModule = rawModule;
  var rawState = rawModule.state;
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors$1 = { namespaced: { configurable: true } };

prototypeAccessors$1.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors$1 );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if (true) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (!parent.getChild(key).runtime) { return }

  parent.removeChild(key);
};

function update (path, targetModule, newModule) {
  if (true) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if (true) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if (true) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "Store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  var state = options.state; if ( state === void 0 ) state = {};
  if (typeof state === 'function') {
    state = state() || {};
  }

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  if (Vue.config.devtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors = { state: { configurable: true } };

prototypeAccessors.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors.state.set = function (v) {
  if (true) {
    assert(false, "Use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if (true) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });
  this._subscribers.forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
     true &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if (true) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  this._actionSubscribers.forEach(function (sub) { return sub(action, this$1.state); });

  return entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload)
};

Store.prototype.subscribe = function subscribe (fn) {
  return genericSubscribe(fn, this._subscribers)
};

Store.prototype.subscribeAction = function subscribeAction (fn) {
  return genericSubscribe(fn, this._actionSubscribers)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if (true) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hotUpdate = function hotUpdate (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors );

function genericSubscribe (fn, subs) {
  if (subs.indexOf(fn) < 0) {
    subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    computed[key] = function () { return fn(store); };
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ( true && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ( true && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  var gettersProxy = {};

  var splitPos = namespace.length;
  Object.keys(store.getters).forEach(function (type) {
    // skip if the target getter is not match this namespace
    if (type.slice(0, splitPos) !== namespace) { return }

    // extract local getter type
    var localType = type.slice(splitPos);

    // Add a port to the getters proxy.
    // Define as getter property because
    // we do not want to evaluate the getters in this time.
    Object.defineProperty(gettersProxy, localType, {
      get: function () { return store.getters[type]; },
      enumerable: true
    });
  });

  return gettersProxy
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload, cb) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload, cb);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if (true) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if (true) {
      assert(store._committing, "Do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.length
    ? path.reduce(function (state, key) { return state[key]; }, state)
    : state
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if (true) {
    assert(typeof type === 'string', ("Expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if (true) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if ( true && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

function normalizeMap (map) {
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if ( true && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

var index_esm = {
  Store: Store,
  install: install,
  version: '3.0.1',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers
};


/* harmony default export */ __webpack_exports__["default"] = (index_esm);


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "C:\\Users\\Dell\\Documents\\HBuilderProjects\\起小名\\common\\login.js":
/*!********************************************************************!*\
  !*** C:/Users/Dell/Documents/HBuilderProjects/起小名/common/login.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _store = _interopRequireDefault(__webpack_require__(/*! ../store.js */ "C:\\Users\\Dell\\Documents\\HBuilderProjects\\起小名\\store.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
function login() {
  return new Promise(function (resolve, reject) {
    uni.login({
      success: function success(info) {
        //向服务器请求token
        if (info.code) {
          uni.request({

            url: _store.default.state.baseUrl + '/api/baiduxcx/get_openid',




            header: {
              "Content-Type": "application/x-www-form-urlencoded" },

            method: 'POST',
            data: {
              code: info.code,
              app: 1,
              appflag: _store.default.state.appflag },

            success: function success(res) {
              if (res.data.code == 1) {
                uni.setStorageSync('token', res.data.data.open_id);
                //保存用户信息
                uni.getUserInfo({
                  success: function success(user) {
                    uni.setStorageSync('userInfo', user.userInfo);
                  } });


                resolve(res.data.data);
              } else {
                reject(res.data.msg);
              }
            } });

        }

      } });

  });

}var _default =

login;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-baidu/dist/index.js */ "./node_modules/@dcloudio/uni-mp-baidu/dist/index.js")["default"]))

/***/ }),

/***/ "C:\\Users\\Dell\\Documents\\HBuilderProjects\\起小名\\components\\w-loading\\w-loading.vue":
/*!***************************************************************************************!*\
  !*** C:/Users/Dell/Documents/HBuilderProjects/起小名/components/w-loading/w-loading.vue ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _w_loading_vue_vue_type_template_id_43e49b3c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./w-loading.vue?vue&type=template&id=43e49b3c&scoped=true& */ "C:\\Users\\Dell\\Documents\\HBuilderProjects\\起小名\\components\\w-loading\\w-loading.vue?vue&type=template&id=43e49b3c&scoped=true&");
/* harmony import */ var _w_loading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./w-loading.vue?vue&type=script&lang=js& */ "C:\\Users\\Dell\\Documents\\HBuilderProjects\\起小名\\components\\w-loading\\w-loading.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _w_loading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _w_loading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _w_loading_vue_vue_type_style_index_0_id_43e49b3c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./w-loading.vue?vue&type=style&index=0&id=43e49b3c&scoped=true&lang=css& */ "C:\\Users\\Dell\\Documents\\HBuilderProjects\\起小名\\components\\w-loading\\w-loading.vue?vue&type=style&index=0&id=43e49b3c&scoped=true&lang=css&");
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _w_loading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _w_loading_vue_vue_type_template_id_43e49b3c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _w_loading_vue_vue_type_template_id_43e49b3c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "43e49b3c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "C:/Users/Dell/Documents/HBuilderProjects/起小名/components/w-loading/w-loading.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "C:\\Users\\Dell\\Documents\\HBuilderProjects\\起小名\\components\\w-loading\\w-loading.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************!*\
  !*** C:/Users/Dell/Documents/HBuilderProjects/起小名/components/w-loading/w-loading.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_w_loading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./w-loading.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Dell\\Documents\\HBuilderProjects\\起小名\\components\\w-loading\\w-loading.vue?vue&type=script&lang=js&");
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_w_loading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_w_loading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_w_loading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_w_loading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_w_loading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "C:\\Users\\Dell\\Documents\\HBuilderProjects\\起小名\\components\\w-loading\\w-loading.vue?vue&type=style&index=0&id=43e49b3c&scoped=true&lang=css&":
/*!************************************************************************************************************************************************!*\
  !*** C:/Users/Dell/Documents/HBuilderProjects/起小名/components/w-loading/w-loading.vue?vue&type=style&index=0&id=43e49b3c&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_w_loading_vue_vue_type_style_index_0_id_43e49b3c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./w-loading.vue?vue&type=style&index=0&id=43e49b3c&scoped=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Dell\\Documents\\HBuilderProjects\\起小名\\components\\w-loading\\w-loading.vue?vue&type=style&index=0&id=43e49b3c&scoped=true&lang=css&");
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_w_loading_vue_vue_type_style_index_0_id_43e49b3c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_w_loading_vue_vue_type_style_index_0_id_43e49b3c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_w_loading_vue_vue_type_style_index_0_id_43e49b3c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_w_loading_vue_vue_type_style_index_0_id_43e49b3c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_w_loading_vue_vue_type_style_index_0_id_43e49b3c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "C:\\Users\\Dell\\Documents\\HBuilderProjects\\起小名\\components\\w-loading\\w-loading.vue?vue&type=template&id=43e49b3c&scoped=true&":
/*!**********************************************************************************************************************************!*\
  !*** C:/Users/Dell/Documents/HBuilderProjects/起小名/components/w-loading/w-loading.vue?vue&type=template&id=43e49b3c&scoped=true& ***!
  \**********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_w_loading_vue_vue_type_template_id_43e49b3c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./w-loading.vue?vue&type=template&id=43e49b3c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Dell\\Documents\\HBuilderProjects\\起小名\\components\\w-loading\\w-loading.vue?vue&type=template&id=43e49b3c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_w_loading_vue_vue_type_template_id_43e49b3c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_w_loading_vue_vue_type_template_id_43e49b3c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "C:\\Users\\Dell\\Documents\\HBuilderProjects\\起小名\\components\\w-youshi\\w-youshi.vue":
/*!*************************************************************************************!*\
  !*** C:/Users/Dell/Documents/HBuilderProjects/起小名/components/w-youshi/w-youshi.vue ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _w_youshi_vue_vue_type_template_id_ac0c66e4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./w-youshi.vue?vue&type=template&id=ac0c66e4& */ "C:\\Users\\Dell\\Documents\\HBuilderProjects\\起小名\\components\\w-youshi\\w-youshi.vue?vue&type=template&id=ac0c66e4&");
/* harmony import */ var _w_youshi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./w-youshi.vue?vue&type=script&lang=js& */ "C:\\Users\\Dell\\Documents\\HBuilderProjects\\起小名\\components\\w-youshi\\w-youshi.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _w_youshi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _w_youshi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _w_youshi_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./w-youshi.vue?vue&type=style&index=0&lang=less& */ "C:\\Users\\Dell\\Documents\\HBuilderProjects\\起小名\\components\\w-youshi\\w-youshi.vue?vue&type=style&index=0&lang=less&");
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _w_youshi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _w_youshi_vue_vue_type_template_id_ac0c66e4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _w_youshi_vue_vue_type_template_id_ac0c66e4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "C:/Users/Dell/Documents/HBuilderProjects/起小名/components/w-youshi/w-youshi.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "C:\\Users\\Dell\\Documents\\HBuilderProjects\\起小名\\components\\w-youshi\\w-youshi.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************!*\
  !*** C:/Users/Dell/Documents/HBuilderProjects/起小名/components/w-youshi/w-youshi.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_w_youshi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./w-youshi.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Dell\\Documents\\HBuilderProjects\\起小名\\components\\w-youshi\\w-youshi.vue?vue&type=script&lang=js&");
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_w_youshi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_w_youshi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_w_youshi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_w_youshi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_w_youshi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "C:\\Users\\Dell\\Documents\\HBuilderProjects\\起小名\\components\\w-youshi\\w-youshi.vue?vue&type=style&index=0&lang=less&":
/*!***********************************************************************************************************************!*\
  !*** C:/Users/Dell/Documents/HBuilderProjects/起小名/components/w-youshi/w-youshi.vue?vue&type=style&index=0&lang=less& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_w_youshi_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-1!./node_modules/css-loader??ref--10-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-oneOf-1-3!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!./node_modules/vue-loader/lib??vue-loader-options!./w-youshi.vue?vue&type=style&index=0&lang=less& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Dell\\Documents\\HBuilderProjects\\起小名\\components\\w-youshi\\w-youshi.vue?vue&type=style&index=0&lang=less&");
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_w_youshi_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_w_youshi_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_w_youshi_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_w_youshi_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_w_youshi_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "C:\\Users\\Dell\\Documents\\HBuilderProjects\\起小名\\components\\w-youshi\\w-youshi.vue?vue&type=template&id=ac0c66e4&":
/*!********************************************************************************************************************!*\
  !*** C:/Users/Dell/Documents/HBuilderProjects/起小名/components/w-youshi/w-youshi.vue?vue&type=template&id=ac0c66e4& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_w_youshi_vue_vue_type_template_id_ac0c66e4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./w-youshi.vue?vue&type=template&id=ac0c66e4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Dell\\Documents\\HBuilderProjects\\起小名\\components\\w-youshi\\w-youshi.vue?vue&type=template&id=ac0c66e4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_w_youshi_vue_vue_type_template_id_ac0c66e4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_w_youshi_vue_vue_type_template_id_ac0c66e4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "C:\\Users\\Dell\\Documents\\HBuilderProjects\\起小名\\pages.json":
/*!***************************************************************!*\
  !*** C:/Users/Dell/Documents/HBuilderProjects/起小名/pages.json ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "C:\\Users\\Dell\\Documents\\HBuilderProjects\\起小名\\static\\bagua.png":
/*!*********************************************************************!*\
  !*** C:/Users/Dell/Documents/HBuilderProjects/起小名/static/bagua.png ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALgAAAC4CAYAAABQMybHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoyOUFBRDEyQUQ5RDhFNzExQjY2MkIwMjQ0QThCMkY1NCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBMkQ3NkNFNzgwQzMxMUU4OUFDNUI4NDVFMzdCOUJDQyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBMkQ3NkNFNjgwQzMxMUU4OUFDNUI4NDVFMzdCOUJDQyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZWRiYTdiZDEtMTIxYi1kNDQ1LTgzNDgtZGJhMjQzOWZmZmViIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjI5QUFEMTJBRDlEOEU3MTFCNjYyQjAyNDRBOEIyRjU0Ii8+IDwvcmRmOkRlc2Ny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"

/***/ }),

/***/ "C:\\Users\\Dell\\Documents\\HBuilderProjects\\起小名\\static\\dian.png":
/*!********************************************************************!*\
  !*** C:/Users/Dell/Documents/HBuilderProjects/起小名/static/dian.png ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALgAAAC4CAYAAABQMybHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoyOUFBRDEyQUQ5RDhFNzExQjY2MkIwMjQ0QThCMkY1NCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2NUQ3MzIxQTgwQzMxMUU4QjJGMUEzMTk5NzM4M0ZCQyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2NUQ3MzIxOTgwQzMxMUU4QjJGMUEzMTk5NzM4M0ZCQyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZWRiYTdiZDEtMTIxYi1kNDQ1LTgzNDgtZGJhMjQzOWZmZmViIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjI5QUFEMTJBRDlEOEU3MTFCNjYyQjAyNDRBOEIyRjU0Ii8+IDwvcmRmOkRlc2Ny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"

/***/ }),

/***/ "C:\\Users\\Dell\\Documents\\HBuilderProjects\\起小名\\static\\loading_logo.png":
/*!****************************************************************************!*\
  !*** C:/Users/Dell/Documents/HBuilderProjects/起小名/static/loading_logo.png ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKIAAABACAMAAACuoFygAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCNTBDOTVDRTgwQjgxMUU4Qjk4RUNCMUQxNUM4RkEwNSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCNTBDOTVDRjgwQjgxMUU4Qjk4RUNCMUQxNUM4RkEwNSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkI1MEM5NUNDODBCODExRThCOThFQ0IxRDE1QzhGQTA1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkI1MEM5NUNEODBCODExRThCOThFQ0IxRDE1QzhGQTA1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+iLlYogAAAYBQTFRFqSoozmlryFha2nM1skY6xENH3IBXtlFF36il2XhY7uLdwzQw4Kyr8vDs7LOS////47q4vTAuyEc9uhsh0WJN5Zhv89nV5cC93J+e+/Lw7+fi2ZKStz0169TR5sXC1m1T45uP3HxF3Yp28Ozo1YOD34RUuC8svSct4rGu6c7L4rWyzmBMyl5JsS0q03x98Orl2o6N0VlI13Jn9djHwFhC25OE7d7Z6dHO7NrWx3t39eDc02lkyDcyrDsy/fn5xmdd36Og47i2pzIuy1NExTs1wDIv8c7Mu2dn0HN0wjk93Xg8+e3r9vTxwDU4yTk07snH58rH+vf11ouKwHZr3nU3x01QnyYl25iXwE8/sjMvyISBvy0z/vz8+Orn9+bl34BJ1ZSS+vn4xG5s1X1w7b68zkxEwz9C16Sa0V5auGRU3oaAzFlHzJGNvCEn1oeH0G5wy11f/v7+/v39yVNW6sGz6tfT0nd4/Pv63ntAxkA40JqYxHFf57a26aeE58fE8e/qPJu3zgAAAIB0Uk5T/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wA4BUtnAAAMXElEQVR42syaiVsaWRLAORs5DEijKIfEcHlxmBBgTJOgaKIMEDWNwJBInKwmswaBGA9mJ9P/+lZVN9Bg42Z251tT8bPP+H5dr65X3SrhTpksHF93rFbrl+v9wqRwP6K6E/DYKpPO8eSPhjgMSHIvkOMRCx3rbekUfiDE/T7VzzMvZ+b6kPs/DGJB4nvyrcE3fCXu5J8v74tRGdH0WsR5EswHgw2eZ7gSV/okQRZ+BMSJf5IdPv/GB+0AZwRGOzCW4m/x9JfUvSMmn9nR9Dpz0w0fAAKaAxR5EzwpcY+f44WjeOx+EZ0n3CIq63rawZ2sASJIycHc8Degycdf8NLDT+n7RFwslU6I40HpBJXn4zjC9PG8ESb7Iapx336ydH+IWeCxkKcYS0EgvOFPREUCogMnfR3MtBPnun+O+4stvV7fdiqbgqulVsdN/xuiBeY0SJY4beTQlR3gzdyakQnmeabrM/q6V8g/w5W6I3r025bFnTLL1pNjRptg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"

/***/ }),

/***/ "C:\\Users\\Dell\\Documents\\HBuilderProjects\\起小名\\static\\zi.png":
/*!******************************************************************!*\
  !*** C:/Users/Dell/Documents/HBuilderProjects/起小名/static/zi.png ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALgAAAC4CAYAAABQMybHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoyOUFBRDEyQUQ5RDhFNzExQjY2MkIwMjQ0QThCMkY1NCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozNkQyNjE0RDgwQzMxMUU4OUU0MEVDQzU5NzIwMDYwOCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozNkQyNjE0QzgwQzMxMUU4OUU0MEVDQzU5NzIwMDYwOCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZWRiYTdiZDEtMTIxYi1kNDQ1LTgzNDgtZGJhMjQzOWZmZmViIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjI5QUFEMTJBRDlEOEU3MTFCNjYyQjAyNDRBOEIyRjU0Ii8+IDwvcmRmOkRlc2Ny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"

/***/ }),

/***/ "C:\\Users\\Dell\\Documents\\HBuilderProjects\\起小名\\store.js":
/*!*************************************************************!*\
  !*** C:/Users/Dell/Documents/HBuilderProjects/起小名/store.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/megalo/dist/megalo.mp.esm.js"));
var _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
_vue.default.use(_vuex.default);
var store = new _vuex.default.Store({
  state: {
    baseUrl: 'https://qiming.yw11.com',
    appflag: 'qmwqmw' },

  mutations: {},


  actions: {} });var _default =




store;exports.default = _default;

/***/ })

}]);
//# sourceMappingURL=../../.sourcemap/mp-baidu/common/vendor.js.map