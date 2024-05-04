import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { switchMap } from 'rxjs';
import { UserService } from '../user-service';

@Component({
  standalone: true,
  templateUrl: './comment-list.html',
  styleUrls: ['./comment-list.css'],
  imports: [NgFor, NgIf, AsyncPipe, RouterLink],
})
export class CommentListComponent {
  userService = inject(UserService);
  router = inject(ActivatedRoute);
  commentId: any;
  comments$ = this.router.paramMap.pipe(
    switchMap((value) => {
      this.commentId = value.get('id');
      return this.userService.getComments(value.get('id'));
    })
  );
}
