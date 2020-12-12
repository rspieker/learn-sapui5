sap.ui.define([
	'sap/ui/core/mvc/Controller',
	'sap/m/MessageToast',
	'sap/ui/model/json/JSONModel'
], (Controller, MessageToast, JSONModel) => {
	'use strict';

	return Controller.extend('sap.ui.demo.walkthrough.controller.App', {
		onInit() {
			const data = {
				recipient: {
					name: 'World'
				}
			};
			const model = new JSONModel(data);
			this.getView().setModel(model);
		},
		onShowHello() {
			MessageToast.show('Hello World');
		}
	});
});
