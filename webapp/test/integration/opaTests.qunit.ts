type Opa5Integration = typeof sap.ui.test.Opa5 & {
	createPageObjects(options: { [key: string]: unknown }): void;
	assert: { [key: string]: (...args: any[]) => unknown };
}
type GlobalQUnitAndOPA = GlobalQUnit & {
	opaTest(message: string, runner: (...args: any[]) => void): void;
}
sap.ui.getCore()
	.attachInit(() => {
		const { QUnit } = globalThis as GlobalQUnit;

		QUnit.config.autostart = false;

		sap.ui.require([
			'sap/ui/demo/walkthrough/test/integration/NavigationJourney'
		], () => {
			QUnit.start();
		});
	});
