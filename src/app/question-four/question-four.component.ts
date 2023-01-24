import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { QuestionThreeService } from '../service/question-three.service';


@Component({
  selector: 'app-question-four',
  templateUrl: './question-four.component.html',
  styleUrls: ['./question-four.component.scss']
})
export class QuestionFourComponent implements OnInit {

  public qsFourForm!: FormGroup;
  public output: any;

  constructor(
    private fb: FormBuilder,
    private questionService: QuestionThreeService
  ) {}

  ngOnInit() {
    this.initForm();
  }

  async initForm() {
    this.qsFourForm = this.fb.group({
      citizenId: new FormControl({ value: '', disabled: false }),
    });
  }

  onChange() {
    try {
      const dataForm = this.qsFourForm.value;
      const data = {
        citizenId: dataForm.citizenId
      }
      this.questionService.postCitizen(data).subscribe((res: any) => {
        if(res.error_code === '200') {
          this.output = res.success
        }
      });
    } catch(error) {
      console.log(error)
    }
  }
}
