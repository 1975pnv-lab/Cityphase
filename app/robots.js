export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://cityphase.ru/sitemap.xml',
    host: 'https://cityphase.ru',
  };
}
