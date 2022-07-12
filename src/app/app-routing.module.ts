import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcatComponent } from './addcat/addcat.component';
import { OpenCatComponent } from './openCat/openCat.component';

const routes: Routes = [
  { path: '', component: AddcatComponent },
  { path: 'opend', component: OpenCatComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
