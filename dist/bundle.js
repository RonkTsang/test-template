/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@tencent/viola-style-loader/dist/index.js!./node_modules/@tencent/viola-vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-e4eb0fc6\",\"scoped\":true,\"sourceMap\":false}!./node_modules/@tencent/viola-vue-loader/lib/selector.js?type=styles&index=0!./src/component/hotTopic/index.vue":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@tencent/viola-style-loader/dist!./node_modules/@tencent/viola-vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-e4eb0fc6","scoped":true,"sourceMap":false}!./node_modules/@tencent/viola-vue-loader/lib/selector.js?type=styles&index=0!./src/component/hotTopic/index.vue ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "style": {
      "width": "750",
      "backgroundColor": "#FFFFFF"
    },
    "scoped_id": "data-v-e4eb0fc6",
    "state": {},
    "attrs": {},
    "children": []
  },
  "cover": {
    "style": {
      "position": "absolute",
      "left": "0",
      "right": "0",
      "top": "0",
      "bottom": "0",
      "backgroundColor": "white",
      "justifyContent": "center",
      "alignItems": "center"
    },
    "scoped_id": "data-v-e4eb0fc6",
    "state": {},
    "attrs": {},
    "children": []
  }
}

/***/ }),

/***/ "./node_modules/@tencent/viola-style-loader/dist/index.js!./node_modules/@tencent/viola-vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/@tencent/viola-vue-loader/lib/selector.js?type=styles&index=0!./src/component/hotTopic/topicCard.vue":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@tencent/viola-style-loader/dist!./node_modules/@tencent/viola-vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/@tencent/viola-vue-loader/lib/selector.js?type=styles&index=0!./src/component/hotTopic/topicCard.vue ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "card_wrapper": {
    "style": {
      "flexDirection": "row",
      "flexWrap": "noWrap",
      "backgroundColor": "#ffffff",
      "height": "140",
      "margin": "20",
      "marginBottom": "0"
    },
    "scoped_id": "",
    "state": {},
    "attrs": {},
    "children": []
  },
  "card_img": {
    "style": {
      "width": "140",
      "height": "140",
      "backgroundColor": "#EFEFEF"
    },
    "scoped_id": "",
    "state": {},
    "attrs": {},
    "children": []
  },
  "card_content": {
    "style": {
      "flex": "1",
      "flexDirection": "column",
      "flexWrap": "noWrap",
      "marginLeft": "26",
      "justifyContent": "center",
      "height": "140",
      "borderBottomWidth": "1dp",
      "borderBottomColor": "#EDEDED"
    },
    "scoped_id": "",
    "state": {},
    "attrs": {},
    "children": []
  },
  "card_title": {
    "style": {
      "fontSize": "28",
      "color": "#000000",
      "height": "36",
      "lines": "1",
      "textOverflow": "ellipsis"
    },
    "scoped_id": "",
    "state": {},
    "attrs": {},
    "children": []
  },
  "card_desc": {
    "style": {
      "fontSize": "22",
      "color": "#9d9d9d",
      "marginTop": "15",
      "marginRight": "13",
      "lines": "1",
      "textOverflow": "ellipsis"
    },
    "scoped_id": "",
    "state": {},
    "attrs": {},
    "children": []
  }
}

/***/ }),

