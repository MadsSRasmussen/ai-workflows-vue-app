import type  { App } from 'vue';

import Button from 'primevue/button';
import Checkbox from 'primevue/checkbox';
import InputText from 'primevue/inputtext';

export function addPrimevueComponents(app: App) {

    app.component('Button', Button);
    app.component('Checkbox', Checkbox);
    app.component('InputText', InputText);

}