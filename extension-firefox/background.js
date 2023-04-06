
browser.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	browser.downloads.download({url: request.url, saveAs: true}, downloadId => {
		if (browser.runtime.lastError) {
			// Обработка ошибки загрузки
			console.error(browser.runtime.lastError.message);
		 } else {
			// Обработка успешной загрузки
			console.log("Изображение с [%i] загружено." + downloadId);
		 }
	});
 });