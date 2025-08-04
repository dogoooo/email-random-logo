// netlify/functions/random-logo.js
exports.handler = async () => {
  // Pick 1, 2 or 3
  const n = Math.floor(Math.random() * 3) + 1;

  // 👇 CHANGE THIS to your Netlify site (keep the https://)
  const base = 'https://lively-speculoos-b06e97.netlify.app';

  // If your images are in /images, change to `${base}/images/logo${n}.png`
  const url = `${base}/logo${n}.png`;

  return {
    statusCode: 302,
    headers: {
      Location: url,
      'Cache-Control': 'no-cache, no-store, must-revalidate'
    }
  };
};
