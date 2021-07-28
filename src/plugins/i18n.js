import Vue from 'vue';
import VueI18n from 'vue-i18n';

const messages = {
  en: {
    message: {
      hello:'Hello world!',
    }
  },
  ru: {
    message: {
      hello:'Привет мир!',
    }
  },
  am: {
    message: {
      hello:'Բարև!',
    }
  }
}
Vue.use(VueI18n);
export default new VueI18n({
  locale:'ru',
  fallbackLocale:'en',
  messages
})
