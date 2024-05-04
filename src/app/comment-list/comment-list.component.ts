import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { UserService } from '../user-service';

@Component({
  standalone: true,
  templateUrl: './comment-list.html',
  styleUrls: ['./comment-list.css'],
  imports: [NgFor, NgIf, AsyncPipe],
})
export class CommentListComponent {
  userService = inject(UserService);
  router = inject(ActivatedRoute);
  comments$ = this.router.paramMap.pipe(
    switchMap((value) => {
      return this.userService.getComments(value.get('id'));
    })
  );
}
