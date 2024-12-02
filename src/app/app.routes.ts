import { Routes } from '@angular/router';
import { listenerCount } from 'node:events';
import { HeaderComponent } from './core/components/header/header.component';

export const routes: Routes = [
    {path: '', component: HeaderComponent}
];
