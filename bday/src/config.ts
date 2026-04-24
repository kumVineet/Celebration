const config = {
  recipientName: import.meta.env.VITE_RECIPIENT_NAME ?? "You",
  senderName: import.meta.env.VITE_SENDER_NAME ?? "Me",
  whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER ?? "",
};

export default config;
