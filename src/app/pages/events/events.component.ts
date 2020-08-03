import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  cards = [
    {
      title: 'Card Title 1',
      subtitle:'Card SubTitle1',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
    },
    {
      title: 'Card Title 2',
      subtitle:'Card SubTitle2',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
    },
    {
      title: 'Card Title 3',
      subtitle:'Card SubTitle1',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
    },
    {
      title: 'Card Title 4',
      subtitle:'Card SubTitle1',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
    },

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
