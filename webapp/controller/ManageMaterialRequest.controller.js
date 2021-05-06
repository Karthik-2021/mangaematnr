sap.ui.define(["sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
	"./utilities",
	"sap/ui/core/routing/History"
], function(BaseController, MessageBox, Utilities, History) {
	"use strict";

	return BaseController.extend("com.sap.build.standard.nspiManageMaterialRequest.controller.ManageMaterialRequest", {
		handleRouteMatched: function(oEvent) {
			var sAppId = "App5f8da5b054c18118f56acb6f";

			var oParams = {};

			if (oEvent.mParameters.data.context) {
				this.sContext = oEvent.mParameters.data.context;

			} else {
				if (this.getOwnerComponent().getComponentData()) {
					var patternConvert = function(oParam) {
						if (Object.keys(oParam).length !== 0) {
							for (var prop in oParam) {
								if (prop !== "sourcePrototype" && prop.includes("Set")) {
									return prop + "(" + oParam[prop][0] + ")";
								}
							}
						}
					};

					this.sContext = patternConvert(this.getOwnerComponent().getComponentData().startupParameters);

				}
			}

			var oPath;

			if (this.sContext) {
				oPath = {
					path: "/" + this.sContext,
					parameters: oParams
				};
				this.getView().bindObject(oPath);
			}

		},
		_onButtonPress: function(oEvent) {

			var sDialogName = "";
			this.mDialogs = this.mDialogs || {};
			var oDialog = this.mDialogs[sDialogName];
			if (!oDialog) {
				oDialog = new(this.getView());
				this.mDialogs[sDialogName] = oDialog;

				// For navigation.
				oDialog.setRouter(this.oRouter);
			}

			var context = oEvent.getSource().getBindingContext();
			oDialog._oControl.setBindingContext(context);

			oDialog.open();

		},
		_onButtonPress1: function(oEvent) {

			var sDialogName = "";
			this.mDialogs = this.mDialogs || {};
			var oDialog = this.mDialogs[sDialogName];
			if (!oDialog) {
				oDialog = new(this.getView());
				this.mDialogs[sDialogName] = oDialog;

				// For navigation.
				oDialog.setRouter(this.oRouter);
			}

			var context = oEvent.getSource().getBindingContext();
			oDialog._oControl.setBindingContext(context);

			oDialog.open();

		},
		formatDateUTCtoLocale: function(dDate) {
			if (dDate) {
				return new Date(dDate.getUTCFullYear(), dDate.getUTCMonth(), dDate.getUTCDate());
			}
			return dDate;

		},
		_onDateRangeSelectionChange: function(oEvent) {

			var oDateRangeSelection = oEvent.getSource();
			var oBindingContext = oDateRangeSelection.getBindingContext();
			var sBindingPathOfDateValue = oDateRangeSelection.getBindingPath("dateValue");
			var sBindingPathOfSecondDateValue = oDateRangeSelection.getBindingPath("secondDateValue");
			var oFrom = oEvent.getParameter("from");
			if (oBindingContext && sBindingPathOfDateValue && oFrom) {
				var oFromBefore = oBindingContext.getModel().getProperty(sBindingPathOfDateValue, oBindingContext);
				if (oFromBefore) {
					var oUTCFrom = new Date(Date.UTC(oFrom.getFullYear(), oFrom.getMonth(), oFrom.getDate(), oFromBefore.getUTCHours(), oFromBefore.getUTCMinutes(), oFromBefore.getUTCSeconds()));
					oBindingContext.getModel().setProperty(sBindingPathOfDateValue, oUTCFrom, oBindingContext);
				}
			}
			var oTo = oEvent.getParameter("to");
			if (oBindingContext && sBindingPathOfSecondDateValue && oTo) {
				var oToBefore = oBindingContext.getModel().getProperty(sBindingPathOfSecondDateValue, oBindingContext);
				if (oToBefore) {
					var oUTCTo = new Date(Date.UTC(oTo.getFullYear(), oTo.getMonth(), oTo.getDate(), oToBefore.getUTCHours(), oToBefore.getUTCMinutes(), oToBefore.getUTCSeconds()));
					oBindingContext.getModel().setProperty(sBindingPathOfSecondDateValue, oUTCTo, oBindingContext);
				}
			}

		},
		formatDateUTCtoLocale1: function(dDate) {
			if (dDate) {
				return new Date(dDate.getUTCFullYear(), dDate.getUTCMonth(), dDate.getUTCDate());
			}
			return dDate;

		},
		_onDateRangeSelectionChange1: function(oEvent) {

			var oDateRangeSelection = oEvent.getSource();
			var oBindingContext = oDateRangeSelection.getBindingContext();
			var sBindingPathOfDateValue = oDateRangeSelection.getBindingPath("dateValue");
			var sBindingPathOfSecondDateValue = oDateRangeSelection.getBindingPath("secondDateValue");
			var oFrom = oEvent.getParameter("from");
			if (oBindingContext && sBindingPathOfDateValue && oFrom) {
				var oFromBefore = oBindingContext.getModel().getProperty(sBindingPathOfDateValue, oBindingContext);
				if (oFromBefore) {
					var oUTCFrom = new Date(Date.UTC(oFrom.getFullYear(), oFrom.getMonth(), oFrom.getDate(), oFromBefore.getUTCHours(), oFromBefore.getUTCMinutes(), oFromBefore.getUTCSeconds()));
					oBindingContext.getModel().setProperty(sBindingPathOfDateValue, oUTCFrom, oBindingContext);
				}
			}
			var oTo = oEvent.getParameter("to");
			if (oBindingContext && sBindingPathOfSecondDateValue && oTo) {
				var oToBefore = oBindingContext.getModel().getProperty(sBindingPathOfSecondDateValue, oBindingContext);
				if (oToBefore) {
					var oUTCTo = new Date(Date.UTC(oTo.getFullYear(), oTo.getMonth(), oTo.getDate(), oToBefore.getUTCHours(), oToBefore.getUTCMinutes(), oToBefore.getUTCSeconds()));
					oBindingContext.getModel().setProperty(sBindingPathOfSecondDateValue, oUTCTo, oBindingContext);
				}
			}

		},
		formatDateUTCtoLocale2: function(dDate) {
			if (dDate) {
				return new Date(dDate.getUTCFullYear(), dDate.getUTCMonth(), dDate.getUTCDate());
			}
			return dDate;

		},
		_onDateRangeSelectionChange2: function(oEvent) {

			var oDateRangeSelection = oEvent.getSource();
			var oBindingContext = oDateRangeSelection.getBindingContext();
			var sBindingPathOfDateValue = oDateRangeSelection.getBindingPath("dateValue");
			var sBindingPathOfSecondDateValue = oDateRangeSelection.getBindingPath("secondDateValue");
			var oFrom = oEvent.getParameter("from");
			if (oBindingContext && sBindingPathOfDateValue && oFrom) {
				var oFromBefore = oBindingContext.getModel().getProperty(sBindingPathOfDateValue, oBindingContext);
				if (oFromBefore) {
					var oUTCFrom = new Date(Date.UTC(oFrom.getFullYear(), oFrom.getMonth(), oFrom.getDate(), oFromBefore.getUTCHours(), oFromBefore.getUTCMinutes(), oFromBefore.getUTCSeconds()));
					oBindingContext.getModel().setProperty(sBindingPathOfDateValue, oUTCFrom, oBindingContext);
				}
			}
			var oTo = oEvent.getParameter("to");
			if (oBindingContext && sBindingPathOfSecondDateValue && oTo) {
				var oToBefore = oBindingContext.getModel().getProperty(sBindingPathOfSecondDateValue, oBindingContext);
				if (oToBefore) {
					var oUTCTo = new Date(Date.UTC(oTo.getFullYear(), oTo.getMonth(), oTo.getDate(), oToBefore.getUTCHours(), oToBefore.getUTCMinutes(), oToBefore.getUTCSeconds()));
					oBindingContext.getModel().setProperty(sBindingPathOfSecondDateValue, oUTCTo, oBindingContext);
				}
			}

		},
		formatDateUTCtoLocale3: function(dDate) {
			if (dDate) {
				return new Date(dDate.getUTCFullYear(), dDate.getUTCMonth(), dDate.getUTCDate());
			}
			return dDate;

		},
		_onDateRangeSelectionChange3: function(oEvent) {

			var oDateRangeSelection = oEvent.getSource();
			var oBindingContext = oDateRangeSelection.getBindingContext();
			var sBindingPathOfDateValue = oDateRangeSelection.getBindingPath("dateValue");
			var sBindingPathOfSecondDateValue = oDateRangeSelection.getBindingPath("secondDateValue");
			var oFrom = oEvent.getParameter("from");
			if (oBindingContext && sBindingPathOfDateValue && oFrom) {
				var oFromBefore = oBindingContext.getModel().getProperty(sBindingPathOfDateValue, oBindingContext);
				if (oFromBefore) {
					var oUTCFrom = new Date(Date.UTC(oFrom.getFullYear(), oFrom.getMonth(), oFrom.getDate(), oFromBefore.getUTCHours(), oFromBefore.getUTCMinutes(), oFromBefore.getUTCSeconds()));
					oBindingContext.getModel().setProperty(sBindingPathOfDateValue, oUTCFrom, oBindingContext);
				}
			}
			var oTo = oEvent.getParameter("to");
			if (oBindingContext && sBindingPathOfSecondDateValue && oTo) {
				var oToBefore = oBindingContext.getModel().getProperty(sBindingPathOfSecondDateValue, oBindingContext);
				if (oToBefore) {
					var oUTCTo = new Date(Date.UTC(oTo.getFullYear(), oTo.getMonth(), oTo.getDate(), oToBefore.getUTCHours(), oToBefore.getUTCMinutes(), oToBefore.getUTCSeconds()));
					oBindingContext.getModel().setProperty(sBindingPathOfSecondDateValue, oUTCTo, oBindingContext);
				}
			}

		},
		formatDateUTCtoLocale4: function(dDate) {
			if (dDate) {
				return new Date(dDate.getUTCFullYear(), dDate.getUTCMonth(), dDate.getUTCDate());
			}
			return dDate;

		},
		_onDateRangeSelectionChange4: function(oEvent) {

			var oDateRangeSelection = oEvent.getSource();
			var oBindingContext = oDateRangeSelection.getBindingContext();
			var sBindingPathOfDateValue = oDateRangeSelection.getBindingPath("dateValue");
			var sBindingPathOfSecondDateValue = oDateRangeSelection.getBindingPath("secondDateValue");
			var oFrom = oEvent.getParameter("from");
			if (oBindingContext && sBindingPathOfDateValue && oFrom) {
				var oFromBefore = oBindingContext.getModel().getProperty(sBindingPathOfDateValue, oBindingContext);
				if (oFromBefore) {
					var oUTCFrom = new Date(Date.UTC(oFrom.getFullYear(), oFrom.getMonth(), oFrom.getDate(), oFromBefore.getUTCHours(), oFromBefore.getUTCMinutes(), oFromBefore.getUTCSeconds()));
					oBindingContext.getModel().setProperty(sBindingPathOfDateValue, oUTCFrom, oBindingContext);
				}
			}
			var oTo = oEvent.getParameter("to");
			if (oBindingContext && sBindingPathOfSecondDateValue && oTo) {
				var oToBefore = oBindingContext.getModel().getProperty(sBindingPathOfSecondDateValue, oBindingContext);
				if (oToBefore) {
					var oUTCTo = new Date(Date.UTC(oTo.getFullYear(), oTo.getMonth(), oTo.getDate(), oToBefore.getUTCHours(), oToBefore.getUTCMinutes(), oToBefore.getUTCSeconds()));
					oBindingContext.getModel().setProperty(sBindingPathOfSecondDateValue, oUTCTo, oBindingContext);
				}
			}

		},
		formatDateUTCtoLocale5: function(dDate) {
			if (dDate) {
				return new Date(dDate.getUTCFullYear(), dDate.getUTCMonth(), dDate.getUTCDate());
			}
			return dDate;

		},
		_onDateRangeSelectionChange5: function(oEvent) {

			var oDateRangeSelection = oEvent.getSource();
			var oBindingContext = oDateRangeSelection.getBindingContext();
			var sBindingPathOfDateValue = oDateRangeSelection.getBindingPath("dateValue");
			var sBindingPathOfSecondDateValue = oDateRangeSelection.getBindingPath("secondDateValue");
			var oFrom = oEvent.getParameter("from");
			if (oBindingContext && sBindingPathOfDateValue && oFrom) {
				var oFromBefore = oBindingContext.getModel().getProperty(sBindingPathOfDateValue, oBindingContext);
				if (oFromBefore) {
					var oUTCFrom = new Date(Date.UTC(oFrom.getFullYear(), oFrom.getMonth(), oFrom.getDate(), oFromBefore.getUTCHours(), oFromBefore.getUTCMinutes(), oFromBefore.getUTCSeconds()));
					oBindingContext.getModel().setProperty(sBindingPathOfDateValue, oUTCFrom, oBindingContext);
				}
			}
			var oTo = oEvent.getParameter("to");
			if (oBindingContext && sBindingPathOfSecondDateValue && oTo) {
				var oToBefore = oBindingContext.getModel().getProperty(sBindingPathOfSecondDateValue, oBindingContext);
				if (oToBefore) {
					var oUTCTo = new Date(Date.UTC(oTo.getFullYear(), oTo.getMonth(), oTo.getDate(), oToBefore.getUTCHours(), oToBefore.getUTCMinutes(), oToBefore.getUTCSeconds()));
					oBindingContext.getModel().setProperty(sBindingPathOfSecondDateValue, oUTCTo, oBindingContext);
				}
			}

		},
		formatDateUTCtoLocale6: function(dDate) {
			if (dDate) {
				return new Date(dDate.getUTCFullYear(), dDate.getUTCMonth(), dDate.getUTCDate());
			}
			return dDate;

		},
		_onDateRangeSelectionChange6: function(oEvent) {

			var oDateRangeSelection = oEvent.getSource();
			var oBindingContext = oDateRangeSelection.getBindingContext();
			var sBindingPathOfDateValue = oDateRangeSelection.getBindingPath("dateValue");
			var sBindingPathOfSecondDateValue = oDateRangeSelection.getBindingPath("secondDateValue");
			var oFrom = oEvent.getParameter("from");
			if (oBindingContext && sBindingPathOfDateValue && oFrom) {
				var oFromBefore = oBindingContext.getModel().getProperty(sBindingPathOfDateValue, oBindingContext);
				if (oFromBefore) {
					var oUTCFrom = new Date(Date.UTC(oFrom.getFullYear(), oFrom.getMonth(), oFrom.getDate(), oFromBefore.getUTCHours(), oFromBefore.getUTCMinutes(), oFromBefore.getUTCSeconds()));
					oBindingContext.getModel().setProperty(sBindingPathOfDateValue, oUTCFrom, oBindingContext);
				}
			}
			var oTo = oEvent.getParameter("to");
			if (oBindingContext && sBindingPathOfSecondDateValue && oTo) {
				var oToBefore = oBindingContext.getModel().getProperty(sBindingPathOfSecondDateValue, oBindingContext);
				if (oToBefore) {
					var oUTCTo = new Date(Date.UTC(oTo.getFullYear(), oTo.getMonth(), oTo.getDate(), oToBefore.getUTCHours(), oToBefore.getUTCMinutes(), oToBefore.getUTCSeconds()));
					oBindingContext.getModel().setProperty(sBindingPathOfSecondDateValue, oUTCTo, oBindingContext);
				}
			}

		},
		formatDateUTCtoLocale7: function(dDate) {
			if (dDate) {
				return new Date(dDate.getUTCFullYear(), dDate.getUTCMonth(), dDate.getUTCDate());
			}
			return dDate;

		},
		_onDateRangeSelectionChange7: function(oEvent) {

			var oDateRangeSelection = oEvent.getSource();
			var oBindingContext = oDateRangeSelection.getBindingContext();
			var sBindingPathOfDateValue = oDateRangeSelection.getBindingPath("dateValue");
			var sBindingPathOfSecondDateValue = oDateRangeSelection.getBindingPath("secondDateValue");
			var oFrom = oEvent.getParameter("from");
			if (oBindingContext && sBindingPathOfDateValue && oFrom) {
				var oFromBefore = oBindingContext.getModel().getProperty(sBindingPathOfDateValue, oBindingContext);
				if (oFromBefore) {
					var oUTCFrom = new Date(Date.UTC(oFrom.getFullYear(), oFrom.getMonth(), oFrom.getDate(), oFromBefore.getUTCHours(), oFromBefore.getUTCMinutes(), oFromBefore.getUTCSeconds()));
					oBindingContext.getModel().setProperty(sBindingPathOfDateValue, oUTCFrom, oBindingContext);
				}
			}
			var oTo = oEvent.getParameter("to");
			if (oBindingContext && sBindingPathOfSecondDateValue && oTo) {
				var oToBefore = oBindingContext.getModel().getProperty(sBindingPathOfSecondDateValue, oBindingContext);
				if (oToBefore) {
					var oUTCTo = new Date(Date.UTC(oTo.getFullYear(), oTo.getMonth(), oTo.getDate(), oToBefore.getUTCHours(), oToBefore.getUTCMinutes(), oToBefore.getUTCSeconds()));
					oBindingContext.getModel().setProperty(sBindingPathOfSecondDateValue, oUTCTo, oBindingContext);
				}
			}

		},
		applyFiltersAndSorters: function(sControlId, sAggregationName, chartBindingInfo) {
			if (chartBindingInfo) {
				var oBindingInfo = chartBindingInfo;
			} else {
				var oBindingInfo = this.getView().byId(sControlId).getBindingInfo(sAggregationName);
			}
			var oBindingOptions = this.updateBindingOptions(sControlId);
			this.getView().byId(sControlId).bindAggregation(sAggregationName, {
				model: oBindingInfo.model,
				path: oBindingInfo.path,
				parameters: oBindingInfo.parameters,
				template: oBindingInfo.template,
				templateShareable: true,
				sorter: oBindingOptions.sorters,
				filters: oBindingOptions.filters
			});

		},
		updateBindingOptions: function(sCollectionId, oBindingData, sSourceId) {
			this.mBindingOptions = this.mBindingOptions || {};
			this.mBindingOptions[sCollectionId] = this.mBindingOptions[sCollectionId] || {};

			var aSorters = this.mBindingOptions[sCollectionId].sorters;
			var aGroupby = this.mBindingOptions[sCollectionId].groupby;

			// If there is no oBindingData parameter, we just need the processed filters and sorters from this function
			if (oBindingData) {
				if (oBindingData.sorters) {
					aSorters = oBindingData.sorters;
				}
				if (oBindingData.groupby || oBindingData.groupby === null) {
					aGroupby = oBindingData.groupby;
				}
				// 1) Update the filters map for the given collection and source
				this.mBindingOptions[sCollectionId].sorters = aSorters;
				this.mBindingOptions[sCollectionId].groupby = aGroupby;
				this.mBindingOptions[sCollectionId].filters = this.mBindingOptions[sCollectionId].filters || {};
				this.mBindingOptions[sCollectionId].filters[sSourceId] = oBindingData.filters || [];
			}

			// 2) Reapply all the filters and sorters
			var aFilters = [];
			for (var key in this.mBindingOptions[sCollectionId].filters) {
				aFilters = aFilters.concat(this.mBindingOptions[sCollectionId].filters[key]);
			}

			// Add the groupby first in the sorters array
			if (aGroupby) {
				aSorters = aSorters ? aGroupby.concat(aSorters) : aGroupby;
			}

			var aFinalFilters = aFilters.length > 0 ? [new sap.ui.model.Filter(aFilters, true)] : undefined;
			return {
				filters: aFinalFilters,
				sorters: aSorters
			};

		},
		onInit: function() {
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRouter.getTarget("ManageMaterialRequest").attachDisplay(jQuery.proxy(this.handleRouteMatched, this));

			var oView = this.getView(),
				oData = {},
				self = this;
			var oModel = new sap.ui.model.json.JSONModel();
			oView.setModel(oModel, "staticDataModel");
			self.oBindingParameters = {};

			oData["np-sap_m_IconTabFilter_Ok-1442508845077-0B8-de6a1f4967aecd8f0e3330483_S3-content-build_simple_form_Form-1603112239883-formContainers-build_simple_form_FormContainer-1-formElements-build_simple_form_FormElement-1603119642596-fields-sap_m_DateRangeSelection-1603119682764"] = {};

			oData["np-sap_m_IconTabFilter_Ok-1442508845077-0B8-de6a1f4967aecd8f0e3330483_S3-content-build_simple_form_Form-1603112239883-formContainers-build_simple_form_FormContainer-1-formElements-build_simple_form_FormElement-1603119642596-fields-sap_m_DateRangeSelection-1603119682764"]["dateValue"] = new Date("2020-10-19T00:00:00.000Z");

			oData["np-sap_m_IconTabFilter_Ok-1442508845077-0B8-de6a1f4967aecd8f0e3330483_S3-content-build_simple_form_Form-1603112239883-formContainers-build_simple_form_FormContainer-1-formElements-build_simple_form_FormElement-1603119642596-fields-sap_m_DateRangeSelection-1603119682764"]["secondDateValue"] = new Date("2020-10-20T00:00:00.000Z");

			oData["np-sap_m_IconTabFilter_Ok-1442508845077-0B8-de6a1f4967aecd8f0e3330483_S3-content-build_simple_form_Form-1603112239883-formContainers-build_simple_form_FormContainer-1-formElements-build_simple_form_FormElement-1603119848396-fields-sap_m_DateRangeSelection-1"] = {};

			oData["np-sap_m_IconTabFilter_Ok-1442508845077-0B8-de6a1f4967aecd8f0e3330483_S3-content-build_simple_form_Form-1603112239883-formContainers-build_simple_form_FormContainer-1-formElements-build_simple_form_FormElement-1603119848396-fields-sap_m_DateRangeSelection-1"]["dateValue"] = new Date("2020-10-19T00:00:00.000Z");

			oData["np-sap_m_IconTabFilter_Ok-1442508845077-0B8-de6a1f4967aecd8f0e3330483_S3-content-build_simple_form_Form-1603112239883-formContainers-build_simple_form_FormContainer-1-formElements-build_simple_form_FormElement-1603119848396-fields-sap_m_DateRangeSelection-1"]["secondDateValue"] = new Date("2020-10-20T00:00:00.000Z");

			oData["np-sap_m_IconTabFilter_Ok-1442508845077-0B8-de6a1f4967aecd8f0e3330483_S3-content-build_simple_form_Form-1603112239883-formContainers-build_simple_form_FormContainer-1-formElements-build_simple_form_FormElement-1603119849829-fields-sap_m_DateRangeSelection-1"] = {};

			oData["np-sap_m_IconTabFilter_Ok-1442508845077-0B8-de6a1f4967aecd8f0e3330483_S3-content-build_simple_form_Form-1603112239883-formContainers-build_simple_form_FormContainer-1-formElements-build_simple_form_FormElement-1603119849829-fields-sap_m_DateRangeSelection-1"]["dateValue"] = new Date("2020-10-19T00:00:00.000Z");

			oData["np-sap_m_IconTabFilter_Ok-1442508845077-0B8-de6a1f4967aecd8f0e3330483_S3-content-build_simple_form_Form-1603112239883-formContainers-build_simple_form_FormContainer-1-formElements-build_simple_form_FormElement-1603119849829-fields-sap_m_DateRangeSelection-1"]["secondDateValue"] = new Date("2020-10-20T00:00:00.000Z");

			oData["np-sap_m_IconTabFilter_Ok-1442508845077-0B8-de6a1f4967aecd8f0e3330483_S3-content-build_simple_form_Form-1603115730395-formContainers-build_simple_form_FormContainer-1-formElements-build_simple_form_FormElement-1603120531946-fields-sap_m_DateRangeSelection-1"] = {};

			oData["np-sap_m_IconTabFilter_Ok-1442508845077-0B8-de6a1f4967aecd8f0e3330483_S3-content-build_simple_form_Form-1603115730395-formContainers-build_simple_form_FormContainer-1-formElements-build_simple_form_FormElement-1603120531946-fields-sap_m_DateRangeSelection-1"]["dateValue"] = new Date("2020-10-19T00:00:00.000Z");

			oData["np-sap_m_IconTabFilter_Ok-1442508845077-0B8-de6a1f4967aecd8f0e3330483_S3-content-build_simple_form_Form-1603115730395-formContainers-build_simple_form_FormContainer-1-formElements-build_simple_form_FormElement-1603120531946-fields-sap_m_DateRangeSelection-1"]["secondDateValue"] = new Date("2020-10-20T00:00:00.000Z");

			oData["np-sap_m_IconTabFilter_Ok-1442508845077-0B8-de6a1f4967aecd8f0e3330483_S3-content-build_simple_form_Form-1603115730395-formContainers-build_simple_form_FormContainer-1-formElements-build_simple_form_FormElement-1603120572916-fields-sap_m_DateRangeSelection-1"] = {};

			oData["np-sap_m_IconTabFilter_Ok-1442508845077-0B8-de6a1f4967aecd8f0e3330483_S3-content-build_simple_form_Form-1603115730395-formContainers-build_simple_form_FormContainer-1-formElements-build_simple_form_FormElement-1603120572916-fields-sap_m_DateRangeSelection-1"]["dateValue"] = new Date("2020-10-19T00:00:00.000Z");

			oData["np-sap_m_IconTabFilter_Ok-1442508845077-0B8-de6a1f4967aecd8f0e3330483_S3-content-build_simple_form_Form-1603115730395-formContainers-build_simple_form_FormContainer-1-formElements-build_simple_form_FormElement-1603120572916-fields-sap_m_DateRangeSelection-1"]["secondDateValue"] = new Date("2020-10-20T00:00:00.000Z");

			oData["np-sap_m_IconTabFilter_Ok-1442508845077-0B8-de6a1f4967aecd8f0e3330483_S3-content-build_simple_form_Form-1603115730395-formContainers-build_simple_form_FormContainer-1-formElements-build_simple_form_FormElement-1603120573959-fields-sap_m_DateRangeSelection-1"] = {};

			oData["np-sap_m_IconTabFilter_Ok-1442508845077-0B8-de6a1f4967aecd8f0e3330483_S3-content-build_simple_form_Form-1603115730395-formContainers-build_simple_form_FormContainer-1-formElements-build_simple_form_FormElement-1603120573959-fields-sap_m_DateRangeSelection-1"]["dateValue"] = new Date("2020-10-19T00:00:00.000Z");

			oData["np-sap_m_IconTabFilter_Ok-1442508845077-0B8-de6a1f4967aecd8f0e3330483_S3-content-build_simple_form_Form-1603115730395-formContainers-build_simple_form_FormContainer-1-formElements-build_simple_form_FormElement-1603120573959-fields-sap_m_DateRangeSelection-1"]["secondDateValue"] = new Date("2020-10-20T00:00:00.000Z");

			oData["np-sap_m_IconTabFilter_Ok-1442508845077-0B8-de6a1f4967aecd8f0e3330483_S3-content-build_simple_form_Form-1603115730395-formContainers-build_simple_form_FormContainer-1-formElements-build_simple_form_FormElement-1603120575105-fields-sap_m_DateRangeSelection-1"] = {};

			oData["np-sap_m_IconTabFilter_Ok-1442508845077-0B8-de6a1f4967aecd8f0e3330483_S3-content-build_simple_form_Form-1603115730395-formContainers-build_simple_form_FormContainer-1-formElements-build_simple_form_FormElement-1603120575105-fields-sap_m_DateRangeSelection-1"]["dateValue"] = new Date("2020-10-19T00:00:00.000Z");

			oData["np-sap_m_IconTabFilter_Ok-1442508845077-0B8-de6a1f4967aecd8f0e3330483_S3-content-build_simple_form_Form-1603115730395-formContainers-build_simple_form_FormContainer-1-formElements-build_simple_form_FormElement-1603120575105-fields-sap_m_DateRangeSelection-1"]["secondDateValue"] = new Date("2020-10-20T00:00:00.000Z");

			oData["np-sap_m_IconTabFilter_Ok-1442508845077-0B8-de6a1f4967aecd8f0e3330483_S3-content-build_simple_form_Form-1603115730395-formContainers-build_simple_form_FormContainer-1-formElements-build_simple_form_FormElement-1603120576851-fields-sap_m_DateRangeSelection-1"] = {};

			oData["np-sap_m_IconTabFilter_Ok-1442508845077-0B8-de6a1f4967aecd8f0e3330483_S3-content-build_simple_form_Form-1603115730395-formContainers-build_simple_form_FormContainer-1-formElements-build_simple_form_FormElement-1603120576851-fields-sap_m_DateRangeSelection-1"]["dateValue"] = new Date("2020-10-19T00:00:00.000Z");

			oData["np-sap_m_IconTabFilter_Ok-1442508845077-0B8-de6a1f4967aecd8f0e3330483_S3-content-build_simple_form_Form-1603115730395-formContainers-build_simple_form_FormContainer-1-formElements-build_simple_form_FormElement-1603120576851-fields-sap_m_DateRangeSelection-1"]["secondDateValue"] = new Date("2020-10-20T00:00:00.000Z");

			oView.getModel("staticDataModel").setData(oData, true);

			function dateDimensionFormatter(oDimensionValue, sTextValue) {
				var oValueToFormat = sTextValue !== undefined ? sTextValue : oDimensionValue;
				if (oValueToFormat instanceof Date) {
					var oFormat = sap.ui.core.format.DateFormat.getDateInstance({
						style: "short"
					});
					return oFormat.format(oValueToFormat);
				}
				return oValueToFormat;
			}

		},
		onAfterRendering: function() {

			var oChart,
				self = this,
				oBindingParameters = this.oBindingParameters,
				oView = this.getView();

		}
	});
}, /* bExport= */ true);
