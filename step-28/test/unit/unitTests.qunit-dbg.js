"use strict";

sap.ui.define([], function () {
  "use strict";

  function __ui5_require_async(path) {
    return new Promise(function (resolve, reject) {
      sap.ui.require([path], function (module) {
        if (!(module && module.__esModule)) {
          module = module === null || !(typeof module === "object" && path.endsWith("/library")) ? {
            default: module
          } : module;
          Object.defineProperty(module, "__esModule", {
            value: true
          });
        }
        resolve(module);
      }, function (err) {
        reject(err);
      });
    });
  }
  QUnit.config.autostart = false;

  // import all your QUnit tests here
  void Promise.all([__ui5_require_async("ui5/walkthrough/test/unit/model/formatter")]).then(() => {
    QUnit.start();
  });
});
//# sourceMappingURL=unitTests.qunit-dbg.js.map
