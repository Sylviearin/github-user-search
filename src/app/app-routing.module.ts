import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SearchComponent} from './search/search.component';
import {HistoryComponent} from './history/history.component';
import {ErrorComponent} from './error/error.component';

const routes: Routes = [
  {path: '', component: SearchComponent},
  {path: 'history', component: HistoryComponent},
  {path: 'error', component: ErrorComponent},
  {path: '**', redirectTo: 'error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
