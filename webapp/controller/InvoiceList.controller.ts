type Formatter = { [key: string]: (...args: any[]) => string };

sap.ui.define([
	'sap/ui/core/mvc/Controller',
	'sap/ui/model/json/JSONModel',
	'../model/formatter',
	'sap/ui/model/Filter',
	'sap/ui/model/FilterOperator',
], (
	Controller: typeof sap.ui.core.mvc.Controller,
	JSONModel: typeof sap.ui.model.json.JSONModel,
	formatter: Formatter,
	Filter: typeof sap.ui.model.Filter,
	FilterOperator: typeof sap.ui.model.FilterOperator
) => {
	return Controller.extend('sap.ui.demo.walkthrough.controller.InvoiceList', {
		formatter: formatter,
		onInit(): void {
			const model = new JSONModel({ currency: 'EUR' }, false);
			this.getView().setModel(model, 'view');
		},
		onFilterInvoices(event: sap.ui.base.Event): void {
			// build filter array
			const filter: sap.ui.model.Filter[] = [];
			const query: string = event.getParameter('query');

			if (query) {
				// TODO: find/create a better type
				const key = 'ProductName' as any;

				filter.push(new Filter(key, FilterOperator.Contains, query));
			}

			// filter binding
			const list = this.byId('invoiceList');
			const binding = list.getBinding('items');

			binding.filter(filter);
		},
		onPress(event: sap.ui.base.Event): void {
			const source: sap.ui.base.EventProvider = event.getSource();
			const router = sap.ui.core.UIComponent.getRouterFor(this);
			// TODO: find/create a better type
			const context = source as unknown as sap.ui.base.ManagedObject;

			router.navTo('detail', {
				invoicePath: window.encodeURIComponent(context.getBindingContext('invoice').getPath().substr(1))
			});
		}
	});
});
