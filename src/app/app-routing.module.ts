/* Angular imports */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/* App imports */
import { ReviewsComponent } from './reviews/reviews.component';

const routes: Routes = [
  { path: 'reviews', component: ReviewsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
