// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
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

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
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
  return newRequire;
})({"src/uiHelpers.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.retrieveCarId = exports.retrieveCarFormEditCarForm = exports.populateEditCarForm = exports.cleanTable = exports.addCarRows = void 0;
var columns = ['car_id', 'name', 'brand', 'year_release'];

var populateCell = function populateCell(cell, text) {
  var cellText = document.createTextNode(text);
  cell.appendChild(cellText);
};

var addCarRow = function addCarRow(car, tableId) {
  var table = document.getElementById(tableId).getElementsByTagName('tbody')[0];
  var newRow = table.insertRow(table.rows.length);
  var cells = columns.map(function (_, index) {
    return newRow.insertCell(index);
  });
  cells.forEach(function (c, index) {
    var text = car[columns[index]];
    populateCell(c, text);
  });
};

var addCarRows = function addCarRows(cars, tableId) {
  cars.forEach(function (c) {
    return addCarRow(c, tableId);
  });
};

exports.addCarRows = addCarRows;

var cleanTable = function cleanTable(tableId) {
  var table = document.getElementById(tableId).getElementsByTagName('tbody')[0];

  if (table.rows && table.rows.length > 0) {
    for (var index = table.rows.length - 1; index >= 0; index--) {
      table.deleteRow(index);
    }
  }
};

exports.cleanTable = cleanTable;

var populateEditCarForm = function populateEditCarForm(_ref) {
  var name = _ref.name,
      brand = _ref.brand,
      year_release = _ref.year_release;
  document.getElementById('name').value = name;
  document.getElementById('brand').value = brand;
  document.getElementById('year').value = year_release;
};

exports.populateEditCarForm = populateEditCarForm;

var retrieveCarFormEditCarForm = function retrieveCarFormEditCarForm() {
  var name = document.getElementById('name').value;
  var brand = document.getElementById('brand').value;
  var year_release = document.getElementById('year').value;
  return {
    name: name,
    brand: brand,
    year_release: year_release
  };
};

exports.retrieveCarFormEditCarForm = retrieveCarFormEditCarForm;

var retrieveCarId = function retrieveCarId() {
  return +document.getElementById('carid').value;
};

exports.retrieveCarId = retrieveCarId;
},{}],"src/API/carsApi.double.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addCar = exports.getCarById = exports.getAllCars = void 0;
var data = [{
  "car_id": 1,
  "name": "ABX",
  "brand": "Tokiota",
  "year_release": "1999"
}, {
  "car_id": 2,
  "name": "AZE",
  "brand": "Tokiota",
  "year_release": "1995"
}];

var getAllCars = function getAllCars() {
  return new Promise(function (resolve, _) {
    setTimeout(function () {
      var cars = data.map(function (i) {
        return i;
      });
      resolve(cars);
    }, 500);
  });
};

exports.getAllCars = getAllCars;

var getCarById = function getCarById(id) {
  return new Promise(function (resolve, _) {
    setTimeout(function () {
      var car = data.map(function (i) {
        return i;
      }).find(function (c) {
        return c.car_id === id;
      });
      resolve(car);
    }, 500);
  });
};

exports.getCarById = getCarById;

var addCar = function addCar(car) {
  return new Promise(function (resolve, _) {
    setTimeout(function () {
      car['car_id'] = data.length + 1;
      data.push(car);
      resolve('ok'); // TODO: Check with browser
    }, 500);
  });
};

exports.addCar = addCar;
},{}],"src/app.js":[function(require,module,exports) {
"use strict";

var _uiHelpers = require("./uiHelpers");

var _carsApi = require("./API/carsApi.double");

document.addEventListener('DOMContentLoaded', function () {
  var buttonLoadCars = document.getElementById('loadcars');
  buttonLoadCars.addEventListener('click', function (event) {
    event.stopPropagation();
    (0, _uiHelpers.cleanTable)('cars-table');
    (0, _carsApi.getAllCars)().then(function (result) {
      (0, _uiHelpers.addCarRows)(result, 'cars-table');
    });
  });
  var buttonLoadCar = document.getElementById('loadcar');
  buttonLoadCar.addEventListener('click', function (event) {
    event.stopPropagation();
    var carId = (0, _uiHelpers.retrieveCarId)();
    (0, _carsApi.getCarById)(carId).then(function (r) {
      return (0, _uiHelpers.populateEditCarForm)(r);
    });
  });
  var buttonAddCar = document.getElementById('add');
  buttonAddCar.addEventListener('click', function (event) {
    event.stopPropagation();
    event.preventDefault();
    var car = (0, _uiHelpers.retrieveCarFormEditCarForm)();
    (0, _carsApi.addCar)(car).then(function (_) {
      (0, _uiHelpers.cleanTable)('cars-table');
      return (0, _carsApi.getAllCars)();
    }).then(function (result) {
      (0, _uiHelpers.addCarRows)(result, 'cars-table');
    });
  });
});
},{"./uiHelpers":"src/uiHelpers.js","./API/carsApi.double":"src/API/carsApi.double.js"}],"node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "42837" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
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

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

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

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["node_modules/parcel/src/builtins/hmr-runtime.js","src/app.js"], null)
//# sourceMappingURL=/app.a6a4d504.map