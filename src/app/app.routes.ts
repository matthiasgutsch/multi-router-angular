import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: 'user',
        loadComponent: () =>
          import('./user-list/user-list-component').then(
            (c) => c.UserListComponent
          ),
      },

      {
        path: 'post/:id',
        outlet: 'post',
        loadComponent: () =>
          import('./post-list/post-list.component').then(
            (c) => c.PostListComponent
          ),
      },

      {
        path: 'comment/:id',
        outlet: 'comment',
        loadComponent: () =>
          import('./comment-list/comment-list.component').then(
            (c) => c.CommentListComponent
          ),
      },

      {
        path: '',
        redirectTo: 'user',
        pathMatch: 'full',
      },
];
