module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e4350524b0689fc3f46e2407dae950e2'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'AA+4Bvhsy1Gu0DA1+ZQoFOL/R19ipJDlcOhxVlvvbXFJUMv5Abc47KkehxgWC03O'),
  },

});