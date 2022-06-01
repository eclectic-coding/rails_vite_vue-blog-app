console.log('Vite ⚡️ Rails');
console.log('Visit the guide for more information: ', 'https://vite-ruby.netlify.app/guide/rails');

// Example: Load Rails libraries in Vite.
//
// import * as Turbo from '@hotwired/turbo'
// Turbo.start()
//
// import ActiveStorage from '@rails/activestorage'
// ActiveStorage.start()
//
// // Import all channels.
// const channels = import.meta.globEager('./**/*_channel.js')

// Example: Import a stylesheet in app/frontend/index.css
import './application.css';
import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { resolvePage } from "./pages";
import api from "../api"

createInertiaApp({
    resolve: resolvePage,
    setup({el, App, props, plugin}) {
        const VueApp = createApp({render: () => h(App, props)});

        VueApp.config.globalProperties.$api = api

        VueApp.use(plugin)
            .mount(el);
    },
});
