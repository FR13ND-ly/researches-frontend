import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './ui/sidebar/sidebar.component';
import { HeaderComponent } from './ui/header/header.component';

@Component({
    selector: 'app-admin',
    imports: [HeaderComponent, RouterOutlet, SidebarComponent],
    templateUrl: './admin.component.html',
    styleUrl: './admin.component.scss',
    standalone: true
})
export class AdminComponent {

}
