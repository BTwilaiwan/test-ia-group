import { Component, OnInit } from '@angular/core';
import { first, last } from 'lodash';

@Component({
  selector: 'app-question-five',
  templateUrl: './question-five.component.html',
  styleUrls: ['./question-five.component.scss']
})
export class QuestionFiveComponent implements OnInit {

  public tree: any;

  constructor() {}

  ngOnInit() {
    var max = 4;
    var result = '';
    for (var i = 0; i <= max; i++ ) {
      var txtRow = '';
      for(var col = 0; col < i; col++) {
        txtRow += i + '' + i;
        txtRow = txtRow.substring(0,1) + '*'.repeat(txtRow.length-2) + txtRow.substring(txtRow.length-1);
      }
      result += txtRow + '\n';
    }
    for (var j = 3; j >= 0; j-- ) {
      var txtRow1 = '';
      for(var col = 0; col < j; col++) {
        txtRow1 += j + '' + j;
        txtRow1 = txtRow1.substring(0,1) + '*'.repeat(txtRow1.length-2) + txtRow1.substring(txtRow1.length-1);
      }
      result += txtRow1 + '\n';
    }
    this.tree = result;
  }
}
