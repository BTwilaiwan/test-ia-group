import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { QuestionThreeService } from '../service/question-three.service';

@Component({
  selector: 'app-question-three',
  templateUrl: './question-three.component.html',
  styleUrls: ['./question-three.component.scss']
})
export class QuestionThreeComponent implements OnInit {

  public areaForm!: FormGroup;
  public output: any;

  constructor(
    private fb: FormBuilder,
    private questionService: QuestionThreeService
  ) {}

  ngOnInit() {
    this.initForm();
    this.postArea();
  }

  async initForm() {
    this.areaForm = this.fb.group({
      base: new FormControl({ value: '5', disabled: false }),
      height: new FormControl({ value: '3', disabled: false }),
    });
    await this.postArea();
  }

  postArea() {
    try {
      const dataForm = this.areaForm.value;
      const data = {
        base: dataForm.base ? Number(dataForm.base) : undefined,
        height: dataForm.height ? Number(dataForm.height) : undefined
      }
      this.questionService.postArea(data).subscribe((res: any) => {
        if(res.result.resultCode === 200) {
          this.output = res.result.data
        }
      });
    } catch(error) {
      console.log(error)
    }
  }
}
