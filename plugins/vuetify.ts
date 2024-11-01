// plugins/vuetify.ts
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    icons: {
      defaultSet: 'mdi',  // Sets mdi as the default icon set
    },
    // Add any other configurations here if needed
  })
  app.vueApp.use(vuetify)
})
