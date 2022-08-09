module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0ab28858967227a8a5d9584d5cd5845a'),
  },
});
