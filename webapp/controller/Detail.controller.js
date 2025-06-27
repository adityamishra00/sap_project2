sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.asint.interns.project2.controller.Detail", {

        onInit: function () {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.getRoute("Detail").attachPatternMatched(this._onObjectMatched, this);
        },

        _onObjectMatched: function (oEvent) {
            var sSupplierId = decodeURIComponent(oEvent.getParameter("arguments").supplierId);

            // Set the Company Name in the View
            this.byId("companyNameText").setText("Company Name: " + sSupplierId);
        }
    });
});