/***/ "./node_modules/@tencent/viola-vue-loader/lib/runtime/component-normalizer.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@tencent/viola-vue-loader/lib/runtime/component-normalizer.js ***!
  \************************************************************************************/
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
  scriptExports = scriptExports || {}

  // ES6 modules interop
  var type = typeof scriptExports.default
  if (type === 'object' || type === 'function') {
    scriptExports = scriptExports.default
  }

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
    options._scopeId = scopeId
  }

  // a style object
  options._stylesheet = injectStyles
  
  /* 样式加载函数 */
  // var hook
  // if (moduleIdentifier) { // server build
  //   hook = function (context) {
  //     // 2.3 injection
  //     context =
  //       context || // cached call
  //       (this.$vnode && this.$vnode.ssrContext) || // stateful
  //       (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
  //     // 2.2 with runInNewContext: true
  //     if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
  //       context = __VUE_SSR_CONTEXT__
  //     }
  //     // inject component styles
  //     if (injectStyles) {
  //       injectStyles.call(this, context)
  //     }
  //     // register component module identifier for async chunk inferrence
  //     if (context && context._registeredComponents) {
  //       context._registeredComponents.add(moduleIdentifier)
  //     }
  //   }
  //   // used by ssr in case component is cached and beforeCreate
  //   // never gets called
  //   options._ssrRegister = hook
  // } else if (injectStyles) {
  //   hook = shadowMode
  //     ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
  //     : injectStyles
  // }

  /* 将 样式加载 放入了回调钩子了 */
  // if (hook) {
  //   console.log('options： ', options)
  //   if (options.functional) {
  //     // for template-only hot-reload because in that case the render fn doesn't
  //     // go through the normalizer
  //     options._injectStyles = hook
  //     // register for functioal component in vue file
  //     var originalRender = options.render
  //     // options.render = function renderWithStyleInjection (h, context) {
  //     //   hook.call(context)
  //     //   return originalRender(h, context)
  //     // }
  //   } else {
  //     // inject component registration as beforeCreate hook
  //     var existing = options.beforeCreate
  //     options.beforeCreate = existing
  //       ? [].concat(existing, hook)
  //       : [hook]
  //   }
  // }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/@tencent/viola-vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-683afc2a\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"objectAssign\":\"Object.assign\",\"transforms\":{}}}!./node_modules/@tencent/viola-vue-loader/lib/selector.js?type=template&index=0!./src/component/hotTopic/topicCard.vue":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@tencent/viola-vue-loader/lib/template-compiler?{"id":"data-v-683afc2a","hasScoped":false,"optionsId":"0","buble":{"objectAssign":"Object.assign","transforms":{}}}!./node_modules/@tencent/viola-vue-loader/lib/selector.js?type=template&index=0!./src/component/hotTopic/topicCard.vue ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      staticClass: "card_wrapper",
      on: {
        click: function($event) {
          _vm.jump(_vm.cardData.jump_url)
        }
      }
    },
    [
      _c("image", {
        staticClass: "card_img",
        attrs: { resize: "contain", src: _vm.cardData.img_url }
      }),
      _c("div", { staticClass: "card_content" }, [
        _c("text", { staticClass: "card_title" }, [
          _vm._v(_vm._s(_vm.cardData.content))
        ]),
        _c("text", { staticClass: "card_desc" }, [
          _vm._v(_vm._s(_vm.cardData.desc))
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {}

/***/ }),

/***/ "./node_modules/@tencent/viola-vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-e4eb0fc6\",\"hasScoped\":true,\"optionsId\":\"0\",\"buble\":{\"objectAssign\":\"Object.assign\",\"transforms\":{}}}!./node_modules/@tencent/viola-vue-loader/lib/selector.js?type=template&index=0!./src/component/hotTopic/index.vue":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@tencent/viola-vue-loader/lib/template-compiler?{"id":"data-v-e4eb0fc6","hasScoped":true,"optionsId":"0","buble":{"objectAssign":"Object.assign","transforms":{}}}!./node_modules/@tencent/viola-vue-loader/lib/selector.js?type=template&index=0!./src/component/hotTopic/index.vue ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _vm.list.length
      ? _c(
          "scroller",
          { staticClass: "wrapper" },
          _vm._l(_vm.list, function(data) {
            return _c("topic-card", { key: data.id, attrs: { cardData: data } })
          })
        )
      : _vm._e(),
    !_vm.list.length
      ? _c("div", { staticClass: "cover" }, [
          _c("text", { staticStyle: { fontSize: "15dp", color: "#3c3f41" } }, [
            _vm._v(_vm._s(_vm.loading))
          ])
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {}

/***/ }),

/***/ "./node_modules/buble-loader/index.js?{\"objectAssign\":\"Object.assign\"}!./node_modules/@tencent/viola-vue-loader/lib/selector.js?type=script&index=0!./src/component/hotTopic/index.vue":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/buble-loader?{"objectAssign":"Object.assign"}!./node_modules/@tencent/viola-vue-loader/lib/selector.js?type=script&index=0!./src/component/hotTopic/index.vue ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _topicCard_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./topicCard.vue */ "./src/component/hotTopic/topicCard.vue");

var obj;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var testItem = [{"id":1004695,"img_url":"http://qqpublic.qpic.cn/qq_public_cover/0/0647FFCB4EE8AEDAC77123D802AA7C92/0","content":"比尔盖茨2018年推荐书籍","desc":"看看首富又给我们推荐了什么书，这真是比你强的人还比你努力啊","is_recommend":0,"has_badge":0,"follow":0,"jump_url":"https://kandian.qq.com/mqq/vue/topic?_wv=3&_bid=2378&x5PreFetch=1&topicid=1004695&viewtype=1&sorttype=2&hasbanner=0&article_type=0"}];

var serverData = {
  "ret":0,
  "data":{
      "list":[{"id":1004695,"img_url":"http://qqpublic.qpic.cn/qq_public_cover/0/0647FFCB4EE8AEDAC77123D802AA7C92/0","content":"这是缓存数据","desc":"看看首富又给我们推荐了什么书，这真是比你强的人还比你努力啊","is_recommend":0,"has_badge":0,"follow":0,"jump_url":"https://kandian.qq.com/mqq/vue/topic?_wv=3&_bid=2378&x5PreFetch=1&topicid=1004695&viewtype=1&sorttype=2&hasbanner=0&article_type=0"},{"id":1004753,"img_url":"http://qqpublic.qpic.cn/qq_public/0/0-2781212616-620EA4B6BDD73BE6F1CC94FBB997E378/0","content":"西安融创一楼盘被曝出关系户名单","desc":"西安融创一楼盘昨日取得预售证，通知交资料今日摇号。24日当晚大家都在排队交资料，内部却流出关系户名单截图，大部分房源已经内定。对此相关部门给出回应……","is_recommend":0,"has_badge":0,"follow":0,"jump_url":"https://kandian.qq.com/mqq/vue/topic?_wv=3&_bid=2378&x5PreFetch=1&topicid=1004753&viewtype=1&sorttype=2&hasbanner=0&article_type=0"},{"id":1004750,"img_url":"http://qqpublic.qpic.cn/qq_public/0/0-2253209112-F55694E6687994D665C586040979C701/0","content":"特朗普宣布取消“特金会”","desc":"美国总统特朗普24日说，因近期朝鲜表示出的“公开敌意”，他决定取消原定于6月中旬与朝鲜最高领导人金正恩在新加坡的会晤。","is_recommend":0,"has_badge":0,"follow":0,"jump_url":"https://kandian.qq.com/mqq/vue/topic?_wv=3&_bid=2378&x5PreFetch=1&topicid=1004750&viewtype=3&sorttype=2&hasbanner=0&article_type=0"},{"id":1003181,"img_url":"http://qqpublic.qpic.cn/qq_public/0/0-2171026551-076EEF50319F90A93F4CC666BCD2F4A3/0","content":"创造101，漂亮小姐姐了解一下","desc":"101女孩重组队伍，进行专业方向考核。黄子韬竟激动离场？快来pick你喜欢的女孩，助她出道吧~","is_recommend":1,"has_badge":0,"follow":0,"jump_url":"https://kandian.qq.com/mqq/vue/topic?_wv=3&_bid=2378&x5PreFetch=1&topicid=1003181&viewtype=3&sorttype=2&hasbanner=1&article_type=0"},{"id":1004749,"img_url":"http://qqpublic.qpic.cn/qq_public_cover/0/0FCF75742D131089D6FFA6C2DB138130/0","content":"西班牙到底适不适合我们去旅行","desc":"地处欧洲与非洲交界处的西班牙，向来以热情奔放著称，独特的民族文化和优质的旅游资源吸引了大量的游客，但是当地华人的生活处境并不乐观，偶尔发生一些针对华人的恶性事件，那么去西班牙游玩究竟是怎样的体验呢？一起来了解下吧！","is_recommend":0,"has_badge":0,"follow":0,"jump_url":"https://kandian.qq.com/mqq/vue/topic?_wv=3&_bid=2378&x5PreFetch=1&topicid=1004749&viewtype=1&sorttype=2&hasbanner=0&article_type=0"},{"id":1004679,"img_url":"http://qqpublic.qpic.cn/qq_public/0/0-2783607520-366082CC5D239CD046934C65B0FACA83/0","content":"情感教主Ayawawa被封号","desc":"5月22日，新浪微博管理员发布公告，自媒体账号Ayawawa发表有关慰安妇的严重不当言论，引发社会舆论集中批评，造成严重社会不良影响，对该账号禁言禁被关注6个月。","is_recommend":0,"has_badge":0,"follow":0,"jump_url":"https://kandian.qq.com/mqq/vue/topic?_wv=3&_bid=2378&x5PreFetch=1&topicid=1004679&viewtype=3&sorttype=2&hasbanner=0&article_type=0"},{"id":1004715,"img_url":"http://qqpublic.qpic.cn/qq_public/0/0-2902926685-D4BABB4B031890B762AFD83BBEEF49F7/0","content":"女车主闹市遭绑架，遇追尾获救","desc":"警方通报称，关于网上流传“5月21日一环路高升桥附近发生绑架”一案，成都市公安局青羊区分局于5月22日20时30分，在绵阳市将5月21日流窜至成都，在一环路西二段某地下停车场实施捆绑抢劫作案的犯罪嫌疑人陈某(男，30岁，绵阳市人)抓获。","is_recommend":0,"has_badge":0,"follow":0,"jump_url":"https://kandian.qq.com/mqq/vue/topic?_wv=3&_bid=2378&x5PreFetch=1&topicid=1004715&viewtype=3&sorttype=2&hasbanner=0&article_type=0"},{"id":1001961,"img_url":"http://qqpublic.qpic.cn/qq_public/0/0-2758544294-7C92F7B3EA515C36DD150C79994E3872/0","content":"关于炉石传说的资讯","desc":"","is_recommend":0,"has_badge":0,"follow":0,"jump_url":"https://kandian.qq.com/mqq/vue/topic?_wv=3&_bid=2378&x5PreFetch=1&topicid=1001961&view=pgc&article_type=0"},{"id":1001957,"img_url":"http://qqpublic.qpic.cn/qq_public_cover/0/F30EF31F1CD6CF80B5314C14F337B13E/0","content":"安利你一款手游","desc":"","is_recommend":0,"has_badge":0,"follow":0,"jump_url":"https://kandian.qq.com/mqq/vue/topic?_wv=3&_bid=2378&x5PreFetch=1&topicid=1001957&view=pgc&article_type=0"},{"id":1001969,"img_url":"http://qqpublic.qpic.cn/qq_public/0/0-2254930858-2DB779A8BE0A16B418026CD330982C99/0","content":"航母相关资讯","desc":"","is_recommend":0,"has_badge":0,"follow":0,"jump_url":"https://kandian.qq.com/mqq/vue/topic?_wv=3&_bid=2378&x5PreFetch=1&topicid=1001969&view=pgc&article_type=0"},{"id":1001393,"img_url":"http://qqpublic.qpic.cn/qq_public/0/0-2860314234-6C5D684BB091B52C1AD593A661CCE5B4/0","content":"NASA新闻","desc":"","is_recommend":0,"has_badge":0,"follow":0,"jump_url":"https://kandian.qq.com/mqq/vue/topic?_wv=3&_bid=2378&x5PreFetch=1&topicid=1001393&view=pgc&article_type=0"},{"id":1001553,"img_url":"http://qqpublic.qpic.cn/qq_public/0/0-2547960835-6AE6A28DC14DFEFC491ADC9DDE79E4E5/0","content":"搏击资讯","desc":"","is_recommend":0,"has_badge":0,"follow":0,"jump_url":"https://kandian.qq.com/mqq/vue/topic?_wv=3&_bid=2378&x5PreFetch=1&topicid=1001553&viewtype=1&sorttype=2&hasbanner=0&article_type=0"},{"id":1001946,"img_url":"http://qqpublic.qpic.cn/qq_public/0/0-2932803957-7525EF09A2B33ACA2DE122E4843D6046/0","content":"外星物种探索","desc":"","is_recommend":0,"has_badge":0,"follow":0,"jump_url":"https://kandian.qq.com/mqq/vue/topic?_wv=3&_bid=2378&x5PreFetch=1&topicid=1001946&view=pgc&article_type=0"},{"id":1001313,"img_url":"http://qqpublic.qpic.cn/qq_public_cover/0/AE821CA7917475CA800076D3FBA48372/0","content":"NBA球星的赛季记录","desc":"","is_recommend":0,"has_badge":0,"follow":0,"jump_url":"https://kandian.qq.com/mqq/vue/topic?_wv=3&_bid=2378&x5PreFetch=1&topicid=1001313&view=pgc&article_type=0"}]}};

// const http = viola.requireAPI('http')

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data () {
    return {
      url: 'http://localhost/mock/hotTopic.json',
      loading: '加载中～',
      list: []
    }
  },
  created: function created () {
    this.request()
  },
  methods: {
    request: function request () {
      var this$1 = this;

      setTimeout(function () {
        this$1.updateData(serverData.data.list)
      }, 1000)
      // http.requestGet(this.url, {}, (res) => {
      //   if (res.success) {
      //     // console.log()
      //     this.updateData(res.data.data.list)
      //   } else {
      //     this.loading = '☹️  ' + res.errorText
      //   }
      // })
    },
    refreshData: function refreshData (data) {
      this.list = data
    },
    updateData: function updateData (data) {
      this.list = this.list.concat(data)
    }
  },
  components: ( obj = {}, obj[_topicCard_vue__WEBPACK_IMPORTED_MODULE_0__["default"].name] = _topicCard_vue__WEBPACK_IMPORTED_MODULE_0__["default"], obj )  
});


