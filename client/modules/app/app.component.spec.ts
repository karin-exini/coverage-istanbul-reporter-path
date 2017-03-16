import {TestBed} from '@angular/core/testing'
import {AppComponent} from 'modules/app/app.component'

describe('app', () => {

    beforeEach(() => {
        let logServiceStub = {}

        TestBed.configureTestingModule({
            declarations: [AppComponent]
        })
    })

    it('shound start AppComponent', () => {
        let appComp = TestBed.createComponent(AppComponent)
        expect(appComp.componentInstance instanceof AppComponent).toBe(true,'shoud create AppComponent')
    })

})