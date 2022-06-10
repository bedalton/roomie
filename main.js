/*
- fix snap-to-edge when it's just edge-to-edge
- add slope annotation and CA emitter indicator
- splash screen for when there's no metaroom loaded
- application icon
*/

const { api } = require('./script/api')
const { buildMenu } = require('./script/menu')

nw.Window.open('index.html', {}, mainWindow => {
	mainWindow.menu = buildMenu()

	mainWindow.width = 800
	mainWindow.height = 600
	mainWindow.title = "Roomie"

	mainWindow.window.api = api

	if (process.versions['nw-flavor'] === 'sdk') {
		// chrome.developerPrivate.openDevTools({
		// 	renderViewId: -1,
		// 	renderProcessId: -1,
		// 	extensionId: chrome.runtime.id
		// })
		mainWindow.showDevTools()
	}
})
