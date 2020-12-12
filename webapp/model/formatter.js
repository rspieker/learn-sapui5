sap.ui.define([], function () {
	'use strict';
	return {
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
