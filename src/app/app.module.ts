import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {FlashMessageModule} from 'angular-flash-message';
import { FlashMessagesModule } from 'angular2-flash-messages';
// import { StorageServiceModule } from 'angular-webstorage-service';
import{HttpModule} from '@angular/http';
import { Routes,RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './auth/product/product.component';
import { PostComponent } from './auth/post/post.component';
import { CompanyPageComponent } from './company-page/company-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { CompanyComponent } from './auth/company/company.component';
import {FormsModule} from '@angular/forms';
import { AuthService } from './services/auth.service';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { CompanyListingComponent } from './company-listing/company-listing.component';
import { FeedListingComponent } from './feed-listing/feed-listing.component';
import { Header2Component } from './header2/header2.component';
import { StorageServiceModule} from 'angular-webstorage-service';
import { EditProductComponent } from './edit/edit-product/edit-product.component';
import { AuthGuard } from './auth.guard';
import { LoginAuthGuard } from './login-auth.guard';
const appRoutes:Routes=[
  {path:'',component:ProductListingComponent, canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent, canActivate:[LoginAuthGuard]},
  {path:'signup',component:SignupComponent, canActivate:[LoginAuthGuard]},
  {path:'product',component:ProductComponent, canActivate:[AuthGuard]},
  {path:'company',component: CompanyComponent, canActivate:[AuthGuard] },
  {path:'post',component:PostComponent, canActivate:[AuthGuard]},
  {path:'company_page',component:CompanyPageComponent , canActivate:[AuthGuard]},
  {path:'UserPage/:UserName',component:UserPageComponent, canActivate:[AuthGuard]},
  {path:'ProductPage',component:ProductPageComponent, canActivate:[AuthGuard]},
  {path:'product_listing',component:ProductListingComponent , canActivate:[AuthGuard]},
  {path:'company_listing',component:CompanyListingComponent, canActivate:[AuthGuard] },
  {path:'feed_listing',component:FeedListingComponent , canActivate:[AuthGuard]},
  {path:'product_edit/:_id',component:EditProductComponent , canActivate:[AuthGuard]}
 

]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    ProductComponent,
    PostComponent,
    CompanyPageComponent,
    UserPageComponent,
    ProductPageComponent,
    CompanyComponent,
    ProductListingComponent,
    CompanyListingComponent,
    FeedListingComponent,
    Header2Component,
    EditProductComponent,
    
     
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule,
    StorageServiceModule,
      FlashMessagesModule.forRoot(),
  ],
  providers: [AuthService ,AuthGuard, LoginAuthGuard],
  bootstrap: [AppComponent]

})

export class AppModule { }
