const BlockType = require('../../extension-support/block-type');
const nets = require('nets');
const log = require('../../util/log');

/**
 * How long to wait in ms before timing out requests to translate server.
 * @type {int}
 */
const serverTimeoutMs = 10000; // 10 seconds (chosen arbitrarily).

class rab {
    constructor(runtime) {
        this.runtime = runtime;
    }

    getInfo() {
        return {
            id: 'nctu',
            name: 'Browser Information',
            blocks: [
                {
                    opcode: 'getBrowserName',
                    blockType: BlockType.REPORTER,
                    text: 'Get Browser Name',
                },
				{
					opcode: 'getStoreCount',
					blockType: BlockType.REPORTER,
					text: 'StoreCount',
				}
            ],
        }
    }

    getBrowserName() {
        return navigator.appVersion;
    }
	
}

module.exports = Scratch3NCTU;
