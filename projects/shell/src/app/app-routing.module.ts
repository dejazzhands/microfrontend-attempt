import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';


const routes: Routes = [
  {
    path: 'salesorder',
    // loadChildren: () => import('salesorder/Module').then(m => m.Module),
    loadChildren: () => loadRemoteModule({
      // remoteEntry: 'https://localhost:3000/remoteEntry.js',
      remoteName: 'salesorder',
      exposedModule: './Module'
    })
    .then(m => m.Module)
  },
  {
    path: 'oms-master',
    // loadChildren: () => import('oms-master/Module').then(m => m.InvoiceModule),
    loadChildren: () => loadRemoteModule({
      remoteEntry: 'https://localhost:2000/remoteEntry.js',
      remoteName: 'oms-master',
      exposedModule: './Module'
    })
    .then(m => m.InvoiceModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
