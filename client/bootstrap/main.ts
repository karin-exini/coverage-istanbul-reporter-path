import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { enableProdMode } from '@angular/core'
import AppComponent from 'modules/app/app.component'

if (process.env.NODE_ENV === 'production') {
    enableProdMode()
}

platformBrowserDynamic().bootstrapModule(AppComponent)