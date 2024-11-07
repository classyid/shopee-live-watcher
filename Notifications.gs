// ====================
// NOTIFICATIONS.gs
// ====================
function sendNotifications(livestreamData, shortLink) {
  const config = getConfig();
  const telegramMessage = formatMessage(livestreamData, shortLink);
  const whatsappMessage = formatMessageWhatsApp(livestreamData, shortLink);

  if (config.notifications.telegram.enabled) {
    sendToTelegram(telegramMessage);
  }

  if (config.notifications.whatsapp.enabled) {
    sendToWhatsApp(whatsappMessage);
  }
}

function formatMessage(livestreamData, shortLink) {
  const options = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric', 
    hour: '2-digit', 
    minute: '2-digit' 
  };

  const data = livestreamData.data;
  const startTime = new Date(data.start_time).toLocaleDateString('id-ID', options);
  const currentTime = new Date().toLocaleDateString('id-ID', options);

  // Format angka dengan pemisah ribuan
  const formatNumber = (num) => new Intl.NumberFormat('id-ID').format(num);

  // Hitung durasi livestream
  const duration = data.end_time ? 
    Math.floor((new Date(data.end_time) - new Date(data.start_time)) / (1000 * 60)) : 
    Math.floor((new Date() - new Date(data.start_time)) / (1000 * 60));

  // Status livestream
  const streamStatus = data.is_terminate ? '🔴 SELESAI' : '🟢 SEDANG BERLANGSUNG';

  return `📺 *UPDATE LIVESTREAM SHOPEE*\n` +
         `${streamStatus}\n\n` +
         
         `📅 *Waktu Update:*\n` +
         `${currentTime}\n\n` +
         
         `🎯 *Info Streamer:*\n` +
         `Username: ${data.username}\n` +
         `Judul: ${data.title || '-'}\n` +
         `Subtitle: ${data.subtitle || '-'}\n\n` +
         
         `📊 *Statistik Live:*\n` +
         `👥 Penonton: ${formatNumber(data.viewer_count)}\n` +
         `❤️ Like: ${formatNumber(data.like_cnt)}\n` +
         `👤 Member: ${formatNumber(data.member_cnt)}\n` +
         `🔄 Share: ${formatNumber(data.share_cnt)}\n` +
         `📦 Jumlah Produk: ${formatNumber(data.items_cnt)}\n` +
         `⏱️ Durasi: ${duration} menit\n\n` +
         
         `🕒 *Jadwal:*\n` +
         `Mulai: ${startTime}\n\n` +
         
         `🔗 *Link:*\n` +
         `Short Link: ${shortLink}\n` +
         `Play URL: ${data.play_url}\n\n` +
         
         `📝 *Deskripsi:*\n` +
         `${data.description || '-'}\n\n` +
         
         `#ShopeeID #LiveStreaming #${data.username}`;
}

function formatMessageWhatsApp(livestreamData, shortLink) {
  // Gunakan format yang sama tapi hilangkan karakter formatting khusus
  return formatMessage(livestreamData, shortLink)
    .replace(/\*/g, '') // Hapus karakter bold
    .replace(/#/g, ''); // Hapus hashtag
}

function sendToTelegram(message) {
  const config = getConfig();
  const { token, chatId } = config.notifications.telegram;
  
  try {
    const telegramUrl = `https://api.telegram.org/bot${token}/sendMessage`;
    const options = {
      method: "post",
      payload: {
        chat_id: chatId,
        text: message,
        parse_mode: "Markdown" // Tambahan untuk mendukung format bold
      }
    };

    UrlFetchApp.fetch(telegramUrl, options);
  } catch (error) {
    logError('sendToTelegram', error);
  }
}

function sendToWhatsApp(message) {
  const config = getConfig();
  const { apiKey, sender, receiver } = config.notifications.whatsapp;
  
  try {
    const whatsappUrl = "https://m-pedia/send-message";
    const options = {
      method: "post",
      contentType: "application/json",
      payload: JSON.stringify({
        api_key: apiKey,
        sender: sender,
        number: receiver,
        message: message
      })
    };

    UrlFetchApp.fetch(whatsappUrl, options);
  } catch (error) {
    logError('sendToWhatsApp', error);
  }
}
