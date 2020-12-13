sap.ui.define([
	'sap/ui/demo/walkthrough/localService/mockserver',
	'sap/ui/test/opaQunit',
	'./pages/App'
], (mockserver: MockServerImplementation) => {
	const { QUnit, opaTest } = globalThis as GlobalQUnitAndOPA;

	QUnit.module('Navigation');

	opaTest('Should open the Hello dialog', (Given, When, Then) => {
		// initialize the mock server
		mockserver.init();

		// Arrangements
		Given.iStartMyUIComponent({
			componentConfig: {
				name: 'sap.ui.demo.walkthrough'
			}
		});

		//Actions
		When.onTheAppPage.iPressTheSayHelloWithDialogButton();

		// Assertions
		Then.onTheAppPage.iShouldSeeTheHelloDialog();

		// Cleanup
		Then.iTeardownMyApp();
	});
});
