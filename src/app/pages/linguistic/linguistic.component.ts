import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CategoryHeaderComponent } from '../../core/components/category-header/category-header.component';

@Component({
    selector: 'app-linguistics',
    imports: [CategoryHeaderComponent, RouterOutlet],
    templateUrl: './linguistic.component.html',
    styleUrl: './linguistic.component.scss',
    standalone: true
})
export class LinguisticComponent {

}
