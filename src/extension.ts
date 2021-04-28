import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "saveoursource" is now active!');
	vscode
	var unsavedFiles = vscode.workspace.textDocuments.map(file => {
		if (file.isDirty)
			return file
	} );

	let disposable = vscode.commands.registerCommand('saveoursource.checkUnsaved', () => {
		let SaveAll = 'Save all'
		vscode.window.showInformationMessage('all unsaved files '+ unsavedFiles.forEach(file => file?.fileName), SaveAll )
		.then(selection => {
			if(selection == SaveAll){
				unsavedFiles.forEach(file => {
					if(!file?.save()){
						vscode.window.showInformationMessage('failed to save ' + file?.fileName)
						console.log('failed to save ' + file?.fileName)
					}
				});
			}
		});
		
	});
	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
