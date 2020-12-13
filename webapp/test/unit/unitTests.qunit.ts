type QUnitContract = {
	start(): any;
	module(message: string, options?: { [key: string]: unknown }): void;
	test(message: string, runner: (assert: { [key: string]: (...args: any[]) => boolean }) => void): void;
	config: {
		[key: string]: unknown;
	};
};
type GlobalQUnit = typeof globalThis & { QUnit: QUnitContract };

sap.ui.getCore()
	.attachInit(() => {
		const { QUnit } = globalThis as GlobalQUnit;

		QUnit.config.autostart = false;

		sap.ui.require([
			'sap/ui/demo/walkthrough/test/unit/model/formatter'
		], () => {
			QUnit.start();
		});
	});
