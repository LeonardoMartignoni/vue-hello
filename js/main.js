const app = Vue.createApp({
    data() {
        return {
            title: 'Hello Vue!',
            image: './img/micio.jpg'
        }
    }
})

app.mount('#root');