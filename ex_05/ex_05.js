const { createApp, ref } = Vue;

createApp({
  setup() {
    const message = ref('');

    const updateTime = () => {
      const nowo = new Date();
      message.value = nowo.toLocaleTimeString("fr-FR");
    };
    updateTime();
    setInterval(updateTime, 100);
    return {
      message
    };
  }
}).mount("#app");