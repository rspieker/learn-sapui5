sap.ui.define([], () => {
	return {
		statusText(status) {
			const bundle = this.getView().getModel('i18n').getResourceBundle();

			switch (status) {
				case 'A':
					return bundle.getText('invoiceStatusA');
				case 'B':
					return bundle.getText('invoiceStatusB');
				case 'C':
					return bundle.getText('invoiceStatusC');
				default:
					return status;
			}
		}
	};
});
