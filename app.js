'use strict';
const Homey = require('homey');

class ITHO extends Homey.App {

	onInit() {


		// create & register a signal using the id from your app.json
		let mySignal1 = new Homey.Signal868("MESSAGE1");
		mySignal1.register()
			.then(() => {
				this.log('MESSAGE1 registered...');
				for (var i = 0; i < 10; i++) {

					this.log('Transmitting HIGH1 signal...');

					mySignal1.tx([1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1], console.log);
				}

				for (var i = 0; i < 10; i++) {

					this.log('Transmitting HIGH1 signal...');

					mySignal1.cmd("HIGH1", console.log);
				}

			})

			.catch(this.error)
	}
}

module.exports = ITHO;
