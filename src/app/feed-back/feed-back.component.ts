import { Component, OnInit } from '@angular/core';
import { NetworkService } from '../services/network.service';

@Component({
  selector: 'app-feed-back',
  templateUrl: './feed-back.component.html',
  styleUrls: ['./feed-back.component.scss']
})
export class FeedBackComponent implements OnInit {
  barCount: number = 0;
  progress: number = 0;
  error: boolean = false;
  pageUrl = 0;
  dataToSave: any = { SaleInvoiceId: undefined, ClientInformationId: undefined, Feedback: [] = [] };
  data: any;
  selectedOptions: any;
  SaleInvoiceId: number = 0;
  productCount: number = 0;
  suggestion: string = '';
  selectedProductWithImg: any[] = [];
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
    console.log("form data", this.data);
    this.dataToSave.SaleInvoiceId = this.SaleInvoiceId;
  }

  async getData() {
    const data = await (await this.network.getFormData()).subscribe((x: any) => {
      console.log("data", x);
    });

  }



  progressFunc() {

    this.barCount += Number(1);
    let products = this.data.Questions.map((question: any) => {
      if (question.Products && question.Products.length > 0) {
        this.productCount = question.Products.length;
      }
    });
    this.progress = Math.round((100 / (this.data.Questions.length + this.productCount)) * this.barCount);
    console.log("progress", this.progress);
  }


  selectedOption(event: any, question: any, option: any, index: any) {
    console.log("opt", option);
    console.log("question", question);
    let existingquestionIndex = this.dataToSave.Feedback.findIndex((ele: any) => { return ele['FeedbackQuestionId'] == option.FeedbackQuestionId && ele.ProductIndex == option.ProductIndex });
    if (existingquestionIndex != -1) {
      this.dataToSave.Feedback.splice(existingquestionIndex, 1);
    }else{
    this.progressFunc();
    }
    this.selectedOptions = { FeedbackQuestionId: option.FeedbackQuestionId, FeedbackOption: { FeedbackOptionId: option.FeedbackOptionId, ProductItemId: question.ProductItemId, Comment: option.Comment } }
    this.dataToSave.Feedback.push(this.selectedOptions);

    // Work For check mark 
    question.Options.map((singleQuestion: any) => {
      singleQuestion.checked = false;
    });
    option.checked = true;
  }

  // fOR PRODUCT WITH IMAGES

  selectedProductOption(event: any, question: any, option: any, index: any) {
    let existingquestionIndex = this.selectedProductWithImg.findIndex((ele: any) => { return ele.ProductIndex == option.ProductIndex });
    console.log("existingquestionIndex", existingquestionIndex);
    if (existingquestionIndex != -1) {
      this.selectedProductWithImg.splice(existingquestionIndex, 1);
    }else{
      this.progressFunc();
    };
    this.selectedProductWithImg.push(option);
    console.log("selectedProductWithImg", this.selectedProductWithImg);
    // Work For check mark 
    question.Options.map((singleQuestion: any) => {
      singleQuestion.checked = false;
    });
    option.checked = true;
  }

  submitForm() {
    console.log("dataToSave", this.dataToSave);
    if (this.suggestion.length > 0) {
      this.progressFunc();
      console.log("products", this.selectedProductWithImg);
      
    } else {
      this.error = true;
      setTimeout(() => {
        this.error = false;
      }, 2000);
    }
  };


}
