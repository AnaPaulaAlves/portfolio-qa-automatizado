const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

   viewportWidth: 412,
    viewportHeight: 915,
    video: true, // ✅ ativa gravação de vídeo
    screenshotOnRunFailure: true, // ✅ tira screenshot se algum teste falhar 
  },
});
