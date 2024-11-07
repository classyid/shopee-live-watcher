function setupTrigger() {
  const config = getConfig();
  
  // Hapus trigger yang ada
  const allTriggers = ScriptApp.getProjectTriggers();
  allTriggers.forEach(trigger => ScriptApp.deleteTrigger(trigger));

  // Buat trigger baru
  ScriptApp.newTrigger('processAllShortLinks')
    .timeBased()
    .everyMinutes(config.shopee.fetchIntervalMinutes)
    .create();
}

function processAllShortLinks() {
  const config = getConfig();
  
  config.shopee.shortLinks.forEach(shortLink => {
    try {
      processShortLink(shortLink);
    } catch (error) {
      logError('processAllShortLinks', error, { shortLink });
    }
  });
}

function processShortLink(shortLink) {
  const sessionId = getSessionIdFromShortLink(shortLink);
  if (!sessionId) {
    logError('processShortLink', new Error('Session ID not found'), { shortLink });
    return;
  }

  const livestreamData = fetchLivestreamData(sessionId);
  if (livestreamData) {
    saveLivestreamData(livestreamData);
    sendNotifications(livestreamData, shortLink);
  }
}
