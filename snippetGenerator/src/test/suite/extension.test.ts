import * as assert from 'assert';
import '@types/jest';
// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
// import * as vscode from 'vscode';
// import * as myExtension from '../../extension';

describe('Extension Test Suite', () => {
	// vscode.window.showInformationMessage('Start all tests.');

	it('Sample test', () => {
		// assert.strictEqual(-1, [1, 2, 3].indexOf(5));
		// assert.strictEqual(-1, [1, 2, 3].indexOf(0));
		expect(1).toBe(1);
	});
});
