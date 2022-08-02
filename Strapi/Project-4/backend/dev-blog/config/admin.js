module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3fb48ab6a80e8bfb5fd844fb06659de5'),
  },
});
