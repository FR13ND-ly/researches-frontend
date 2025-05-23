import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CategoryHeaderComponent } from '../../core/components/category-header/category-header.component';

@Component({
    selector: 'app-foreign-literature',
    imports: [CategoryHeaderComponent, RouterOutlet],
    templateUrl: './foreign-literature.component.html',
    styleUrl: './foreign-literature.component.scss',
    standalone: true
})
export class ForeignLiteratureComponent {

}
