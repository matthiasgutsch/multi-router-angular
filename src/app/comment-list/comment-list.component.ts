import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { switchMap } from 'rxjs';
import { UserService } from '../user-service';

@Component({
  standalone: true,
  templateUrl: './comment-list.html',
  styleUrls: ['./comment-list.css'],
  imports: [NgFor, NgIf, AsyncPipe, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class CommentListComponent {
  userService = inject(UserService);
  router = inject(ActivatedRoute);
  userId: any;
  
  comments$ = this.router.paramMap.pipe(
    switchMap((value) => {
      this.userId = value.get('userId');
      return this.userService.getComments(value.get('id'));
    })
  );

  
}
