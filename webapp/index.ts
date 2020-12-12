sap.ui.define([
	'sap/ui/core/ComponentContainer'
], (
	ComponentContainer: typeof sap.ui.core.ComponentContainer,
) => {
	new ComponentContainer(undefined, {
		name: 'sap.ui.demo.walkthrough',
		settings: {
			id: 'walkthrough',
		},
	}).placeAt('content');
});
