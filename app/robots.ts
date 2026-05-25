import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      // Major search engines — explicit allow
      { userAgent: 'Googlebot', allow: '/' },
      { userAgent: 'Bingbot', allow: '/' },
      { userAgent: 'DuckDuckBot', allow: '/' },
      { userAgent: 'Slurp', allow: '/' },
      // AI assistants / answer engines — explicit allow so we get cited
      { userAgent: 'GPTBot', allow: '/' },                  // OpenAI training
      { userAgent: 'OAI-SearchBot', allow: '/' },           // ChatGPT Search
      { userAgent: 'ChatGPT-User', allow: '/' },            // ChatGPT browse-on-demand
      { userAgent: 'ClaudeBot', allow: '/' },               // Anthropic
      { userAgent: 'anthropic-ai', allow: '/' },            // Anthropic (legacy UA)
      { userAgent: 'Claude-Web', allow: '/' },              // Claude live web
      { userAgent: 'PerplexityBot', allow: '/' },           // Perplexity
      { userAgent: 'Perplexity-User', allow: '/' },         // Perplexity on-demand
      { userAgent: 'Google-Extended', allow: '/' },         // Gemini training opt-in
      { userAgent: 'Applebot', allow: '/' },                // Siri / Spotlight
      { userAgent: 'Applebot-Extended', allow: '/' },       // Apple Intelligence
      { userAgent: 'CCBot', allow: '/' },                   // Common Crawl (feeds many LLMs)
      { userAgent: 'cohere-ai', allow: '/' },               // Cohere
      { userAgent: 'Meta-ExternalAgent', allow: '/' },      // Meta AI
      // Known abusive scrapers — block
      { userAgent: 'Bytespider', disallow: '/' },           // TikTok/ByteDance scraper
      { userAgent: 'PetalBot', disallow: '/' },             // Huawei
    ],
    sitemap: 'https://goldmanmerchantservices.com/sitemap.xml',
    host: 'https://goldmanmerchantservices.com',
  };
}
