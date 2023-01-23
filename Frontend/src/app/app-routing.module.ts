import { NgModule, InjectionToken } from '@angular/core';
import { Routes, RouterModule, ActivatedRouteSnapshot } from '@angular/router';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';


const externalUrlProvider = new InjectionToken('externalUrlRedirectResolver');
const deactivateGuard = new InjectionToken('deactivateGuard');

const routes: Routes = [   
  
  //{ path: 'index.html', redirectTo:'/appui', pathMatch: 'full'},  

/*  
  { 
    path: '', 
    component: DeclistComponent, 
    canDeactivate: [deactivateGuard]
  },
  { 
    path: 'index.html', 
    component: DeclistComponent, 
    canDeactivate: [deactivateGuard]
  }, 
*/  

  { 
    path: '', 
    component: AppComponent, 
    canDeactivate: [deactivateGuard]
  },
  { 
    path: 'index.html', 
    component: AppComponent, 
    canDeactivate: [deactivateGuard]
  },  

  {
    path: 'externalRedirect',
    canActivate: [externalUrlProvider],    
    component: AppComponent,
    canDeactivate: [deactivateGuard]
  },
  { path: '**', component: NotFoundComponent }
];



@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [
    {
        provide: externalUrlProvider,
        useValue: (route: ActivatedRouteSnapshot) => {
            
            const externalUrl = route.paramMap.get('externalUrl');
            console.log('Call window.open.. externalUrl=' + externalUrl);
            window.open(externalUrl, '_blank');
        },
    },
    {
      provide: deactivateGuard,
      useValue: () => {
        console.log('Guard function is called!')
        
        return true;
      }
    },
]

})

export class AppRoutingModule { }
