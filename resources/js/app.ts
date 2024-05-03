import './bootstrap';
import '../css/app.css';
import '../scss/index.scss';

import { createApp, h, DefineComponent } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob<DefineComponent>('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .use(Vue3Toastify, {
                autoclose: 1500,
                position: 'top-left',
            } as ToastContainerOptions)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
