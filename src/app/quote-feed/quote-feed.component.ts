import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-feed',
  templateUrl: './quote-feed.component.html',
  styleUrls: ['./quote-feed.component.css']
})
export class QuoteFeedComponent implements OnInit {

  @Input() quote: Quote;
  @Output() isRead = new EventEmitter<boolean>();

  quoteDelete(read:boolean){
    this.isRead.emit(read);
  }
  numberoflikes : number=0
  numberofdislikes : number=0
  upVote(){
    this.numberoflikes++;
  }
  downVote(){
    this.numberofdislikes++;
  }
  constructor() { }

  ngOnInit() {
  }

}
