// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/js/nameCard.js":[function(require,module,exports) {
var screenContainer = document.querySelector('.main-content__screen-container');
var nameCard = document.querySelector('.main-content__card-container__card');
var nameCardSide__A = document.querySelector('.main-content__card-sideA');
var nameCardSide__B = document.querySelector('.main-content__card-sideB');
var trayParent = document.querySelector('.main-content__btn-container-tray');
var tray = document.querySelector('.main-content__btn-container-tray__header-container');
var arrowContainer = document.querySelector('.svg-arrow__container');
var arrowContainerId = document.getElementById('arrow-container');
var body = document.body;
var mainContent = document.querySelector('.main-content');
var promoBtn = document.getElementById('promo');
var promoBtnTray = document.getElementById('promoTray');
var transactionBtn = document.getElementById('transactional');
var transactionBtnTray = document.getElementById('transactionalTray');
var newsletterBtn = document.getElementById('newsletter');
var newsletterBtnTray = document.getElementById('newsletterTray');
var landingPageBtn = document.getElementById('promo');
var landingPageBtnTray = document.getElementById('promoTray'); // console.log(screenContainer);

function clearScreen() {
  screenContainer.innerHTML = '';
}

function openProject(project) {
  mainContent.classList.toggle(project);
  trayParent.classList.add('traySlideDown');
  body.classList.remove('trayActivate');
}

function checkProjectActivation(a, b, c, aN, bN, cN) {
  if (a === true || b === true || c === true) {
    mainContent.classList.remove(aN);
    mainContent.classList.remove(bN);
    mainContent.classList.remove(cN);
  }
}

;
var trayActivated = null;
var projectActivated = null;
var promoActivated = null;
var transactionalActivated = null;
var newsletterActivated = null;
var landingPageActivated = null;
var promoClass = 'projectPromoActivateMobile';
var transactionalClass = 'projectTransactionActivate';
var newsletterClass = 'projectNewsletterActivate';
var landingPageClass = 'projectLandingPageActivate';
tray.addEventListener('click', function () {
  trayParent.classList.remove('traySlideDown');
  body.classList.toggle('trayActivate');
  nameCard.classList.add('cardSlideTop');
  trayActivated = true;

  if (!body.classList.contains('trayActivate')) {
    nameCard.classList.remove('cardSlideTop'); //    nameCard.classList.add('aboutMeActive')

    trayActivated = false;
  }
});
nameCard.addEventListener('click', function () {
  if (trayActivated === true) {
    body.classList.remove('trayActivate');
    nameCard.classList.add('aboutMeActive');
    nameCard.classList.remove('cardSlideTop');
  } else if (trayActivated === false) {
    body.classList.toggle('card-active');
    arrowContainer.classList.toggle('arrowActivate');
    nameCard.classList.remove('aboutMeActive');
  } else {
    body.classList.toggle('card-active');
    arrowContainer.classList.toggle('arrowActivate');
  }
});
promoBtnTray.addEventListener('click', function () {
  console.log('clicked!');
  checkProjectActivation(transactionalActivated, newsletterActivated, landingPageActivated, transactionalClass, newsletterClass, landingPageClass);
  openProject(promoClass);
  promoActivated = true;
});
transactionalTray.addEventListener('click', function () {
  checkProjectActivation(promoActivated, newsletterActivated, landingPageActivated, promoClass, newsletterClass, landingPageClass);
  openProject(transactionalClass);
  transactionalActivated = true;
});
newsletterBtnTray.addEventListener('click', function () {
  console.log('clicked!');
  checkProjectActivation(promoActivated, transactionalActivated, landingPageActivated, promoClass, transactionalClass, landingPageClass);
  openProject(newsletterClass);
  newsletterActivated = true;
});
landingPageTray.addEventListener('click', function () {
  console.log('clicked!');
  checkProjectActivation(promoActivated, transactionalActivated, newsletterActivated, promoClass, transactionalClass, newsletterClass);
  openProject(landingPageClass);
  transactionalActivated = true;
}); //if about me is clicked on mobile size,clear all projectClass
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63113" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/js/nameCard.js"], null)
//# sourceMappingURL=/nameCard.35c8a1aa.js.map