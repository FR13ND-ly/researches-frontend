import { Component } from '@angular/core';
import { HeaderComponent } from '../../core/components/header/header.component';

@Component({
    selector: 'app-not-found',
    imports: [HeaderComponent],
    templateUrl: './not-found.component.html',
    styleUrl: './not-found.component.scss',
    standalone: true
})
export class NotFoundComponent {

}
