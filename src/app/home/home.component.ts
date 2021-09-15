import { Component, OnInit } from '@angular/core';
import {Question} from '../shared/question';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar) { }

  question :Array<Question>;
  qno: number;
  answer: '';
  correct : number;
  totalQuestion : number = 0;
  ngOnInit(): void {
  }

  onSubmit(){
    if(this.question[this.qno].correct_answer.toLocaleLowerCase() == this.answer.toLocaleLowerCase())
    {
      this.correct ++;
      this._snackBar.open('Correct Answer', '', {
        duration: 4000,
        panelClass: ['success-message'],
        verticalPosition: 'top',
      });
    }
    else
    {
      this._snackBar.open('Wrong Answer', '', {
        duration: 4000,
        panelClass: ['warning-message'],
        verticalPosition: 'top',
      });
    }
    this.answer = null;
    this.qno++;
    if(this.qno == this.totalQuestion)
    {
      this.completed();
    }
  }

  getStarted(){
    this.qno = 0;
    this.correct = 0;
    this.question = [
      {
        question_text: 'Who is our current prime minister of india ?',
        options: ['Jawaharlal Nehru','Manmohan Singh','Narendra Modi','Rajiv Gandhi'],
        correct_answer: 'Narendra Modi'
      },
      {
        question_img: 'https://thefederal.com/file/2019/11/Nehru-lead-696x444.jpg',
        question_text: 'Identify the person.',
        correct_answer: 'Jawaharlal Nehru'
      },
      {
        question_text: 'Who is the first Indian to fly in space ?',
        correct_answer: 'Rakesh Sharma'
      },
      {
        question_text: 'Identify the Personality.',
        question_img: 'https://s.france24.com/media/display/6aaac352-163c-11ea-9c6b-005056bff430/w:1280/p:16x9/ALPHABET-GOOGLE.webp',
        correct_answer: 'Sundar Pichai',
        options: ['Steve Jobs','Sundar Pichai','Elon Musk','Satya Nadella']
      },
    ];
    this.totalQuestion = this.question.length;
  }

  completed(){
    this.question = null;
  }

  restart(){
    window.location.reload();
  }

}
