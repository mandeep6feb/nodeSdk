import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UrlTestComponent } from './url-test/url-test.component';
import { WebSiteComponent } from './web-site/web-site.component';

const routes: Routes = [
  {path: '', component: UrlTestComponent},
  {path: 'sita', component: WebSiteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
