import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component'
import { SelectComponent } from './components/select/select.component'
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component'
import { DateSelectorComponent } from './components/date-selector/date-selector.component'

const routes: Routes = [
    {
      path: '',
      redirectTo: '/components',
      pathMatch: "full"
    },
    {
        path: "components",
        component: HomeComponent
    },
    {
        path: "components/select",
        component: SelectComponent
    },
    {
        path: "components/dialog",
        component: ConfirmDialogComponent
    },
    {
        path: "components/date-picker",
        component: DateSelectorComponent
    }

  ]

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: false })
    ],
    exports: [
        RouterModule
    ],
    providers: []
})

export class RouteModule {}