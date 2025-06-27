

sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], (Controller, Filter, FilterOperator) => {
    "use strict";

    return Controller.extend("com.asint.interns.project2.controller.List", {

        onInit: function () {
            // Nothing special for now
        },

        onSearch: function (oEvent) {
            var sQuery = oEvent.getParameter("newValue");
            var oTable = this.byId("supplierTable");
            var oBinding = oTable.getBinding("items");

            var aFilters = [];
            if (sQuery) {
                aFilters.push(new Filter("CompanyName", FilterOperator.Contains, sQuery));
            }
            oBinding.filter(aFilters);
        },

        onCompanyNamePress: function (oEvent) {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            var sCompanyName = oEvent.getSource().getBindingContext().getProperty("CompanyName");

            // Show company name in console
            console.log("Company Name clicked:", sCompanyName);

            oRouter.navTo("Detail", {
                supplierId: encodeURIComponent(sCompanyName)
            });
        }
    });
});





