export default function sitemap() {
  const base = 'https://cityphase.ru';
  const now = new Date();
  return [
    { url: `${base}/`,            lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${base}/12-hours`,    lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${base}/technology`,  lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/about`,       lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
  ];
}
