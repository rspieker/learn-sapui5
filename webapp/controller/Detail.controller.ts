sap.ui.define([
	'sap/ui/core/mvc/Controller',
	'sap/ui/core/routing/History',
	'sap/m/MessageToast',
	'sap/ui/model/json/JSONModel',
	'sap/ui/core/UIComponent',
	'../model/formatter',
], (
	Controller: typeof sap.ui.core.mvc.Controller,
	History: typeof sap.ui.core.routing.History,
	MessageToast: typeof sap.m.MessageToast,
	JSONModel: typeof sap.ui.model.json.JSONModel,
	UIComponent: typeof sap.ui.core.UIComponent,
	formatter: Formatter,
) => {
	return Controller.extend('sap.ui.demo.walkthrough.controller.Detail', {
		formatter,
		onInit(): void {
			const model = new JSONModel({ currency: 'EUR' }, false);
			this.getView().setModel(model, 'view');

			const router = sap.ui.core.UIComponent.getRouterFor(this);
			router.getRoute('detail').attachPatternMatched(this._onObjectMatched, this);
		},
		_onObjectMatched(event): void {
			this.byId('rating').reset();
			this.getView().bindElement({
				path: '/' + window.decodeURIComponent(event.getParameter('arguments').invoicePath),
				model: 'invoice'
			});
		},
		onNavBack(): void {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			}
			else {
				var oRouter = UIComponent.getRouterFor(this);
				oRouter.navTo('overview', {}, true);
			}
		},
		onRatingChange(oEvent): void {
			var fValue = oEvent.getParameter('value');
			var oResourceBundle = this.getView().getModel('i18n').getResourceBundle();

			MessageToast.show(oResourceBundle.getText('ratingConfirmation', [fValue]));
		},
	});
});
