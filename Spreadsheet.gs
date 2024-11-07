function saveLivestreamData(livestreamData) {
  const config = getConfig();
  
  try {
    const sheet = SpreadsheetApp.openById(config.spreadsheet.id)
      .getSheetByName(config.spreadsheet.sheetName);

    sheet.appendRow([
      new Date(),
      livestreamData.data.session_id,
      livestreamData.data.username,
      livestreamData.data.title,
      livestreamData.data.description,
      livestreamData.data.member_cnt,
      livestreamData.data.like_cnt,
      livestreamData.data.start_time,
      livestreamData.data.end_time,
      livestreamData.data.play_url,
      livestreamData.playUrl,
      livestreamData.data.chatroom_id,
      livestreamData.data.is_terminate,
      livestreamData.data.items_cnt,
      livestreamData.data.viewer_count,
      livestreamData.data.share_cnt,
      livestreamData.data.subtitle
    ]);
  } catch (error) {
    logError('saveLivestreamData', error);
  }
}
