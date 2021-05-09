# saveoursource README

Note this extension will never see the light of day in that cute little vscode extensions page cause it relies on an event that's for insiders only. Which means we're just gonna have to remember to save our files, boohoo :(

## History Lesson
So this extension would work if the event onDidWriteTerminalData was still available however it was removed from the vscode api cause of performance issues.
https://github.com/microsoft/vscode/issues/83224

Instead the next best thing was to use onDidActiveTerminalChange but there's actually a bug with that one where the first default terminal doesn't get picked up. The bug was addressed and closed but I'm seeing it happen in 1.55.2 (idk if I should raise it again though, its not super important)
https://github.com/microsoft/vscode/issues/53107

## Features

When a vscode terminal is in use and there are unsaved files in the workspace, the user recieves a prompt which allows them to review and save all unsaved files.
![demo](https://github.com/krkeely/vscode-ext-saveoursource/blob/init/images/source_our_save_example.gif)

## Known Issues

The save all prompt only appears when the user creates a new terminal, if the same terminal continues to be used the prompt will not appear again.

If anyone has any suggestions on how to check if any terminal is in focus, that would be awesome.

## Release Notes

Nada cause nothings released


