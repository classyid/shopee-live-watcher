function getSessionIdFromShortLink(shortLink) {
  try {
    const response = UrlFetchApp.fetch(shortLink, {
      followRedirects: false,
      muteHttpExceptions: true
    });
    
    const headers = response.getHeaders();
    const location = headers['Location'];
    
    if (location) {
      const urlParams = location.match(/session=([^&]+)/);
      return urlParams?.[1] || null;
    }
    return null;
  } catch (error) {
    logError('getSessionIdFromShortLink', error, { shortLink });
    return null;
  }
}

function fetchLivestreamData(sessionId) {
  try {
    const url = `https://live.shopee.co.id/api/v1/session/${sessionId}`;
    const response = UrlFetchApp.fetch(url);
    const jsonData = JSON.parse(response.getContentText());

    if (jsonData.err_code !== 0) {
      throw new Error(jsonData.err_msg);
    }

    return {
      data: jsonData.data.session,
      playUrl: jsonData.data.play_urls[0]
    };
  } catch (error) {
    logError('fetchLivestreamData', error, { sessionId });
    return null;
  }
}
