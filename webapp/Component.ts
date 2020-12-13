sap.ui.define(
	[
		'sap/ui/core/UIComponent',
		'sap/ui/model/json/JSONModel',
		'./controller/HelloDialog',
		'sap/ui/Device',
	],
	(
		UIComponent: typeof sap.ui.core.UIComponent,
		JSONModel: typeof sap.ui.model.json.JSONModel,
		HelloDialog: typeof sap.ui.base.ManagedObject,
		Device: typeof sap.ui.Device
	) => {
		let dialog: sap.ui.base.ManagedObject;
		let density: string;

		return UIComponent.extend('sap.ui.demo.walkthrough.Component', {
			metadata: {
				manifest: 'json'
			},
			init(...args: unknown[]) {
				// call the init function of the parent
				UIComponent.prototype.init.apply(this, args);

				// set data model
				const data = { recipient: { name: 'World' } };
				const model = new JSONModel(data, true);
				this.setModel(model);

				// set device model
				const device = new JSONModel(Device, true);
				device.setDefaultBindingMode(sap.ui.model.BindingMode.OneWay);
				this.setModel(device, 'device');

				dialog = new HelloDialog(this.getRootControl());

				// create the views based on the url/hash
				this.getRouter().initialize();
			},
			getContentDensityClass(): string {
				if (!density) {
					const style = !Device.support.touch ? 'Compact' : 'Cozy'

					density = `sapUiSize${style}`;
				}

				return density;
			},
			exit(): void {
				dialog.destroy();
			},
			openHelloDialog(): void {
				(dialog as any).open();
			},
		});
	}
);
