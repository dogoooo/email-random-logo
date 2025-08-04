// netlify/functions/random-logo.js
exports.handler = async () => {
  // 1..6
  const n = Math.floor(Math.random() * 6) + 1;

  // Your Netlify site URL (can also use process.env.URL if you have a custom domain)
  const base = 'https://lively-speculoos-b06e97.netlify.app';

  // Use Netlify's per-deploy id as a cache-busting query string
  const v = process.env.DEPLOY_ID || process.env.COMMIT_REF || 'dev';

  // Different URL each deploy => email proxies fetch fresh pixels
  const url = `${base}/logo${n}.png?v=${encodeURIComponent(v)}`;

  return {
    statusCode: 302,
    headers: {
      Location: url,
      // These headers apply to the redirect response (fine to keep),
      // but the real win is the versioned URL above.
      'Cache-Control': 'no-store, no-cache, max-age=0, must-revalidate',
      'Pragma': 'no-cache'
    }
  };
};
