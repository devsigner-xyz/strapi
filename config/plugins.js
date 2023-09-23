module.exports = ({ env }) => ({
  "users-permissions": {
    config: {
      jwtSecret: env("JWT_SECRET"),
    },
    "strapi-plugin-populate-deep": {
      config: {
        defaultDepth: 3,
      },
    },
  },
});
