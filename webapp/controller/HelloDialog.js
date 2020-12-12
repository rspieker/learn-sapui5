sap.ui.define([
	'sap/ui/base/ManagedObject',
	'sap/ui/core/Fragment'
], (ManagedObject, Fragment) => {
	'use strict';

	return ManagedObject.extend('sap.ui.demo.walkthrough.controller.HelloDialog', {

		constructor: function (view) {
			this._view = view;
		},

		exit: function () {
			delete this._view;
		},

		open: function () {
			const view = this._view;

			// create dialog lazily
			if (!this.dialog) {
				const controller = {
					onCloseDialog: () => this.dialog.then((dialog) => dialog.close()),
				};
				// load asynchronous XML fragment
				this.dialog = Fragment.load({
					id: view.getId(),
					name: 'sap.ui.demo.walkthrough.view.HelloDialog',
					controller,
				}).then((dialog) => {
					// connect dialog to the root view of this component (models, lifecycle)
					view.addDependent(dialog);
					return dialog;
				});
			}
			this.dialog.then(function (dialog) {
				dialog.open();
			});
		}

	});

});
