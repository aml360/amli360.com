import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('./modules/public/public/public.module').then(m => m.PublicModule),
	},
	{
		path: 'about-me',
		loadChildren: () => import('./modules/about-me/about-me.module').then(m => m.AboutMeModule),
	},
	{
		path: 'games',
		loadChildren: () => import('./modules/games/games.module').then(m => m.GamesModule),
	},
	{
		path: '**',
		redirectTo: '/',
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
