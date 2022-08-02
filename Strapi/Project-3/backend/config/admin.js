module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ad8348cbbc576f150e1e72046edc84ba'),
  },
});