/***/ }),

/***/ "./node_modules/buble-loader/index.js?{\"objectAssign\":\"Object.assign\"}!./node_modules/@tencent/viola-vue-loader/lib/selector.js?type=script&index=0!./src/component/hotTopic/topicCard.vue":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/buble-loader?{"objectAssign":"Object.assign"}!./node_modules/@tencent/viola-vue-loader/lib/selector.js?type=script&index=0!./src/component/hotTopic/topicCard.vue ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// const navigation = viola.requireAPI('navigation')

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'topic-card',
  props: {
    cardData: {
      type: Object,
      required: true
    }
  },
  methods: {
    jump: function jump (url) {
      // navigation.openPage(url, {})
      console.log('jump to ' + url)
    }
  }
});


/***/ }),

/***/ "./src/component/hotTopic/index.vue":
/*!******************************************!*\
  !*** ./src/component/hotTopic/index.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _buble_loader_objectAssign_Object_assign_node_modules_tencent_viola_vue_loader_lib_selector_type_script_index_0_index_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !buble-loader?{"objectAssign":"Object.assign"}!../../../node_modules/@tencent/viola-vue-loader/lib/selector?type=script&index=0!./index.vue */ "./node_modules/buble-loader/index.js?{\"objectAssign\":\"Object.assign\"}!./node_modules/@tencent/viola-vue-loader/lib/selector.js?type=script&index=0!./src/component/hotTopic/index.vue");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_tencent_viola_vue_loader_lib_template_compiler_index_id_data_v_e4eb0fc6_hasScoped_true_optionsId_0_buble_objectAssign_Object_assign_transforms_node_modules_tencent_viola_vue_loader_lib_selector_type_template_index_0_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/@tencent/viola-vue-loader/lib/template-compiler/index?{"id":"data-v-e4eb0fc6","hasScoped":true,"optionsId":"0","buble":{"objectAssign":"Object.assign","transforms":{}}}!../../../node_modules/@tencent/viola-vue-loader/lib/selector?type=template&index=0!./index.vue */ "./node_modules/@tencent/viola-vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-e4eb0fc6\",\"hasScoped\":true,\"optionsId\":\"0\",\"buble\":{\"objectAssign\":\"Object.assign\",\"transforms\":{}}}!./node_modules/@tencent/viola-vue-loader/lib/selector.js?type=template&index=0!./src/component/hotTopic/index.vue");
