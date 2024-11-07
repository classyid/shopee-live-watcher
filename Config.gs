function getConfig() {
  return {
    // Shopee Configuration
    shopee: {
      shortLinks: [
        "<shortLink-Shopee>",
        // Tambahkan short link lain di sini
      ],
      fetchIntervalMinutes: 10
    },

    // Spreadsheet Configuration
    spreadsheet: {
      id: "<ID-SPREADSHEET>",
      sheetName: "livestream"
    },

    // Notification Configuration
    notifications: {
      // Telegram Config
      telegram: {
        enabled: true,
        token: "<ID-TOKEN>",
        chatId: "<IDCHAT>"
      },
      
      // WhatsApp Config
      whatsapp: {
        enabled: true,
        apiKey: "<APIKEY>",
        sender: "<SENDER>",
        receiver: "<HPTUJUAN>"
      }
    }
  };
}
