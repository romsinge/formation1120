import { NgModule } from '@angular/core';
import { Route, RouterModule } from "@angular/router";
import { PoneyCreateComponent } from './components/poney-create/poney-create.component';
import { RaceCreateComponent } from './components/race-create/race-create.component';
import { RaceListComponent } from './components/race-list/race-list.component';
import { RaceComponent } from './components/race/race.component';

const APP_ROUTES: Route[] = [
    {
        path: 'race/:id',
        component: RaceComponent
    },
    {
        path: 'race-list',
        component: RaceListComponent
    },
    {
        path: 'race-create',
        component: RaceCreateComponent
    },
    {
        path: 'poney-create',
        component: PoneyCreateComponent
    },
    {
        path: '**',
        redirectTo: 'race-list'
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(APP_ROUTES)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}