/* harmony import */ var _node_modules_tencent_viola_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@tencent/viola-vue-loader/lib/runtime/component-normalizer */ "./node_modules/@tencent/viola-vue-loader/lib/runtime/component-normalizer.js");
var injectStyle = __webpack_require__(/*! !@tencent/viola-style-loader!../../../node_modules/@tencent/viola-vue-loader/lib/style-compiler/index?{"optionsId":"0","vue":true,"id":"data-v-e4eb0fc6","scoped":true,"sourceMap":false}!../../../node_modules/@tencent/viola-vue-loader/lib/selector?type=styles&index=0!./index.vue */ "./node_modules/@tencent/viola-style-loader/dist/index.js!./node_modules/@tencent/viola-vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-e4eb0fc6\",\"scoped\":true,\"sourceMap\":false}!./node_modules/@tencent/viola-vue-loader/lib/selector.js?type=styles&index=0!./src/component/hotTopic/index.vue")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-e4eb0fc6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(_node_modules_tencent_viola_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _buble_loader_objectAssign_Object_assign_node_modules_tencent_viola_vue_loader_lib_selector_type_script_index_0_index_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  _node_modules_tencent_viola_vue_loader_lib_template_compiler_index_id_data_v_e4eb0fc6_hasScoped_true_optionsId_0_buble_objectAssign_Object_assign_transforms_node_modules_tencent_viola_vue_loader_lib_selector_type_template_index_0_index_vue__WEBPACK_IMPORTED_MODULE_1__["render"],
  _node_modules_tencent_viola_vue_loader_lib_template_compiler_index_id_data_v_e4eb0fc6_hasScoped_true_optionsId_0_buble_objectAssign_Object_assign_transforms_node_modules_tencent_viola_vue_loader_lib_selector_type_template_index_0_index_vue__WEBPACK_IMPORTED_MODULE_1__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\component\\hotTopic\\index.vue"

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./src/component/hotTopic/topicCard.vue":
/*!**********************************************!*\
  !*** ./src/component/hotTopic/topicCard.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _buble_loader_objectAssign_Object_assign_node_modules_tencent_viola_vue_loader_lib_selector_type_script_index_0_topicCard_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !buble-loader?{"objectAssign":"Object.assign"}!../../../node_modules/@tencent/viola-vue-loader/lib/selector?type=script&index=0!./topicCard.vue */ "./node_modules/buble-loader/index.js?{\"objectAssign\":\"Object.assign\"}!./node_modules/@tencent/viola-vue-loader/lib/selector.js?type=script&index=0!./src/component/hotTopic/topicCard.vue");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_tencent_viola_vue_loader_lib_template_compiler_index_id_data_v_683afc2a_hasScoped_false_optionsId_0_buble_objectAssign_Object_assign_transforms_node_modules_tencent_viola_vue_loader_lib_selector_type_template_index_0_topicCard_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/@tencent/viola-vue-loader/lib/template-compiler/index?{"id":"data-v-683afc2a","hasScoped":false,"optionsId":"0","buble":{"objectAssign":"Object.assign","transforms":{}}}!../../../node_modules/@tencent/viola-vue-loader/lib/selector?type=template&index=0!./topicCard.vue */ "./node_modules/@tencent/viola-vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-683afc2a\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"objectAssign\":\"Object.assign\",\"transforms\":{}}}!./node_modules/@tencent/viola-vue-loader/lib/selector.js?type=template&index=0!./src/component/hotTopic/topicCard.vue");
