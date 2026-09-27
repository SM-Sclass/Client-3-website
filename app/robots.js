const aiAnswerCrawlers = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "PerplexityBot",
  "Perplexity-User",
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "Google-Extended",
  "Applebot-Extended",
  "Amazonbot",
  "meta-externalagent",
  "meta-externalfetcher",
  "cohere-ai",
  "YouBot",
  "Diffbot",
  "Bytespider",
  "CCBot",
  "DuckAssistBot",
  "MistralAI-User"
];

const searchCrawlers = [
  "Googlebot",
  "Googlebot-Image",
  "Googlebot-News",
  "Bingbot",
  "Applebot",
  "Yandex",
  "DuckDuckBot",
  "Baiduspider",
  "Yahoo! Slurp"
];

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/private/"]
      },
      {
        userAgent: aiAnswerCrawlers,
        allow: ["/", "/llms.txt", "/llms-full.txt", "/sitemap.xml", "/sample-report.pdf"]
      },
      {
        userAgent: searchCrawlers,
        allow: "/",
        disallow: ["/private/"]
      }
    ],
    sitemap: "https://checkmatepdi.com/sitemap.xml",
    host: "https://checkmatepdi.com"
  };
}
