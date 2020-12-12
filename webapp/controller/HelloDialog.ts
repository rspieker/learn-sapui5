sap.ui.define([
	'sap/ui/base/ManagedObject',
	'sap/ui/core/Fragment',
	'sap/ui/core/syncStyleClass',
], (
	ManagedObject: typeof sap.ui.base.ManagedObject,
	Fragment: typeof sap.ui.core.Fragment,
	syncStyleClass: any
) => {
	return ManagedObject.extend('sap.ui.demo.walkthrough.controller.HelloDialog', {
		constructor(view) {
			this.view = view;
		},

		exit(): void {
			delete this.view;
		},

		open(): void {
			var view = this.view;

			// create dialog lazily
			if (!this.dialog) {
				// load asynchronous XML fragment
				this.dialog = Fragment.load({
					id: view.getId(),
					name: 'sap.ui.demo.walkthrough.view.HelloDialog',
					controller: {
						onCloseDialog() {
							view.byId('helloDialog').close();
						}
					} as unknown as sap.ui.core.mvc.Controller,
				}).then((dialog) => {
					// connect dialog to the root view of this component (models, lifecycle)
					view.addDependent(dialog);
					// forward compact/cozy style into dialog
					syncStyleClass(view.getController().getOwnerComponent().getContentDensityClass(), view, dialog);

					return dialog;
				});
			}
			this.dialog.then((dialog) => dialog.open());
		}
	});
});
