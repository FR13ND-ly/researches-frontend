import { Component } from '@angular/core';
import { AnnalItemComponent } from './ui/annal-item/annal-item.component';
import { HeaderComponent } from '../../core/components/header/header.component';

@Component({
  selector: 'app-annals',
  imports: [AnnalItemComponent],
  templateUrl: './annals.component.html',
  styleUrl: './annals.component.scss'
})
export class AnnalsComponent {
  annals = [
    {
      title: 'Lingvistică',
      description: 'Description 1',
      image: 'https://louisville.edu/humanities/images/linguistics.png',
      link: '/linguistic',
    },
    {
      title: 'Literatură',
      description: 'Description 2',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUYBSHTruZAgZdYs-S-WITGtoOJAlovPOOHA&s',
      link: '/literature'
    },
    {
      title: 'Limbi și literaturi străine',
      description: 'Description 3',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      link: '/foreign-literature'
    }
  ]
}