/* harmony import */ var _node_modules_tencent_viola_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@tencent/viola-vue-loader/lib/runtime/component-normalizer */ "./node_modules/@tencent/viola-vue-loader/lib/runtime/component-normalizer.js");
var injectStyle = __webpack_require__(/*! !@tencent/viola-style-loader!../../../node_modules/@tencent/viola-vue-loader/lib/style-compiler/index?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":false}!sass-loader!../../../node_modules/@tencent/viola-vue-loader/lib/selector?type=styles&index=0!./topicCard.vue */ "./node_modules/@tencent/viola-style-loader/dist/index.js!./node_modules/@tencent/viola-vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!./node_modules/sass-loader/lib/loader.js!./node_modules/@tencent/viola-vue-loader/lib/selector.js?type=styles&index=0!./src/component/hotTopic/topicCard.vue")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(_node_modules_tencent_viola_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _buble_loader_objectAssign_Object_assign_node_modules_tencent_viola_vue_loader_lib_selector_type_script_index_0_topicCard_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  _node_modules_tencent_viola_vue_loader_lib_template_compiler_index_id_data_v_683afc2a_hasScoped_false_optionsId_0_buble_objectAssign_Object_assign_transforms_node_modules_tencent_viola_vue_loader_lib_selector_type_template_index_0_topicCard_vue__WEBPACK_IMPORTED_MODULE_1__["render"],
  _node_modules_tencent_viola_vue_loader_lib_template_compiler_index_id_data_v_683afc2a_hasScoped_false_optionsId_0_buble_objectAssign_Object_assign_transforms_node_modules_tencent_viola_vue_loader_lib_selector_type_template_index_0_topicCard_vue__WEBPACK_IMPORTED_MODULE_1__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\component\\hotTopic\\topicCard.vue"

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component_hotTopic___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @component/hotTopic/ */ "./src/component/hotTopic/index.vue");



var app = new Vue({
  el: '#app',
  components: { hello: _component_hotTopic___WEBPACK_IMPORTED_MODULE_0__["default"] },
  render: function (h) { return h(_component_hotTopic___WEBPACK_IMPORTED_MODULE_0__["default"]); }
})

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map