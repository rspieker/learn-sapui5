namespace sap.base.i18n {
	export type ResourceBundle = {
		getText(key: string, args?: any[], ignoreKeyFallback?: boolean): string;
		hasText(key: string): boolean;
	};
}

sap.ui.define([], () => ({
	statusText(status: string): string {
		const view: sap.ui.core.mvc.View = this.getView();
		const model: sap.ui.model.Model = view.getModel('i18n');
		const resource: sap.ui.model.resource.ResourceModel = model as sap.ui.model.resource.ResourceModel;
		const bundle: sap.base.i18n.ResourceBundle = resource.getResourceBundle();
		const invoiceStatusKey: string = `invoiceStatus${status}`;

		return bundle.getText(bundle.hasText(invoiceStatusKey) ? invoiceStatusKey : status);
	},

	properCurrency(amount: number, currency: string): string {
		const locale = sap.ui.getCore().getConfiguration().getLanguage();
		const formatter = new Intl.NumberFormat(locale, { style: 'currency', currency });

		return formatter.format(amount);
	},
}));
