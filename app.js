import {
  createApp,
  ref,
  computed,
} from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  setup() {
    const favoriteAnimal = ref("");

    const isCat = computed (()=>{
      console.log(favoriteAnimal.value);
      return favoriteAnimal.value == "gatos"
    });

    return {
      favoriteAnimal,
      isCat,
    };
  },
}).mount("#app");
