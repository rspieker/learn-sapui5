sap.ui.define([
	'sap/ui/core/util/MockServer',
	'sap/base/util/UriParameters',
], (
	MockServer: typeof sap.ui.core.util.MockServer,
	UriParameters: any, //  TODO: sap.base.util.UriParameters doesn't seem to be exported
) => {
	return {
		init() {
			// create
			const mockserver = new MockServer(undefined, {
				rootUri: 'https://services.odata.org/V2/Northwind/Northwind.svc/'
			});

			const params = new UriParameters(window.location.href);

			// configure mock server with a delay
			MockServer.config({
				autoRespond: true,
				autoRespondAfter: params.get('serverDelay') || 500
			});

			// simulate
			const path = '../localService';
			mockserver.simulate(`${path}/metadata.xml`, {
				sMockdataBaseUrl: `${path}/mockdata`
			});

			// start
			mockserver.start();
		}
	};
});
