import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[]=[
    new Quote(1,"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.","Marilyn Monroe","Ian Mwangi",new Date(2019,4,6)),
    new Quote(2,"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.","Bernard M. Baruch","John",new Date(2019,5,20))
  ];


  deleteQuote(isRead, index){
    if (isRead){
      this.quotes.splice(index,1)
    }
  }

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  constructor() { }

  ngOnInit() {
  }

}
