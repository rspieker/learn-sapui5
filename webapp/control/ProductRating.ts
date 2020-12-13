sap.ui.define([
	'sap/ui/core/Control',
	'sap/m/RatingIndicator',
	'sap/m/Label',
	'sap/m/Button'

], (
	Control: typeof sap.ui.core.Control,
	RatingIndicator: typeof sap.m.RatingIndicator,
	Label: typeof sap.m.Label,
	Button: typeof sap.m.Button
) => {
	return Control.extend('sap.ui.demo.walkthrough.control.ProductRating', {
		metadata: {
			properties: {
				value: { type: 'float', defaultValue: 0 }
			},
			aggregations: {
				_rating: { type: 'sap.m.RatingIndicator', multiple: false, visibility: 'hidden' },
				_label: { type: 'sap.m.Label', multiple: false, visibility: 'hidden' },
				_button: { type: 'sap.m.Button', multiple: false, visibility: 'hidden' }
			},
			events: {
				change: {
					parameters: {
						value: { type: 'int' }
					}
				}
			}
		},
		init(): void {
			this.setAggregation('_rating', new RatingIndicator(undefined, {
				value: this.getValue(),
				iconSize: '2rem',
				visualMode: sap.m.RatingIndicatorVisualMode.Half,
				liveChange: this._onRate.bind(this)
			}));
			this.setAggregation('_label', new Label(undefined, {
				text: '{i18n>productRatingLabelInitial}'
			}).addStyleClass('sapUiSmallMargin'));
			this.setAggregation('_button', new Button(undefined, {
				text: '{i18n>productRatingButton}',
				press: this._onSubmit.bind(this)
			}).addStyleClass('sapUiTinyMarginTopBottom'));
		},

		setValue(fValue): void {
			this.setProperty('value', fValue, true);
			this.getAggregation('_rating').setValue(fValue);
		},

		_bundle(): any {
			return this.getModel('i18n').getResourceBundle();
		},
		_formattedText(key: string, ...args: any[]): string {
			return this._bundle()
				.getText(key, args);
		},

		reset(): void {
			this.setValue(0);
			this.getAggregation('_label').setDesign('Standard');
			this.getAggregation('_rating').setEnabled(true);
			this.getAggregation('_label').setText(this._formattedText('productRatingLabelInitial'));
			this.getAggregation('_button').setEnabled(true);
		},

		_onRate(event: sap.ui.base.Event): void {
			const value = event.getParameter('value');

			// TODO: figure out how to correctly go from the documented sap.ui.base.EventProvider to the actual sap.ui.core.Control (which is extended by sap.m.RatingIndicator)
			const source = event.getSource() as unknown as sap.m.RatingIndicator;
			const limit = source.getMaxValue();

			this.setProperty('value', value, true);

			this.getAggregation('_label')
				.setText(this._formattedText('productRatingLabelIndicator', value, limit));
			this.getAggregation('_label').setDesign('Bold');
		},

		_onSubmit(_event: sap.ui.base.Event): void {
			this.getAggregation('_rating').setEnabled(false);
			this.getAggregation('_label').setText(this._formattedText('productRatingLabelFinal'));
			this.getAggregation('_button').setEnabled(false);
			this.fireEvent('change', {
				value: this.getValue()
			});
		},

		renderer(manager: any, control: any): void {
			manager.openStart('div', control);
			manager.class('myAppDemoWTProductRating');
			manager.openEnd();
			manager.renderControl(control.getAggregation('_rating'));
			manager.renderControl(control.getAggregation('_label'));
			manager.renderControl(control.getAggregation('_button'));
			manager.close('div');
		}
	});
});
