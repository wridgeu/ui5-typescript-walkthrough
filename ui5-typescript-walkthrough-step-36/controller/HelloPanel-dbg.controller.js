"use strict";

sap.ui.define(["sap/ui/core/mvc/Controller", "sap/m/MessageToast"], function (Controller, MessageToast) {
  "use strict";

  /**
   * @namespace ui5.walkthrough.controller
   */
  const HelloPanel = Controller.extend("ui5.walkthrough.controller.HelloPanel", {
    onShowHello: function _onShowHello() {
      // read msg from i18n model
      const recipient = this.getView()?.getModel()?.getProperty("/recipient/name");
      const resourceBundle = this.getView()?.getModel("i18n")?.getResourceBundle();
      const msg = resourceBundle.getText("helloMsg", [recipient]) || "no text defined";
      // show message
      MessageToast.show(msg);
    },
    onOpenDialog: function _onOpenDialog() {
      // create dialog lazily
      if (!this.dialogPromise) {
        this.dialogPromise = this.loadFragment({
          name: "ui5.walkthrough.view.HelloDialog"
        });
      }
      this.dialogPromise.then(function (oDialog) {
        oDialog.open();
      });
    },
    onCloseDialog: function _onCloseDialog() {
      // note: We don't need to chain to the pDialog promise, since this event-handler
      // is only called from within the loaded dialog itself.
      this.byId("helloDialog")?.close();
    }
  });
  ;
  return HelloPanel;
});
//# sourceMappingURL=HelloPanel-dbg.controller.js.map
