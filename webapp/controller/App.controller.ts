sap.ui.define([
	'sap/ui/core/mvc/Controller',
], (
	Controller: typeof sap.ui.core.mvc.Controller
) => {
	return Controller.extend('sap.ui.demo.walkthrough.controller.App', {
		onInit(): void {
			this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
		},
		onOpenDialog(): void {
			this.getOwnerComponent().openHelloDialog();
		}
	});
});
