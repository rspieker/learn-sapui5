sap.ui.define([
	'sap/ui/demo/walkthrough/model/formatter',
	'sap/ui/model/resource/ResourceModel'
], (
	formatter: Formatter,
	ResourceModel: typeof sap.ui.model.resource.ResourceModel
) => {
	const { QUnit } = globalThis as GlobalQUnit;

	QUnit.module('Formatting functions', {
		beforeEach(): void {
			this.resource = new ResourceModel({
				bundleUrl: (sap.ui.require as any).toUrl('sap/ui/demo/walkthrough') + '/i18n/i18n.properties'
			});
		},
		afterEach(): void {
			this.resource.destroy();
		}
	});


	QUnit.test('Should return the translated texts', function (assert) {

		// Arrange
		// this.stub() does not support chaining and always returns the right data
		// even if a wrong or empty parameter is passed.
		const model = this.stub();
		model.withArgs('i18n').returns(this.resource);

		const view = {
			getModel: model
		};
		const controller = {
			getView: this.stub().returns(view)
		};

		// System under test
		const format = formatter.statusText.bind(controller);

		// Assert
		assert.strictEqual(format('A'), 'New', 'A becomes New');
		assert.strictEqual(format('B'), 'In Progress', 'B becomes In Progress');
		assert.strictEqual(format('C'), 'Done', 'C becomes Done');
		assert.strictEqual(format('D'), 'D', 'D stays D');
		assert.strictEqual(format('Foo'), 'Foo', 'Foo stays Foo');
	});
});
