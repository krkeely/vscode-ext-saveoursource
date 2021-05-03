import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('"saveoursource" is now active');

	function checkUnsavedFiles () {
		console.log('checking for unsaved files');
		let unsavedFiles = vscode.workspace.textDocuments.map(file => {
			if (file.isDirty)
				return file
		} );

		if(vscode.window.activeTerminal && unsavedFiles.length > 0){
			let saveAll = 'Save All'
			let message = 'Unsaved Files:'
			for (let file of unsavedFiles){
				message += '\r' + file?.fileName;
			}
			vscode.window.showInformationMessage(message, saveAll)
			.then(selection => {
				if(selection === saveAll){
					unsavedFiles.forEach(file => {
						if(!file?.save()){
							vscode.window.showInformationMessage('failed to save ' + file?.fileName)
							console.log('failed to save ' + file?.fileName)
						}
					});
				}
					
			});
		}

	}
	let changeListener = vscode.window.onDidChangeActiveTerminal(checkUnsavedFiles);		
	context.subscriptions.push(changeListener);
}

// this method is called when your extension is deactivated
export function deactivate() {}
