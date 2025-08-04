exports.handler = async (event, context) => {
  // Generate random number between 1 and 3
  const randomNum = Math.floor(Math.random() * 3) + 1;
  
  // Your Netlify site URL (you'll need to update this)
  const logoUrl = `lively-speculoos-b06e97.netlify.app/logo${randomNum}.png`;
  
  return {
    statusCode: 302,
    headers: {
      'Location': logoUrl,
      'Cache-Control': 'no-cache, no-store, must-revalidate'
    }
  };
};
