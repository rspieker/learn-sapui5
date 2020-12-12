sap.ui.define([], function () {
	'use strict';
	return {
		properCurrency: function (value, currency) {
			const formatter = new Intl.NumberFormat('nl', {
				style: 'currency',
				currency,
			});

			return formatter.format(value);
		},
		statusSimple: function (status) {
			const bundle = this.getView().getModel('i18n').getResourceBundle();
			const invoiceStatus = `invoiceStatus${status}`;
			const [text] = [status, invoiceStatus].filter((text) => bundle.hasText(text));

			if (text) {
				return bundle.getText(text);
			}

			return status;
		},
	};
});
