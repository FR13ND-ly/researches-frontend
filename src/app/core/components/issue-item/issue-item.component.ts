import { DatePipe } from '@angular/common';
import { Component, input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'issue-item',
  imports: [RouterLink, DatePipe],
  templateUrl: './issue-item.component.html',
  styleUrl: './issue-item.component.scss'
})
export class IssueItemComponent implements OnInit {
  issue: any = input()
  category: any = ''

  ngOnInit(): void {
    console.log(this.issue())
    this.category = this.issue().category.replace('_', '-')
  }
}
