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
const appRoutes:Routes=[
  {path:'',component:ProductListingComponent  },
  {path:'login',component:LoginComponent },
  {path:'signup',component:SignupComponent },
  {path:'product',component:ProductComponent },
  {path:'company',component: CompanyComponent },
  {path:'post',component:PostComponent },
  {path:'company_page',component:CompanyPageComponent },
  {path:'UserPage/:UserName',component:UserPageComponent },
  {path:'ProductPage',component:ProductPageComponent },
  {path:'product_listing',component:ProductListingComponent },
  {path:'company_listing',component:CompanyListingComponent },
  {path:'feed_listing',component:FeedListingComponent },
  {path:'product_edit/:_id',component:EditProductComponent }
 

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
  providers: [AuthService],
  bootstrap: [AppComponent]

})

export class AppModule { }
