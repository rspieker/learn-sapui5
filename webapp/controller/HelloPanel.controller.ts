sap.ui.define([
	'sap/ui/core/mvc/Controller',
	'sap/m/MessageToast'
], (
	Controller: typeof sap.ui.core.mvc.Controller,
	MessageToast: typeof sap.m.MessageToast,
) => {
	return Controller.extend('sap.ui.demo.walkthrough.controller.HelloPanel', {
		formatMessage(message, ...values) {
			return message.replace(/\{([0-9]+)\}/g, (_: string, i: string) => values[Number(i)] || '');
		},
		onShowHello(): void {
			// read msg from i18n model
			const bundle = this.getView().getModel('i18n').getResourceBundle();
			const recipient = this.getView().getModel().getProperty('/recipient/name');
			const message = bundle.getText('helloMsg', [recipient]);
			// show message
			MessageToast.show(message);
		},
		onOpenDialog(): void {
			this.getOwnerComponent().openHelloDialog();
		},
	});
});
