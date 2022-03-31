import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorComponent } from './components/color/color.component';
import { ResultComponent } from './components/result/result.component';
import { TextComponent } from './components/text/text.component';

const routes: Routes = [
  { path: '', redirectTo: '/text', pathMatch: 'full' },
  { path: 'text', component: TextComponent },
  { path: 'color', component: ColorComponent },
  { path: 'result', component: ResultComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
