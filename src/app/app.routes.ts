import { Routes } from '@angular/router';
import { HomePageComponent } from './component/home-page/home-page.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { DeferrableViewsComponent } from './component/deferrable-views/deferrable-views.component';
import { BuiltInControlFlowComponent } from './component/built-in-control-flow/built-in-control-flow.component';
import { FreshNewLookComponent } from './component/fresh-new-look/fresh-new-look.component';
import { SignalsComponent } from './component/signals/signals.component';
import { Ng16Component } from './component/ng-16/ng-16.component';
import { TodoComponent } from './component/todo/todo.component';

export const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'deferrable-views', component: DeferrableViewsComponent },
  { path: 'built-in-control-flow', component: BuiltInControlFlowComponent },
  { path: 'fresh-new-look', component: FreshNewLookComponent },
  { path: 'ng16', component: Ng16Component },
  { path: 'todo', component: TodoComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
