import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from '../authentication.guard';
import { CartcomponentComponent } from './cartcomponent/cartcomponent.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { RegisterComponent } from './register/register.component';
import { ShippingComponent } from './shipping/shipping.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,canActivate:[AuthenticationGuard]
  },
  {
    path: '',
    redirectTo:'register',
    pathMatch: 'full',
  },
  {
    path: 'create',
    component: CreateComponent,
  },
  {
    path: 'edit/:id',
    component: EditComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path:'cart',
    component:CartcomponentComponent
  },
  {
    path:'shipping/:id',
    component:ShippingComponent
  },
  {
    path:'payment',
    component:PaymentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FruitsRoutingModule {}
