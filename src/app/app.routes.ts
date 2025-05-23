import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./core/components/layout/layout.component').then(m => m.LayoutComponent),
        children: [
            {
                path: '',
                loadComponent: () => import('./pages/landing-page/landing-page.component').then(m => m.LandingPageComponent)
            },
            {
                path: 'contact',
                loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent)
            },
            {
                path: 'annals',
                loadComponent: () => import('./pages/annals/annals.component').then(m => m.AnnalsComponent)
            },
            {
                path: 'sponsors',
                loadComponent: () => import('./pages/sponsors/sponsors.component').then(m => m.SponsorsComponent)
            },
            {
                path: 'submissions/authors',
                loadComponent: () => import('./pages/submission-for-authors/submission-for-authors.component').then(m => m.SubmissionForAuthorsComponent)
            },
            {
                path: 'submissions/reviewers',
                loadComponent: () => import('./pages/submission-for-reviewers/submission-for-reviewers.component').then(m => m.SubmissionForReviewersComponent)
            }
        ]
    },
    {
        path: 'linguistic',
        loadChildren: () => import('./pages/linguistic/linguistic.module').then(m => m.LinguisticModule)
    },
    {
        path: 'literature',
        loadChildren: () => import('./pages/literature/literature.module').then(m => m.LiteratureModule)
    },
    {
        path: 'foreign-literature',
        loadChildren: () => import('./pages/foreign-literature/foreign-literature.module').then(m => m.ForeignLiteratureModule)
    },
    {
        path: 'admin',
        loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule)
    },
    {
        path: '**',
        loadComponent: () => import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent)
    }
];
