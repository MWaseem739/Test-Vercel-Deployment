export default () => ({
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook:
        "https://api.vercel.com/v1/integrations/deploy/prj_t0A9A8VwLDGEUF2M14pfFlHAlQdX/JAJLRs684c",
      apiToken: "VQV8PXEsLKYj7ze4KKlOQB4j",
      appFilter: "test-vercel-deployment-ey2k",
      teamFilter: "mwaseem739s-projects",
      roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
    },
  },
});
