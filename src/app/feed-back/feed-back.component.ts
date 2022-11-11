import { Component, OnInit } from '@angular/core';
import { NetworkService } from '../services/network.service';

@Component({
  selector: 'app-feed-back',
  templateUrl: './feed-back.component.html',
  styleUrls: ['./feed-back.component.scss']
})
export class FeedBackComponent implements OnInit {
  barValue: number = 0;
  barCount: number = 0;
  progress: number = 0;
  pageUrl = 0;
  dataToSave: any = { SaleInvoiceId: undefined, ClientInformationId: undefined, Feedback: [] = [] };
  data: any;
  // data: any = [
  //   {
  //     progress: false,
  //     question: {
  //       text: "1. How was the customer Service?",
  //       options: [
  //         {
  //           id: 1,
  //           feedback: "EXCELLENT",
  //           emoji: '😍',
  //           checked: false
  //         },
  //         {
  //           id: 2,
  //           feedback: "GOOD",
  //           emoji: '😄',
  //           checked: false
  //         },
  //         {
  //           id: 3,
  //           feedback: "SATISFY",
  //           emoji: '😏',
  //           checked: false
  //         },
  //         {
  //           id: 4,
  //           feedback: "POOR",
  //           emoji: '😡',
  //           checked: false
  //         },
  //       ],
  //       products: []
  //     }
  //   },
  //   {
  //     progress: false,
  //     question: {
  //       text: "2. How was the quality & taste of food?",
  //       options: [
  //         {
  //           id: 1,
  //           feedback: "EXCELLENT",
  //           emoji: '😍',
  //           checked: false
  //         },
  //         {
  //           id: 2,
  //           feedback: "GOOD",
  //           emoji: '😄',
  //           checked: false
  //         },
  //         {
  //           id: 3,
  //           feedback: "SATISFY",
  //           emoji: '😏',
  //           checked: false
  //         },
  //         {
  //           id: 4,
  //           feedback: "POOR",
  //           emoji: '😡',
  //           checked: false
  //         },
  //       ],
  //       products: [
  //         {
  //           product_id: 1,
  //           product_name: 'Zinger Burgers (Deal 1)',
  //           img: 'https://c-va.niceshops.com/upload/image/banner/original/default/17840.jpg',
  //         }
  //       ]
  //     }
  //   },
  //   {
  //     progress: false,
  //     question: {
  //       text: "2. How was the quality & taste of food?",
  //       options: [
  //         {
  //           id: 1,
  //           feedback: "EXCELLENT",
  //           emoji: '😍',
  //           checked: false
  //         },
  //         {
  //           id: 2,
  //           feedback: "GOOD",
  //           emoji: '😄',
  //           checked: false
  //         },
  //         {
  //           id: 3,
  //           feedback: "SATISFY",
  //           emoji: '😏',
  //           checked: false
  //         },
  //         {
  //           id: 4,
  //           feedback: "POOR",
  //           emoji: '😡',
  //           checked: false
  //         },
  //       ],
  //       products: [
  //         {
  //           product_id: 1,
  //           product_name: 'Zinger Burgers (Deal 1)',
  //           img: 'https://c-va.niceshops.com/upload/image/banner/original/default/17840.jpg',
  //         }
  //       ]
  //     }
  //   },
  //   {
  //     progress: false,
  //     question: {
  //       text: "1. How was the customer Service?",
  //       options: [
  //         {
  //           id: 1,
  //           feedback: "EXCELLENT",
  //           emoji: '😍',
  //           checked: false
  //         },
  //         {
  //           id: 2,
  //           feedback: "GOOD",
  //           emoji: '😄',
  //           checked: false
  //         },
  //         {
  //           id: 3,
  //           feedback: "SATISFY",
  //           emoji: '😏',
  //           checked: false
  //         },
  //         {
  //           id: 4,
  //           feedback: "POOR",
  //           emoji: '😡',
  //           checked: false
  //         },
  //       ],
  //       products: []
  //     }
  //   },
  // ]

  constructor(public network: NetworkService) { }

  ngOnInit(): void {
    this.getData();
    this.data = this.network.data;
    // this.formData.Questions[0].Options.map()
    console.log("form data", this.data);

    this.progress = Math.round((100 / this.data.Questions.length) * this.barCount);
  }

  async getData() {
    const data = await this.network.getFormData();
    console.log("data", data);

  }


  submitForm() {
    console.log("submit", this.data);
  };


  progressFunc() {

    this.barValue += 50;
    this.barCount += Number(1);
    this.progress = Math.round((100 / this.data.Questions.length) * this.barCount);
    console.log("progress", this.progress);

    // if (
    //   document.querySelectorAll(".progress").length > 0 &&
    //   document.querySelectorAll(`.progress [data-progress]`).length > 0
    // ) {
    //   document
    //     .querySelectorAll(`.progress [data-progress]`)
    //     .forEach((x) => this.AnimateProgress(x));
    // }
  }

  // AnimateProgress(el: any) {
  //   el.className = "animate-progress";
  //   el.setAttribute(
  //     "style",
  //     `--animate-progress:${this.barValue}%;`
  //   );
  // }

  selectedOption(event: any, question: any, option: any, i: number) {
    // console.log("event", i);
    console.log("opt", option);
    // console.log("formData", this.data);
    console.log("question", question);
    
    let existingquestionIndex = this.dataToSave.Feedback.findIndex((ele: any) => { return ele['FeedbackQuestionId'] == question.FeedbackQuestionId });
    if (existingquestionIndex != -1) {
      this.dataToSave.Feedback.splice(existingquestionIndex, 1);
    }
    let selectedOption = { FeedbackQuestionId: question.FeedbackQuestionId, FeedbackOption: { FeedbackOptionId: option.FeedbackOptionId, ProductItemId: option.ProductItemId, Comment: option.Comment } }
    this.dataToSave.Feedback.push(selectedOption);
    
    console.log("dataToSave", this.dataToSave);



    console.log("selectedOption", selectedOption);
    


    // this.data.question.options.map((item: any) => {
    //   item.checked = false;
    // });
    // option.checked = true;
    // if(!this.data[i].progress){
    //   this.progressFunc();
    // };
    // this.pageUrl++;
    // window.location.href = `#question${this.pageUrl}`;
    // this.data[i].progress = true;

  }


}
